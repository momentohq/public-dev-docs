---
sidebar_label: Pricing
title: Momento Cache pricing
description: Rates and billable quantities for Momento Cache Cluster, Flex, and data transfer.
---

<!-- Projects: cache2/pricing/pricing, cache2/pricing/pricing-analysis, cache2/concepts/capacity-and-usage, cache2/concepts/capacity-sizing-and-minima -->

# Pricing

Momento Cache pricing combines data transfer with the capacity used by Cluster or Flex. There is
no separate request-count or connection-time charge.

## Rates

| Dimension | Billable quantity | Price | Included amount |
| --- | --- | ---: | ---: |
| Data transfer | ingress + egress | $0.05/GB | 200 GB per month |
| Cluster capacity | aggregate instance-hours | instance list price × 1.25 | — |
| Flex Standard capacity | sum of `maxmemory` across all nodes | $0.018/GiB-hour | — |
| Flex Performance capacity | sum of `maxmemory` across all nodes | $0.027/GiB-hour | — |

*pricing for us-east-1, may vary by region.*

All usage across an account is counted towards the included amount. Multi-account organizations
and enterprise-tier accounts are not eligible for included usage.

## Measuring usage

**Flex usage** measures usage for billing purposes as the sum of Valkey's `maxmemory` across _all_
deployed nodes, including both primaries and replicas. A Flex Pool with `S` shards, `R` replicas
per shard, `M` GiB of `maxmemory` per node, and `H` billable hours uses `M × S × (1 + R) × H`
GiB-hours.

**Cluster usage** measures usage for billing purposes by counting the number of deployed instances
of each type, including both primaries and replicas.

## Worked examples

**Cluster:** The `t4g.micro` instance type has an AWS list price of `$0.0084/hour` in us-east-1. With a single shard and no replicas, the charge for one node is `$0.0084 × 1.25 = $0.0105/hour`. Running this pool for 30 days would cost `$0.0105 × 720 = $7.56`.

**Flex:** A 3-GiB pool with three shards and two replicas per shard will consume `3 GiB × (1 primary + 2 replicas) = 9 GiB` of usage per hour. When using the "performance" capacity family, this costs `9 × $0.027 = $0.243/hour`. Running this pool for 30 days would cost `$0.243 × 720 = $174.96`.

*pricing for us-east-1, may vary by region.*
