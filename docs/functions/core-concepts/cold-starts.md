---
sidebar_position: 3
sidebar_label: Cold starts
title: Cold starts and Functions
description: Learn why every Momento Functions invocation is a cold start - and why that's a feature, not a problem
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - cold start
  - latency
  - performance
  - serverless
---

# Cold starts and Functions

In most function-as-a-service (faas) platforms, "cold start" is a problem: Idle containers get reaped, the first request after a quiet period pays a hundreds-of-milliseconds penalty, and you pay for provisioned concurrency to hide it. Momento Functions approaches this differently: **every invocation is a cold start**, and the cold start is a few microseconds.

## What makes them fast

Some properties of the Functions [architecture](/functions/core-concepts/architecture) collapse the usual faas cold-start cost:

* **Pre-compiled, pre-linked WebAssembly** - When you upload a `.wasm` artifact, the host compiles it ahead of time. There is no JIT warmup at invocation time.
* **No language runtime to boot** - There is no JVM, V8, or interpreter to spin up. The sandbox is provided by an in-process `wasmtime` library. Your invocation instance is a zero'd memory region plus a reference to a function table.
* **Amortized connection setup** - TLS handshakes the like live *outside* your sandbox, in the host. Your Function external resources through [host interfaces](/functions/core-concepts/host-interfaces) that cache connections across and between your Function invocations.

To start your invocation, it requires a ref count on your pre-linked vtable, a pooled memory allocation, and a call. Microseconds-scale work for aarch64 hosts!

## Every invocation is fresh

A traditional faas keeps a pool of warm containers around so subsequent invocations can reuse them. Momento also amortizes allocations in a pool, but these are lightweight structures that are usable by any Function. There is no separate resource consumed that would drive us to reduce or reclaim caches.

Functions makes the sandbox effectively free to create. There is no pool to size, no warm-up phase, and no surprise state surviving between calls. Every caller gets called the same way, regardless of whether the Function was invoked a millisecond ago or a day ago.

## What this means for your code

Because cold start is not your problem, you can write pretty naive Functions to good effect:

**Don't bother memoizing across invocations.** It won't survive anyway. Cache things you want to share in [Momento Cache](/functions/capabilities/cache) instead.

**Don't bother with lazy initialization of dependencies.** There is no module load that survives an invocation. Initialize what you need each call; the work is cheap when the inputs are local.

## What still costs latency

The Function's own startup is microseconds, but your Function might still do work that takes time:

* **External HTTP calls** - The host's connection pool amortizes your connection cost, but sometimes hosts close connections. Also, the round trip itself takes time. Cache results when you can: Momento cache is pretty quick.
* **Cache misses** - Reading from [Momento Cache](/functions/capabilities/cache) is fast, but a miss that triggers a slower upstream call still pays for that upstream.
* **Payload size** - Decoding a multi-megabyte JSON body is going to take time. Use `Data` (a host-side buffer) when you're just passing bodies through; in that way you can direct data with native performance.
* **Cryptography** - Some work is just processor-intensive. Functions is snappy, but you'll find a bare-metal ec2 instance is quite a bit better at your heavy lifting.

Functions lightens your burden in addressing the *infrastructure* contribution to your tail latency. The work your Function does is still your work — but you're starting from a more helpful baseline than any other FaaS on AWS.
