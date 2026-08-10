---
title: Failure modes
description: How Valkey clusters managed by the operator behave when pods, Kubernetes nodes, zones, or the operator itself fail.
sidebar_position: 2
---

# Failure modes

This page explains how a Valkey cluster managed by the Momento Valkey Operator behaves when things fail: what the operator does automatically, how quickly detection happens, what data is at risk, and where manual action is required. It covers operator-specific behavior only: general Kubernetes failure handling is out of scope. For step-by-step remediation of specific symptoms, see [Troubleshooting](troubleshooting.md); for the underlying storage model, see [Data durability](../concepts/data-durability.md).

The short version, per event:

| Event | Automatic response | Data at risk |
|---|---|---|
| Replica pod dies | Operator replaces the replica | None |
| Primary pod dies, quorum held, replica exists | Valkey auto-failover, then operator restores replica count | Writes in replication lag |
| Primary pod dies, quorum lost, replica exists | Operator forces a takeover on a surviving replica | Writes in replication lag |
| Primary pod dies, no replicas | Operator forgets the dead node and creates a fresh empty primary | That shard's entire dataset |
| Kubernetes node lost or drained | Per-pod combination of the above | Depends on which pods were affected |
| Zone lost | Per-pod combination of the above; blast radius depends on placement | Depends on `zoneSpread` |
| Operator down | Clusters keep serving; healing and changes pause | None from the outage itself |
| Fault during a scaling or upgrade operation | Reconciler absorbs the fault and converges to the target | Same as the underlying pod failure |

Two operator design decisions shape everything below. First, Valkey pods run with `restartPolicy: Never`: a dead pod is never restarted in place; the operator replaces it with a new node through its join lifecycle (see [Pod management](../concepts/pod-management.md)). Second, the operator forces `cluster-node-timeout` to 5000 ms on every node. Valkey's own failure detection (the input to both auto-failover and the operator's recovery logic) is bounded by a 5-second window plus gossip propagation.

## Replica pod dies

**What happens automatically.** The dead pod's cluster node becomes an orphan. The operator forgets it from the remaining nodes, removes its internal `ValkeyNode` resource, and creates a replacement replica for the same shard. The replacement joins the cluster, replicates from the shard's primary, and is only marked active after its initial sync completes. Shard identity is preserved: the replacement lands in the shard that lost the replica.

**Timeline.** Detection is event-driven (the operator watches its pods); the replacement proceeds over successive reconciliation ticks, and the new replica's usefulness is gated on the initial sync from the primary, which scales with the shard's dataset size.

**Data at risk.** None. The primary holds the authoritative copy throughout. See [Data durability](../concepts/data-durability.md).

**Client impact.** Writes are unaffected. Clients that were reading from the dead replica see connection errors until their topology refresh; cluster-aware clients handle this automatically.

**Manual action.** None.

## Primary pod dies (quorum held, replica exists)

**What happens automatically.** When a majority of primaries is still healthy, the operator deliberately does not intervene in the failover itself: it waits for Valkey's automatic failover to promote one of the shard's replicas. Because the operator forces `cluster-node-timeout` to 5000 ms, failure detection is bounded by that 5-second window; the replica election follows. Once the new primary is serving, the operator cleans up. It forgets the dead node from all live nodes, deletes its resources, and creates a fresh replica so the shard returns to its configured `replicasPerShard`. This recovery path is verified against real Kubernetes clusters for both pod deletion and in-place process death.

**Timeline.** Failure detection is bounded by the forced 5-second `cluster-node-timeout`; promotion follows Valkey's standard election. Restoring the replica count happens afterwards and is gated on the new replica's initial sync.

**Data at risk.** Writes acknowledged by the old primary but not yet replicated to the promoted replica are lost: the replication-lag window. See [Data durability](../concepts/data-durability.md).

**Client impact.** Writes to the affected shard fail during detection and election. Cluster-aware clients pick up the new primary via topology refresh; other shards are unaffected.

**Manual action.** None.

## Primary pod dies (quorum lost)

**What happens automatically.** When too few primaries survive to form a majority (for example, one primary of a two-shard cluster dies), Valkey's automatic failover cannot win an election. The operator detects this and issues a takeover on a healthy surviving replica of the affected shard, promoting it without an election. It then performs the same cleanup and replica restoration as above. This path is also verified against real clusters.

