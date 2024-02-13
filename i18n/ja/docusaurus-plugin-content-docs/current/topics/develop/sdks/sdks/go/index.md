---
sidebar_position: 5
title: Momento Go SDK
pagination_prev: null
sidebar_label: Go
description: Information about the Momento Go SDK
---

# Momento Go SDK

Momento Go SDK は GitHub からインストールできます： `github.com/momentohq/client-sdk-go` からインストールできます。

ソースコードはGitHubにあります： [momentohq/client-sdk-go](https://github.com/momentohq/client-sdk-go)。

## 前提条件

- [Go](https://go.dev/dl/)
- MomentoのAPIキーが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。

## Resources

- [Go SDK Cheat Sheet](./cheat-sheet.mdx)
- [Go SDK Examples](https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md): Go SDKの使い方を説明するサンプルプロジェクト
- COMING SOON: Observability: Go SDKによるログとクライアントサイドのメトリクス
- COMING SOON: コードをprodへ： Go SDKの設定とエラー処理

## 実装

- [Redis Compatibility Client for `@go-redis`](https://github.com/momentohq/momento-go-redis-client) - 既存の `go-redis` コードで Momento Cache を使えるようにするドロップイン置き換えです！[Redis クライアントとの互換性](./../../integrations/redis-client-compatibility.md) も参照してください。
