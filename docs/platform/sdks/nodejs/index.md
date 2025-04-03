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

The Momento Node.js SDK is available via the npm package [`@gomomento/sdk`](https://www.npmjs.com/package/@gomomento/sdk).

The source code can be found on GitHub: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript).

## Requirements

- Node version [16 or higher](https://nodejs.org/en/download/) is required.
- A Momento API Key is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).

## Resources

- [Getting started with Momento Cache in JavaScript](/platform/sdks/nodejs/cache.mdx)
- [Getting started with Momento Topics in JavaScript](/platform/sdks/nodejs/topics.mdx)
- [Using compression with the Node.js SDK](/platform/sdks/nodejs/compression.mdx)
- [Node.js SDK Configuration and Error Handling](./config-and-error-handling.mdx): Taking your code to production
- [Node.js SDK Style Guide](./style-guide.mdx): Learn about the two different code styles you can use to interact with Momento
- [Node.js SDK Observability](./observability.mdx): Logging and Client-side Metrics with the Node.js SDK

## Integrations

- [Node.js Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine): provides temporary, restricted scope Momento Auth tokens that can be used by browsers running apps written against the [Momento Web SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web).
- [Redis Compatibility Client for `@redis/client`](https://github.com/momentohq/momento-node-redis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `@redis/client` code! See also our [Redis Client Compatibility](/cache/integrations/redis-client-compatibility.md) page.
- [Redis Compatibility Client for `ioredis`](https://github.com/momentohq/momento-node-ioredis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `ioredis` code! See also our [Redis Client Compatibility](/cache/integrations/redis-client-compatibility.md) page.
- [DynamoDB-Momento EventBridge Demo](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/aws/eventbridge) - a write-through cache in Momento using DynamoDB Streams and AWS EventBridge.
