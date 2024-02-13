---
sidebar_position: 4
title: Momento .NET SDK
pagination_prev: null
sidebar_label: .NET
description: Information about the Momento .NET SDK
---

# Momento .NET SDK

Momento .NET SDKはnugetパッケージ[`Momento.Sdk`](https://www.nuget.org/packages/Momento.Sdk)から入手できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-dotnet](https://github.com/momentohq/client-sdk-dotnet)。

## 前提条件

- [`dotnet`ランタイムとコマンドラインツール](https://dotnet.microsoft.com/en-us/download); インストールしたら、PATHに`dotnet`コマンドがあるはずです。
- Momento API Keyが必要です。[Momento Web Console](https://console.gomomento.com/)から取得できます。
- Microsoft Visual Studio](https://visualstudio.microsoft.com/vs)、[JetBrains Rider](https://www.jetbrains.com/rider/)、[Microsoft Visual Studio Code](https://code.visualstudio.com/)などの.NET開発をサポートするIDEが必要です。

## リソース

- [.NET SDK Cheat Sheet](./cheat-sheet.mdx)
- [.NET SDK Examples](https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/README.md): .NET SDKの使用方法を説明するサンプルプロジェクト
- [.NET SDK Observability](./observability.mdx): .NET SDKによるロギングとクライアント側メトリクス
- COMING SOON: あなたのコードをprodへ： .NET SDKの設定とエラー処理

## 実装

- [Microsoft.Extensions.Caching](https://github.com/chrisoverzero/Momento.Extensions.Caching) - ドロップイン置き換えは既存の `Microsoft.Extensions.Caching` コードで Momento Cache を使用することができます！
