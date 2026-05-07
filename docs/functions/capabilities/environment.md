---
sidebar_position: 6
sidebar_label: Environment and metadata
title: Environment and request metadata
description: Read environment variables, headers, and token metadata inside a Momento Function
pagination_next: null
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - environment
  - headers
  - token metadata
  - serverless
---

# Environment and request metadata

A Function gets its surrounding context from **environment variables** set at deploy time (read in the function by `std::env`), and the per-invocation **`WebEnvironment`** which exposes the inbound request's details and other metadata.

## Environment variables

Function environment variables are passed in when you upload the artifact and surface through standard `std::env`:

```rust
use itertools::Itertools;
use momento_functions_bytes::Data;
use momento_functions_guest_web::invoke;

invoke!(return_env);
fn return_env(_payload: Data) -> String {
    std::env::vars().map(|(k, v)| format!("{k}={v}")).join("\n")
}
```

This is a reasonable place for upstream API keys, region selectors, model identifiers, feature flags — anything that is per-Function configuration but not per-invocation. Set them with the [Momento CLI](https://github.com/momentohq/momento-cli) at upload time.

:::warning[Note]
Environment variables are visible to anyone who can read your Function's configuration. Use roles or [Secrets Manager](/functions/capabilities/aws) for security-critical credentials you need to rotate or audit independently.
:::

## `WebEnvironment::load()`

Per-invocation context comes from `WebEnvironment::load()`. The same object exposes:

* `function_name()` - The name your Function was deployed under. Useful for [logging destinations](/functions/capabilities/logging) that should be unique per Function.
* `headers()` - The HTTP headers on the inbound request as a key-value list.
* `token_metadata()` - The `token_id` payload that was baked into the auth token used for this invocation, if any.

### Reading inbound headers

```rust
use itertools::Itertools;
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_web::{WebEnvironment, WebResponse, WebResult, invoke};
use serde::Deserialize;
use std::collections::HashMap;

#[derive(Deserialize)]
struct Request {
    headers_to_send_back: HashMap<String, String>,
}

invoke!(headers_example);
fn headers_example(Json(request): Json<Request>) -> WebResult<WebResponse> {
    let headers = WebEnvironment::load().headers();

    let count = headers.len();

    Ok(WebResponse::new()
        .with_status(200)
        .with_headers(request.headers_to_send_back.into_iter().collect())
        .with_body(format!("You sent {count} headers"))?)
}
```

### Reading token metadata

When a caller invokes a Function with a Momento token whose `token_id` field was populated at generation time, you can read it back inside the handler:

```rust
use momento_functions_bytes::{Data, encoding::Json};
use momento_functions_guest_web::{WebEnvironment, invoke};

#[derive(serde::Serialize)]
struct Response { message: String }

invoke!(who);
fn who(_: Data) -> Json<Response> {
    match WebEnvironment::load().token_metadata() {
        Some(metadata) => Json(Response { message: format!("token says: {metadata}") }),
        None => Json(Response { message: "no metadata".to_string() }),
    }
}
```

This is the to identify Function callers. The `token_id` is signed by Momento at token-generation time, so it can't be forged by the caller. See [Disposable tokens](/functions/capabilities/tokens) for how to put a value in `token_id` when you mint a token.
