---
sidebar_position: 1
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
    momento.CacheClient.create({
        configuration: momento.Configurations.Laptop.v1(),
        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({
            environmentVariableName: 'MOMENTO_API_KEY',
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
            environmentVariableName: 'MOMENTO_API_KEY',
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
    authProvider: new EnvMomentoTokenProvider("MOMENTO_API_KEY"),
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
	credential, eErr := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")
	if eErr != nil {
		panic("Failed to initialize credentials through API key " + eErr.Error())
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
<TabItem value="redis-py" label="redis-py" default>

```python
import datetime
# Import the Momento redis compatibility client.
import momento
from momento_redis import MomentoRedis

# Initialize Momento client.
redis_client = MomentoRedis(
    momento.CacheClient.create(
        momento.Configurations.Laptop.latest(),
        momento.CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),
        datetime.timedelta(seconds=60)
    ),
    "cache_name"
)
```

For more in-depth information, with example code, please see [Momento Python Redis compatibility client](https://github.com/momentohq/momento-python-redis-client) on GitHub.

</TabItem>
<TabItem value="lettuce" label="lettuce" default>

```java
import io.lettuce.core.api.reactive.RedisReactiveCommands;
import java.time.Duration;
import momento.lettuce.MomentoRedisReactiveClient;
import momento.sdk.CacheClient;
import momento.sdk.auth.CredentialProvider;
import momento.sdk.config.Configurations;

class CompatibilityExample {
  public static void main(String[] args) {
    // Use try-with-resources to ensure proper closing of CacheClient
    try (CacheClient cacheClient = CacheClient.create(
        CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),
        Configurations.Laptop.v1(),
        Duration.ofSeconds(60)
    )) {
      // Create a Redis client backed by the Momento cache client
      RedisReactiveCommands<String, String> redisClient =
          MomentoRedisReactiveClient.create(cacheClient, "cache_name");
    }
  }
}
```
</TabItem>
<TabItem value="PhpRedis" label="PhpRedis" default>

```php
<?php
declare(strict_types=1);

use Momento\Auth\CredentialProvider;
use Momento\Cache\CacheClient;
use Momento\Cache\MomentoCacheClient;
use Momento\Config\Configurations\Laptop;
use Momento\Logging\StderrLoggerFactory;

require "vendor/autoload.php";

// Create a Momento cache client
$authProvider = CredentialProvider::fromEnvironmentVariable("MOMENTO_API_KEY");
$configuration = Laptop::latest(new StderrLoggerFactory());
$client = new CacheClient($configuration, $authProvider, 60);

// Create a Redis client backed by Momento cache client over the cache
$momentoCacheClient = new MomentoCacheClient($client, "cache_name");
```
</TabItem>
</Tabs>

## Source Code

For source code and examples for all of our Redis compatibility clients, please see the following GitHub repositories:

* [node-redis](https://github.com/momentohq/momento-node-redis-client)
* [ioredis](https://github.com/momentohq/momento-node-ioredis-client)
* [StackExchange.Redis](https://github.com/momentohq/momento-dotnet-stackexchange-redis)
* [go-redis](https://github.com/momentohq/momento-go-redis-client)
* [redis-py](https://github.com/momentohq/momento-python-redis-client)
* [lettuce](https://github.com/momentohq/momento-java-lettuce-client)
* [php-redis](https://github.com/momentohq/momento-php-redis-client)
