---
sidebar_position: 4
sidebar_label: CollectionTTL object
title: CollectionTTL object API reference
description: Learn how to interact with the API for dictionary collection data types in Momento Serverless Cache.
slug: /develop/api-reference/collections/collectionttl
---

# CollectionTTL object API reference

This object is passed in to API methods to say whether a TTL should be updated and if so, what the new TTL value should be.

This tries to make the process a little less bewildering by providing named constructors and copiers for various situations.

See [Expire Data with TTL](../../../learn/how-it-works/expire-data-with-ttl), For more information on how TTL works with Momento Serverless Cache, 

## Common method behaviors

- If a CollectionTTL is not passed, CollectionTtl.fromCacheTtl(), from the cache connection object, is used.

## Constructor parameters

- ttl: duration - (optional) if no TTL is given, the TTL set in the client connection object is used
- refreshTtl: boolean = true - if true, the collection’s TTL will be reset to the ttl

## Additional constructors

- fromCacheTtl(): CollectionTtl - uses the client’s TTL, equivalent to `CollectionTtl(null, true)`
- of(ttl: duration): CollectionTtl - equivalent to `CollectionTtl(ttl, true)`
- refreshTtlIfProvided(ttl?: duration): CollectionTtl - if a ttl is provided, it will refresh the TTL. If no ttl is provided, it will not refresh the TTL.

## Instance methods

- ttl(): duration?
- refreshTtl(): boolean
- withRefreshTtlOnUpdates(): CollectionTtl - a copy, but refresh is true
- withNoRefreshTtlOnUpdates(): CollectionTtl - a copy, but refresh is false
- toString(): displays the ttl and refreshTtl.