---
sidebar_position: 4
sidebar_label: Host interfaces
title: What are host interfaces?
description: Learn how Momento Functions exposes Momento, AWS, and HTTP capabilities to your Function sandbox through host interfaces
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - host
  - wasi
  - interfaces
  - serverless
---

# What are host interfaces?

A **host interface** is a system call your Function makes into the host runtime to do something it can't do inside the WebAssembly sandbox. Functions has several families of host interfaces. Each is exposed as a separate Rust crate you import only if you need it. This keeps your webassembly as trim as your Function workflow.

Host interfaces are how Functions holds the sandbox boundary tight while balancing usability. Connection pools, auth caches, and SDK clients all live on the host; your Function makes syscalls to use them.

## Why host interfaces exist

The [architecture](/functions/core-concepts/architecture) gives your Function no filesystem, no sockets, and no stdio. To get anything done, you have to reach out through the host. That restriction lets us provide you the lightest and most focused web function experience.

The tradeoff is that you can only call dependencies with interfaces that are supported by Functions. HTTP is supported though, which covers quite a bit! If a capability you need isn't exposed, reach out — `support@momentohq.com` — and we'll talk about expanding the platform.

## Host interface categories

### Momento

These talk directly to Momento services on the platform you're already running on. They're the fastest way to interact with Momento.

* [`momento-functions-cache`](/functions/capabilities/cache) - `get`, `set`, `set_if`, `delete`, and friends against your Momento Cache.
* [`momento-functions-cache-list`](/functions/capabilities/cache) - List collection operations.
* [`momento-functions-topic`](/functions/capabilities/topics) - Publish to Momento Topics.
* [`momento-functions-token`](/functions/capabilities/tokens) - Mint disposable Momento tokens with scoped permissions.

### AWS

These reach into your AWS account using a federated IAM role you specify at invocation time (or explicit credentials if that's how you roll). The host keeps warm AWS clients pooled outside your sandbox.

* [`momento-functions-aws-auth`](/functions/capabilities/aws) - Resolve credentials by assuming an IAM role.
* [`momento-functions-aws-s3`](/functions/capabilities/aws) - GET and PUT objects in S3.
* [`momento-functions-aws-secrets-manager`](/functions/capabilities/aws) - Fetch secrets from AWS Secrets Manager.
* [`momento-functions-aws-ddb`](/functions/capabilities/aws) - DynamoDB acceleration patterns.

### General-purpose

* [`momento-functions-http`](/functions/capabilities/http) - Outbound HTTP calls. The connection pool lives on the host.
* [`momento-functions-host-log`](/functions/capabilities/logging) - Configure log destinations: Momento Topics, AWS CloudWatch.

## What you import vs. what you use

You only pay for what you import. A `pong` Function pulls in `momento-functions-bytes` and `momento-functions-guest-web` and nothing else. Adding cache reads costs you a `momento-functions-cache` import; adding outbound HTTP costs you `momento-functions-http`. Each crate is its own focused module — see [Project setup](/functions/develop/getting-started) for the standard shape.

## Trying them out

The [Functions repo `examples/` directory](https://github.com/momentohq/functions/tree/main/examples) has examples for many interfaces. Feel free to clone an example, change the parts you care about, and deploy it — see [Deploy and invoke](/functions/develop/deploy-and-invoke).
