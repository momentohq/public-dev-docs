---
sidebar_label: API
title: API overview
description: Momento's API surface — SDKs over gRPC, the HTTP API, and how to connect.
---

<!-- Projects: cross-product/api-overview -->

# API overview

Momento's APIs are **SDK-first over gRPC** (with Protocol Buffers messages). For environments that
cannot use gRPC, an **HTTP API** covers a non-gRPC subset. To call any of them you provide an
**[API key](/platform/authentication/api-keys)** and target a **regional endpoint** (cell URL); the
region base URL is shown in the console.

## Protocols

"HTTP API" names a **protocol** — how a client reaches a service over HTTP — alongside **RESP**,
**gRPC**, and **protosocket**. It is not the name of any single product's API. When a page refers to
"the HTTP API," check which surface it means.

## Distinct HTTP-API surfaces

Several distinct HTTP-API surfaces exist; keep them apart:

1. **Momento Cache (Serverless) data-plane HTTP API** — available today for the serverless cache.
2. **Momento Cache control-plane HTTP API** — for managing Capacity Pools and Databases.
3. **Momento Cache data-plane HTTP API (coming soon)** — sends RESP commands over HTTP, running
   alongside the RESP data plane.

Each targets a different audience and endpoint, so treat them as separate references rather than one
"HTTP API."
