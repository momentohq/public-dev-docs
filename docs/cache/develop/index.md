---
sidebar_position: 70
sidebar_label: Develop
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Developing applications with Momento SDKs

Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called API keys), how to configure your client, and some basic information about error handling and production readiness.

## Constructing a Cache Client

The `CacheClient` is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a `CredentialProvider`, a `Configuration`, and a default time to live (TTL) value. The default TTL determines how long items using that `CacheClient` will be stored in the cache before the cache deletes them. When performing `Set` operations, you can override this TTL value unique to that operation. See [Expire data with Time-to-Live (TTL) in Momento Cache](./learn/how-it-works/expire-data-with-ttl) for more information.

Here is an example of how to construct a `CacheClient`:

<SdkExampleTabs snippetId={'API_InstantiateCacheClient'} />

## Instantiating credential providers using Momento API keys

You need to provide a Momento API key when instantiating a Momento client. If you don't have one yet, you can get one from the [Momento Web Console](https://console.gomomento.com/). Once you have a token, provide it to Momento SDKs when you create an instance of `CredentialProvider`. There are convenient factory methods provided to construct a `CredentialProvider` object, either from an environment variable or from a String. Below is an example of how to instantiate `CredentialProvider` from an environment variable:

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

If you're storing your Momento auth token in a secret manager such as [AWS Secret Manager](https://aws.amazon.com/secrets-manager/), [GCP Secret Manager](https://cloud.google.com/secret-manager), or a local config file, you must first retrieve the credentials from there and then instantiate a `CredentialProvider` from a string, like this:

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

For an example of how to retrieve credentials from AWS Secrets Manager, see [Retrieving a Momento auth token from AWS Secrets Manager](/cache/integrations/aws-secrets-manager).

For general information on Momento authentication, see [our auth page](./develop/authentication).

For more information, see our [Response Objects](./develop/api-reference/response-objects) page, and the docs for the specific SDK that you are using (under `Develop`->`SDKs` in the left nav).
