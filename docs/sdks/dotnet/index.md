---
sidebar_position: 4
title: Momento .NET SDK
pagination_prev: null
sidebar_label: .NET
description: Information about the Momento .NET SDK
---

# Momento .NET SDK

The Momento .NET SDK is available via the nuget package [`Momento.Sdk`](https://www.nuget.org/packages/Momento.Sdk).

The source code can be found on GitHub: [momentohq/client-sdk-dotnet](https://github.com/momentohq/client-sdk-dotnet).

## Requirements

- [`dotnet` runtime and command line tools](https://dotnet.microsoft.com/en-us/download); after installing them, you should have the `dotnet` command on your PATH.
- A Momento API Key is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).
- You will most likely want an IDE that supports .NET development, such as [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs), [JetBrains Rider](https://www.jetbrains.com/rider/), or [Microsoft Visual Studio Code](https://code.visualstudio.com/).

## Resources

- [.NET SDK Cheat Sheet](./cheat-sheet.mdx)
- [.NET SDK Examples](https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/README.md): working example projects that illustrate how to use the .NET SDK
- [.NET SDK Observability](./observability.mdx): Logging and Client-side Metrics with the .NET SDK

## Integrations

- [Microsoft.Extensions.Caching](https://github.com/chrisoverzero/Momento.Extensions.Caching) - a drop-in replacement that allows you to use Momento Cache with your existing `Microsoft.Extensions.Caching` code!
