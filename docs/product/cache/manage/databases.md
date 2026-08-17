---
sidebar_label: Manage Databases
title: Manage Databases
description: Create, list, connect to, and delete Databases with the preview CLI or private-preview console.
---

<!-- Projects: cache2/concepts/database, cache2/interfaces/momento-cli, cache2/interfaces/console, cache2/interfaces/control-plane-api -->

# Manage Databases

A [Database](/product/cache/concepts/database) is a logical container pinned to exactly one
[Capacity Pool](/product/cache/concepts/capacity-pool). Multiple Databases can share one Pool's
compute and memory. This page covers creating, listing, connecting to, and deleting Databases with
the [Momento CLI](/product/cache/manage/cli) or console.

:::note[Preview availability]
The Database CLI commands are in preview. The Capacity Pools console workflow is a private preview
and is not enabled in production for every account.
:::

A Database is a metadata object: creating one allocates a slot on its Pool, and deleting one
reclaims that slot. A Database has no mutable fields, so there is no update operation. To change the
capacity a Database runs on, scale its [Pool](/product/cache/manage/pools) instead.

## Create a Database

Create a Database on an existing, `active` Pool in the selected region. The Database is pinned to
that Pool for its lifetime and cannot move to another Pool.

1. Choose the target Capacity Pool and a Database name that is unique for your account in the
   selected region.
2. Run `momento preview database create-database --database-name <database> --pool-name <pool>
   --profile <profile>`.
3. In the private-preview console, you can instead open **Capacity Pools**, select the Pool, open
   **Databases**, choose **Create Database**, and enter the name.
4. Connect a client to the Database through the region's RESP endpoint. See
   [Connect a client](/product/cache/connect/clients).

The Database name is how clients select it at connection time: the name is the `AUTH` username, and
one connection serves exactly one Database. See [Security](/product/cache/security) for the
connection credential model.

## List and inspect Databases

`momento preview database list-databases --profile <profile>` lists every Database and backing Pool
in the profile's selected region. The CLI does not provide Database Describe.

The console aggregates Databases across configured regions. Search the Capacity Pools overview by
Database name to find its Pool, then open that Pool's **Databases** tab. Databases do not have
standalone console detail pages. The lower-level API can
[describe one Database](/product/cache/api-reference/database#describe-database).

## Get the connection endpoint

In the private-preview console, open the Pool's **Databases** tab and copy the RESP endpoint. All
Databases in that region share it. The console does not vend a credential from this tab; create or
retrieve the API key/token separately through Key Management.

## Delete a Database

Delete removes the Database and frees its slot on the Pool. Deletion is synchronous in the control
plane; the underlying resources are reclaimed afterward.

1. Confirm no client depends on the Database.
2. Run `momento preview database delete-database --database-name <database> --profile <profile>`,
   or use the delete action beside the Database on the console's **Databases** tab and confirm.

:::note

A Pool cannot be deleted while any Database is still pinned to it. Delete every Database on a Pool
before you [delete the Pool](/product/cache/manage/pools).

:::

## Isolation between Databases

Isolation is guaranteed at the Pool boundary, not between Databases that share a Pool. Databases on
the same Pool draw from the same capacity and are subject to noisy-neighbor effects from one
another. When a workload needs a hard performance boundary, give it its own Pool. See
[Isolation](/product/cache/concepts/isolation) for the full model.
