---
sidebar_position: 1
title: Momento Node.js SDK
pagination_prev: null
sidebar_label: Node.js
description: Information about the Momento Node.js SDK
---

# Momento Node.js SDK

Momento Node.js SDKはnpmパッケージ[`@gomento/sdk`](https://www.npmjs.com/package/@gomento/sdk)から入手できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript)。

## 前提条件

- ノードのバージョン[16以上](https://nodejs.org/en/download/)が必要。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## リソース

- [Node.js SDK Cache Cheat Sheet](./cheat-sheet.mdx)
- [Node.js SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md): Node.js SDKの使用方法を説明するサンプルプロジェクト
- [Node.js Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine): は、[Momento Web SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web)に対して記述されたアプリケーションを実行するブラウザで使用できる、一時的な、制限されたスコープのMomento Authトークンを提供します
- [Node.js SDK Observability](./observability.mdx): Node.js SDKによるロギングとクライアント側メトリクス
- COMING SOON: あなたのコードをprodへ： Node.js SDKの設定とエラー処理

## 実装方法

- [Redis Compatibility Client for `@redis/client`](https://github.com/momentohq/momento-node-redis-client) - は、既存の `@redis/client` コードで Momento Cache を使用するためのドロップイン置き換えです！Redisクライアントの互換性](./../../integrations/redis-client-compatibility.md) ページも参照してください。
- [Redis Compatibility Client for `ioredis`](https://github.com/momentohq/momento-node-ioredis-client) - は、Momento Cache を既存の `ioredis` コードで使えるようにするドロップイン置き換えです！Redisクライアントの互換性](./../../integrations/redis-client-compatibility.md) ページも参照してください。
