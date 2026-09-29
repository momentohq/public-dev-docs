---
sidebar_label: Manage Roles
title: Manage Momento Roles
description: Reference for managing custom roles and permissions programmatically.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage Momento Roles

Momento provides a CLI and an HTTP API for managing the roles on your account. A **role** is a named set of permissions that you assign to account members and [API keys](/platform/authentication/api-keys-http-api) to control what they can do.

This page contains brief explanations of necessary terms. See [roles and permissions](/platform/authentication/roles-and-permissions) to learn more about concepts related to authentication, including permission sets, roles, and how credentials bind permissions.

There are two kinds of role:

- **System** roles are the built-in roles Momento provides (such as Owner, Operator, and Viewer). They cannot be modified or deleted.
- **Custom** roles are roles you define, with a fine-grained [permission set](#permission-set) that you control. This API lets you create, update, list, and delete custom roles.

:::tip[Info]

This is a global, account-level API served from a single endpoint: `https://mga.registry.prod.a.momentohq.com`. 

Unlike the region-based cache endpoints, it is not tied to a specific cell or region.

:::

## Authentication

You will need a v2 Momento API Key that grants auth-management access on your account. API Keys control access to Momento services and can be set to expire.

Our Momento roles API (and roles CLI) does not accept disposable tokens or legacy API Keys.

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

The CLI will use your default profile (created via `momento configure`), or you can specify a `--profile`.

</TabItem>
<TabItem value="http" label="HTTP API">

The API Key must be provided in the `Authorization` header.

</TabItem>
</Tabs>

---

## Error responses

All errors share a common JSON body:

```json
{
  "code": "Bad Request",
  "message": "A human-readable description of what went wrong."
}
```

| Field | Type | Description |
|-------|------|-------------|
| code | String | A short, machine-readable label for the error class (for example, `Bad Request`, `NotFound`, `PermissionDenied`). |
| message | String | A human-readable description of the error. |
| err | String | An optional additional error metadata string, present only for some errors. |

The CLI formats these errors in plaintext for you.

---

## Role object

Every role is represented by the same JSON shape:

```json
{
  "role_id": "r-12345",
  "role_name": "analytics-readonly-role",
  "role_type": "custom",
  "description": "Read-only access for the analytics team",
  "permissions": {
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "list"],
        "caches": "*",
        "items": "*"
      }
    ]
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| role_id | String | The unique identifier for the role. Use this value to update or delete a custom role, or to assign the role to an [API key](/platform/authentication/api-keys-http-api). |
| role_name | String | The human-readable name of the role. |
| role_type | String | Either `system` (built-in) or `custom` (user-defined). |
| description | String | An optional description of the role. Omitted when the role has no description. |
| permissions | Object | The role's permission set. See [Permission set](#permission-set). |

The CLI formats the role object in plaintext for you.

---

## Permission set

A permission set describes exactly what a role is allowed to do. It is a list of `rules`, plus optional `conditions` that constrain when the permissions apply:

```json
{
  "rules": [ /* one or more rule objects */ ],
  "conditions": [ /* zero or more condition objects */ ]
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| rules | yes | Array | The permission rules that make up the role. See [Rules](#rules). |
| conditions | no | Array | Additional constraints that apply to the whole permission set. See [Conditions](#conditions). Defaults to an empty list. |

### Rules

Each rule is an object tagged by a `type` field. The other fields depend on the type. Every rule carries a `permissions` array; the valid permission values depend on the rule type.

| Rule `type` | Valid `permissions` | Other fields |
|-------------|---------------------|--------------|
| `account_management` | `read`, `list` | — |
| `auth_management` | `read`, `write`, `list` | `items` (must be `"*"`) |
| `resource_management` | `read`, `write`, `list` | `resources` (must be `"*"`) |
| `database` | `read`, `write` | `databases`, `items` |
| `cache` | `read`, `write`, `list` | `caches`, `items` |
| `topic` | `read`, `write`, `list` | `caches`, `topics` |
| `store` | `read`, `write`, `list` | `stores`, `items` |
| `function` | `invoke` | `caches`, `functions` |

#### Selectors

The `databases`, `caches`, `stores`, `topics`, `functions`, and `items` fields are **selectors**. A selector is either the wildcard string `"*"` (meaning "all"), or an object that names a specific resource:

| Selector | Wildcard | Object forms | Used by |
|----------|----------|--------------|---------|
| Name | `"*"` | `{ "name": "my-cache" }` | `databases`, `caches`, `stores` |
| Name or prefix | `"*"` | `{ "name": "my-topic" }` or `{ "prefix": "room-" }` | `topics`, `functions` |
| Item | `"*"` | `{ "key": "my-key" }` or `{ "key_prefix": "public/" }` | database/cache/store `items` |

The `items` field on an `auth_management` rule and the `resources` field on a `resource_management` rule must always be the wildcard `"*"`.

A Database rule's `permissions` array contains `"read"`, `"write"`, or both.

#### Rule examples

Full access to all caches and their items:

```json
{ "type": "cache", "permissions": ["read", "write", "list"], "caches": "*", "items": "*" }
```

Read-only access to keys under a prefix in a single cache:

```json
{
  "type": "cache",
  "permissions": ["read"],
  "caches": { "name": "prod-cache" },
  "items": { "key_prefix": "public/" }
}
```

Read and write access to all Momento Cache Databases and their items:

```json
{
  "type": "database",
  "permissions": ["read", "write"],
  "databases": "*",
  "items": "*"
}
```

Read-only access to all keys under a prefix in a single named Database:

```json
{
  "type": "database",
  "permissions": ["read"],
  "databases": { "name": "orders" },
  "items": { "key_prefix": "orders:2026-" }
}
```

Publish to all topics whose name starts with `room-` in one cache:

```json
{
  "type": "topic",
  "permissions": ["write"],
  "caches": { "name": "chat-app" },
  "topics": { "prefix": "room-" }
}
```

Invoke a single function:

```json
{
  "type": "function",
  "permissions": ["invoke"],
  "caches": { "name": "edge-app" },
  "functions": { "name": "resize-image" }
}
```

### Conditions

Conditions constrain when the permission set applies. Currently the only supported condition is an `ip_filter`, which restricts requests to a set of allowed [CIDR ranges](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) (IPv4 or IPv6):

```json
{
  "ip_filter": {
    "allowed_cidr_ranges": ["10.0.0.0/8", "192.168.1.0/24", "2001:db8::/32"]
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| ip_filter.allowed_cidr_ranges | Array\<String\> | The CIDR ranges from which requests are allowed. Each entry must be a valid CIDR range, including a prefix length (for example, `10.0.0.0/8`, not `10.0.0.1`). |

### Full permission set example

The following permission set exercises every rule type, selector variant, and the IP filter condition:

```json
{
  "rules": [
    { "type": "account_management",  "permissions": ["read", "list"] },
    { "type": "auth_management",     "permissions": ["read", "write", "list"], "items": "*" },
    { "type": "resource_management", "permissions": ["read", "write", "list"], "resources": "*" },
    { "type": "database", "permissions": ["read", "write"],         "databases": "*",                  "items": "*" },
    { "type": "database", "permissions": ["read"],                  "databases": { "name": "orders" }, "items": { "key_prefix": "orders:2026-" } },
    { "type": "database", "permissions": ["write"],                 "databases": { "name": "orders" }, "items": { "key": "orders:pending" } },
    { "type": "cache",    "permissions": ["read", "write", "list"], "caches": "*",                    "items": "*" },
    { "type": "cache",    "permissions": ["read"],                  "caches": { "name": "prod-cache" }, "items": { "key_prefix": "public/" } },
    { "type": "cache",    "permissions": ["write"],                 "caches": { "name": "prod-cache" }, "items": { "key": "feature-flags" } },
    { "type": "topic",    "permissions": ["read", "write", "list"], "caches": "*",                    "topics": "*" },
    { "type": "topic",    "permissions": ["read"],                  "caches": { "name": "chat-app" },  "topics": { "name": "announcements" } },
    { "type": "topic",    "permissions": ["write"],                 "caches": { "name": "chat-app" },  "topics": { "prefix": "room-" } },
    { "type": "store",    "permissions": ["read", "write", "list"], "stores": "*",                    "items": "*" },
    { "type": "store",    "permissions": ["read"],                  "stores": { "name": "user-prefs" }, "items": { "key_prefix": "org:42:" } },
    { "type": "store",    "permissions": ["write"],                 "stores": { "name": "user-prefs" }, "items": { "key": "schema-version" } },
    { "type": "function", "permissions": ["invoke"],                "caches": "*",                    "functions": "*" },
    { "type": "function", "permissions": ["invoke"],                "caches": { "name": "edge-app" }, "functions": { "name": "resize-image" } },
    { "type": "function", "permissions": ["invoke"],                "caches": { "name": "edge-app" }, "functions": { "prefix": "webhook-" } }
  ],
  "conditions": [
    { "ip_filter": { "allowed_cidr_ranges": ["10.0.0.0/8", "192.168.1.0/24", "2001:db8::/32"] } }
  ]
}
```

---

# Roles Management

The Roles API and CLI let you list the roles on your account and create, update, and delete custom roles.

## List Roles

Lists the roles on your account, with pagination.

### Request

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```sh
momento role list
```

The CLI lists only your custom roles. (To list system roles, use the HTTP API.)

You can `--limit` how many custom roles are fetched on each page:

```sh
momento role list --limit 5
```

- `--limit` must be between 1 and 100, inclusive. Defaults to 100 when omitted.

</TabItem>
<TabItem value="http" label="HTTP API">

- Path: /roles
- HTTP Method: GET

#### Query Parameters

| Parameter&nbsp;name | Required? | Type    | Description                                                                                         |
|---------------------|-----------|---------|-----------------------------------------------------------------------------------------------------|
| limit               | no        | Integer | The maximum number of roles to return in a single page. Must be between 1 and 100, inclusive. Defaults to 100 when omitted. |
| next_token          | no        | String  | The pagination token returned by a previous call. Omit it to fetch the first page.                   |
| type                | no        | String  | Filter by role type: `system` or `custom`. Omit to return roles of both types.                       |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

</TabItem>
</Tabs>

### Responses

#### Success

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```
Name: cicd-role
ID: r-abcdefg
Description: For deploying to CI/CD environments
Rules:
- Cache: prod-cache
  Keys: all
  Allowed actions: Read, Write
Conditions: (none)

Name: analytics-readonly-role
ID: r-12345
Description: Read-only access for the analytics team
Rules:
- Caches (all)
  Keys: all
  Allowed actions: Read, List
Conditions: (none)

View more? [y]
```

The CLI will prompt you until it's listed all your roles.

</TabItem>
<TabItem value="http" label="HTTP API">

*Status Code: 200 OK*

```json
{
  "roles": [
    {
      "role_id": "r-abcdefg",
      "role_name": "cicd-role",
      "role_type": "custom",
      "description": "For deploying to CI/CD environments",
      "permissions": {
        "rules": [
          {
            "type": "cache",
            "permissions": ["read", "write"],
            "caches": { "name": "prod-cache" },
            "items": "*"
          }
        ]
      }
    },
    {
      "role_id": "r-12345",
      "role_name": "analytics-readonly-role",
      "role_type": "custom",
      "description": "Read-only access for the analytics team",
      "permissions": {
        "rules": [
          {
            "type": "cache",
            "permissions": ["read", "list"],
            "caches": "*",
            "items": "*"
          }
        ]
      }
    }
  ],
  "next_token": "next-token"
}
```

| Field | Type | Description |
|-------|------|-------------|
| roles | Array | The roles on the account for this page. Each entry has the shape described in [Role object](#role-object). |
| next_token | String | A pagination token for fetching the next page. Present only when more roles are available; pass it as the `next_token` query parameter on the next call. |

</TabItem>
</Tabs>

#### Error

*Status Code: 400 Bad Request*
- The query parameters are invalid — for example, a `limit` outside the range 1 to 100, or an unrecognized `type`. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 429 Too Many Requests*
- The request was throttled. Retry after a short delay.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Create Custom Role

Creates a new custom role with the specified permission set.

### Request

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```sh
momento role create --name cicd-role \
  --description "For deploying to CI/CD environments" \
  --permission-set '{
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": { "name": "prod-cache" },
        "items": "*"
      }
    ]
  }'
```

| Argument | Required? | Type | Description |
|-------|-----------|------|-------------|
| name | yes | String | A human-readable name for the role. |
| description | no | String | An optional description of the role. |
| permission-set | yes | Object | The role's permission set. See [Permission set](#permission-set). |

</TabItem>
<TabItem value="http" label="HTTP API">

- Path: /roles
- HTTP Method: POST

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "role_name": "cicd-role",
  "description": "For deploying to CI/CD environments",
  "permissions": {
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": { "name": "prod-cache" },
        "items": "*"
      }
    ]
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| role_name | yes | String | A human-readable name for the role. |
| description | no | String | An optional description of the role. |
| permissions | yes | Object | The role's permission set. See [Permission set](#permission-set). |

</TabItem>
</Tabs>

### Responses

#### Success

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```
Creating custom role!

Name: cicd-role
ID: r-abcdefg
Description: For deploying to CI/CD environments
Rules:
- Cache: prod-cache
  Keys: all
  Allowed actions: Read, Write
Conditions: (none)
```

</TabItem>
<TabItem value="http" label="HTTP API">

*Status Code: 200 OK*

Returns the created role in the [Role object](#role-object) shape, including its newly assigned `role_id`.

```json
{
  "role_id": "r-abcdefg",
  "role_name": "cicd-role",
  "role_type": "custom",
  "description": "For deploying to CI/CD environments",
  "permissions": {
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": { "name": "prod-cache" },
        "items": "*"
      }
    ]
  }
}
```

</TabItem>
</Tabs>

#### Error

*Status Code: 400 Bad Request*
- The request body contains an invalid permission set or an invalid CIDR range. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 409 Already Exists*
- A role with the specified name already exists.

*Status Code: 429 Too Many Requests*
- Either the request was throttled (retry after a short delay), or your account has reached its maximum number of custom roles (delete an existing custom role before creating a new one).

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Update Custom Role

Updates an existing custom role's name, description, and/or permission set. System roles cannot be updated.

### Request

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

Specify the role by its current name:

```sh
momento role update --name cicd-role \
  --description "For deploying to CI/CD environments across all caches" \
  --permission-set '{
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": "*",
        "items": "*"
      }
    ]
  }'
