---
sidebar_position: 6
title: Leverage Momento Topics, webhooks, and tokens in your event-driven architectures
sidebar_label: Identifying unique resources
description: Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
---

# Leverage Momento Topics, webhooks, and tokens in your event-driven architectures

With Momento [Topics](../index.md), you can subscribe to messages on a topic and publish messages to a new topic. [Webhooks](../webhooks/overview.mdx) serve as HTTP callbacks triggered in response to messages published to these topics, acting as stateless consumers. [Tokens](../../cache/develop/authentication/tokens.md) are designed to provide short-lived session tokens for users and services interacting with a system. By embedding unique identifiers (`token_id`) in each token, they ensure secure and traceable access to resources.

The key here is that you can use Topics to facilitate real-time communication between users by granting them short-lived tokens. These tokens can be embedded with user information (`token_id`), which, when messages are published, can be leveraged to access shared resources like Momento caches via webhook callbacks. For instance, you can personalize user experiences by accessing their information stored in a Momento cache by identifying the user through the `token_id`. Embedding information provides two significant advantages:
- It enhances security and prevents a user from spoofing their identity.
- It reduces data transfer costs as the user information is embedded with the token itself.

![Architecture](@site/static/img/topics/patterns/token-id-webhook.png)

## Pre-requisites
1. A public facing endpoint to receive webhook events. This endpoint must accept POST requests and be able to receive inbound calls from Momento. More detail about the structure of this event is [described here](../webhooks/overview#example-event).

## Getting Started
1. [Create a cache in the Momento console](https://console.gomomento.com/caches/create)
2. [Create a webhook](/topics/webhooks/creating-a-webhook) for the cache. Assign the webhook destination to the public facing endpoint.
3. Create your infrastructure. For example, below is sample code that creates a lambda function URL for our webhook endpoint. It also stores
your Momento auth token in AWS secrets manager.

```typescript

import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as secrets from 'aws-cdk-lib/aws-secretsmanager';
import {CfnOutput} from "aws-cdk-lib";

export class MomentoWebhookStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const momentoApiKeyParam = new cdk.CfnParameter(this, 'MomentoApiKey', {
            type: 'String',
            description: 'The Momento API key that will be used to read from the cache.',
            noEcho: true,
        });

        const momentoSecretStringParam = new cdk.CfnParameter(this, 'MomentoSecretString', {
            type: 'String',
            description: 'The Momento Webhook Secret String that will be used to validate the caller',
            noEcho: true,
        });

        const apiKeySecret = new secrets.Secret(this, 'MomentoWebhookHandlerApiKey', {
            secretName: 'MomentoWebhookHandlerApiKey',
            secretStringValue: new cdk.SecretValue(momentoApiKeyParam.valueAsString),
        });

        const secretStringSecret = new secrets.Secret(this, 'MomentoWebhookHandlerSecretString', {
            secretName: 'MomentoWebhookHandlerSecretString',
            secretStringValue: new cdk.SecretValue(momentoSecretStringParam.valueAsString),
        });

        const webhookHandlerLambda = new lambdaNodejs.NodejsFunction(this, 'MomentoWebhookHandler', {
            functionName: 'MomentoWebhookHandler',
            runtime: lambda.Runtime.NODEJS_18_X,
            entry: path.join(__dirname, '../../lambda/webhook-handler/handler.ts'),
            projectRoot: path.join(__dirname, '../../lambda/webhook-handler'),
            depsLockFilePath: path.join(__dirname, '../../lambda/webhook-handler/package-lock.json'),
            handler: 'handler',
            timeout: cdk.Duration.seconds(30),
            memorySize: 128,
            environment: {
                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName,
                THE_SIGNING_SECRET: secretStringSecret.secretName,
            },
        });

        const serviceLambda = new lambdaNodejs.NodejsFunction(this, 'ServiceLambda', {
            functionName: 'ServiceLambda',
            runtime: lambda.Runtime.NODEJS_18_X,
            entry: path.join(__dirname, '../../lambda/service-topics/handler.ts'),
            projectRoot: path.join(__dirname, '../../lambda/service-topics'),
            depsLockFilePath: path.join(__dirname, '../../lambda/service-topics/package-lock.json'),
            handler: 'handler',
            timeout: cdk.Duration.seconds(30),
            memorySize: 128,
            environment: {
                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName
            },
        });

        // 👇 Setup lambda url
        const lambdaUrl = webhookHandlerLambda.addFunctionUrl({
            authType: lambda.FunctionUrlAuthType.NONE,
        });

        apiKeySecret.grantRead(webhookHandlerLambda);
        apiKeySecret.grantRead(serviceLambda);
        secretStringSecret.grantRead(webhookHandlerLambda);

        new CfnOutput(this, 'FunctionUrl ', { value: lambdaUrl.url });
    }
}

```

4. Add code to the webhook to process incoming messages. Below is sample code for the webhook lambda handler that extracts
a user's `token_id` from the webhook payload, and access resources stored in Momento cache. It also verifies that the webhook caller
is indeed Momento through the signing secret.

```typescript

import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';
import {CacheClient, CacheGet, CacheListPushFront, Configurations, CredentialProvider} from '@gomomento/sdk';
import * as crypto from "crypto";

const _secretsClient = new SecretsManagerClient({});
const _cachedSecrets = new Map<string, string>();
let _cacheClient: CacheClient | undefined = undefined;

const cacheName = 'course-comments';

export const handler = async (event: any) => {
  try {

    const secretStringSecretName = process.env.THE_SIGNING_SECRET;

    if (secretStringSecretName === undefined) {
      throw new Error("Missing required env var 'THE_SIGNING_SECRET");
    }

    const secretString = await getSecret(secretStringSecretName);
    const authorized = verifySignature(event.headers['momento-signature'], secretString, event.body);
    if (!authorized) {
      return {
        statusCode: 403,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: '{"message": "Access Denied!"}',
      };
    }

    const payload = JSON.parse(event.body)
    const userID = payload.token_id
    const message = JSON.parse(payload.text)

    console.log('Storing user comment for userID ' + userID + ' and courseId ' + message.courseId);
    console.log('Comment: ' + message.comment);

    const cacheClient = await getCacheClient();
    if (_cacheClient === undefined) {
      throw new Error('Cache client is undefined');
    }

    const listResp = await cacheClient.listPushFront(cacheName, String(message.courseId),
      JSON.stringify({userID: userID, comment: message.comment}));
    if (listResp instanceof CacheListPushFront.Success) {
      console.log('Successfully persisted comment for course');
    } else if (listResp instanceof CacheListPushFront.Error) {
      console.log('Error while publishing comment for course ' + listResp.message());
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: '{}',
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred!' + err
      }),
    };
  }
};


async function getSecret(secretName: string): Promise<string> {
  if (!_cachedSecrets.has(secretName)) {
    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));
    if (secretResponse) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      _cachedSecrets.set(secretName, secretResponse.SecretString!);
    } else {
      throw new Error(`Unable to retrieve secret: ${secretName}`);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return _cachedSecrets.get(secretName)!;
}

function verifySignature(signature: string, secret: string, body: string) {
  if (process.env.THE_SIGNING_SECRET === undefined) {
    throw new Error("Missing required env var 'THE_SIGNING_SECRET");
  }

  const hash = crypto.createHmac("SHA3-256", secret);
  const hashed = hash.update(body).digest('hex');
  return hashed === signature;
}

async function getCacheClient(): Promise<CacheClient> {
  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;
  if (apiKeySecretName === undefined) {
    throw new Error("Missing required env var 'MOMENTO_API_KEY_SECRET_NAME");
  }
  if (_cacheClient === undefined) {
    const momentoApiKey = await getSecret(apiKeySecretName);
    console.log('Retrieved secret!');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    _cacheClient = await CacheClient.create({
      configuration: Configurations.Lambda.latest(),
      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),
      defaultTtlSeconds: 60,
    });
  }
  return _cacheClient;
}
```

5. Finally, below has sample code for generating the token and publishing user messages on a topic. In a real-world,
these would ideally live in separate micro-services.

```typescript
import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';
import {
  AuthClient, Configurations, CredentialProvider, DisposableTokenScopes,
  ExpiresIn, GenerateDisposableToken, TopicClient, TopicPublish
} from '@gomomento/sdk';

const _secretsClient = new SecretsManagerClient({});
const _cachedSecrets = new Map<string, string>();
let _authClient: AuthClient | undefined = undefined;
let _topicClient: TopicClient | undefined = undefined;

const cacheName = 'course-comments';
const topicName = 'comment';

export const handler = async (event: any) => {
  try {

    const authClient = await getAuthClient();

    const eventsPublishToken = await authClient.generateDisposableToken(
      DisposableTokenScopes.topicPublishOnly(cacheName, topicName),
      ExpiresIn.minutes(30),
      {tokenId: 'taylor'},
    )

    if (eventsPublishToken instanceof GenerateDisposableToken.Success) {
      console.log('Generated a disposable API key with access to the "events" topic in the "cache" cache!');
      // logging only a substring of the tokens, because logging security credentials is not advisable :)
      //console.log(`API key starts with: ${eventsPublishToken.authToken.substring(0, 10)}`);
      //console.log(`Expires At: ${eventsPublishToken.expiresAt.epoch()}`);
      console.log('Publishing to the "events" topic in the "cache" cache! using the generated disposable token');
      const topicClient = await getTopicClient(eventsPublishToken.authToken);
      const message = JSON.stringify({
        comment: 'This course and video is awesome!',
        courseId: 123,
      });
      console.log("Message: "  + message);
      const publishResponse = await topicClient.publish(cacheName, topicName, message);
      if (publishResponse instanceof TopicPublish.Success) {
        console.log('Published to the "events" topic in the "cache" cache!');
      } else if (publishResponse instanceof TopicPublish.Error) {
        throw new Error(
          `An error occurred while attempting to publish to the "events" topic in the "cache" cache: ${publishResponse.errorCode()}: ${publishResponse.toString()}`
        );
      }
    } else if (eventsPublishToken instanceof GenerateDisposableToken.Error) {
      throw new Error(
        `An error occurred while attempting to call generateApiKey with disposable token scope: ${eventsPublishToken.errorCode()}: ${eventsPublishToken.toString()}`
      );
    }
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: '{}',
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred!',
      }),
    };
  }
}

async function getAuthClient(): Promise<AuthClient> {
  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;
  if (apiKeySecretName === undefined) {
    throw new Error("Missing required env var 'MOMENTO_API_KEY_SECRET_NAME");
  }
  if (_authClient === undefined) {
    const momentoApiKey = await getSecret(apiKeySecretName);
    console.log('Retrieved secret!');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    _authClient = new AuthClient({
      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),
    });
  }
  return _authClient;
}

async function getTopicClient(disposableTokenKey: string): Promise<TopicClient> {
  if (_topicClient === undefined) {
    console.log('Retrieved secret!');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    _topicClient = new TopicClient({
      configuration: Configurations.Lambda.latest(),
      credentialProvider: CredentialProvider.fromString({apiKey: disposableTokenKey}),
    });
  }

  return _topicClient;
}

async function getSecret(secretName: string): Promise<string> {
  if (!_cachedSecrets.has(secretName)) {
    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));
    if (secretResponse) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      _cachedSecrets.set(secretName, secretResponse.SecretString!);
    } else {
      throw new Error(`Unable to retrieve secret: ${secretName}`);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return _cachedSecrets.get(secretName)!;
}

```
### Conclusion

By integrating Momento Topics, webhooks, and tokens, you can create secure and stateless asynchronous systems. This convention can be applied to a variety of use-cases such as:

- Multi-language [chat application](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app)
- Live commenting system
- Online polls

`token_id` can be used to securely identify users sending messages in all the above use-cases.

- Event-driven systems: Each ephemeral unique event flowing through different states in an asynchronous system can embed an `event_id` as the `token_id`.
