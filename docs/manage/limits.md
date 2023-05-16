---
sidebar_position: 4
sidebar_label: Service Limits
title: Service limits
pagination_next: null
description: Explore Momento Cache and Momento Topics's service limits, the default values, and how to get them changed if you need.
---

# Service Limits for Momento Cache and Momento Topics

Momento Cache and Momento Topics seek to provide protection for its customers and itself when it comes to service resources. To do this, every account, cache, and topic has service limits, or what we call guardrails (like a curvy mountain road), to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:

| Momento Cache limits                  | Value    |
|---------------------------------------|----------|
| API Rate per cache (Data Plane)       | 100 requests/s |
| API Rate per customer (Control Plane) | 5 requests/s   |
| Throughput per cache                  | 1MB/s    |
| Maximum item size                     | 1MB      |
| Max Cache Count (per account)         | 10       |
| Time to Live (TTL)                    | 1 day    |

| Momento Topics limits                 | Value    |
|---------------------------------------|----------|
| Subscribers per topic                 | 100      |
| Message size                          | 100KiB per published message   |
| Throughput per topic                  | 100 publish requests/sec   |

:::info

As Momento Topics utilizes Momento Cache, all Cache limits apply to Topics as well.

:::


## Soft limits and support
The limits on this page are soft limits that can be altered. If you need these limits adjusted, please reach out to [Momento Support](mailto:support@momentohq.com). Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you’d like increased.
