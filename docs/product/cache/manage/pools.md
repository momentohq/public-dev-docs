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

Scaling is an edit to the pool's configuration. Change any of the instance type, storage capacity,
shard count, replicas per shard, or zones, and the control plane will converge the running cluster
to the new shape.

1. Open the pool and edit its configuration (or send `PATCH /capacity_pool/{name}` with the
   fields to change).
2. Review the before-and-after shape and the stated impact before you apply.
3. Apply. The pool stays `active` while the service converges the cluster to the new shape.
   Progress, or a blocking issue such as insufficient capacity, is surfaced as a diagnostic.

Send only the fields you want to change. Increasing shards or replicas adds capacity. Changing
the instance type triggers a rolling update. The service gracefully replaces each node, one
at a time, adding a new healthy node before removing an old one so that the pool continues to
handle requests without disruption.

## Read diagnostics

A pool reports diagnostics rather than entering a failed state. If the service cannot converge
to the requested configuration, `Describe` returns a diagnostic such as "insufficient capacity".
The service perpetually attempts to converge towards the target state, so it will automatically
recover as soon as any external impediments like zone or services outages are resolved.

To clear a capacity diagnostic, update the pool's provisioning toward a shape that can be
satisfied, such as a different instance type or set of zones. The next reconcile tick
will pick up that change and clear the diagnostic upon successful convergence.

## Delete a pool

Delete removes the pool and its underlying resources. You must delete every
[Database](/product/cache/concepts/database) in a pool before deleting it. The delete action is
rejected while any Database still exists in a pool.

1. Delete the Databases on the pool.
2. Delete the pool (console, or `DELETE /capacity_pool/{name}`). It enters a deleting state
   and is removed when teardown completes.
