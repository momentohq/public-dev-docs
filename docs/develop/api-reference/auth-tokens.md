---
sidebar_position: 7
title: Auth API reference information
sidebar_label: Auth
description: Learn the Auth API calls you need to know about and how to use them with Momento services.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Auth API reference

<img src="/img/access-tokens.jpg" width="90%" alt="a technical illustration of a bank vault representing security, authorization, and authentication." />

The auth APIs create and manage authorization tokens for Momento services, known as [Momento auth tokens](/develop/basics/working-with-momento-auth-tokens). Tokens can be scoped to have one or more permissions to grant access to one or more caches or topics.

<img src="/img/momento-auth-tokens.png" width="60%"/>

## GenerateAuthToken API

Generates a new Momento auth token with the specified permissions and expiry.

| Name            | Type                      | Description                                                                                                                                                                             |
| --------------- |---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scope           | [TokenScope](#tokenscope) | The permissions to grant to the new token. Pre-built TokenScope objects are provided by the SDKs.                                                                                       |
| expiresIn       | Number&nbsp;&nbsp;\|&nbsp;&nbsp;ExpiresIn&nbsp;object | The number of seconds until the token expires or an ExpiresIn object representing a duration by calling the `ExpiresIn.never()`, `ExpiresIn.minutes()`, or `ExpiresIn.hours()` methods. |

<details>
  <summary>Method response object</summary>

* Success
  - `authToken`: string - the new auth token
  - `refreshToken`: string - a refresh token that can be used with the [RefreshAuthToken API](#refreshauthtoken) to refresh a token before it expires
  - `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects) for specific information.

</details>

:::note

Tokens to access the Momento control plane APIs can only be generated using the [Momento console](https://console.gomomento.com/).

:::

<SdkExampleTabs snippetId={'API_GenerateAuthToken'} />

## RefreshAuthToken API

Refreshes an existing, unexpired Momento auth token.  Produces a new auth token with the same permissions and expiry duration as the original auth token.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| refreshToken    | String          | The refreshToken for the current auth token, acquired from the original call to `GenerateAuthToken`. |

<details>
  <summary>Method response object</summary>

* Success
  - `authToken`: string - the new auth token
  - `refreshToken`: string - a refresh token that can be used with the [RefreshAuthToken API](#refreshauthtoken) to refresh the token before it expires
  - `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects) for specific information.

</details>

<SdkExampleTabs snippetId={'API_RefreshAuthToken'} />

## TokenScope objects
| Name            | Type                                      | Description                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List <[Permission](#permission-objects)\> | The permissions to grant to the new token.|

A TokenScope is an list of [permission objects](#permission-objects). The list can have permissions that are of type [CachePermission](#cachepermission) or [TopicPermission](#topicpermission), and can contain [up to ten](../../manage/limits) permission objects. A permission only grants access to the Momento data plane APIs (e.g. `get`, `set`, etc.). When an auth token is created with multiple permission objects, any matching permission will grant access. For example, if a single token is created with two permission objects:

1. A permission object that allows ReadWrite access to all caches for the account 
2. A permission object that allows ReadOnly access to cache `foo`

In this case, the token will still allow use of data manipulation APIs (e.g. `set`, `delete`, `DictionarySetFields`, etc.) on cache `foo` because of the first permission.

## Permission objects

These objects define the specific role with cache or topic information and are then assigned to a [TokenScope](#tokenscope). 

### CachePermission
A component of a [TokenScope](#tokenscope) object that defines permissions for a cache.

| Name            | Type                 | Description                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite | The type of access granted by the permission.                                                                    |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | A permission can be restricted to a select cache by name using a `CacheName` object or `AllCaches` built-in value. |

For role, using `CacheRole.ReadOnly` allows access to all read data plane APIs on caches (e.g. `get`, `DictionaryGetField`, etc.) defined in the CacheSelector. Using `CacheRole.ReadWrite` allows access for all read and write data plane APIs on the caches defined in the CacheSelector. Custom roles are not supported.

For cache, the value can be the built-in `AllCaches` or a string value containing the name of the cache this permission is for.


#### TokenScope example for a CachePermission object
This is an example of creating a TokenScope with just CachePermissions.

```javascript
const CachePermissions = {
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

### TopicPermission
A component of a [TokenScope](#tokenscope) object that defines permissions for a token.

| Name            | Type                            | Description                                                                                                                                                                                                            |
| --------------- |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role           | SubscribeOnly&nbsp;\|&nbsp;PublishSubscribe | The type of access granted by the permission.                                                                                                                                                                          |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | A permission can be restricted to a select cache by name using a `CacheName` object or to all caches in the account by using the `AllCaches` built-in value.                                                           |
| topic          | `AllTopics`&nbsp;&nbsp;\|&nbsp;&nbsp;`TopicName`       | A permission can be restricted to a select topic by name using a `TopicName` object or to all topics in the above cache(s) by using the `AllTopics` built-in value. |

For role, there are two managed roles to assign, `TopicRole.PublishSubscribe` and `TopicRole.SubscribeOnly`. Custom roles are not supported. Using the SubscribeOnly role allows only subscribing to topics, whereas using the PublishSubscribe role allows publishing and subscribing to topics.

For cache, only topics within that cache's namespace are allowed by the permission. This can be set to the built-in `AllCaches` value or a string specifically naming a cache.

For topic, this can be set to the built-in `AllTopics` value, which gives access to all topics in the cache(s) defined in cache or it can be a string with a specific topic name.

#### TokenScope example for a TopicPermission object

This is an example of creating a TokenScope with just TopicPermissions.

```javascript
const TopicsPermissions = {
    permissions: [
      {
        role: TopicRole.PublishSubscribe, // Managed role
        cache: 'the-great-wall', // grants access to a specific cache
        topic: 'highlights', // grants access to a specific topic
      },
      {
        role: TopicRole.SubscribeOnly, // Managed role
        cache: AllCaches, // This is a built-in value for access to all caches in the account
        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).
      },
    ],
};
```

## FAQ

<details>
<summary>Can I create a custom role for a cache or topic permission?</summary>

No. We only support the managed roles listed above for each permission.

</details>

<details>
<summary>Do these tokens control access to the Momento control plane APIs?</summary>

Access tokens generated with the [GenerateAuthToken](#generateauthtoken) API only control access to the Momento data plane APIs. A token for access to Momento's control plane APIs must be generated using the [Momento console](https://console.gomomento.com/).

</details>

<details>
<summary>Can I have write only or publish only permissions?</summary>

We do not support 'write only' or 'publish only' permissions. If this is something you need, please [contact us](mailto:support@momentohq.com) and let's discuss your needs.

</details>

:::tip

If you have any questions not answered here, please jump on [our Discord server](https://discord.gg/2c24SK6W) and ask our experts in the support channel.

:::
