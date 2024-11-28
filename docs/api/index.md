---
sidebar_position: 1
id: api-reference
title: API Reference
description: API reference documentation for the Momento Platform. Includes specifications, examples, and code snippets for all Momento SDK clients.
hide_title: true
hide_table_of_contents: true
keywords:
  - momento
  - cache
  - caching
  - topics
  - api
  - dev docs
  - api docs
  - eda
  - event-driven architecture
  - redis
  - serverless
  - enterprise
  - platform
---

# API reference

The Momento API prioritizes usage through our [extensive set of SDKs](/platform/sdks). A driving pillar of the Momento platform is **performance**, so Momento SDKs take advantage of gRPC connections from devices to the Momento services. This minimizes latency while providing a seamless, intuitive experience for developers.

The SDKs accept strongly-typed inputs for all commands, and allows strings and [binary data](https://en.wikipedia.org/wiki/Binary_data) for data values. Inputs are transmitted to Momento using [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers), which is the standard communication mechanism of gRPC.

Momento also supports an HTTP API for a subset of operations for environments that do not support gRPC. When using the Momento SDK, communication is handled automatically with our services. The desired region is inferred from the provided API key or token, and sent to the proper location on your behalf. When using the HTTP API, you must provide the base URL for the region you wish to use. A complete list of base URLs for each region can be found here.

## Ready to get started?

Learn details about how Momento does authentication on the next page or jump to one of our [quickstart guides](/cache/how-to/rate-limiter).