```

Or you can specify the role by its ID:

```sh
momento role update --id r-abcdefg \
  --description "For deploying to CI/CD environments across all caches" \
  --permission-set '{
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": "*",
        "items": "*"
      }
    ]
  }'
```

| Argument | Required? | Type | Description |
|-------|-----------|------|-------------|
| name | yes (or id) | String | The current name for the role. |
| id | yes (or name) | String | The ID for the role. |
| rename | no | String | The new name for the role. If omitted, the role's existing name is left unchanged. |
| description | no | String | The new description for the role. If omitted, the role's existing description is left unchanged. |
| permission-set | no | Object | The new permission set for the role. See [Permission set](#permission-set). If omitted, the role's existing permission set is left unchanged. |

</TabItem>
<TabItem value="http" label="HTTP API">

- Path: /roles/\{role_id\}
- HTTP Method: PUT

#### Path Parameters

| Parameter&nbsp;name | Required? | Type   | Description                           |
|---------------------|-----------|--------|---------------------------------------|
| role_id             | yes       | String | The identifier of the role to update. |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

The request body has the same shape as [Create Custom Role](#create-custom-role). The supplied values replace the role's current name, description, and permission set.

```json
{
  "role_name": "cicd-role",
  "description": "For deploying to CI/CD environments across all caches",
  "permissions": {
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": "*",
        "items": "*"
      }
    ]
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| role_name | yes | String | The new name for the role. |
| description | no | String | The new description for the role. If omitted, the role's existing description is left unchanged. |
| permissions | yes | Object | The new permission set for the role. See [Permission set](#permission-set). |

</TabItem>
</Tabs>

### Responses

#### Success

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```
Updating custom role!

Name: cicd-role
ID: r-abcdefg
Description: For deploying to CI/CD environments across all caches
Rules:
- Caches (all)
  Keys: all
  Allowed actions: Read, Write
Conditions: (none)
```

</TabItem>
<TabItem value="http" label="HTTP API">

*Status Code: 200 OK*

Returns the updated role in the [Role object](#role-object) shape.

</TabItem>
</Tabs>

#### Error

*Status Code: 400 Bad Request*
- The request body contains an invalid permission set or an invalid CIDR range.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 404 Not Found*
- No custom role with the specified `role_id` exists on the account.

*Status Code: 412 Precondition Failed*
- The specified role is a system role, which cannot be updated.

*Status Code: 429 Too Many Requests*
- The request was throttled. Retry after a short delay.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Delete Custom Role

Deletes a custom role. A role can only be deleted once nothing references it. If the role is still assigned to any account members, pending invitations, or API keys, the delete is **blocked** and the response lists what is still using it. System roles cannot be deleted.

### Request

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```sh
momento role delete --name cicd-role
```

Or you can specify the role by its ID:

```sh
momento role delete --id r-abcdefg
```

</TabItem>
<TabItem value="http" label="HTTP API">

- Path: /roles/\{role_id\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type   | Description                           |
|---------------------|-----------|--------|---------------------------------------|
| role_id             | yes       | String | The identifier of the role to delete. |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

</TabItem>
</Tabs>

### Responses

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

#### Success

When the role was deleted:

```
Deleted custom role cicd-role (ID r-abcdefg)!
```

#### Error

When the delete was blocked because the role is still in use, the response lists every member, invitation, and API key that still references it:

```
ERROR: Couldn't delete custom role cicd-role (ID r-abcdefg) because it's still in use:

Account Members:
- jane@example.com
Invited Account Members:
- sam@example.com
API Keys:
- Key ID: api-key-id
  Account ID: account-id
  Description: For deploying to CI/CD environments
  Issued At: 2024-06-26 00:00:00 UTC
```

To delete a blocked role, reassign or remove everything listed in the response, then retry the delete.

</TabItem>
<TabItem value="http" label="HTTP API">

#### Success

*Status Code: 200 OK*

The response always includes a `status` field indicating the outcome.

When the role was deleted:

```json
{
  "status": "deleted"
}
```

When the delete was blocked because the role is still in use, the response lists every member, invitation, and API key that still references it:

```json
{
  "status": "blocked",
  "account_members": [
    { "user_name": "jane@example.com", "role_id": "r-abcdefg", "role_name": "cicd-role" }
  ],
  "invitations": [
    {
      "id": "invitation-id",
      "account_member": { "user_name": "sam@example.com", "role_id": "r-abcdefg", "role_name": "cicd-role" }
    }
  ],
  "api_keys": [
    {
      "key_id": "api-key-id",
      "account_id": "account-id",
      "description": "For deploying to CI/CD environments",
      "role_id": "r-abcdefg",
      "issued_at_epoch_seconds": 1719360000
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| status | String | `deleted` if the role was removed, or `blocked` if it is still in use. |
| account_members | Array | Present when `status` is `blocked`. The account members still assigned to the role. |
| invitations | Array | Present when `status` is `blocked`. The pending invitations still assigned to the role. |
| api_keys | Array | Present when `status` is `blocked`. The API keys still assigned to the role. Each entry has the shape described in the [API Keys HTTP API](/platform/authentication/api-keys-http-api#api-key-object). |

To delete a blocked role, reassign or remove everything listed in the response, then retry the delete.

#### Error

</TabItem>
</Tabs>

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 404 Not Found*
- No custom role with the specified `role_id` exists on the account.

*Status Code: 412 Precondition Failed*
- The specified role is a system role, which cannot be deleted.

*Status Code: 429 Too Many Requests*
- The request was throttled. Retry after a short delay.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Examples

## Example: List Roles

List only the custom roles on your account:

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```sh
momento role list --limit 50
```

</TabItem>
<TabItem value="http" label="HTTP API">

```sh
curl -H "Authorization: <token>" \
  "https://mga.registry.prod.a.momentohq.com/roles?type=custom&limit=50"
```

</TabItem>
</Tabs>

## Example: Create a Custom Role

Create a role with read/write access to a single cache:

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```sh
momento role create --name cicd-role \
  --description "For deploying to CI/CD environments" \
  --permission-set '{
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": { "name": "prod-cache" },
        "items": "*"
      }
    ]
  }'
