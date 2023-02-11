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

Adds an element to a set. If the set item does not already exist, this method will create one.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the set item to be altered. |
| element         | String \| bytes | Element to be added to the sorted set by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetFetch

Adds an element to a sorted set. If the set item does not already exist, this method will create one.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item. |
| element         | String \| bytes | Element of the sorted set to be retrieved by this operation. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetScore

Gets the score of the specified element in a sorted set.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item. |
| element         | String \| bytes | Element in the sorted set to be get the score from. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetRemove

Removes an element from a sorted set.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the set item to be altered. |
| element         | String \| bytes | Element to be removed by this operation. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetGetRank

Removes an element from a sorted set.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the set item to be altered. |
| element         | String \| bytes | Element to be removed by this operation. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### SortedSetIncrement

Adds to the value of a field, if and only if the existing value is a UTF-8 string representing a base 10 integer. If the field is missing from the sorted set, this method sets the field's value to the amount to increment by.

:::note

The resulting incremented value must be between -9223372036854775808 and 9223372036854775807, ie. a signed 64 bit integer. If not there will be an error response.

:::

Examples:

- When the field does not exist, `dictionaryIncrement(cache, dict, field, 10)` will set the field's value to 10.
- When the field = 5, `dictionaryIncrement(cache, dict, field, 10)` will set the field's value to 15.
- When the field = ‘five’, it will respond with a FailedPreconditionException error.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the sorted set item to be altered. |
| element         | String \| bytes | Element to be incremented by this operation. |
| amount          | Integer         | The quantity to add to the value. May be positive, negative, or zero. Defaults to 1. |          
| ttl             | [CollectionTTL object](./collection-ttl.md) | This will come back as a TTL construct. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>
