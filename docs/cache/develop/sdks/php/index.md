---
sidebar_position: 7
title: Momento PHP SDK
pagination_prev: null
sidebar_label: PHP
description: Information about the Momento PHP SDK
---

# Momento PHP SDK

Welcome to the Momento PHP SDK documentation!

<img src="/img/php.jpg" width="90%" alt="a picture of a PHP elephant in the wild." />

The Momento PHP SDK is available via the Packagist package [`momentohq/client-sdk-php`](https://packagist.org/packages/momentohq/client-sdk-php).

The source code can be found on GitHub: [momentohq/client-sdk-php](https://github.com/momentohq/client-sdk-php).

## Requirements

- A Momento auth token is required; you can get one from the [Momento web console](https://console.gomomento.com/).
- At least PHP 8.0
- The grpc PHP extension. See the [gRPC docs](https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md) section on installing the extension.

## Resources

- [PHP SDK cheat sheet](./cheat-sheet.md)
- [PHP SDK examples](https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md): working example projects that illustrate how to use the PHP SDK
- COMING SOON: Observability: logging and client-side metrics with the PHP SDK
- COMING SOON: Taking your code to prod: configuration and error handling in the PHP SDK

## Integrations

- [Laravel Cache](https://github.com/momentohq/laravel-cache) - a drop-in replacement that allows you to use Momento Cache with your existing Laravel application! See also our [Laravel Integration](./../../integrations/momento-cache-laravel-php.md) page.
- [Laravel Example App](https://github.com/momentohq/laravel-example) - a fully operational Laravel example application that uses the Momento Laravel cache integration.
- [PSR-16 Cache API](https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md) - an implementation of the PHP PSR-16 cache specification backed by Momento Cache. 
