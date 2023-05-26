---
sidebar_position: 1
sidebar_label: Basics
sidebar_class_name: sidebar-item-data-types
title: Momento SDK Basics
pagination_prev: null
pagination_next: null
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Developing applications with the Momento SDK

Welcome! This page provides some information about common constructs that you will need in order to construct Momento clients in all of our SDKs. We will cover how to provide your Momento credentials, how to configure your client, and some basic information about error handling and production readiness.

## Credentials

When instantiating a Momento client, you will need to provide a Momento auth token.  If you don't have one yet, you can get one from the [Momento Web Console](https://console.gomomento.com/).  Once you have your token, you will provide it to the Momento SDKs via a `CredentialProvider`.  There are convenient factory methods provided to construct a `CredentialProvider`, either from an environment variable or from a String.

Example of how to construct a `CredentialProvider` from an environment variable:

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

If you're storing your Momento auth token in a secret manager such as AWS Secret Manager or a config file, you will first retrieve the credentials from there and then instantiate a `CredentialProvider` from a string:

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

For an example of how to retrieve credentials from AWS Secrets Manager, see our page on [Retrieving a Momento auth token from AWS Secrets Manager](/develop/integrations/aws-secrets-manager).

For general information on creating and refreshing Momento auth tokens, see our page on [Momento authentication with expiring tokens](/develop/guides/working-with-momento-auth-tokens).

## Configuration

You will also need to create a `Configuration` object to configure your Momento Cache client. `Configuration` objects control things such as timeouts, retries, logging, middleware, and more.

Each SDK comes with some pre-built `Configuration` objects to help you get up and running as quickly as possible. We want to do the hard work of
tuning for different environments for you, so that you can focus on the things that are unique to your business. (We even have a blog series about it! [Shockingly simple: Cache clients that do the hard work for you](https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you))

Each pre-built configurations come with a `latest()` version, which will always give you the latest recommended configuration for a given environment. This version may change slightly from one release of the SDK to the next as we continue to test, tune, and discover better default settings. If you want to ensure that your configuration does not change with an SDK upgrade, we provide fixed versions such as `v1()` which are guaranteed to remain stable from one release to the next. 

You can find the pre-built configurations in our `Configurations` namespace in most SDKs. Here are some of the pre-built configurations that
you might be interested in.

### Laptop

`Configurations.Laptop` is a development environment, just for poking around on your... laptop :) It has relaxed timeouts and assumes that your network latencies might be a bit high.

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### Browser

`Configurations.Browser` is a configuration in our [web SDK](/develop/sdks/web). It has relaxed timeout settings since latencies can be highly variable in individual users' browsers, depending on their network.

### InRegion - Default

`Configurations.InRegion.Default` is the recommended configuration for most server-side use cases, where you are making requests to Momento a service hosted in the same AWS or GCP region. It has more aggressive timeouts and retry behavior than the Laptop config, so it will fail faster and allow your application to fall back to your database or other data source more quickly. This helps ensure that your application doesn't bottleneck on Momento during a network or service outage.

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### InRegion - Low Latency

`Configurations.InRegion.LowLatency` is a configuration that prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing some throughput to achieve this. It will time out more quickly than the Default configuration. Use this configuration if the most important factor is to ensure that cache unavailability doesn't force unacceptably high latencies for your own application and you want to fall back to application logic more quickly if the cache hasn't responded.

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` is a configuration that is available in some SDKs, and is optimized for the AWS Lambda environment. It has some configuration settings designed to pre-warm the client on Lambda cold starts, and to ensure the connection is re-established proactively if a Lambda remains idle for long enough for the connection to time out.

<SdkExampleTabs snippetId={'API_ConfigurationILambda'} />

If you do need to customize your configuration beyond what our pre-builts provide, you can build your own `Configuration`
object.  See the examples in the `Configurations` namespace in the source code of your SDK  to see how they are constructed.

We hope that these configurations will meet the needs of most users, but if you find them lacking in any way, please
open a github issue, or contact us at `support@momentohq.com`. We would love to hear about your use case so that we
can fix or extend the pre-built configs to support it.

## Constructing a Cache Client

The `CacheClient` is the main object that you will use to interact with a Momento Cache.  To instantiate one, you need to pass a `CredentialProvider`, a `Configuration`, and a default TTL.  The default TTL determines how long items will be stored in the cache if you don't specify a TTL explicitly when you save them.

Here is an example of how to construct a `CacheClient`:

<SdkExampleTabs snippetId={'API_InstantiateCacheClient'} />

## Error Handling / Production Readiness

Each of our SDKs has its own page in this documentation; you can navigate to them by clicking `Develop`->`SDKs` in the left nav.  On each of these pages you will find a link for "Taking your code to prod" that provides best practices for production-ready code in that language.

Here are some general notes on error handling in Momento that apply to all SDKs.

Errors that occur in calls to `CacheClient` methods are surfaced to developers as part of the return values of the calls, as opposed to by throwing exceptions. This makes them more visible at the time you are writing your code, and allows your IDE to be more helpful in ensuring that you've handled the ones you care about. (For more on our philosophy about this, see our blog post on why [Exceptions are bugs](https://www.gomomento.com/blog/exceptions-are-bugs). And send us any feedback you have!)

This also helps to ensure that your application doesn't crash at runtime. Momento is a cache, so applications will usually have a fallback data source that they can retrieve data from if the cache is unavailable. Therefore, Momento SDKs are designed to avoid throwing exceptions so that your app won't crash if you forget to add a try/catch block. 

Instead, Momento response objects extend from a parent class, and have child types such as `Hit`, `Miss`, and `Error`, and designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) So, your code checks whether the response is a `Hit`, a `Miss`, or an `Error`, and then branches accordingly. Using this approach, you get a type-safe response object in the case of a cache hit, with `value` properties that you can be assured at compile-time are not `null`. But if the cache read results in a Miss or an error, you'll also get a type-safe object that you can use to get more info about what happened (with properties such as `errorCode` that would not be present on a `Hit` object).

Here's an example of how to do the pattern matching on a `Hit`/`Miss`/`Error` response:

<SdkExampleTabs snippetId={'API_ErrorHandlingHitMiss'} />

Some APIs, such as write APIs, only have `Success` and `Error` responses (as opposed to `Hit`/`Miss`). Here's an example of handling one of these responses:

<SdkExampleTabs snippetId={'API_ErrorHandlingSuccess'} />

In all cases, your IDE will be able to give you hints as to which types of responses are available for a given API, and what properties/methods are available on each of the response types.

For more information, see our [Response Objects](/develop/api-reference/response-objects) page, and the docs for the specific SDK that you are using (under `Develop`->`SDKs` in the left nav).




