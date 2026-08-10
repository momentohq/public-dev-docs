---
title: Sizing
description: Set resources in a ValkeyConfig for Guaranteed quality of service, leave maxmemory headroom, and choose the right node shape.
sidebar_position: 4
---

# Sizing

This page covers sizing decisions for a `ValkeyConfig`, managed by the Momento Valkey Operator: how `resources` determines pod quality of service, how much headroom to leave between the memory limit and Valkey's own `maxmemory`, and when to size up versus scale out. It is written primarily for platform teams curating the config menu, and for product teams choosing among curated configs. For the resource fields themselves, see [ValkeyConfig](../reference/api/valkeyconfig.md).

## Resources set both requests and limits

`resources.cpu` and `resources.memory` on a `ValkeyConfig` are applied to each Valkey pod as **both** the request and the limit. A config with both set produces pods in the Kubernetes **Guaranteed** quality-of-service class, the class least likely to be evicted or throttled under node pressure.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: standard
spec:
  imageRef: valkey-9-0
  resources:
    cpu: "1"
    memory: 2Gi
  valkey:
    maxmemory: "1500mb"
    maxmemory-policy: "allkeys-lru"
```

:::warning
A `ValkeyConfig` that omits `resources` entirely produces **BestEffort** pods: no requests, no limits. BestEffort pods are the first the kubelet evicts under node memory pressure. For an in-memory data store, an eviction is a data-loss event: the pod's data disappears with it, and if it was an unreplicated primary, so does the shard's data (see [Data durability](../concepts/data-durability.md)). Always set `resources` on configs you publish for production use.
:::

## Leave maxmemory headroom under the memory limit

Valkey's `maxmemory` setting bounds the data Valkey itself will hold, but the process uses additional memory beyond that for things `maxmemory` does not account for: replication output buffers, the memory overhead of fork-based operations (background saves, AOF rewrites), and allocator fragmentation. If `maxmemory` is set close to the pod's memory limit, that overhead pushes the container over the limit and the kubelet OOM-kills it: the same data-loss outcome as an eviction, self-inflicted by an undersized headroom.

As a starting point, size `maxmemory` to roughly **70% to 80% of the pod's memory limit** and adjust from there based on observed overhead for your workload (write-heavy and replication-heavy workloads need more headroom than read-mostly ones). The `standard` config above follows this ratio: `maxmemory: 1500mb` against a `2Gi` limit is about 73%.

This is general Valkey operational guidance, not a mechanism enforced by the operator: the operator does not validate `maxmemory` against `resources.memory` or reject an unsafe ratio.

## Node shape

Valkey is memory-bound far more than it is CPU-bound for typical cache-shaped workloads. When choosing the underlying Kubernetes node pool for a Valkey cluster:

- Prefer memory-optimized instance types over general-purpose ones: a higher memory-to-vCPU ratio gets more usable Valkey capacity per node.
- Avoid overcommitting the node pool. Because production configs should carry Guaranteed-class `resources` (see above), the scheduler already accounts for every Valkey pod's full memory footprint against node capacity. But leave enough slack in the pool for operator-driven replacements (a rolling upgrade or a failover briefly needs capacity for both the old and new pod), rather than sizing the pool to exactly the steady-state pod count.

This is general Kubernetes and Valkey capacity-planning guidance; nothing here is operator-specific behavior.

## Scale out, not up

When a curated config's memory ceiling stops being enough for the workload, the operator-native lever is horizontal: increase `shards` on the `ValkeyCluster` and let the operator rebalance slots across the larger shard count, rather than repeatedly raising one config's `resources.memory`. Scaling shards distributes both the dataset and the request load, and it composes with placement: more shards means more opportunities for zone and host spread to matter. See [Scaling](../team-guide/scaling.md) for the mechanics and client impact of a shard-count change.

## Autoscalers do not apply

Do not point Kubernetes autoscalers at operator-managed resources; neither has anything to act on:

- **Horizontal Pod Autoscaler.** No operator resource exposes a `scale` subresource, and the Valkey pods are bare pods with no Deployment or StatefulSet behind them, so HPA has no valid target. Horizontal scaling is `spec.shards` and `spec.replicasPerShard`, changed by you (or your own tooling) editing the `ValkeyCluster`.
- **Vertical Pod Autoscaler.** Pod resources come from the resolved `ValkeyConfig`, and the operator compares declared specs, not live pods. A VPA-mutated pod is invisible to the operator and reverts to config-declared resources on the next replacement; a VPA that evicts pods to resize them triggers the operator's failure recovery instead, which rebuilds the pod from the declared config. Either way the VPA value does not stick. Resize by publishing a config variant and repointing `configRef`, which rolls the cluster deliberately.

The cluster autoscaler (which scales Kubernetes nodes, not pods) is compatible; see [Kubernetes maintenance](../platform-guide/kubernetes-maintenance.md) for how it interacts with the operator.
