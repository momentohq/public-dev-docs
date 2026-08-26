---
sidebar_label: Manage Databases
title: Manage Databases
description: Create, list, connect to, and delete Databases with the preview CLI or limited-preview console.
---

<!-- Projects: cache2/concepts/database, cache2/interfaces/momento-cli, cache2/interfaces/console, cache2/interfaces/control-plane-api, cache2/constraints/service-limits, cache2/constraints/database-fgac -->

# Manage Databases

A [Database](/product/cache/concepts/database) is a logical container pinned to exactly one
[Capacity Pool](/product/cache/concepts/capacity-pool). Multiple Databases can share one Pool's
compute and memory. This page covers creating, listing, connecting to, and deleting Databases with
the [Momento CLI](/product/cache/manage/cli) or console.

:::note[Preview availability]
Momento Cache is available in limited preview, and its Database CLI command group is also in
preview. [Sign in or sign up in the console](https://console.gomomento.com/) and select
**Request access**.
:::

A Database is a metadata object: creating one allocates a slot on its Pool, and deleting one
reclaims that slot. A Database has no mutable fields, so there is no update operation. To change the
capacity a Database runs on, scale its [Pool](/product/cache/manage/pools) instead.

## Create a Database

Create a Database on an existing, `active` Pool in the selected region. The Database is pinned to
that Pool for its lifetime and cannot move to another Pool.

1. Choose the target Capacity Pool and a Database name that is unique for your account in the
   selected region.
2. Run `momento preview database create --name <database> --pool-name <pool> --profile <profile>`.
3. In the limited-preview console, you can instead open **Capacity Pools**, select the Pool, open
   **Databases**, choose **Create Database**, and enter the name.
4. Connect a client to the Database through the region's RESP endpoint. See
   [Connect a client](/product/cache/connect/clients).

The Database name is how clients select it at connection time: the name is the `AUTH` username, and
one connection serves exactly one Database. See [Security](/product/cache/security) for the
connection credential model.

Database creation is subject to the account and per-Pool [service limits](/product/cache/manage/limits).
Use a named-Database permission when the client should not reach other Databases; see
[Database command permissions](/product/cache/security#database-command-permissions).

## List and inspect Databases

`momento preview database list --profile <profile>` lists every Database and backing Pool in the
profile's selected region. Use `momento preview database describe --name <database> --profile <profile>`
to inspect one Database.

The console aggregates Databases across configured regions. Search the Capacity Pools overview by
Database name to find its Pool, then open that Pool's **Databases** tab. Databases do not have
standalone console detail pages. The lower-level API can
[describe one Database](/product/cache/api-reference/database#describe-database).

## Get the connection endpoint

You can get a sample RESP command in either of two ways:
- In the preview CLI, `create` or `describe` your database.
- In the limited-preview console, open the **Capacity Pools** panel, select your Pool, and open its **Databases** tab.

The Database CLI and panel do not vend a credential. Use the API key you created through Key Management,
or another appropriate Momento credential, as the password and treat it as a secret.

## Delete a Database

Delete removes the Database and frees its slot on the Pool. Deletion is synchronous in the control
plane; the underlying resources are reclaimed afterward.

1. Confirm no client depends on the Database.
2. Run `momento preview database delete --name <database> --profile <profile>`,
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
