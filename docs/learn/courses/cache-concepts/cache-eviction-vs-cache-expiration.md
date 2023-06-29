---
sidebar_position: 5
sidebar_label: Eviction vs Expiration
title: Cache Concepts - Cache eviction vs expiration with Momento Cache
description: Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache
pagination_next: null
---

# Cache Concepts: Cache eviction vs. cache expiration

This lesson covers the basic purpose and benefits of a database cache. It then breaks down the concepts of cache eviction and cache expiration and explains how they are handled behind the scenes in Momento Cache.

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/76qpwvn262g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Transcript

A database cache has a temporary storage area for frequently accessed data from a database. The purpose of a database cache is to reduce the number of times the database must be accessed in order to retrieve data. Database caches are used to improve the performance of applications that rely on a database for data storage and retrieval. They can help to reduce the load in the database server and improve the scalability and availability of your application.

Now that we've established that, let's talk about cache eviction and cache expiration. These two concepts are related, but they are quite different. Cache eviction is the cache service removing data to make room for other data. This can happen when the cache is full, and there is no more room to store new data.

Cache eviction policies determine which data gets removed from the cache when that happens. Some example cache eviction policies include least recently used (LRU), least frequently used (LFU), and random eviction. Cache expiration is the process of removing data from the cache because it's no longer considered fresh or up-to-date. This is typically determined by a value called the cache time to live, or TTL. This value is assigned to each piece of data when it is stored in the cache. When the TTL value is reached, the data is considered expired and is removed from the cache by the service.

To summarize, cache eviction is the process of removing data from the cache to make room for new data, while cache expiration is deleting data from the cache because it is no longer considered fresh or up-to-date. Both of these concepts are important for ensuring the efficiency and effectiveness of a caching system.

Now that you know these two terms, let's quickly talk about them as they relate to the Momento Cache service. Momento considers cache evictions to be a key indicator of service quality degradation. The service continually monitors this and will add capacity to maintain a buffer for all customers. The service level objective of Momento Cache is to respect the TTL expiry of all cached items and not evict data.

For cache expiration, Momento Cache requires a time to live value in seconds for every object inserted into the cache. There are two places to set that value. Number one, when you establish the connection to the cache in your call to the SDK, you can specify that value. And number two, when you do a write operation, you can override that value on a per-object basis. If you do not set a TTL value in the write operation, the SDK uses the value from the connection object. By default, the maximum value for TTL is 24 hours.

For more information, see the "[Cache eviction vs. cache expiration](/learn/how-it-works/cache-eviction-vs-expiration)" documentation.
