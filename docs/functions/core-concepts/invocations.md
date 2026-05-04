---
sidebar_position: 2
sidebar_label: Invocations
title: What is an invocation?
description: Learn what an invocation is in Momento Functions
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - invoke
  - web
  - spawn
  - serverless
---

# What is an invocation?

An **invocation** is a single execution of one of your Functions. The runtime accepts a request, creates a [WebAssembly sandbox](/functions/core-concepts/architecture), runs your handler, and returns a response. Two invocation styles exist today: **web** invocations, which return a response to the caller, and **spawn** invocations, which run in the background.

## Web invocations

**The `invoke!` macro**

You declare the entry point with a macro from the appropriate guest crate. The macro generates the ABI the host calls into, wires up payload decoding and response encoding:

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_web::invoke;

invoke!(ping);
fn ping(_payload: Data) -> &'static str {
    "pong"
}
```

Of course it's worth noting that you can return responses other than static strings! Anything that can turn into a `Data` can be returned. You can have one web entry point per `.wasm` artifact.

**Web invocation details**

A web Function takes an inbound request and produces an outbound response. The simplest signature accepts a [`Data`](/functions/develop/web-functions) (a host-side buffer) and returns anything that can be encoded into a response body:

```rust
invoke!(echo);
fn echo(payload: Data) -> Data {
    payload
}
```

For typed JSON in and out, swap the payload and return type for `Json<T>`:

```rust
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_web::invoke;

#[derive(serde::Deserialize)]
struct Request { name: String }

#[derive(serde::Serialize)]
struct Response { message: String }

invoke!(greet);
fn greet(Json(request): Json<Request>) -> Json<Response> {
    Json(Response {
        message: format!("Hello, {}!", request.name)
    })
}
```

Web invocations are what you'd use for [browser-callable APIs](/functions/patterns/proxying), [token vending](/functions/capabilities/tokens), [read-through caches](/functions/patterns/caching), and most general request/response work. See [Web Functions](/functions/develop/web-functions) for headers, status codes, paths, and response shaping.

## Spawn invocations

A spawn Function runs in the background. It receives a payload but produces no response — the function that spawned it does not block and the spawn function continues in its own sandbox:

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_spawn::spawn;

spawn!(spawned);
fn spawned(_payload: Data) {}
```

Spawn is right for **fire-and-forget** work: warming a cache, fanning out a notification, kicking off an async pipeline, or anything where the caller shouldn't wait for the result. See [Spawn Functions](/functions/develop/spawn-functions) for more.

## Identity and metadata per invocation

Each invocation carries the same auth context as any other Momento request. The Function can read:

* **Token metadata** (`token_id`) - A small payload you embed when generating the [auth token](/cache/authentication/tokens) used to invoke. Useful for identifying the caller without a separate session lookup.
* **Environment** - Function-scoped configuration values you set at deploy time.

Web Functions have an extra `WebEnvironment::load()` available to them with more web invocation metadata like headers, query string, and path — see [Environment and metadata](/functions/capabilities/environment).

## What an invocation is *not*

* **Not a long-running process** - Each invocation is short-lived and stateless. If you need to persist work, write it through a [host interface](/functions/core-concepts/host-interfaces).
* **Not a worker** - There is no event loop, no async runtime. You write straight-line blocking code; the host handles concurrency by preempting in time slices.
* **Not persistent** - Don't rely on in-memory caches surviving between calls: Unlike Lambda, _nothing_ in your Function ever survives between calls. These are functions, after all!
