---
sidebar_position: 1
pagination_prev: null
sidebar_label: Node.js
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

Momento Node.js SDKはnpmパッケージから入手できます。 [`@gomomento/sdk`](https://www.npmjs.com/package/@gomomento/sdk).

ソースコードはGitHubにあります。: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript).

## 必要条件

- Nodeのバージョン[14以上](https://nodejs.org/en/download/)が必要です。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## リソース

- [JavaScriptでMomento Cacheを始める](/sdks/nodejs/cache.mdx)
- [JavaScriptでMomentoトピックを始める](/sdks/nodejs/topics.mdx)
- [Node.js SDKの設定とエラー処理](./config-and-error-handling.mdx): コードを本番環境へ
- [Node.js SDK Observability](./observability.mdx): Node.js SDKによるロギングとクライアント側メトリクス

## インテグレーション

- [Node.js Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine): は、[Momento Web SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web)に対して記述されたアプリケーションを実行するブラウザで使用できる、一時的な、制限されたスコープのMomento Authトークンを提供します。
- [Redis互換クライアント用 `@redis/client`](https://github.com/momentohq/momento-node-redis-client) - は、既存の `@redis/client` コードで Momento Cache を使えるようにするドロップイン置き換えです！[Redis クライアントとの互換性](/cache/develop/integrations/redis-client-compatibility.md) ページも参照してください。
- [`ioredis` 用Redis互換クライアント](https://github.com/momentohq/momento-node-ioredis-client) - は、Momento Cache を既存の `ioredis` コードで使えるようにするドロップイン置き換えです！[Redis Client Compatibility](/cache/develop/integrations/redis-client-compatibility.md) ページも参照してください。
