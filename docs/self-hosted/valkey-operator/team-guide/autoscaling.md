---
title: Autoscaling
description: Configure utilization-based shard autoscaling, thresholds, cooldowns, and the status and events to watch.
sidebar_position: 5
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Autoscaling

Set `spec.autoscaling` on a `ValkeyCluster` to let the operator adjust shard count from live utilization. Autoscaling is off when this field is absent. It changes the number of shards; choose per-node resource profiles through [Changing configuration](changing-configuration.md), and change replica counts through [Scaling](scaling.md).

## Configure autoscaling

The following spec starts with three shards and scales within a range of three to twelve:

```yaml
spec:
  configRef: standard
  shards: 3            # initial count only while autoscaling is enabled
  replicasPerShard: 1
  autoscaling:
    minShards: 3
    maxShards: 12
    scaleOut:
      memoryPercent: 80
      cpuPercent: 75
      bandwidthMbps: 800
    scaleIn:                # optional; omit to never scale in
      memoryPercent: 40
      cpuPercent: 30
```

Opt into any combination of triggers. Each `scaleIn` threshold must be below its `scaleOut` counterpart, and `maxShards` must be at least minShards. These constraints are checked at admission.

## Utilization measurements

The operator samples every node every 30 seconds. Samples are visible in each `ValkeyNode`'s status.

| Trigger | Measurement |
|---|---|
| `memoryPercent` | Percentage of configured `maxmemory`, or the container memory limit when `maxmemory` is absent. |
| `cpuPercent` | Percentage of the container CPU limit. Requires a CPU limit in the config. |
| `bandwidthMbps` | Absolute node throughput, inbound plus outbound, in Mbps. |

Percentage triggers require a computable denominator. Configure `maxmemory` or a container memory limit for `memoryPercent`, and a CPU limit for cpuPercent. [Usage metering](../platform-guide/usage-metering.md#how-memory-is-determined) uses a separate memory selection sequence for billing.

## Scale-out and scale-in decisions

If any primary's latest sample exceeds any configured `scaleOut` threshold, the operator adds one shard. Replicas do not trigger scale-out: their memory mirrors the primary's, and replication resynchronization spikes do not indicate keyspace pressure. A busy replica can still block scale-in.

Scale-in removes one shard when every node's peak utilization over the entire sliding window stays below every configured `scaleIn` threshold. A brief lull does not remove capacity. Newly added nodes block scale-in until they have a full window of history.

Decisions require a fully converged cluster: no joins, leaves, or slot migrations can be in flight. Each direction has a cooldown.

| Setting | Default | Purpose |
|---|---|---|
| `scaleInWindowSeconds` | 300 | History window used for scale-in peaks. |
| `scaleOutCooldownSeconds` | 180 | Cooldown for scale-out decisions. |
| `scaleInCooldownSeconds` | 900 | Cooldown for scale-in decisions. |

Set these fields inside `spec.autoscaling` when you need different windows or cooldowns.

## Watch the target and decisions

While autoscaling is enabled, `spec.shards` sets only the initial count. Adjust `minShards` and `maxShards` to control the range. The current target is `status.autoscaling.desiredShards`, shown in the DESIRED SHARDS column:

```bash
kubectl -n my-app get valkeyclusters
kubectl -n my-app get valkeynodes -o yaml
```

Every scaling decision produces a Kubernetes Event on the cluster. For scale-out decisions:

```bash
kubectl -n my-app get events --field-selector reason=ScaleOut
# ScaleOut  1 -> 2 shards: node my-cluster-a1b2c memory 84.2% >= 80%
```

The operator rebalances slots as shard count changes. See [Scaling](scaling.md) for client behavior during rebalancing and [Cluster status](../reference/cluster-status.md) for lifecycle states.
