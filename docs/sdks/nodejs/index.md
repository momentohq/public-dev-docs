---
sidebar_position: 1
title: Momento Node.js SDK | Topics
pagination_prev: null
sidebar_label: Node.js
description: Get started using the Momento Node.js SDK for Topics Today. Discover system requirements, explore our cheat sheets, and learn about cool integrations with one-click installs.
keywords:
    - momento
    - topics
    - event-driven architecture
    - eda
    - websockets
    - node.js
    - nodejs
    - javascript
    - sdk
    - typescript
---

# Momento Node.js SDK - Cache Client

The Momento Node.js SDK is available via the npm package [`@gomomento/sdk`](https://www.npmjs.com/package/@gomomento/sdk).

The source code can be found on GitHub: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript).

## Requirements

- Node version [14 or higher](https://nodejs.org/en/download/) is required.
- A Momento API Key is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).

## Resources

- [Node.js SDK Cache Cheat Sheet](./cheat-sheet.mdx)
- [Node.js SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md): working example projects that illustrate how to use the Node.js SDK
- [Node.js SDK Configuration and Error Handling](./config-and-error-handling.mdx): Taking your code to production
- [Node.js SDK Observability](./observability.mdx): Logging and Client-side Metrics with the Node.js SDK

## Integrations

- [Node.js Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine): provides temporary, restricted scope Momento Auth tokens that can be used by browsers running apps written against the [Momento Web SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web).
- [Redis Compatibility Client for `@redis/client`](https://github.com/momentohq/momento-node-redis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `@redis/client` code! See also our [Redis Client Compatibility](/cache/develop/integrations/redis-client-compatibility.md) page.
- [Redis Compatibility Client for `ioredis`](https://github.com/momentohq/momento-node-ioredis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `ioredis` code! See also our [Redis Client Compatibility](/cache/develop/integrations/redis-client-compatibility.md) page.
