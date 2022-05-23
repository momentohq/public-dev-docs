---
sidebar_position: 6
---

# API Reference

## Control APIs

### Create Cache

Creates a cache with provided name

Attributes:

| Name      | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| cacheName | String | Name of the cache to be created. |

### Delete Cache

Deletes a cache

Attributes:

| Name      | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| cacheName | String | Name of the cache to be deleted. |

### List Caches

Lists all caches for the provided auth token.

| Name      | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| nextToken | String | Token for pagination of caches. |

## Data APIs

### Cache Set

Sets the value in cache with a given Time To Live (TTL) seconds. If a value for this key is already present it will be replaced by the new value.

| Name       | Type   | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| cacheName  | String | Name of the cache.                            |
| key        | []Byte | The key under which the value is to be added. |
| value      | []Byte | The value to be stored.                       |
| ttlSeconds | int    | Time to Live for the item in Cache.           |

### Cache Get

Get the cache value stored for the given key.

| Name      | Type   | Description                                   |
| --------- | ------ | --------------------------------------------- |
| cacheName | String | Name of the cache.                            |
| key       | []Byte | The key under which the value is to be added. |
