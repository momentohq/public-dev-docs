---
sidebar_position: 1
sidebar_label: Observability
sidebar_class_name: sidebar-item-nodejs
title: Observability for TypeScript and Node.js
description: Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleCodeBlock to SdkExampleCodeBlockImpl
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# Observability with Momento in Node.js

## Logging

Our goal for all of the Momento SDKs is to make sure that developers can direct Momento log output to the same destination that they are using for the rest of their application logs; therefore, we aim to be compatible with all of the popular logging frameworks for a given programming language.

There are many different logging libraries available for node.js. Some popular ones include:

- [Pino](https://github.com/pinojs/pino)
- [Winston](https://github.com/winstonjs/winston)
- [Bunyan](https://github.com/trentm/node-bunyan)
- [Morgan](https://github.com/expressjs/morgan)

To ensure that Momento is compatible with all of these libraries (and more!), we provide a light-weight logging facade that you can use to wrap your favorite logging client. To use it, you simply need to implement the `MomentoLoggerFactory` and `MomentoLogger` interfaces:

<SdkExampleCodeBlock language={'javascript'} file={'packages/core/src/config/logging/momento-logger.ts'} />

Your implementation will just be a thin wrapper around your logging library of choice. We provide a complete, working example implementation that uses the [`pino`](https://github.com/pinojs/pino) logger; you can find the source code for that here: [https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/doc-example-files/pino-logger.ts](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/basic/doc-example-files/pino-logger.ts).

Once you have defined your `MomentoLoggerFactory` and `MomentoLogger`, the last step is to configure your Momento client to use your preferred logger, like this:

<SdkExampleCodeBlock language={'javascript'} snippetId={'observability_CreateCacheClientWithPinoLogger'} />

Then you should see log messages from Momento coming through your pino logging environment. In this case you should see log messages that look like this:

```
[1685649962168] INFO (CacheClient/4386 on mycomputer.local): Creating Momento CacheClient
[1685649962168] INFO (ControlClient/4386 on mycomputer.local): Creating cache: test-cache
```

## Metrics
Metrics are measurements that provide quantitative information about system performance and behavior. They are numerical values captured and recorded over regular intervals, providing statistical data to aid in understanding the trends and patterns in a system.

For Momento specifically, you might desire to capture metrics on the number of requests made, their duration, request or response size, or failure rates. Capture these in the Node.js SDK using a middleware, which intercepts the Momento gRPC calls and responses. Here is an example that uses OpenTelemetry and Prometheus to capture request count faceted by request type:

First, set up metrics in your application:

<SdkExampleCodeBlock language={'javascript'} snippetId={'observability_setupMetrics'} />

Then, create a middleware that captures the metric:

<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/observability/example-metric-middleware.ts'} />

When you create the Momento `CacheClient`, add the middleware and the metric will be incremented with each request:

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_InstantiateCacheClientWithMiddleware'} />

Here is an example of the Grafana UI displaying a graph of get and set requests made against Momento:
![image](./images/grafana_screenshot.png)

## Traces
Traces provide a detailed timeline of processes within an application, showing the relationship between different components and services involved in a specific request or operation. They allow developers to analyze the sequence and duration of these operations, facilitating a better understanding of how data flows through the system.

The Momento Node.js SDK uses gRPC internally to communicate with the Momento servers. OpenTelemetry provides a capability for auto-instrumenting all gRPC calls with traces. You don't need to add any middleware code to produce these traces, like you do for the metrics. Here is an example that automatically generates traces for these calls and exports them to Zipkin:

<SdkExampleCodeBlock language={'javascript'} snippetId={'observability_setupTracing'} />

This needs to run before any Momento code.

Here is an example of the Zipkin UI displaying traces for a cache creation, a get, and a set:
![image](./images/zipkin_screenshot.png)

If the performance of your application is impacted by trace generation, you should consider sampling them to cut down on the number of traces generated. You can do this with OpenTelemetry by setting two environment variables:

```cli
export OTEL_TRACES_SAMPLER="traceidratio"
export OTEL_TRACES_SAMPLER_ARG="0.1"
```
Setting these will ensure that only 10% of traces are created.
