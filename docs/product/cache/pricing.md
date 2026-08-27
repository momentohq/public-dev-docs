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
| Data transfer | Combined inbound and outbound transfer | $0.05/GB | 200 GB per month |
| Cluster capacity | Every deployed instance-hour | Applicable regional instance list price × 1.25 | — |
| Flex Standard capacity | Aggregate deployed Valkey `maxmemory` across primaries and replicas | $0.018/GiB-hour | — |
| Flex Performance capacity | Aggregate deployed Valkey `maxmemory` across primaries and replicas | $0.027/GiB-hour | — |

*pricing for us-east-1, may vary by region.*

Monthly transfer uses one combined allowance:

```text
billable GB = max(0, monthly inbound GB + monthly outbound GB - 200)
transfer charge = billable GB × $0.05
```

## Capacity quantities

- **Available capacity** is configured Valkey `maxmemory` per primary shard multiplied by the
  primary shard count. Replicas do not add available capacity.
- **Flex usage** includes configured `maxmemory` on every deployed primary and replica. A Flex Pool
  with `S` shards, `R` replicas per shard, `M` GiB of `maxmemory` per node, and `H` billable hours
  uses `M × S × (1 + R) × H` GiB-hours.
- **Cluster usage** counts every deployed instance-hour, including replicas.
- **Memory utilization** is live `used_memory / maxmemory`. It is separate from available capacity
  and billable usage.

```text
available capacity = maxmemory per primary × primary shard count
Cluster capacity charge = sum(each instance's regional list price × 1.25 × deployed hours)
Flex Standard capacity charge = Flex GiB-hours × $0.018
Flex Performance capacity charge = Flex GiB-hours × $0.027
memory utilization = used_memory / maxmemory
```

Performance provides more throughput than Standard.

## Flex allocation

Flex maps instance-spec RAM to Valkey `maxmemory`. These special cases apply at or below 4 GiB:

| Instance-spec RAM | Valkey `maxmemory` |
| ---: | ---: |
| 1 GiB | 0.375 GiB |
| 2 GiB | 1 GiB |
| 4 GiB | 2 GiB |

Above 4 GiB, Valkey `maxmemory` is five-eighths of instance-spec RAM. The exact instance-family
composition and full allocation ladder are not part of the public pricing model.

## Topology and HA

- Flex requires at least three primary shards and permits zero replicas.
- Cluster requires at least one primary shard and permits zero replicas. Its smallest instance
  type is `t4g.micro`.
- A configuration described as high availability (HA) has at least one replica per shard and spans
  at least two availability zones. A zero-replica or single-zone Pool is not HA. HA is configuration
  guidance, not a service guarantee, API setting, or one exact topology.

These constraints do not establish a minimum price. Generic examples must not be described as a
minimum or the smallest possible deployment.

## Worked examples

| Variant | Topology and usage | Exact hourly capacity charge | Exact 720-hour capacity charge |
| --- | --- | ---: | ---: |
| Cluster | One `t4g.micro` instance at a $0.0084/hour regional list price | $0.0084 × 1.25 = **$0.0105/hour** | $0.0105 × 720 = **$7.56** |
| Flex Performance | Three 1-GiB primaries with two replicas per shard across at least two zones: 9 GiB-hours/hour | 9 × $0.027 = **$0.243/hour** | $0.243 × 720 = **$174.96** |

*pricing for us-east-1, may vary by region.*

Hourly prices are canonical. An explicit monthly example uses 720 hours, and dollar results are
not rounded. Data transfer is billed separately from the capacity charges shown in these examples.
