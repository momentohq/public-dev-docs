---
sidebar_label: API Keys HTTP API
title: HTTP API for Momento API Keys
description: HTTP API reference for managing Momento API keys programmatically.
unlisted: true
---

# HTTP API Reference for Momento API Keys

Momento provides an HTTP API for managing the API keys on your account. This API lets you generate, list, and revoke API keys programmatically, without going through the [Momento console](https://console.gomomento.com/api-keys).

Each API key is tied to a [role](/account-management/roles-http-api), which determines what the key is allowed to do. See the [Roles HTTP API](/account-management/roles-http-api) for how to create and manage the roles referenced here.

:::tip[Info]

This is a global, account-level API served from a single endpoint. Unlike the region-based cache endpoints, it is not tied to a specific cell or region.

:::

## Authentication

You will need a Momento API Key that grants auth-management access on your account. API Keys control access to Momento services and can be set to expire.

The API Key must be provided in the `Authorization` header.

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

---

# API Keys API

The API Keys API lets you generate new API keys, list the keys that exist on your account, and revoke a key.

## API key object

Operations that return key metadata use a common shape. The plaintext key material is **never** included in this object — it is returned only once, at generation time.

```json
{
  "key_id": "api-key-id",
  "account_id": "account-id",
  "description": "For deploying to CI/CD environments",
  "role_id": "cicd-role",
  "expires_at_epoch_seconds": 1719363600,
  "issued_at_epoch_seconds": 1719360000
}
```

| Field | Type | Description |
|-------|------|-------------|
| key_id | String | The unique identifier for the key. Use this value to revoke the key. |
| account_id | String | The account the key belongs to. |
| description | String | The description supplied when the key was generated. |
| role_id | String | The identifier of the [role](/account-management/roles-http-api) that determines the key's permissions. |
| expires_at_epoch_seconds | Integer | When the key expires, in seconds since the Unix epoch. Omitted for keys that never expire. |
| issued_at_epoch_seconds | Integer | When the key was generated, in seconds since the Unix epoch. |

---

## Generate API Key

Generates a new API key with the specified role, description, and expiry. The plaintext `api_key` is returned **once** in the response; copy it and store it securely (for example, in a secret manager such as AWS Secrets Manager, Azure Key Vault, or GCP Secret Manager). It cannot be retrieved again.

### Request

- Path: /api-keys
- HTTP Method: POST

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "role_id": "cicd-role",
  "description": "For deploying to CI/CD environments",
  "expiry": 1719363600
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| role_id | yes | String | The identifier of the [role](/account-management/roles-http-api) to assign to the key. |
| description | yes | String | A human-readable description for the key. |
| expiry | yes | String or Integer | When the key should expire. Either the literal string `"never"`, or an integer number of seconds since the Unix epoch at which the key expires. |

### Responses

#### Success

*Status Code: 200 OK*

```json
{
  "api_key": "api-key",
  "key_info": {
    "key_id": "api-key-id",
    "account_id": "account-id",
    "description": "For deploying to CI/CD environments",
    "role_id": "cicd-role",
    "expires_at_epoch_seconds": 1719363600,
    "issued_at_epoch_seconds": 1719360000
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| api_key | String | The plaintext API key. This is the only time it is returned; store it securely. |
| key_info | Object | Metadata about the generated key. See [API key object](#api-key-object). |

#### Error

*Status Code: 400 Bad Request*
- The request body is invalid — for example, malformed JSON, a missing field, or an `expiry` that is neither `"never"` nor an epoch-seconds integer. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 404 Not Found*
- No role with the specified `role_id` exists on the account.

*Status Code: 429 Too Many Requests*
- The request was throttled. Retry after a short delay.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

---

## List API Keys

Lists the API keys on your account, with pagination. The plaintext key material is never returned.

### Request

- Path: /api-keys
- HTTP Method: GET

#### Query Parameters

| Parameter&nbsp;name | Required? | Type    | Description                                                                                 |
|---------------------|-----------|---------|---------------------------------------------------------------------------------------------|
| limit               | no        | Integer | The maximum number of keys to return in a single page. Must be between 1 and 100, inclusive. Defaults to 100 when omitted. |
| next_token          | no        | String  | The pagination token returned by a previous call. Omit it to fetch the first page.           |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
{
  "key_info": [
    {
      "key_id": "api-key-id-1",
      "account_id": "account-id",
      "description": "For deploying to CI/CD environments",
      "role_id": "cicd-role",
      "expires_at_epoch_seconds": 1719363600,
      "issued_at_epoch_seconds": 1719360000
    },
    {
      "key_id": "api-key-id-2",
      "account_id": "account-id",
      "description": "Read-only access for the metrics dashboard",
      "role_id": "analytics-readonly-role",
      "issued_at_epoch_seconds": 1719000000
    }
  ],
  "next_token": "next-token"
}
```

| Field | Type | Description |
|-------|------|-------------|
| key_info | Array | The API keys on the account for this page. Each entry has the shape described in [API key object](#api-key-object). |
| next_token | String | A pagination token for fetching the next page. Present only when more keys are available; pass it as the `next_token` query parameter on the next call. |

#### Error

*Status Code: 400 Bad Request*
- The query parameters are invalid — for example, a non-numeric `limit`, or a `limit` outside the range 1 to 100. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 429 Too Many Requests*
- The request was throttled. Retry after a short delay.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Revoke API Key

Revokes an API key, disabling it immediately.

### Request

- Path: /api-keys/\{key_id\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type   | Description                          |
|---------------------|-----------|--------|--------------------------------------|
| key_id              | yes       | String | The identifier of the key to revoke. |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
{}
```

The key has been revoked. The response body is an empty object.

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The Momento API key passed in does not grant the required access.

*Status Code: 404 Not Found*
- No key with the specified `key_id` exists on the account.

*Status Code: 429 Too Many Requests*
- The request was throttled. Retry after a short delay.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Examples

## Example: Generate an API Key

Generate a key that never expires:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "role_id": "cicd-role",
    "description": "For deploying to CI/CD environments",
    "expiry": "never"
  }' \
  "https://mga.registry.prod.a.momentohq.com/api-keys"
```

Generate a key that expires at a specific time (seconds since the Unix epoch):

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "role_id": "cicd-role",
    "description": "Temporary key for the Q3 data migration",
    "expiry": 1719363600
  }' \
  "https://mga.registry.prod.a.momentohq.com/api-keys"
```

## Example: List API Keys

Fetch the first page of keys:

```bash
curl -H "Authorization: <token>" \
  "https://mga.registry.prod.a.momentohq.com/api-keys?limit=50"
```

Fetch the next page using the token from a previous response:

```bash
curl -H "Authorization: <token>" \
  "https://mga.registry.prod.a.momentohq.com/api-keys?limit=50&next_token=next-token"
```

## Example: Revoke an API Key

Revoke a key by its `key_id`:

```bash
curl -X DELETE -H "Authorization: <token>" \
  "https://mga.registry.prod.a.momentohq.com/api-keys/api-key-id"
```
