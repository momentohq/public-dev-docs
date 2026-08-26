---
sidebar_label: Connect a client
title: Connect a client
description: Connect to a Momento Cache Database with valkey-cli, ioredis, redis-py, or go-redis.
---

<!-- Projects: cache2/capabilities/valkey-compatibility, cache2/concepts/shared-gateway, cache2/interfaces/console -->

# Connect a client

Connect to a [Database](/product/cache/concepts/database) with any standard Valkey or Redis client
through the [shared gateway](/product/cache/concepts/connectivity-and-gateway). Use these connection
details:

- **Host:** the region's RESP endpoint (shared by Databases in that region)
- **Port:** `6379` (default) with TLS
- **Username:** your Database name
- **Password:** a Momento API token

In the limited-preview console, open **Capacity Pools**, select the Pool, and copy the RESP endpoint
from its **Databases** tab. The endpoint is shared by every Database in that region. Retrieve the
credential separately through Key Management; the Database tab does not vend one.

Check [Valkey compatibility](/product/cache/concepts/valkey-compatibility) for the supported commands before
you port a workload. Below are examples with some of the most common clients.

## valkey-cli

```sh
valkey-cli --tls \
  -h <endpoint> \
  --user <database-name> \
  --pass $MOMENTO_API_KEY
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
