---
sidebar_label: Database
title: Database
description: A Database is a logical cache that runs on a Capacity Pool.
unlisted: true
---

<!-- Projects: cache2/concepts/database -->

# Database

A Database is a logical cache that runs on a [Capacity Pool](/product/cache/concepts/capacity-pool). It is the logical
container for your keys and values. You connect to a Database with a standard Valkey or Redis client
through the [shared gateway](/product/cache/concepts/connectivity-and-gateway).

## Databases and pools

A Database belongs to exactly one Capacity Pool. You can run several Databases on the same
pool, and they share the pool's compute and memory. Because they share capacity, Databases on
one pool are subject to noisy-neighbor effects from each other. Isolation is guaranteed at the
pool boundary, not between Databases on the same pool. See [Isolation](/product/cache/concepts/isolation).

Choose how to group Databases onto pools based on the isolation and capacity you want. Put
workloads that must not contend on separate pools. Pack workloads that can share capacity onto
one pool to use it efficiently.

## Lifecycle

You create a Database by naming it and assigning it to a pool. Creation is instant, because it
does not provision infrastructure. The capacity already exists in the pool. Deleting a Database
removes it immediately. The underlying capacity is reclaimed in the background and returns to
the pool for reuse.

A Database has no mutable settings today, so there is no update operation. You manage capacity
by changing the pool, not the Database.

## Connecting

To connect, point a Valkey client at the pool's gateway endpoint with your Database's
credentials. See [Connectivity and the gateway](/product/cache/concepts/connectivity-and-gateway) and the
[control-plane API reference](/product/cache/database/http-api).
