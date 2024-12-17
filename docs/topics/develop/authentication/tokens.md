---
sidebar_position: 20
title: Momento tokens for short-lived, limited scope permissions
sidebar_label: Tokens
description: Learn what Momento tokens are, how to create them, and how they are used.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento tokens for short-lived permissions

Tokens are short-lived, limited-scope values intended to be used in temporary situations like a user's session. Software lifecycle events like a user login often result in the issuing of a token only valid for the duration of that session.

:::tip

Not sure if you should be using an `API key` or a `token`? Check out our [authentication](./index.mdx) page for all the details!

:::

Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues.

A Momento token allows access to *data plane* API operations only. The user is unable to do *control plane* operations like creating, deleting, or flushing a cache.

A user with a fully privileged token will be able to perform the following actions:

* Add/edit/delete cache items in any cache
* Publish and subscribe to any topic in any cache
* Increment cache values via the increment API in any cache

It's up to you to limit the access of a token based on your system requirements.

## Creating a token

Unlike our [API keys](./api-keys.md), the only way to create a token is through code. You cannot create them through the Momento console.

Below are some examples to create tokens with different sets of permissions:

<SdkExampleTabs snippetId={'API_GenerateDisposableToken'} />

For detailed information on creating a token, please refer to the [API reference page](/topics/api-reference/auth).

## Expiration

Momento tokens are required to have an expiration time. The **maximum expiration time for a token is 1 hour**. When the token expiration time elapses, you will be required to create a new one.

If you attempt to make a call with an expired token, you will receive a `AUTHENTICATION_ERROR` response indicating the provided credentials could not connect to the service.

:::tip

Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues.

:::

## Use cases

These tokens are a great fit for the following use cases:

* Using Momento for front-end development
* Communicating with IoT devices
* Issuing temporary access to specific resources
* Providing credentials to users on login

## Data restriction

A common use case for a token is to limit access to only a small subset of resources. Not only can you limit capabilities, like providing a token with *read-only* access, but you can also scope it to individual cache items or topics.

To get a full understanding of what you can do with data restriction, check out our [permissions page](./permissions.md).