**Timeline.** Same detection bound (the forced 5-second `cluster-node-timeout`); the takeover is issued by the operator on a subsequent reconciliation tick rather than waiting on an election that cannot complete.

**Data at risk.** Same as the quorum-held case: writes in the replication-lag window. A forced takeover bypasses Valkey's election safety checks. It is the intended recovery path for small clusters where a majority cannot form, and the operator only issues it when normal failover is impossible.

**Manual action.** None.

## Primary pod dies (no replicas)

**What happens automatically.** With `replicasPerShard: 0`, no surviving copy of the shard's data exists. The operator does not halt. It forgets the dead node from all live nodes, at which point that shard's data is unrecoverable. It then creates a fresh primary, assigns it the orphaned slot range, and returns the cluster to `Active` with full hash-slot coverage. The new shard starts empty.

**Timeline.** Detection as above; the replacement primary is created and assigned slots over the following ticks. The cluster reports `Active` once slot coverage is restored.

**Data at risk.** The entire dataset of the affected shard. This is the explicit trade-off of running without replicas. See [Data durability](../concepts/data-durability.md) for mitigations, starting with `replicasPerShard: 1`.

**Client impact.** Requests for keys in the affected slot range fail until the replacement primary is serving, then succeed against an empty keyspace. Applications must be able to repopulate (for example, treat the cluster as a cache backed by a source of truth).

**Manual action.** None for recovery; the cluster heals itself topologically. Repopulating the lost data is the application's responsibility.

## Kubernetes node lost or drained

**What happens automatically.** Losing a Kubernetes node kills every Valkey pod on it, and each is handled by the per-pod logic above. Dead replicas are replaced; dead primaries fail over (or are taken over, or replaced empty) per their shard's replica and quorum situation. Because pods use `restartPolicy: Never`, a drain's eviction has the same effect as a crash: the operator replaces the pod rather than Kubernetes restarting it. Replacement pods schedule onto remaining Kubernetes nodes subject to the cluster's placement constraints.

**Timeline.** As per the individual events. The operator prioritizes stability: it restores unhealthy primaries before doing anything else, and works through replacements over successive ticks.

**Data at risk.** Depends on which pods were co-located. If a shard's primary and all its replicas were on the same Kubernetes node, that shard's data is lost (the no-replicas case above). Per-shard host spread constraints make this co-location unlikely but are best-effort; zone spread gives stronger guarantees ([Zone-aware placement](zone-aware-placement.md)).

**Manual action.** For planned maintenance, drain one Kubernetes node at a time and wait for the cluster to return to full health before proceeding. See [Kubernetes maintenance](../platform-guide/kubernetes-maintenance.md).

## Zone lost

**What happens automatically.** A zone outage is the Kubernetes-node case at larger scale: every affected pod is handled individually. What differs is the blast radius, and that is determined by your placement configuration:

- With `zoneSpread: required` and `replicasPerShard` of at least 1, each shard's nodes are hard-spread across zones, so no shard loses both its primary and its replica to a single zone. Every shard fails over or replaces a replica; no shard loses data beyond the replication-lag window.
- With `zoneSpread: bestEffort` (the shipped default), spread is a scheduler preference. A shard whose nodes were co-located in the lost zone loses its data and is recreated empty.

Replacement pods schedule into the surviving zones, subject to `placement.zones` and spread constraints. See [Zone-aware placement](zone-aware-placement.md) for the mechanics, including what happens when surviving capacity is insufficient.

**Timeline.** Failover detection per shard is bounded by the forced 5-second `cluster-node-timeout`; replacing the lost pods proceeds shard by shard and depends on available capacity in the surviving zones.

**Data at risk.** With required spread and replicas: the replication-lag window per affected shard. Without: potentially entire shards.

**Manual action.** None for recovery, provided surviving zones have capacity. Placement is enforced at scheduling time only: when the zone returns, the operator does not proactively rebalance existing pods back into it. Spread is restored as pods are naturally replaced.

## The operator itself is down

**What happens automatically.** Nothing breaks. The data plane is independent of the operator: Valkey pods serve clients, replication continues, and Valkey's own automatic failover still promotes replicas when quorum allows, because it is native cluster behavior, not operator behavior.

