---
title: Architecture
description: "The Momento Valkey Operator at runtime: one deployment, four control loops, the objects it owns, how clients discover topology, and what it deliberately does not manage."
sidebar_position: 3
---

# Architecture

This page describes what actually runs when the Momento Valkey Operator is installed: the operator process itself, its four control loops, the Kubernetes objects it creates for each Valkey cluster, and the boundaries of its responsibility. It is for anyone evaluating or operating the system; no prior page is required, though [Resource model](resource-model.md) explains the resources these loops act on.

## The operator deployment

The operator is a single Deployment (`valkey-operator`, in the `valkey-operator` namespace when installed from the release manifest) running **one replica**. It has **no leader election**: the single replica is the concurrency control. It runs from a distroless container image, is configured at startup through environment variables fed by the `valkey-operator-config` ConfigMap (see [Operator configuration](../reference/operator-configuration.md)), and emits structured JSON logs.

One replica is not the liability it would be for a data plane, because the operator is not on the data path. Valkey clusters serve traffic entirely on their own; the operator only converges them toward their declared specs. If the operator is down, running Valkey clusters keep serving. See [Why this architecture holds up](#why-this-architecture-holds-up) below.

## Four control loops

The operator process runs four independent controllers. Each is described here by its observable behavior.

| Controller | Trigger | Responsibility |
|---|---|---|
| Cluster | Event-driven (watches) | Owns the whole Valkey cluster lifecycle |
| Node | Event-driven (watches) | Create-only executor for `ValkeyNode` specs |
| ACL | Periodic, 30-second tick | Converges nodes onto the current ACL file |
| TLS | Periodic, 30-second tick | Causes nodes to reload certificates from disk |

### Cluster controller

The cluster controller watches `ValkeyCluster` resources and everything they own, and also watches `ValkeyConfig` and `ValkeyImage`: an edit to a menu resource re-triggers reconciliation of all Valkey clusters, which is how repointing a config rolls every cluster that uses it. It owns the full lifecycle: bootstrapping a new Valkey cluster, keeping an active one converged (failover handling, scaling, rolling replacement), and rendering the cluster-level objects (the headless Service, the operator-auth Secret, and the ACL ConfigMap). On each pass it takes at most one cluster-mutating action, then re-queues; [Reconciliation](reconciliation.md) explains that model and the priority order in detail.

Reconciliation is per-cluster and independent: each `ValkeyCluster` has its own reconcile queue, at most one reconciliation runs for a given cluster at a time, and reconciliations for different clusters run concurrently within the operator process. A cluster in the middle of a long rebalance does not block reconciliation of any other cluster: the one-action-per-tick pacing applies within a cluster, not across the fleet.

### Node controller

The node controller is a deliberately narrow executor. A `ValkeyNode` spec is immutable, so the controller only ever *creates*: it ensures the node's per-node ConfigMap exists, and creates the node's Pod exactly once, when the node's lifecycle is `Joining`. It never updates a running pod's spec and never recreates a dead one; if a pod dies later, the cluster controller notices and replaces the whole node through the `ValkeyNode` lifecycle. This create-only design is what makes node identity trustworthy: a pod always reflects the exact spec it was created from. The consequences for pod behavior are covered in [Pod management](pod-management.md).

### ACL controller

The ACL controller runs on a fixed 30-second tick. The cluster controller renders the desired ACL file into each cluster's ACL ConfigMap; the ACL controller's only job is convergence: every tick, it instructs each running node to reload its ACL file from the ConfigMap volume mounted into the pod. The reload is atomic per node: if the file were ever invalid, the node keeps its previous ACLs. Failures against individual nodes are logged and retried on the next tick rather than failing the pass.

### TLS controller

The TLS controller also runs on a 30-second tick, and skips Valkey clusters without TLS enabled. For TLS clusters, each tick it points every running node back at its certificate file paths, causing Valkey to re-read the certificate, key, and CA bundle from disk. Combined with the kubelet propagating updated Secret contents into pod volumes, this is the certificate rotation mechanism: update the Secret, and nodes pick up the new material with no restart. See [TLS](../security/tls.md) for the rotation procedures.

:::note
ACL and TLS changes reach nodes in two stages: the kubelet propagates updated ConfigMap/Secret content into pod volumes (typically up to about a minute), and the next 30-second controller tick triggers the reload. Treat convergence as eventual; do not build workflows that assume a change is live within a fixed number of seconds.
:::

## What the operator creates and owns

For every `ValkeyCluster`, the operator builds a two-level ownership chain:

```text
ValkeyCluster my-cluster (namespace: my-app)
 ├── Service    my-cluster                 headless; ports 6379, 16379
 ├── Secret     my-cluster-operator-auth   operator + replication credentials
 ├── ConfigMap  my-cluster-acl             rendered ACL file (users.acl)
 │
 ├── ValkeyNode my-cluster-3f8a1
 │    ├── ConfigMap my-cluster-3f8a1-config   rendered valkey.conf
 │    └── Pod       my-cluster-3f8a1          one Valkey container
 ├── ValkeyNode my-cluster-9c04d
 │    ├── ConfigMap my-cluster-9c04d-config
 │    └── Pod       my-cluster-9c04d
 └── ... one ValkeyNode per Valkey node: shards × (1 + replicasPerShard)
```

Every object carries an owner reference to its parent, so deletion is a clean cascade with no orphans: deleting a `ValkeyCluster` removes its Service, Secret, ConfigMap, and all `ValkeyNode` resources, and each `ValkeyNode` takes its ConfigMap and Pod with it. Node (and therefore pod) names are the cluster name plus a short random suffix, not ordinal indexes; [Pod management](pod-management.md) explains why. The label taxonomy on these objects is documented in [Labels and annotations](../reference/labels-annotations.md).

## The cluster Service and client discovery

The operator creates exactly one Service per Valkey cluster: a **headless** Service named after the cluster (`my-cluster`), exposing port 6379 (client) and 16379 (cluster bus), selecting all of the cluster's pods. The operator creates no LoadBalancer, NodePort, or per-shard Service.

A headless Service is sufficient because discovery is the Valkey cluster protocol's job, not the Service's. Clients use the Service DNS name (`my-cluster.my-app.svc.cluster.local`) only as a **seed address**: it resolves directly to pod IPs. From any node, a cluster-aware client learns the full topology (which node owns which slots) from the cluster protocol itself, and follows redirects from there. This is why you must use a cluster-aware client; a plain client fails on redirected keys.

How nodes announce themselves depends on TLS:

- **Without TLS**, nodes announce their pod IPs, and clients connect to IPs directly.
- **With TLS**, nodes announce per-pod DNS names (`{pod}.my-cluster.my-app.svc.cluster.local`, published via the headless Service) so that the names clients connect to are covered by the certificate's wildcard SAN. Hostname verification therefore works across failovers and pod replacement.

Connection examples, client configuration, and retry guidance are in [Connecting to a cluster](../team-guide/connecting.md).

## What the operator does not manage

The operator's scope is Valkey clusters, deliberately nothing more. You (or your platform) own:

- **The Kubernetes cluster itself**: Kubernetes node capacity, zones, upgrades, and the scheduler the operator relies on. For how drains and Kubernetes upgrades interact with Valkey pods, see [Kubernetes maintenance](../platform-guide/kubernetes-maintenance.md).
- **Networking beyond the headless Service**: the operator creates no Ingress, no LoadBalancer, and has no service-mesh integration. Exposure beyond the Kubernetes cluster boundary is your design decision.
- **Certificates themselves**: the operator validates, mounts, and hot-reloads the TLS Secret you provide, but it does not issue, renew, or monitor certificates. Issuance and renewal belong to your PKI (cert-manager works well); see [TLS](../security/tls.md).
- **Persistent storage**: the operator provisions no PersistentVolumes, by design; Valkey data is in-memory and durability comes from replication and failover, not disks. Read [Data durability](data-durability.md) before relying on any survivability assumption.

## Why this architecture holds up

The operator keeps **no required state in memory between reconcile passes**. Everything it needs to act is in the Kubernetes API (resource specs, `ValkeyCluster` status, including the `targetSpec` snapshot, owner references) and in what the Valkey nodes themselves report. Each pass re-reads the world, takes at most one action, and re-queues.

That property is what makes the single-replica design safe in practice:

- **Operator restarts and upgrades are non-events for your data plane.** Running Valkey clusters keep serving traffic, replication keeps flowing, and Valkey's own automatic failover still works, because none of that depends on the operator process. When the operator comes back, it re-reads the world and resumes exactly where the state says it should, including mid-bootstrap or mid-rolling-replacement.
- **While the operator is down, nothing heals and nothing progresses.** Spec changes queue, dead nodes are not replaced, and scaling waits. The failure window is a loss of *convergence*, not a loss of *service*. The operator-down row of [Failure modes](../operations/failure-modes.md) covers exactly what does and does not happen.
- **Upgrading the operator is an ordinary rollout** of a new image against this stateless loop; the procedure is in [Operator upgrades](../platform-guide/operator-upgrades.md).

:::info
Because there is no leader election and one replica, do not scale the operator Deployment above one replica. Scaling it to zero is the (blunt) supported way to halt all reconciliation. See [Failure modes](../operations/failure-modes.md).
:::
