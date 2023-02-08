---
sidebar_position: 3
sidebar_label: Sets
title: Set API reference
description: Learn how to interact with the API for Set Collection Data Types in Momento Serverless Cache.
slug: /develop/api-reference/collections/sets
---

# Set API reference for Momento Serverless Cache

A Set is a collection of elements, but each element can appear only once and order is not guaranteed.

Example: if your Set contains `[1, 2, 3]` and you add 2, the Set remains `[1, 2, 3].`

See [Sets](./../datatypes.md#set-collections) for more information on their usage.

## Set methods

### SetAddElement
Adds an element to a Set. If the Set item does not already exist, this method will create one.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the Set item to be altered. |
| element         | String \| bytes | Element to be added by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the Set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetAddElements
Adds multiple elements to a Set item.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the Set item to be altered. |
| elements        | String[] \| bytes[] | Elements to be added by this operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the Set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetFetch

Gets a Set item from a cache.

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | Name of the cache.                            |
| setName         | String | The name of the Set item to be retreived.     |

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
Removes a single element from an existing Set item.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the Set item to be altered.           |
| element         | String \| bytes | Element to be removed by this operation.   |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SetRemoveElements
Removes multiple elements from an existing Set item.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the Set item to be altered. |
| element         | String \| bytes | Element to be removed by this operation.   |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>