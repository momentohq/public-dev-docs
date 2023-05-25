---
sidebar_position: 3
sidebar_label: AWS Secrets Manager
title: Momento + AWS Secrets Manager
description: Learn how to retreive your Momento Auth Token in AWS Secrets Manager.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieving a Momento auth token from AWS Secrets Manager

It's best practice to securely store your Momento authentication token. If you are using AWS, you can securely store the auth token in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html). With that, only code running with the correct IAM credentials will be able to fetch the auth token and use it to access Momento Cache or Momento Topics.

:::info

Just as you should reuse your Momento `CacheClient` and `TopicClient` objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this [AWS blog](https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/).

:::

## Entry in AWS Secrets Manager

When inserting the Momento auth token into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)

![AWS Secrets Manager](/img/aws-secrets-manager.png)

## Example Code for AWS Secrets Manager

In the code examples below, you can see where the getToken function is called just before creating the Momento cache connection client as that is where the auth token is needed and the only time it is needed.

<Tabs>
  <TabItem value="nodejs" label="Node.js" default>

```javascript
const {
    SecretsManagerClient,
    GetSecretValueCommand,
  } = require('@aws-sdk/client-secrets-manager');
const { CacheGet, CacheSet, Configurations, ListCaches, CreateCache,
    CacheClient, CredentialProvider } = require('@gomomento/sdk');

// Defines name of cache to use.
const CACHE_NAME = 'demo-cache2';
  
// A function that gets the Momento_Auth_Token you stored in AWS Secrets Manager.
// The secret was stored as a plaintext string to avoid parsing JSON.
async function getToken(secretName) {
  try {
    // Set up the AWS Secrets Manager client
    const client = new SecretsManagerClient({ region: "us-west-2"});

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
      credentialProvider: CredentialProvider.fromString({"authToken" : token.SecretString}),
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
      const client = new SecretsManagerClient({ region: regionName});
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
  ttl:number = 600,
  tokenName:string = "Momento_Auth_Token", 
  ): Promise<CacheClient> {
  const token: string = await GetToken(tokenName);
    return new CacheClient({
        configuration: Configurations.Laptop.v1(),
        credentialProvider: CredentialProvider.fromString({ "authToken" : token }),
        defaultTtlSeconds: ttl,
    });
}
```

  </TabItem>

</Tabs>

## FAQ

<details>
  <summary>Do I have to do this?</summary>
No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager.
</details>
