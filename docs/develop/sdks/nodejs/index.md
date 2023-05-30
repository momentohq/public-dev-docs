---
sidebar_position: 1
title: Momento Node.js SDK
pagination_prev: null
sidebar_label: Node.js
description: Information about the Momento Node.js SDK
---

# Momento Node.js SDK

Welcome to the Momento Node.js SDK documentation!

The Momento node.js SDK is available via the npm package [`@gomomento/sdk`](https://www.npmjs.com/package/@gomomento/sdk).

The source code can be found on github: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript).

## Requirements

- Node version [14 or higher](https://nodejs.org/en/download/) is required.
- A Momento Auth Token is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).

## Resources

- [Node.js SDK Cheat Sheet](./cheat-sheet.mdx)
- [Node.js SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md): working example projects that illustrate how to use the Node.js SDK
- [Node.js SDK Observability](./observability.mdx): Logging and Client-side Metrics with the Node.js SDK
- COMING SOON: Taking your code to prod: Configuration and Error handling in the Node.js SDK

## Integrations

- [Redis Compatibility Client for `@redis/client`](https://github.com/momentohq/momento-node-redis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `@redis/client` code! See also our [Redis Client Compatibility](/develop/integrations/redis-client-compatibility.md) page.
- [Redis Compatibility Client for `ioredis`](https://github.com/momentohq/momento-node-ioredis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `ioredis` code! See also our [Redis Client Compatibility](/develop/integrations/redis-client-compatibility.md) page.
