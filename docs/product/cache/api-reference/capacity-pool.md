---
sidebar_label: Capacity Pool API
title: Capacity Pool API
description: HTTP API reference for Momento Capacity Pools.
---

<!-- Projects: cache2/interfaces/control-plane-api, cache2/concepts/capacity-pool, cache2/concepts/provisioning-modes -->

# HTTP API Reference for Momento Capacity Pools

Momento provides an HTTP API interface for managing Capacity Pools. This API lets you create, describe, update, list, and delete Capacity Pools programmatically.

A **Capacity Pool** is a customer-provisioned unit of dedicated Valkey capacity. You choose the instance type, shard count, replicas per shard, and availability zone (AZ) placement. Momento owns the underlying lifecycle and health of the pool. Each pool hosts one or more [Databases](/product/cache/api-reference/database), which share the pool's compute and memory.

:::tip[Info]

The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, [click here](/platform/regions).

:::

## Authentication

You will need a Momento API Key generated via the [Momento console](https://console.gomomento.com/key). Momento API Keys control access to the Momento services and can be set to expire.

The API Key must be provided in the `Authorization` header.

---

# Capacity Pool API

The Capacity Pool API lets you create, describe, update, list, and delete Capacity Pools.

## Provisioning

A Capacity Pool's capacity is described by a `provisioning` object. The object nests its configuration under a single key that names the provisioning mode. This reference documents `explicit` mode, in which you specify the instance type, shard count, replicas per shard, and AZ placement.

```json
{
  "explicit": {
    "instance_type": "r7g.xlarge",
    "shard_count": 3,
    "replicas_per_shard": 1,
    "zones": ["us-east-1a", "us-east-1b"]
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| explicit | yes | Object | The explicit-mode provisioning configuration. Exactly one mode key must be provided. |
| explicit.instance_type | yes | String | The instance type for the pool's nodes (for example, `r7g.xlarge`). |
| explicit.shard_count | yes | Integer | The number of shards in the pool. |
| explicit.replicas_per_shard | yes | Integer | The number of replicas per shard. |
| explicit.zones | yes | Array\<String\> | The availability zones across which the pool's nodes are placed. Must contain at least one zone. |

## Status

A Capacity Pool has its own lifecycle `status`, surfaced at describe time:

| Status | Description |
|--------|-------------|
| creating | The pool has been accepted and its backing capacity is being provisioned asynchronously. |
| active | The pool is fully provisioned and ready to serve Databases. |
| deleting | The pool is being torn down. |

These three values are the pool's complete status set. A pool stays `active` while its capacity converges to a requested change; there is no separate `scaling` or `updating` status. Progress, or a condition that blocks the change, surfaces as a [diagnostic](#diagnostics).

## Diagnostics

Every Capacity Pool response includes a `diagnostics` field: an array of customer-actionable conditions affecting the pool (for example, insufficient capacity), derived from the underlying capacity at read time. The array is always present and is empty (`[]`) when there is nothing to surface.

[Describe Capacity Pool](#describe-capacity-pool) returns active conditions plus recently-resolved ones; [List Capacity Pools](#list-capacity-pools) returns only active conditions.

Each diagnostic nests its details under a single key that names the kind of condition. Two kinds are defined.

The `insufficient_capacity` kind is raised when Momento cannot provision the requested capacity:

```json
{
  "insufficient_capacity": {
    "state": "active",
    "message": "Insufficient r7g.xlarge capacity in us-east-1a.",
    "instance_type": "r7g.xlarge",
    "availability_zones": ["us-east-1a"],
    "first_observed_epoch_seconds": 1719360000,
    "last_observed_epoch_seconds": 1719363600
  }
}
```

The fields of an `insufficient_capacity` diagnostic:

| Field | Type | Description |
|-------|------|-------------|
| state | String | Whether the condition is currently in effect (`active`) or recently cleared (`resolved`). |
| message | String | A human-readable summary suitable for surfacing directly to the customer. |
| instance_type | String | The instance type that could not be provisioned. |
| availability_zones | Array\<String\> | The availability zones the condition has been observed in during this episode. |
| first_observed_epoch_seconds | Integer | When the condition was first observed, in seconds since the Unix epoch. |
| last_observed_epoch_seconds | Integer | The most recent time the condition was observed. For an active diagnostic, how recently it was confirmed still in effect; for a resolved one, the last failure before it cleared. |
| resolved_epoch_seconds | Integer | When the condition resolved, in seconds since the Unix epoch. Present only on a `resolved` diagnostic. |

The `scale_blocked_by_utilization` kind is raised when a requested change to a pool is rejected by the capacity safety check — the pool's current data no longer fits the requested configuration, or its usage can't currently be verified. The request is retried automatically and applies once it fits (or is superseded by another update):

```json
{
  "scale_blocked_by_utilization": {
    "state": "active",
    "message": "The requested configuration is smaller than the pool's current data; retrying until it fits.",
    "requested_shard_count": 6,
    "requested_instance_type": "r7g.xlarge",
    "data_approx": "42 GB",
    "capacity_approx": "32 GB",
    "first_observed_epoch_seconds": 1719360000,
    "last_observed_epoch_seconds": 1719363600
  }
}
```

The fields of a `scale_blocked_by_utilization` diagnostic:

| Field | Type | Description |
|-------|------|-------------|
| state | String | Whether the condition is currently in effect (`active`) or recently cleared (`resolved`). |
| message | String | A human-readable summary suitable for surfacing directly to the customer. |
| requested_shard_count | Integer | The requested shard count that isn't landing. |
| requested_instance_type | String | The requested instance type that isn't landing. |
| data_approx | String | A rounded total of the pool's current data. Present only when the data doesn't fit; absent when usage can't be verified. |
| capacity_approx | String | A rounded total of what the requested configuration can hold. Present only when the data doesn't fit. |
| first_observed_epoch_seconds | Integer | When the condition was first observed, in seconds since the Unix epoch. |
| last_observed_epoch_seconds | Integer | The most recent time the condition was observed. |
| resolved_epoch_seconds | Integer | When the condition resolved, in seconds since the Unix epoch. Present only on a `resolved` diagnostic. |

---

## Create Capacity Pool

Creates a new Capacity Pool with the specified provisioning. The pool is created synchronously in `creating` status; the backing capacity is provisioned asynchronously. Use the [Describe Capacity Pool](#describe-capacity-pool) endpoint to poll until the pool's status is `active`.

### Request

- Path: /capacity_pool/\{name\}
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                       |
|---------------------|-----------|-----------------|-----------------------------------|
| name                | yes       | URL-safe string | The name of the Capacity Pool.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "provisioning": {
    "explicit": {
      "instance_type": "r7g.xlarge",
      "shard_count": 3,
      "replicas_per_shard": 1,
      "zones": ["us-east-1a", "us-east-1b"]
    }
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| provisioning | yes | Object | The provisioning configuration for the pool. See [Provisioning](#provisioning). |

### Responses

#### Success

*Status Code: 201 Created*

```json
{
  "name": "prod-us-east-1",
  "provisioning": {
    "explicit": {
      "instance_type": "r7g.xlarge",
      "shard_count": 3,
      "replicas_per_shard": 1,
      "zones": ["us-east-1a", "us-east-1b"]
    }
  },
  "status": "creating",
  "diagnostics": []
}
```

| Field | Type | Description |
|-------|------|-------------|
| name | String | The name of the Capacity Pool. |
| provisioning | Object | The pool's provisioning configuration. See [Provisioning](#provisioning). |
| status | String | The pool's lifecycle status. See [Status](#status). |
| diagnostics | Array | Customer-actionable conditions affecting the pool. Empty when there is nothing to surface. See [Diagnostics](#diagnostics). |

#### Error

*Status Code: 400 Bad Request*
- "Invalid Argument" indicates the request body contains invalid configuration. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento API key passed in does not grant the required access. See the body of the message for further details.

*Status Code: 409 Already Exists*
- A Capacity Pool with the specified name already exists.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

---

## Describe Capacity Pool

Retrieves the details of a specific Capacity Pool.

### Request

- Path: /capacity_pool/\{name\}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                       |
|---------------------|-----------|-----------------|-----------------------------------|
| name                | yes       | URL-safe string | The name of the Capacity Pool.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
{
  "name": "prod-us-east-1",
  "provisioning": {
    "explicit": {
      "instance_type": "r7g.xlarge",
      "shard_count": 3,
      "replicas_per_shard": 1,
      "zones": ["us-east-1a", "us-east-1b"]
    }
  },
  "status": "active",
  "diagnostics": []
}
```

The `status` field reflects the pool's lifecycle status (`creating` / `active` / `deleting`). The `diagnostics` field is derived from the underlying capacity at read time; Describe returns active conditions plus recently-resolved ones. See [Diagnostics](#diagnostics).

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 404 Not Found*
- The specified Capacity Pool does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## List Capacity Pools

Lists all Capacity Pools owned by your account.

### Request

- Path: /capacity_pool
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
  "capacity_pools": [
    {
      "name": "prod-us-east-1",
      "provisioning": {
        "explicit": {
          "instance_type": "r7g.xlarge",
          "shard_count": 3,
          "replicas_per_shard": 1,
          "zones": ["us-east-1a", "us-east-1b"]
        }
      },
      "status": "active",
      "diagnostics": []
    },
    {
      "name": "dev-us-east-1",
      "provisioning": {
        "explicit": {
          "instance_type": "r7g.large",
          "shard_count": 1,
          "replicas_per_shard": 1,
          "zones": ["us-east-1a"]
        }
      },
      "status": "active",
      "diagnostics": []
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| capacity_pools | Array | The Capacity Pools owned by the calling account. Each entry has the same shape as the [Describe Capacity Pool](#describe-capacity-pool) response, except that `diagnostics` includes only active conditions. |

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Update Capacity Pool

Updates the provisioning of an existing Capacity Pool. The request body contains only the fields to change; any subset of the fields is valid. The configuration is nested under the same mode key as the pool's current provisioning (`explicit`); within it, a present field overwrites and an absent field is left unchanged.

The update is applied asynchronously. The pool's backing capacity converges to the new provisioning (adding or removing replicas, rolling instance types, and so on) after the response is returned. The pool stays `active` while it converges; see [Status](#status).

### Request

- Path: /capacity_pool/\{name\}
- HTTP Method: PATCH

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                       |
|---------------------|-----------|-----------------|-----------------------------------|
| name                | yes       | URL-safe string | The name of the Capacity Pool.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "provisioning": {
    "explicit": {
      "replicas_per_shard": 2
    }
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| provisioning | yes | Object | The provisioning configuration to change, nested under the mode key. |
| provisioning.explicit | yes | Object | The explicit-mode fields to change. Must match the pool's current mode. |
| provisioning.explicit.instance_type | no | String | If present, the new instance type for the pool's nodes. |
| provisioning.explicit.shard_count | no | Integer | If present, the new number of shards. |
| provisioning.explicit.replicas_per_shard | no | Integer | If present, the new number of replicas per shard. |
| provisioning.explicit.zones | no | Array\<String\> | If non-empty, replaces the pool's zone set. An empty or absent value leaves the zones unchanged. |

### Responses

#### Success

*Status Code: 200 OK*

Returns the updated pool in the same shape as the [Describe Capacity Pool](#describe-capacity-pool) response.

```json
{
  "name": "prod-us-east-1",
  "provisioning": {
    "explicit": {
      "instance_type": "r7g.xlarge",
      "shard_count": 3,
      "replicas_per_shard": 2,
      "zones": ["us-east-1a", "us-east-1b"]
    }
  },
  "status": "active",
  "diagnostics": []
}
```

#### Error

*Status Code: 400 Bad Request*
- The request body contains invalid configuration.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 403 Forbidden*
- The update is not permitted for this pool. Contact Momento support for further assistance.

*Status Code: 404 Not Found*
- The specified Capacity Pool does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Delete Capacity Pool

Deletes a Capacity Pool. The pool is marked `deleting` and its backing capacity is torn down asynchronously, after which the pool is removed.

:::note
A Capacity Pool cannot be deleted while it still has Databases pinned to it. Delete the pool's Databases first.
:::

### Request

- Path: /capacity_pool/\{name\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                       |
|---------------------|-----------|-----------------|-----------------------------------|
| name                | yes       | URL-safe string | The name of the Capacity Pool.    |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 202 Accepted*

- The pool deletion has been accepted and is being processed asynchronously. There is no response body.

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 409 Conflict*
- The pool still has Databases pinned to it and cannot be deleted.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Examples

## Example: Create Capacity Pool

Create a new Capacity Pool with 3 shards and 1 replica per shard across two AZs:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "provisioning": {
      "explicit": {
        "instance_type": "r7g.xlarge",
        "shard_count": 3,
        "replicas_per_shard": 1,
        "zones": ["us-east-1a", "us-east-1b"]
      }
    }
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/capacity_pool/prod-us-east-1"
```

## Example: Describe Capacity Pool

Get details for a specific Capacity Pool:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/capacity_pool/prod-us-east-1"
```

## Example: List Capacity Pools

List all Capacity Pools in your account:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/capacity_pool"
```

## Example: Update Capacity Pool

Increase the replicas per shard to 2:

```bash
curl -X PATCH -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "provisioning": {
      "explicit": {
        "replicas_per_shard": 2
      }
    }
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/capacity_pool/prod-us-east-1"
```

## Example: Delete Capacity Pool

Delete a Capacity Pool (all of its Databases must be deleted first):

```bash
curl -X DELETE -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/capacity_pool/prod-us-east-1"
```
