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

# イベント駆動型アーキテクチャでMomentoトピック、Webhook、トークンを活用する

[Momento Topics](../)を使用すると、トピック上のメッセージを購読し、別のトピックにメッセージを公開することができます。[Webhooks](../webhooks/overview)は、これらのトピックに発行されたメッセージに応答してトリガーされるHTTPコールバックとして機能し、ステートレスコンシューマーとして動作します。[トークン](../../cache/develop/authentication/tokens)は、システムとやりとりするユーザーやサービスに、短時間のセッション・トークンを提供するように設計されています。各トークンに一意の識別子 (`token_id`) を埋め込むことで、リソースへの安全で追跡可能なアクセスを保証します。

ここで重要なのは、Topics を使って短命のトークンを付与することで、ユーザー間のリアルタイムなコミュニケーションを促進できることです。これらのトークンにはユーザー情報 (`token_id`) を埋め込むことができ、メッセージが公開されると、Webhook コールバックを介して Momento キャッシュなどの共有リソースにアクセスするために活用することができます。例えば、`token_id` を使ってユーザーを特定することで、Momento キャッシュに保存されたユーザー情報にアクセスし、ユーザー体験をパーソナライズすることができます。情報を埋め込むことで、2つの大きな利点が得られます：
- セキュリティを強化し、ユーザーのなりすましを防ぐ。
- トークン自体にユーザー情報が埋め込まれているため、データ転送コストが削減される。

![Architecture](@site/static/img/topics/patterns/token-id-webhook.png)

## はじめに
1. [Momentoコンソールでキャッシュを作成する](https://console.gomomento.com/caches/create)
2. [ウェブフックを作成する](/topics/webhooks/creating-a-webhook) をキャッシュに追加します。Webhook の宛先を公開エンドポイントに割り当てます。このエンドポイントは POST リクエストを受け入れ、Momento からの着信コールを受け取ることができる必要があります。このイベントの構造の詳細については、[こちら](../webhooks/overview#example-event) を参照してください。
3. インフラを作成します。例えば、以下はウェブフックエンドポイントのラムダ関数URLを作成するサンプルコードです。また
また、AWS secrets manager に Momento 認証トークンを保存します。

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

4. Webhook にコードを追加して、受信メッセージを処理します。以下は、Webhook ペイロードからユーザの `token_id` を抽出し、Momento キャッシュに保存されたリソースにアクセスする Webhook ラムダハンドラのサンプルコードです。また、Webhook の呼び出し元が本当に Momento であることを、署名の秘密を通して確認します。

```typescript

import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';
import {CacheClient, CacheGet, CacheListPushFront, Configurations, CredentialProvider, WebhookUtils} from '@gomomento/sdk';
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
    const authorized = WebhookUtils.validateWebhookRequest(
        { 
            signature: event.headers['momento-signature'],
            signingSecret: secretString, 
            body: event.body
        }
    );
    
    if (authorized !== WebhookUtils.RequestValidation.VALID ) {
      return {
        statusCode: 403,
        headers: {
          'Content-Type': 'application/json'
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
        'Content-Type': 'application/json'
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

5. 最後に、トークンを生成してトピックにユーザー・メッセージを公開するサンプル・コードを以下に示す。現実の世界では
これらは理想的には別々のマイクロサービスに住みわけることになります。

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

## See More
- Momentoトピック、ウェブフック、トークンを統合することで、セキュアでステートレスな非同期システムを作成できます。この規約は、多言語チャットアプリ、オンラインポーリング、イベント駆動型システムなど、さまざまなユースケースに適用できます。

```mdx-code-block
import ReferenceCard from '@site/src/components/ReferenceCard';

<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '20px' // Add margin bottom to the container if needed
}}>

  <ReferenceCard
    title="Multi-language chat app"
    link="https://github.com/momentohq/moderated-chat/"
    description="Explore the source code of our live-translation chat app using webhooks."
    />
  <ReferenceCard
    title="Use webhooks with API Gateway + Lambda"
    link="https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app"
    description="Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions"
    />

</div>
```
