---
sidebar_label: HTTP API
title: HTTP API for Momento Valkey Clusters
description: HTTP API reference for Momento Valkey Clusters.
unlisted: true
---

# HTTP API Reference for Momento Valkey Clusters

Momento provides an HTTP API interface for managing Valkey Clusters. This API allows you to create, describe, update, list, and delete clusters programmatically.

:::tip[Info]

The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, [click here](/platform/regions).

:::

## Authentication

You will need a Momento API Key generated via the [Momento console](https://console.gomomento.com/key). Momento API Keys control access to the Momento services and can be set to expire.

The API Key must be provided in the `Authorization` header.

---

# Control Plane API

The Control Plane API allows you to manage Valkey Clusters - creating, describing, updating, listing, and deleting them.

## Create Cluster

Creates a new Valkey Cluster with the specified configuration.

### Request

- Path: /ec-cluster
- HTTP Method: POST

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "name": "my-cluster",
  "node_instance_type": "cache.m6g.large",
  "shard_count": 3,
  "replication_factor": 2,
  "enforce_shard_multi_az": true,
  "shard_placements": [
    {
      "shard_index": 0,
      "availability_zone": "us-east-1a",
      "replica_availability_zones": ["us-east-1b", "us-east-1c"]
    }
  ]
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| name | yes | String | The name of the cluster. Must be URL-safe. |
| node_instance_type | yes | String | The instance type for cluster nodes. |
| shard_count | yes | Integer | The number of shards in the cluster. |
| replication_factor | yes | Integer | The number of replicas per shard. |
| enforce_shard_multi_az | yes | Boolean | Whether to enforce multi-AZ placement for shards. |
| shard_placements | no | Array | Optional explicit placement configuration for shards. If not specified, placements are determined automatically. |
| shard_placements[].shard_index | yes | Integer | The index of the shard (0-based). |
| shard_placements[].availability_zone | yes | String | The availability zone for the primary node. |
| shard_placements[].replica_availability_zones | yes | Array | The availability zones for replica nodes. |

### Responses

#### Success

*Status Code: 201 Created*

```json
{
  "name": "my-cluster",
  "node_instance_type": "cache.m6g.large",
  "shard_count": 3,
  "replication_factor": 2,
  "enforce_shard_multi_az": true,
  "shard_placements": [
    {
      "shard_index": 0,
      "availability_zone": "us-east-1a",
      "replica_availability_zones": ["us-east-1b", "us-east-1c"]
    }
  ],
  "status": "Creating"
}
```

| Field | Type | Description |
|-------|------|-------------|
| name | String | The name of the cluster. |
| node_instance_type | String | The instance type for cluster nodes. |
| shard_count | Integer | The number of shards. |
| replication_factor | Integer | The number of replicas per shard. |
| enforce_shard_multi_az | Boolean | Whether multi-AZ placement is enforced. |
| shard_placements | Array | The placement configuration for each shard. |
| status | String | The cluster status: `Creating`, `CreationFailed`, `Active`, `Updating`, or `Deleting`. |

#### Error

*Status Code: 400 Bad Request*
- "Invalid cluster configuration" indicates the request body contains invalid configuration. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento API key passed in does not grant the required access. See the body of the message for further details.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

---

## Describe Cluster

Retrieves the details of a specific Valkey Cluster.

### Request

- Path: /ec-cluster/\{cluster_name\}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| cluster_name        | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
{
  "name": "my-cluster",
  "node_instance_type": "cache.m6g.large",
  "shard_count": 3,
  "replication_factor": 2,
  "enforce_shard_multi_az": true,
  "shard_placements": [
    {
      "shard_index": 0,
      "availability_zone": "us-east-1a",
      "replica_availability_zones": ["us-east-1b", "us-east-1c"]
    }
  ],
  "status": "Active"
}
```

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 404 Not Found*
- The specified cluster does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## List Clusters

Lists all Valkey Clusters in your account.

### Request

- Path: /ec-cluster
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
  "clusters": [
    {
      "name": "my-cluster"
    },
    {
      "name": "dev-cluster"
    }
  ]
}
```

:::note

The list endpoint returns only cluster names. Use the [Describe Cluster](#describe-cluster) endpoint to retrieve full details for a specific cluster.

:::

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Delete Cluster

Deletes a Valkey Cluster.

### Request

- Path: /ec-cluster/\{cluster_name\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| cluster_name        | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 204 No Content*

- The cluster was successfully deleted.

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Update Replication Group

Updates the instance type and/or multi-AZ enforcement for an existing cluster.

### Request

- Path: /ec-cluster/\{cluster_name\}/replication-group
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| cluster_name        | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "node_instance_type": "cache.m6g.xlarge",
  "enforce_shard_multi_az": true
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| node_instance_type | no | String | The new instance type for cluster nodes. |
| enforce_shard_multi_az | no | Boolean | Whether to enforce multi-AZ placement for shards. |

### Responses

#### Success

*Status Code: 202 Accepted*

- The update has been accepted and will be applied asynchronously.

#### Error

*Status Code: 400 Bad Request*
- The request body contains invalid configuration.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Update Shard Configuration

Updates the shard count for an existing cluster. This can be used to scale the cluster horizontally.

### Request

- Path: /ec-cluster/\{cluster_name\}/shard-configuration
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| cluster_name        | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "shard_count": 5,
  "shards_to_remove": [],
  "shard_placements": []
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| shard_count | yes | Integer | The new number of shards in the cluster. |
| shards_to_remove | no | Array\<Integer\> | Shard indexes to remove. Required when decreasing the shard count. |
| shard_placements | no | Array | Optional explicit placement configuration for new shards when increasing the shard count. |

### Responses

#### Success

*Status Code: 202 Accepted*

- The shard configuration update has been accepted and will be applied asynchronously.

#### Error

*Status Code: 400 Bad Request*
- The request body contains invalid configuration.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Increase Replica Count

Increases the number of replicas per shard for an existing cluster.

### Request

- Path: /ec-cluster/\{cluster_name\}/increase-replica-count
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| cluster_name        | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "replication_factor": 3,
  "shard_placements": [
    {
      "shard_index": 0,
      "availability_zone": "us-east-1a",
      "replica_availability_zones": ["us-east-1b", "us-east-1c", "us-east-1d"]
    }
  ]
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| replication_factor | yes | Integer | The new (higher) number of replicas per shard. |
| shard_placements | no | Array | Optional explicit placement configuration for the new replicas. |

### Responses

#### Success

*Status Code: 202 Accepted*

- The replica count increase has been accepted and will be applied asynchronously.

#### Error

*Status Code: 400 Bad Request*
- The request body contains invalid configuration.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

## Decrease Replica Count

Decreases the number of replicas per shard for an existing cluster.

### Request

- Path: /ec-cluster/\{cluster_name\}/decrease-replica-count
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| cluster_name        | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|-----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "replication_factor": 1,
  "shard_placements": []
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| replication_factor | yes | Integer | The new (lower) number of replicas per shard. |
| shard_placements | no | Array | Optional explicit placement configuration for the remaining replicas. |

### Responses

#### Success

*Status Code: 202 Accepted*

- The replica count decrease has been accepted and will be applied asynchronously.

#### Error

*Status Code: 400 Bad Request*
- The request body contains invalid configuration.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Examples

## Create Cluster

Create a new Valkey Cluster with 3 shards and 2 replicas per shard:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-cluster",
    "node_instance_type": "cache.m6g.large",
    "shard_count": 3,
    "replication_factor": 2,
    "enforce_shard_multi_az": true
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster"
```

Create a cluster with explicit shard placements:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-cluster",
    "node_instance_type": "cache.m6g.large",
    "shard_count": 2,
    "replication_factor": 2,
    "enforce_shard_multi_az": true,
    "shard_placements": [
      {
        "shard_index": 0,
        "availability_zone": "us-east-1a",
        "replica_availability_zones": ["us-east-1b", "us-east-1c"]
      },
      {
        "shard_index": 1,
        "availability_zone": "us-east-1b",
        "replica_availability_zones": ["us-east-1a", "us-east-1c"]
      }
    ]
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster"
```

## Describe Cluster

Get details for a specific cluster:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster"
```

## List Clusters

List all clusters in your account:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster"
```

## Update Replication Group

Change the instance type:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "node_instance_type": "cache.m6g.xlarge"
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster/replication-group"
```

## Update Shard Configuration

Scale up from 3 shards to 5 shards:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "shard_count": 5
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster/shard-configuration"
```

Scale down from 5 shards to 3, removing shards 3 and 4:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "shard_count": 3,
    "shards_to_remove": [3, 4]
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster/shard-configuration"
```

## Increase Replica Count

Increase replicas from 2 to 3 per shard:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "replication_factor": 3
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster/increase-replica-count"
```

## Decrease Replica Count

Decrease replicas from 3 to 1 per shard:

```bash
curl -X POST -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "replication_factor": 1
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster/decrease-replica-count"
```

## Delete Cluster

Delete a cluster:

```bash
curl -X DELETE -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/ec-cluster/my-cluster"
```
