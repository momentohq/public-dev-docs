---
sidebar_position: 1
sidebar_label: Dictionary collections
title: Dictionary collection API reference
description: Learn how to interact with the API for dictionary collection data types in Momento Serverless Cache.
slug: /develop/api-reference/collections/dictionary
---

# Dictionary collection API reference

## Dictionary methods
This page details the Momento API methods for [dictionary collections](./../datatypes.md#dictionary-collections).

### DictionaryFetch

Gets the dictionary from a cache.

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | Name of the cache.                            |
| dictionaryName  | String | The name of the dictionary to be retreived. |

<details>
  <summary>Method response object</summary>

The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error.

* Cache hit
    - `valueDictionaryBytesBytes()`: Map<Bytes, Bytes>
    - `valueDictionaryStringString()`: Map<String, String>
    - `valueDictionaryStringBytes()`: Map<String, Bytes>
    - `valueDictionaryBytesString()`: Map<Bytes, String>
    - `toString()`: string - displays the key/value pairs, truncated.
* Cache miss
* Cache error

See [response objects](./response-objects.md) for specific information.

</details>

### DictionaryGetField
Get one field from a dictionary in the cache.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be retreived. |
| field           | String/bytes | Name of the field in the dictionary to be retreived. |

<details>
  <summary>Method response object</summary>

* Cache hit
    - `fieldString()`: string
    - `fieldBytes()`: bytes
    - `valueString()`: string
    - `valueBytes()`: bytes

        These return the field and its value from the dictionary.

* Cache miss
    - `fieldString()`: string
    - `fieldBytes()`: bytes

* Cache error
    - `fieldString()`: string
    - `fieldBytes()`: bytes

See [response objects](./response-objects.md) for specific information.

</details>

### DictionaryGetFields
Get one or more fields from a dictionary in the cache.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be retreived. |
| fields          | String[]/bytes[] | Name of the field in the dictionary to be retreived. |

<details>
  <summary>Method response object</summary>

* Cache hit
    - valueDictionaryBytesBytes(): Map<Bytes, Bytes>
    - valueDictionaryStringString(): Map<String, String>
    - valueDictionaryStringBytes(): Map<String, Bytes>
    - valueDictionaryBytesString(): Map<Bytes, String>
    - toString(): string - displays truncated valueDictionaryStringString()
* Cache miss
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### DictionaryIncrement
Adds to the value of a field, if and only if that field is a UTF-8 string representing a base 10 integer. If the field is missing from the dictionary, this method sets the field to the amount to increment by.

The resulting incremented value must be between -9223372036854775808 and 9223372036854775807, ie. a signed 64 bit integer. If not there will be an error response.

Examples:

- When the field does not exist, `dictionaryIncrement(cache, dict, field, 10)` will set the field to 10.
- When the field = 5, `dictionaryIncrement(cache, dict, field, 10)` will set the field to 15.
- When the field = ‘five’, it will respond with a FailedPreconditionException error.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be retreived. |
| field           | String|bytes | Name of the field in the dictionary to be retreived. |
| amount          | Integer | The quantity to add to the value. May be positive, negative, or zero. Defaults to 1. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | This will come back as a TTL construct. |

<details>
  <summary>Method response object</summary>

* Success
    - `value()`: integer - the new value after incrementing
    - `toString()`: string - displays the value()
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### DictionaryRemoveField

Revmoves a field from a dictionary.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be retreived. |
| field          | String|bytes | Name of the field in the dictionary to be retreived. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### DictionaryRemoveFields
Removes multiple fields from a dictionary.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be retreived. |
| fields          | String[]/bytes[] | Name of the field in the dictionary to be retreived. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### DictionarySetField
Sets a field in an existing dictionary to a value. If the dictionary does not exist, it is created with the new field.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be set. |
| field          | String/bytes | Name of the field in the dictionary to be set. |
| value          | String/bytes | Value for the field to be set. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the dictionary in cache. This TTL takes precedence over the TTL used when initializing a cache client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### DictionarySetFields
Sets several dictionary field-value pairs in the cache. If the dictionary does not exist, it is created with the new fields.

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Name of the cache.                            |
| dictionaryName  | String       | Name of the dictionary to be set. |
| fields          | String[]/bytes[] | Key:value fields to be added to the dictionary by the set operation. |
| ttl          | [CollectionTTL object](./collection-ttl.md) | TTL for the dictionary in cache. This TTL takes precedence over the TTL used when initializing a cache client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>