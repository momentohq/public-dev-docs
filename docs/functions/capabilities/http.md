---
sidebar_position: 2
sidebar_label: Outbound HTTP
title: Calling external services with outbound HTTP
description: Make HTTP calls from a Momento Function using a host-pooled connection
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - http
  - outbound
  - host interface
  - serverless
---

# Calling external services via HTTP

The [`momento-functions-http`](/functions/core-concepts/host-interfaces) crate lets your Function reach out to anything that speaks HTTP — OpenAI, Turbopuffer, your own backend, third-party APIs. The connection pool lives on the host, so you rarely pay connection handshake latency on the hot path.

## Add the dependency

```toml
[dependencies]
momento-functions-bytes        = { version = "0" }
momento-functions-guest-web    = { version = "0" }
momento-functions-http         = { version = "0" }
```

## A typed call

The `Request` builder takes a URL and method, plus headers and an optional body:

```rust
use momento_functions_bytes::encoding::{Extract, Json};
use momento_functions_guest_web::{WebResult, invoke};
use momento_functions_http::{Request as HttpRequest, invoke as http_invoke};
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Debug)]
struct EmbeddingResponse {
    data: Vec<EmbeddingData>,
}

#[derive(Deserialize, Serialize, Debug)]
struct EmbeddingData {
    embedding: Vec<f32>,
    index: usize,
}

invoke!(embed);
fn embed(Json(documents): Json<Vec<String>>) -> WebResult<Json<Vec<EmbeddingData>>> {
    let openai_api_key = std::env::var("OPENAI_API_KEY").unwrap_or_default();

    let response = http_invoke(
        HttpRequest::new("https://api.openai.com/v1/embeddings", "POST")
            .with_header("authorization", format!("Bearer {openai_api_key}"))
            .with_header("content-type", "application/json")
            .with_body(
                serde_json::json!({
                    "model": "text-embedding-3-small",
                    "encoding_format": "float",
                    "input": documents,
                })
                .to_string(),
            ),
    )?;

    let Json(EmbeddingResponse { mut data }) = Json::<EmbeddingResponse>::extract(response.body)?;
    data.sort_by_key(|d| d.index);
    Ok(Json(data))
}
```

Two parts to notice:

* **`http_invoke` returns a response with `status`, response headers, and `body`.** The `body` is a `Data` handle to a host-managed buffer.
* **`Json::<T>::extract(response.body)` parses the body.** If you only want to relay the bytes along to the caller, leave it as `Data` and skip parsing.

## Pass-through proxy

If you don't need to inspect the upstream body, hold it as `Data` and forward it straight back:

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

This is the foundation for the [proxying pattern](/functions/patterns/proxying) — the request and response bodies never enter your sandbox.

## Hot connection pool

The host pools connections across invocations. Your latency from Functions during a traffic burst is about the same as during steady state. Your dependencies however...

You don't manage clients. There is no `Client::new()` to construct for http in Functions. `http_invoke` is functional: It takes a `Request` and returns a `Response`.

## Caching upstream calls

External APIs are usually the slow part of a Function. Pair `http_invoke` with [`momento-functions-cache`](/functions/capabilities/cache) to memoize:

```rust
use std::time::Duration;
use momento_functions_bytes::Data;
use momento_functions_cache as cache;
use momento_functions_http::{Request as HttpRequest, invoke as http_invoke};

let key = format!("openai:embed:{prompt_hash}");
if let Some(bytes) = cache::get::<Data>(key.as_str())? {
    return Ok(bytes.into_bytes());
}

let response = http_invoke(HttpRequest::new("https://api.openai.com/v1/embeddings", "POST"))?;
let bytes = response.body.into_bytes();
cache::set(key.as_str(), bytes.clone(), Duration::from_secs(3600))?;
```

The [`turbopuffer-search` example](https://github.com/momentohq/functions/tree/main/examples/turbopuffer-search) does this for embedding queries.
