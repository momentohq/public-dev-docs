---
sidebar_position: 2
title: Auth API reference information
sidebar_label: Auth
description: Learn the Auth API calls you need to know about and how to use them with Momento services.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Auth API reference

The auth APIs create and manage API keys and tokens for Momento services. These auth mechanisms can be scoped to have one or more permissions to grant access to one or more caches or topics.

<img src="/img/momento-auth-tokens.png" width="60%"/>

## GenerateAuthToken API

Generates a new Momento auth token with the specified permissions and expiry.

| Name            | Type                      | Description                                                                                                                                                                             |
| --------------- |---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scope           | [TokenScope](#tokenscope-objects) | The permissions to grant to the new token. Pre-built TokenScope objects are provided by the SDKs.                                                                                       |
| expiresIn       | Number&nbsp;&nbsp;\|&nbsp;&nbsp;ExpiresIn&nbsp;object | The number of seconds until the token expires or an ExpiresIn object representing a duration by calling the `ExpiresIn.never()`, `ExpiresIn.minutes()`, or `ExpiresIn.hours()` methods. |

<details>
  <summary>Method response object</summary>

* Success
  - `authToken`: string - the new auth token
  - `refreshToken`: string - a refresh token that can be used with the [RefreshAuthToken API](#refreshauthtoken-api) to refresh a token before it expires
  - `endpoint`: string - the HTTP endpoint the Momento client should use when making requests
  - `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects.md) for specific information.

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
  - `refreshToken`: string - a refresh token that can be used with the [RefreshAuthToken API](#refreshauthtoken-api) to refresh the token before it expires
  - `endpoint`: string - the HTTP endpoint the Momento client should use when making requests
  - `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_RefreshAuthToken'} />

## TokenScope objects
| Name            | Type                                      | Description                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List <[Permission](#permission-objects)\> | The permissions to grant to the new token.|

A TokenScope is a list of [permission objects](#permission-objects). The list can have permissions that are of type [CachePermission](#cachepermission) or [TopicPermission](#topicpermission), and can contain [up to ten](../../limits) permission objects. A permission only grants access to the Momento data plane APIs (e.g. `get`, `set`, etc.). When an auth token is created with multiple permission objects, any matching permission will grant access. For example, if a single token is created with two permission objects:

1. A permission object that allows ReadWrite access to all caches for the account
2. A permission object that allows ReadOnly access to cache `foo`

In this case, the token will still allow use of data manipulation APIs (e.g. `set`, `delete`, `DictionarySetFields`, etc.) on cache `foo` because of the first permission.

## Permission objects

These objects define the specific role with cache or topic information and are then assigned to a [TokenScope](#tokenscope-objects).

### CachePermission
A component of a [TokenScope](#tokenscope-objects) object that defines permissions for a cache.

| Name            | Type                 | Description                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite&nbsp;&nbsp;\|&nbsp;&nbsp;WriteOnly | The type of access granted by the permission.                                                                    |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | A permission can be restricted to a select cache by name using a `CacheName` object or `AllCaches` built-in value. |

For role, using `CacheRole.ReadOnly` allows access to all read data plane APIs on caches (e.g. `get`, `DictionaryGetField`, etc.) defined in the CacheSelector. Using `CacheRole.ReadWrite` allows access for all read and write data plane APIs on the caches defined in the CacheSelector. Using `CacheRole.WriteOnly` allows access for all write data plane APIs on the caches defined in the CacheSelector. `CacheRole.WriteOnly` cannot be used for APIs that imply conditional writes like `SetIfNotExists` or return information about the updated state of a collection e.g. `ListPushBack` returns the new length. Custom roles are not supported.

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
A component of a [TokenScope](#tokenscope-objects) object that defines permissions for a token.

| Name            | Type                            | Description                                                                                                                                                                                                            |
| --------------- |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role           | SubscribeOnly&nbsp;\|&nbsp;PublishSubscribe&nbsp;&nbsp;\|&nbsp;&nbsp;PublishOnly | The type of access granted by the permission.                                                                                                                                                                          |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | A permission can be restricted to a select cache by name using a `CacheName` object or to all caches in the account by using the `AllCaches` built-in value.                                                           |
| topic          | `AllTopics`&nbsp;&nbsp;\|&nbsp;&nbsp;`TopicName`       | A permission can be restricted to a select topic by name using a `TopicName` object or to all topics in the above cache(s) by using the `AllTopics` built-in value. |

For role, there are three managed roles to assign, `TopicRole.PublishSubscribe`, `TopicRole.SubscribeOnly`, and `TopicRole.PublishOnly`. Custom roles are not supported. Using the SubscribeOnly role allows only subscribing to topics, using the PublishSubscribe role allows publishing and subscribing to topics, and using the PublishOnly role allows only publishing to topics.

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

## GenerateDisposableToken API

Generates a new disposable Momento auth token with the specified permissions and expiry.

Disposable tokens differ from the usual Momento auth token in several key ways:
  - They cannot be generated in the console, they can only be generated programatically. The token that's used for the `generateDisposableToken` API call must be a token with Super User scope generated via the Momento console.
  - They must expire within one hour.
  - They cannot be refreshed and thus do not come with a refresh token.
  - Permissions are specified using DisposableTokenScope object.

| Name            | Type                      | Description                                                                                                                                                                             |
| --------------- |---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scope           | [DisposableTokenScope](#disposabletokenscope-objects) | The permissions to grant to the new disposable token. Pre-built DisposableTokenScope objects are provided by the SDKs.                                                                                       |
| expiresIn       | Number&nbsp;&nbsp;\|&nbsp;&nbsp;ExpiresIn&nbsp;object | The number of seconds until the token expires or an ExpiresIn object representing a duration by calling the `ExpiresIn.minutes()` or `ExpiresIn.hours(1)` methods. Disposable tokens must expire within 1 hour. |

<details>
  <summary>Method response object</summary>

* Success
  - `authToken`: string - the new disposable auth token
  - `endpoint`: string - the HTTP endpoint the Momento client should use when making requests
  - `expiresAt`: Timestamp - the timestamp at which the token will expire
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_GenerateDisposableToken'} />

### DisposableTokenScope objects

| Name            | Type                                      | Description                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List <[DisposableTokenCachePermission](#disposabletokencachepermissions)&nbsp;&nbsp;\|&nbsp;&nbsp;[Permission](#permission-objects)\> | The permissions to grant to the new token.|

The DisposableTokenScope object will accept permissions objects of the type [CachePermission](#cachepermission), [TopicPermission](#topicpermission), or [DisposableTokenCachePermission](#disposabletokencachepermissions).

### DisposableTokenCachePermissions

The DisposableTokenCachePermission is an extension of CachePermission, so it has the same fields as CachePermission but also has an additional `item` field so you can define permissions for a cache and the items within the cache.

For example, you can restrict access to only a specific key or a set of keys beginning with some prefix when you set `item` to a string that represents a key or key-prefix. Alternately, if you set `item` to AllCacheItems, you would produce the same set of permissions as a normal CachePermission.

| Name            | Type                 | Description                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite&nbsp;&nbsp;\|&nbsp;&nbsp;WriteOnly | The type of access granted by the permission.                                                                    |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | A permission can be restricted to a select cache by name using a `CacheName` object or `AllCaches` built-in value. |
| item          | `AllCacheItems`&nbsp;&nbsp;\|&nbsp;&nbsp;`Key`&nbsp;&nbsp;\|&nbsp;&nbsp;`KeyPrefix` | A permission can be restricted to select cache items by name using a `Key` or `KeyPrefix` object or `AllCachesItems` built-in value. |

For role, using `CacheRole.ReadOnly` allows access to all read data plane APIs on caches (e.g. `get`, `DictionaryGetField`, etc.) defined in the CacheSelector. Using `CacheRole.ReadWrite` allows access for all read and write data plane APIs on the caches defined in the CacheSelector. Using `CacheRole.WriteOnly` allows access for all write data plane APIs on the caches defined in the CacheSelector. `CacheRole.WriteOnly` cannot be used for APIs that imply conditional writes like `SetIfNotExists` or return information about the updated state of a collection e.g. `ListPushBack` returns the new length. Custom roles are not supported.

For cache, the value can be the built-in `AllCaches` or a string value containing the name of the cache this permission is for.

For item, the value can be the built-in `AllCacheItems` or a string value containing the key or key prefix of the cache item(s) this permission is for.

#### Example DisposableTokenScope object

This is an example of creating a DisposableTokenScope with all three types of permission objects: CachePermission, TopicPermission, and DisposableTokenCachePermission.

```javascript
const exampleDisposableTokenPermission: DisposableTokenCachePermission = {
  role: CacheRole.WriteOnly,
  cache: "WriteCache",
  item: {
    keyPrefix: "WriteKey"
  }
};

const exampleCachePermission: CachePermission = {
  role: CacheRole.ReadOnly,
  cache: "ReadCache"
};

const exampleTopicPermission: TopicPermission = {
  role: TopicRole.PublishSubscribe,
  cache: "ReadWriteCache",
  topic: "MyTopic"
}

const exampleScope: DisposableTokenScope = {
    permissions: [
      exampleDisposableTokenPermission,
      exampleCachePermission,
      exampleTopicPermission,
    ],
};

// Then pass in the entire DisposableTokenScope object when
// you call generateDisposableToken
const tokenResponse = await authClient.generateDisposableToken(
  exampleScope,
  ExpiresIn.minutes(30)
);
```

## FAQ

<details>
<summary>Can I create a custom role for a cache or topic permission?</summary>

No. We only support the managed roles listed above for each permission.

</details>

<details>
<summary>Do these tokens control access to the Momento control plane APIs?</summary>

Access tokens generated with the [GenerateAuthToken](#generateauthtoken-api) API only control access to the Momento data plane APIs. A token for access to Momento's control plane APIs must be generated using the [Momento console](https://console.gomomento.com/).

</details>

:::tip

If you have any questions not answered here, please jump on [our Discord server](https://discord.gg/2c24SK6W) and ask our experts in the support channel.

:::
