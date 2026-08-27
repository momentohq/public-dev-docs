---
sidebar_label: Provisioning and sizing
title: Provisioning and sizing
description: Size a Capacity Pool with Cluster (by instance) or Flex (by capacity) provisioning.
---

<!-- Projects: cache2/concepts/provisioning-modes, cache2/concepts/capacity-and-usage, cache2/concepts/capacity-sizing-and-minima, cache2/concepts/managed-autoscaling, cache2/capabilities/sizing-and-isolation-guidance -->

# Provisioning and sizing

You size a [Capacity Pool](/product/cache/concepts/capacity-pool) when you create it. Momento Cache offers two ways
to size a pool, corresponding to its two variants: **Cluster** (size by instance) and **Flex**
(size by available capacity in GiB). You choose one when you create the Pool.

## Cluster: size by instance

A Cluster pool takes four inputs:

- **Instance type** for the nodes.
- **Shard count**, the number of Valkey shards the keyspace is split across.
- **Replica count**, the number of replicas of each shard for redundancy and read
  capacity.
- **Availability zones** the pool may use. Choose more than one for production.

Cluster sizing exists because teams that plan capacity and cost at the instance level need it.
You keep full control of the topology and its cost. Cluster requires at least one primary shard,
permits zero replicas, and starts with the `t4g.micro` instance type.

## Flex: size by capacity

A Flex pool abstracts over instances. Instead of naming instance types and counts, you choose:

- **Minimum and maximum available capacity in GiB** for the pool. Set the bounds equal to pin
  capacity.
- **Minimum and maximum replicas per shard** for redundancy and read capacity. Set the bounds equal
  to pin replication.
- **Availability zones** the pool may use. Choose more than one for production.

Momento maps these bounds to available configurations and automatically grows or shrinks the
topology within the capacity range as memory utilization changes. Flex requires at least three
primary shards and permits zero replicas. Flex offers **Standard** and **Performance** capacity
families; Performance provides more throughput. Flex suits teams that want capacity-oriented
sizing without managing instance topology.

Available capacity is the configured Valkey `maxmemory` per primary shard multiplied by the number
of primary shards. Replicas do not add available capacity. Flex usage includes deployed
`maxmemory` on both primaries and replicas, while Cluster usage counts every deployed instance.
Memory utilization measures live `used_memory` relative to `maxmemory`; it is not another capacity
value.

Flex allocates `maxmemory` from instance-spec RAM as follows:

| Instance-spec RAM | Valkey `maxmemory` |
| ---: | ---: |
| 1 GiB | 0.375 GiB |
| 2 GiB | 1 GiB |
| 4 GiB | 2 GiB |

These are the special cases at or below 4 GiB. Above 4 GiB, `maxmemory` is five-eighths of
instance-spec RAM. The exact instance-family composition and full allocation ladder are not part
of the public sizing model.

## Choosing a shape

- **Shards** determine how the keyspace and throughput scale horizontally. Add shards for more
  memory and aggregate throughput.
- **Replica count** adds redundancy and read capacity. Flex expresses this choice as replication
  bounds.
- **Zones** control where the pool may run. Momento automatically distributes nodes across the
  configured zones for you.

A configuration described as high availability (HA) has at least one replica per shard and spans
at least two availability zones. A zero-replica or single-zone Pool is not HA. HA is configuration
guidance, not a service guarantee, API setting, or one exact topology.

You can change any of these after creation by updating the pool. See
[Manage Capacity Pools](/product/cache/manage/pools).

## Choosing a variant

Use **Cluster** when you plan capacity and cost at the instance level and want full control of
the topology. Use **Flex** when you would rather size by GiB and let Momento manage low-level
configuration. The two are otherwise the same service with the same Valkey, the same gateway,
and the same capabilities.
