---
sidebar_position: 4
sidebar_label: Cache eviction vs ejection
title: Cache eviction vs ejection
slug: /learn/how-it-works/cache-eviction-vs-ejection
description: Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache
---

# Cache eviction vs. cache expiration
The data lifecycle is one of the most important aspects of a cache management system. This page discusses the two means a cache does this, cache eviction and cache expiration, and then provides detail about how Momento Serverless Cache employs these concepts.

## What is cache eviction?
In general caching terms, eviction is when a cache write causes the aggregate data in a cache to exceed the available memory storage, and the cache must remove some data ("evict") to make room. For example, this evicted data could be data that is used less frequently, or another algorithm, depending on how the cache is configured. Some cache implementations evict data to perform maintenance windows.

## Momento Serverless Cache and eviction
Momento Serverless Cache associates cache misses closely with errors. Therefore, the service is designed to avoid evicting data from a cache. Instead of evicting data, when one of the service's cache nodes nears capacity, the service scales to add more capacity on your behalf, and keys are transparently re-distributed to keep the cache miss ratio low.

Momento Serverless Cache has no maintenance windows. Operational changes such as scaling and node replacement are automatically handled in the background by the service. A prewarming process is used to avoid impacting cache hit rates. 

## Cache expiration
In general caching terms, expiration is when a time-to-live (TTL) value is part of each piece of data. When that time lapses, the service deletes the data from the cache.

See [Expire data from caches by setting Time-to-Live (TTL)](./expire-data-with-ttl) for specific information on this topic.