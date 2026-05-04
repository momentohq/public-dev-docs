---
sidebar_position: 3
sidebar_label: Disposable tokens
title: Vending disposable Momento tokens
description: Mint short-lived, scoped Momento tokens from inside a Function
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - tokens
  - auth
  - disposable
  - serverless
---

# Vending disposable Momento tokens

The [`momento-functions-token`](/functions/core-concepts/host-interfaces) crate lets your Function mint short-lived, scoped [disposable Momento tokens](/cache/authentication/tokens). This collapses a token-vending-machine architecture — Lambda + API Gateway + IAM — into one short Function.

## Add the dependency

```toml
[dependencies]
momento-functions-bytes      = { version = "0" }
momento-functions-guest-web  = { version = "0" }
momento-functions-token      = { version = "0" }
```

## Vending a scoped token

```rust
use std::time::Duration;

use momento_functions_bytes::{Data, encoding::Json};
use momento_functions_guest_web::{WebResponse, WebResult, invoke};
use momento_functions_token::{
    FunctionPermissions, Permissions, generate_disposable_token,
};

#[derive(serde::Serialize)]
struct Response {
    api_key: String,
    endpoint: String,
    valid_until: u64,
}

invoke!(vend);
fn vend(_payload: Data) -> WebResult<WebResponse> {
    let permissions = Permissions::new()
        .with_function(
            FunctionPermissions::new()
                .with_cache("fo")
                .with_function("od"),
        );

    let token_id = Some("user-id-or-small-json".to_string());

    let result = generate_disposable_token(
        60 * 60,
        permissions,
        token_id,
    )?;

    Ok(WebResponse::new()
        .with_status(200)
        .header("Content-Type", "application/json")
        .with_body(Json(Response {
            api_key: result.api_key,
            endpoint: result.endpoint,
            valid_until: result.valid_until,
        }))?)
}
```

When writing a token vending Function, consider:

* **`Permissions`** this shares the shape of the [authentication API](/cache/authentication/tokens) — cache + item restrictions, topic + prefix restrictions, read-only/read-write/publish-only roles. Remember that permissions are for Functions _access_: The Function can do anything though.
* **Duration** is in seconds. Keep it as short as makes sense for your application!
* **`token_id`** is a small payload baked into the JWT Momento signs. Put a user id, a content id, or a small JSON object in here; the receiving Function can read it back via `WebEnvironment::load().token_metadata()` (see [Environment and metadata](/functions/capabilities/environment)).

## What this is for

In the typical AWS-shaped architecture, vending tokens looks like:

* A Lambda that holds a long-lived Momento API key.
* API Gateway in front of the Lambda for HTTP.
* IAM policy restricting which callers can hit the endpoint.
* CloudWatch and X-Ray for observability.

With Functions, you can collapse that into one `.wasm` artifact. The auth on the *Function itself* — your callers' Momento credentials — gates who can call it (or if it's public). There's no API Gateway and no Lambda to operate.

## Calling the vending Function from a client

A browser or mobile client calls the Function the same way it would call any other Momento HTTP endpoint:

```bash
curl \
  https://api.cache.$MOMENTO_CELL_HOSTNAME/functions/$MOMENTO_CACHE_NAME/vend \
  -H "authorization: $MOMENTO_BOOTSTRAP_KEY" \
  -d '{}'
```

The `MOMENTO_BOOTSTRAP_KEY` is whatever credential lets the client invoke the Function. Sometimes this is a higher-privilege key held by your auth server. Other times, like when you want a public Function, it can be a tightly-scoped key that's allowed only to invoke the vending Function.

The response carries the new narrowly-scoped token, which the client then uses for the cache, topic, or [other Function](/functions/develop/web-functions) traffic.

## Patterns that build on this

* **Per-content tokens for media** - Mint a token scoped to a key prefix matching one piece of content. See [the entitlements page](/media-storage/entitlements/about) for how this works for streaming media.
* **Per-session tokens for chat** - Mint a topic publish-only token scoped to one chat room.
* **Token metadata for caller identity** - Stuff the user id into `token_id` so downstream Functions can identify the caller without a session lookup.

:::tip
The full [token vending example](https://github.com/momentohq/functions/tree/main/examples/token-vending-machine) in the Functions repo includes structured logging and a complete request/response shape — copy it as a starter.
:::
