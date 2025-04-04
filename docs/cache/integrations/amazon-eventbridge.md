---
sidebar_position: 11
sidebar_label: Amazon EventBridge
title: Momento + Amazon EventBridge
description: Trigger async events in Momento directly with Amazon EventBridge!
---

If you build event-driven architectures in AWS, you're likely familiar with [Amazon EventBridge](https://aws.amazon.com/eventbridge/). This serverless event bus service helps you filter, transform, route, and deliver events with robust error handling and high availability. Wouldn't it be great if you could use it directly with Momento? Good news, you can!

:::tip

On this page you'll learn some general-purpose patterns for connecting EventBridge to Momento.

For a more concrete example, check out our [DynamoDB-Momento EventBridge Demo](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/aws/eventbridge)!
This project shows how to create a write-through cache in Momento using DynamoDB Streams and AWS EventBridge.
With this app, you can create, update, and delete items in a DynamoDB table, and see these changes reflected in the cache/topic in real-time.

:::

Using the Momento [HTTP API](/cache/develop/api-reference/http-api.md) and [Amazon EventBridge API Destinations](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html), you can trigger asynchronous events with a simple `PutEvents` call in your workflows. Here's how it works:

![Diagram of compute resources triggering an event that calls Momento](@site/static/img/eventbridge_destinations.png)

1. A compute service calls the `PutEvents` API for EventBridge
2. EventBridge routes the event to qualifying [rules](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html) based on the content of the event
3. The qualifying rule will invoke an API destination
4. The API destination looks up the auth token from [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
5. The event payload is transformed and calls the Momento HTTP API

Given the event-based nature of this workflow, *it is an asynchronous process* and your code will not wait for completion before continuing. If something goes wrong or the API returns an error, the message will be delivered to a [dead letter queue](https://aws.amazon.com/what-is/dead-letter-queue/).

For the tl;dr, you can deploy the EventBridge resources directly into your account by clicking this button [![Launch stack button](@site/static/img/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml)

## Deploying to AWS

When you hit the *Launch stack* button above, it will open a tab to the CloudFormation console in AWS. The screen will prompt you for your Momento auth token, which can be created via the [Momento Console](https://console.gomomento.com/tokens). You can create a super user token in the region you want to deploy this stack into. Once you generate your token, come back to the console and fill in the property. This will be stored securely in Secrets Manager on your behalf.

You optionally can provide the EventBridge event bus name that will rules will trigger from. It automatically fills in the *default* event bus, but you can use any existing event bus you'd like. The deployment will fail if you do not provide a valid bus name.

![CloudFormation UI with deployment parameters configured](@site/static/img/eb-destination-ui.png)

With the two parameters filled out, you can hit *Create stack* and the resources will be deployed automatically for you, optimized for your deployment region. *Wondering what that means?* Momento, like AWS, is region-based, and your auth tokens target a specific region. For the HTTP API, this means you must [hit a different base URL](/platform/regions) depending on the region you wish to use. The quick start we've provided will determine the appropriate base URL upon deployment so you don't have to think about it 👍

This also means the integration will only work in the Momento-supported AWS Regions:

* us-east-1
* us-west-2
* ap-northeast-1
* ap-south-1
* eu-west-1

### Resources

The deployed stack will create the following resources in your AWS account:

* 1x [EventBridge Connection](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_Connection.html) - for storing connection info to Momento
* 3x EventBridge API Destinations - *Cache Item Set*, *Cache Item Delete*, *Topic Publish*
* 3x EventBridge Rules - for triggering the API calls
* 1x IAM Role - to allow EventBridge to invoke the destinations when the rules are triggered
* 1x SQS Queue - for Dead Letter Queue on failed delivery

If you wish to see the raw CloudFormation template, [click here](https://momento-developers.s3.amazonaws.com/api-destinations.yaml).

## Triggering the API calls

We currently support three API calls with this integration, *Cache Item Set*, *Cache Item Delete*, and *Topic Publish*. To invoke one of these rules, you must put an event on the configured event bus.

### Setting a cache item

To set a cache item, publish an event with the following information:

**Detail Type**: *cacheSet*

**Payload**
```jsonc
{
  "cacheName": "<your cache name>",
  "key": "<cache item key>",
  "key_base64": "<cache item key base-64 encoded>",
  "message": "<value to save to the cache item>",
  "ttl": 60 // time to live in seconds
}
```

All values are required and the name of the cache must be a valid, existing cache available in your account. If you don't have a cache, you can [create one here](https://console.gomomento.com).

*NOTE -* The `key` and `key_base64` properties are mutually exclusive. If you provide both (or neither) your cache item will not be set.

### Deleting a cache item

Cache items will expire automatically but in the event when you need to delete one manually, you can use the following event:

**Detail Type**: *cacheDelete*

**Payload**
```jsonc
{
  "cacheName": "<your cache name>",
  "key": "<cache item key>",
  "key_base64": "<cache item key base-64 encoded>"
}
```

Once again, the `key` and `key_base64` properties are mutually exclusive. Providing both will result in an error and your cache item not being deleted.

### Publishing to a topic

You can publish to any topic (unless restricted by your provided auth token) with the following event:

**Detail Type**: *topicPublish*

**Payload**

```jsonc
{
  "cacheName": "<your cache name>",
  "topicName": "<your topic name>",
  "message": "<value to publish to the topic>"
}
```

## Possible use cases

The ability to update a cache item or publish to a topic via EventBridge opens up a wide range of possible use cases:

* Automatically updating or deleting your cache items from a DynamoDB stream using EventBridge pipes
* Sending status updates to end users in your user interface directly via a Step Function workflow
* Updating cache items from fan-out operations that already use EventBridge

## Example

Below is an example using the AWS SDK v3 for JavaScript to save an item in the cache via an EventBridge event on the default event bus:

```javascript
const events = new EventBridgeClient(config);
await events.send(new PutEventsCommand({
  Entries: [
    {
      Source: 'demo',
      DetailType: 'cacheSet',
      Detail: JSON.stringify({
        cacheName: 'my-cache',
        key: 'test-key',
        message: 'hello world!',
        ttl: 300
      })
    }
  ]
}));
```

When that code runs, it will publish an event to the default event bus, the *Cache Item Set* rule will trigger and invoke the API destination, then the cache item will be set in the `my-cache` cache with the value *hello world!* for 5 minutes (300 seconds).

## Try it out!

This integration will continue to grow as our HTTP API gains more and more features. You can always come back here, [deploy the stack to your AWS account](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml) and get the updated version automatically.

If you have issues deploying the stack to your account or would like support for another region, feel free to [reach out on Discord](https://discord.com/invite/3HkAKjUZGq) and the team will be happy to help you.
