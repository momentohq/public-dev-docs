---
sidebar_position: 10
title: API keys
sidebar_label: API keys
slug: /cache/authentication/api-keys
description: How to use Momento API keys for cache workloads.
---
# Momento API keys

API keys are the default long-lived credential for Momento Cache. One key works across all regions, and you must supply the correct endpoint when you configure the SDK. Provide both:

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

## Migrate from legacy API keys

:::info
Legacy API keys will continue working, but next time you rotate your keys, you'll be automatically upgraded to the new API key format. These keys require an endpoint to be provided in the credential provider, **resulting in a breaking change**. Below is the migration path from the old credential provider to the new provider.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="string" label="From String">

    ```javascript
    // Legacy API keys
    credentialProvider = CredentialProvider.fromString(myApiKey);

    // New API keys
    credentialProvider = CredentialProvider.fromApiKeyV2(myApiKey, endpoint);
    ```

  </TabItem>
  <TabItem value="env" label="From Environment Variable">

    ```javascript
    // Legacy API keys
    credentialProvider = CredentialProvider.fromEnvironmentVariable('MyEnvVar');

    // New API keys
    credentialProvider = CredentialProvider.fromEnvVarV2('MyEnvVar', endpoint);
    ```
  </TabItem>
</Tabs>


The above examples are in JavaScript, but the same signature applies to [all available SDKs](/platform/sdks). Reminder - endpoints are region-based and can be [found here](/platform/regions).

Attempting to use a new API key with the old credential provider methods will result in the following error message:

> Received a v2 API key. Are you using the correct key? Or did you mean to use `fromApiKeyV2()` or `fromEnvVarV2()` instead?