```

</TabItem>
<TabItem value="http" label="HTTP API">

```sh
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "role_name": "cicd-role",
    "description": "For deploying to CI/CD environments",
    "permissions": {
      "rules": [
        {
          "type": "cache",
          "permissions": ["read", "write"],
          "caches": { "name": "prod-cache" },
          "items": "*"
        }
      ]
    }
  }' \
  "https://mga.registry.prod.a.momentohq.com/roles"
```

</TabItem>
</Tabs>

## Example: Update a Custom Role

Broaden the role to cover all caches:

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

```sh
momento role update --name cicd-role \
  --permission-set '{
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": "*",
        "items": "*"
      }
    ]
  }'
```

Or you can specify the role by its ID:

```sh
momento role update --id r-abcdefg \
  --permission-set '{
    "rules": [
      {
        "type": "cache",
        "permissions": ["read", "write"],
        "caches": "*",
        "items": "*"
      }
    ]
  }'
```

</TabItem>
<TabItem value="http" label="HTTP API">

Specify the role by its `role_id` in the path:

```sh
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "role_name": "cicd-role",
    "description": "For deploying to CI/CD environments across all caches",
    "permissions": {
      "rules": [
        {
          "type": "cache",
          "permissions": ["read", "write"],
          "caches": "*",
          "items": "*"
        }
      ]
    }
  }' \
  "https://mga.registry.prod.a.momentohq.com/roles/r-abcdefg"
