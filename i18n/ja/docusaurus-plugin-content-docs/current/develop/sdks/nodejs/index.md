---
sidebar_position: 1
title: Momento Node.js SDK
pagination_prev: null
sidebar_label: Node.js
description: Momento Node.js SDK に関する情報です。
---

# Momento Node.js SDK

ようこそ、Momento Node.js SDK のドキュメントへ！

Momento Node.js SDK は [`@gomomento/sdk`](https://www.npmjs.com/package/@gomomento/sdk) の npm パッケージとして利用可能です。

ソースコードは GitHub にあります: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript)

## 必要条件

- Node のバージョンは [14以上](https://nodejs.org/en/download/) が必要です。
- Momento 認証トークンが必要です。[Momento ウェブコンソール](https://console.gomomento.com/)から取得可能です。

## リソース

- [Node.js SDK チートシート](./cheat-sheet.mdx)
- [Node.js SDK 例](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md): Node.js SDK の使い方をお見せするための動作可能なプロジェクト例です。
- まもなく: オブザーバビリティ: Node.js SDK を使ったロギングとクライアントサイドのメトリクス
- まもなく: コードを本番環境へ: Node.js SDK での設定とエラーハンドリング

## 連携

- [`@redis/client` のための Redis 互換クライアント](https://github.com/momentohq/momento-node-redis-client) - 既存の `@redis/client` を使ったコードを置き換えるだけで Momento Cache を利用可能に！こちらの [Redis クライアント互換性](/develop/integrations/redis-client-compatibility.md) ページもご覧下さい。
- [`ioredis` のための Redis 互換クライアント](https://github.com/momentohq/momento-node-ioredis-client) - 既存の `ioredis` を使ったコードを置き換えるだけで Momento Cache を利用可能に！こちらの [Redis クライアント互換性](/develop/integrations/redis-client-compatibility.md) ページもご覧下さい。
