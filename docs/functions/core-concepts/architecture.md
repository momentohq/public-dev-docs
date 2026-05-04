---
sidebar_position: 1
sidebar_label: Architecture
title: How Momento Functions runs your code
description: Learn how Momento Functions sandboxes, schedules, and executes your code on the Momento platform
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - wasm
  - wasmtime
  - webassembly
  - architecture
  - serverless
---

# How Momento Functions runs your code

Momento Functions is a stateless execution layer that runs on Momento's horizontally scalable router fleet. Each invocation is its own sandbox, isolated from every other invocation and from the host. Understanding the runtime model is helpful to write fast, predictable Functions and to know which features are available to you.

## The execution model

Every invocation creates a fresh **WebAssembly sandbox**, runs your Function's entry point, and discards the sandbox when the response is sent. There is no warm pool, no per-tenant container, and no shared memory between invocations. If you need to persist state across calls, you do that explicitly using [Momento Cache](/functions/capabilities/cache), or any other store you prefer like S3 or DynamoDB.

The concept is familiar to AWS Lambda, but the unit of isolation is much smaller: Where Lambda gives you a micro-VM with a Linux userland, Functions gives you a [`wasmtime`](https://wasmtime.dev/) instance running pre-compiled, pre-linked WebAssembly. That's why ["cold starts"](/functions/core-concepts/cold-starts) are measured in microseconds rather than hundreds of milliseconds. It's basically a stack versus a VM.

## Compile target and standard library

Functions are built for the `wasm32-wasip2` target. The host is `wasmtime`. You write ordinary Rust code, but the runtime implements a constrained subset of the WebAssembly System Interface (WASI):

| WASI interface | Status |
|----------------|--------|
| `time` | `SystemTime` and `Instant` are supported |
| `environment` | Supported, populated from your function's [configuration](/functions/capabilities/environment) |
| `exit` | Unsupported (panic if you need to abort) |
| `filesystem`, `streams`, `stdio` | Unsupported |

Due to the way `wasip2` and the Rust target interact, we can't practically provide up-front compilation errors if you use (even transitively) unsupported system interfaces. Most of the standard library that doesn't touch I/O works fine, and you have full access to the cargo ecosystem — `serde`, `regex`, `rand`, and most non-I/O crates compile and run normally.

## Host interfaces, system calls

Much of the heavy lifting happens *outside* your sandbox. The Function host keeps connection pools, auth caches, AWS SDK clients, and HTTP keepalives running on the router process. When your Function calls one of the [host interfaces](/functions/core-concepts/host-interfaces), it's making a small WebAssembly Interface Type (WIT) "syscall" into that pool — not opening a TCP connection from inside the sandbox.

This is what lets every invocation be a "cold start" without paying cold-start costs:

* **Amortized connection setup** - Your `momento-functions-http::invoke` call rides a connection that was already established for a previous call. You do pay the cost once in a while, but it's not related to cold starts.
* **No SDK init** - The `S3Client` you construct in your Function is a thin handle on a pooled, authenticated client. You don't have to do gymnastics to try to cache your auth context and deal with missed tcp keepalives and dead connections...
* **No JIT warmup** - Your `.wasm` is pre-compiled and pre-linked. It's always fast.

## Stateless and ephemeral

Because every invocation is a fresh sandbox, anything you write to globals, lazy statics, or process memory is discarded when the Function returns. If you need to persist data, write it through one of the [host interfaces](/functions/core-concepts/host-interfaces) — typically [`momento-functions-cache`](/functions/capabilities/cache) for short-lived state or [AWS DynamoDB](/functions/capabilities/aws) for durable storage.

Any router host can serve any invocation. Bursts of traffic are handled by adding more concurrent sandboxes, not by waiting for container and VM startups.

## When Functions is the right fit

Functions is ideal for **short, request-scoped workloads** that benefit from being co-located with your Momento data: Read-through caching, token vending, request shaping, LLM orchestration, and lightweight proxying. It is not a general container runtime — if you need a long-lived process, a filesystem, or arbitrary OS access, run that in your own infrastructure and call into Functions for the parts that benefit from the platform.