```

</TabItem>
</Tabs>

## Example: Rename a Custom Role

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

Specify the role by its current name:

```sh
momento role update --name cicd-role --rename cache-manager
```

Or you can specify the role by its ID:

```sh
momento role update --id r-abcdefg --rename cache-manager
```

</TabItem>
<TabItem value="http" label="HTTP API">

Specify the role by its `role_id` in the path:

```sh
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "role_name": "cache-manager",
    "description": "For deploying to CI/CD environments across all caches",
    "permissions": {
      "rules": [
        {
          "type": "cache",
          "permissions": ["read", "write"],
          "caches": "*",
          "items": "*"
        }
      ]
    }
  }' \
  "https://mga.registry.prod.a.momentohq.com/roles/r-abcdefg"
```

</TabItem>
</Tabs>

## Example: Delete a Custom Role

<Tabs groupId="interface">
<TabItem value="cli" label="Momento CLI">

Delete a role by its name or ID:

```sh
momento role delete --name cicd-role
momento role delete --id r-abcdefg
```

</TabItem>
<TabItem value="http" label="HTTP API">

Delete a role by its `role_id`:

```sh
curl -X DELETE -H "Authorization: <token>" \
  "https://mga.registry.prod.a.momentohq.com/roles/r-abcdefg"
```

</TabItem>
</Tabs>
