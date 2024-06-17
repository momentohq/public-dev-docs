---
sidebar_position: 7
title: Momento PHP SDK
pagination_prev: null
sidebar_label: PHP
description: Information about the Momento PHP SDK
---

# Momento PHP SDK

Momento PHP SDK は Packagist パッケージ [`momentohq/client-sdk-php`](https://packagist.org/packages/momentohq/client-sdk-php) から入手できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-php](https://github.com/momentohq/client-sdk-php)。

## 前提条件

- MomentoのAPIキーが必要です。[Momentoウェブコンソール](https://console.gomomento.com/)から取得できます。
- 最低 PHP 8.0 以上
- grpc PHP 拡張モジュール。拡張モジュールのインストールについては [gRPC docs](https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md) を参照ください。

## リソース

- [PHP SDK cheat sheet](./cheat-sheet.md)
- [PHP SDK examples](https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md): PHP SDK の使い方を説明するサンプルプロジェクト
- COMING SOON: オブザーバビリティ: PHP SDK によるロギングとクライアント側のメトリクス
- COMING SOON: あなたのコードをprodへ：PHP SDKの設定とエラー処理

## Integrations

- [Laravel Cache](https://github.com/momentohq/laravel-cache) - は、既存のLaravelアプリケーションでMomento Cacheを使用するためのドロップイン置き換えです！[Laravelインテグレーション](../../integrations/momento-cache-laravel-php.md) ページも参照してください。
- [Laravel Example App](https://github.com/momentohq/laravel-example) - Momento Laravelキャッシュ統合を使用した、完全に動作するLaravelサンプルアプリケーションです。
- [PSR-16 Cache API](https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md) - PHPのPSR-16キャッシュ仕様の実装で、Momento Cacheによってバックアップされています。
