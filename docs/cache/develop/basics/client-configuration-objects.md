---
sidebar_position: 10
sidebar_label: SDK Configuration Objects
title: SDK configuration objects
description: Discover how to use configuration objects to initialize the Momento SDK client.
pagination_prev: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDK Client configuration objects

`Configuration` objects contain the settings necessary for how a Momento client should connect to Momento services. The `Configuration` object controls settings such as timeouts, retries, logging, middleware, [read concern](../../learn/how-it-works/read-concern), and more.

Each SDK contains pre-built `Configuration` objects to help get you up and running as quickly as possible. We did the hard work of tuning for various deployment environments so you can focus on the things unique to your business. (We even have a blog series about it! [Shockingly simple: Cache clients that do the hard work for you](https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you))

Pre-built configurations come with a `latest()` version, which will always give you the latest recommended configuration for a given environment. For example,

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefaultLatest'} />

The `latest()` pre-built configuration may change between SDK releases as we continue to test, tune, and deliver better settings. If you would like to ensure your configuration does not change with an SDK upgrade, we provide fixed versions such as `v1()`, which are guaranteed to remain static from one release to the next. For example,

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

If you need a custom configuration, you can build your own `Configuration` object. See the examples in the `Configurations` namespace in the source code of each SDK to see how they are constructed.

We hope these configurations will meet the needs of most use cases, but if you find them lacking in any way, please open a GitHub issue on that SDK repo, or contact us at `support@momentohq.com`. We would love to hear about your use case so we can fix or extend the pre-built configurations to better support you.

## Pre-built configurations

Here are some of the pre-built configurations that you might be interested in.

### Laptop

`Configurations.Laptop` is a development environment, just for poking around on your... laptop :) It has relaxed timeouts and assumes your network latencies might be a bit high.

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### Browser

`Configurations.Browser` is a configuration unique to our [web SDK](/platform/sdks/web/index.md). It has relaxed timeout settings since latencies can be highly variable in individual users' browsers.

### InRegion - Default

`Configurations.InRegion.Default` is the recommended configuration for most server-side use cases, where you send requests to Momento services from your apps hosted in the same cloud provider Region. It has more aggressive timeouts and retry behavior than the Laptop config, so it will fail faster and allow your application to fall back to your database or other data source more quickly. This helps ensure your applications don't bottleneck on Momento during a network or service interruption.

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### InRegion - Low Latency

`Configurations.InRegion.LowLatency` is a configuration that prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing some throughput to achieve this. It will time out quicker than the `InRegion.Default` configuration. Use this configuration if the most critical factor is to ensure that cache unavailability doesn't force unacceptably high latencies for your application, and you want to fall back to application logic or an authoritative data source more quickly if the cache hasn't responded.

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` is a configuration that is available in some SDKs, and is optimized for the AWS Lambda environment. It has configuration settings designed to pre-warm the client on Lambda function cold starts, and to ensure the connection is re-established proactively if a Lambda function remains idle long enough for the connection to time out.

<SdkExampleTabs snippetId={'API_ConfigurationLambdaLatest'} />
