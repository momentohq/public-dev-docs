---
sidebar_position: 1
sidebar_label: Cache
title: Reading and writing Momento Cache
description: Use Momento Cache from inside a Function via the cache host interface
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - cache
  - host interface
  - serverless
---

# Reading and writing Momento Cache

The [`momento-functions-cache`](/functions/core-concepts/host-interfaces) crate is how a Function reads and writes its hosting cache. The Function runs on the same platform as Momento Cache; these calls are as quick as can be!

## Add the dependency

```toml
[dependencies]
momento-functions-bytes     = { version = "0" }
momento-functions-cache     = { version = "0" }
momento-functions-guest-web = { version = "0" }
```

The cache crate operates against the cache that hosts the Function. There is no separate "cache name" parameter — your Function and the cache it uses share the namespace.

## Scalar operations

```rust
use std::time::Duration;

use momento_functions_bytes::Data;
use momento_functions_cache::{self as cache, SetIfCondition};
use momento_functions_guest_web::{WebResult, invoke};

invoke!(demo);
fn demo(_payload: Data) -> WebResult<&'static str> {
    let ttl = Duration::from_secs(60);

    cache::set("greeting", b"Hello, World!".to_vec(), ttl)?;
    let _value: Option<Data> = cache::get("greeting")?;

    cache::delete("greeting")?;

    cache::set_if(
        "new-key",
        b"first-value".to_vec(),
        ttl,
        SetIfCondition::Absent,
    )?;

    cache::set_if(
        "counter",
        b"1".to_vec(),
        ttl,
        SetIfCondition::NotEqual(b"2".to_vec().into()),
    )?;

    Ok("done")
}
```

The available operations mirror the [Momento Cache API](/cache/develop/api-reference): `get`, `set`, `set_if`, `delete`, plus list and dictionary collection operations through `momento-functions-cache-list` and friends. `set_if` supports the same condition types you'd use from a regular SDK — `Absent`, `Present`, `Equal`, `NotEqual`.

## Common patterns

### Read-through cache

The most common shape: check the cache, fall back to an upstream, write the result back. See [the caching pattern page](/functions/patterns/caching) for the full version.

```rust
let cached: Option<Data> = cache::get(key.as_str())?;
let data: Data = match cached {
    Some(bytes) => bytes,
    None => {
        let upstream = http_invoke(HttpRequest::new(&url, "GET"))?;
        let bytes = upstream.body.into_bytes();
        cache::set(key.as_str(), bytes.clone(), ttl)?;
        bytes.into()
    }
};
```

### Conditional write for idempotency

Use `set_if` with `Absent` to avoid re-doing expensive work when two invocations race:

```rust
use momento_functions_cache::ConditionalSetResult;

let result = cache::set_if(
    dedupe_key.as_str(),
    b"1".to_vec(),
    Duration::from_secs(60),
    SetIfCondition::Absent,
)?;
if matches!(result, ConditionalSetResult::NotStored) {
    return Ok("already processed");
}
// First-writer-wins: do the work
```

## Errors

Cache operations return `Result` types that compose with `WebResult` via `?`. A failed cache call doesn't crash the Function — you can pattern match the error to fall back to a slower path or return a degraded response.
But if you don't want to bother with error handling for this or that path, you can `?` the errors out.
