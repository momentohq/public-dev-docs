---
sidebar_label: Provisioning and sizing
title: Provisioning and sizing
description: Size a Capacity Pool with Cluster (by instance) or Flex (by capacity) provisioning.
---

<!-- Projects: cache2/concepts/provisioning-modes, cache2/concepts/capacity-and-usage, cache2/concepts/capacity-sizing-and-minima, cache2/concepts/managed-autoscaling, cache2/capabilities/sizing-and-isolation-guidance -->

# Provisioning and sizing

Momento Cache offers two ways to size a [Capacity Pool](/product/cache/concepts/capacity-pool):

- **Cluster**, sized by instance
- **Flex**, sized by GiB

A pool's capacity model is specified during creation. The selected capacity model cannot be
changed after the pool is created. However, the pool's capacity parameters can be reconfigured
at any time after creation.

## Choosing a variant

Use **Cluster** when you plan capacity and cost at the instance level and want full control of
the topology. Use **Flex** when you would rather size by GiB and let Momento manage low-level
configuration. The two are otherwise the same service with the same Valkey, the same gateway,
and the same capabilities.

## Cluster: size by instance

Cluster sizing provides low-level control over cluster topology in order to fully optimize
performance and cost. A Cluster pool takes four inputs:

- **Instance type** for the nodes.
- **Shard count**, the number of Valkey shards the keyspace is split across.
- **Replica count**, the number of replicas of each shard for redundancy and read
  capacity.
- **Availability zones** the pool may use. Choose more than one for production.

Cluster supports up to 100 primary nodes and up to five replicas per shard. A configuration
without replicas may result in data loss. Use the [discovery API](../api-reference/capacity-pool.md#capacity-offering-discovery)
to confirm which instance types available to your account and region.

Each Cluster node has an advertised amount of memory dedicated to Valkey. The
`reserved-memory-percent` parameter reserves a portion of that memory for nondata overhead such
as output buffers and memory loss due to fragmentation. Valkey `maxmemory` is set to the
advertised memory minus the reserve. For example, with 13.5 GB of advertised memory and a 25% reserve, `maxmemory` is about 10.1 GB.

A Cluster pool measures usage for billing purposes by counting the number of deployed instances
of each type.

## Flex: size by capacity

Flex sizing provides powerful, streamlined capacity management. A Flex pool abstracts away
instances and topology management. Instead, you choose:

- **Capacity range in GiB** for the Pool. Set the bounds equal to pin capacity at a specific value.
- **Replica range per shard** for redundancy and read capacity. Set the bounds equal to pin
  replication at a specific value.
- **Availability zones** the pool may use. Choose more than one for production.

Momento maps these bounds to available configurations and automatically grows or shrinks the
topology within the specified range as memory utilization changes. Flex supports three or more
primary nodes and zero or more replicas per shard. A configuration without replicas may result in
data loss.

Flex offers **Standard** and **Performance** capacity families. The Performance family provides
more throughput and compute than the Standard family.

The available capacity for a pool is the sum of Valkey's `maxmemory` as configured across all
primary nodes. Replicas enable failover and improve read throughput, but do not increase
a pool's available capacity.

A Flex pool measures usage for billing purposes as the sum of Valkey's `maxmemory` across _all_
deployed nodes, including both primaries and replicas.

## Choosing the shape of a pool 

When configuring a Capacity Pool, consider how each property affects overall performance:

- **Shards** determine how the keyspace and throughput scale horizontally. Add shards for more
  memory and aggregate throughput.
- **Replica count** adds redundancy and read capacity.
- **Zones** control where the pool may run. Momento automatically distributes nodes across the
  configured zones for you.

A high-availability (HA) configuration should have at least one replica per shard and span
at least two availability zones. A high-availability configuration can still result in data
loss due to catastrophic events, such as a full region outage at the cloud service provider.

A capacity pool's configuration can be updated at any time after creation. See
[Manage Capacity Pools](/product/cache/manage/pools).
