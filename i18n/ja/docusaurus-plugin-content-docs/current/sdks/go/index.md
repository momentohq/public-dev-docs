---
sidebar_position: 5
pagination_prev: null
sidebar_label: Go
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
  - server-side
  - go
  - golang
---

# Momento Go SDK

Momento Go SDK は GitHub からインストールできます： Go get github.com/momentohq/client-sdk-go` からインストールできます。

ソースコードは GitHub にあります： [momentohq/client-sdk-go](https://github.com/momentohq/client-sdk-go)。

## 必要条件

- [Go](https://go.dev/dl/)
- MomentoのAPIキーが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## リソース

- [GoでMomento Cacheを使い始める](./cache)
- [GoでMomento Topicsを始める](./topics)
- [Go SDK - 例](https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md): Go SDKの使い方を説明するサンプルプロジェクトです。

## インテグレーション

- [`go-redis`用Redis互換クライアント](https://github.com/momentohq/momento-go-redis-client) - 既存の `go-redis` コードで Momento Cache を使用するためのドロップイン置き換えです！[Redisクライアントとの互換性](/cache/develop/integrations/redis-client-compatibility.md) ページも参照してください。
