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

You can get your RESP endpoint in either of two ways:
- In the preview CLI, `describe` your database.
- In the limited-preview console, open the **Capacity Pools** panel, select your Pool, and open its **Databases** tab.

The Database CLI and panel do not vend a credential. Use the API key you created through Key Management,
or another appropriate Momento credential and treat it as a secret.

Check [Valkey compatibility](/product/cache/concepts/valkey-compatibility) for the supported commands before
you port a workload. Below are examples with some of the most common clients.

## valkey-cli

```sh
valkey-cli --tls \
  -h <endpoint> \
  --user <database-name> \
  --pass <api-token>
```

The Valkey CLI can also read your `VALKEYCLI_AUTH` environment variable, for example:

```sh
VALKEYCLI_AUTH=<api-token> \
  valkey-cli --tls \
  -h <endpoint> \
  --user <database-name>
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
