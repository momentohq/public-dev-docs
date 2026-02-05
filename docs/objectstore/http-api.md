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

:::info[Blocked Metadata Headers]

For security reasons, certain metadata header names are blocked and will be ignored:
- HTTP protocol headers: `content-length`, `transfer-encoding`, `connection`, `keep-alive`, `upgrade`, `trailer`, `te`
- Security headers: `set-cookie`, `cookie`, `authorization`, `www-authenticate`, `content-security-policy`, `x-frame-options`, `strict-transport-security`
- CORS headers: `access-control-allow-origin`, `access-control-allow-credentials`, etc.
- Proxy headers: `host`, `x-forwarded-for`, `x-real-ip`, `via`, etc.

:::

### Responses

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

### Responses

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

# Control Plane API

The Control Plane API allows you to manage object stores - creating, listing, describing, and deleting them.

## Create or Update Object Store

Creates a new object store or updates an existing one with the specified configuration.

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
  }
}
```

| Field | Required? | Type | Description |
|-------|-----------|------|-------------|
| storage_config.s3.bucket_name | yes | String | The name of your S3 bucket. |
| storage_config.s3.prefix | no | String | Optional prefix path within the bucket. |
| storage_config.s3.iam_role_arn | yes | String | The ARN of the IAM role that Momento will assume to access your S3 bucket. See [Appendix: IAM Role Setup](#appendix-iam-role-setup). |
| cache_config.valkey_cluster.cluster_name | yes | String | The name of the Momento Valkey Cluster to use for caching. |

### Responses

#### Created

*Status Code: 201 Created*

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
  }
}
```

#### Updated

*Status Code: 200 OK*

- Returns the same response body as Created.

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

### Responses

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
  }
}
```

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

### Responses

#### Success

*Status Code: 200 OK*

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

### Responses

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

# Examples

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

### Get Object

Retrieve an object at the path `images/logo.png` from the *my-store* object store:

```bash
curl -H "Authorization: <token>" \
  "https://api.cache.cell-1-us-east-1-1.prod.a.momentohq.com/objectstore/my-store/images/logo.png" \
  --output logo.png
```

## Control Plane Examples

### Create Object Store

Create a new object store:

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

---

# Appendix: IAM Role Setup

To allow Momento to access your S3 bucket, you need to create an IAM role that Momento can assume. This role must trust Momento's AWS account and have permissions to access your S3 bucket.

## CloudFormation Template

Below is a CloudFormation template that creates the required IAM role:

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: IAM Role that allows Momento to access your S3 bucket

Parameters:
  S3BucketName:
    Type: String
    Description: The name of the S3 bucket Momento will access

Resources:
  MomentoS3IamRole:
    Type: AWS::IAM::Role
    Properties:
      RoleName: MomentoObjectStoreRole
      Description: IAM Role that allows Momento to access S3
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Principal:
              AWS: "arn:aws:iam::168253909317:root"
            Action: "sts:AssumeRole"
      Policies:
        - PolicyName: MomentoS3Access
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Sid: AllowS3BucketAccess
                Effect: Allow
                Action:
                  - "s3:GetObject"
                  - "s3:PutObject"
                  - "s3:DeleteObject"
                  - "s3:ListBucket"
                Resource:
                  - !Sub "arn:aws:s3:::${S3BucketName}"
                  - !Sub "arn:aws:s3:::${S3BucketName}/*"

Outputs:
  RoleArn:
    Description: The ARN of the IAM role to use when creating the object store
    Value: !GetAtt MomentoS3IamRole.Arn
```

## Deploying the Template

You can deploy this template using the AWS CLI:

```bash
aws cloudformation create-stack \
  --stack-name momento-object-store-role \
  --template-body file://momento-iam-role.yaml \
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
      "Action": "sts:AssumeRole"
    }
  ]
}
```

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
