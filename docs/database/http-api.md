---
sidebar_label: HTTP API
title: HTTP API for Momento Databases
description: HTTP API reference for Momento Databases.
unlisted: true
---

# HTTP API Reference for Momento Databases

Momento provides an HTTP API interface for managing Databases. This API allows you to create, describe, list, and delete Databases programmatically.

A **Database** is a logical database pinned to exactly one [Capacity Pool](/capacity-pool/http-api). Multiple databases share the compute and memory of their Pool. A Database is identified by its name and the name of the Capacity Pool it belongs to.

:::tip[Info]

The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, [click here](/platform/regions).

:::

## Authentication

You will need a Momento API Key generated via the [Momento console](https://console.gomomento.com/key). Momento API Keys control access to the Momento services and can be set to expire.

The API Key must be provided in the `Authorization` header.

---

# Database API

The Database API allows you to manage Databases - creating, describing, listing, and deleting them. Each Database is pinned to exactly one Capacity Pool. There is no update operation; a Database has no mutable fields.

## Create Database

Creates a new Database pinned to the specified Capacity Pool.

### Request

- Path: /database/\{name\}
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                  |
|---------------------|-----------|-----------------|------------------------------|
| name                | yes       | URL-safe string | The name of the Database.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "pool_name": "prod-us-east-1"
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| pool_name | yes | String | The name of the Capacity Pool this Database is pinned to. |

### Responses

#### Success

*Status Code: 201 Created*

```json
{
  "name": "user-sessions",
  "pool_name": "prod-us-east-1"
}
```

| Field | Type | Description |
|-------|------|-------------|
| name | String | The name of the Database. |
| pool_name | String | The name of the Capacity Pool the Database is pinned to. |

#### Error

*Status Code: 400 Bad Request*
- "Invalid Argument" indicates the request body contains invalid configuration. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento API key passed in does not grant the required access.

*Status Code: 404 Not Found*
- The specified Capacity Pool does not exist.

*Status Code: 409 Already Exists*
- A Database with the specified name already exists.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Describe Database

Retrieves the details of a specific Database.

### Request

- Path: /database/\{name\}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                  |
|---------------------|-----------|-----------------|------------------------------|
| name                | yes       | URL-safe string | The name of the Database.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
{
  "name": "user-sessions",
  "pool_name": "prod-us-east-1"
}
```

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 404 Not Found*
- The specified Database does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## List Databases

Lists all Databases owned by your account, across all Capacity Pools.

### Request

- Path: /database
- HTTP Method: GET

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
{
  "databases": [
    {
      "name": "user-sessions",
      "pool_name": "prod-us-east-1"
    },
    {
      "name": "feature-flags",
      "pool_name": "prod-us-east-1"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| databases | Array | The Databases owned by the calling account. Each entry has the same shape as the [Describe Database](#describe-database) response. |

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Delete Database

Deletes a Database. The Database is removed synchronously; its underlying resources are reclaimed asynchronously.

### Request

- Path: /database/\{name\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                  |
|---------------------|-----------|-----------------|------------------------------|
| name                | yes       | URL-safe string | The name of the Database.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 204 No Content*

- The Database has been deleted. There is no response body.

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 404 Not Found*
- The specified Database does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Examples

## Example: Create Database

Create a Database pinned to a Capacity Pool:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "pool_name": "prod-us-east-1"
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/database/user-sessions"
```

## Example: Describe Database

Get details for a specific Database:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/database/user-sessions"
```

## Example: List Databases

List all Databases in your account:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/database"
```

## Example: Delete Database

Delete a Database:

```bash
curl -X DELETE -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/database/user-sessions"
```
