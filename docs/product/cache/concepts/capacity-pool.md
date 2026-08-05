---
sidebar_label: Capacity Pool
title: Capacity Pool
description: A Capacity Pool is the dedicated Valkey capacity you provision and Momento operates.
unlisted: true
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/provisioning-modes -->

# Capacity Pool

A Capacity Pool is the dedicated Valkey capacity you provision. You declare its size and
Momento provisions and operates the backing cluster, handling the instance lifecycle,
reconciliation, and health. A Capacity Pool is the isolation boundary of Momento Cache.

## Sizing a pool

When you create a Capacity Pool, you specify the physical shape of the capacity:

- **Instance type** for the nodes.
- **Shard count**, the number of Valkey shards.
- **Replicas per shard**, for redundancy and read capacity.
- **Availability zones** for placement.

See [Provisioning and sizing](/product/cache/concepts/provisioning-and-sizing) for how to choose these values and
for the sizing modes the service supports.

## Managing capacity

You can change a pool's size after creation by updating its configuration. Momento converges
the running cluster to the new shape. Scaling behavior and safeguards are covered in
[Manage Capacity Pools](/product/cache/manage/pools).

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
[the API reference](/product/cache/capacity-pool/http-api) for available diagnostic fields.

## Databases exist within a Capacity Pool

A Capacity Pool provides the compute and storage for [Databases](/product/cache/concepts/database). Databases in
the same pool share its resources. A Database belongs to exactly one pool.
