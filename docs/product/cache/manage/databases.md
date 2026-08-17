---
sidebar_label: Manage Databases
title: Manage Databases
description: Create, list, and delete Databases on a Capacity Pool from the console or the control-plane API.
---

<!-- Projects: cache2/concepts/database, cache2/interfaces/control-plane-api -->

# Manage Databases

A [Database](/product/cache/concepts/database) is a logical container pinned to exactly one
[Capacity Pool](/product/cache/concepts/capacity-pool). Multiple Databases can share the capacity of
one Pool. This page covers creating, listing, and deleting Databases. Each activity can be performed
in the console or via the [control-plane API](/product/cache/api-reference/database).

A Database is a metadata object: creating one allocates a slot on its Pool, and deleting one reclaims
that slot. A Database has no mutable fields, so there is no update operation. To change the capacity a
Database runs on, scale its [Pool](/product/cache/manage/pools) instead.

## Create a Database

Create a Database on an existing, `active` Pool in the selected region. The Database is pinned to
that Pool for its lifetime and cannot move to another Pool.

1. Choose the target Capacity Pool and a Database name that is unique for your account in the
   selected region.
2. Create the Database (console, or `POST /database/{name}` with `{ "pool_name": "<pool>" }`).
3. Connect a client to the Database through the region's RESP endpoint. See
   [Connect a client](/product/cache/connect/clients).

The Database name is how clients select it at connection time: the name is the `AUTH` username, and one
connection serves exactly one Database. See [Security](/product/cache/security) for the connection
credential model.

## List and inspect Databases

The console aggregates Databases across configured regions. `GET /database` lists every Database
for your account in the region served by that API endpoint. Each entry reports the Database name
and the name of the Pool it is pinned to. Describe a single Database (`GET /database/{name}`) to
read the same details for one container in that region.

## Delete a Database

Delete removes the Database and frees its slot on the Pool. Deletion is synchronous in the control
plane; the underlying resources are reclaimed afterward.

1. Confirm no client depends on the Database.
2. Delete the Database (console, or `DELETE /database/{name}`).

:::note

A Pool cannot be deleted while any Database is still pinned to it. Delete every Database on a Pool
before you [delete the Pool](/product/cache/manage/pools).

:::

## Isolation between Databases

Isolation is guaranteed at the Pool boundary, not between Databases that share a Pool. Databases on the
same Pool draw from the same capacity and are subject to noisy-neighbor effects from one another. When a
workload needs a hard performance boundary, give it its own Pool. See
[Isolation](/product/cache/concepts/isolation) for the full model.
