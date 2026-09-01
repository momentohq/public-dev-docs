---
sidebar_label: Manage Capacity Pools
title: Manage Capacity Pools
description: Create, inspect, scale, monitor, and delete a Capacity Pool with the preview CLI or limited-preview console.
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/capacity-and-usage, cache2/concepts/managed-autoscaling, cache2/concepts/capacity-pool-lifecycle-and-diagnostics, cache2/interfaces/momento-cli, cache2/interfaces/console, cache2/capabilities/onboarding-flow, cache2/interfaces/control-plane-api, cache2/interfaces/capacity-pool-api, cache2/interfaces/capacity-pool-diagnostics-api, cache2/constraints/service-limits, cache2/capabilities/capacity-pool-metrics -->

# Manage Capacity Pools

This page covers common management operations for a
[Capacity Pool](/product/cache/concepts/capacity-pool) with the
[Momento CLI](/product/cache/manage/cli) or console.

:::note[Preview availability]
Momento Cache (Cluster and Flex) is available in limited preview. [Request access](/product/cache/getting-started#request-preview-access) before creating a
Pool.
:::

## Available capacity and usage

The available capacity for a pool is the sum of Valkey's `maxmemory` as configured across all
primary nodes. Replicas enable failover and improve read throughput, but do not increase
a pool's available capacity.

A Cluster pool measures usage for billing purposes by counting the number of deployed instances
of each type.

A Flex pool measures usage for billing purposes as the sum of Valkey's `maxmemory` across _all_
deployed nodes, including both primaries and replicas.

Review the default [service limits](/product/cache/manage/limits) before you create or scale a Pool.

## Create a Pool

With the CLI, use `momento preview pool create`. Cluster requires an instance type, shard
count, fixed replica count, and AZ IDs; Flex requires capacity bounds, replication bounds, and AZ
IDs. See [Create a Capacity Pool](/product/cache/manage/cli#create-a-capacity-pool) for exact
commands.

In the limited-preview console:

1. Open **Capacity Pools** and select **Create pool**.
2. Choose the region, enter the Pool name, and choose Cluster (explicit) or Flex (managed).
3. For Cluster, enter instance type, shard count, and replicas per shard. For Flex, enter the
   capacity and replica ranges.
4. Add one or more availability-zone IDs and create the Pool.

The current form exposes these fields directly; it does not provide Production or Dev/Test presets.
The Pool appears with `creating` status while capacity is provisioned.

## List and inspect Pools

Use `momento preview pool list --profile <profile>` to list Pools, provisioning, and active
diagnostics in the profile's region. Use `describe --name <pool>` to inspect one Pool's full details or `get-status --name <pool>` to simply poll its lifecycle status.

The console aggregates configured regions. Use its region filter or search by Pool, region, or
Database name, then select a Pool to open its Overview, Databases, and Metrics tabs. If one region
cannot be reached, the console preserves results from the others and identifies the missing region.

## Scale a Pool

Scale a pool by editing the Pool's configuration. Run the CLI command `momento preview pool update`,
or open the pool's resource detail page in the console.

For a Cluster Pool, you can change instance type, shard count, replicas per shard, or zones. For
a Flex Pool, you can change capacity bounds, replication bounds, or zones. A Pool cannot switch
between Cluster and Flex after creation.

After applying changes to a pool, it will continue to emit an `active` status while it converges
the cluster to the new shape. Progress or blocking issues such as insufficient capacity are
surfaced as diagnostics.

Changing some configurations like instance type triggers a rolling update. The service works
one shard at a time, adding a healthy replacement before removing an old node. This approach
minimizes disruption during the change.

For a Flex Pool, `current_capacity_gib` is the last settled available capacity. `target_capacity_gib`
is the available capacity to which the Pool is converging. These values differ only while the
cluster is actively scaling.

A capacity-reducing request is checked against recent memory telemetry before the update is stored.
If the current quantity of data would not fit, the request is rejected. Adjust the target capacity
or reduce the amount of stored data, then re-submit the configuration change. The
[HTTP reference](/product/cache/api-reference/capacity-pool#update-capacity-pool) documents the
underlying `409 Precondition Failed` response.

## Read diagnostics

A Pool reports diagnostics rather than entering a failed state. If the service cannot converge to
an accepted configuration, `list` and the console Overview return a diagnostic such as
"insufficient capacity". The service perpetually attempts to converge towards the target state, so
it automatically recovers when an external impediment such as a zone or service outage resolves.

To clear a capacity diagnostic, update the Pool's provisioning toward a shape that can be
satisfied, such as a different instance type or set of zones. The next reconcile tick picks up that
change and clears the diagnostic after successful convergence.

An accepted Cluster update can also report `scale_blocked_by_utilization` if it becomes unsafe
between request-time preflight and propagation. That stored update is retried automatically. This
differs from a request rejected synchronously, which is not stored and must be adjusted or retried
by the caller.

## Read metrics

The CLI does not expose Pool metrics. In the limited-preview console, select a Pool and open its
**Metrics** tab. It shows point-in-time memory, CPU, network receive/transmit, and eviction values
from the latest scrape; it does not show historical charts.

For the seven-metric Prometheus scrape and the six-metric conditional CloudWatch contract, see
[Capacity Pool metrics](/product/cache/manage/metrics).

## Delete a Pool

Delete removes the Pool and its underlying resources. You must delete every
[Database](/product/cache/concepts/database) in a Pool first; the action is rejected while any
Database remains.

1. Delete the Databases on the Pool.
2. Run `momento preview pool delete --name <pool> --profile <profile>`, or open the console
   Pool Overview, select **Delete**, and confirm the irreversible action.

The Pool enters `deleting` and is removed when teardown completes. For the lower-level request and
response contract, see the [Capacity Pool API](/product/cache/api-reference/capacity-pool).
