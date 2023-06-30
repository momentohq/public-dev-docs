---
sidebar_position: 4
sidebar_label: Develop
sidebar_class_name: "sidebar-item-api-reference"
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Developing applications with Momento SDKs

Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called auth tokens), how to configure your client, and some basic information about error handling and production readiness.

<img src="/img/city.jpg" width="90%" alt="a technical illustration on a white background depicting the intersection of speed, ease of use, and security." />

## Constructing a Cache Client

The `CacheClient` is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a `CredentialProvider`, a `Configuration`, and a default time to live (TTL) value. The default TTL determines how long items using that `CacheClient` will be stored in the cache before the cache deletes them. When performing `Set` operations, you can override this TTL value unique to that operation. See [Expire data with Time-to-Live (TTL) in Momento Cache](/learn/how-it-works/expire-data-with-ttl) for more information.

Here is an example of how to construct a `CacheClient`:

<SdkExampleTabs snippetId={'API_InstantiateCacheClient'} />

## Instantiating credential providers using Momento auth tokens

You need to provide a Momento auth token when instantiating a Momento client. If you don't have one yet, you can get one from the [Momento Web Console](https://console.gomomento.com/). Once you have a token, provide it to Momento SDKs when you create an instance of `CredentialProvider`. There are convenient factory methods provided to construct a `CredentialProvider` object, either from an environment variable or from a String. Below is an example of how to instantiate `CredentialProvider` from an environment variable:

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

If you're storing your Momento auth token in a secret manager such as [AWS Secret Manager](https://aws.amazon.com/secrets-manager/), [GCP Secret Manager](https://cloud.google.com/secret-manager), or a local config file, you must first retrieve the credentials from there and then instantiate a `CredentialProvider` from a string, like this:

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

For an example of how to retrieve credentials from AWS Secrets Manager, see [Retrieving a Momento auth token from AWS Secrets Manager](/develop/integrations/aws-secrets-manager).

For general information on creating and refreshing Momento auth tokens, see [Momento authentication with expiring tokens](/develop/guides/working-with-momento-auth-tokens).

## Client configuration objects

`Configuration` objects contain the settings necessary for how a Momento client should connect to Momento services. The `Configuration` object controls settings such as timeouts, retries, logging, middleware, and more.

Each SDK contains pre-built `Configuration` objects to help get you up and running as quickly as possible. We did the hard work of tuning for various deployment environments so you can focus on the things unique to your business. (We even have a blog series about it! [Shockingly simple: Cache clients that do the hard work for you](https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you))

Pre-built configurations come with a `latest()` version, which will always give you the latest recommended configuration for a given environment. For example,

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefaultLatest'} />

The `latest()` pre-built configuration may change between SDK releases as we continue to test, tune, and deliver better settings. If you would like to ensure your configuration does not change with an SDK upgrade, we provide fixed versions such as `v1()`, which are guaranteed to remain static from one release to the next. For example,

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

If you need a custom configuration, you can build your own `Configuration` object. See the examples in the `Configurations` namespace in the source code of each SDK to see how they are constructed.

We hope these configurations will meet the needs of most use cases, but if you find them lacking in any way, please open a GitHub issue on that SDK repo, or contact us at `support@momentohq.com`. We would love to hear about your use case so we can fix or extend the pre-built configurations to better support you.

Here are some of the pre-built configurations that you might be interested in.

### Laptop

`Configurations.Laptop` is a development environment, just for poking around on your... laptop :) It has relaxed timeouts and assumes your network latencies might be a bit high.

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### Browser

`Configurations.Browser` is a configuration unique to our [web SDK](/develop/sdks/web). It has relaxed timeout settings since latencies can be highly variable in individual users' browsers.

### InRegion - Default

`Configurations.InRegion.Default` is the recommended configuration for most server-side use cases, where you send requests to Momento services from your apps hosted in the same cloud provider Region. It has more aggressive timeouts and retry behavior than the Laptop config, so it will fail faster and allow your application to fall back to your database or other data source more quickly. This helps ensure your applications don't bottleneck on Momento during a network or service interruption.

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### InRegion - Low Latency

`Configurations.InRegion.LowLatency` is a configuration that prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing some throughput to achieve this. It will time out quicker than the `InRegion.Default` configuration. Use this configuration if the most critical factor is to ensure that cache unavailability doesn't force unacceptably high latencies for your application, and you want to fall back to application logic or an authoritative data source more quickly if the cache hasn't responded.

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` is a configuration that is available in some SDKs, and is optimized for the AWS Lambda environment. It has configuration settings designed to pre-warm the client on Lambda cold starts, and to ensure the connection is re-established proactively if a Lambda remains idle for long enough for the connection to time out.

<SdkExampleTabs snippetId={'API_ConfigurationLambda'} />

## Error Handling / Production Readiness

Each of our SDKs has its own page in this documentation; you can navigate to them by clicking `Develop`->`SDKs` in the left nav. On each of these pages, you'll find a link for "Taking your code to prod" that provides best practices for production-ready code in that language.

Here are some general notes on error handling in Momento that apply to all SDKs.

Errors which occur in calls to `CacheClient` methods (e.g. Get, Set, Increment) are surfaced to developers as part of the return values of the calls, as opposed to throwing exceptions. This makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why [Exceptions are bugs](https://www.gomomento.com/blog/exceptions-are-bugs), and send us any feedback you have!

This also helps to ensure your application doesn't crash at runtime. Momento is a cache, so applications usually have an authoritative data source they retrieve data from if the cache is unavailable. Therefore, Momento SDKs are designed to avoid throwing exceptions so your app won't crash if you forget to add a try/catch block. 

Instead, Momento response objects extend from a parent class, have child types such as `Hit,` `Miss,` and `Error,` and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a `Hit,` a `Miss,` or an `Error`, and then branches accordingly. Using this approach, you get a type-safe response object in the case of a cache hit, with `value` properties that you can be assured at compile-time are not `null.` If the cache read results in a `Miss` or an `Error,` you'll also get a type-safe object that you can use to get more information about what happened (with properties such as `errorCode` that aren't present on a `Hit` object).

Here's an example of how to do the pattern matching on a `Hit`/`Miss`/`Error` response:

<SdkExampleTabs snippetId={'API_ErrorHandlingHitMiss'} />

Some APIs, such as write APIs (e.g. Set, Delete) only have `Success` and `Error` responses (as opposed to `Hit`/`Miss`). Here's an example of handling one of these responses:

<SdkExampleTabs snippetId={'API_ErrorHandlingSuccess'} />

In all cases, your IDE will be able to give you hints as to which types of responses are available for a given API, and what properties/methods are available on each of the response types.

For an example of how errors response work and use, watch this video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/h9FiNCxlZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

For more information, see our [Response Objects](/develop/api-reference/response-objects) page, and the docs for the specific SDK that you are using (under `Develop`->`SDKs` in the left nav).




