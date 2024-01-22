---
sidebar_position: 3
sidebar_label: はじめてみる
title: はじめてみる
pagination_prev: null
pagination_next: null
description: SDK を選んで、Momento Cache と Momento Topics をすぐに使い始めてみましょう。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Cache をはじめてみる

もし Momento Cache を SDK から使ってみる方法をお探しでしたら、ここはあなたにうってつけの場所です。

もし何もインストールせずに Momento Cache の体験を手早くしてみたい場合には、こちらから[ブラウザ内で](#cli-と-sdk-をブラウザで試してみる)試してみることもできます。

## ステップ 1: APIキーを作成する

[ステップバイステップの手順](https://docs.momentohq.com/cache/develop/authentication/api-keys)に従って、[Momentoコンソール](https://console.gomomento.com/)からAPIキーを作成してください。キーを取得したら、ここに戻ってきてください。

## ステップ 2: 保存する

作成したAPIキーを保存できる場所は複数あります。この単純な例では環境変数に保存するが、ベストプラクティスはAWS Secrets ManagerやGCP Secret Managerのような安全な場所に保存することです。

## ステップ 3: SDKを取得し、キャッシュを作成し、データを読み書きする。

<Tabs>
   <TabItem value="node" label="Node.js" default>

プロジェクト・ディレクトリにMomento SDKとdotenvをインストールします。

```cli
npm install @gomomento/sdk
npm install dotenv
```

**.env file の作成**

ディレクトリに.envファイルを作成し、Momento APIキーとデフォルトで使用するTTL（秒）を格納します。

```cli
export MOMENTO_API_KEY=<your key here>
export MOMENTO_TTL_SECONDS=300
```

このコードをtest.jsにコピーする。

```javascript
// Declare the Momento SDK library
const { CacheGet, CacheSet, Configurations, ListCaches, CreateCache,
  CacheClient, CredentialProvider } = require('@gomomento/sdk');

// Declate the dotenv library
const dotenv = require('dotenv');

// Defines name of cache to use.
const CACHE_NAME = 'demo-cache';

// Run the config function to bring in the .env file
dotenv.config();

// Creates the Momento cache client object
async function createCacheClient() {
  return CacheClient.create({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_API_KEY',
    }),
    defaultTtlSeconds: 600,
  });
}

// Create a new cache
async function createCache(client) {
  const createCacheResponse = await client.createCache(CACHE_NAME);
  if (createCacheResponse instanceof CreateCache.Success) {
    console.log('Cache created.');
  } else if (createCacheResponse instanceof CreateCache.AlreadyExists) {
    console.log('Cache already exists');
  } else if (createCacheResponse instanceof CreateCache.Error) {
    throw createCacheResponse.innerException();
  }
}

// List all caches in Momento for this account.
async function listCaches(client) {
  const listResponse = await client.listCaches(client);
  if (listResponse instanceof ListCaches.Error) {
    console.log('Error listing caches: ', listResponse.message());
  } else if (listResponse instanceof ListCaches.Success) {
    console.log('Found caches:');
    listResponse.getCaches().forEach(cacheInfo => {
      console.log(' -',cacheInfo.getName());
    });
  } else {
    throw new Error('Unrecognized response: ', listResponse.toString());
  }
}

// A function to write to the cache
async function writeToCache(client, cacheName, key, data) {
  const setResponse = await client.set(cacheName, key, data);
  if (setResponse instanceof CacheSet.Success) {
    console.log('Key stored successfully!');
  } else if (setResponse instanceof CacheSet.Error) {
    console.log('Error setting key: ', setResponse.toString());
  } else {
    console.log('Some other error: ', setResponse.toString());
  }
}

// A function to read scalar items from the cache
async function readFromCache(client, cacheName, key) {
  const readResponse = await client.get(cacheName, key);
  if (readResponse instanceof CacheGet.Hit) {
    console.log('Cache hit: ', readResponse.valueString());
  } else if (readResponse instanceof CacheGet.Miss) {
    console.log('Cache miss');
  } else if (readResponse instanceof CacheGet.Error) {
    console.log('Error: ', readResponse.message());
  }
}

// A simple function that calls all functions in order. You probably want more error handling.
async function run() {
  const cacheClient = await createCacheClient();

  await createCache(cacheClient);

  await listCaches(cacheClient);

  await writeToCache(cacheClient, CACHE_NAME, "code", "12345");
  await readFromCache(cacheClient, CACHE_NAME, "code");
}

run();
```

Run code

```cli
node test.js
```

出力は次のようになるはずです：

```cli
[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient
[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo-cache
Cache created.
Found caches:
 - demo-cache
Key stored successfully!
Cache hit:  12345
```

   </TabItem>
</Tabs>


## Momento CLI のインストール

必要であれば、Momento CLIをローカル（Linux、Windows、Mac）にインストールすることもできます。
CLI の最新バージョンとインストール方法、使い方は [このリポジトリ](https://github.com/momentohq/momento-cli) にあります。

## 全ての Momento SDKs

現在、以下のSDK言語が利用可能です：

- [Node.js](/sdks/nodejs)
- [JavaScript Web SDK](/sdks/web)
- [Python](/sdks/python)
- [.NET](/sdks/dotnet)
- [Go](/sdks/go)
- [PHP](/sdks/php)
- [Java](/sdks/java)
- [Rust](/sdks/rust)
- [Ruby](/sdks/ruby)
- [Elixir](/sdks/elixir)
- [Swift](/sdks/swift)
- [Dart](/sdks/dart)

## FAQ

<details>
  <summary>Momentoは私のクラウドアカウントにリソースを展開しますか？</summary>
いいえ、そんなことはありません。Momento Cacheは完全に管理されたAPIベースのサーバーレスサービスで、アプリケーションコード内から呼び出すことができます。
</details>

