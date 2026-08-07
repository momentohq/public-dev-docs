---
title: Data durability
description: The storage model of operator-managed Valkey clusters (in-memory, ephemeral pod storage) and exactly which events lose data.
sidebar_position: 6
---

# Data durability

This page states the storage model of operator-managed Valkey clusters plainly and enumerates exactly which failure events lose data. Read it before deciding which workloads belong on a Valkey cluster, and before choosing `replicasPerShard` and placement settings.

## The storage model

Valkey clusters managed by the Momento Valkey Operator are **in-memory**. Pod storage is an ephemeral `emptyDir` volume that holds only cluster metadata; the operator requests no PersistentVolumes or PersistentVolumeClaims. **Nothing survives pod termination.** There is no backup or restore facility today: backup/restore is under investigation on the [roadmap](../roadmap.md).

:::warning
Enabling Valkey persistence settings (such as append-only files or snapshots) in a `ValkeyConfig` does not change this. Those files are written to the pod's ephemeral volume and are deleted with the pod, so they do not alter any of the loss semantics below.
:::

Durability in this model comes from three mechanisms working together:

- **Replication**: each shard's data is copied to `replicasPerShard` replicas.
- **Failover**: when a primary dies, a replica is promoted (by Valkey automatically, or forced by the operator) and serving continues from the copy.
- **Placement**: zone and host spread keep a shard's primary and replicas off the same machine and zone, so one infrastructure failure rarely takes out all copies at once. See [Zone-aware placement](../operations/zone-aware-placement.md).

Valkey replication is **asynchronous**: a generic property of Valkey, not specific to this operator. A write acknowledged by a primary might not yet have reached its replicas; if the primary dies at that moment, writes within the replication lag are lost even though a replica takes over.

## Loss semantics by event

| Event | Data impact |
|---|---|
| Replica pod lost | **No data loss.** The primary keeps serving; the operator creates a replacement replica that syncs from the primary. |
| Primary lost, in-sync replica exists | **Writes within the replication lag might be lost** (asynchronous replication, see above). The replica is promoted and serving continues from its copy. |
| Primary lost, **no** replica | **That shard's data is lost.** There is no surviving copy. The operator removes the dead primary from the topology, creates a fresh, empty primary for the shard's slots, and the cluster returns to `Active`: healthy, with a permanent hole in the data. |
| Zone lost | **Depends on placement.** With `zoneSpread: required` and `replicasPerShard` ≥ 1, each shard's members span zones, so surviving replicas exist (subject to replication lag). With best-effort spread, a shard's members might be co-located in the lost zone. See [Zone-aware placement](../operations/zone-aware-placement.md). |
| All pods of one shard lost simultaneously | **That shard's data is lost**, regardless of replica count: every copy was destroyed. The operator restores an empty shard. |
| Full Valkey cluster restart (all pods terminated) | **All data is lost.** The cluster must be repopulated from your systems of record. |

The operator's recovery behavior for each of these events (failover paths, quorum handling, timelines) is cataloged in [Failure modes](../operations/failure-modes.md).

:::info
With `replicasPerShard: 0`, *every* primary pod loss is a data-loss event for that shard, including routine Kubernetes node drains and evictions.
:::

## Mitigations

- **Run `replicasPerShard` ≥ 1 in production, always.** Replication is the only mechanism that gives a shard's data a second copy.
- **Use `zoneSpread: required`.** It makes the per-shard zone spread a hard scheduling constraint, so a shard's copies cannot land in one zone. See [Zone-aware placement](../operations/zone-aware-placement.md).
- **Set resources in curated configs.** Pods with cpu and memory set get Guaranteed quality of service; a config with no `resources` yields BestEffort pods, the first evicted under Kubernetes node pressure, which for an in-memory store means data loss. Size memory with headroom over `maxmemory`. See [Sizing](../operations/sizing.md).
- **Design clients for a re-warmable store.** Treat operator-managed Valkey as a cache or recomputable/re-hydratable store: keep the system of record elsewhere, tolerate misses after a loss event, and handle the brief write failures that accompany a failover. The client-side retry and topology-refresh specifics are in [Connecting to your cluster](../team-guide/connecting.md#resilience-during-a-failover).

The operator's data-safety *mechanisms* during planned operations are precise: replacements join and sync before old nodes retire, slot migration moves a shard's slots before the shard is removed, and a rolling replacement performs one clean, sync-gated failover per shard (see [Reconciliation](reconciliation.md)). But no mechanism changes the fundamentals above: the store is in-memory, replication is asynchronous, and a shard with no surviving copy is gone.
