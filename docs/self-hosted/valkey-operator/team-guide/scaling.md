---
title: Scaling
description: Grow or shrink a ValkeyCluster by editing spec.shards and spec.replicasPerShard, and what to expect while the operator rebalances.
sidebar_position: 4
---

# Scaling

This guide covers changing the size of a Valkey cluster you own: adding or removing shards, and adding or removing replicas. It also covers what to expect while the Momento Valkey Operator carries out the change.

## Scaling shards

Edit `spec.shards` to change the number of shards:

```bash
kubectl -n my-app patch valkeycluster my-cluster --type merge -p '{"spec": {"shards": 4}}'
```

Scaling out or in changes how the cluster's 16384 hash slots are distributed, not just how many nodes exist. The operator moves slots between shards with a single server-side command that starts an asynchronous slot migration. The migration proceeds one batch of slots per reconciliation tick, until every shard holds an even share.

- **Scaling out** adds new, empty shards and migrates slots from existing shards onto them until the distribution is even again.
- **Scaling in** fully drains the smallest shard (migrating all of its slots to other shards) before removing it. Only the drained shard's primary and replicas are removed; nothing else in the cluster is touched.

:::info
Slot migration relies on a Valkey 9+ command. Clusters running an older Valkey image cannot reshard. See [Compatibility](../support/compatibility.md) for version requirements.
:::

## Scaling replicas

Edit `spec.replicasPerShard` to change replica count uniformly across every shard:

```bash
kubectl -n my-app patch valkeycluster my-cluster --type merge -p '{"spec": {"replicasPerShard": 2}}'
```

The operator adds or removes replicas evenly, one node at a time, until every shard reaches the target count. This doesn't move any hash slots; only the number of copies of each shard's data changes.

## What to expect

Both kinds of scaling happen while the cluster reports `Active`: there's no separate "scaling" state to watch for beyond the shard and replica counts converging to your new values. How long a rebalance takes depends on how much data has to move, which scales with the size of your dataset. This guide won't give you a duration to expect because it depends entirely on your cluster's data volume and the pace of migration batches.

Client impact during scaling is minimal for a properly configured cluster-aware client: as slots move, clients following `MOVED` redirects and refreshing topology (see [Connecting](connecting.md#use-a-cluster-aware-client)) adapt automatically. Scaling out adds capacity without disrupting existing shards' availability; scaling in only touches the shard being drained.

## Edits while the cluster is still Creating

If you change `spec.shards` or `spec.replicasPerShard` while the cluster is still in its initial `Creating` bootstrap, the edit is not lost, but it's also not picked up immediately. Bootstrap works from a snapshot of the spec it captured when it began (`status.targetSpec`), not the live spec. Your edit takes effect only after bootstrap completes and the cluster reaches `Active`. See [Cluster status](../reference/cluster-status.md) for the full snapshot semantics.

One consequence worth knowing before you provision: **a spec mistake made at creation time generally cannot be fixed by editing the spec while the cluster is still `Creating`.** A wrong `shards` value waits out the whole bootstrap before your correction applies. Fields outside the topology (like `configRef` or `placement`) only shape nodes the bootstrap has not created yet; they do not repair nodes already built with the wrong values. If a cluster is stuck in `Creating` because of a spec-level problem, see the wedged-bootstrap entry in [Troubleshooting](../operations/troubleshooting.md). The fix is usually to delete and recreate the cluster with the corrected spec, not to patch it in place.

Once a cluster is `Active`, this snapshot behavior doesn't apply. A scaling edit made while a previous scaling operation is still rebalancing is picked up as the new target on the next reconciliation pass. You don't need to wait for one scaling change to finish before requesting another.