What pauses is everything the operator does: dead pods are not replaced, quorum-lost shards are not taken over, replica counts are not restored, and spec changes (scaling, upgrades, placement) are not acted on. Reconciliation is stateless: the operator keeps no in-memory workflow state. When it returns, it inspects the actual cluster state and converges toward the current spec, including changes applied while it was down. Nothing is lost by editing a `ValkeyCluster` during operator downtime; the changes queue.

**Timeline.** Recovery of pending work begins as soon as the operator deployment is back and proceeds one action per tick.

**Data at risk.** None from the operator outage itself, but the fleet is running without self-healing, so a coincident pod failure that would normally be repaired automatically stays broken until the operator returns.

**Manual action.** Restore the operator deployment. The operator ships as a single replica with no health endpoint, so alert on deployment availability. See [Monitoring](../platform-guide/monitoring.md).

## Faults during scaling or upgrades

**What happens automatically.** A pod failure that lands in the middle of a scale-out, scale-in, or rolling upgrade does not wedge the reconciler. Because the operator recomputes the difference between actual and desired state on every tick, rather than executing a stored plan, it absorbs the fault (failing over or replacing the dead node, exactly as above). It then continues converging to the target spec. This is verified behavior: clusters killed mid-scale-up, mid-scale-down, and mid-upgrade all converge to the target shape with full hash-slot coverage.

**Timeline.** The operator prioritizes stability over progress: primary recovery gates the rest of the pipeline, so an in-flight operation pauses while a shard is unhealthy and resumes afterwards.

**Data at risk.** Whatever the underlying pod failure implies (see the per-event sections above); the in-flight operation itself does not add exposure classes beyond those.

**Manual action.** None. If a cluster appears stuck, see [Troubleshooting](troubleshooting.md) before intervening.

## Watching a failover happen

The abstract sequences above look like this in practice. Take `my-cluster` with three shards and one replica per shard (six nodes), and suppose shard 1's primary dies while quorum holds:

1. **Steady state.** `kubectl get valkeynodes -n my-app` shows six nodes, all `Active` lifecycle; `kubectl get valkeycluster` shows `STATE: Active`.
2. **The pod dies.** `kubectl get pods -n my-app` shows the pod gone (if deleted) or failed (if the process died; `restartPolicy: Never` means it stays that way). Writes to shard 1's slots start failing. The `ValkeyCluster` still shows `Active`: cluster state does not track individual pod health, which is why [Monitoring](../platform-guide/monitoring.md) has you watch pods and logs, not only the state column.
3. **Detection, then promotion.** After the 5-second `cluster-node-timeout` window, the surviving nodes mark the primary failed, and shard 1's replica wins the election that follows. Writes to shard 1 succeed again; cluster-aware clients converge on the new primary via topology refresh. The operator's log shows `primary unhealthy but replicas exist, waiting for auto-failover` while it deliberately stands back.
4. **Cleanup and replacement.** On following ticks the operator forgets the dead node from every live node, deletes its `ValkeyNode`, and creates a replacement replica for shard 1. `kubectl get valkeynodes` now shows five `Active` plus one `Joining` node with a fresh random-suffix name.
5. **Sync completes.** The replacement finishes its initial sync from the new primary (time scales with the shard's dataset), the log shows `completed join`, and its lifecycle flips to `Active`. The cluster is back to six `Active` nodes with `replicasPerShard: 1` restored.

The quorum-lost variant differs only at step 3: with too few primaries for an election, nothing is promoted until the operator observes the condition on a following tick and forces the takeover itself (log line: `no quorum — issued TAKEOVER on replica`). Steps 4 and 5 proceed identically.

## Halting reconciliation deliberately

No per-cluster pause mechanism exists. If you need the operator to stop acting on your clusters entirely (for example, during an incident investigation where you want no automated topology changes), the only lever is blunt. Scale the operator deployment to zero.

```bash
kubectl -n valkey-operator scale deployment/valkey-operator --replicas=0
```

All Valkey clusters keep serving traffic (see the previous section). Restore with `--replicas=1`; the operator picks up where the actual state and the specs disagree.

:::warning
While the operator is scaled down, no cluster is self-healing: dead pods are not replaced, failed primaries without quorum are not recovered, and replica counts are not restored. Do not leave the operator scaled to zero longer than necessary, and never as a steady state.
:::
