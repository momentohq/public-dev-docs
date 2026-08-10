---
title: Kubernetes maintenance
description: How node drains and the cluster-autoscaler interact with the operator, and what stands in for the PodDisruptionBudgets it does not create.
sidebar_position: 6
---

# Kubernetes maintenance

This guide covers routine Kubernetes-side maintenance (node drains, Kubernetes upgrades, and cluster-autoscaler scale-down) from the operator's point of view. It assumes you are already familiar with draining nodes and running the cluster-autoscaler. It covers only what is different because a Valkey cluster managed by the operator is running on the node you are draining.

## How a drain looks to the operator

A node drain evicts every pod on the node, Valkey pods included. From there, the operator's normal recovery path takes over, because eviction and a pod crash look identical to it:

1. The evicted pod terminates. Valkey pods run with `restartPolicy: Never`, so Kubernetes does not restart it in place; it stays gone.
2. The operator detects the missing pod on its next reconciliation pass.
3. If the pod was a shard primary, Valkey's own automatic failover promotes a replica when quorum holds; the operator forces a takeover on a surviving replica when it does not. If the pod was a replica, there is no failover to make.
4. The operator creates a replacement node for the affected shard through the same `Joining` lifecycle every new node goes through. It joins the cluster, attaches as a replica, and completes its initial sync before becoming Active.

This is the same sequence documented event-by-event in [Failure modes](../operations/failure-modes.md); a drain is a voluntary trigger for it.

## Recommended drain practice

Drain Kubernetes nodes one at a time, and wait for every affected `ValkeyCluster` to report `Active` again before draining the next:

```bash
kubectl drain <node> --ignore-daemonsets --delete-emptydir-data
kubectl get valkeynodes -A -w   # wait for every node's LIFECYCLE to return to Active
```

A cluster's `STATE` column stays `Active` while it heals: recovery is not a separate reported state. Gate on the `ValkeyNode` lifecycle (no nodes stuck `Joining` or `Leaving`) and on pods being `Running` rather than on cluster state. See [Cluster status](../reference/cluster-status.md).

A single Kubernetes node can host pods from multiple shards and multiple clusters. Draining several nodes at once multiplies how many shards are simultaneously down a member, which raises the odds of pushing some shard past quorum before its replacement has caught up. Pacing drains to one node at a time, gated on cluster health, keeps that risk to a single node's worth of exposure.

A full Kubernetes upgrade (rotating every node pool through drain, replace, rejoin) is this same procedure applied repeatedly. Upgrade one Kubernetes node (or small pool slice) at a time, gated on the same node-lifecycle check between steps. The operator has no special upgrade mode to enable.

### Draining the Kubernetes node the operator runs on

The operator itself is a single-replica Deployment, so draining its Kubernetes node evicts the one operator pod and reconciliation pauses until the Deployment reschedules it elsewhere. Running Valkey clusters keep serving during the gap (the operator is not on the data path), but no healing, scaling, or configuration changes happen until the pod is back. Drain the operator's node first (or last), on its own, rather than together with nodes hosting Valkey pods. If a Valkey pod dies while the operator is rescheduling, its replacement is delayed until the operator returns. See [Failure modes](../operations/failure-modes.md) for the operator-down behavior in full.

## No PodDisruptionBudgets

The operator creates no `PodDisruptionBudget` for the pods it manages, so `kubectl drain` and the cluster-autoscaler have no PDB to consult before evicting a Valkey pod. Three things stand in for it:

- **`placement.zoneSpread: required`** on the cluster spreads each shard's nodes across zones as a hard scheduling constraint, so the loss of a single zone's worth of nodes cannot take out a whole shard. See [Zone-aware placement](../operations/zone-aware-placement.md).
- **`replicasPerShard` of at least one** ensures a lost primary has a promotable replica rather than triggering a data-loss recreation. See [Data durability](../concepts/data-durability.md).
- **Pacing your own drains and node-pool rotations** (the practice above), since nothing else limits how many shard members can go down at once.

None of these substitute for a PDB's admission-time protection during an eviction storm; they reduce the odds of correlated failure and bound the damage when it happens, rather than blocking the eviction outright.

## Cluster-autoscaler interaction

The operator sets no scale-down protection on Valkey pods itself. It does not annotate them to resist eviction, and if the autoscaler does evict one, the operator relies on the same drain-handling path described above.

If you want the cluster-autoscaler to leave Valkey pods alone during scale-down, add the annotation it recognizes through `spec.podAnnotations`:

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
  podAnnotations:
    cluster-autoscaler.kubernetes.io/safe-to-evict: "false"
```

This works because the operator applies `podAnnotations` verbatim to every pod it creates, and the cluster-autoscaler independently honors that annotation as part of its own eviction logic. This is standard Kubernetes/cluster-autoscaler behavior, not something the operator implements or detects. Setting it prevents the autoscaler from evicting the pod to consolidate nodes. It has no effect on the operator's own drain handling above, and it does not exempt the pod from a manual `kubectl drain`.
