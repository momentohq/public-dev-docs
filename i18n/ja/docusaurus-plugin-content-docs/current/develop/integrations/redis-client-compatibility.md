---
sidebar_position: 1
sidebar_class_name: sidebar-item-redis
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
            environmentVariableName: 'MOMENTO_AUTH_TOKEN',
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
            environmentVariableName: authTokenEnvVarName,
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
    authProvider: new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN"),
    defaultTtl: TimeSpan.FromSeconds(60),
  }),
  "cache_name"
);
```

サンプルコードを含むより詳細な情報については、[GithubのMomento StackExchange compatibility client](https://github.com/momentohq/momento-dotnet-stackexchange-redis) をご覧ください。

</TabItem>
</Tabs>

## ソースコード

すべてのRedis互換クライアントのソースコードとサンプルについては、以下のGitHubリポジトリをご覧ください：

* [node-redis](https://github.com/momentohq/momento-node-redis-client)
* [ioredis](https://github.com/momentohq/momento-node-ioredis-client)
* [StackExchange.Redis](https://github.com/momentohq/momento-dotnet-stackexchange-redis)
* [go-redis](https://github.com/momentohq/momento-go-redis-client)
* [redis-py](https://github.com/momentohq/momento-python-redis-client)