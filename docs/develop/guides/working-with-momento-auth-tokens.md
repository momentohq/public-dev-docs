---
sidebar_position: 4
sidebar_label: Momento Authentication
title: Working with Momento auth tokens
description: Learn how to use expiring tokens to enhance the security of your application
pagination_next: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Working with Momento auth tokens

To access Momento services from your application, a Momento auth token is required. The auth token is an alphanumeric string Momento generates that is unique to your account and the cloud provider's Region you select. When creating an auth token, you can set up one of two types of expiration:

1. An auth token that never expires. This should only be used for dev/test environments.
2. An auth token which expires and requires periodic rotation. You can set the expiration to 7, 30, 60, 90 days or custom, where you can select a specific calendar date. An expiring auth token is considered best practice for production deployments. We will walk through how to do exactly that in this page.

:::info
In addition to using an expiring auth token, it is best practice to store an auth token in a service like [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) or [GCP Secret Manager](https://cloud.google.com/secret-manager). Go to [Retrieving a Momento auth token from AWS Secrets Manager](/develop/integrations/aws-secrets-manager) for an example on using this.
:::

## Generating expiring tokens

### Step 1: Sign up or log into the Momento console
Go to the [Momento console](https://console.gomomento.com/tokens) and follow the instructions to log in with your email address, Google account, or GitHub account.

![image](/img/getting-started/console.png)

### Step 2: Generate a Momento auth token
In the console, open the menu and select token.

![image of console menu](/img/getting-started/auth-token.gif)

On the token page, select your 1/ cloud provider, 2/ an available region from the drop down list, 3/ when the token should expire, and then 4/ hit the "Generate Token" button.

![image](/img/getting-started/select-provider-region.png)

Scroll down and you will see your token in a grey box. The tokens in the screenshot has been blurred out, but yours won't be. The box contains 3 separate fields:
1. Auth Token: this is the actual authentication token that gives your application access to Momento. This token will expired after the specified time period you selected.
2. Refresh Token: if you wish to programmatically obtain a new auth token before the current token expires, you need this refresh token.
3. Valid Until: this is purely informational, and displays the date and time the current auth token expires at.

![image](/img/getting-started/generated-token.jpg)

### Step 3: Store your Momento auth token
If you wish to quickly test out Momento, click on the copy icon beside the auth token to copy the token to your clipboard and supply it to the Momento SDK. We recommend you also click the "Download JSON" button to store both the auth token and refresh token. Tokens are like passwords, the best practice is to store it in and retrieve it from a secure location such as [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) or [GCP Secret Manager](https://cloud.google.com/secret-manager).

### Step 4: Automating token refresh

To refresh an expiring token, you will use the Momento `AuthClient` and its `refreshAuthToken` API.

To instantiate an `AuthClient`:

<SdkExampleTabs snippetId={'API_InstantiateAuthClient'} />

To use the `refreshAuthToken` API:

<SdkExampleTabs snippetId={'API_RefreshAuthToken'} />

Once your application is running in production. You will need an automated script that periodically refreshes the auth token, **before** it expires. If you are running in AWS, scheduling a function in AWS Lambda that does this for you. For GCP, Google Cloud Functions is likely your solution of choice. For an example using AWS Lambda, check out our [1-click deploy example Lambda function](https://github.com/momentohq/auth-token-refresh-lambda) that will automatically refresh your token stored in AWS Secrets Manager.

:::note
While a Lambda function, Google Cloud Function, or another automated script refreshes the auth token, your application also needs to check AWS Secrets Manager (or wherever you are storing your tokens) periodically for newly refreshed tokens if it is caching the token locally!
:::

## Token Scopes

Momento auth tokens have an associated `TokenScope` which controls their level of access to Momento resources. Here is a list of the available `TokenScope`s:

- `SuperUser`: these tokens have full access to all control plane and data plane operations. They can also be used to generate new tokens via the [`generateAuthToken`](/develop/api-reference#generateauthtoken) API. The only way to create a `SuperUser` token is through the [Momento web console](https://console.gomomento.com).
- `AllDataReadWrite`: these tokens have full read/write access to all data plane operations, but no access to control plane operations. They can be used to read/write any cache, and to publish and subscribe to any topic. They cannot be used to create or delete caches, nor to generate new Momento auth tokens. `AllDataReadWrite` tokens are created via the [`generateAuthToken`](/develop/api-reference#generateauthtoken) API. 

Got more questions or feedback for us? Join our [Discord community](https://discord.gg/GDStRczm) or reach out to [Momento support](mailto:support@momentohq.com) for help.
