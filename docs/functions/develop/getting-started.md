---
sidebar_position: 1
sidebar_label: Getting started
title: Getting started with Momento Functions
description: Install the toolchain, write your first Function, and deploy it to Momento
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - getting started
  - rust
  - wasm
  - serverless
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with Momento Functions

This page walks you from a fresh machine to a deployed Function in a few minutes. By the end you'll have a `pong` web Function running on the Momento platform that you can `curl`. From there, the rest of the [Develop](/functions/develop/web-functions) section shows you how to add JSON, headers, [cache reads](/functions/capabilities/cache), and other stuff.

## One-time setup

Functions are written in Rust and compiled to `wasm32-wasip2`. You need a Rust toolchain and the matching target.

```bash
# Install Rust
# https://rustup.rs/
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add the Functions compile target
rustup target add wasm32-wasip2
```

You also need a Momento API key for the cache that will host your Function. If you don't have one, follow the [authentication guide](/cache/authentication/api-keys).

## Create a project

Functions are ordinary Rust libraries that compile to a WebAssembly artifact.

```bash
cargo init --lib hello
cd hello
```

### Set the build target

Add `.cargo/config.toml` so you don't have to pass `--target` on every build:

```toml
[build]
target = "wasm32-wasip2"
```

### Configure `Cargo.toml`

A minimal web Function needs the bytes host crate (for payloads) and guest-web host crate (for the `invoke!` macro). Tell cargo to produce a `cdylib` to get the right `.wasm` output:

```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
momento-functions-bytes     = { version = "0" }
momento-functions-guest-web = { version = "0" }
```

## Write the Function

Fill `src/lib.rs` with the simple web Function (of course you don't have to write this in lib.rs, but it makes the example slightly shorter so here we are):

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_web::invoke;

invoke!(ping);
fn ping(_payload: Data) -> &'static str {
    "pong"
}
```

`Data` is a handle on a host-side buffer — the bytes don't need to enter your sandbox unless you call `Data::into_bytes()`. The `invoke!` macro wires `ping` up as the entry point the Function host calls.

## Build

```bash
cargo build --release
```

Your artifact is at `target/wasm32-wasip2/release/hello.wasm`.

## Deploy

You can deploy with the [Momento CLI](https://github.com/momentohq/momento-cli) (recommended) or by base64-encoding the artifact and uploading it directly to the management API.

<Tabs>
<TabItem value="cli" label="Momento CLI">

```bash
momento preview function put-function \
   --cache-name "$MOMENTO_CACHE_NAME" \
   --name ping \
   --wasm-file target/wasm32-wasip2/release/hello.wasm
```

</TabItem>
<TabItem value="http" label="HTTP API">

```bash
base64_data=$(base64 < target/wasm32-wasip2/release/hello.wasm)

curl -v \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/manage/$MOMENTO_CACHE_NAME/ping \
  -XPUT \
  -H "authorization: $MOMENTO_API_KEY" \
  -H "Content-Type: application/json" \
  --data "{\"inline_wasm\":\"$base64_data\"}"
```

A successful upload returns a `204 No Content`.

</TabItem>
</Tabs>

In the placeholders above:

* `MOMENTO_CACHE_NAME` - The cache that hosts the Function. Functions are scoped to a cache.
* `MOMENTO_CELL_HOSTNAME` - The [region endpoint](/platform/regions) for your cache.
* `MOMENTO_API_KEY` - A Momento API key with permission to manage Functions.

## Invoke

Functions are callable over HTTP at the same endpoint as the cache that hosts them.

```bash
curl \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/$MOMENTO_CACHE_NAME/ping \
  -H "authorization: $MOMENTO_API_KEY" \
  -d 'ping'
```

You should see `pong`.

:::tip
For more substantial starting points — JSON request/response, [token vending](/functions/capabilities/tokens), [cache integration](/functions/capabilities/cache), [HTTP fan-out to OpenAI and Turbopuffer](/functions/capabilities/http) — see the [`examples/` directory in the Functions repo](https://github.com/momentohq/functions/tree/main/examples).
:::

## Next steps

* [Web Functions](/functions/develop/web-functions) - Status codes, headers, JSON request/response shapes.
* [Spawn Functions](/functions/develop/spawn-functions) - Fire-and-forget background invocations.
* [Deploy and invoke](/functions/develop/deploy-and-invoke) - Manage Function lifecycles, environment, and updates.
* [Host interfaces](/functions/core-concepts/host-interfaces) - The menu of capabilities you can pull into your sandbox.
