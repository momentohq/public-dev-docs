---
sidebar_position: 7
title: HTTP API for Momento Topics
sidebar_label: HTTP API
description: Discover the HTTP API for edge computing services to access pub/sub services.
---

# HTTP API Reference for Momento Topics

Momento provides an HTTP API interface for your applications that can’t use our [SDKs](../) or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like [Cloudflare Workers](https://workers.cloudflare.com/), [Fastly Compute@Edge](https://www.fastly.com/products/edge-compute), etm. this API is for you. Be aware that most other applications should likely use [Momento’s SDK clients](../).

You can also view the Open API Specification in our [public workspace in Postman](https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00).

:::tip[Info]

The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, [click here](/platform/regions).

:::

## Authentication

Each request requires an API key or Momento auth token generated via the [Momento console](https://console.gomomento.com/tokens) or a [token "vending machine" microservice you host](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine). Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources.

The token may be provided in one of two places in the request:

* An `Authorization` header
* A `token` query parameter

:::info[Tip]

If both the header and query parameter are provided, *the request will fail with a `400 Bad Request` indicating only one value must be set*.

:::

## Publish

Publishes a message to a topic.

### Request

- Path: /topics/\{cacheName\}/\{topicName\}
- HTTP Method: POST

#### Path parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | The name of the cache containing the topic. |
| topicName           | yes       | URL-safe string | Name of the topic to publish to.            |

#### Query parameters

| Parameter&nbsp;name | Required? | Type                 | Description                                                                                           |
|---------------------|-----------|----------------------|-------------------------------------------------------------------------------------------------------|
| `token`             | no**      | URL-safe&nbsp;string | The Momento auth token, in string format, to be used for authentication/authorization of the request. |

#### Headers

| Header&nbsp;name | Required? | Description                                                                                                          |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| `Authorization`  | no**      | The Momento auth token, in string format, is used for authentication/authorization of the request.                   |
| `Content-Type`   | yes       | To publish plain text data (UTF-8), specify `text/plain`. To publish binary data, specify `application/octet-stream` |

#### Body

The body of the HTTP POST request should contain the value that you wish to publish to the topic. You may publish
either text data, or binary data. To specify which type of data you are publishing, use the `Content-Type` header, as
documented in the [Headers](#headers) section above.

### Responses

#### Success

*Status code: 204 No Content*

- The message was successfully published to the provided topic

#### Error

*Status code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache does not exist.

*Status code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

### Examples

Below is an example that publishes the value `hello world!` to the *example* topic in the *my-cache* cache in the *us-east-1* region.

#### Publish with token query parameter

`curl -X POST -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>"`

#### Publish with Authorization header

`curl -X POST -H "Authorization: <token>" -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"`

## Subscribe (long-poll)

Listen for new messages on a topic.  The HTTP GET blocks until at least one message (or discontinuity notice) is available.

### Request

- Path: /topics/\{cacheName\}/\{topicName\}
- HTTP Method: GET

#### Path parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | Cache that owns the topic. |
| topicName           | yes       | URL-safe string | Topic to subscribe to.          |

#### Query parameters

| Parameter&nbsp;name | Required? | Type                 | Description                                                                                           |
|---------------------|-----------|----------------------|-------------------------------------------------------------------------------------------------------|
| `token`             | no**      | URL-safe string | Momento auth token (if not using the header).  |
| `sequence_number`   | no        | Integer         | The next sequence you expect, typically lastReceived + 1. Use 0 on the first request. |
| `sequence_page`     | no        | Integer         | Identifies the instance of the topic. Pass 0 on your first request to discover the current page, then return the value back on subsequent calls. |

:::tip[About `sequence_page`]

A topic can be evicted from memory or recreated after maintenance. The sequence page identifies two instances that both contain message 42. Always send the most recent `sequence_page` you received; if you’re not sure, set it to 0 and the server will return the correct value.

:::

#### Headers

| Header&nbsp;name | Required? | Description                                                                                                          |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| `Authorization`  | no**      | The Momento auth token, in string format, is used for authentication/authorization of the request.                   |

#### Responses

### Success

*Status code: 200 OK*

- The subscription was successful and messages were returned. The response will contain a JSON object with the message(s) and their sequence numbers. If there was a gap in the message sequence, a discontinuity message will be included.

### Error

*Status code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache or topic does not exist.

*Status code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

### Success response

*Status - 200 OK*

```json
{
  "items": [
    {
      "item": {
        "sequence_page": 3,
        "topic_sequence_number": 0,
        "value": { "text": "hello world" }
      }
    }
  ]
}
```
If the stream is not contiguous, e.g. because the sequence page changed, you'll receive a discontinuity element:

```json
{
  "items": [
    {
      "discontinuity": {
        "last_topic_sequence": 100,
        "new_topic_sequence": 104,
        "new_sequence_page": 1748358253
      }
    },
    {
      "item": {
        "topic_sequence_number": 104,
        "sequence_page": 1748358253,
        "value": {
          "text": "hello world"
        }
      }
    }
  ]
}

```
