---
sidebar_label: Manage Capacity Pools
title: Manage Capacity Pools
description: Scale, monitor, and delete a Capacity Pool from the console or the control-plane API.
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/interfaces/control-plane-api -->

# Manage Capacity Pools

This page covers common management operations for a [Capacity Pool](/product/cache/concepts/capacity-pool),
such as scaling, monitoring, and deleting it. Each activity can be performed in the console or
via the [control-plane API](/product/cache/api-reference/capacity-pool).

## Scale a pool

Scaling is an edit to the pool's configuration. For a Cluster pool, you can change instance type,
shard count, replicas per shard, or zones. For a Flex pool, you can change capacity bounds,
replication bounds, or zones. A pool cannot switch between Cluster and Flex after creation.

1. In the console, open the pool and edit its configuration. With the API, send
   `PATCH /capacity_pool/{name}` with the fields to change.
2. Review the before-and-after shape and the stated impact before you apply.
3. Apply. The pool stays `active` while the service converges the cluster to the new shape.
   Progress, or a propagation-time blocking issue such as insufficient capacity, is surfaced as a
   diagnostic.

An API PATCH can contain only the fields you want to change; the console submits the reviewed
configuration from its edit form. A present Flex `capacity` or `replication` object replaces both
bounds for that dimension. Increasing shards or replicas adds capacity. Changing the instance type
triggers a rolling update. The service gracefully replaces each node, one at a time, adding a new
healthy node before removing an old one so that the pool continues to handle requests without
disruption.

For an active Cluster pool, a capacity-reducing request is checked against fresh memory telemetry
before the update is stored. If the current data would not fit, or usage cannot be verified, the
API returns `409 Precondition Failed`; adjust the target shape or retry after usage can be verified.

## Read diagnostics

A pool reports diagnostics rather than entering a failed state. If the service cannot converge
to an accepted configuration, `Describe` returns a diagnostic such as "insufficient capacity".
The service perpetually attempts to converge towards the target state, so it will automatically
recover as soon as any external impediments like zone or services outages are resolved.

To clear a capacity diagnostic, update the pool's provisioning toward a shape that can be
satisfied, such as a different instance type or set of zones. The next reconcile tick
will pick up that change and clear the diagnostic upon successful convergence.

An accepted Cluster update can also report `scale_blocked_by_utilization` if it becomes unsafe
between request-time preflight and propagation. That stored update is retried automatically. This
differs from a request rejected synchronously with `409`, which is not stored and must be adjusted
or retried by the caller.

## Delete a pool

Delete removes the pool and its underlying resources. You must delete every
[Database](/product/cache/concepts/database) in a pool before deleting it. The delete action is
rejected while any Database still exists in a pool.

1. Delete the Databases on the pool.
2. Delete the pool (console, or `DELETE /capacity_pool/{name}`). It enters a deleting state
   and is removed when teardown completes.
