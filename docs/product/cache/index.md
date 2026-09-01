---
sidebar_label: Overview
title: Momento Cache
description: Fully-managed, dedicated Valkey. Provision isolated capacity and connect any Valkey client through a managed gateway.
---

<!-- Projects: cache2/overview/what-is-cache2, cache2/overview/public-roadmap-highlights, cache2/capabilities/onboarding-flow, cache2/concepts/capacity-pool, cache2/concepts/capacity-sizing-and-minima, cache2/concepts/database, cache2/concepts/shared-gateway, cache2/concepts/managed-autoscaling, cache2/concepts/capacity-pool-lifecycle-and-diagnostics, cache2/interfaces/momento-cli, cache2/interfaces/control-plane-api, cache2/constraints/service-limits, cache2/capabilities/capacity-pool-metrics -->

# Overview

Momento Cache is a fully-managed, dedicated Valkey cluster. Provision isolated capacity
operated by Momento, then connect with any Valkey or Redis client through a managed gateway.
An HTTP API for RESP commands is planned.

:::note[Limited preview]
Momento Cache (Cluster and Flex) is available in limited preview. [Request access](/product/cache/getting-started#request-preview-access) to get started.
:::

Unlike a multi-tenant serverless cache, Momento Cache gives you a dedicated backend sized to
your workload, with isolation at the capacity pool boundary. Unlike running Valkey on your own
infrastructure, you do not manage nodes, failover, or upgrades.

## Variants

Momento Cache comes in two variants that differ only in how you size capacity:

- **Cluster**: configure instance type, shard count, and replica count
- **Flex**: configure capacity and replication bounds; Momento automatically sizes the topology
  within them

Both run the same Valkey engine, the same gateway, and the same isolation model, so the rest of
this documentation applies to both. Documentation for the Serverless variant of Momento Cache is
available [here](/cache).

## When to use it

Use Momento Cache when you want managed Valkey with dedicated, predictable capacity: a
replacement for ElastiCache, MemoryDB, or Memorystore, or managed Valkey on a cloud where you
run today. A Pool configured with at least one replica per shard and at least two availability
zones is capable of multi-AZ resilience without requiring you to operate the cluster yourself.

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

The [quickstart](/product/cache/getting-started) uses the preview Momento CLI to provision a Capacity
Pool, create a Database, and connect a client. See [Momento CLI (preview)](/product/cache/manage/cli)
for the complete management command set and its current limitations.

For the control-plane API, see the [reference](/product/cache/api-reference/capacity-pool).

## Manage and secure Momento Cache

Use the management guides to operate [Capacity Pools](/product/cache/manage/pools) and
[Databases](/product/cache/manage/databases). Review the default [service limits](/product/cache/manage/limits)
and [Capacity Pool metrics](/product/cache/manage/metrics), then scope credentials with the
[security guidance](/product/cache/security).

## Availability

Momento Cache runs on AWS today. Support for additional clouds is planned. Cluster and Flex are
available together in limited preview through the
[Marketplace and support-email access workflow](/product/cache/getting-started#request-preview-access).
