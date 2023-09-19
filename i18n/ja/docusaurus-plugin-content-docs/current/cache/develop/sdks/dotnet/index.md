---
sidebar_position: 4
title: Momento .NET SDK
pagination_prev: null
sidebar_label: .NET
description: Momento .NET SDK に関する情報です。
---

# Momento .NET SDK

ようこそ、Momento .NET SDK のドキュメントへ！

Momento .NET SDK は [`Momento.Sdk`](https://www.nuget.org/packages/Momento.Sdk) の nuget パッケージとして利用可能です。

ソースコードは GitHub にあります: [momentohq/client-sdk-dotnet](https://github.com/momentohq/client-sdk-dotnet)

## 必要条件

- [`dotnet` ランタイムとコマンドラインツール](https://dotnet.microsoft.com/en-us/download); インストールが完了したら、`dotnet` コマンドが PATH 内にあることになります。
- Momento 認証トークンが必要です。[Momento ウェブコンソール](https://console.gomomento.com/)から取得可能です。
- 多くの場合、.NET 開発をサポートしている IDE、例えば [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs)、[JetBrains Rider](https://www.jetbrains.com/rider/)、または [Microsoft Visual Studio Code](https://code.visualstudio.com/)等を使った方がいいでしょう。

## リソース

- まもなく: .NET SDK チートシート
- [.NET SDK 例](https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/README.md): .NET SDK の使い方をお見せするための動作可能なプロジェクト例です。
- まもなく: オブザーバビリティ: .NET SDK を使ったロギングとクライアントサイドのメトリクス
- まもなく: コードを本番環境へ: .NET SDK での設定とエラーハンドリング

## 連携

- [Microsoft.Extensions.Caching](https://github.com/chrisoverzero/Momento.Extensions.Caching) - 既存の `Microsoft.Extensions.Caching` を使ったコードを置き換えるだけで Momento Cache を利用可能に！
