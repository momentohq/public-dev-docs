---
sidebar_position: 5
sidebar_label: Service Limits
title: Service Limits
pagination_next: null
description: Explore Momento Leaderboards service limits, the default values, and how to get them changed if you need.
hide_title: true
---

# Service Limits for Momento Leaderboards

Momento Leaderboards seeks to protect itself and its customers when it comes to service resources. To do this, every account, cache, and leaderboard has service limits, or what we call "guardrails" (like a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:

| Momento Leaderboards limits                                                                                        | Value            |
|--------------------------------------------------------------------------------------------------------------------|------------------|
| API rate per cache (data plane)                                                                                    | 100 operations/s |
| API rate per customer (control plane)                                                                              | 5 operations/s   |
| Throughput per cache                                                                                               | 1MB/s            |
| Max cache count (per account)                                                                                      | 10               |
| Time to live (TTL)                                                                                                 | 7 days           |
| Permissions per [API key or token](./develop/api-reference/auth)  (hard limit)                                     | 10               |

## Soft limits and support

The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to [Momento Support](mailto:support@momentohq.com). Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you’d like increased.

## Operations

Service limits are based on the number of operations performed per second. Some leaderboard APIs can perform multiple operations in a single request.

Since multi-element operations are more efficient, the limit cost of these APIs is discounted at a **2:1 ratio**. This means every two elements will count as one operation towards the limiter. For example, a `Upsert` request adding one or two elements costs one operation, but with three or four elements it costs two operations, etc.

The below table describes how the number of operations is calculated for all leaderboard APIs.

| API Name                 | Multi-Element API | Operations                                                         |
| ------------------------ | ----              | ------------                                                       |
| Upsert                   | ✅                | Number of elements in request/2                                    |
| FetchByScore             | ✅                | Number of elements in response/2, or 1 if leaderboard is not found |
| FetchByRank              | ✅                | Number of elements in response/2, or 1 if leaderboard is not found |
| GetRank                  | ✅                | Number of elements in response/2, or 1 if leaderboard is not found |
| Length                   |                   | 1                                                                  |
| RemoveElements           | ✅                | Number of elements in response/2                                   |
| Delete                   |                   | 1                                                                  |
