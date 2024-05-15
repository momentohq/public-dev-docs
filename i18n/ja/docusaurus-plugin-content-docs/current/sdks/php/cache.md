---
sidebar_position: 1
sidebar_label: Cache
title: Getting started with Momento Cache in PHP
description: Learn the basic building blocks for writing PHP code to interact with Momento Cache.
keywords:
  - momento
  - cache
  - caching
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - redis
  - serverless
  - sdk
  - sdks
  - api
  - examples
  - resources
  - getting started
  - quick start
  - server-side
  - php
  - laravel
  - drupal
---

# PHPでMomento Cacheを始める

PHPとMomento Cacheをすぐに使い始める必要がある場合、このページには必要な基本的なAPIコールが含まれています。

詳しくは、[GitHubのPHP SDK](https://github.com/momentohq/client-sdk-php)もご覧ください。

### 前提条件

* Momento API Keyが必要です。[Momentoコンソール](https://console.gomomento.com/)を使って生成できます。
* PHP 8.0以上のインストール
* [gRPC PHP 拡張](https://github.com/grpc/grpc/blob/master/src/php/README.md) のインストール
* [protobuf C拡張](https://developers.google.com/google-ads/api/docs/client-libs/php/protobuf#c_implementation)のインストール
* [Composer](https://getcomposer.org/doc/00-intro.md)のインストール - PHP用の共通ライブラリと依存性マネージャ

### PHP SDKを取得するためにcomposerを設定する

`composer.json`ファイルに当社のリポジトリを追加し、依存関係として当社のSDKを追加します：

```json
{
  "require": {
    "momentohq/client-sdk-php": "1.7.1"
  }
}
```

`composer update` を実行して、必要な前提条件をインストールする。

## ライブラリをインポートして接続し、CacheClient オブジェクトを返します。

このコードは[サンプルファイル](https://github.com/momentohq/client-sdk-php/blob/main/examples/example.php)をセットアップする。

```php
<?php
declare(strict_types=1);

require "vendor/autoload.php";

use Momento\Auth\CredentialProvider;
use Momento\Cache\CacheClient;
use Momento\Config\Configurations\Laptop;
use Momento\Logging\StderrLoggerFactory;
use Psr\Log\LoggerInterface;

$CACHE_NAME = uniqid("php-example-");
$ITEM_DEFAULT_TTL_SECONDS = 60;
$KEY = "MyKey";
$VALUE = "MyValue";

// Setup
$authProvider = CredentialProvider::fromEnvironmentVariable("MOMENTO_API_KEY");
$configuration = Laptop::latest(new StderrLoggerFactory());
$client = new CacheClient($configuration, $authProvider, $ITEM_DEFAULT_TTL_SECONDS);
$logger = $configuration->getLoggerFactory()->getLogger("ex:");

function printBanner(string $message, LoggerInterface $logger): void
{
    $line = "******************************************************************";
    $logger->info($line);
    $logger->info($message);
    $logger->info($line);
}

printBanner("*                      Momento Example Start                     *", $logger);
```

## Momento Cacheに新しいキャッシュを作成する。
この関数は、Momentoアカウントに新しいキャッシュを作成します。

```php
$response = $client->createCache($CACHE_NAME);
if ($response->asSuccess()) {
    $logger->info("Created cache " . $CACHE_NAME . "\n");
} elseif ($response->asError()) {
    $logger->info("Error creating cache: " . $response->asError()->message() . "\n");
    exit;
} elseif ($response->asAlreadyExists()) {
    $logger->info("Cache " . $CACHE_NAME . " already exists.\n");
}
```

## アカウントに存在するキャッシュのリストを取得する
この例では、上記の CacheClient 関数を使用して、Momento アカウントのすべてのキャッシュを一覧表示し、エラーがあればトラップします。

```php
// List cache
$response = $client->listCaches();
if ($response->asSuccess()) {
    $logger->info("SUCCESS: List caches: \n");
    foreach ($response->asSuccess()->caches() as $cache) {
        $cacheName = $cache->name();
        $logger->info("$cacheName\n");
    }
    $logger->info("\n");
} elseif ($response->asError()) {
    $logger->info("Error listing cache: " . $response->asError()->message() . "\n");
    exit;
}
```

## キャッシュに項目を書き込む
セット操作の簡単な例。client.set呼び出しでは、TTLはオプションです。TTLを渡すと、クライアント接続オブジェクトで設定されたデフォルトのTTL値が上書きされます。

```php
// Set
$logger->info("Setting key: $KEY to value: $VALUE\n");
$response = $client->set($CACHE_NAME, $KEY, $VALUE);
if ($response->asSuccess()) {
    $logger->info("SUCCESS: - Set key: " . $KEY . " value: " . $VALUE . " cache: " . $CACHE_NAME . "\n");
} elseif ($response->asError()) {
    $logger->info("Error setting key: " . $response->asError()->message() . "\n");
    exit;
}
```

## キャッシュからアイテムを読み込む
これは、キャッシュから項目を取得する単純な読み取り操作の例です。
```php
// Get
$logger->info("Getting value for key: $KEY\n");
$response = $client->get($CACHE_NAME, $KEY);
if ($response->asHit()) {
    $logger->info("SUCCESS: - Get key: " . $KEY . " value: " . $response->asHit()->valueString() . " cache: " . $CACHE_NAME . "\n");
} elseif ($response->asMiss()) {
    $logger->info("Get operation was a MISS\n");
} elseif ($response->asError()) {
    $logger->info("Error getting cache: " . $response->asError()->message() . "\n");
    exit;
}
```

## テストキャッシュの削除
先に作成したテスト・キャッシュを削除する例。

```php
// Delete test cache
$logger->info("Deleting cache $CACHE_NAME\n");
$response = $client->deleteCache($CACHE_NAME);
if ($response->asError()) {
    $logger->info("Error deleting cache: " . $response->asError()->message() . "\n");
}
```

:::info
これらの基本的なAPIコール以外にも、MomentoのAPIコールの詳細については、[APIリファレンスページ](/cache/develop/api-reference/index.mdx)をチェックしてください。
:::
