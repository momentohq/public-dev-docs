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
   --wasm-file target/wasm32-wasip2/release/greet.wasm
```

Re-running `put-function` against an existing name updates the Function with a new version.

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

Invocation is an HTTP request to the Function's invoke URL:

```bash
curl \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/$MOMENTO_CACHE_NAME/greet \
  -H "authorization: $MOMENTO_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"`whoami`\"}"
```

The body is whatever your handler expects — a JSON object if you used `Json<T>`, raw bytes of some sort if you used `Data`. The response body is whatever your handler returned.

## Authorization for callers

Callers authenticate with a Momento API key, the same way they would against any other Momento HTTP endpoint. For browser-callable Functions, generate [short-lived disposable tokens](/cache/authentication/tokens) with permissions scoped only to the Function they need to call — see the [token vending](/functions/capabilities/tokens) page for an end-to-end pattern.

Of note, authorization is only applied to access to the Function. The Function executes with a privileged role from Momento's point of view. If certain callers are allowed to do certain things and others are not, that is, if *you* have extra authorization constraints, you need to apply them via the trusted `WebEnvironment::token_metadata`.

## Updating and deleting

To **update** a Function, run `put-function` again with the same name — the artifact is replaced atomically and new invocations pick up the new code immediately (well, within a few milliseconds anyway).

To **delete** a Function, use the CLI:

```bash
momento preview function delete-function \
  --cache-name "$MOMENTO_CACHE_NAME" \
  --name greet
```

Or the management API:

```bash
curl -X DELETE \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/manage/$MOMENTO_CACHE_NAME/greet \
  -H "authorization: $MOMENTO_API_KEY"
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
