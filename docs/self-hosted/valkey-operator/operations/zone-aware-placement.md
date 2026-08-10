---
title: Zone-aware placement
description: Configure zones, node selectors, and zone spread for a Valkey cluster, and what changing placement does on a live cluster.
sidebar_position: 3
---

# Zone-aware placement

This page covers `spec.placement` on a `ValkeyCluster`, managed by the Momento Valkey Operator: restricting pods to specific availability zones, pinning them to a node pool, and controlling how strictly shard members are spread across zones. It is for platform and product teams sizing a cluster's failure-domain footprint. For what a zone outage actually does to data, see [Failure modes](failure-modes.md) and [Data durability](../concepts/data-durability.md).

## The placement fields

```yaml
spec:
  placement:
    zones:
      - us-east-1a
      - us-east-1b
      - us-east-1c
    zoneSpread: required
    nodeSelector:
      node-pool: valkey
```

### zones

An optional list of availability zone names. When set, every pod gets a **hard** node affinity restricting it to `topology.kubernetes.io/zone` values in the list; a pod that cannot land in one of these zones does not schedule at all. `zones` also activates the per-shard zone spread constraint described below. Full one-per-zone spread on a shard requires at least as many zones as that shard has nodes (primary plus `replicasPerShard` replicas). Fewer zones than shard members still balances nodes across the zones you listed, but not exclusively one per zone.

Leaving `zones` empty imposes no zone restriction; pods can land in any zone your Kubernetes cluster schedules to.

### nodeSelector

An optional map passed through verbatim to every pod's `nodeSelector`. Use it to pin a cluster to a labeled node pool, for example, a pool of memory-optimized instances reserved for Valkey (see [Sizing](sizing.md)). Kubernetes ANDs `nodeSelector` with the `zones` node affinity: a pod must satisfy both, so a selector that names a pool with no presence in the listed zones leaves pods unschedulable.

### zoneSpread

Controls how strictly a shard's members are spread across zones. Two values:

| Value | Effect |
|---|---|
| `bestEffort` | Zone spread is a scheduling preference. Pods still land even when spreading is impossible. |
| `required` | Zone spread is enforced. A pod that would violate it stays `Pending` rather than schedule. |

Under the hood, every Valkey pod always carries a per-shard **host** spread constraint (maxSkew 1, best-effort) regardless of `zoneSpread`. Two members of the same shard are steered off the same Kubernetes node whenever possible. `zoneSpread` governs the equivalent constraint at the zone level:

- **`bestEffort`**: one per-shard topology spread constraint on `topology.kubernetes.io/zone`, maxSkew 1, best-effort (`ScheduleAnyway`).
- **`required`**: the same per-shard constraint, but enforced (`DoNotSchedule`), **plus** a second, cluster-wide zone spread constraint that balances the whole cluster's pods across zones, not just one shard at a time. That second constraint is always best-effort, and has to be: Kubernetes allows only one hard (`DoNotSchedule`) constraint per topology key, and the per-shard constraint already holds that slot. So in `required` mode, each shard's spread is a hard guarantee, and balance across the whole cluster is a strong, but not absolute, preference layered on top.

If you don't set `zoneSpread` at all, the cluster inherits the operator-wide default configured by your platform team. See [Operator configuration](../reference/operator-configuration.md). As shipped, that default is `bestEffort`.

## Zone outage behavior

Which shards keep serving through a zone loss is entirely a function of `zoneSpread` and `replicasPerShard`:

- With `zoneSpread: required` and `replicasPerShard` of at least 1, no shard has both its primary and all its replicas in one zone; every shard has a surviving member elsewhere and fails over or takes over per [Failure modes](failure-modes.md#zone-lost).
- With `zoneSpread: bestEffort` (the shipped default), spread is only a preference. A shard whose members happened to land together in the lost zone loses its data.

The operator does not proactively rebalance pods back into a recovered zone: replacement pods schedule into whichever zones satisfy `placement` and have capacity at the time, and spread is restored gradually as pods are naturally replaced.

During an extended zone outage, a cluster whose `zones` list includes the dead zone can end up with replacement pods stuck `Pending`: the scheduler has nowhere allowed to put them. Rather than waiting out the outage, you can remove the affected zone from `spec.placement.zones`: that is a placement change, so it triggers the standard rolling replacement into the surviving zones, and you can restore the original zone list the same way once the zone recovers. See [Changing placement on a live cluster](#changing-placement-on-a-live-cluster).

## Autoscaler interaction

`zoneSpread: required` can leave pods `Pending` when the required zone capacity doesn't exist yet, for example, before a cluster autoscaler has provisioned nodes in an under-represented zone. This is a safe stall, not a failure. Bootstrap and reconciliation wait for the pod to become schedulable rather than proceeding with a partial or unbalanced topology, and they take no other corrective action while waiting. A `Pending` pod is visible with `kubectl get pods`; the `ValkeyCluster` itself does not surface a distinct status for this condition. Once the autoscaler adds capacity in a satisfying zone, the pod schedules and reconciliation continues without intervention.

## Changing placement on a live cluster

`zones` and `nodeSelector` are pod-template inputs: changing either one on a running cluster triggers a rolling replacement of every pod, one shard at a time, onto the new placement, the same mechanism used for image and config changes. See the canonical change-impact table in [Reconciliation](../concepts/reconciliation.md#what-happens-when-you-change-the-spec).

`zoneSpread` is different: it's a scheduling preference baked into a pod only when that pod is created. Changing it on a live cluster does not replace any existing pods: it takes effect only for pods created afterward (new shards, replacement replicas, or a later rolling replacement triggered by something else).

## Worked example with three zones, required spread, and a dedicated node pool

A cluster pinned to a `valkey` node pool, spread with a hard guarantee across three zones:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
  placement:
    zones:
      - us-east-1a
      - us-east-1b
      - us-east-1c
    zoneSpread: required
    nodeSelector:
      node-pool: valkey
```

With `replicasPerShard: 1`, each shard has two members (primary + one replica) against three listed zones: full one-per-zone spread is achievable, and `required` makes it a hard guarantee.

## Notes and anti-patterns

- **`replicasPerShard: 0` makes placement irrelevant to durability.** Zone spread only protects data that has a second copy; with no replicas, losing the primary's pod for any reason (including a zone that was never actually lost, only a single evicted pod) loses the shard's data. See [Data durability](../concepts/data-durability.md).
- **Fewer zones than nodes per shard undercuts `zones`.** If a shard has more members (primary + replicas) than `zones` lists, the per-shard spread constraint still balances members across the zones you provided, but it cannot guarantee one member per zone; two members can end up in the same zone. List at least as many zones as `1 + replicasPerShard`.
- **`nodeSelector` narrower than `zones` produces unschedulable pods**, not a relaxed constraint: Kubernetes requires both to be satisfied simultaneously. Confirm your node pool actually has capacity in every zone you list before combining the two.
- **A tainted node pool cannot host Valkey pods.** There is no way to give the pods tolerations: the only toleration they carry is a built-in one for `kubernetes.io/arch=arm64:NoSchedule` (see [Compatibility](../support/compatibility.md)). If your platform dedicates node pools by tainting them, Valkey pods stay `Pending` there forever. Dedicate a pool to Valkey with labels plus `nodeSelector` (as in the worked example above), and keep other workloads off it through their own scheduling constraints rather than a taint.
