---
sidebar_position: 10
sidebar_label: CollectionTTL object
title: CollectionTTL API reference
description: Learn how to interact with the CollectionTTL object in Momento Cache.
---

# CollectionTTL object API reference

This object is passed into API methods to say whether a TTL should be updated and if so, what the new TTL value should be.

This tries to make the process more intuitive by providing named constructors and copiers for various situations.

See [Expire Data with TTL](./../../learn/how-it-works/expire-data-with-ttl.md) for more information on how TTL works with Momento Cache.

## Compatible data types

The CollectionTTL object is compatible with the following data types *when performing write operations*:

* [Dictionary](../api-reference/dictionary-collections.md)
* [List](../api-reference/list-collections.md)
* [Set](../api-reference/set-collections.md)
* [Sorted Set](../api-reference/sorted-set-collections.md)

:::info

You cannot provide a CollectionTTL object when performing a read operation like `dictionaryFetch` or `listLength`. 

:::

## Common method behaviors

- If a CollectionTTL is not passed in a function call, a default value of `CollectionTtl.fromCacheTtl()` will be used. This value is the TTL configured on the cache client. 
- The TTL for the collection will be refreshed any time the collection is modified.

## Constructor parameters

- ttl: duration - (optional)
    * If no TTL is given, the TTL set in the current client connection object is used.
- refreshTtl: boolean = true
    * If set to true, the collection’s TTL will be reset to the provided value.
    * If set to false, the existing TTL set on the item is retained.

## Additional constructors

- fromCacheTtl(): CollectionTtl - uses the client’s TTL, equivalent to `CollectionTtl(null, true)`
- of(ttl: duration): CollectionTtl - equivalent to `CollectionTtl(ttl, true)`
- refreshTtlIfProvided(ttl?: duration): CollectionTtl - if a value is provided, it will refresh the item's TTL. If no value is provided, it will not refresh the TTL.

## Instance methods

- ttlSeconds(): duration - Returns the TTL in seconds
- ttlMilliseconds(): duration - Returns the TTL in milliseconds
- refreshTtl(): boolean - Sets if the TTL should be refreshed when the item is modified
- withRefreshTtlOnUpdates(): CollectionTtl - a copy, but refresh is true
- withNoRefreshTtlOnUpdates(): CollectionTtl - a copy, but refresh is false
- toString(): displays the TTL in seconds and the refreshTtl configuration
