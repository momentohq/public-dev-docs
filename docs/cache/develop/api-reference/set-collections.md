---
sidebar_position: 3
sidebar_label: Sets
title: Set API reference
description: Learn how to interact with the API for set collection data types in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Set API reference for Momento Cache

A set is a collection of elements, but each element can appear only once and order is not guaranteed.

:::info

Momento collection types use a [CollectionTTL](./collection-ttl.md) to specify their TTL behavior. This is an optional argument for all "write" operations.

:::

Example: if your set contains `[1, 2, 3]` and you add 2, the set remains `[1, 2, 3].`

See [Sets](../basics/datatypes.md#sets) for more information on their usage.

## Set methods

### SetAddElement
Adds an element to a set. If the set item does not already exist, this method will create one.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the set item to be altered. |
| element         | String \| Bytes | Element to be added by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetAddElement'} />

### SetAddElements
Adds multiple elements to a set item. If the set item does not already exist, this method will create one.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the set item to be altered. |
| elements        | String[] \| Bytes[] | Elements to be added by this operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetAddElements'} />

### SetFetch

Gets a set item from a cache.

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | Name of the cache.                            |
| setName         | String | The name of the set item to be retrieved.     |

<details>
  <summary>Method response object</summary>

The response object for SetFetch returns three possible options, a cache hit, miss, or an error.

* Hit
    * valueSetBytes(): Bytes[]
    * valueSetString(): String[]
    * toString(): String
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetFetch'} />

### SetSample

Gets a random sampling of elements from a set item in a cache.

| Name      | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| cacheName | String | Name of the cache.                              |
| setName   | String | The name of the set item to sample.             |
| limit     | Number | The maximum number of elements to be retrieved. |

<details>
  <summary>Method response object</summary>

The response object for SetSample returns three possible options, a cache hit, miss, or an error.

* Hit
  * valueSetBytes(): Bytes[]
  * valueSetString(): String[]
  * toString(): String
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetSample'} />


### SetRemoveElement
Removes a single element from an existing set item. If the set is emptied as a result, the item is deleted.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| setName         | String          | Name of the set item to be altered.           |
| element         | String \| Bytes | Element to be removed by this operation.   |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetRemoveElement'} />

### SetRemoveElements
Removes multiple elements from an existing set item. If the set is emptied as a result, the item is deleted.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| setName         | String       | Name of the set item to be altered. |
| element         | String[] \| Bytes[] | Elements to be removed by this operation.   |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetRemoveElements'} />

### SetContainsElement
Checks if a provided element is in the given set.

| Name      | Type            | Description           |
|-----------| --------------- |-----------------------|
| cacheName | String          | Name of the cache.    |
| setName   | String          | Name of the set item. |
| element   | String \| Bytes                 | Name of the element to check existence of.   |

<details>
  <summary>Method response object</summary>

The response object for SetContainsElement returns three possible options, a cache hit, miss, or an error.

* Hit
  * containsElement(): bool
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetContainsElement'} />

### SetContainsElements
Checks if provided elements are in the given set.

| Name      | Type       | Description                         |
|-----------|------------|-------------------------------------|
| cacheName | String     | Name of the cache.                  |
| setName   | String     | Name of the set item. |
| elements  | String[] \| Bytes[]                             | Array of element names to check existence of.   |

<details>
  <summary>Method response object</summary>

The response object for SetContainsElements returns three possible options, a cache hit, miss, or an error.

* Hit
  * containsElements(): bool[]
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetContainsElements'} />

### SetLength
Get the length of an existing set item

| Name      | Type         | Description                         |
|-----------| ------------ |-------------------------------------|
| cacheName | String       | Name of the cache.                  |
| setName   | String       | Name of the set item to be checked. |

<details>
  <summary>Method response object</summary>

* Hit
  * `length()`: Number
* Miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SetLength'} />
