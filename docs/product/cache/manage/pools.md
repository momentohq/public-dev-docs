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
Momento Cache is available in limited preview, and its Capacity Pool and Database CLI command
groups are also in preview. [Sign in or sign up in the console](https://console.gomomento.com/)
and select **Request access**.
:::

The product variants map to the implementation mode names: **Cluster (explicit)** and **Flex
(managed)**. Current preview console builds may show only `Explicit` or `Managed` in some controls.

Available capacity is configured Valkey `maxmemory` per primary shard multiplied by the number of
primary shards. Replicas do not add available capacity. Flex usage includes deployed `maxmemory` on
primaries and replicas; Cluster usage is the deployed instance type and count. Memory utilization
is the separate ratio of live `used_memory` to deployed `maxmemory`.

Review the default [service limits](/product/cache/manage/limits) before you create or scale a Pool.

## Create a Pool

With the CLI, use `momento preview pool create`. Cluster requires an instance type, shard
count, fixed replica count, and AZ IDs; Flex requires capacity bounds, replication bounds, and AZ
IDs. See [Create a Capacity Pool](/product/cache/manage/cli#create-a-capacity-pool) for exact
commands.

In the limited-preview console:

1. Open **Capacity Pools** and select **Create pool**.
2. Choose the region, enter the Pool name, and choose Cluster (explicit) or Flex (managed).
3. For Cluster, enter instance type, shard count, and replicas per shard. For Flex, enter minimum
   and maximum GiB plus minimum and maximum replicas per shard.
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

Scaling is an edit to the Pool's configuration. For a Cluster Pool, you can change instance type,
shard count, replicas per shard, or zones. For a Flex Pool, you can change capacity bounds,
replication bounds, or zones. A Pool cannot switch between Cluster and Flex after creation.

1. With the CLI, run `momento preview pool update` with the fields to change. The CLI infers
   Cluster from `--instance-type` or `--shard-count` and Flex from `--capacity-gib`; include the
   Pool's current `--mode cluster|flex` when changing only replicas or zones. In the console, open
   the Pool's **Overview** tab and select **Edit**.
2. Review the before-and-after shape and the stated impact before you apply.
3. Apply. The Pool stays `active` while the service converges the cluster to the new shape.
   Progress, or a propagation-time blocking issue such as insufficient capacity, is surfaced as a
   diagnostic.

The CLI accepts only the fields you want to change; the console submits the reviewed configuration
from its edit form. Mode and region are fixed. A Flex bounds update replaces both bounds for that
dimension. Increasing primary shards adds available capacity; increasing replicas adds redundancy
and billable usage without adding available capacity. Changing the instance type triggers a
rolling, make-before-break update. The service works one shard at a time, adding a healthy
replacement before removing an old node. This design preserves healthy capacity during the
change without making a no-disruption guarantee.

For Flex, `current_capacity_gib` is the last settled allocation. `target_capacity_gib` is the
allocation the Pool is converging to and differs only while a scale is in flight. They are current
and target values of the same available-capacity quantity. The literal field names remain the
current interface identifiers for this quantity.

For an active Cluster Pool, a capacity-reducing request is checked against fresh memory telemetry
before the update is stored. If the current data would not fit, or usage cannot be verified, the
request is rejected; adjust the target shape or retry after usage can be verified. The
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
