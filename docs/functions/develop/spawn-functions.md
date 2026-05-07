---
sidebar_position: 3
sidebar_label: Spawn Functions
title: Building Spawn Functions
description: Run background work on Momento Functions without making the caller wait
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - spawn
  - background
  - async
  - serverless
---

# Building Spawn Functions

A **Spawn Function** is the fire-and-forget Momento Function. The caller returns immediately. Your spawn handler runs in its own [sandbox](/functions/core-concepts/architecture) afterward. Use it when the response doesn't need to wait for the work — warming a cache, fanning out a notification, kicking off a pipeline, recording an analytics event.

## The simplest spawn

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_spawn::spawn;

spawn!(spawned);
fn spawned(_payload: Data) {}
```

You might question whether sound is made when a tree falls in the woods, but we do record metrics and would know that this spawn was invoked even though it doesn't do anything.

The macro is `spawn!` instead of `invoke!`, and the handler returns `()` — there is no response to the caller. The payload is delivered the same way as a [Web Function](/functions/develop/web-functions): as a `Data` buffer (or `Json<T>` if you want it parsed).

Instead of returning nothing, you can also return a value that fulfills `IntoSpawnResult`, like `Result<(), String>` or `Result<SpawnSuccess, SpawnFailure>`. You get better visibility into errors if you do that.

## Typed JSON payload

```rust
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_spawn::spawn;

#[derive(serde::Deserialize)]
struct Request { name: String }

spawn!(spawned);
fn spawned(Json(_payload): Json<Request>) {}
```

If decoding fails, the host drops the invocation.

## When to use spawn vs. web

Currently you have to use a Web Function to start any Function. A common pattern is to enter a Web Function does a cache lookup and returns the cached value if present; on a miss it kicks off a Spawn Function to repopulate the cache, and the Web Function quickly returns a miss to the user. If you don't want to return a miss, then you'd repopulate the cache in the web function and then return the value without using a Spawn Function.

## Cargo dependencies

The main difference from a Web Function is which guest crate you import:

```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
momento-functions-bytes        = { version = "0" }
momento-functions-guest-spawn  = { version = "0" }
```

Spawn Functions can use most [host interfaces](/functions/core-concepts/host-interfaces) that a Web Function can — cache, HTTP, AWS, topics, logging. They can't return a body, and they can't use a WebEnvironment.

## What spawn is not

* **Not a queue.** There is no retry, no DLQ, no scheduled retry. If you need durability, write to a topic or store before exiting and have a separate consumer drive the work. This is "at-most-once" execution guarantee, if you're distributed systems minded.
* **Not long-running.** Spawn invocations are still ideally short-lived [WebAssembly sandboxes](/functions/core-concepts/architecture). At-most-once semantic means they may be terminated if the host needs to, e.g., reboot for updates.
* **Not an event bus.** If you have many subscribers who need the same event, fan out via [Momento Topics](/functions/capabilities/topics) and let each subscriber pull the message.
