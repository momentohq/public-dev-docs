---
sidebar_position: 30
title: Token permissions and access control
sidebar_label: Permissions
description: Learn about the permissions available when creating your Momento tokens to control access to cache resources.
pagination_next: null
---

# Permissions and access control for tokens

Token permissions control what a token can do and which data it can touch. These fine-grained permissions only apply to tokens - not API keys.

## Scope

When creating a token, you build a `PermissionScope` object.

### Roles

Momento provides pre-built roles to use when creating your scope objects.

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

Tokens can limit access down to individual keys or keys that begin with a certain prefix.

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

This explicitly grants *read-only* access to the `mappings` key and *read and write* access to the `hits` key in the *demo* cache. To grant access to a range of keys, use a prefix:

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

Consumers of the token generated with this permission set can read from any key that starts with `MYTENANTID-`; other keys will return an authorization error.
