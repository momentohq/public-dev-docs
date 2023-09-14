---
sidebar_position: 30
title: Permissions and access control
sidebar_label: Permissions
description: Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.
pagination_next: null
---

# Permissions and access control

<img src="/img/permissions-page.jpg" width="95%" alt="a technical illustration of Momento permissions and access control." />

It's all fun and games until you can't access your resources. Speaking of accessing your resources, that's exactly what we're here to talk about - *stopping people from accessing things they shouldn't.*

As a reminder, there are two primary forms of authentication in Momento:

* [API keys](/develop/authentication/api-keys.md): long-lived, durable values for programmatic usage
* [Tokens](/develop/authentication/tokens.md): short-lived, limited-scope values for temporary usage by individuals (users or devices)

You can create API keys directly in the [Momento console](https://console.gomomento.com/tokens), but you are required to create tokens programmatically. Let's talk about the options you have when limiting the permission set for an API key or token using access control.

## Scope

When creating an API key, you build a `PermissionScope` object. When creating a token, you create a `TokenScope` object. These objects are mostly the same but with one big difference. First, the similarities.

### Roles

Momento provides pre-built roles to use when creating your scope objects. 👇

#### Cache roles

* *readwrite* - Provides full access to cache data
* *writeonly* - Provides access to only write operations (`set`, `sortedSetIncrementScore`, `listPopFront`, etc...)
* *readonly* - Provides access to only read operations (`get`, `dictionaryFetch`, `setFetch`, etc...). These are non-destructive operations

#### Topic roles

* *publishsubscribe* - Provides full access to topic data
* *publishonly* - Provides access to only write operations (`publish`)
* *subscribeonly* - Provides access to only read operations (`subscribe`)

### Cache

Believe it or not, you must provide a cache name when creating permissions for caches *and* topics. Topics don't technically use the cache itself but utilize them as a namespace of sorts. So when building your scope, you must provide the cache name no matter what.

You can provide the name of the cache as a string or use a value imported from the SDK. The same goes for the topic name.

#### Cache Examples

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo"
    }
  ]
}
```

or

```JavaScript
import { AllCaches } from '@gomomento/sdk';

const scope = {
  permissions: [
    {
      role: 'readonly',
      cache: AllCaches
    }
  ]
};
```

#### Topic examples

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo",
      "topic": "test"
    }
  ]
}
```

or

```JavaScript
import { AllCaches, AllTopics } from '@gomomento/sdk';

const scope = {
  permissions: [
    {
      role: 'readonly',
      cache: AllCaches,
      topic: AllTopics
    }
  ]
};
```

### Item-level restriction

Everything we've discussed so far applies to both API keys and tokens. But now we need to talk about a token-specific restriction you can use: **item-level restrictions** to control access.

When you give access to a cache, you can limit access down to individual keys or keys that begin with a certain prefix. Let's take an example of a permission set that limits the user to two specific keys in a cache.

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo",
      "item": {
        "key": "mappings"
      }
    },
    {
      "role": "readwrite",
      "cache": "demo",
      "item": {
        "key": "hits"
      }
    },
  ]
}
```

This will explicitly grant *read-only* access to the `mappings` key and *read and write* access to the `hits` key in the *demo* cache. If you wanted to grand the same role for multiple keys, you would construct the permission set similar to above but providing the desired role. You cannot pass multiple keys to a single permission.

If you want to grant access to a range of keys, you also have the option to use a prefix - meaning all keys starting with a specific string will be granted access. Imagine you had your cache keys in a format that included the tenant id in a multi-tenanted system: `{tenantId}-{key}`. To create a permission set that allows read access to all keys for a specific tenant, you can build out the following:

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo",
      "item": {
        "keyPrefix": "MYTENANTID-"
      }
    }
  ]
}
```

Consumers of the token generated with this permission set would be allowed to read from any key that started with `MYTENANTID-`. Attempting to read from a key starting with a different tenant id would result in an authorization error being returned.

