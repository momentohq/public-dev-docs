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

Momento Python SDK は pypi パッケージ [`momento`](https://pypi.org/project/momento/) から入手できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-python](https://github.com/momentohq/client-sdk-python)。

## 必要条件

- [Python 3.7](https://www.python.org/downloads/)以上が必要です。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## リソース

- [Getting started with Momento Cache in Python](/platform/sdks/python/cache)
- [Getting started with Momento Topics in Python](/platform/sdks/python/topics)
- [Python SDK Examples](https://github.com/momentohq/client-sdk-python/blob/main/examples/README.md): Python SDKの使い方を説明するサンプルプロジェクト

## インテグレーション

- [Redis Compatibility Client for `redis/redis-py`](https://github.com/momentohq/momento-python-redis-client) - 既存の `redis/redis-py` コードで Momento Cache を使えるようにするドロップイン置き換えです！[Redis Client Compatibility](/cache/integrations/redis-client-compatibility.md) ページも参照してください。
