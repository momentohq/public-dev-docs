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

Momento PHP SDK は Packagist パッケージ [`momentohq/client-sdk-php`](https://packagist.org/packages/momentohq/client-sdk-php) から入手できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-php](https://github.com/momentohq/client-sdk-php)。

## 必要条件

- MomentoのAPIキーが必要です。[Momentoウェブコンソール](https://console.gomomento.com/)から取得できます。
- 最低PHP 8.0以上
- grpc PHP 拡張モジュール。拡張モジュールのインストールについては [gRPC docs](https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md) を参照ください。

## リソース

- [Getting started with Momento Cache in PHP](./cache)
- [PHP SDK examples](https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md): PHP SDK の使い方を説明するサンプルプロジェクト

## インテグレーション

- [Drupal Cache Backend](/cache/develop/integrations/drupal-integration.md)
- [Laravel Cache](https://github.com/momentohq/laravel-cache) - は、既存のLaravelアプリケーションでMomento Cacheを使用するためのドロップイン置き換えです！Laravelインテグレーション](/cache/develop/integrations/momento-cache-laravel-php.md)ページも参照してください。
- [Laravel Example App](https://github.com/momentohq/laravel-example) - Momento Laravelキャッシュ統合を使用した、完全に動作するLaravelサンプルアプリケーションです。
- [PSR-16 Cache API](https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md) - PHPのPSR-16キャッシュ仕様の実装で、Momento Cacheによってバックアップされています。
