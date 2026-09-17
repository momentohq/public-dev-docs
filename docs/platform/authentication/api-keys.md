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
- **Describe** a key to see its metadata,
- **Refresh** a key to rotate it onto a fresh credential, and
- **Revoke** a key — after which it stops authenticating.

## Rotating keys

An expiring key is issued with a **refresh token** alongside it. The refresh token is a credential
for one job only: exchanging it for a successor key with the same role and description. That lets an
application rotate its own credential on a schedule instead of waiting for an operator to mint a
replacement by hand.

The shape of a rotation:

- Each refresh token can be spent **once**. The exchange hands back both a new key and a new refresh
  token.
- A refresh token expires **with its key**, so rotate before the key expires.
- The successor inherits the lifetime the original key was issued with, measured from the moment of
  the refresh. You can ask for a shorter one, but never a longer one.
- Refreshing does **not** revoke the key it replaces. Both stay live, which gives you a window to
  roll the new key across a fleet before revoking the old one.

You can opt out at generation time if you would rather a key never be rotatable, and keys that never
expire are never given a refresh token at all.

See the [API Keys HTTP API](./api-keys-http-api.md) for the request and response details.

## Key versions

Older (v1) and legacy tokens are still accepted for authentication. The oldest legacy tokens can no
longer be generated, and SDK readers for v1 keys are marked deprecated; prefer v2 API keys for new
integrations. Migration is gradual and existing v1 keys continue to work.
