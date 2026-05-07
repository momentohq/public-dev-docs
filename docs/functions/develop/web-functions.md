---
sidebar_position: 2
sidebar_label: Web Functions
title: Building Web Functions
description: Write Momento Functions that take a request and return a response, with typed JSON, headers, and status codes
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - web
  - http
  - json
  - serverless
---

# Building Web Functions

A **Web Function** has a request/response shape: a caller reaches the Function's HTTP endpoint, your handler runs, and you return a response. This page introduces typed JSON, custom status codes and headers, and reading the inbound request — all built on the [`momento-functions-guest-web`](/functions/core-concepts/host-interfaces) crate.

For the runtime model behind each call, see [Invocations](/functions/core-concepts/invocations).

## The simplest handler

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_web::invoke;

invoke!(ping);
fn ping(_payload: Data) -> &'static str {
    "pong"
}
```

`invoke!` registers `ping` as the entry point. `Data` is a handle to the inbound body that lives on the host. Call `Data::into_bytes()` only when you actually need the bytes inside your sandbox. If it's possible to pass a `Data` from the request to another interface, e.g., to upload it to S3, you can avoid the latency and runtime cost of allocating the data in your webassembly instance by passing the handle along.

The return type from your web function can be anything that converts into a response body, including `&str`, `String`, `Vec<u8>`, or one of the typed wrappers below.

## Typed JSON request and response

For most APIs you'll want `Json<T>` from `momento-functions-bytes::encoding`. The handler signature does the parsing and serialization for you:

```rust
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_web::invoke;

#[derive(serde::Deserialize)]
struct Request { name: String }

#[derive(serde::Serialize)]
struct Response { message: String }

invoke!(greet);
fn greet(Json(request): Json<Request>) -> Json<Response> {
    Json(Response { message: format!("Hello, {}!", request.name) })
}
```

If decoding fails, a 400 is returned to the caller without running your handler.

## Status codes, headers, and `WebResponse`

When you need more control over the response — error codes, custom headers, content type — return a `WebResponse`. Use `WebResult` for fallible handlers:

```rust
use momento_functions_bytes::{Data, encoding::Json};
use momento_functions_guest_web::{WebResponse, WebResult, invoke};

#[derive(serde::Serialize)]
struct Body { message: String }

invoke!(handler);
fn handler(_payload: Data) -> WebResult<WebResponse> {
    Ok(
        WebResponse::new()
            .with_status(200)
            .header("Content-Type", "application/json")
            .with_body(Json(Body { message: "ok".to_string() } ))?
    )
}
```

`WebResult<T>` is `Result<T, WebError>`. Errors propagate via the `?` operator from any host interface that returns a `WebError`-compatible error type, including [cache operations](/functions/capabilities/cache), [outbound HTTP](/functions/capabilities/http), and [logging](/functions/capabilities/logging) configuration. This is done so you can conveniently `?`-propagate out from errors if you want to!

## Reading request details and environment

Use `WebEnvironment::load()` for the surrounding context of an invocation:

```rust
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_web::{WebEnvironment, WebResponse, WebResult, invoke};
use serde::Deserialize;

#[derive(Deserialize)]
struct Request {
    headers_to_send_back: std::collections::HashMap<String, String>,
}

invoke!(echo_details);
fn echo_details(Json(request): Json<Request>) -> WebResult<WebResponse> {
    let env = WebEnvironment::load();
    let headers = env.headers();
    let path = env.http_path();
    let invocation_id = env.invocation_id();
    let your_token_metadata = env.token_metadata().as_deref().unwrap_or("");

    // Don't echo secrets back!
    let to_echo = headers
        .iter()
        .filter(|(k, _)| *k != "authorization")
        .map(|(k, v)| format!("'{k}'='{v}'"))
        .collect::<Vec<_>>()
        .join(", ");

    Ok(
        WebResponse::new()
            .with_status(200)
            .with_headers(request.headers_to_send_back.into_iter().collect())
            .with_body(format!("invocation: {invocation_id}, user: {your_token_metadata}, path: {path}, headers: {to_echo}"))?
    )
}
```

`WebEnvironment` also exposes `function_name()`, `query_parameters()`, etc. See [Environment and metadata](/functions/capabilities/environment) for the full surface.

## Offloaded bytes with `Data`

If your Function is a thin proxy — pass the body upstream, return the upstream response body — keep it as `Data` end-to-end. The bytes never enter your sandbox:

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_web::{WebResponse, WebResult, invoke};
use momento_functions_http::{Request as HttpRequest, invoke as http_invoke};

invoke!(proxy);
fn proxy(payload: Data) -> WebResult<WebResponse> {
    let upstream = http_invoke(
        HttpRequest::new("https://example.com/echo", "POST")
            .with_body(payload),
    )?;
    Ok(WebResponse::new()
        .with_status(upstream.status as u16)
        .with_body(upstream.body)?)
}
```

This pattern makes Functions effective as a low latency [proxy](/functions/patterns/proxying) — large bodies don't pay sandbox-copy costs.

## Remember

* **Pick the lightest type your handler needs.** `Data` for bytes-through, `Json<T>` for typed APIs.
* **Return `WebResult<WebResponse>` when you care about status or headers.** Otherwise return the body directly.
* **Use `WebEnvironment::load()` for request details.** Headers, env vars, token metadata, function name.
* **Mind your headers.** Don't be passing `authorization` to places it doesn't belong!
