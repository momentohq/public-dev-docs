---
sidebar_position: 7
title: REST API
sidebar_label: REST API
description: Discover the REST API for edge computing services to access serverless caching and pub/sub services.
---

# REST API for caching and edge compute services

<img src="/img/rest-api.jpg" width="90%" alt="a picture of abstract shapes as building and nodes of data connecting them at high speed" />

Momento provides a RESTful HTTP API interface for your applications that can’t use our [SDKs](/develop). For example, when deploying to edge compute services like [Cloudflare Workers](https://workers.cloudflare.com/), [Fastly Compute@Edge](https://www.fastly.com/products/edge-computeutm_source=Momento-Documentation), etm. this API is for you. Be aware that most other applications should likely use [Momento’s SDK clients](/develop).

Queries are executed by sending HTTP requests to the `https://<environment>/cache/{yourCacheName}` endpoint.

:::note

This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use.

:::

## Authentication

For each connection, you will need a Momento auth token generated via the [Momento console](https://console.gomomento.com/tokens) or a [token "vending machine" microservice you host](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine). Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources. 

## Access

For access to the HTTP API, use one of the following endpoints in the region your caches are in and you have a Momento auth token for.

|   | AWS Region     	| Endpoints                                        	|
|---|----------------|------------------------------------------------------|
| 1 | us-west-2  	| api.cache.cell-4-us-west-2-1.prod.a.momentohq.com	|
| 2 | us-east-1  	| api.cache.cell-us-east-1-1.prod.a.momentohq.com  	|
| 3 | ap-northeast-1 | api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com |
| 4 | eu-west-1  	| api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com	|
| 5 | ap-south-1 	| api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com   |

If you do not see a Region you require, let’s discuss. Please contact [Support](mailto:support@momentohq.com).

## Get Method
Gets a scalar value from a cache.
### Request

- Path: /cache/{cacheName}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required?           | Type            | Description |
| -------------- |---------------------|-----------------|----------------------------|
| cacheName | yes | URL-safe string | The name of the cache to operate on. |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description           |
|---------------|-----------|------|------------------|
| key           | no        | URL-safe&nbsp;string                         | The key to retrieve from the cache. Must specify either this parameter or `key_base64`.|
| key_base64    | no        | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | The key to retrieve from the cache. Must specify either this parameter or `key_base64`.|
| token         | no        | URL-safe string                              | The Momento auth token to be used for authentication/authorization of the request. Must be provided either here or as the `authorization` header in the HTTP call. |

### Response
#### Hit
*Status Code: 200 OK*

- Content-Type: octet-stream
- Body: The binary value stored at the specified key.

#### Miss
*Status Code: 404 Not Found*

- "Key Not Found" indicates that the key was not present in the cache, while "Cache Not Found" indicates that the specified cache does not exist.

#### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the body of the message for further details.

*Status Code: 401 Unauthorized*

- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*

- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 429 Too Many Requests*

- This error type typically indicates that account limits were exceeded. See the body of the message for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*

- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Set Method
Sets a scalar value in a cache.
### Request
- Path: /cache/{cacheName}
- HTTP Method: PUT

#### Body
- Content-Type: octet-stream
- The body of the request should contain the binary value to be stored in the cache at the specified key.

#### Path Parameters
| Parameter&nbsp;name | Required?           | Type            | Description     |
| --------------- |---------------------|-----------------|-----------------|
| cacheName | yes | URL-safe string | The name of the cache to operate on. |

#### Query Parameters

| Parameter&nbsp;name | Required?   | Type                                         | Description                                                                                                                                                                           |
|---------------|-------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key           | no          | URL-safe&nbsp;string                         | The key to retrieve from the cache. Must specify either this parameter or `key_base64`.                                                                                               |
| key_base64    | no          | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | The key to retrieve from the cache. Must specify either this parameter or `key_base64`.                                                                                               |
| token         | no          | URL-safe&nbsp;string                         | The Momento auth token, in string format, to be used for authentication/authorization of the request. Must be provided either here or as the `authorization` header in the HTTP call. |
| ttl_seconds   | yes | Integer                                      | The TTL to be set on the key, in seconds. For more on TTL, see  [Expire Data with Time-to-Live](/learn/how-it-works/expire-data-with-ttl). |

#### Header Parameters
| Parameter&nbsp;name | Required?                | Type                 | Description                                                                                                                                                        |
| -------------- |--------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| authorization | yes | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. Must be provided either here or as the `token` query parameter. |

### Response
#### Ok

*Status Code: 204 No Content*

- The key-value pair was stored in the cache, but no content was returned (by design).

#### Error
*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*

- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*

- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.*Status Code: 401 Unauthorized*

- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*

- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Delete Method
Deletes a scalar value from a cache.
### Request

- Path: /cache/{cacheName}
- HTTP Method: DELETE
#### Path Parameters
| Parameter&nbsp;name | Required? | Type            | Description     |
| --------------- |-------|-----------------|-----------------|
| cacheName | yes | URL-safe string | The name of the cache to operate on. |

#### Query Parameters

| Parameter&nbsp;name | Required?               | Type                                         | Description     |
|---------------|-------------------------|----------------------------------------------|--------------------------------------|
| key           | no                      | URL-safe&nbsp;string                         | The key to retrieve from the cache. Must specify either this parameter or `key_base64`.|
| key_base64    | no                      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | The key to retrieve from the cache. Must specify either this parameter or `key_base64`.|
| token         | no | URL-safe&nbsp;string                         | The Momento auth token, in string format, to be used for authentication/authorization of the request. Must be provided either here or as the `authorization` header in the HTTP call. |

#### Header Parameters
| Parameter&nbsp;name | Required?               | Type                 | Description                                                                                                                                                        |
| -------------- |-------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| authorization | no | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. Must be provided either here or as the `token` query parameter. |

### Response
#### Ok

*Status Code: 204 No Content*

- The key-value pair was stored in the cache, but no content was returned (by design).

#### Error
*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*

- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*

- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.*Status Code: 401 Unauthorized*

- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*

- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Examples
### Put
URL-safe Key, token as query parameter:

`curl -X PUT -d 'example value' "https://api.cache.<endpoint>/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>"`

Base64 Key, token as header:
`curl -X PUT -H "authorization: <token>" -d 'example value' "https://api.cache.<endpoint>/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"`
### Get
URL-safe key, token as query parameter

`curl "https://api.cache.<endpoint>/cache/default-cache?key=example_key&token=<token>"`

Base64 Key, token as header:

`curl -H "authorization: <token>” "https://api.cache.<endpoint>/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`
### Delete
URL-safe key, token as query parameter

`curl -X DELETE "https://api.cache.<endpoint>/cache/default-cache?key=example_key&token=<token>"`

Base64 Key, token as header:

`curl -X DELETE -H "authorization: <token>" "https://api.cache.<endpoint>/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`
