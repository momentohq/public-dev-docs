---
sidebar_position: 5
title: Momento Go SDK
pagination_prev: null
sidebar_label: Go
description: Momento Go SDK に関する情報です。
---

# Momento Go SDK

ようこそ、Momento Go SDK のドキュメントへ！

Momento Go SDK は GitHub 経由でインストール可能です: `go get github.com/momentohq/client-sdk-go`.

ソースコードは GitHub にあります: [momentohq/client-sdk-go](https://github.com/momentohq/client-sdk-go).

## 必要条件

- [Go](https://go.dev/dl/)
- Momento API Keyが必要です。[Momento ウェブコンソール](https://console.gomomento.com/)から取得可能です。

## リソース

- [Go SDK チートシート](./cheat-sheet.mdx)
- [Go SDK 例](https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md): Go SDK の使い方をお見せするための動作可能なプロジェクト例です。
- まもなく: オブザーバビリティ: Go SDK を使ったロギングとクライアントサイドのメトリクス
- まもなく: コードを本番環境へ: Go SDK での設定とエラーハンドリング

## 連携

- [Redis Compatibility Client for `@go-redis`](https://github.com/momentohq/momento-go-redis-client) - 既存の `go-redis` コードを Momento Cache を使用すれば簡単に置き換わることができます！[Redis Client Compatibility](./../integrations/redis-client-compatibility) ページも参照してください。
