---
sidebar_position: 3
sidebar_label: Proxying
title: Proxying browser traffic with Momento Functions
description: Let your users' devices call upstream services through a Momento Function instead of standing up an API tier
pagination_next: null
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - proxy
  - api gateway
  - browser
  - serverless
---

# Proxying browser traffic with Momento Functions

Browser-callable APIs traditionally need an API Gateway, a Lambda or container service, a WAF, and somewhere to keep upstream credentials. Functions does all of that in one `.wasm`: your users authenticate with a [short-lived disposable Momento token](/functions/capabilities/tokens), call the Function directly, and the Function holds the upstream credentials and shapes the response. There is no application server for you to write in between.

## How Functions helps

Momento auth makes direct browser-to-Function calls safe and fast. Momento tokens can be scoped down to exactly what a user needs to access. A leaked fine-grained user token expires in minutes (if you choose) and can't escalate past what you let users do.

You bake your own user's id (or a small JSON object) into the token. Then later your Function can read it back via [`WebEnvironment::token_metadata()`](/functions/capabilities/environment).

The Function's [outbound HTTP](/functions/capabilities/http) connection pool is warm after the first call. It's gentle on your upstream dependencies, and you get more control over how your clients hammer your upstream.

## The flow

```text
[ Browser ]
    │  1. Get a short-lived token (user-accessible auth)
    ▼
[ Token-vending Function ]
    │  Returns scoped, short-lived token
    ▼
[ Browser ]
    │  2. Call the proxy Function with the user's token
    ▼
[ Proxy Function ]   ← holds upstream credentials in env vars
    │  3. Calls upstream with credentials the browser never sees
    ▼
[ Upstream API ]
```

Two Functions cover the flow:

1. **Token vending** - See [Disposable tokens](/functions/capabilities/tokens). The browser calls this once per session to get a narrow, time-boxed credential.
2. **Proxy** - The actual API surface. Validates the request, calls upstream, returns the response.

## A pass-through proxy

The thinnest version of the proxy keeps the body as `Data` end to end — the bytes never enter the sandbox:

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_web::{WebEnvironment, WebResponse, WebResult, invoke};
use momento_functions_http::{Request as HttpRequest, invoke as http_invoke};

invoke!(proxy);
fn proxy(payload: Data) -> WebResult<WebResponse> {
    let env = WebEnvironment::load();
    let user_id = match env.token_metadata() {
        Some(id) => id,
        // Refuse to proxy without an identity in the caller's token.
        None => return Ok(WebResponse::new().with_status(401).with_body("unauthorized")?),
    };

    let upstream_key = std::env::var("UPSTREAM_API_KEY").unwrap_or_default();
    let upstream = http_invoke(
        HttpRequest::new("https://upstream.example.com/v1/items", "POST")
            .with_header("authorization", format!("Bearer {upstream_key}"))
            .with_header("x-user-id", user_id)
            .with_body(payload),
    )?;

    Ok(WebResponse::new()
        .with_status(upstream.status as u16)
        .with_body(upstream.body)?)
}
```

The upstream credential lives in a [Function environment variable](/functions/capabilities/environment). The browser never sees it. The user's identity is stamped on the upstream request from the *Momento token* — the browser can't lie about who it is.

Remember, anything stored in [environment variables](/functions/capabilities/environment) is visible to whoever can read your Function configuration. For higher-sensitivity credentials, fetch them from [AWS Secrets Manager](/functions/capabilities/aws) inside the Function.

## Where to add policy

Because the Function is the only path to the upstream from the browser, it's a natural place to enforce things you'd otherwise put in a separate API gateway:

* **Rate limits** - Use a [cache `set_if`](/functions/capabilities/cache) with a short TTL keyed by user id to count requests per second.
* **Request shaping** - Reject requests that ask for too much data, paginate aggressive queries, normalize input before forwarding, coalesce concurrent requests for the same data.
* **Field-level allowlisting** - Parse the body as `Json<T>` and re-serialize to strip fields the upstream might leak.
* **Response filtering** - Same idea on the way back: strip internal fields before they reach the browser.

## When to inspect the body vs. pass it through

* **Pass-through (`Data`)** - Use when you trust the upstream's response and just need the credential boundary. Fastest, least code.
* **Typed (`Json<T>`)** - Use when you need to validate, normalize, or enrich. Pay a parse + re-serialize cost.

The two patterns can coexist in one Function — keep the request as `Json<T>` so you can use it, but read the upstream response back as `Data` if you just want to forward the body.

## Combining with caching

The proxy pattern composes cleanly with the [caching pattern](/functions/patterns/caching). For idempotent GET-shaped traffic, cache the upstream response keyed by the request, and serve subsequent identical calls from Momento Cache without touching the upstream. This is especially powerful for browser traffic where many users hit the same handful of popular resources.

## What proxying is not

* **Not a long-running tunnel.** Functions are request/response. Don't try to forward WebSocket or SSE streams. It won't work _yet_.
* **Not a replacement for fine-grained auth.** The Function only sees the Momento token. If your upstream needs richer policy (groups, ABAC, MFA state), you have to express that in the token's `token_id` payload or a separate session lookup.

:::tip
For some relevant examples, see [`token-vending-machine`](https://github.com/momentohq/functions/tree/main/examples/token-vending-machine) plus the [`reading-and-sending-headers`](https://github.com/momentohq/functions/tree/main/examples/reading-and-sending-headers) and [`web-function-token-metadata`](https://github.com/momentohq/functions/tree/main/examples/web-function-token-metadata) examples.
:::
