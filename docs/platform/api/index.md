---
sidebar_label: API
title: API overview
description: Momento's API protocols, product availability, and connection model.
---

<!-- Projects: cross-product/api-overview -->

# API overview

Momento's APIs are **SDK-first over gRPC** (with Protocol Buffers messages). For environments that
cannot use gRPC, an **HTTP API** covers a non-gRPC subset. To call any of them you provide an
**[API key](/platform/authentication/api-keys)** and target a **regional endpoint** (cell URL); the
region base URL is shown in the console.

## Protocols

"HTTP API" names a **protocol** that describes how a client reaches a service over HTTP. It sits
alongside **RESP**, **gRPC**, and **protosocket**; it is not the name of any single product's API.
When a page refers to "the HTTP API," check which surface it means.

## Protocol availability by product

Protocol support differs by product. The table summarizes current data-plane support. An API key and
the regional endpoint shown in the console provide the connection details for the selected product
and protocol. `✓` indicates support; `✗` indicates no support.

| Product | gRPC | HTTP API | RESP | protosocket |
| --- | --- | --- | --- | --- |
| **Momento Cache (Cluster and Flex)** | ✗ | ✗ | ✓ | ✗ |
| **Momento Cache (Serverless)** | ✓ | ✓ | ✗ | ✓ |
| **Momento Topics** | ✓ | ✓ | ✗ | ✗ |
| **Momento Functions** | ✓ | ✓ | ✗ | ✗ |
| **Momento Leaderboards** | ✓ | ✗ | ✗ | ✗ |
| **Momento Object Store** | ✗ | ✓ | ✗ | ✗ |

The matrix describes data-plane protocols only. The `/cache/…` HTTP routes belong to Momento Cache
(Serverless), not Cluster or Flex.

HTTP data-plane routes include a product-specific path such as `/cache/…`, `/topics/…`, or
`/functions/…`. The product path keeps those APIs distinct even when they use the same regional HTTP
endpoint.

## Distinct HTTP-API surfaces

Several distinct HTTP-API surfaces exist; keep them apart:

1. **[Momento Cache (Serverless) data-plane HTTP API](/cache/develop/api-reference/http-api)**:
   supports scalar cache operations such as get and set.
2. **Momento Cache control-plane HTTP API**: manages
   [Capacity Pools](/product/cache/api-reference/capacity-pool) and
   [Databases](/product/cache/api-reference/database).
3. **Momento Cache (Cluster and Flex) data-plane HTTP API**: planned as an HTTP transport for RESP
   commands, but not available.

Each targets a different audience and endpoint, so treat them as separate references rather than one
"HTTP API."
