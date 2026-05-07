---
sidebar_position: 1
sidebar_label: Caching
title: Read-through caching with Momento Functions
description: Cache slow or expensive upstream calls inside a Function, with no extra infrastructure
pagination_next: null
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - cache
  - read-through
  - pattern
  - serverless
---

# Read-through caching with Momento Functions

The simplest, highest-leverage pattern for Momento Functions is **read-through caching**: a Function takes a request, looks for the answer in [Momento Cache](/functions/capabilities/cache), and only falls through to a slow upstream on a miss. Because the Function and the cache are co-located on the Momento platform, the cache lookup is quick — the only latency you pay is whatever the upstream costs on a miss.

## What this replaces

Without Functions, read-through caching usually requires a server-side component: a Lambda, a sidecar, an in-process cache layer in your API service. That component holds the upstream credentials, manages the connection pool, and implements the get-or-fetch logic. It needs deployment, monitoring, and capacity planning of its own.

Functions collapses that into a single `.wasm` artifact deployed to a Momento cache. There is no API Gateway, no Lambda, no separate cluster — your Function is the cache layer.

## The shape

A read-through cache Function will do a few familiar steps:

1. Compute a stable cache key from the request.
2. Try `cache::get(&key)`. If it hits, return the cached body.
3. On miss, load from the upstream.
4. Write the response into the cache with a TTL, and return it. (decide if you're going to do negative caching!)

```rust
use std::time::Duration;

use momento_functions_bytes::{Data, encoding::Json};
use momento_functions_cache as cache;
use momento_functions_guest_web::{WebResponse, WebResult, invoke};
use momento_functions_http::{Request as HttpRequest, invoke as http_invoke};
use serde::Deserialize;

#[derive(Deserialize)]
struct Request { product_id: String }

invoke!(product_lookup);
fn product_lookup(Json(req): Json<Request>) -> WebResult<WebResponse> {
    let key = format!("product:{}", req.product_id);
    let ttl = Duration::from_secs(300);

    if let Some(bytes) = cache::get::<Data>(key.as_str())? {
        return Ok(WebResponse::new()
            .with_status(200)
            .header("x-cache", "hit")
            .with_body(bytes)?);
    }

    let upstream = http_invoke(
        HttpRequest::new(
            &format!("https://catalog.example.com/products/{}", req.product_id),
            "GET",
        )
        .with_header("authorization", format!("Bearer {}", std::env::var("CATALOG_KEY").unwrap_or_default())),
    )?;

    let bytes = upstream.body.into_bytes();
    cache::set(key.as_str(), bytes.clone(), ttl)?;

    Ok(WebResponse::new()
        .with_status(upstream.status as u16)
        .header("x-cache", "miss")
        .with_body(bytes)?)
}
```

Some considerations:

* **Stable key shape.** The cache key is derived from the parts of the request that determine the response. Don't include caller identity unless the response is per-user.
* **TTL matches your tolerance for staleness.** Five minutes is a fine default; tighten or loosen it to match your upstream's update rate.
* **Relay the upstream status.** A 404 should still be a 404; consider caching it briefly to absorb burst traffic on missing IDs.

## Single-flight on miss

When a popular item misses the cache, many concurrent invocations may all stampede the upstream. You can collapse them with `set_if`:

```rust
use momento_functions_cache::{ConditionalSetResult, SetIfCondition};

// Try to claim the work
loop {
    let claimed = cache::set_if(
        format!("{}:lock", key).as_str(),
        b"1".to_vec(),
        Duration::from_secs(5),
        SetIfCondition::Absent,
    )?;
    if matches!(claimed, ConditionalSetResult::Stored(_)) {
        break;
    }
    // Someone else is fetching; small backoff then re-read the cache
    std::thread::sleep(Duration::from_millis(50));
    if let Some(bytes) = cache::get::<Data>(key.as_str())? {
        return Ok(WebResponse::new().with_status(200).with_body(bytes)?);
    }
}
// We claimed the lock, so now fetch
```

This is a cheap stampede dampener, not a strict mutex. Pair it with a short lock TTL so a crashing loader doesn't block the cache key and blow up your concurrency limit.

:::tip
The [`cache-scalar` example](https://github.com/momentohq/functions/tree/main/examples/cache-scalar) covers `get`/`set`/`set_if`/`delete` end to end. The [`turbopuffer-search` example](https://github.com/momentohq/functions/tree/main/examples/turbopuffer-search) shows the read-through pattern applied to OpenAI embedding queries.
:::
