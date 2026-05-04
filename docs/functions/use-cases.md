---
sidebar_position: 2
sidebar_label: Common use cases
title: Momento Functions Use Cases
description: See how others commonly use Momento Functions to add their own behavior at the edge of the Momento platform without standing up new infrastructure
pagination_next: null
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - workflow
  - lambda
  - serverless
  - use cases
---

# Common use cases

Momento Functions adds custom behavior right next to your data, without forcing you to operate a separate service tier. Its [microsecond cold starts](/functions/core-concepts/cold-starts), per-invocation [WebAssembly sandbox](/functions/core-concepts/architecture), and built-in [host interfaces](/functions/core-concepts/host-interfaces) make it the place to put logic that previously lived in a hand-rolled HTTP API server, a Lambda, or a sidecar. Here are some common cases where it excels.

## Caching in front of slow or expensive systems

Many backends already use **Momento Cache** for caching. However, writing a transparent read-through cache requires a server-side component that holds credentials and orchestrates the upstream call. With Functions, you can [run that orchestration entirely on the Momento platform](/functions/patterns/caching).

**How Functions fit**

* **Co-located with the cache** - The [`momento-functions-cache`](/functions/capabilities/cache) host interface talks to your cache from neighboring instances; there is no faster way to call a cache.
* **Holds credentials how you want** - API keys for upstream systems can live in the Function's [environment](/functions/capabilities/environment), or in AWS secrets manager. You can also federate with IAM roles!
* **Burst-tolerant** - Functions can absorb the hit to your backend, with some cleverness to coalesce loads to your backend.

## LLM orchestration and inference proxying

Building workflows & APIs that combine LLM calls with caching, prompt assembly, and embedding lookups typically requires a server.
Functions speeds you past the infrastructure to [orchestrate LLM workflows](/functions/patterns/orchestration) directly: Take a JSON request, fetch context from cache or a vector store, call your model provider, and return the result.

**How Functions fit**

* **Managed connection pool** - The [`http`](/functions/capabilities/http) host interface keeps a connection pool *outside* your sandbox, so external API latency stays low even on the first request. You aren't making whole new connections for each invocation.
* **Vector store support** - Examples for **Turbopuffer** and **Valkey vector search** help you make simple retrieval-augmented generation.
* **Cache embeddings** - Hash a prompt, cache the embedding, skip calling your model provider on the next call.

## Browser-callable APIs without an API gateway

Functions are covered by the same [auth tokens](/cache/authentication/tokens) as the rest of Momento: Your users' browsers and mobile apps can invoke them directly. There's no API Gateway, no WAF, no load balancer, and no Lambda to operate — see [proxying](/functions/patterns/proxying) for end-to-end examples.

**How Functions fit**

* **User-accessible auth** - Vend short-lived [disposable tokens](/functions/capabilities/tokens) scoped to exactly the resources a user needs, and let your client call the Function with them.
* **Token metadata** - Stuff a user id or small JSON payload into the token's `token_id`; read it back inside the Function to identify the caller. This metadata is guaranteed to be the same as what you originally put into the disposable token.
* **No infrastructure to run** - You upload a `.wasm` artifact and the Function is live on Momento's [horizontally scalable router fleet](/functions/core-concepts/architecture). If you make a mistake, rollbacks to earlier versions take milliseconds!

## Bridging Momento to AWS resources

If you store some data in Momento and some in AWS — DynamoDB tables, S3 buckets, Secrets Manager — Functions can reach AWS using **federated IAM roles** without you operating a server. See the [AWS host interfaces](/functions/capabilities/aws) for what's available.
For anything we don't have dedicated host support for, you can always use our built-in SIGv4 HTTP interface and the json model from AWS.

**How Functions fit**

* **Managed hot channels to AWS** - The host keeps warm AWS clients pooled outside your sandbox. In some cases, like Secrets Manager, we can optionally cache your calls so you don't hit limit errors on traffic spikes.
* **IAM federation** - Your Function can assume a role in your account at invocation time using the [`momento-functions-aws-auth`](/functions/capabilities/aws) crate.
* **One artifact, no glue (unless you want it)** - DynamoDB acceleration, S3 read-through, and secret retrieval all happen inside the same `.wasm` you deploy.

:::tip
For a portfolio of working examples — from `cache-scalar` to `turbopuffer-search` to a complete `token-vending-machine` — see the [examples directory in the Functions repo](https://github.com/momentohq/functions/tree/main/examples).
:::
