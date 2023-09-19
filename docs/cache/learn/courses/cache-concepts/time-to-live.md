---
sidebar_position: 4
sidebar_label: Time to Live
title: Cache Concepts - Time to live (TTL)
description: Learn about the use of Time to live when caching data in a high speed serverless managed cache. 
---

# Cache Concepts: Time to live (TTL)

This lesson unpacks the important concept of time to live (TTL), including best practices and common use cases. It also covers defaults and limits for TTL in Momento Cache.

## Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/FDmk6RP8-b0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Transcript
Time to live, or TTL, is a value assigned to an item of data stored in a cache. It determines how long the data will remain in the cache before it is considered expired and will no longer be returned to clients if requested. So, why is TTL important?

Well, imagine a situation where the data in the cache is overly stale. This could lead to information that's no longer relevant being displayed to a user, which can sometimes have severe consequences. By setting a TTL value, we can ensure that the data in the cache is deleted after a given time period has elapsed, and your app knows to refresh the item from the authoritative database.

Storing session tokens is a good example use case scenario for TTL. Let's say you want to ensure the session lasts around 30 minutes at most. You set the TTL value on the session token item inserted into the cache for 30 minutes from session creation, and the cache deletes the session token after 30 minutes has elapsed. If your app checks for the token's existence and there's a cache miss, the app knows the user must log in again.

If your app checks for the token's existence, and there's a cache miss, the app knows the user must log in again. But there's a tradeoff to consider when setting a TTL value. Suppose you were setting TTL to ensure you have the freshest version of data in the cache from the database. What if you have the value set too low on frequently-read data? In that case, the cache will be frequently refreshed by the app, leading to an increased load on the database and, thus slower performance.

On the other hand, if the TTL value is set too high, the data in the cache may become stale and inaccurate. That last part depends on which caching style you use, but that's a topic for another video. I will put a link in the description ([here](https://docs.momentohq.com/introduction/common-caching-patterns)) for more on that subject. Anyhow, finding the right balance for the TTL value is crucial to your application and may take some time to tune, depending on your use case.

Now that we know what TTL is and how to use it, let's discuss how it relates to the Momento Cache service.

Momento Cache service requires a time to live value in seconds for every item stored in the cache. There are two places to set that value. The first one is passing in a TTL value when the app instantiates the cache connection object in an SDK call. That value is required in the instantiation and will be used in all write operations unless you override it.

This leads me to the second place. You can set the TTL value on any write operation to override that value set from the connection object. This way, every item gets its own TTL value if need be. Be advised that by default, in Momento Cache, the maximum value you can set for a TTL is 24 hours. Even if you put a number higher than 24 hours, the cache sets the value back to 24 hours.

In conclusion, cache time to live is a critical concept that helps ensure the accuracy and freshness of the data and the cache. By carefully considering the trade-offs and finding the right balance, we can ensure that our systems are efficient and perform at their best.
