---
sidebar_position: 10
title: API keys
sidebar_label: API keys
description: How to use Momento API keys for topics workloads.
---

# Momento API keys

API keys are the default long-lived credential for Momento Topics. One key works across all regions, and you must supply the correct endpoint when you configure the SDK. Provide both:

- your API key, and
- the correct Momento endpoint (cell URL) for your deployment. See the [regions page](/platform/regions) to choose the endpoint.

If you omit the endpoint, the SDK will fail with the error message `Missing required property: endpoint`.

## Roles and access

API keys support the following system-defined roles:

- **Owner**: full access to all resources, including API keys and account membership.
- **Operator**: full access to API/data resources; read-only for account membership.
- **Viewer**: read-only access to all resources.

An API key is mapped to a single role upon creation.

## Key lifecycle

Momento supports all standard operations in the API key lifecycle:

### Create
Create keys in the [Momento console](https://console.gomomento.com/keys) or with the Auth APIs. Choose a role, add an optional description, and optionally set an expiry. The plaintext key is shown once; copy it and store it in a secret manager such as AWS Secrets Manager, Azure Key Vault, or GCP Secret Manager.

### List
List active keys to view metadata (key ID, role, issuedAt, optional expiresAt, description). The plaintext key is never returned.

### Revoke
Revoke a key to disable it immediately. If you set an expiry, rotate before it lapses to avoid outages.

For more detail on authentication options, start with the [Authentication page](./index.mdx). For session-level access, use [tokens](./tokens/index.md).

## Migrate from v1 API keys

:::info
v1 API keys will continue working. The next time you create a new key in the console or via the Auth APIs, you'll receive the v2 format. v2 keys require you to provide an endpoint in the credential provider, **which is a breaking change**. Use the migration path below to move from the v1 credential provider to the v2 provider.

If you do not see the function calls mentioned below, be sure to update your Momento package version!
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="string" label="From String">

    ```javascript
    // v1 API keys
    credentialProvider = CredentialProvider.fromString(myApiKey);

    // New API keys
    credentialProvider = CredentialProvider.fromApiKeyV2(myApiKey, endpoint);
    ```

  </TabItem>
  <TabItem value="env" label="From Environment Variable">

    ```javascript
    // v1 API keys
    credentialProvider = CredentialProvider.fromEnvironmentVariable('MyApiKeyEnvVar');

    // New API keys
    credentialProvider = CredentialProvider.fromEnvVarV2('MyApiKeyEnvVar', 'MyEndpointEnvVar');
    ```
  </TabItem>
</Tabs>


The above examples are in JavaScript, but the same signature applies to [all available SDKs](/platform/sdks). Reminder - endpoints are region-based and can be [found here](/platform/regions).

Attempting to use a new API key with the old credential provider methods will result in the following error message:

> Received a v2 API key. Are you using the correct key? Or did you mean to use `fromApiKeyV2()` or `fromEnvVarV2()` instead?
