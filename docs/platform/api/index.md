---
sidebar_label: API Protocols
title: API Protocols
description: Momento's API protocols and availability
---

<!-- Projects: cross-product/api-overview -->

# Supported Protocols

Momento SDKs primarily connect over gRPC, falling back to HTTP for supported APIs. In some high-performance scenarios, special [protosocket](https://github.com/kvc0/protosocket)-based SDKs may be provided to achieve optimal performance.

# Connecting to Momento

Connect to Momento's public APIs via a **regional endpoint**, which can be found in the [console](https://console.gomomento.com). All services share the same regional endpoint. Each regional endpoint typically serves both the data and control planes.

Initialize the SDK with an
[API key](/platform/authentication/api-keys) and configure the appropriate region to connect.

HTTP APIs can be used directly without an SDK. Check the API page for each service to find information about authentication headers.

## Data-plane protocol availability by product

The following table summarizes current protocol support by service.

`✓` indicates support. `-` indicates no support.

| Product                              | gRPC | HTTP | RESP | protosocket |
| ------------------------------------ | ---- | ---- | ---- | ----------- |
| **Momento Cache (Cluster and Flex)** | -    | -    | ✓    | -           |
| **Momento Cache (Serverless)**       | ✓    | ✓    | -    | ✓           |
| **Momento Topics**                   | ✓    | ✓    | -    | -           |
| **Momento Functions**                | ✓    | ✓    | -    | -           |
| **Momento Leaderboards**             | ✓    | -    | -    | -           |
| **Momento Object Store**             | -    | ✓    | -    | -           |
