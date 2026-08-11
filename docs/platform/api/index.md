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
