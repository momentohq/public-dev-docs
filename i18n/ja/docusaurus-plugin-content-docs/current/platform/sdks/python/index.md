---
sidebar_position: 3
pagination_prev: null
sidebar_label: Python
displayed_sidebar: platformSidebar
title: Get to know the Momento Python SDK
description: The Momento Python SDK allows you to create server-side applications using either synchronous or asyncio APIs, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!
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
  - python
  - asyncio
---

# Momento Python SDK

The Momento Python SDK is available via the pypi package [`momento`](https://pypi.org/project/momento/).

The source code can be found on GitHub: [momentohq/client-sdk-python](https://github.com/momentohq/client-sdk-python).

## Requirements

- [Python 3.7](https://www.python.org/downloads/) or above is required
- A Momento API Key is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).

## Resources

- [Getting started with Momento Cache in Python](./cache.md)
- [Getting started with Momento Topics in Python](./topics.mdx)
- [Python SDK Examples](https://github.com/momentohq/client-sdk-python/blob/main/examples/README.md): working example projects that illustrate how to use the Python SDK

## Integrations

- [Redis Compatibility Client for `redis/redis-py`](https://github.com/momentohq/momento-python-redis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `redis/redis-py` code! See also our [Redis Client Compatibility](/cache/integrations/redis-client-compatibility.md) page.
