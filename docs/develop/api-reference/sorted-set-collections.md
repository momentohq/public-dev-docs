---
sidebar_position: 4
sidebar_label: Sorted sets
title: Sorted set API reference
description: Learn how to interact with the API for sorted set collection data types in Momento Serverless Cache.
slug: /develop/api-reference/collections/sortedsets
---

# Sorted sets collection data types

## Sorted set methods

### SortedSetPut

Adds elements (one or more [SortedSetElements](#sortedsetelement)) to a sorted set. If the sorted set does not already exist, this method will create one.

| Name            | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | Name of the cache.                            |
| setName         | String             | Name of the sorted set item to be altered. |
| elements        | [SortedSetElement](#sortedsetelement)[] | Elements to be added to the sorted set by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetFetch

Fetch all elements in a sorted set and return them in ascending or descending order.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item. |
| numberOfResults | Optional[integer]   | How many results to return, default is all results. |
| order           | Ascending \| Descending | The order you want the sorted set returned |

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetScore

Gets an existing element and its associated score from the sorted set.

| Name             | Type                | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | Name of the cache.                            |
| setName          | String              | Name of the sorted set item. |
| elements         | String[] \| bytes[] | Element in the sorted set to be get the score of. |

<details>
  <summary>Method response object</summary>

* Cache hit
    * Elements() (returns hit/miss per element)
      * Hit:
        * Score: number
      * Miss
* Cache miss (if the sorted set does not exist)
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetRemove

Removes an element from a sorted set.

| Name            | Type             | Description                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | Name of the cache.                            |
| setName         | String           | Name of the set item to be altered. |
| elements        | All \| string[] \| bytes[] | Element to be removed by this operation. |

You can remove either elements all elements or a set of elements.

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetRank

What position is this element in the specificed sorted set?

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the set item to be altered. |
| element         | String \| bytes | Element to be removed by this operation. |

<details>
  <summary>Method response object</summary>

* Hit
  * Rank: integer
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetIncrementScore

Adds to the score of an element. If the value is *missing* from the sorted set, this method sets the value to the amount to increment by.

:::note

The resulting incremented score must be between -9223372036854775808 and 9223372036854775807, ie. a signed double 64-bit float. If not, there will be an error response.

:::

Examples:

- When the element does not exist in the sorted set, `SortedSetIncrementScore(cache, cacheName, setName, value, 10)` will set the element's score to 10.
- When the existing element is a value:score of "{ 'HotGamer2077' : 5 }" , `SortedSetIncrementScore(cacheName, setName, value, 10)` will set the element's score to 15.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item to be altered. |
| value           | String \| bytes | Value for the element to be incremented by this operation. |
| amount          | Number          | The quantity to add to the score. May be positive, negative, or zero. Defaults to 1. |          
| ttl             | [CollectionTTL object](./collection-ttl.md) | This will come back as a TTL construct. |

<details>
  <summary>Method response object</summary>

* Success
  * Value: number - the new value after incrementing
* Error

See [response objects](./response-objects.md) for specific information.

</details>

## SortedSetElement

A value is an array of bytes that along with a score makes up each element in a sorted set.

* Value - Bytes
* Score - Number

A SortedSetElement can exist by itself or as part of an array of SortedSetElements