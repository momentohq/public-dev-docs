---
sidebar_label: Pricing
title: Momento Cache pricing
description: How Momento Cache pricing works across client traffic, capacity, and cloud data transfer.
---

<!-- Projects: cache2/pricing/pricing -->

# Pricing

:::note
The pricing model is set, but the figures shown are provisional and may change.
:::

Momento Cache usage is based on client traffic and storage capacity. In addition,
AWS data-transfer costs are passed through.

## Client Traffic

Client traffic is measured as total data transfer into and out of the service, as well
as total connection time (RESP and HTTP).

| Dimension                | Price | Unit                      |
| ------------------------ | ----- | ------------------------- |
| Data transfer (in + out) | $0.01 | per GB                    |
| Connections              | $0.25 | per 1M connection-minutes |

## Capacity (Cluster)

A [Capacity Pool](/product/cache/concepts/capacity-pool) using Cluster capacity mode, also known as
"explicit" provisioning, tracks the number of instances running in your cluster. Instance
type, shard count, and replica count determine how many total instance-hours the Capacity
Pool uses.

| Dimension | Price                     | Unit              |
| --------- | ------------------------- | ----------------- |
| Instance  | 1.5 × instance list price | per instance-hour |

## Capacity (Flex)

A [Capacity Pool](/product/cache/concepts/capacity-pool) using Flex capacity mode, also known as
"managed" provisioning, tracks the amount of physical storage allocated to your cluster.
Storage size and replica count determine how many total GB-hours the Capacity Pool uses.

| Dimension             | Price  | Unit        |
| --------------------- | ------ | ----------- |
| Storage (standard)    | $0.014 | per GB-hour |
| Storage (performance) | $0.021 | per GB-hour |

## Cloud Data Transfer

The service passes through these underlying costs at the cloud provider's list price:

| Dimension                | Price      | Unit   |
| ------------------------ | ---------- | ------ |
| Data transfer (cross-AZ) | list price | per GB |
| Data transfer (egress)   | list price | per GB |

## How this maps to your usage

- **Instance-hours** and **GB-hours** follow your pool's shape. A larger instance type,
  more shards, or more replicas increase instance-hours. You control this when you
  [size the pool](/product/cache/concepts/provisioning-and-sizing).
- **Connection-minutes** accrue while clients are connected through the gateway.
- **Data transfer** accrues on request and response traffic; cross-AZ and egress follow AWS
  list price.
