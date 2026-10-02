---
title: Scaling
description: Grow or shrink a ValkeyCluster by editing spec.shards and spec.replicasPerShard, and what to expect while the operator rebalances.
sidebar_position: 4
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

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

The supported Valkey image floor is 9.0.1. See [Compatibility](../support/compatibility.md).

## Automatic shard scaling

Set spec.autoscaling to scale shards from utilization rather than editing spec.shards by hand. While enabled, spec.shards is only the initial count; minShards and maxShards control the range. See [Autoscaling](autoscaling.md) for the configuration and decision rules.

## Scaling replicas

Edit `spec.replicasPerShard` to change replica count uniformly across every shard:

```bash
kubectl -n my-app patch valkeycluster my-cluster --type merge -p '{"spec": {"replicasPerShard": 2}}'
```

The operator adds or removes replicas evenly, one node at a time, until every shard reaches the target count. This doesn't move any hash slots; only the number of copies of each shard's data changes.

## What to expect

Scaling and resharding are rolling changes represented by Updating. Watch node lifecycles and the topology converge to the target; see [Cluster status](../reference/cluster-status.md). How long a rebalance takes depends on how much data has to move, which scales with the size of your dataset. This guide won't give you a duration to expect because it depends entirely on your cluster's data volume and the pace of migration batches.

Client impact during scaling is minimal for a properly configured cluster-aware client: as slots move, clients following `MOVED` redirects and refreshing topology (see [Connecting](connecting.md#use-a-cluster-aware-client)) adapt automatically. Scaling out adds capacity without disrupting existing shards' availability; scaling in only touches the shard being drained.

## Edits while the cluster is still Creating

Spec edits are rejected at admission while Creating. Wait for Active before changing topology. If a creation-spec mistake prevents bootstrap, delete and recreate the cluster with the corrected spec. See [Troubleshooting](../operations/troubleshooting.md).

Once a cluster is Active, you can request topology changes. A scaling edit made while a previous scaling operation is still rebalancing is picked up as the new target on the next reconciliation pass. You don't need to wait for one scaling change to finish before requesting another.
