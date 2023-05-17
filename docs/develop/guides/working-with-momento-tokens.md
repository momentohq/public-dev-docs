---
sidebar_position: 4
sidebar_label: Momento Authentication
title: Momento Authentication With Expiring Tokens
description: Learn how to use expiring tokens to enhance the security of your application
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Authentication With Expiring Tokens

To access Momento from your application, you need a Momento Token. If you wish to use a token that never expires, or you are just testing out Momento in a development environment, you may stop reading now. If you wish to enhance the security of your application by using expiring tokens that need to be rotated periodically, we will walk through how to do exactly that in this article.

# Generating Expiring Tokens

## Step 1: Sign up or log into the Momento Console
Go to the Momento Console and follow the instructions to login with your email address, Google account, or GitHub account.

![image](/img/getting-started/console.png)

## Step 2: Generate a Momento Token
In the console, open the menu and select Token.

![image of console menu](/img/getting-started/auth-token.gif)

On the token page, select your 1/ cloud provider, 2/ an available region from the drop down list, 3/ when the token should expire, and then 4/ hit the "Generate Token" button.

![image](/img/getting-started/select-provider-region.png)

Scroll down and you will see your token in a grey box. The tokens in the screenshot has been blurred out, but yours won't be. The box contains 3 separate fields:
1. Auth Token: this is the actual authentication token that gives your application access to Momento. This token will expired after the specified time period you selected.
2. Refresh Token: if you wish to programmatically obtain a new auth token before the current one expires, you need this refresh token.
3. Valid Until: this is purely informational, and displays the date and time the current auth token expires at.

![image](/img/getting-started/generated-token.jpg)

## Step 3: Store your Momento Token
If you wish to quickly test out Momento, click on the copy icon beside the auth token to copy the token to your clipboard and supply it to the Momento SDK. We recommend you also click the "Download JSON" button to store both the auth token and refresh token. Tokens are like passwords, the best practice is to store it in a secure location such as AWS Secrets Manager or GCP Secrets Manager.

Here is an example of using the auth token in the Momento Javascript SDK, and then refreshing it to obtain a new token before it expires.
<Tabs>
    <TabItem value="nodejs" label="Node.js" default>

```javascript
const fs = require('fs');
const { AuthClient, GenerateAuthToken, RefreshAuthToken, ExpiresAt, ExpiresIn } = require('@gomomento/sdk');
const dotenv = require('dotenv');

// Value must contain a valid go momento endpoint
const controlEndpoint = "valid-gomomento-endpoint";
// Value must contain a valid momento auth token
const authToken = "valid-momento-auth-token";

dotenv.config();

// Creates the Momento auth client object
async function createAuthClient() {
  return new AuthClient();
}

// Creates the Momento cache client object
async function createCacheClient(momentoAuthToken: string) {
  return new CacheClient({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromString({
      environmentVariableName: momentoAuthToken,
    }),
    defaultTtlSeconds: 600,
  });
}

async function refreshExpiringToken(authToken: string, refreshToken: string) {
  const refreshTokenResponse = await authClient.refreshAuthToken(
    CredentialProvider.fromString({
      authToken: authToken,
    }),
    refreshToken
  );

  if (refreshTokenResponse instanceof RefreshAuthToken.Error) {
    throw new Error(`Error: ${refreshTokenResponse.message()}`);
  }
  console.log('Auth token successfully refreshed!');
  
  return refreshTokenResponse;
}

async function usingAuthToken(cacheClient: CacheClient) {
  const result = await cacheClient.listCaches();
  if (result instanceof ListCaches.Success) {
    console.log(
      `Caches:\n${result
        .getCaches()
        .map(c => c.getName())
        .join('\n')}\n\n`
    );
  } else if (result instanceof ListCaches.Error) {
    throw new Error(
      `An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`
    );
  }
}

async function run() {
  const byteArray = await readFile(filePath);
  if (byteArray === null) {
    return;
  }

  const authClient = await createAuthClient();

  const cacheClient = await createCacheClient(authToken);
  
  await usingAuthToken(cacheClient);
  
  const refreshTokenResponse = await refreshExpiringToken(authToken, refreshToken);
}

run();
```
## Step 4: Automating Token Refresh
Once your application is running in production. You will likely need an automated script that periodically refresh your auth token, before it expires. If you are running in AWS, an easy way to do this is by simply scheduling a lambda that does this for you. Check out our [1-click deploy example lambda](link to github) that you can use to automatically refresh your token in AWS Secrets Manager. 

Remember, while the lambda (or your own automated script) refreshes the auth token, your application also needs to check AWS Secrets Manager (or wherever you are storing your tokens) periodically for newly refreshed tokens!

Got more questions or feedback for us? Reach out at support@momentohq.com or join our [Discord community](link)!

   </TabItem>
</Tabs>
