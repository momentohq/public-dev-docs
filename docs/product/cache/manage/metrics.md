---
sidebar_label: Metrics
title: Capacity Pool metrics
description: Prometheus and Amazon CloudWatch metrics for Momento Cache Capacity Pools.
---

<!-- Projects: cache2/capabilities/capacity-pool-metrics, cache2/interfaces/control-plane-api, cache2/concepts/capacity-and-usage, cache2/capabilities/onboarding-flow -->

# Capacity Pool metrics

Momento Cache provides two limited-preview observability contracts for Capacity Pools:

- A Prometheus endpoint that you scrape. It returns seven metrics.
- Amazon CloudWatch delivery that emits six metrics when delivery is enabled.

The paths use different names, units, cadence, and eviction semantics. CloudWatch does not include
the Prometheus memory-utilization ratio.

## Prometheus

Send `GET /capacity_pool/metrics` to the regional control-plane endpoint with the same
`Authorization` header used for Capacity Pool reads. The response uses Prometheus text exposition
format and includes Pools for the authenticated account in that serving region.

Every sample has `pool_name`, `account_id`, and `endpoint` labels.

| Metric | Type and unit | Meaning |
| --- | --- | --- |
| `capacity_pool_memory_used_bytes` | Gauge, bytes | Valkey memory in use across primary nodes. |
| `capacity_pool_memory_maxmemory_bytes` | Gauge, bytes | Valkey `maxmemory` across primary nodes. |
| `capacity_pool_memory_utilization_ratio` | Gauge, 0.0–1.0 ratio | Memory used divided by `maxmemory`. |
| `capacity_pool_evictions_total` | Counter, cumulative keys | Total keys evicted across primary nodes. |
| `capacity_pool_host_cpu_usage_ratio` | Gauge, 0.0–1.0 ratio | Host CPU utilization across primary and replica nodes. |
| `capacity_pool_host_network_rx_utilization_ratio` | Gauge, 0.0–1.0 ratio | Host network receive utilization across primary and replica nodes. |
| `capacity_pool_host_network_tx_utilization_ratio` | Gauge, 0.0–1.0 ratio | Host network transmit utilization across primary and replica nodes. |

The first four samples are emitted for each Pool with a complete primary-memory observation. A
host CPU or network sample is omitted when its required reading is unavailable. You choose the
Prometheus scrape cadence.

See the [Capacity Pool API reference](/product/cache/api-reference/capacity-pool#capacity-pool-metrics)
for the HTTP response and error contract.

## Amazon CloudWatch

When CloudWatch delivery is enabled, Momento emits Pool data in 60-second reporting intervals
under the namespace `Momento/Cache`. Every datum has exactly these dimensions:

- `Pool`
- `AccountId`
- `Endpoint`

| Metric | CloudWatch unit | Meaning |
| --- | --- | --- |
| `PoolMemoryUsedBytes` | Bytes | Sum of Valkey memory in use on primary nodes. |
| `PoolMemoryProvisionedBytes` | Bytes | Sum of Valkey `maxmemory` on primary nodes. This is available capacity, not replica-inclusive Flex usage. |
| `PoolEvictions` | Count | Keys evicted during the reporting interval, calculated from primary-shard counter deltas. |
| `PoolCpuUtilization` | Percent | Host CPU utilization across primary and replica nodes. |
| `PoolNetworkReceiveUtilization` | Percent | Receive rate relative to aggregate baseline bandwidth across primary and replica nodes. |
| `PoolNetworkTransmitUtilization` | Percent | Transmit rate relative to aggregate baseline bandwidth across primary and replica nodes. |

Memory and utilization measurements are aggregated as statistic sets for each interval.
`PoolEvictions` is the sum of interval deltas. A missing CPU or network reading omits that metric
instead of reporting zero.

This section defines the emitted metric contract only. It does not define a CloudWatch enablement
or IAM setup workflow.
