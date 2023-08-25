---
sidebar_position: 1
sidebar_class_name: sidebar-item-redis
sidebar_label: Redis compatibility clients
pagination_prev: null
title: Redis compatibility clients
description: With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Redis compatibility clients for Momento Cache and Momento Topics

Do you have existing apps that use a Redis cache, but now you're trading up to Momento’s services? With Redis compatibility clients, there's no need to refactor your code. Instead, compatibility clients are a drop-in replacement for existing Redis clients. Change your client library to the compatibility client, change the connection information, and the core of your code stays the same.

## Getting Started

To switch your existing application to use Momento Cache, you only need to change the code where you construct your client object:

<Tabs>
<TabItem value="noderedis" label="NodeRedis" default>

```javascript
// Import the Momento redis compatibility client.
import {createClient, momento} from 'momento-redis-client';
import {
    CacheClient,
    Configurations,
    CredentialProvider,
} from '@gomomento/sdk';

// Initialize Momento's client.
const redisClient = createClient(
    new momento.CacheClient({
        configuration: momento.Configurations.Laptop.v1(),
        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({
            environmentVariableName: 'MOMENTO_AUTH_TOKEN',
        }),
        defaultTtlSeconds: 60,
    }),
    'cache_name',
);
```

For more in-depth information, with example code, please see [Momento Node.js Redis compatibility client](https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client) on GitHub.

</TabItem>
<TabItem value="ioredis" label="IORedis" default>

```javascript
// Import the Momento redis compatibility client.
import {MomentoRedisAdapter} from '@gomomento-poc/node-ioredis-client';
import {
    CacheClient,
    Configurations,
    CredentialProvider,
} from '@gomomento/sdk';

// Instantiate Momento Adapter Directly
const Redis = new MomentoRedisAdapter(
    await CacheClient.create({
        configuration: Configurations.Laptop.v1(),
        credentialProvider: CredentialProvider.fromEnvironmentVariable({
            environmentVariableName: authTokenEnvVarName,
        }),
        defaultTtlSeconds: config.defaultTTLSeconds,
    }),
    'cache_name',
);
```

For more in-depth information, with example code, please see [Momento IORedis compatibility client](https://github.com/momentohq/momento-node-ioredis-client) on GitHub.

</TabItem>

<TabItem value="stackexchange" label="StackExchange" default>

```csharp
using System;
using Momento.Auth;
using Momento.Config;
using Momento.Sdk;
using Momento.StackExchange.Redis;

// Create a Momento-backed Redis client
var db = MomentoRedisDatabase(
  await CacheClient.create(
    config: Configurations.Laptop.v1(),
    authProvider: new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN"),
    defaultTtl: TimeSpan.FromSeconds(60),
  }),
  "cache_name"
);
```

For more in-depth information, with example code, please see [Momento StackExchange compatibility client](https://github.com/momentohq/momento-dotnet-stackexchange-redis) on GitHub.

</TabItem>

<TabItem value="go" label="Go" default>

```go
package redis

import (
	"context"
	"github.com/momentohq/client-sdk-go/auth"
	"github.com/momentohq/client-sdk-go/config"
	"github.com/momentohq/client-sdk-go/momento"
	momentoredis "github.com/momentohq/momento-go-redis-client/momento-redis"
	"github.com/redis/go-redis/v9"
	"time"
)

func initRedisClient() redis.Cmdable {
	credential, eErr := auth.NewEnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")
	if eErr != nil {
		panic("Failed to initialize credentials through auth token " + eErr.Error())
	}
	cacheClient, cErr := momento.NewCacheClient(config.LaptopLatest(), credential, 60*time.Second)
	if cErr != nil {
		panic("Failed to initialize Momento cache client " + cErr.Error())
	}
	// create cache; it resumes execution normally incase the cache already exists
	_, createErr := cacheClient.CreateCache(context.Background(),
		&momento.CreateCacheRequest{CacheName: "default_cache"})
	if createErr != nil {
		panic("Failed to create cache with cache name default cache \n" + createErr.Error())
	}
	redisClient := momentoredis.NewMomentoRedisClient(cacheClient, "default_cache")
	return redisClient
}
```

For more in-depth information, with example code, please see [Go-redis compatibility client](https://github.com/momentohq/momento-go-redis-client) on GitHub.

</TabItem>
</Tabs>

