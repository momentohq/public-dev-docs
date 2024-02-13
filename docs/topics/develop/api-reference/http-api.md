---
sidebar_position: 7
title: HTTP API for Momento Topics
sidebar_label: HTTP API
description: Discover the HTTP API for edge computing services to access pub/sub services.
---

# HTTP API Reference for Momento Topics

Momento provides an HTTP API interface for your applications that can’t use our [SDKs](./../) or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like [Cloudflare Workers](https://workers.cloudflare.com/), [Fastly Compute@Edge](https://www.fastly.com/products/edge-compute), etm. this API is for you. Be aware that most other applications should likely use [Momento’s SDK clients](./../).

You can also view the Open API Specification in our [public workspace in Postman](https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation).

:::note

This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use.

:::

## Authentication

For each connection, you will need a Momento auth token generated via the [Momento console](https://console.gomomento.com/tokens) or a [token "vending machine" microservice you host](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine). Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources.

## Regions

To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache.

|   | AWS Region     | Endpoints                                                    |
|---|----------------|--------------------------------------------------------------|
| 1 | us-west-2      | https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com    |
| 2 | us-east-1      | https://api.cache.cell-us-east-1-1.prod.a.momentohq.com      |
| 3 | us-east-2      | https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com    |
| 4 | ap-northeast-1 | https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com |
| 5 | eu-west-1      | https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com    |
| 6 | ap-south-1     | https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com   |


If you do not see a Region you require, let’s talk. Please contact [Support](mailto:support@momentohq.com).

## Publish

Publishes a message to a topic.

### Request

- Path: /topics/{cacheName}/{topicName}
- HTTP Method: POST

#### Body

- Content-Type: octet-stream
- The body of the request should contain the binary value to be published to the topic.

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | The name of the cache containing the topic. |
| topicName           | yes       | URL-safe string | Name of the topic to publish to.            |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                | Description                                                                                         |
|---------------------|-----------|---------------------|-----------------------------------------------------------------------------------------------------|
| token               | no**     | URL-safe&nbsp;string | The Momento auth token, in string format, to be used for authentication/authorization of the request.|

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

#### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no**     | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. |

** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

## Responses

### Success

*Status Code: 204 No Content*

- The message was successfully published to the provided topic

### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*
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

### Publish

Below is an example that publishes the value `hello world!` to the *example* topic in the *my-cache* cache in the *us-east-1* region.

Token provided in query parameter:

`curl -X POST -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>"`

Token provided as *Authorization* header:

`curl -X POST -H "Authorization: <token>" -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"`
