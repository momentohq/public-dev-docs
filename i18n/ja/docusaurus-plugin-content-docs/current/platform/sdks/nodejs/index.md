---
sidebar_position: 1
pagination_prev: null
sidebar_label: Node.js
displayed_sidebar: platformSidebar
title: Get to know the Momento Node.js SDK
description: The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!
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
  - storage
  - persistence
  - datastore
  - database
  - durable
  - sdk
  - storage
  - persistence
  - datastore
  - database
  - durable
  - sdk
  - sdks
  - api
  - typescript
  - javascript
  - nodejs
  - node.js
  - examples
  - resources
  - getting started
  - server-side
---

# Momento Node.js SDK

Momento Node.js SDKはnpmパッケージ[`@gomento/sdk`](https://www.npmjs.com/package/@gomento/sdk)から入手できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript)。

## 必要条件

- ノードのバージョン[16以上](https://nodejs.org/en/download/)が必要。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## リソース

- [Getting started with Momento Cache in JavaScript](/platform/sdks/nodejs/cache.mdx)
- [Getting started with Momento Topics in JavaScript](/platform/sdks/nodejs/topics.mdx)
- [Using compression with the Node.js SDK](/platform/sdks/nodejs/compression.mdx)
- [Node.js SDK Configuration and Error Handling](./config-and-error-handling.mdx): コードを本番に持ち込む
- [Node.js SDK Style Guide](./style-guide.mdx): Momentoとの対話に使用できる2つの異なるコードスタイルについて学ぶ
- [Node.js SDK Observability](./observability.mdx): Node.js SDKによるロギングとクライアント側メトリクス
-  [DynamoDB-Momento EventBridge Demo](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/aws/eventbridge) - DynamoDB StreamsとAWS EventBridgeを使ったMomentoのライトスルーキャッシュ。

## 統合

- [Node.js Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine): は、[Momento Web SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web)に対して記述されたアプリケーションを実行するブラウザで使用できる、一時的な、制限されたスコープのMomento Authトークンを提供します。
- [Redis Compatibility Client for `@redis/client`](https://github.com/momentohq/momento-node-redis-client) - は、既存の `@redis/client` コードで Momento Cache を使えるようにするドロップイン置き換えです！[Redis クライアントとの互換性](/cache/integrations/redis-client-compatibility.md) ページも参照してください。
- [Redis Compatibility Client for `ioredis`](https://github.com/momentohq/momento-node-ioredis-client) - は、Momento Cache を既存の `ioredis` コードで使えるようにするドロップインの置き換えです！[Redis クライアントとの互換性](/cache/integrations/redis-client-compatibility.md) ページも参照してください。
