---
sidebar_label: API keys
title: API keys
description: Long-lived Momento credentials — how they work, and how to manage them.
---

<!-- Projects: cross-product/authentication, cross-product/credential-authorization-binding -->

# API keys

An **API key** is a long-lived Momento credential. A modern (v2) API key is issued centrally,
valid across **all regions**, and individually **trackable and revocable**. Each key is bound to a
**role**, which determines what the key is allowed to do — see
[roles and permissions](./roles-and-permissions.md).

## Using an API key

An API key identifies the caller; you also supply a **regional endpoint** (cell URL) so the client
knows which region to reach. If you provide an API key without a regional endpoint, the SDK fails
with a missing-endpoint error. The region base URL is shown in the console, and the
[regions page](/platform/regions) lists endpoints.

## Managing keys

Because modern API keys are tracked, you can:

- **List** your outstanding keys,
- **Describe** a key to see its metadata, and
- **Revoke** a key — after which it stops authenticating.

## Key versions

Older (v1) and legacy tokens are still accepted for authentication. The oldest legacy tokens can no
longer be generated, and SDK readers for v1 keys are marked deprecated; prefer v2 API keys for new
integrations. Migration is gradual and existing v1 keys continue to work.
