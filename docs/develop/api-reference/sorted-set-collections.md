---
sidebar_position: 4
sidebar_label: Sorted sets
title: Sorted set collections API reference
description: Learn how to interact with the API for sorted set collection data types in Momento Cache.
slug: /develop/api-reference/collections/sortedsets
---

# Sorted set collections

A sorted set in Momento Cache is a collection of unique elements with a value (String, Byte[], etc.) and score (signed double 64-bit float) pair. The elements in the item are ordered by the score.

## Sorted set methods

### SortedSetPutElement

Adds a new or updates an existing [sorted set element](#sortedsetelement) in a sorted set item.

- If the set does not exist, this method creates a new sorted set item with the element passed in.

- If the set exists, the element is added to the sorted set if that **value** doesn't exist. If the value of that element does exist, that element is overwritten.

| Name            | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | Name of the cache.                            |
| setName         | String             | Name of the sorted set item to be altered. |
| value        | String \| Byte[] | The value of the element to be added to the sorted set by this operation. |
| score        | number | The score of the element to be added to the sorted set by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the sorted set item. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetPutElements

Adds new or updates existing [sorted set elements](#sortedsetelement) in a sorted set item.

- If the set does not exist, this method creates a new sorted set item with the element(s) passed in.

- If the set exists, for each [SortedSetElement](#sortedsetelement) in the array, each element is added to the sorted set if that **value** doesn't exist. If the value of that element does exist, that element is overwritten.

| Name            | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | Name of the cache.                            |
| setName         | String             | Name of the sorted set item to be altered. |
| elements        | [SortedSetElement](#sortedsetelement)[] | Elements to be added to the sorted set by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the sorted set item. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetFetchByRank

Fetch elements of sorted set, optionally filtered by rank, and return them in ascending or descending order.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item. |
| startRank | Optional[integer]   | The inclusive start rank of the results. Default is zero. |
| endRank | Optional[integer]   | The exclusive end rank of the results. Default is `null`, ie up to and including the element ranked last. |
| order           | Ascending \| Descending | The order you want the sorted set returned. |

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetFetchByScore

Fetch elements of sorted set, optionally filtered by score, and return them in ascending or descending order.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item. |
| minScore | Optional[double]   | The inclusive low score of the results. Default is `-inf`, ie include through the lowest score. |
| maxScore | Optional[double]   | The inclusive high score of the results. Default is `+inf`, ie include through the highest score. |
| order           | Ascending \| Descending | The order you want the sorted set returned. |
| offset           | Optional[int] | The offset, inclusive, into the filtered list from which to start returning results. Default is 0, ie do not filter. If specified, must be non-negative. |
| count           | Optional[int] | The maximum number of results from the filtered list to return. Default is `null`, ie no limit. If specified, must be strictly positive. |

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetScore

Gets an element's score from the sorted set, indexed by value.

| Name             | Type                | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | Name of the cache.                            |
| setName          | String              | Name of the sorted set item. |
| value           | String \| Bytes | The value to get the score of. |

<details>
  <summary>Method response object</summary>

* Cache hit
  * Score: number
* Cache miss (if the sorted set does not exist)
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetScores

Gets the scores associated with a list of elements from the sorted set, indexed by value.

| Name             | Type                | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | Name of the cache.                            |
| setName          | String              | Name of the sorted set item. |
| values           | String[] \| Bytes[] | An array of values to get the score of. |

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

### SortedSetRemoveElement

Removes an element from a sorted set, indexed by value.

| Name            | Type             | Description                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | Name of the cache.                            |
| setName         | String           | Name of the set item to be altered. |
| value          | String \| Bytes | Value of the element to be removed by this operation. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetRemoveElements

Removes elements from a sorted set, indexed by values.

| Name            | Type             | Description                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | Name of the cache.                            |
| setName         | String           | Name of the set item to be altered. |
| values          | String[] \| Bytes[] | Values of the elements to be removed by this operation. |

You can remove either one or a specific group of elements.

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetRank

What position is the element, in the specified sorted set?

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item to be altered.    |
| value           | String \| Bytes | Value of the element to retrieve the score of. |

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

- When the element does not exist in the sorted set, `SortedSetIncrementScore(cacheName, setName, value, 10)` will set the element's score to 10.
- When the existing element is a value:score of "{ 'KesselRun' : 12 }" , `SortedSetIncrementScore(cacheName, setName, value, 10)` will set the element's score to 22.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item to be altered. |
| value           | String \| Bytes | Value for the element to be incremented by this operation. |
| amount          | Number          | The quantity to add to the score. May be positive, negative, or zero. Defaults to 1. |          
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the sorted set item. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
  * Value: number - the new value after incrementing
* Error

See [response objects](./response-objects.md) for specific information.

</details>

## SortedSetElement

A value and score makes up each element in a sorted set.

Example:
`{ "TomHocusXaster" : 1138 }`

| Name            | Type                         | Description                                   |
| --------------- | ---------------------------- | --------------------------------------------- |
| Value           | String \| Bytes              | Value for the sorted set element.                            |
| Score           | Signed double 64-bit float   | Score the element. |

A SortedSetElement can exist by itself or as part of an array of SortedSetElements.

### SortedSetLength
Get the number of entries in a sorted set item.

| Name           | Type         | Description                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | Name of the cache.                         |
| sortedSetName | String       | Name of the sorted set item to be checked. |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetLengthByScore
For an existing sorted set item, finds all of the values between the specified min and max score and 

| Name           | Type         | Description                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | Name of the cache.                         |
| sortedSetName | String       | Name of the sorted set item to be checked. |
| minScore | Optional[double]   | The inclusive low score of the results. Default is `-inf`, ie include through the lowest score. |
| maxScore | Optional[double]   | The inclusive high score of the results. Default is `+inf`, ie include through the highest score. |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>
