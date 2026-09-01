---
sidebar_label: Capacity Pool
title: Capacity Pool
description: A Capacity Pool is the dedicated Valkey capacity you provision and Momento operates.
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/capacity-and-usage, cache2/concepts/provisioning-modes, cache2/concepts/capacity-pool-lifecycle-and-diagnostics, cache2/constraints/service-limits, cache2/capabilities/capacity-pool-metrics -->

# Capacity Pool

A Capacity Pool is the dedicated Valkey capacity you provision. You declare its size and
Momento provisions and operates the backing cluster, handling the instance lifecycle,
reconciliation, and health. A Capacity Pool is the isolation boundary of Momento Cache.

## Sizing a pool

When you create a Capacity Pool, choose one sizing mode:

- **Cluster (explicit)**: specify instance type, shard count, replicas per shard, and availability
  zones.
- **Flex (managed)**: specify capacity and replication bounds plus availability zones. Momento
  chooses and automatically resizes the backing topology within those bounds.

See [Provisioning and sizing](/product/cache/concepts/provisioning-and-sizing) for how to choose these values and
for the sizing modes the service supports.

## Managing capacity

Available capacity is the configured Valkey `maxmemory` on each primary shard multiplied by the
number of primary shards. Replicas do not add available capacity. Flex usage includes deployed
`maxmemory` on both primary and replica nodes. Cluster usage counts every deployed instance.
Memory utilization is the separate ratio of live `used_memory` to deployed `maxmemory`.

For Cluster, each node reserves roughly 37% of memory for process and nondata overhead. The
remaining five-eighths is configured as Valkey `maxmemory`. See
[Provisioning and sizing](/product/cache/concepts/provisioning-and-sizing#cluster-size-by-instance)
for the sizing relationship.

You can change a pool's size after creation by updating its configuration. Momento converges
the running cluster to the new shape. Scaling behavior and safeguards are covered in
[Manage Capacity Pools](/product/cache/manage/pools).

The default account admission limit is 500 GiB of available capacity. See [Service limits](/product/cache/manage/limits)
for the admission and usage distinction. See [Capacity Pool metrics](/product/cache/manage/metrics)
for memory, eviction, CPU, and network observations.

## Lifecycle

A Capacity Pool moves through three states: `creating`, `active`, and `deleting`. You can
create Databases on a pool once it is `active`. Deleting a pool is rejected while any Database
is still assigned to it; remove the Databases first.

If Momento cannot provision the requested capacity (for example, when a cloud region lacks
capacity for the requested instance type), the pool reports a **diagnostic** that you can read
and monitor. The cluster does not have a failed state, since the control plane will continue
attempting to converge to the target configuration.

To resolve a capacity diagnostic, update
the pool's configuration (for example, choose a different instance type or zones). The control
plane will adjust provisioning to match the new configuration. See
[the API reference](/product/cache/api-reference/capacity-pool) for available diagnostic fields.

## Databases exist within a Capacity Pool

A Capacity Pool provides the compute and storage for [Databases](/product/cache/concepts/database). Databases in
the same pool share its resources. A Database belongs to exactly one pool.
