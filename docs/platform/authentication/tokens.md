---
sidebar_label: Tokens
title: Tokens
description: Short-lived, scoped Momento credentials for data-plane access.
---

<!-- Projects: cross-product/authentication -->

# Tokens

A **token** (sometimes called a disposable or session token) is a **short-lived** credential for
data-plane access. Unlike an API key — which references a role — a token **carries its permissions
inline** and **must expire**. Tokens are the right tool for granting narrowly-scoped, temporary
access, for example minting a per-user credential from your backend.

## How tokens work

- A token embeds an explicit **permission set** — a list of what it may do — directly in the
  credential.
- A token **always has an expiry**; it cannot be long-lived and cannot be a super-user.
- Tokens are created programmatically (for example, by an SDK's Auth client) rather than in the
  console.

Because a token's permissions are fixed at creation, it is well suited to distributing scoped access
to untrusted clients without sharing a long-lived API key.

## Tokens vs. API keys

| | API key | Token |
| --- | --- | --- |
| Lifetime | Long-lived | Short-lived (must expire) |
| Permissions | From a referenced [role](./roles-and-permissions.md) | Embedded inline |
| Revocable | Yes (tracked) | Expires on its own |
| Typical use | Service/application credential | Scoped, temporary client access |

For the permission model that both credential types build on, see
[roles and permissions](./roles-and-permissions.md).
