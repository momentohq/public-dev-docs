---
sidebar_label: Pricing
title: Momento Cache pricing
description: How Momento Cache pricing works — a single, capacity-based charge for your cluster.
---

<!-- Projects: cache2/pricing/pricing, cache2/concepts/capacity-and-usage -->

# Pricing

Momento Cache uses simple, capacity-based pricing: you pay for the size of your cluster and
nothing else. There are no separate charges for connections, request traffic, or data
transfer — including cross-AZ traffic, which is included in the capacity price.

## Capacity

For Flex, Pool capacity is the configured Valkey `maxmemory` on each primary shard multiplied by
the number of primary shards. Replicas do not add Pool capacity. Billable Flex usage includes the
configured `maxmemory` on every deployed primary and replica.

For Cluster, usage is the type and count of every deployed instance, including replicas. See
[Provisioning and sizing](/product/cache/concepts/provisioning-and-sizing) for how the variants map
to a Pool shape.

| Variant | Billable usage | Price |
| --- | --- | ---: |
| Flex | Aggregate deployed Valkey `maxmemory` across primary and replica nodes | $30.00 per GiB-month |
| Cluster | Every deployed instance | AWS instance list price × 3.6 |

Memory utilization is separate from capacity and billable usage. It measures live `used_memory`
relative to deployed `maxmemory`.

## Examples

- **Cluster example:** one `t4g.small` primary with no replica costs
  `$0.0168/hour × 3.6 = $0.06048/hour`, or about **$43.55** for an illustrative 720-hour month.
- **Flex HA example:** three 1-GiB primary shards with one replica per shard provide **3 GiB of
  Pool capacity** and use **6 billable GiB**, for **$180/month**.

These are compact pricing examples, not statements about the smallest possible deployment.

## How this maps to your usage

- Flex replicas increase billable usage without increasing Pool capacity.
- Cluster shards and replicas add deployed instances and therefore increase Cluster usage.
- Flex usage and Cluster instance usage follow the deployed shape over time.
