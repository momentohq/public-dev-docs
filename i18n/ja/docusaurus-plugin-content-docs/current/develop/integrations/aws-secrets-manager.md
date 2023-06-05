---
sidebar_position: 3
sidebar_label: AWS Secrets Manager
title: Momento + AWS Secrets Manager
description: AWS Secrets ManagerからMomento認証トークンを取得する方法を学ぶ。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AWS Secrets ManagerからMomento認証トークンを取得する
Momento認証トークンを安全に保存することがベストプラクティスです。AWSをご使用の場合は、Momento認証トークンを[AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)に安全に保存することができます。そして、正しいIAMクレデンシャルで実行されているコードのみがMomento認証トークンを取得し、そのトークンを使ってMomento CacheまたはMomento Topicsにアクセスできるようになります。

:::備考

可能であればMomentoの`CacheClient`と`TopicClient`オブジェクトを再利用した方がいいように、AWS Secrets Managerから取得したMomento認証トークンを使ってこれらのオブジェクトを再利用した方がよいです。再利用しなければ、AWS Secrets Managerへのラウンドトリップに対する各MomentoAPI呼び出しに対して、時間面と金銭面の両方から負担が増える危険性が生じます。負担を抑え、AWS Secrets Managerによって管理される可能性を排除するには、この[AWSブログ](https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/)で詳細にご説明させていただいた通り、クライアント側のクレデンシャルのキャッシュを使用するのがベストです。
:::

## AWS Secrets Managerへの入力

Momento認証トークンをAWS Secrets Managerへ入力する際は、下のスクリーンショットの通り、JSONを含まないプレーンテキストとして入力するようにしてください（セキュリティのためトークンにはぼかしを入れております）。

![AWS Secrets Manager](/img/aws-secrets-manager.png)

## AWS Secrets Managerのコード例

以下に示したコード例では、Momento Cache接続クライアントを作成する直前にgetToken関数がどこで呼び出されるかが読み取れます。Momento Cache接続クライアントを作成するには認証トークンが必要で、認証トークンが必要になるのはその時のみとなります。

<Tabs>
  <TabItem value="nodejs" label="Node.js" default>

```javascript
const {
    SecretsManagerClient,
    GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');
const {
    CacheGet, CacheSet, Configurations, ListCaches, CreateCache,
    CacheClient, CredentialProvider
} = require('@gomomento/sdk');

// Defines name of cache to use.
const CACHE_NAME = 'demo-cache2';

// A function that gets the Momento_Auth_Token you stored in AWS Secrets Manager.
// The secret was stored as a plaintext string to avoid parsing JSON.
async function getToken(secretName) {
    try {
        // Set up the AWS Secrets Manager client
        const client = new SecretsManagerClient({region: "us-west-2"});

        return await client.send(
            new GetSecretValueCommand({
                SecretId: secretName,
                VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
            })
        );
    } catch (error) {
        console.error(`Error fetching secret value for "${secretName}":`, error.message);
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        throw error;
    }
}

// Create a Momento cache client connection object
async function createCacheClient() {
    // Get the token from AWS Secrets Manager
    const token = await getToken("Momento_Auth_Token");

    return new CacheClient({
        configuration: Configurations.Laptop.v1(),
        credentialProvider: CredentialProvider.fromString({"authToken": token.SecretString}),
        defaultTtlSeconds: 600,
    });
}

// A function to write to the cache
async function writeToCache(client, cacheName, key, data) {
    const setResponse = await client.set(cacheName, key, data);
    if (setResponse instanceof CacheSet.Success) {
        console.log('Key stored successfully!');
    } else if (setResponse instanceof CacheSet.Error) {
        console.log('Error setting key: ', setResponse.toString());
    } else {
        console.log('Some other error: ', setResponse.toString());
    }
}

// A function to read scalar items from the cache
async function readFromCache(client, cacheName, key) {
    const fileResponse = await client.get(cacheName, key);
    if (fileResponse instanceof CacheGet.Hit) {
        console.log('Cache hit: ', fileResponse.valueString());
    } else if (fileResponse instanceof CacheGet.Miss) {
        console.log('Cache miss');
    } else if (fileResponse instanceof CacheGet.Error) {
        console.log('Error: ', fileResponse.message());
    }
}

// Call the various functions
async function run() {
    const cacheClient = await createCacheClient();

    await writeToCache(cacheClient, CACHE_NAME, "code", "12345");
    await readFromCache(cacheClient, CACHE_NAME, "code");
}

run();
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript" default>

This code can be copied into a library file named GetClientFunctions.ts which you import into your own code.

```javascript
import {
    CacheClient,
    Configurations,
    CredentialProvider
} from '@gomomento/sdk';

import {
    SecretsManagerClient,
    GetSecretValueCommand,
    GetSecretValueCommandOutput,
} from '@aws-sdk/client-secrets-manager';

/* A function that gets the Momento_Auth_Token stored in AWS Secrets Manager.
The secret was stored as a plaintext format in Secrets Manager to avoid parsing JSON.

You don't have to store the Momento auth token in something like AWS Secrets Manager,
but it is best practice. You could pass the Momento auth token in from an environment variable.

*/
async function GetToken(
    secretName: string,
    regionName: string = "us-west-2"
): Promise<string> {
    try {
        const client = new SecretsManagerClient({region: regionName});
        const response: GetSecretValueCommandOutput = await client.send(
            new GetSecretValueCommand({
                SecretId: secretName,
                VersionStage: "AWSCURRENT",
            })
        );
        return response.SecretString || '';
    } catch (error) {
        console.error(`Error fetching secret value for "${secretName}":`, error.message);
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        throw error;
    }
}

// Function that calls to the GetToken function and then gets a client connection
// object from Momento Cache and returns that for later use.
export default async function CreateCacheClient(
    ttl: number = 600,
    tokenName: string = "Momento_Auth_Token",
): Promise<CacheClient> {
    const token: string = await GetToken(tokenName);
    return new CacheClient({
        configuration: Configurations.Laptop.v1(),
        credentialProvider: CredentialProvider.fromString({"authToken": token}),
        defaultTtlSeconds: ttl,
    });
}
```

  </TabItem>

</Tabs>

## よくある質問（FAQ）

<details>
  <summary>Momento認証トークンをAWS Secrets Managerに保存する必要がありますか？</summary>
いいえ、必要ありません。Momento認証トークンを環境変数またはファイルに保存できますが、AWS Secrets Manager等に保存するよりも安全性が低いため、ベストプラクティスではありません。
</details>
