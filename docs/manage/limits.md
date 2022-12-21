---
sidebar_position: 4
sidebar_label: Service Limits
title: Service Limits for Momento Serverless Cache
description: Explore Momento Serverless Cache's service limits, the default values, and how to get them changed if you need.
---

# Service Limits for Momento Serverless Cache

Momento Serverless Cache seeks to provide protection for its customers and itself when it comes to service resources. To do this, every account and cache has service limits, or what we call guardrails (like a curvy mountain road), to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:

| Limit                                 | Value    |
|---------------------------------------|----------|
| API Rate per cache (Data Plane)       | 100 requests/s |
| API Rate per customer (Control Plane) | 5 requests/s   |
| Throughput per cache                  | 1MB/s    |
| Maximum item size                     | 1MB      |
| Max Cache Count (per account)         | 10       |
| Time to Live (TTL)                    | 1 day    |

## Soft limits and support
The limits on this page are soft limits that can be altered. If you need these limits adjusted, please reach out to [Momento Support](mailto:support@momentohq.com). Please include your customerID, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you’d like increased.