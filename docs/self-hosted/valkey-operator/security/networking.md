---
title: Networking and ports
description: Every network connection the operator and its Valkey clusters make, the ports and TLS posture of each, and how to write NetworkPolicies around them.
sidebar_position: 5
---

# Networking and ports

This page is the operator's network contract: every connection that exists at runtime, who initiates it, on which port, and with what encryption and authentication. It is written for platform and security engineers designing NetworkPolicies or reviewing the deployment's network exposure. For the application developer's view of connecting, see [Connecting to your cluster](../team-guide/connecting.md).

## The connection matrix

| # | Connection | Port | TLS | Authentication |
|---|---|---|---|---|
| 1 | Application clients → Valkey pods | TCP 6379 | If the cluster has `spec.tls` | ACL user credentials; see [ACLs](acls.md) |
| 2 | Valkey pod ↔ Valkey pod (cluster bus) | TCP 16379 | Forced on for TLS clusters (`tls-cluster yes`) | Cluster bus protocol |
| 3 | Valkey pod → its primary (replication) | TCP 6379 | Forced on for TLS clusters (`tls-replication yes`) | The `_momento_repl` system user |
| 4 | Operator → Valkey pods | TCP 6379 | If the cluster has `spec.tls` | The `_momento_operator` system user |
| 5 | Operator → Kubernetes API server | Cluster-specific | Yes | The operator's ServiceAccount |
| 6 | Operator and Valkey pods → cluster DNS | UDP/TCP 53 | — | — |
| 7 | kubelet → Valkey pods (TLS clusters only) | TCP 6379 | TCP probe, no handshake | None; see the probe note below |

Details behind each row:

- **Client port 6379 in both modes.** A plaintext cluster listens on `port 6379`. A TLS cluster closes the plaintext listener (`port 0`) and serves TLS on the same number (`tls-port 6379`). There is never a mode with both, and the port number your clients use does not change when TLS is enabled.
- **Cluster bus 16379.** Node-to-node gossip and failure detection use the cluster bus; the operator declares 16379 (Valkey's convention of client port plus 10000) as the named `valkey-bus` port on every pod and on the Service. Application clients never use it.
- **The operator connects to pods directly**, never through the Service: by pod IP on plaintext clusters, and by per-pod DNS name on TLS clusters so the certificate hostname verifies. It authenticates as `_momento_operator` and presents no client certificate; the cluster runs `tls-auth-clients no`, so the server never requires client certificates (no mutual TLS is enforced). The [security model](index.md#per-cluster-system-users) lists both system users' exact grants.
- **Probes.** Plaintext clusters use an exec liveness probe (`valkey-cli PING` inside the container), which generates no network traffic. TLS clusters use a TCP socket probe on 6379, so the kubelet on each Kubernetes node opens connections to local Valkey pods.

## What listens where

Valkey pods expose exactly two ports, 6379 (`valkey`) and 16379 (`valkey-bus`). The rendered configuration forces `bind 0.0.0.0` and `protected-mode no`: the listener accepts connections from any source address, and access control is entirely ACLs plus, on TLS clusters, encryption. Network segmentation around the pods is your responsibility; the operator ships no NetworkPolicies.

The operator pod listens on **nothing**. It runs no metrics, health, or webhook endpoint and binds no port, so a NetworkPolicy can deny all ingress to the operator namespace without breaking anything. The operator needs only egress: to the Kubernetes API server, to Valkey pods on 6379 in every namespace that hosts clusters, and to cluster DNS. This also means there is no admission webhook in the network path: custom resource validation is CEL, evaluated inside the API server.

Each cluster's Service is headless (`clusterIP: None`) with ports 6379 and 16379. It exists for DNS, not for traffic: it load-balances nothing, and every connection a client makes lands on a pod IP directly. Filtering "traffic to the Service" therefore filters nothing; write policies against the pod labels below.

## Topology announcements and the cluster boundary

A cluster-aware client learns the cluster's topology from the nodes themselves, and what nodes announce determines who can reach them:

- **Plaintext clusters** announce pod IPs. `MOVED` redirects and topology queries return pod IPs on port 6379.
- **TLS clusters** announce per-pod DNS names of the form `{pod}.{cluster}.{namespace}.svc.cluster.local`, so redirects stay verifiable against the certificate's wildcard SAN.

Both are reachable and resolvable only inside the Kubernetes cluster's network. No mechanism exists to announce an externally reachable address: no LoadBalancer or NodePort integration, and no announce-address remapping. **Applications running inside the same Kubernetes cluster are the designed path.** A client outside the Kubernetes cluster cannot follow redirects to pod IPs or resolve cluster-internal DNS, so out-of-cluster access is not supported as shipped; it would require network infrastructure (flat pod routing plus DNS forwarding, or a proxy layer) that the operator neither provides nor manages.

## NetworkPolicies

Valkey pods carry a stable label set you can select on; [Labels and annotations](../reference/labels-annotations.md) states the guarantees. The examples below use the release-artifact install, where the operator runs in the `valkey-operator` namespace with pod label `app: valkey-operator`.

In each namespace that hosts Valkey clusters, admit clients, the operator, and intra-cluster traffic:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: valkey-ingress
  namespace: my-app
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: valkey
  policyTypes: ["Ingress"]
  ingress:
    # Application clients, port 6379 only. Adjust the selector to your workloads.
    - from:
        - podSelector:
            matchLabels:
              valkey-client: "true"
      ports:
        - port: 6379
    # The operator.
    - from:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: valkey-operator
          podSelector:
            matchLabels:
              app: valkey-operator
      ports:
        - port: 6379
    # Valkey node to node: replication (6379) and cluster bus (16379).
    - from:
        - podSelector:
            matchLabels:
              app.kubernetes.io/name: valkey
      ports:
        - port: 6379
        - port: 16379
```

If you also apply default-deny egress policies, allow the Valkey pods to reach each other on 6379 and 16379, and allow them DNS egress: nodes in a TLS cluster dial each other by the announced DNS names. The operator's namespace needs egress to the API server, to cluster DNS, and to port 6379 in every namespace that hosts clusters (select those namespaces however your platform labels them).

:::warning
On TLS clusters the liveness probe is a TCP connection from the kubelet, which originates outside any pod. Most CNIs exempt kubelet probe traffic from NetworkPolicy enforcement, but this is CNI-specific behavior. If a default-deny ingress policy catches probe traffic in your CNI, the kubelet kills the pods as unhealthy; verify probes still pass after applying the policy.
:::

There is one cross-namespace flow to preserve above all: **operator → Valkey pods on 6379**. If a policy blocks it, running clusters keep serving traffic, but every operator function stops converging: bootstraps stall, failed primaries are not replaced, and ACL and TLS changes stop propagating. The failure shows up in operator logs as connection errors, not in cluster status; see [Troubleshooting](../operations/troubleshooting.md).
