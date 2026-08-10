---
sidebar_label: Pricing
title: Momento Cache pricing
description: How Momento Cache pricing works — a single, capacity-based charge for your cluster.
---

<!-- Projects: cache2/pricing/pricing -->

# Pricing

:::note
Pricing is provisional and may change before general availability.
:::

Momento Cache uses simple, capacity-based pricing: you pay for the size of your cluster and
nothing else. There are no separate charges for connections, request traffic, or data
transfer — including cross-AZ traffic, which is included in the capacity price.

## Capacity

You pay for cluster capacity, measured either as the amount of storage available to Valkey or
as the underlying instance, depending on how you [size your Capacity
Pool](/product/cache/concepts/provisioning-and-sizing).

| Dimension               | Price                     | Unit                |
| ----------------------- | ------------------------- | ------------------- |
| Cluster size (storage)  | $30.00                    | per GB-month        |
| Cluster size (instance) | 2.8 × instance list price | per instance-month  |

Capacity scales with the shape of your [Capacity
Pool](/product/cache/concepts/capacity-pool) — instance type, shard count, and replica count.

## Examples

- Momento Cache runs a minimum of **3 shards**. The smallest cluster is 3 shards of 4 GB each
  (12 GB total) with no replicas, at **$360 / month**.
- Adding one replica per shard in a second Availability Zone for high availability doubles the
  capacity, at **$720 / month**.

## How this maps to your usage

- **Storage** and **instance** capacity follow your pool's shape. A larger instance type,
  more shards, or more replicas increase the capacity you pay for. You control this when you
  [size the pool](/product/cache/concepts/provisioning-and-sizing).
- High availability adds replicas in additional Availability Zones, which increases capacity
  and therefore cost.
