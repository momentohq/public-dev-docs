---
sidebar_label: Connect a client
title: Connect a client
description: Connect to a Momento Cache Database with valkey-cli, ioredis, redis-py, or go-redis.
---

<!-- Projects: cache2/capabilities/valkey-compatibility, cache2/concepts/shared-gateway -->

# Connect a client

Connect to a [Database](/product/cache/concepts/database) with any standard Valkey or Redis client
through the [shared gateway](/product/cache/concepts/connectivity-and-gateway). Use these connection
details:

- **Host:** the region's RESP endpoint (shared by Databases in that region)
- **Port:** `6379`, TLS enabled
- **Username:** your Database name
- **Password:** a Momento API token

Check [Valkey compatibility](/product/cache/concepts/valkey-compatibility) for the supported commands before
you port a workload. Below are examples with some of the most common clients.

## valkey-cli

```sh
valkey-cli -h <endpoint> -p 6379 --tls \
  --user <database-name> --pass <api-token>
```

## Node.js (ioredis)

```js
import Redis from "ioredis";

const client = new Redis({
  host: "<endpoint>",
  port: 6379,
  tls: {},
  username: "<database-name>",
  password: "<api-token>",
});
```

## Python (redis-py)

```python
import redis

client = redis.Redis(
    host="<endpoint>",
    port=6379,
    ssl=True,
    username="<database-name>",
    password="<api-token>",
)
```

## Go (go-redis)

```go
client := redis.NewClient(&redis.Options{
    Addr:      "<endpoint>:6379",
    TLSConfig: &tls.Config{},
    Username:  "<database-name>",
    Password:  "<api-token>",
})
```
