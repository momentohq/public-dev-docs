---
sidebar_position: 10
sidebar_label: CollectionTTL object
title: CollectionTTL API reference
description: Learn how to interact with the CollectionTTL object in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# CollectionTTL object API reference

The CollectionTtl type is used when performing write operations on a collection.

Sometimes, when you update a collection, you want to refresh the TTL. Other times you want to keep the TTL the same. The
CollectionTtl parameter allows you to specify this behavior.

The default behavior is that the collection TTL is modified whenever a write operation occurs.

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

## Default Behavior

- The `CollectionTtl` parameter is optional for all collection write operations.
- If a CollectionTTL is not specified, a default value of `CollectionTtl.fromCacheTtl()` will be used. This value is the default TTL configured on the cache client. 
- The TTL for the collection will be refreshed any time the collection is modified.

## Examples

If you need a behavior other than the default, you can provide a CollectionTtl object for any collection write operation.

To specify an explicit TTL to refresh the collection to on a write operation, you can use `CollectionTtl.of()`:

<SdkExampleTabs snippetId={'API_CollectionTtlOf'} />

This is a convenience method that is equivalent to calling the constructor directly:

<SdkExampleTabs snippetId={'API_CollectionTtlNew'} />

If you want to specify a TTL that is only set when the collection is created, but not refreshed on subsequent writes, you can use `withNoRefreshTtlOnUpdates()`:

<SdkExampleTabs snippetId={'API_CollectionTtlOfNoRefresh'} />

This is also a convenience method that is equivalent to calling the constructor directly:

<SdkExampleTabs snippetId={'API_CollectionTtlNewNoRefresh'} />

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
