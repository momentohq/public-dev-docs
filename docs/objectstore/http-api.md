---
sidebar_label: HTTP API
title: HTTP API for Momento Object Store
description: HTTP API reference for Momento Object Store.
unlisted: true
---

# HTTP API Reference for Momento Object Store

Momento provides an HTTP API interface for storing and retrieving objects from your own S3 bucket with automatic caching in your own Momento Valkey Cluster.

:::tip[Info]

The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, [click here](/platform/regions).

:::

## Authentication

You will need a Momento API Key generated via the [Momento console](https://console.gomomento.com/key). Momento API Keys control access to the Momento services and can be set to expire.

The API Key must be provided in the `Authorization` header.

---

# Control Plane API

The Control Plane API allows you to manage object stores - creating, listing, describing, and deleting them.

## Create or Update Object Store

Creates a new object store with the specified configuration, or updates an existing one if it already exists.

:::note
The following fields are **immutable** once the object store has been created:
- `storage_config` (**bucket_name**, **prefix**, and **region**)
- `cache_config` (**cluster_name**)

The following fields **can** be updated:
- `storage_config.s3.iam_role_arn`
- `access_logging_config`
- `metrics_config`
:::

### Request

- Path: /objectstore/\{storeName\}
- HTTP Method: PUT

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                            |
|---------------------|-----------|-----------------|----------------------------------------|
| storeName           | yes       | URL-safe string | The name of the object store.          |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |
| Content-Type     | yes       | String | Must be `application/json`.                                                                        |

#### Request Body

```json
{
  "storage_config": {
    "s3": {
      "bucket_name": "my-s3-bucket",
      "prefix": "optional/prefix/path",
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoObjectStoreRole"
    }
  },
  "cache_config": {
    "valkey_cluster": {
      "cluster_name": "my-valkey-cluster"
    }
  },
  "access_logging_config": {
    "cloudwatch": {
      "log_group_name": "/momento/objectstore/my-store",
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoCloudWatchRole",
      "region": "us-east-1"
    }
  },
  "metrics_config": {
    "cloudwatch": {
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoMetricsRole",
      "region": "us-east-1"
    }
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| storage_config.s3.bucket_name | yes | String | The name of your S3 bucket. |
| storage_config.s3.prefix | no | String | Optional prefix path within the bucket. |
| storage_config.s3.iam_role_arn | yes | String | The ARN of the IAM role that Momento will assume to access your S3 bucket. See [Appendix: S3 IAM Role Setup](#appendix-s3-iam-role-setup). |
| cache_config.valkey_cluster.cluster_name | yes | String | The name of the Momento Valkey Cluster to use for caching. This must be the name of an existing cluster. |
| access_logging_config | no | Object | Optional configuration for access logging. |
| access_logging_config.cloudwatch.log_group_name | yes | String | The CloudWatch Log Group name where access logs will be delivered. The log group must already exist. |
| access_logging_config.cloudwatch.iam_role_arn | yes | String | The ARN of the IAM role that Momento will assume to write logs. See [Appendix: CloudWatch IAM Role Setup](#appendix-cloudwatch-iam-role-setup). |
| access_logging_config.cloudwatch.region | yes | String | The AWS region where the CloudWatch Log Group is located. |
| metrics_config | no | Object | Optional configuration for CloudWatch metrics delivery. See [CloudWatch Metrics](#cloudwatch-metrics). |
| metrics_config.cloudwatch.iam_role_arn | yes | String | The ARN of the IAM role that Momento will assume to publish metrics. See [Appendix: CloudWatch Metrics IAM Role Setup](#appendix-cloudwatch-metrics-iam-role-setup). |
| metrics_config.cloudwatch.region | yes | String | The AWS region where CloudWatch metrics will be published. |

### Response

#### Success

*Status Code: 201 Created*
- Returned when a new object store is successfully created.

*Status Code: 200 OK*
- Returned when an existing object store is successfully updated.

**Response Body:**

```json
{
  "name": "my-store",
  "storage_config": {
    "s3": {
      "bucket_name": "my-s3-bucket",
      "prefix": "optional/prefix/path",
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoObjectStoreRole"
    }
  },
  "cache_config": {
    "valkey_cluster": {
      "cluster_name": "my-valkey-cluster"
    }
  },
  "access_logging_config": {
    "cloudwatch": {
      "log_group_name": "/momento/objectstore/my-store",
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoCloudWatchRole",
      "region": "us-east-1"
    }
  },
  "metrics_config": {
    "cloudwatch": {
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoMetricsRole",
      "region": "us-east-1"
    }
  }
}
```

#### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento API key passed in does not grant the required access. See the body of the message for further details.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Describe Object Store

Retrieves the configuration details of an object store.

### Request

- Path: /objectstore/\{storeName\}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                            |
|---------------------|-----------|-----------------|----------------------------------------|
| storeName           | yes       | URL-safe string | The name of the object store.          |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Response

#### Success

*Status Code: 200 OK*

```json
{
  "name": "my-store",
  "storage_config": {
    "s3": {
      "bucket_name": "my-s3-bucket",
      "prefix": "optional/prefix/path",
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoObjectStoreRole"
    }
  },
  "cache_config": {
    "valkey_cluster": {
      "cluster_name": "my-valkey-cluster"
    }
  },
  "access_logging_config": {
    "cloudwatch": {
      "log_group_name": "/momento/objectstore/my-store",
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoCloudWatchRole",
      "region": "us-east-1"
    }
  },
  "metrics_config": {
    "cloudwatch": {
      "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoMetricsRole",
      "region": "us-east-1"
    }
  }
}
```

:::note
The `access_logging_config` and `metrics_config` fields are only present if the respective features are configured for the object store.
:::

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 404 Not Found*
- The specified object store does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

## Delete Object Store

Deletes an object store.

### Request

- Path: /objectstore/\{storeName\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                            |
|---------------------|-----------|-----------------|----------------------------------------|
| storeName           | yes       | URL-safe string | The name of the object store.          |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Response

#### Success

*Status Code: 204 No Content*

- The object store was successfully deleted.

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 404 Not Found*
- The specified object store does not exist.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

## List Object Stores

Lists all object stores in your account.

### Request

- Path: /objectstore
- HTTP Method: GET

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento API key, in string format, is used for authentication/authorization of the request.    |

### Response

#### Success

*Status Code: 200 OK*

```json
{
  "object_stores": [
    { "name": "my-store" },
    { "name": "another-store" }
  ]
}
```

#### Error

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues.

---

# Data Plane API

The Data Plane API allows you to store and retrieve objects from your object store.

## Put Object

Stores an object in the specified object store.

### Request

- Path: /objectstore/\{storeName\}/\{key\}
- HTTP Method: PUT

#### Body

- Content-Type: application/octet-stream
- The body of the request should contain the binary data to be stored.

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                                                                           |
|---------------------|-----------|-----------------|----------------------------------------------------------------------------------------|
| storeName           | yes       | URL-safe string | The name of the object store to operate on.                                            |
| key                 | yes       | String          | The key for the object. Supports hierarchical paths (e.g., `folder/subfolder/file.txt`). |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type    | Description                                                                 |
|---------------------|-----------|---------|-----------------------------------------------------------------------------|
| ttl_seconds         | no        | Integer | Optional time-to-live in seconds. If not specified, the object persists indefinitely. |

#### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String               | The Momento auth token, in string format, is used for authentication/authorization of the request. |
| mo-meta-*        | no        | String               | Custom metadata headers. Any header prefixed with `mo-meta-` will be stored with the object and returned on GET. The prefix is stripped when storing (e.g., `mo-meta-content-type` is stored as `content-type`). |
| mo-tag-*         | no        | String               | S3 object tag headers. Any header prefixed with `mo-tag-` will be attached to the S3 object as a tag. The prefix is stripped when storing (e.g., `mo-tag-env` is stored as the tag key `env`). Tags are not returned on GET. |

:::info[Blocked Metadata Headers]

For security reasons, certain `mo-meta-*` header names are blocked and will be ignored:
- HTTP protocol headers: `content-length`, `transfer-encoding`, `connection`, `keep-alive`, `upgrade`, `trailer`, `te`
- Security headers: `set-cookie`, `cookie`, `authorization`, `www-authenticate`, `content-security-policy`, `x-frame-options`, `strict-transport-security`
- CORS headers: `access-control-allow-origin`, `access-control-allow-credentials`, etc.
- Proxy headers: `host`, `x-forwarded-for`, `x-real-ip`, `via`, etc.

:::

:::info[S3 Object Tag Constraints]

`mo-tag-*` headers are subject to S3 tag constraints. Requests that violate these constraints will be rejected with a `400 Bad Request` response:
- Maximum of **10 tags** per object.
- Tag keys must be between **1 and 128 characters**.
- Tag values must be between **0 and 256 characters**.
- Tag keys may not use the reserved prefix `aws:`.
- Both keys and values may only contain Unicode letters, digits, whitespace, and the following characters: `_ . : / = + - @`

:::

### Response

#### Success

*Status Code: 204 No Content*

- The object was successfully stored.

#### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento API key passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento API key passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 404 Not Found*
- "Store Not Found" indicates that the specified object store does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Get Object

Retrieves an object from the specified object store.

### Request

- Path: /objectstore/\{storeName\}/\{key\}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                                                                           |
|---------------------|-----------|-----------------|----------------------------------------------------------------------------------------|
| storeName           | yes       | URL-safe string | The name of the object store to operate on.                                            |
| key                 | yes       | String          | The key for the object. Supports hierarchical paths (e.g., `folder/subfolder/file.txt`). |

#### Headers

| Header&nbsp;name | Required? | Type   | Description                                                                                        |
|------------------|-----------|--------|----------------------------------------------------------------------------------------------------|
| Authorization    | yes       | String | The Momento auth token, in string format, is used for authentication/authorization of the request. |
| read-concern     | no        | String | Controls cache read behavior. Values: `balanced` (default) - reads from an AZ-aligned cache node if available; `consistent` - always reads from the primary cache node. |

:::note
Regardless of the `read-concern` value, Momento always falls back to S3 if the object is not found in the cache.
:::

### Response

#### Hit

*Status Code: 200 OK*

- Body: The binary data stored at the specified key.
- Any custom metadata headers stored with the object will be returned as response headers.

#### Miss

*Status Code: 404 Not Found*

- "Object not found." indicates that the key was not present in the object store.

#### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the body of the message for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 404 Not Found*
- "Store Not Found" indicates that the specified object store does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the body of the message for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

---

# Examples


## Control Plane Examples

### Create or Update Object Store

Create or update an object store:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "storage_config": {
      "s3": {
        "bucket_name": "my-s3-bucket",
        "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoObjectStoreRole"
      }
    },
    "cache_config": {
      "valkey_cluster": {
        "cluster_name": "my-valkey-cluster"
      }
    }
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store"
```

Create an object store with access logging enabled:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "storage_config": {
      "s3": {
        "bucket_name": "my-s3-bucket",
        "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoObjectStoreRole"
      }
    },
    "cache_config": {
      "valkey_cluster": {
        "cluster_name": "my-valkey-cluster"
      }
    },
    "access_logging_config": {
      "cloudwatch": {
        "log_group_name": "/momento/objectstore/my-store",
        "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoCloudWatchRole",
        "region": "us-east-1"
      }
    }
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store"
```

Create an object store with CloudWatch metrics enabled:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "storage_config": {
      "s3": {
        "bucket_name": "my-s3-bucket",
        "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoObjectStoreRole"
      }
    },
    "cache_config": {
      "valkey_cluster": {
        "cluster_name": "my-valkey-cluster"
      }
    },
    "metrics_config": {
      "cloudwatch": {
        "iam_role_arn": "arn:aws:iam::123456789012:role/MomentoMetricsRole",
        "region": "us-east-1"
      }
    }
  }' \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store"
```

### List Object Stores

List all object stores:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore"
```

### Describe Object Store

Get details of an object store:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store"
```

### Delete Object Store

Delete an object store:

```bash
curl -X DELETE -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store"
```

## Data Plane Examples

### Put Object

Store a file at the path `images/logo.png` in the *my-store* object store:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @logo.png \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store/images/logo.png"
```

Store with a TTL of 1 hour (3600 seconds):

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @logo.png \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store/images/logo.png?ttl_seconds=3600"
```

Store with custom metadata:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/octet-stream" \
  -H "mo-meta-content-type: image/png" \
  -H "mo-meta-cache-control: max-age=86400" \
  --data-binary @logo.png \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store/images/logo.png"
```

Store with S3 object tags:

```bash
curl -X PUT -H "Authorization: <token>" \
  -H "Content-Type: application/octet-stream" \
  -H "mo-tag-env: prod" \
  -H "mo-tag-team: infra" \
  --data-binary @logo.png \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store/images/logo.png"
```

### Get Object

Retrieve an object at the path `images/logo.png` from the *my-store* object store:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store/images/logo.png" \
  --output logo.png
```

---

# Access Log Format

When access logging is enabled, Momento delivers logs to your CloudWatch Log Group. Each log entry is a JSON object with the following fields:

```json
{
  "timestamp": 1707580800000,
  "operation": "read",
  "key": "images/logo.png",
  "store": "my-store",
  "status": "cache_hit",
  "size": 15234,
  "http_status_code": 200
}
```

| Field | Type | Description |
|-------|------|-------------|
| timestamp | Integer | Unix timestamp in milliseconds when the operation occurred. |
| operation | String | The type of operation: `read` or `write`. |
| key | String | The object key that was accessed. |
| store | String | The name of the object store. |
| status | String | The result of the operation (see below). |
| size | Integer | The size of the object in bytes. Only present for successful operations. |
| http_status_code | Integer | The HTTP status code returned for the operation (e.g. `200`, `204`, `403`, `404`, `500`). |

### Status Values

| Status | Description |
|--------|-------------|
| `ok` | Write operation completed successfully. |
| `cache_hit` | Read operation found the object in the cache. |
| `storage_hit` | Read operation found the object in S3 storage (cache miss). |
| `miss` | Read operation did not find the object. |
| `bad_request` | Write operation was rejected due to invalid request parameters (e.g. invalid `mo-tag-*` headers). |
| `authz_error` | The operation was rejected due to insufficient permissions. |
| `internal_error` | The operation failed due to an internal error. |

---

# CloudWatch Metrics

When CloudWatch metrics are enabled for an object store, Momento publishes operational metrics directly to your AWS CloudWatch account. These metrics provide visibility into your object store's request patterns, data transfer, and latency.

## Namespace

All Object Store metrics are published under the CloudWatch namespace:

```
Momento/ObjectStore
```

## Dimensions

| Dimension | Description |
|-----------|-------------|
| `ObjectStore` | The name of the object store. |
| `AccountId` | Your Momento account ID. |
| `Endpoint` | The Momento endpoint serving the request. |
| `Api` | The API operation: `GetObject` or `PutObject`. |
| `Result` | The result of the operation (only present in per-result metrics, see below). |
| `HttpStatusCode` | The HTTP status code returned for the operation (only present in per-result metrics, see below). |

## Metrics

Metrics are emitted in two variants:

### Aggregate metrics (without `Result` dimension)

These metrics are emitted for every request, regardless of outcome. They include:

| Metric | Unit | Description |
|--------|------|-------------|
| `Requests` | Count | Total number of requests. |
| `Bytes` | Bytes | Total bytes transferred (object size for PutObject, response size for GetObject). |
| `Latency` | Microseconds | End-to-end request latency. |

### Per-result metrics (with `Result` and `HttpStatusCode` dimensions)

These metrics are emitted with `Result` and `HttpStatusCode` dimensions, allowing you to filter and alarm on specific outcomes. Only the `Requests` metric is emitted per result.

| Metric | Unit | Description |
|--------|------|-------------|
| `Requests` | Count | Number of requests with this specific result. |

### Result Values

#### GetObject

| Result | HttpStatusCode | Description |
|--------|----------------|-------------|
| `CacheHit` | `200` | Object was found in the cache. |
| `CacheHitExpired` | `404` | Object was found in the cache but had expired. |
| `Miss` | `404` | Object was not found in either cache or storage. |
| `StorageHit` | `200` | Object was not in cache but was found in S3 storage. |
| `StorageHitExpired` | `404` | Object was found in S3 storage but had expired. |
| `InternalError` | `500` | The request failed due to an internal error. |
| `AuthorizationError` | `403` | The request was rejected due to insufficient permissions. |

#### PutObject

| Result | HttpStatusCode | Description |
|--------|----------------|-------------|
| `Ok` | `204` | Object was successfully stored. |
| `InternalError` | `500` | The request failed due to an internal error. |
| `AuthorizationError` | `403` | The request was rejected due to insufficient permissions. |
| `BadRequest` | `400` | The request was rejected due to invalid `mo-tag-*` headers. |

## Example CloudWatch Queries

To view total request count for GetObject operations:

- Namespace: `Momento/ObjectStore`
- Metric: `Requests`
- Dimensions: `Api = GetObject` (without `Result` dimension)
- Statistic: `Sum`

To view cache hit rate:

- Compare `Requests` with `Result = CacheHit` against total `Requests` for `Api = GetObject`.

---

# Appendix: S3 IAM Role Setup

To allow Momento to access your S3 bucket, you need to create an IAM role that Momento can assume. This role must trust Momento's AWS account and have permissions to access your S3 bucket.

## CloudFormation Template

Below is a CloudFormation template that creates the required IAM role:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Description": "IAM Role that allows Momento to access your S3 bucket",
  "Parameters": {
    "S3BucketName": {
      "Type": "String",
      "Description": "The name of the S3 bucket Momento will access"
    }
  },
  "Resources": {
    "MomentoS3IamRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "RoleName": "MomentoObjectStoreRole",
        "Description": "IAM Role that allows Momento to access S3",
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "AWS": "arn:aws:iam::168253909317:root"
              },
              "Action": "sts:AssumeRole",
              "Condition": {
                "StringEquals": {
                  "sts:ExternalId": "<YOUR_ACCOUNT_ID>/objectstore/<YOUR_STORE_NAME>"
                }
              }
            }
          ]
        },
        "Policies": [
          {
            "PolicyName": "MomentoS3Access",
            "PolicyDocument": {
              "Version": "2012-10-17",
              "Statement": [
                {
                  "Sid": "AllowS3BucketAccess",
                  "Effect": "Allow",
                  "Action": [
                    "s3:GetObject",
                    "s3:PutObject",
                    "s3:DeleteObject",
                    "s3:ListBucket",
                    "s3:PutObjectTagging"
                  ],
                  "Resource": [
                    { "Fn::Sub": "arn:aws:s3:::${S3BucketName}" },
                    { "Fn::Sub": "arn:aws:s3:::${S3BucketName}/*" }
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  },
  "Outputs": {
    "RoleArn": {
      "Description": "The ARN of the IAM role to use when creating the object store",
      "Value": { "Fn::GetAtt": ["MomentoS3IamRole", "Arn"] }
    }
  }
}
```

## Deploying the Template

You can deploy this template using the AWS CLI:

```bash
aws cloudformation create-stack \
  --stack-name momento-object-store-role \
  --template-body file://momento-iam-role.json \
  --parameters ParameterKey=S3BucketName,ParameterValue=my-s3-bucket \
  --capabilities CAPABILITY_NAMED_IAM
```

After the stack is created, retrieve the role ARN:

```bash
aws cloudformation describe-stacks \
  --stack-name momento-object-store-role \
  --query "Stacks[0].Outputs[?OutputKey=='RoleArn'].OutputValue" \
  --output text
```

Use this ARN as the `iam_role_arn` when creating your object store.

## Trust Policy

The key component is the trust policy that allows Momento's AWS account (`168253909317`) to assume this role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::168253909317:root"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "<YOUR_ACCOUNT_ID>/objectstore/<YOUR_STORE_NAME>"
        }
      }
    }
  ]
}
```

Replace `<YOUR_ACCOUNT_ID>` with your Momento account ID and `<YOUR_STORE_NAME>` with the name of your object store. The external ID format is `{account_id}/objectstore/{store_name}`.

## Required S3 Permissions

The role needs the following S3 permissions:

| Permission | Purpose |
|------------|---------|
| `s3:GetObject` | Read objects from the bucket |
| `s3:PutObject` | Write objects to the bucket |
| `s3:DeleteObject` | Delete objects from the bucket |
| `s3:ListBucket` | List objects in the bucket |

:::tip[Security Best Practice]

Always scope the IAM role permissions to the specific S3 bucket you want Momento to access. Avoid using `Resource: "*"` in production environments.

:::

---

# Appendix: CloudWatch IAM Role Setup

To enable access logging, you need to create an IAM role that allows Momento to write logs to your CloudWatch Log Group. The log group must already exist before creating the object store.

## CloudFormation Template

Below is a CloudFormation template that creates the required IAM role for CloudWatch access:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Description": "IAM Role that allows Momento to write access logs to CloudWatch",
  "Parameters": {
    "LogGroupName": {
      "Type": "String",
      "Description": "The CloudWatch Log Group name where Momento will write access logs"
    }
  },
  "Resources": {
    "MomentoCloudWatchIamRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "RoleName": "MomentoCloudWatchRole",
        "Description": "IAM Role that allows Momento to write access logs to CloudWatch",
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "AWS": "arn:aws:iam::168253909317:root"
              },
              "Action": "sts:AssumeRole",
              "Condition": {
                "StringEquals": {
                  "sts:ExternalId": "<YOUR_ACCOUNT_ID>/objectstore/<YOUR_STORE_NAME>"
                }
              }
            }
          ]
        },
        "Policies": [
          {
            "PolicyName": "MomentoCloudWatchAccess",
            "PolicyDocument": {
              "Version": "2012-10-17",
              "Statement": [
                {
                  "Sid": "AllowLogGroupAccess",
                  "Effect": "Allow",
                  "Action": [
                    "logs:DescribeLogGroups"
                  ],
                  "Resource": "*"
                },
                {
                  "Sid": "AllowLogStreamAccess",
                  "Effect": "Allow",
                  "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                  ],
                  "Resource": { "Fn::Sub": "arn:aws:logs:*:*:log-group:${LogGroupName}:*" }
                }
              ]
            }
          }
        ]
      }
    }
  },
  "Outputs": {
    "RoleArn": {
      "Description": "The ARN of the IAM role to use for access logging",
      "Value": { "Fn::GetAtt": ["MomentoCloudWatchIamRole", "Arn"] }
    }
  }
}
```

## Deploying the Template

First, create the CloudWatch Log Group:

```bash
aws logs create-log-group --log-group-name /momento/objectstore/my-store
```

Then deploy the CloudFormation template:

```bash
aws cloudformation create-stack \
  --stack-name momento-cloudwatch-role \
  --template-body file://momento-cloudwatch-role.json \
  --parameters ParameterKey=LogGroupName,ParameterValue=/momento/objectstore/my-store \
  --capabilities CAPABILITY_NAMED_IAM
