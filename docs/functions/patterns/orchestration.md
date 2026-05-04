---
sidebar_position: 2
sidebar_label: LLM orchestration
title: LLM orchestration with Momento Functions
description: Wrap LLM calls with embeddings, vector search, and caching inside a single Function
pagination_next: null
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - llm
  - openai
  - embeddings
  - rag
  - turbopuffer
  - serverless
---

# LLM orchestration with Momento Functions

LLM applications often need to wire together a few things for a single request: an embedding step, a vector-store lookup, and a model call. Momento Functions can run the orchestration without infrastructure management. The [HTTP host interface](/functions/capabilities/http) keeps connections to OpenAI and your vector store warm, and [Momento Cache](/functions/capabilities/cache) memoizes embedding results so identical prompts skip the OpenAI round trip entirely.

## What this replaces

A typical RAG service has a backend that:

* Holds the OpenAI API key and the vector-store API key.
* Embeds the user's query via OpenAI.
* Queries Turbopuffer / Pinecone / Valkey-vector for nearest neighbors.
* Assembles a prompt and calls the model.
* Caches anything cacheable in Redis or another in-memory store.

Functions centralizes that into a `.wasm`. The credentials can live in [Function environment variables](/functions/capabilities/environment) or Secrets Manager, the connection pools live in the [host](/functions/core-concepts/architecture), and the Momento Cache right next to the Function.

## The approach

```rust
use std::time::Duration;

use momento_functions_bytes::Data;
use momento_functions_bytes::encoding::{Extract, Json};
use momento_functions_cache as cache;
use momento_functions_guest_web::{WebResponse, WebResult, invoke};
use momento_functions_http::{Request as HttpRequest, invoke as http_invoke};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};

#[derive(Deserialize)]
struct Request {
    query: String,
    topk: Option<usize>,
}

#[derive(Deserialize)]
struct EmbeddingResponse { data: Vec<EmbeddingData> }

#[derive(Deserialize, Serialize)]
struct EmbeddingData { embedding: Vec<f32>, index: usize }

#[derive(Deserialize, Serialize)]
struct QueryRow {
    id: String,
    #[serde(alias = "$dist")]
    dist: f32,
}

invoke!(search);
fn search(Json(request): Json<Request>) -> WebResult<WebResponse> {
    let topk = request.topk.unwrap_or(5);

    // 1. Embed the query (cache the result so identical prompts skip OpenAI)
    let key = format!("embed:{}", hex::encode(Sha256::digest(request.query.as_bytes())));
    let embedding: Vec<f32> = match cache::get::<Data>(key.as_str())? {
        Some(bytes) => serde_json::from_slice(&bytes.into_bytes())?,
        None => {
            let openai_key = std::env::var("OPENAI_API_KEY").unwrap_or_default();
            let resp = http_invoke(
                HttpRequest::new("https://api.openai.com/v1/embeddings", "POST")
                    .with_header("authorization", format!("Bearer {openai_key}"))
                    .with_header("content-type", "application/json")
                    .with_body(serde_json::json!({
                        "model": "text-embedding-3-small",
                        "input": [request.query],
                    }).to_string()),
            )?;
            let Json(EmbeddingResponse { data }) = Json::<EmbeddingResponse>::extract(resp.body)?;
            let embedding = data.into_iter().next().map(|d| d.embedding).unwrap_or_default();

            cache::set(key.as_str(), serde_json::to_vec(&embedding)?, Duration::from_secs(3600))?;
            embedding
        }
    };

    // 2. Query the vector store
    let tpuf_region = std::env::var("TURBOPUFFER_REGION").unwrap_or_default();
    let tpuf_ns = std::env::var("TURBOPUFFER_NAMESPACE").unwrap_or_default();
    let tpuf_key = std::env::var("TURBOPUFFER_API_KEY").unwrap_or_default();

    let url = format!("https://{tpuf_region}.turbopuffer.com/v1/namespaces/{tpuf_ns}/query");
    let resp = http_invoke(
        HttpRequest::new(&url, "POST")
            .with_header("authorization", format!("Bearer {tpuf_key}"))
            .with_header("content-type", "application/json")
            .with_body(serde_json::json!({
                "vector": embedding,
                "top_k": topk,
                "distance_metric": "cosine_distance",
            }).to_string()),
    )?;

    Ok(WebResponse::new().with_status(200).with_body(resp.body)?)
}
```

You don't have to get creative with your connection pools or state management. Just the straightforward problem solving code is fine.

1. **Embed** the query, caching the result keyed by a hash of the prompt.
2. **Query** the vector store using the embedding.
3. **Return** the rows directly, or feed them into a model call (omitted here for brevity).

## Why caching embeddings matters

Embedding calls are cheap individually but add up. A typical RAG endpoint sees the same query phrased identically again and again — recommendations on a popular product page, common support questions, retry traffic. Hashing the query and caching the embedding for an hour costs almost nothing and removes a round trip from the hot path of repeat traffic.

## Caching the model response

The same trick works one layer up: hash the (prompt + retrieval-context) tuple and cache the model's response. This is most effective for deterministic, non-personalized prompts — FAQ answers, product summaries, code snippets. Skip the basic caching for personalized or stateful prompts where the response should reflect per-user context.

:::tip
A set of LLM-orchestration examples — embeddings, document indexing, query, and recommendation — is in [`examples/turbopuffer-*`](https://github.com/momentohq/functions/tree/main/examples) and [`examples/valkey-*`](https://github.com/momentohq/functions/tree/main/examples).
:::
