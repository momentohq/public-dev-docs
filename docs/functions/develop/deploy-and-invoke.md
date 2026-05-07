---
sidebar_position: 4
sidebar_label: Deploy and invoke
title: Deploy and invoke a Function
description: Upload, update, and call your Momento Functions
pagination_next: null
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - deploy
  - invoke
  - cli
  - serverless
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy and invoke a Function

After you've [built a Function](/functions/develop/getting-started), deploying it is a `PUT` to the Function management API. This page covers the deploy and invoke surface, what the URL paths mean, and how to delete or update a Function.

## Function endpoint shapes

Functions live at the same hostname as the cache that hosts them:

* **Manage** - `https://api.cache.<MOMENTO_CELL_HOSTNAME>/functions/manage/<MOMENTO_CACHE_NAME>/<FUNCTION_NAME>` for create/update operations.
* **Invoke** - `https://api.cache.<MOMENTO_CELL_HOSTNAME>/functions/<MOMENTO_CACHE_NAME>/<FUNCTION_NAME>` for callers.

In the placeholders:

* `MOMENTO_CELL_HOSTNAME` - The [region endpoint](/platform/regions) for your cache.
* `MOMENTO_CACHE_NAME` - The cache that scopes the Function. Functions cannot cross caches.
* `FUNCTION_NAME` - Whatever you call this function.

## Deploy

<Tabs>
<TabItem value="cli" label="Momento CLI">

The CLI handles base64 encoding and the management call for you:

```bash
momento preview function put-function \
   --cache-name "$MOMENTO_CACHE_NAME" \
   --name greet \
   --wasm-file target/wasm32-wasip2/release/greet.wasm \
   --description "first cut of the greet handler" \
   --env-var "GREETING=hello"
```