```

After the stack is created, retrieve the role ARN:

```bash
aws cloudformation describe-stacks \
  --stack-name momento-cloudwatch-role \
  --query "Stacks[0].Outputs[?OutputKey=='RoleArn'].OutputValue" \
  --output text
```

Use this ARN as the `access_logging_config.cloudwatch.iam_role_arn` when creating your object store.

## Required CloudWatch Permissions

The role needs the following CloudWatch Logs permissions:

| Permission | Purpose |
|------------|---------|
| `logs:DescribeLogGroups` | Verify the log group exists |
| `logs:CreateLogStream` | Create log streams for access logs |
| `logs:PutLogEvents` | Write access log entries |

:::tip[Log Retention]

Consider setting a retention policy on your CloudWatch Log Group to manage storage costs:

```bash
aws logs put-retention-policy \
  --log-group-name /momento/objectstore/my-store \
  --retention-in-days 30
```

:::

---

# Appendix: CloudWatch Metrics IAM Role Setup

To enable CloudWatch metrics delivery, you need to create an IAM role that allows Momento to publish metrics to your CloudWatch account.

## CloudFormation Template

Below is a CloudFormation template that creates the required IAM role for CloudWatch metrics:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Description": "IAM Role that allows Momento to publish Object Store metrics to CloudWatch",
  "Resources": {
    "MomentoMetricsIamRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "RoleName": "MomentoMetricsRole",
        "Description": "IAM Role that allows Momento to publish Object Store metrics to CloudWatch",
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "AWS": "arn:aws:iam::168253909317:root"
              },
              "Action": "sts:AssumeRole",
              "Condition": {
                "StringEquals": {
                  "sts:ExternalId": "<YOUR_ACCOUNT_ID>/objectstore/<YOUR_STORE_NAME>"
                }
              }
            }
          ]
        },
        "Policies": [
          {
            "PolicyName": "MomentoCloudWatchMetricsAccess",
            "PolicyDocument": {
              "Version": "2012-10-17",
              "Statement": [
                {
                  "Sid": "AllowPutMetricData",
                  "Effect": "Allow",
                  "Action": [
                    "cloudwatch:PutMetricData"
                  ],
                  "Resource": "*",
                  "Condition": {
                    "StringEquals": {
                      "cloudwatch:namespace": "Momento/ObjectStore"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  },
  "Outputs": {
    "RoleArn": {
      "Description": "The ARN of the IAM role to use for CloudWatch metrics",
      "Value": { "Fn::GetAtt": ["MomentoMetricsIamRole", "Arn"] }
    }
  }
}
```

