---
sidebar_position: 4
pagination_prev: null
sidebar_label: .NET
title: Get to know the Momento .NET SDK
description: The Momento .NET SDK allows you to create server-side applications in C#, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!
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
  - dotnet
  - csharp
  - c sharp
  - c#
---

# Momento .NET SDK

Momento .NET SDKはnugetパッケージ[`Momento.Sdk`](https://www.nuget.org/packages/Momento.Sdk)から入手できます。

ソースコードは GitHub にあります： [momentohq/client-sdk-dotnet](https://github.com/momentohq/client-sdk-dotnet)。

## 必要条件

- [`dotnet`ランタイムとコマンドラインツール](https://dotnet.microsoft.com/en-us/download); をインストールしたら、PATHに`dotnet`コマンドがあるはずです。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。
- [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs)、[JetBrains Rider](https://www.jetbrains.com/rider/)、[Microsoft Visual Studio Code](https://code.visualstudio.com/)などの.NET開発をサポートするIDEが必要です。

## リソース

- [.NETでMomento Cacheを始める](./cache)
- [.NETでMomento Topicsを始める](./topics)
- [.NET SDKの例](https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/README.md): .NET SDKの使用方法を説明するサンプルプロジェクト
- [.NET SDK Observability](./observability.mdx): .NET SDKによるObservability Loggingとクライアント側メトリクス

## インテグレーション

- [Microsoft.Extensions.Caching](https://github.com/chrisoverzero/Momento.Extensions.Caching) - 既存の `Microsoft.Extensions.Caching` コードで Momento Cache を使用できるようにするにドロップインでの￥置き換えが可能です！
