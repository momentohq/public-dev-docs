---
sidebar_position: 4
sidebar_label: Working with Expiring Momento Tokens
title: Using Momento Tokens in your workflow
description: Learn how to refresh API tokens
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Tokens

Momento Tokens consist of three parts: an authentication token, a refresh token, and a valid-until epoch timestamp. The authentication token is a JWT token that contains the API key and an endpoint. This endpoint is the only region for which the token will authorize requests.

Refresh tokens are for one-time use only. Once they've been used to refresh an authentication token, they will no longer be accepted. The refresh token workflow requires both the authentication and refresh tokens. A new refresh token and authentication token will be returned, both of which will be valid for the same duration as the old tokens, starting from the point of refresh

Both refresh and authentication tokens expire at the same time. When generating the token, you can specify how long you want it to last (in seconds), generating a Never expiring token is also an option.jku


# Generating Momento Tokens

Here is an example of generating an authentication token, using it, and then refreshing the token. A session token is required for generating authentication tokens.
<Tabs>
    <TabItem value="nodejs" label="Node.js" default>

```javascript
const fs = require('fs');
const { AuthClient, GenerateAuthToken, RefreshAuthToken, ExpiresAt, ExpiresIn } = require('@gomomento/sdk');
const dotenv = require('dotenv');

// Value must contain a valid go momento endpoint
const controlEndpoint = "valid-gomomento-endpoint";
// Value must contain a valid go momento session token
const sessionToken = "valid-gomomento-session-token";

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

async function generate24hrExpiringAuthToken() {
  const generateAuthTokenResponse = await authClient.generateAuthToken(
    controlEndpoint,
    sessionToken,
    86400 // expires in 24hrs
  );
  if (expiringAuthTokenResponse instanceof GenerateAuthToken.Error) {
      throw new Error(`Error: ${expiringAuthTokenResponse.message()}`);
  }
  console.log('Expiring Authentication token successfully generated!');
  return generateAuthTokenResponse;
}

async function generateNeverExpiringAuthToken() {
  const neverExpiringTokenResponse = await authClient.generateAuthToken(
    controlEndpoint,
    sessionToken,
    ExpiresIn.never()
  );
  if (neverExpiringTokenResponse instanceof GenerateAuthToken.Error) {
      throw new Error(`Error: ${neverExpiringTokenResponse.message()}`);
  }
  console.log('Never expiring Authentication token successfully generated!');
  return neverExpiringTokenResponse;
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

  const expiringAuthTokenResponse = await generate24hrExpiringAuthToken();
  const neverExpiringAuthTokenResponse = await generateNeverExpiringAuthToken();
  
  const cacheClient = await createCacheClient(expiringAuthTokenResponse.getAuthToken());
  
  await usingAuthToken(cacheClient);
  
  const refreshTokenResponse = await refreshExpiringToken(expiringAuthTokenResponse.getAuthToken(), expiringAuthTokenResponse.refreshToken);
}

run();
```

Check our [Node.js cheat sheet](/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md) for more on using our Node.js SDK.
   </TabItem>
</Tabs>
