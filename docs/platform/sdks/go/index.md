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

The Momento Go SDK is available to install via GitHub: `go get github.com/momentohq/client-sdk-go`.

The source code can be found on GitHub: [momentohq/client-sdk-go](https://github.com/momentohq/client-sdk-go).

## Requirements

- [Go](https://go.dev/dl/)
- A Momento API key is required; you can get one from the [Momento Web Console](https://console.gomomento.com/).

## Resources

- [Getting started with Momento Cache in Go](./cache.mdx)
- [Getting started with Momento Topics in Go](./topics.mdx)
- [Go SDK Examples](https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md): working example projects that illustrate how to use the Go SDK

## Integrations

- [Redis Compatibility Client for `@go-redis`](https://github.com/momentohq/momento-go-redis-client) - a drop-in replacement that allows you to use Momento Cache with your existing `go-redis` code! See also our [Redis Client Compatibility](/cache/integrations/redis-client-compatibility.md) page.
