---
sidebar_position: 7
title: Momento PHP SDK
pagination_prev: null
sidebar_label: PHP
description: Momento PHP SDK に関する情報です。
---

# Momento PHP SDK

ようこそ、Momento PHP SDK のドキュメントへ！

Momento PHP SDK は [`momentohq/client-sdk-php`](https://packagist.org/packages/momentohq/client-sdk-php) の Packagist パッケージとして利用可能です。

ソースコードは GitHub にあります: [momentohq/client-sdk-php](https://github.com/momentohq/client-sdk-php)

## 必要条件

- Momento 認証トークンが必要です。[Momento ウェブコンソール](https://console.gomomento.com/)から取得可能です。
- PHP 8.0 以上。
- grpc PHP 拡張モジュール。[gRPC ドキュメント](https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md) の拡張モジュールインストールに関するセクションもご覧下さい。

## リソース

- [PHP SDK チートシート](./cheat-sheet.md)
- [PHP SDK 例](https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md): PHP SDK の使い方をお見せするための動作可能なプロジェクト例です。
- まもなく: オブザーバビリティ: PHP SDK を使ったロギングとクライアントサイドのメトリクス
- まもなく: コードを本番環境へ: PHP SDK での設定とエラーハンドリング

## 連携

- [Laravel Cache](https://github.com/momentohq/laravel-cache) - 既存の Laravel アプリケーションのコードを置き換えるだけで Momento Cache を利用可能に！[Laravel 連携](/develop/integrations/momento-cache-laravel-php.md)のページもご覧下さい。
- [Laravel アプリ例](https://github.com/momentohq/laravel-example) - Momento Laravel Cache 連携を使った、動作可能なLaravel アプリケーションの例です。
- [PSR-16 Cache API](https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md) - Momento Cache を使った PHP PSR-16 キャッシュ仕様の実装です。
