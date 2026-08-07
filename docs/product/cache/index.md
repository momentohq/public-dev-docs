---
sidebar_label: Overview
title: Momento Cache
description: Fully-managed, dedicated Valkey. Provision isolated capacity and connect any Valkey client through a managed gateway.
---

<!-- Projects: cache2/overview/what-is-cache2, cache2/concepts/capacity-pool, cache2/concepts/database, cache2/concepts/shared-gateway, cache2/interfaces/control-plane-api -->

# Overview

Momento Cache is a fully-managed, dedicated Valkey cluster. Provision isolated capacity
operated by Momento, then connect with any Valkey or Redis client through a managed gateway.
An HTTP API for RESP commands is planned.

Unlike a multi-tenant serverless cache, Momento Cache gives you a dedicated backend sized to
your workload, with isolation at the capacity pool boundary. Unlike running Valkey on your own
infrastructure, you do not manage nodes, failover, or upgrades.

## Variants

Momento Cache comes in two variants that differ only in how you size capacity:

- **Cluster**: configure instance type, shard count, and replica count
- **Flex**: configure storage size in GB and select a performance profile

Both run the same Valkey engine, the same gateway, and the same isolation model, so the rest of
this documentation applies to both. Documentation for the Serverless variant of Momento Cache is
available [here](/cache).

## When to use it

Use Momento Cache when you want managed Valkey with dedicated, predictable capacity: a
replacement for ElastiCache, MemoryDB, or Memorystore, or managed Valkey on a cloud where you
run today. You get standard Valkey compatibility and multi-AZ resilience without operating the
cluster yourself.

## The model

Momento Cache has two primitives:

- A **[Capacity Pool](/product/cache/concepts/capacity-pool)** is the dedicated Valkey capacity you
  provision. You size it (by instance for Cluster, or by capacity for Flex) and choose its
  availability zones; Momento provisions and operates the underlying cluster.
- A **[Database](/product/cache/concepts/database)** is a logical container that runs on a Capacity Pool. You
  can run several Databases on one pool; they share its compute and memory.

You reach a Database through a [shared gateway](/product/cache/concepts/connectivity-and-gateway) using a
standard Valkey client. Isolation is guaranteed at the
[pool boundary](/product/cache/concepts/isolation).

## Get started

The [quickstart](/product/cache/getting-started) walks through provisioning a Capacity Pool, creating a
Database, and connecting a client.

For the control-plane API, see the [reference](/product/cache/api-reference/capacity-pool).

## Availability

Momento Cache runs on AWS today. Support for additional clouds is planned.
