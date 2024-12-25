---
sidebar_position: 1
id: api-reference
title: API Reference
description: API reference documentation for the Momento Platform. Includes specifications, examples, and code snippets for all Momento SDK clients.
hide_title: true
hide_table_of_contents: true
keywords:
  - momento
  - cache
  - caching
  - topics
  - api
  - dev docs
  - api docs
  - eda
  - event-driven architecture
  - redis
  - serverless
  - enterprise
  - platform
---

# API reference

Momento APIは、[広範なSDKセット](/platform/sdks)での使用を優先しています。Momentoプラットフォームの原動力は**パフォーマンス**であるため、Momento SDKはデバイスからMomentoサービスへのgRPC接続を利用しています。これにより、開発者にシームレスで直感的なエクスペリエンスを提供しながら、待ち時間を最小限に抑えることができます。

SDKは、すべてのコマンドでstrong-typed入力を受け付け、データ値には文字列と[バイナリデータ](https://en.wikipedia.org/wiki/Binary_data)を使用できます。入力はgRPCの標準通信メカニズムである[プロトコルバッファ](https://en.wikipedia.org/wiki/Protocol_Buffers)を使用してMomentoに送信されます。

また、MomentoはgRPCをサポートしていない環境向けに、操作の一部をHTTP APIでサポートしています。Momento SDK を使用する場合、通信は私たちのサービスと自動的に処理されます。提供された API キーまたはトークンから目的の地域が推測され、あなたに代わって適切な場所に送信されます。HTTP API を使用する場合は、使用する地域のベース URL を指定する必要があります。各地域のベースURLの完全なリストはこちらをご覧ください。

## Ready to get started?

Momentoがどのように認証を行うかについては、次のページを参照するか、[クイックスタートガイド](/cache/how-to/rate-limiter)を参照してください。