Re-running `put-function` against an existing name uploads a new version. `--description` is recorded against that version and shows up in `list-function-versions` (see [Versions and pinning](#versions-and-pinning) below); `--env-var` can be passed multiple times to set Function environment variables.

</TabItem>
<TabItem value="http" label="HTTP API">

Base64-encode the artifact and PUT it to the management endpoint:

```bash
base64_data=$(base64 < target/wasm32-wasip2/release/greet.wasm)

curl -v \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/manage/$MOMENTO_CACHE_NAME/greet \
  -XPUT \
  -H "authorization: $MOMENTO_API_KEY" \
  -H "Content-Type: application/json" \
  --data "{\"inline_wasm\":\"$base64_data\"}"
```

A successful upload returns `204 No Content`. Uploading to an existing name updates the Function with a new version.

</TabItem>
</Tabs>

:::warning[Note]
The API key you use for management must have permission to manage Functions in the target cache. Use a separate, less-privileged key for invocation traffic. You don't want your users' cell phones to be allowed to delete your function!
:::

## Invoke

<Tabs>
<TabItem value="cli" label="Momento CLI">

```bash
momento preview function invoke-function \
  --cache-name "$MOMENTO_CACHE_NAME" \
  --name greet \
  --data "{\"name\":\"`whoami`\"}"
```

To test your users' less-privileged keys, you can pass the `--api-key $USER_API_KEY` argument.

</TabItem>
<TabItem value="http" label="HTTP API">

Send an HTTP request to the Function's invoke URL:

```bash
curl \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/$MOMENTO_CACHE_NAME/greet \
  -H "authorization: $USER_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"`whoami`\"}"
```

</TabItem>
</Tabs>

The body is whatever your handler expects — a JSON object if you used `Json<T>`, raw bytes of some sort if you used `Data`. The response body is whatever your handler returned.

## Authorization for callers

Callers authenticate with a Momento API key, the same way they would against any other Momento HTTP endpoint. For browser-callable Functions, generate [short-lived disposable tokens](/cache/authentication/tokens) with permissions scoped only to the Function they need to call — see the [token vending](/functions/capabilities/tokens) page for an end-to-end pattern.

Of note, authorization is only applied to access to the Function. The Function executes with a privileged role from Momento's point of view. If certain callers are allowed to do certain things and others are not, that is, if *you* have extra authorization constraints, you need to apply them via the trusted `WebEnvironment::token_metadata`.

## Updating and deleting

To **update** a Function, run `put-function` again with the same name. Each call uploads a new **version**; the Function's **current version** points at whichever version invocations actually run. By default, the current version follows the latest upload. A fresh `put-function` is picked up within a few milliseconds. To freeze production on a known-good version while you iterate, see [Versions and pinning](#versions-and-pinning) below.

To **delete** a Function, use the CLI or the management API:

<Tabs>
<TabItem value="cli" label="Momento CLI">

```bash
momento preview function delete-function \
  --cache-name "$MOMENTO_CACHE_NAME" \
  --name greet
```

</TabItem>
<TabItem value="http" label="HTTP API">

```bash
curl -X DELETE \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/manage/$MOMENTO_CACHE_NAME/greet \
  -H "authorization: $MOMENTO_API_KEY"
```

</TabItem>
</Tabs>

## Versions and pinning

Every `put-function` upload becomes a new **version** of that Function. Function versions are sequential integers, and are immutable once uploaded. Each carries its own description and environment variables. Updating variables is a new version! By default, a Function's **current version**, the one invocations actually run, automatically follows the latest upload. **Pinning** lets you decouple the two: keep production on a known-good version while you keep uploading new candidates. The ability to roll back to a good version in milliseconds is a core feature of the Functions experience.

### Pin to a specific version

<Tabs>
<TabItem value="cli" label="Momento CLI">

```bash
momento preview function put-function-config \
  --cache-name "$MOMENTO_CACHE_NAME" \
  --name greet \
  --pin-version 7
```

After pinning, subsequent `put-function` calls still upload new versions, but invocations stay on version 7 until you change the config.

</TabItem>
<TabItem value="sdk" label="Rust SDK">

```rust
use momento::functions::{CurrentFunctionVersion, PutFunctionConfigRequest};

let request = PutFunctionConfigRequest::from_function_name(cache_name, function_name)
    .current_version(CurrentFunctionVersion::Pinned(7));
function_client.send(request).await?;
```

`current_version` also accepts a plain integer (`.current_version(7)`) as a shorthand for `Pinned`.

</TabItem>
</Tabs>

### Go back to following the latest version

<Tabs>
<TabItem value="cli" label="Momento CLI">

```bash
momento preview function put-function-config \
  --cache-name "$MOMENTO_CACHE_NAME" \
  --name greet \
  --use-latest-version
```

</TabItem>
<TabItem value="sdk" label="Rust SDK">

```rust
use momento::functions::{CurrentFunctionVersion, PutFunctionConfigRequest};

let request = PutFunctionConfigRequest::from_function_name(cache_name, function_name)
    .current_version(CurrentFunctionVersion::Latest);
function_client.send(request).await?;
```

</TabItem>
</Tabs>

### Listing functions and versions

`list-functions` reports every Function in a cache along with its **latest** and **current** versions, the description of the current version, and when the latest version was uploaded:

```bash
momento preview function list-functions \
  --cache-name "$MOMENTO_CACHE_NAME"
# Name: greet, ID: f-abcdefg, Latest Version: 12, Current Version: 7,
# Description: "first cut of the greet handler", Last Uploaded: 2026-04-23T21:07:51Z
```

`list-function-versions` enumerates every version of a single Function with its description, WASM ID, and environment variables. It's helpful when you're trying to find a version to roll back to.

```bash
momento preview function list-function-versions --id f-abcdefg
```

## Configuring the Function environment

Function-scoped environment variables are passed in at upload time and surfaced through `std::env` inside the sandbox — see [Environment and metadata](/functions/capabilities/environment) for setting them and reading them. Common uses include API keys for upstream services, region selectors, feature flags, `RUST_LOG` log verbosity, upstream endpoints, prod/preprod deployment environment differences, and hardcoded access control lists.

## Local iteration

There's no local runtime that exactly matches the host today — `cargo build --release` produces the artifact you'd ship, but running it requires the Functions host. For now, the fastest iteration loop is to:

1. Make a code change.
2. `cargo build --release`.
3. Re-run the CLI `put-function` against a dev cache.
4. Hit the invoke URL with `curl`. (use [logging](/functions/capabilities/logging) into a Momento Topic for quick feedback).

If you're making serious Functions, separate the webassembly target crate from the implementation crate. Write your unit tests for your business logic library, and wire it to Functions in an adapter crate for final integration testing.
