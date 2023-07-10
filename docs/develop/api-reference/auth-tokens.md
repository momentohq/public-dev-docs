---
sidebar_position: 7
title: Authorization token API reference information
sidebar_label: Authorization token
description: Learn the authorization token API calls you need to know and how to use them with Momento services.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Authorization token API reference

These APIs are used to manage Momento auth tokens and access.

Tokens can be scoped to have one or more roles 

## GenerateAuthToken

Generates a new Momento Auth token with the specified permissions and expiry.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| scope           | TokenScope      | The permissions to grant to the new token.  Pre-built TokenScope objects are provided by the SDKs. |
| expiresIn       | ExpiresIn       | The number of seconds until the token expires, or `never`.              |

<details>
  <summary>Method response object</summary>

* Success
- `authToken`: string - the new auth token
- `refreshToken`: string - a refresh token that can be used with the `RefreshAuthToken` API to refresh the token before it expires
- `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_GenerateAuthToken'} />

## RefreshAuthToken

Refreshes an existing, unexpired Momento auth token.  Produces a new auth token with the same permissions and expiry duration as the original auth token.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| refreshToken    | String          | The refreshToken for the current auth token, acquired from the original call to `GenerateAuthToken`. |

<details>
  <summary>Method response object</summary>

* Success
- `authToken`: string - the new auth token
- `refreshToken`: string - a refresh token that can be used with the `RefreshAuthToken` API to refresh the token before it expires
- `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_RefreshAuthToken'} />

## Token Roles

Tokens can be scoped to have one or more roles, e.g. read-only.