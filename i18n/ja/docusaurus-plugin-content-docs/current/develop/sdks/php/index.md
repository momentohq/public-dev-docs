---
sidebar_position: 7
title: Momento PHP SDK
pagination_prev: null
sidebar_label: PHP
description: Information about the Momento PHP SDK
---

# Momento PHP SDK

Welcome to the Momento PHP SDK documentation!

The Momento PHP SDK is available via the Packagist package [`momentohq/client-sdk-php`](https://packagist.org/packages/momentohq/client-sdk-php).

The source code can be found on github: [momentohq/client-sdk-php](https://github.com/momentohq/client-sdk-php).

## Requirements

- A Momento Auth Token is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).
- At least PHP 8.0
- The grpc PHP extension. See the [gRPC docs](https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md) section on installing the extension.

## Resources

- [PHP SDK Cheat Sheet](./cheat-sheet.md)
- [PHP SDK Examples](https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md): working example projects that illustrate how to use the PHP SDK
- COMING SOON: Observability: Logging and Client-side Metrics with the PHP SDK
- COMING SOON: Taking your code to prod: Configuration and Error handling in the PHP SDK

## Integrations

- [Laravel Cache](https://github.com/momentohq/laravel-cache) - a drop-in replacement that allows you to use Momento Cache with your existing Laravel application! See also our [Laravel Integration](/develop/integrations/momento-cache-laravel-php.md) page.
- [Laravel Example App](https://github.com/momentohq/laravel-example) - a fully operational Laravel example application that uses the Momento Laravel Cache integration.
- [PSR-16 Cache API](https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md) - an implementation of the PHP PSR-16 cache specification backed by Momento Cache. 
