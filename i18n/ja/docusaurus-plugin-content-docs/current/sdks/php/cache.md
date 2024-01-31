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

# PHP で Momento Cache を始める

PHPとMomento Cacheをすぐに使い始める必要がある場合、このページには必要な基本的なAPIコールが含まれています。

詳しくは、[GitHub の PHP SDK](https://github.com/momentohq/client-sdk-php) を参照してください。

### 必要条件

* Momento API Keyが必要です。[Momentoコンソール](https://console.gomomento.com/)を使って生成できます。
* PHP 8.0 以上のインストール
* [gRPC PHP extension](https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md)のインストール。
* [Composer](https://getcomposer.org/doc/00-intro.md) のインストール - PHP の共通ライブラリと依存性マネージャ。

### PHP SDK を取得するように composer を設定する

composer.json`ファイルに私たちのリポジトリを追加し、依存関係として私たちのSDKを追加します：

```json
{
  "require": {
    "momentohq/client-sdk-php": "1.0.0"
  }
}
```

`composer update` を実行して、必要な前提条件をインストールします。

## ライブラリをインポートし、CacheClient オブジェクトを返すように接続する。

このコードは [サンプルファイル](https://github.com/momentohq/client-sdk-php/blob/main/examples/example.php) をセットアップします。

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

## Create a new cache in Momento Cache
This function creates a new cache in your Momento account.

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

## アカウントに存在するキャッシュの一覧を取得する
この例では、上記の CacheClient 関数を使用して Momento アカウントのすべてのキャッシュを一覧表示し、エラーがあればトラップします。

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

## アイテムをキャッシュに書き込む
セット操作の簡単な例です。client.set呼び出しでは、TTLはオプションです。もしTTLを渡した場合、クライアント接続オブジェクトで設定されたデフォルトのTTL値が上書きされます。

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
これは、キャッシュから項目を取得する単純な読み込み操作の例です。

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
先ほど作成したテストキャッシュを削除する例です。

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
