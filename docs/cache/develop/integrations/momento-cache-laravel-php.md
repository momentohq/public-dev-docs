---
sidebar_position: 2
sidebar_class_name: sidebar-item-laravel
sidebar_label: Laravel
title: Setting up Laravel + Momento Cache
description: Get up and running quickly with Laravel and Momento Cache with this simple-to-follow developer cheat sheet.
---

# Set up Laravel + Momento Cache

Laravel is a very popular development framework for PHP. Laravel is known for its elegant syntax, extensive features, and robust ecosystem to get work done quickly and efficiently.

One of Laravel's many features is a [unified API for cache backends](https://laravel.com/docs/10.x/cache). This allows your Laravel app to cache any frequently used data without worrying about the details of which cache backend you are using. It also allows you to switch between different cache backends without making any changes to your code!

Laravel ships with support for cache backends such as Memcached and Redis. Now, Momento provides an implementation of the Laravel Cache API that you can drop in and get all of the advantages of caching without having to worry about managing a cache cluster! Momento Cache’s flexible structure and serverless nature makes it a great choice for using with Laravel for caching workflows.

In this guide, we install and configure Laravel and the Laravel Momento Cache plugin to build web apps and APIs.

See the [Momento Laravel cache repository](https://github.com/momentohq/laravel-cache) for more info.


## Example Laravel + Momento Application

If you would like to see a working example of a Laravel app that uses Momento caching, check out our [Momento Laravel Example App](https://github.com/momentohq/laravel-example)!  This git repo provides a full working example application. The application is a web service that retrieves weather data from [OpenWeather](https://openweathermap.org/); it caches the weather data in Momento so that subsequent requests can be served much more quickly.

## Setting up your own Laravel project

### Prerequisites
* A Momento auth token is required. You can generate one using [the Momento CLI](https://github.com/momentohq/momento-cli).
* Installation of PHP 8.0 or higher
* Installation of Laravel 9.x or higher
* Installation of the [gRPC PHP extension](https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md).
* Installation of [Composer](https://getcomposer.org/doc/00-intro.md)  - A common library and dependency manager for PHP.


### Configure the Laravel + Momento package

Add our repository to your `composer.json` file and our SDK as a dependency:

```json
{
  "require": {
    "momentohq/laravel-cache": "1.0.1"
  }
}
```

Run `composer update` to install the necessary prerequisites.

Then, add `MomentoServiceProvider` to your `config/app.php`:

```php
'providers' => [
    // ...
    Momento\Cache\MomentoServiceProvider::class
];
```

Finally, add the required config to your `config/cache.php`:

```php
'default' => env('CACHE_DRIVER', 'momento'),

'stores' => [
        'momento' => [
            'driver' => 'momento',
            'cache_name' => env('MOMENTO_CACHE_NAME'),
            'default_ttl' => 60,
        ],
],
```

Run `composer update` again to install the necessary prerequisites.

### Tag Support

Cache tags work the same way as explained in the [Laravel documentation](https://laravel.com/docs/9.x/cache#cache-tags).

:::info

If your tag may contain more than 4MB worth of keys, tagging may not work as intended. Please reach out to us for more info!

:::

## Limits

The following Laravel cache operations are currently not supported.
* many
* putMany
* decrement
* forever
* flush

If you need these operations, please reach out to us, and we will work to prioritize adding them. You can file a [GitHub issue](https://github.com/momentohq/laravel-cache/issues), e-mail us at support@momentohq.com, or join our [Discord](https://discord.com/invite/3HkAKjUZGq).
