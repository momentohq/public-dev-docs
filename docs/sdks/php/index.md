---
sidebar_position: 7
pagination_prev: null
sidebar_label: PHP
title: Get to know the Momento PHP SDK
description: The Momento PHP SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!
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
  - server-side
  - php
  - laravel
  - drupal
---

# Momento PHP SDK

The Momento PHP SDK is available via the Packagist package [`momentohq/client-sdk-php`](https://packagist.org/packages/momentohq/client-sdk-php).

The source code can be found on GitHub: [momentohq/client-sdk-php](https://github.com/momentohq/client-sdk-php).

## Requirements

- A Momento API key is required; you can get one from the [Momento web console](https://console.gomomento.com/).
- At least PHP 8.0
- The grpc PHP extension. See the [gRPC docs](https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md) section on installing the extension.

## Resources

- [Getting started with Momento Cache in PHP](./cache)
- [PHP SDK examples](https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md): working example projects that illustrate how to use the PHP SDK

## Integrations

- [Drupal Cache Backend](/cache/develop/integrations/drupal-integration.md)
- [Laravel Cache](https://github.com/momentohq/laravel-cache) - a drop-in replacement that allows you to use Momento Cache with your existing Laravel application! See also our [Laravel Integration](/cache/develop/integrations/momento-cache-laravel-php.md) page.
- [Laravel Example App](https://github.com/momentohq/laravel-example) - a fully operational Laravel example application that uses the Momento Laravel cache integration.
- [PSR-16 Cache API](https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md) - an implementation of the PHP PSR-16 cache specification backed by Momento Cache.
