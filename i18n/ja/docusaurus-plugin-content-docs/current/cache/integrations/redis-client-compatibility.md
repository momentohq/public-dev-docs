---
sidebar_position: 1
sidebar_label: Redis互換クライアント
pagination_prev: null
title: Redis互換クライアント
description: Redis互換クライアントを使用してMomento Cache、Momento Topicsに切り替える方法
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Redis互換クライアントを使用してMomento Cache、Momento Topicsに切り替える方法

Redisキャッシュが使われている既存のアプリを、Momentoのサービスによるものに切り替えることを検討されていますか？Redis互換クライアントを使用すれば、コードのリファクタリングは必要ありません。既存のRedisクライアントは、ドロップインによって互換性のあるクライアントに置き換えることができます。コードの中核部分を変える必要はなく、クライアントライブラリを互換クライアントに変更し、接続情報を変更するだけでできます。

## 始めよう

クライアント・オブジェクトを構築するコードを変更するだけで、既存のアプリをMomento Cacheによるものに切り替えることができます：

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
    new momento.CacheClient.create({
        configuration: momento.Configurations.Laptop.v1(),
        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({
            environmentVariableName: 'MOMENTO_API_KEY',
        }),
        defaultTtlSeconds: 60,
    }),
    'cache_name',
);
```

サンプルコードを含むより詳細な情報については、[GithubのMomento Node.js Redis compatibility client](https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client) をご覧ください。

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

サンプルコードを含むより詳細な情報については、[GithubのMomento IORedis compatibility client](https://github.com/momentohq/momento-node-ioredis-client) をご覧ください。

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
  new CacheClient(
    config: Configurations.Laptop.v1(),
    authProvider: new EnvMomentoTokenProvider("MOMENTO_API_KEY"),
    defaultTtl: TimeSpan.FromSeconds(60),
  }),
  "cache_name"
);
```

サンプルコードを含むより詳細な情報については、[GithubのMomento StackExchange compatibility client](https://github.com/momentohq/momento-dotnet-stackexchange-redis) をご覧ください。

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

サンプルコードを含むより詳細な情報については、[Go-redis compatibility client](https://github.com/momentohq/momento-go-redis-client) をご覧ください。

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

サンプルコードを含むより詳細な情報については、[Momento Python Redis compatibility client](https://github.com/momentohq/momento-python-redis-client) をご覧ください。

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

## ソースコード

すべてのRedis互換クライアントのソースコードとサンプルについては、以下のGitHubリポジトリをご覧ください：

* [node-redis](https://github.com/momentohq/momento-node-redis-client)
* [ioredis](https://github.com/momentohq/momento-node-ioredis-client)
* [StackExchange.Redis](https://github.com/momentohq/momento-dotnet-stackexchange-redis)
* [go-redis](https://github.com/momentohq/momento-go-redis-client)
* [redis-py](https://github.com/momentohq/momento-python-redis-client)
* [lettuce](https://github.com/momentohq/momento-java-lettuce-client)
* [php-redis](https://github.com/momentohq/momento-php-redis-client)
