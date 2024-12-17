---
sidebar_position: 6
sidebar_label: Develop
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Developing applications with Momento SDKs

Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called API keys), how to configure your client, and some basic information about error handling and production readiness.

## Constructing a Storage Client

The `StorageClient` is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a `CredentialProvider` and a `Configuration`.

Here is an example of how to construct a `StorageClient`:

<SdkExampleTabs snippetId={'API_Storage_InstantiateClient'} />

## Instantiating credential providers using Momento API keys

You need to provide a Momento API key when instantiating a Momento client. If you don't have one yet, you can get one from the [Momento Web Console](https://console.gomomento.com/). Once you have a token, provide it to Momento SDKs when you create an instance of `CredentialProvider`. There are convenient factory methods provided to construct a `CredentialProvider` object, either from an environment variable or from a String. Below is an example of how to instantiate `CredentialProvider` from an environment variable:

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

If you're storing your Momento auth token in a secret manager such as [AWS Secret Manager](https://aws.amazon.com/secrets-manager/), [GCP Secret Manager](https://cloud.google.com/secret-manager), or a local config file, you must first retrieve the credentials from there and then instantiate a `CredentialProvider` from a string, like this:

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

For an example of how to retrieve credentials from AWS Secrets Manager, see [Retrieving a Momento auth token from AWS Secrets Manager](/cache/integrations/aws-secrets-manager).

For more information, see our [API Reference](./develop/api-reference) page, and the docs for the specific [SDK](/platform/sdks) that you are using.