## Deploying the Template

Deploy the CloudFormation template:

```bash
aws cloudformation create-stack \
  --stack-name momento-metrics-role \
  --template-body file://momento-metrics-role.json \
  --capabilities CAPABILITY_NAMED_IAM
```

After the stack is created, retrieve the role ARN:

```bash
aws cloudformation describe-stacks \
  --stack-name momento-metrics-role \
  --query "Stacks[0].Outputs[?OutputKey=='RoleArn'].OutputValue" \
  --output text
```

Use this ARN as the `metrics_config.cloudwatch.iam_role_arn` when creating your object store.

## External ID

The trust policy includes an `sts:ExternalId` condition for security. Replace `<YOUR_ACCOUNT_ID>` with your Momento account ID and `<YOUR_STORE_NAME>` with the name of your object store. The external ID format is:

```
{account_id}/objectstore/{store_name}
```

:::caution

If you have multiple object stores, you will need to either create separate IAM roles for each store or use a wildcard in the external ID condition. For example:

```json
"sts:ExternalId": "<YOUR_ACCOUNT_ID>/objectstore/*"
```

:::

## Required CloudWatch Permissions

The role needs the following CloudWatch permissions:

| Permission | Purpose |
|------------|---------|
| `cloudwatch:PutMetricData` | Publish metrics to CloudWatch |

:::tip[Security Best Practice]

The template uses a namespace condition (`cloudwatch:namespace: "Momento/ObjectStore"`) to ensure the role can only publish metrics to the `Momento/ObjectStore` namespace. This limits the scope of the permission.

:::
