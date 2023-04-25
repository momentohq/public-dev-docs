---
sidebar_position: 3
sidebar_label: AWS Secrets Manager
pagination_next: null
title: Momento + AWS Secrets Manager
description: Learn how to retreive your Momento Auth Token in AWS Secrets Manager.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retreiving a Momento auth token from AWS Secrets Manager

It is best practice to securely store your Momento authentication token. If you are using AWS, you can securely store your auth token in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html). With that, only code running with the correct IAM credentials will be able to get the auth token and access Momento Cache or Momento Topics.

:::info

Just as you should reuse your Momento `CacheClient` and `TopicClient` objects when possible, so should you with the Momento auth token from AWS Secrets Managers. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager.

:::

## Entry in AWS Secrets Manager

When inserting the Momento auth token into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)

![AWS Secrets Manager](/img/aws-secrets-manager.png)

## Example Code for AWS Secrets Manager

<Tabs>
  <TabItem value="nodejs" label="Node.js" default>

```javascript
const {
    SecretsManagerClient,
    GetSecretValueCommand,
  } = require('@aws-sdk/client-secrets-manager');

// Set up the AWS Secrets Manager client
const client = new SecretsManagerClient({
region: "us-west-2",
});
  
// A function that gets the Momento_Auth_Token you stored in AWS Secrets Manager.
// The secret was stored as a plaintext string to avoid parsing JSON.
async function getToken(secretName) {
  try {
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

// Call the getToken function
async function run() {
 const token = await getToken("Momento_Auth_Token");
 console.log(token.SecretString);
}

run();
```

  </TabItem>
</Tabs>

## FAQ

<details>
  <summary>Do I have to do this?</summary>
No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager.
</details>
