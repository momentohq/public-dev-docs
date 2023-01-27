---
sidebar_position: 2
sidebar_label: List collections
title: List collection API reference
description: Learn how to interact with the API for list collection data types in Momento Serverless Cache.
slug: /develop/api-reference/collections/list
---

# List collection API reference

## List methods
This page details the Momento API methods for [list collections](./../datatypes.md#list-collections).

### ListFetch

Gets a list item from a cache.

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | Name of the cache.                            |
| listName  | String | The name of the list to be retreived. |

<details>
  <summary>Method response object</summary>

The response object for ListFetch returns three possible options, a cache hit, miss, or an error.

* Hit
    * valueListBytes(): bytes[]
    * valueListString(): string[]
    * toString(): string - Display a truncated valueListString(). See Truncation.
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListConcatenateBack
Appends the supplied list to the end of an existing list.

Example:

If you have [1, 2, 3] and listConcatenateBack [4, 5, 6] you will have [1, 2, 3, 4, 5, 6].

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be set. |
| values          | String[] \| bytes[] | Key:value fields to be added to the list by the set operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the list in cache. This TTL takes precedence over the TTL used when initializing a cache client. |
| truncateFrontToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: number - the new length of the list
    * `toString()`: string - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListConcatenateFront
Appends the supplied list to the front of an existing list.

Example:

If you have [1, 2, 3] and listConcatenateFront [4, 5, 6] you will have [4, 5, 6, 1, 2, 3].

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be set. |
| values          | String[] \| bytes[] | Key:value fields to be added to the list by the set operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the list in cache. This TTL takes precedence over the TTL used when initializing a cache client. |
| truncateBackToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: number - the new length of the list
    * `toString()`: string - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListLength
Get the length of an existing list

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be retreived. |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: number
    * `toString()`: include the length
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListPopBack
Remove and return the last item from a list.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be retreived. |

<details>
  <summary>Method response object</summary>

* Hit
    * `valueString()`: string
    * `valueBytes()`: bytes
    * `toString()`: truncated valueString()
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListPopFront
Remove and return the first item from a list.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be retreived. |

<details>
  <summary>Method response object</summary>

* Hit
    * `valueString()`: string
    * `valueBytes()`: bytes
    * `toString()`: truncated valueString()
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListPushBack
Push a value to the end of a list. This is exactly like passing just one value to [ListConcatenateBack](#listconcatenateback).

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be set. |
| field          | String \| bytes | Name of the field in the list to be set. |
| value          | String \| bytes | Value for the field to be set. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the list in cache. This TTL takes precedence over the TTL used when initializing a cache client. |
| truncateBackToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: number - the new length of the list
    * `toString()`: string - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListPushFront
Push a value to the beginning of a list. Just like [ListPushBack](#listpushback), but to the front.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be set. |
| value          | String \| bytes | Key:value fields to be added to the list by the set operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the list in cache. This TTL takes precedence over the TTL used when initializing a cache client. |
| truncateBackToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: number - the new length of the list
    * `toString()`: string - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### ListRemoveValue
Remove all elements in a list equal to a particular value.

Examples

- If you have the list `['up', 'up', 'down', 'down', 'left', 'right']` and remove ‘up’ the list will be `['down', 'down', 'left', 'right']`

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName  | String       | Name of the list to be set. |
| value          | String \| bytes | Key:value fields to be added to the list by the set operation. |

<details>
  <summary>Method response object</summary>

Responses

* Success - even if the value does not exist
* Error

See [response objects](./response-objects.md) for specific information.

</details>

## Truncate to size

[ListConcatenate](#listconcatenateback) and [ListPush](#listpushback) type API calls all have truncation options. If after adding their elements the list exceeds this size, this list will be truncated.

* Example: If the list is `[1, 2, 3]` and you ListConcatenateBack `[4, 5, 6]` with `truncateFrontToSize: 5` the list will be truncated to `[2, 3, 4, 5, 6]` and the response ListLength will be 5.

* Example: If the list is `[1, 2, 3]` and you ListConcatenateBack `[4, 5, 6]` with `truncateFrontToSize: 10` the list will not be truncated. It will be `[1, 2, 3, 4, 5, 6]`