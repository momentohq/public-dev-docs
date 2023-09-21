---
sidebar_position: 4
sidebar_label: Service Limits
title: Service limits for Momento Topics
pagination_next: null
description: Explore Momento Topic's service limits, the default values, and how to get them changed if you need.
---

# Service limits for Momento Topics

Momento Topics seek to protect themselves and their customers when it comes to service resources. To do this, every account, topic, and cache has service limits, or what we call "guardrails" (like on a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:

| Momento Topics limits | Value                      |
|-----------------------|----------------------------|
| Subscribers per cache | 100                        |
| Message size          | 4KiB per published message |
| Throughput per cache  | 10 publish requests/sec    |

:::info

Since Topics utilizes Momento Cache, so all [Cache limits](/cache/manage/limits) apply to Topics as well.

:::

## Soft limits and support

The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to [Momento Support](mailto:support@momentohq.com). Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you’d like increased.
