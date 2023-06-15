---
sidebar_position: 1
sidebar_label: Cheat Sheet
sidebar_class_name: sidebar-item-php-cheat-sheet
title: Cheat Sheet for PHP + Momento Cache
description: Everything to get you going with coding using PHP and Momento Cache
---

# Cheat Sheet for PHP with Momento Cache
If you need to get going quickly with PHP and Momento Cache, this page contains the basic API calls you'll need.

For more info, you can also see [the PHP SDK on GitHub](https://github.com/momentohq/client-sdk-php).

### Prerequisites
* A Momento auth token is required. You can generate one using [the Momento CLI](https://github.com/momentohq/momento-cli).
* Installation of PHP 8.0 or higher
* Installation of the [gRPC PHP extension](https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md).
* Installation of [Composer](https://getcomposer.org/doc/00-intro.md)  - A common library and dependency manager for PHP.

### Configure composer to get the PHP SDK

Add our repository to your `composer.json` file and our SDK as a dependency:

```json
{
  "require": {
    "momentohq/client-sdk-php": "1.0.0"
  }
}
```

Run `composer update` to install the necessary prerequisites.

## Import libraries and connect to return a CacheClient object
This code sets up the [example file](https://github.com/momentohq/client-sdk-php/blob/main/examples/example.php)  

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

## Get list of existing caches in your account
In this example, we use the CacheClient function above to list all of the caches for the Momento account and trap any errors.

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

## Write an item to a cache
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.

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

## Read an item from a cache
This is an example of a simple read operation to get an item from a cache.
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
An example of deleting the test cache we created earlier.

```php
// Delete test cache
$logger->info("Deleting cache $CACHE_NAME\n");
$response = $client->deleteCache($CACHE_NAME);
if ($response->asError()) {
    $logger->info("Error deleting cache: " . $response->asError()->message() . "\n");
}
```

:::info
Beyond these basic API calls check out the [API reference page](/develop/api-reference/index.mdx) for more information on the full assortment of Momento API calls.
:::
