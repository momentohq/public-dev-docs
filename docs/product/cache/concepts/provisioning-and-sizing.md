---
sidebar_label: Provisioning and sizing
title: Provisioning and sizing
description: Size a Capacity Pool with Cluster (by instance) or Flex (by capacity) provisioning.
unlisted: true
---

<!-- Projects: cache2/concepts/provisioning-modes, cache2/capabilities/sizing-and-isolation-guidance -->

# Provisioning and sizing

You size a [Capacity Pool](/product/cache/concepts/capacity-pool) when you create it. Momento Cache offers two ways
to size a pool, corresponding to its two variants: **Cluster** (size by instance) and **Flex**
(size by capacity in GB). You choose one when you create the pool.

## Cluster: size by instance

A Cluster pool takes four inputs:

- **Instance type** for the nodes.
- **Shard count**, the number of Valkey shards the keyspace is split across.
- **Replica count**, the number of replicas of each shard for redundancy and read
  capacity.
- **Availability zones** the pool may use. Choose more than one for production.

Cluster sizing exists because teams that plan capacity and cost at the instance level need it.
You keep full control of the topology and its cost.

## Flex: size by capacity

A Flex pool abstracts over instances. Instead of naming instance types and counts, you choose:

- **Capacity in GB** for the pool.
- The **standard** or **performance** profile, which controls the ratio of compute to storage. Choose
  a profile based on whether your workload is memory-bound or compute-bound.
- **Replica count**, the number of replicas of each shard for redundancy and read
  capacity.
- **Availability zones** the pool may use. Choose more than one for production.

Momento maps your capacity and profile to instances and manages the topology for you. Flex suits
teams that want predictable sizing and good defaults without managing instance topology.

## Choosing a shape

- **Shards** determine how the keyspace and throughput scale horizontally. Add shards for more
  memory and aggregate throughput.
- **Replica count** adds redundancy and read capacity. Use at least one replica per shard
  for production.
- **Zones** control where the pool may run. Momento automatically distributes nodes across the
  configured zones for you. Choose two or more zones for production so that an outage in one zone
  does not take the pool down.

You can change any of these after creation by updating the pool. See
[Manage Capacity Pools](/product/cache/manage/pools).

## Choosing a variant

Use **Cluster** when you plan capacity and cost at the instance level and want full control of
the topology. Use **Flex** when you would rather size by GB and let Momento manage low-level
configuration. The two are otherwise the same service with the same Valkey, the same gateway,
and the same capabilities.
