---
sidebar_position: 1
sidebar_label: チートシート
sidebar_class_name: sidebar-item-php-cheat-sheet
title: PHP + Momento Cache のためのチートシート
description: PHP と Momento Cache を使ってコーディングするための全て
---

# Momento Cache を PHP で使うためのチートシート
このページでは、Momento Cache を PHP で素早く使ってみたい方のために必要となる基礎的な API 呼出しを解説しています。

より詳しい情報は、[GitHub 上の PHP SDK](https://github.com/momentohq/client-sdk-php) でご確認下さい。

### 前提条件
* Momento 認証トークンが必要。[Momento CLI](https://github.com/momentohq/momento-cli) を使って作成可能です。
* PHP 8.0 以上をインストール。
* [gRPC PHP 拡張モジュール](https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md) をインストール。
* [Composer](https://getcomposer.org/doc/00-intro.md) をインストール - PHP でよく使われている依存管理ライブラリです。

### PHP SDK を使うように composer を設定

`composer.json` ファイルに私達のレポジトリを追加して、私達のSDK を依存として設定します:


```json
{
  "require": {
    "momentohq/client-sdk-php": "1.0.0"
  }
}
```

`composer update` を実行して必要な前提条件をインストールします。

## ライブラリをインポートして、CacheClient オブジェクトを返却して接続する
このコードが[こちらのファイル例](https://github.com/momentohq/client-sdk-php/blob/main/examples/example.php)のセットアップです。

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
$authProvider = CredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");
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

## Momento Cache に新しいキャッシュを作成する
この関数を使ってアカウント内に新しいキャッシュを作成します。

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

## アカウント内の既存のキャッシュをリストする
この例では、上で作った CacheClient の関数を使って、Momento アカウントにある全てのキャッシュをリストして、全てのエラーをトラップしています。

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

## 項目をキャッシュに書き込む
書込み操作を行うシンプルな例です。client.set 呼出しでは、TTL はオプショナルです。もし TTL を渡すと、クライアント接続オブジェクトに設定されたデフォルトの TTL 値が上書きされます。

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

## キャッシュから項目を読み出す
これは、キャッシュから項目を取得するためのシンプルな読み出し操作です。
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

## Delete the test cache
## テストキャッシュを削除する
ここで作成してテストキャッシュを削除する例です。

```php
// Delete test cache
$logger->info("Deleting cache $CACHE_NAME\n");
$response = $client->deleteCache($CACHE_NAME);
if ($response->asError()) {
    $logger->info("Error deleting cache: " . $response->asError()->message() . "\n");
}
```

:::info
これらの API 呼出し以上のものは、[API リファレンスページ](/develop/api-reference/index.mdx)で Momento API 呼出しの全種類の詳しい情報をご確認下さい。
:::
