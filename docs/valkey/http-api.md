---
sidebar_label: HTTP API
title: HTTP API for Momento Valkey Clusters
description: HTTP API reference for Momento Valkey Clusters.
unlisted: true
---

# HTTP API Reference for Momento Valkey Clusters

Momento provides an HTTP API interface for managing Valkey Clusters. This API allows you to create, update, list, and delete clusters programmatically.

:::tip[Info]

The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, [click here](/platform/regions).

:::

## Authentication

You will need a Momento API Key generated via the [Momento console](https://console.gomomento.com/key). Momento API Keys control access to the Momento services and can be set to expire.

The API Key must be provided in the `Authorization` header.

---

# Control Plane API

The Control Plane API allows you to manage Valkey Clusters - creating, listing, and deleting them.

## Create or Update Cluster

Creates a new Valkey Cluster or updates an existing one with the specified configuration.

### Request

- Path: /cluster/\{clusterName\}
- HTTP Method: PUT

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| clusterName         | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "description": "My production cluster",
  "node_instance_type": "m6g.large",
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
| description | no | String | Optional description for the cluster. |
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

*Status Code: 200 OK*

```json
{
  "name": "my-cluster",
  "description": "My production cluster",
  "node_instance_type": "m6g.large",
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
  "status": "Creating",
  "errors": []
}
```

| Field | Type | Description |
|-------|------|-------------|
| name | String | The name of the cluster. |
| description | String | The cluster description. |
| node_instance_type | String | The instance type for cluster nodes. |
| shard_count | Integer | The number of shards. |
| replication_factor | Integer | The number of replicas per shard. |
| enforce_shard_multi_az | Boolean | Whether multi-AZ placement is enforced. |
| shard_placements | Array | The placement configuration for each shard. |
| status | String | The cluster status: `Creating`, `Active`, or `Deleting`. |
| errors | Array | Any errors associated with the cluster (e.g., `InstanceTypeNotAvailable`). |

#### Error

*Status Code: 400 Bad Request*
- "Invalid cluster configuration" indicates the request body contains invalid configuration. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento API key passed in does not grant the required access. See the body of the message for further details.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Delete Cluster

Deletes a Valkey Cluster.

### Request

- Path: /cluster/\{clusterName\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                    |
|---------------------|-----------|-----------------|--------------------------------|
| clusterName         | yes       | URL-safe string | The name of the Valkey Cluster.|

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
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

## List Clusters

Lists all Valkey Clusters in your account.

### Request

- Path: /cluster
- HTTP Method: GET

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Responses

#### Success

*Status Code: 200 OK*

```json
[
  {
    "name": "my-cluster",
    "description": "My production cluster",
    "node_instance_type": "m6g.large",
    "shard_count": 3,
    "replication_factor": 2,
    "enforce_shard_multi_az": true,
    "shard_placements": [],
    "status": "Active",
    "errors": []
  },
  {
    "name": "dev-cluster",
    "description": "Development cluster",
    "node_instance_type": "t4g.small",
    "shard_count": 1,
    "replication_factor": 1,
    "enforce_shard_multi_az": false,
    "shard_placements": [],
    "status": "Active",
    "errors": []
  }
]
```

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Examples

## Create Cluster

Create a new Valkey Cluster with 3 shards and 2 replicas per shard:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Production cluster",
    "node_instance_type": "m6g.large",
    "shard_count": 3,
    "replication_factor": 2,
    "enforce_shard_multi_az": true
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/cluster/my-cluster"
```

Create a cluster with explicit shard placements:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Production cluster with custom placement",
    "node_instance_type": "m6g.large",
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
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/cluster/my-cluster"
```

## List Clusters

List all clusters in your account:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/cluster"
```

## Delete Cluster

Delete a cluster:

```bash
curl -X DELETE -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/cluster/my-cluster"
```
