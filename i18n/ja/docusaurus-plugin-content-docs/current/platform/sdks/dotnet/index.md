---
sidebar_position: 4
pagination_prev: null
sidebar_label: .NET
displayed_sidebar: platformSidebar
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

ソースコードはGitHubにあります： [momentohq/client-sdk-dotnet](https://github.com/momentohq/client-sdk-dotnet)。

## 必要条件

- [dotnet` ランタイム＆コマンドラインツール](https://dotnet.microsoft.com/en-us/download); インストールしたら、PATHに `dotnet` コマンドがあるはずです。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。
- [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs)、[JetBrains Rider](https://www.jetbrains.com/rider/)、[Microsoft Visual Studio Code](https://code.visualstudio.com/)のような、.NET開発をサポートするIDEが望ましいでしょう。

## リソース

- [Getting started with Momento Cache in .NET](./cache.mdx)
- [Getting started with Momento Topics in .NET](./topics.mdx)
- [.NET SDK Examples](https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/README.md): .NET SDKの使用方法を説明するサンプルプロジェクト
- [.NET SDK Observability](./observability.mdx): .NET SDKによるロギングとクライアント側メトリクス

## 統合

- [Microsoft.Extensions.Caching](https://github.com/chrisoverzero/Momento.Extensions.Caching) - は、既存の `Microsoft.Extensions.Caching` コードで Momento Cache を使用できるようにするドロップイン置換です！
