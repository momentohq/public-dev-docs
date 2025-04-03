---
sidebar_position: 5
pagination_prev: null
sidebar_label: Go
displayed_sidebar: platformSidebar
title: Get to know the Momento Go SDK
description: The Momento Go SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!
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
  - quick start
  - server-side
  - go
  - golang
  - storage
  - persistence
  - datastore
  - database
  - durable
---

# Momento Go SDK

Momento Go SDK は GitHub からインストールできます： github.com/momentohq/client-sdk-go` からインストールできます。

ソースコードはGitHubにあります： [momentohq/client-sdk-go](https://github.com/momentohq/client-sdk-go)。

## 必要条件
- [Go](https://go.dev/dl/)
- MomentoのAPIキーが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## リソース

- [Getting started with Momento Cache in Go](./cache.mdx)
- [Getting started with Momento Topics in Go](./topics.mdx)
- [Go SDK Examples](https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md): Go SDKの使い方を説明するサンプルプロジェクト

## インテグレーション

- [Redis Compatibility Client for `@go-redis`](https://github.com/momentohq/momento-go-redis-client) - は、既存の `go-redis` コードで Momento Cache を使えるようにするドロップイン置き換えです！[Redis クライアントとの互換性](/cache/integrations/redis-client-compatibility.md) ページも参照してください。
