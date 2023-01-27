---
sidebar_position: 3
sidebar_label: Sets
title: Set API reference
description: Learn how to interact with the API for set collection data types in Momento Serverless Cache.
slug: /develop/api-reference/collections/sets
---

# Set API reference for Momento Serverless Cache
A set is a collection of elements, but each element can appear only once and there is no guaranteed order.

Example: if your set contains `[1, 2, 3]` and you add 2, the set remains `[1, 2, 3].`

See [sets](./../datatypes.md#set-collections) for more information on their usage.

## Set methods
This page details the Momento API methods for [set collections](./../datatypes.md#set-collections).

### SetAddElement
Adds an element to a set. If the set does not already exist, this method will create one.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the set to be set. |
| element         | String \| bytes | Element to be added by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the set in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetAddElements
Adds multiple elements to a set.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName  | String       | Name of the set to be set. |
| elements          | String[] \| bytes[] | Elements to be added by this operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the set in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetFetch

Gets a set item from a cache.

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | Name of the cache.                            |
| setName  | String | The name of the set to be retreived. |

<details>
  <summary>Method response object</summary>

The response object for SetFetch returns three possible options, a cache hit, miss, or an error.

* Hit
    * valueSetBytes(): bytes[]
    * valueSetString(): string[]
    * toString(): string
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetRemoveElement
Removes a single element from an existing set.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the set to be set. |
| element         | String \| bytes | Element to be removed by this operation.   |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetRemoveElements
Removes multiple elements from an existing set.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the set to be set. |
| element         | String \| bytes | Element to be removed by this operation.   |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>