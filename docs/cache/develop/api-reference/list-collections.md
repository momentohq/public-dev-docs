---
sidebar_position: 2
sidebar_label: Lists
title: List API reference
description: Learn how to interact with the API for list collection data types in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# List API reference for Momento Cache

This page details the Momento API methods for the [list collection data types](../basics/datatypes.md#lists).

:::info

Momento collection types use a [CollectionTTL](./collection-ttl.md) to specify their TTL behavior. This is an optional argument for all "write" operations.

:::

## List methods

### ListFetch

Gets a list item from a cache, with optional slices.

| Name       | Type   | Description                                                                 |
|------------|--------|-----------------------------------------------------------------------------|
| cacheName  | String | Name of the cache.                                                          |
| listName   | String | The name of the list item to be retrieved.                                  |
| startIndex | Number | The starting inclusive element of the list to fetch. Default is 0. **This argument is optional.** |
| endIndex   | Number | The ending exclusive element of the list to fetch. Default is end of list. **This argument is optional.** |

<details>
  <summary>Method response object</summary>

The response object for ListFetch returns three possible options, a cache hit, miss, or an error.

* Hit
    * valueListBytes(): Bytes[]
    * valueListString(): String[]
    * toString(): String - Display a truncated valueListString(). See [truncation](#truncate-to-size).
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListFetch'} />

### ListConcatenateBack
Appends the supplied list to the end of an existing list item.

Example:

If you have [1, 2, 3] and listConcatenateBack [4, 5, 6] you will have [1, 2, 3, 4, 5, 6].

| Name            | Type                | Description                                   |
| --------------- | ------------------- | --------------------------------------------- |
| cacheName       | String              | Name of the cache.                            |
| listName        | String              | Name of the list item to be set. |
| values          | String[] \| Bytes[] | Values to be added as elements to the list item. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client connection object. |
| truncateFrontToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - the new length of the list
    * `toString()`: String - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListConcatenateBack'} />

### ListConcatenateFront
Appends the supplied list to the front of an existing list item.

Example:

If you have [1, 2, 3] and listConcatenateFront [4, 5, 6] you will have [4, 5, 6, 1, 2, 3].

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName        | String       | Name of the list item to be set.              |
| values          | String[] \| Bytes[] | Values to be added as elements to the list item. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client. |
| truncateBackToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - the new length of the list item
    * `toString()`: String - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListConcatenateFront'} />

### ListLength
Get the length of an existing list item

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName        | String       | Name of the list item to be checked.          |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListLength'} />

### ListPopBack
Remove and return the last element from a list item.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName        | String       | Name of the list item to be retrieved.        |

<details>
  <summary>Method response object</summary>

* Hit
    * `valueString()`: String
    * `valueBytes()`: Bytes
    * `toString()`: truncated valueString()
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListPopBack'} />

### ListPopFront
Remove and return the first element from a list item.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| listName        | String       | Name of the list item to be retrieved.        |

<details>
  <summary>Method response object</summary>

* Hit
    * `valueString()`: String
    * `valueBytes()`: Bytes
    * `toString()`: truncated valueString()
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListPopFront'} />

### ListPushBack
Push a value to the end of a list item. This is exactly like passing just one value to [ListConcatenateBack](#listconcatenateback).

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| listName        | String          | Name of the list to be set.                   |
| value           | String \| Bytes | Value to be added.              |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |
| truncateBackToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - the new length of the list item
    * `toString()`: String - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListPushBack'} />

### ListPushFront
Push a value to the beginning of a list item. Just like [ListPushBack](#listpushback), but to the front.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| listName        | String          | Name of the list to be set. |
| value           | String \| Bytes | Value to be added to the list item by the operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |
| truncateBackToSize | Number | See [truncate to size](#truncate-to-size). |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - the new length of the list
    * `toString()`: String - add the listLength
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListPushFront'} />

### ListRemoveValue
Remove all elements in a list item equal to a particular value.

Examples

- If you have the list `['up', 'up', 'down', 'down', 'left', 'right']` and remove ‘up’ the list will be `['down', 'down', 'left', 'right']`

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| listName        | String          | Name of the list item to be set.              |
| value           | String \| Bytes | Value to be added to the list item by the operation. |

<details>
  <summary>Method response object</summary>

Responses

* Success - even if the value does not exist
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListRemoveValue'} />

### ListRetain

Retains only slice of the list where the start is inclusive and the end is exclusive.  The items outside of this range will be dropped from the list.

Example:
For the specified list, start at index 4 (the startIndex) and keep the next five elements, end at index 10 (the endIndex). Discard all other elements in the list. In this example, elements at position 0-3 and 9 or higher are dropped.

| Name       | Type                                        | Description                                                                                                              |
|------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| cacheName  | String                                      | Name of the cache.                                                                                                       |
| listName   | String                                      | Name of the list item to be set.                                                                                         |
| startIndex | Number                                      | The starting inclusive element of the list to retain. Default is 0.                                                      |
| endIndex   | Number                                      | The ending exclusive element of the list to retain. Default is end of list.                                              |
| ttl        | [CollectionTTL object](./collection-ttl.md) | TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

Responses

* Success - even if the value does not exist
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListRetain'} />


## Truncate to size

[ListConcatenate](#listconcatenateback) and [ListPush](#listpushback) type API calls all have truncation options. If after adding their elements the list exceeds this size, this list will be truncated.

* Example: If the list is `[1, 2, 3]` and you ListConcatenateBack `[4, 5, 6]` with `truncateFrontToSize: 5` the list will be truncated to `[2, 3, 4, 5, 6]` and the response ListLength will be 5.

* Example: If the list is `[1, 2, 3]` and you ListConcatenateBack `[4, 5, 6]` with `truncateFrontToSize: 10` the list will not be truncated. It will be `[1, 2, 3, 4, 5, 6]`
