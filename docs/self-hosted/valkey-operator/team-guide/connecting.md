---
title: Connecting to your cluster
description: Endpoints, cluster-aware client requirements, TLS, ACL authentication, and failover resilience for applications connecting to a ValkeyCluster.
sidebar_position: 3
---

# Connecting to your cluster

This guide covers how your applications connect to a Valkey cluster provisioned through the Momento Valkey Operator: the endpoint to use, why the client library matters, and how to connect over TLS. It also covers how to authenticate and how to handle the brief disruption a failover causes.

## Endpoints

Every `ValkeyCluster` gets one headless Service, named after the cluster, reachable at:

```text
{cluster}.{namespace}.svc.cluster.local:6379
```

For `my-cluster` in namespace `my-app`, that's `my-cluster.my-app.svc.cluster.local:6379`. The Service resolves to the IPs of every node's pod; it load-balances nothing on its own. Your client discovers the actual topology (which node owns which hash slots) from the cluster itself.

Port `16379` (the cluster bus) is also exposed on the Service, but it's used for node-to-node gossip and replication, not by application clients. Point your application only at `6379`.

These endpoints exist only inside the Kubernetes cluster's network: nodes announce pod IPs (or, under TLS, cluster-internal DNS names), so your application must run in the same Kubernetes cluster as the Valkey cluster it uses. [Networking and ports](../security/networking.md) states this boundary and the full connection matrix.

## Use a cluster-aware client

A Valkey cluster shards data by hash slot across primaries, and slot ownership changes as the operator rebalances, scales, or replaces nodes. A client that isn't cluster-aware sends commands to whichever node it first connected to. It fails (or silently gets wrong results) whenever that node doesn't own the requested key's slot. Your client **must** speak the cluster protocol: it needs to follow `MOVED` redirects and refresh its view of slot ownership as the topology changes.

From `valkey-cli`, pass `-c` to enable cluster mode:

```bash
valkey-cli -c -h my-cluster.my-app.svc.cluster.local -p 6379 PING
```

For application clients, look for a "cluster mode" or "cluster client" option in your client library and enable it. Plain single-node clients do not work correctly against a Valkey cluster. With `valkey-glide` (Valkey's official client library), for example, the cluster client takes the Service DNS name as its seed address and discovers the topology from there:

```typescript
import { GlideClusterClient } from "@valkey/valkey-glide";

const client = await GlideClusterClient.createClient({
  addresses: [{ host: "my-cluster.my-app.svc.cluster.local", port: 6379 }],
});
await client.set("greeting", "hello");
```

The same shape applies in any language: give the cluster client the Service DNS name as a seed, and it discovers and tracks the shard topology itself. Beyond enabling cluster mode, most client libraries need no cluster-specific configuration to follow redirects. The guidance that matters is in [resilience during a failover](#resilience-during-a-failover) below.

## TLS connections

If your cluster was created with `spec.tls` set (see [Provisioning](provisioning.md#create-time-decisions)), all traffic on port 6379 is TLS: there is no plaintext fallback. Connect with the cluster's CA certificate:

```bash
valkey-cli -c -h my-cluster.my-app.svc.cluster.local --tls --cacert ca.crt -p 6379 PING
```

`ca.crt` comes from the same TLS Secret your platform team (or you) referenced in `spec.tls.secretRef`; get it from wherever that Secret's contents are distributed to your application, not from the cluster directly.

Clients do **not** present a certificate of their own: the cluster does not use mutual TLS. Your application needs only the CA certificate to verify the server; it authenticates with ACL credentials (below), not a client cert.

Hostname verification matters here because of how redirects work under TLS: each node announces its own per-pod DNS name (`{pod}.{cluster}.{namespace}.svc.cluster.local`) rather than a bare IP. The certificate's SAN is a wildcard covering that pattern. When your client follows a redirect to a different node, it validates the new node's certificate against that same wildcard, so redirects stay verifiable without per-node certificates. Configure your client library's TLS options to validate against the server hostname, not to skip hostname verification.

## Authenticating with an ACL user

If any ACL bindings exist on your cluster (see [ACLs](../security/acls.md)), authenticate as one of the bound users:

```bash
valkey-cli -c -h my-cluster.my-app.svc.cluster.local -p 6379 --user app-user --pass '<password>' PING
```

The username, password, and permissions come from a binding you (or your platform team) added under `spec.acl`. The password itself is never stored in the cluster spec, only a SHA-256 hash of it. Manage the plaintext credential the way you manage any application secret: your team owns issuing it to your clients and rotating it. See [ACLs](../security/acls.md) for the binding format and the rotation procedure.

:::info
The moment any ACL binding exists on your cluster (yours or your platform team's), the `default` user is disabled. If your application was relying on unauthenticated access, it stops working as soon as the first binding is added, and it needs bound credentials from then on.
:::

## Resilience during a failover

When a primary fails, Valkey promotes a replica to take its place. While that failover is in progress, writes (and reads for keys in that shard) to the affected shard's slots briefly fail; other shards are unaffected. This is normal, expected behavior for any cluster-aware Valkey deployment, not specific to how this operator manages the cluster.

Your client should treat these failures as transient: retry with backoff. Also, make sure the client refreshes its topology view (its map of slot ownership to nodes) after a connection error or a redirect, rather than caching it indefinitely. Most cluster-aware client libraries do this automatically once cluster mode is enabled. Confirm your library's retry and topology-refresh behavior rather than assuming defaults are enough for your workload's tolerance for transient errors.
