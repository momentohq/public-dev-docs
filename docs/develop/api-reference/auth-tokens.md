---
sidebar_position: 7
title: Authentication control token API reference information
sidebar_label: Authentication control tokens
description: Learn the authentication control token API calls you need to know about and how to use them with Momento services.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Access control API reference

<img src="/img/access-tokens.jpg" width="90%" alt="a technical illustration of a bank vault representing security, authorization, and authentication." />

These APIs are used to manage Momento authentication tokens and access. Tokens can be scoped to have one or more roles to give access to one or more caches or topics.

## GenerateAuthToken

Generates a new Momento authentication token with the specified permissions and expiry.

| Name            | Type                      | Description                                                                                       |
| --------------- |---------------------------|---------------------------------------------------------------------------------------------------|
| scope           | [TokenScope](#tokenscope) | The permissions to grant to the new token. Pre-built TokenScope objects are provided by the SDKs. |
| expiresIn       | ExpiresIn                 | The number of seconds until the token automatically expires, or `never`.                          |

<details>
  <summary>Method response object</summary>

* Success
- `authToken`: string - the new auth token
- `refreshToken`: string - a refresh token that can be used with the `RefreshAuthToken` API to refresh the token before it expires
- `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects) for specific information.

</details>

:::note

Tokens to access the Momento control plane APIs can only be generated using the [Momento console](https://console.gomomento.com/).

:::

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

See [response objects](./response-objects) for specific information.

</details>

<SdkExampleTabs snippetId={'API_RefreshAuthToken'} />

## TokenScope
| Name            | Type               | Description                                  |
| --------------- |--------------------| -------------------------------------------- |
| permissions           | Array<Permission\> | The permissions to grant to the new token.|

A TokenScope is an array of [permission objects](#permission-objects). The array can have permissions that are of type [CachePermission](#cachepermission) or [TopicPermission](#topicpermission), and the array can contain [up to ten](../../manage/limits) permission objects. A permission only grants access to the Momento data plane APIs (e.g. `get`, `set`, etc.). When an auth token is created with multiple permission objects, any matching permission will grant access. For example, if a single token is created with two permission objects:

1. A permission object that allows ReadWrite access to all caches for the account 
2. A permission object that allows ReadOnly access to cache `foo`

In this case, the token will still allow use of data manipulation APIs (e.g. `set`, `delete`, `DictionarySetFields`, etc.) on cache `foo` because of the first permission.

<img src="/img/momento-auth-tokens.png" />

## Permission Objects

These objects define the specific role with cache or topic information and then assigned to a [TokenScope](#tokenscope). 

### CachePermission
A component of a [TokenScope](#tokenscope) object that defines permissions for a cache.

| Name            | Type                  | Description                                                                           |
| --------------- |-----------------------|---------------------------------------------------------------------------------------|
| role           | ReadOnly or ReadWrite | The type of access granted by the permission.                                         |
| cache          | CacheSelector         | A permission can be restricted to a select cache by name or AllCaches built-in value. |

For the role, ReadOnly allows access to all read data plane APIs on caches (e.g. `get`, `DictionaryGetField`, etc.) defined in the CacheSelector. ReadWrite allows access for all read and write data plane APIs on the caches defined in the CacheSelector.

For the CacheSelector, the value can be the built-in `AllCaches` or a string value of the name of the cache this permission is for.

For `role`, there are two managed roles to assign, `CacheRole.ReadWrite` and `CacheRole.ReadOnly`. Custom roles are not supported.

### TopicPermission
A component of a [TokenScope](#tokenscope) object that defines permissions for a token.

| Name            | Type                              | Description                                                                          |
| --------------- |-----------------------------------|--------------------------------------------------------------------------------------|
| role           | SubscribeOnly or PublishSubscribe | The type of access granted by the permission.               |
| cache          | CacheSelector                     | A permission can be restricted to a select cache by name or AllCaches built-in value.              |
| topic          | TopicSelector                     | A permission can be restricted to a select topic by name or AllTopics built-in value. |

SubscribeOnly allows only subscription to topics, whereas PublishSubscribe allows publishing as well as subscribing to topics.

When a `CacheSelector` is specified, only topics within the cache namespace are allowed by the permission.

For `role`, there are two managed roles to assign, `TopicRole.PublishSubscribe` and `TopicRole.SubscribeOnly`. Custom roles are not supported.

#### TopicScope examples
This is an example of creating a TokenScope with just CachePermissions.

```javascript
const permissions = {
    permissions: [
        {
            role: CacheRole.ReadWrite, // Managed role
            cache: "MyCache" // grants access to a specific cache
        },
        {
            role: CacheRole.ReadOnly, // Managed role
            cache: AllCaches // Built-in value for access to all caches in the account.
        },
    ],
};
```

This is an example of creating a TokenScope with just TopicPermissions.

```javascript
const permissions = {
    permissions: [
      {
        role: TopicRole.PublishSubscribe, // Managed role
        cache: 'the-great-wall', // grants access to a specific cache
        topic: 'highlights', // grants access to a specific topic
      },
      {
        role: TopicRole.SubscribeOnly, // Built-in role
        cache: AllCaches, // This is a built-in value for access to all caches in the account
        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).
      },
    ],
};
```

:::tip

If you have any questions not answered here, please jump on [our Discord server](https://discord.gg/2c24SK6W) and ask our experts in the support channel.

:::

## FAQ

<details>
<summary>Can I create a custom role for a cache or topic permission?</summary>

No. We only support managed roles listed above for each permission.

</details>

<details>
<summary>Do these tokens control access to the Momento control plane APIs?</summary>

Access tokens created with the [GenerateAuthToken](#generateauthtoken) API only control access to the Momento data place APIs. A token for access to Momento's control plane APIs must be generated using the [Momento console](https://console.gomomento.com/).

</details>
