---
sidebar_position: 10
title: API Keys
sidebar_label: API Keys
description: Learn what Momento API keys are, how to create them, and how they are used.
---

# Momento API keys

API keys are *long-lived values intended for programmatic use*. These keys grant integrating applications access to certain caches and topics.

:::tip

Not sure if you should be using an `API key` or a `token`? Check out our [authentication](./index.mdx) page for all the details!

:::

When creating an API key, you are presented with two options via the [Momento console](https://console.gomomento.com/tokens):

1. A "super-user" key that grants access to everything in your account, like creating and deleting caches, setting and getting cache items, and publishing and subscribing to topics.
2. A fine-grained access control (FGAC) key that is limited to data operations only, like setting and getting cache items or publishing and subscribing to topics.

:::info

It is not possible to create "super-user" API keys via the Momento SDK; these may only be created in the console. However, you *can* use the SDK to create API keys with specific permissions, via fine-grain access control! Check out our [Auth API reference page](/topics/api-reference/auth) for more details.

:::

## Creating an API key

While it is possible to create API keys via the Momento SDK, the simplest way to create them is to use the [Momento console](https://console.gomomento.com/tokens).

### Step 1: Sign up or log into the Momento console

Go to the [Momento console](https://console.gomomento.com/tokens) and follow the instructions to log in with your email address, Google account, or GitHub account.

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

### Step 2: Generate your API key

In the console, select the [API Keys](https://console.gomomento.com/tokens) menu option.

Once on the API key page, select the information that matches where your caches live:

1. Cloud provider
2. Region
3. Key Type
3. (Optional) Expiration date

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region.png)

Once complete, click on the **Generate** button to create your API Key!

You can copy the value of the key directly and store it in a secure location or you can click on the **Download JSON** button to download the key and expiration date to your machine.

### Step 3: Secure it!

API keys are long-lived and typically grant high levels of access to the holder. With this in mind, be sure to securely store your API key in a location that encrypts the value and prevents plain-text viewing.

If your application is hosted in the cloud, it is best practice to store your keys in and retrieve from services like [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), or [GCP Secret Manager](https://cloud.google.com/secret-manager).

Storage of an API key is specific to your implementation and standard coding practices, but one thing is consistent across all applications - *keep it safe*!

## Expiration

When creating an API key, you have the option to create one that never expires and one that expires after a certain amount of time. We **do not recommend creating keys that never expire**. This ends up being a security risk if the key were ever to become compromised.

The Momento console offers several pre-configured options for expiration ranges or you can select your own date. Just remember to create a new API key and rotate it in your application before it expires to prevent outages!

## Use cases

For shorter-lived authentication use cases, with targeted permission scopes, consider using [Momento tokens](./tokens.md).

API keys are a good choice for situations where:

* All usage is programmatic and server-side
* You are okay with longer-lived keys that must be rotated on a monthly/yearly basis
* The key needs relatively broad permissions

For more information on managing the permissions on either API Keys or Tokens via fine-grained access control, see the [permissions page](./permissions.md).

Ready to get started? Head on over to the [Momento console](https://console.gomomento.com/tokens) and get your API key!
