---
sidebar_position: 2
pagination_prev: null
sidebar_label: JS Web SDK
displayed_sidebar: platformSidebar
title: Get to know the Momento Web SDK
description: The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript, and take advantage of caching and pub-sub features without the need for server-side infrastructure. Find resources and examples here!
keywords:
  - momento
  - cache
  - caching
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - redis
  - serverless
  - sdk
  - sdks
  - api
  - typescript
  - javascript
  - nodejs
  - node.js
  - examples
  - resources
  - getting started
  - browser
  - web
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# Momento Web SDK for JavaScript in browsers

Momento provides two JavaScript SDKs; [one for Node.js](/platform/sdks/nodejs) and one for browsers other web applications (this page). The two SDKs have identical APIs, so your code will look the same except for `import` statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments.

The Node.js SDK is best suited for server-side use cases. The Momento web SDK, however, allows developers to write JavaScript code that runs in a browser and communicates directly with Momento services. This allows you to avoid the typical overhead of building and operating your own web service to mediate cache or pub/sub calls between the browser and Momento. It also means one less hop for your web traffic, so you can get even better performance out of your browser application. The best of both worlds!

You can also use the web SDK in other non-Node.js JavaScript environments.

The Momento web SDK is available via the npm package [`@gomomento/sdk-web`](https://www.npmjs.com/package/@gomomento/sdk-web).

The source code can be found on GitHub: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript).

## Requirements

- A Momento API key is required; you can get one from the [Momento web console](https://console.gomomento.com/).

## Resources

- [Getting started with Momento Cache in JavaScript](/platform/sdks/nodejs/cache.mdx): this cheat sheet targets the Node.js SDK, but the web SDK APIs are fully compatible.
- [Getting started with Momento Topics in JavaScript](/platform/sdks/nodejs/topics.mdx): this cheat sheet targets the Node.js SDK, but the web SDK APIs are fully compatible.
- [Chat app: Next.js](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat): a dynamic app that allows users to chat in their browser by entering a cache and topic name. The application vends low scope, short-lived auth tokens to the browser which uses them to subscribe to the topic.
- [Chat app: Vite](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app): a static version of the chat app that requires a separate API (such as our [Node.js token vending machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)) to provide auth tokens to browsers.
- [Web SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md): working example projects that illustrate how to use the web SDK

## Momento web SDK and Momento Topics

Momento Topics significantly simplifies publisher-subscriber communication in a browser. Traditionally, developers example of this is a chat application embedded in a website; you are not only building the client code for the browser, but the server-side code for routing all the communications.

This server-side complexity is eliminated by incorporating Momento Topics with the Momento web SDK. Developers can subscribe to Momento Topics directly from the browser. Momento then takes care of all communication when messages are published to the topic, eliminating the need for custom server-side infrastructure for WebSockets!

## Using the web SDK for browsers

While the API calls are [identical to the Momento Node.js SDK](/platform/sdks/nodejs/cache.mdx), the import/require statement will consume the `@gomomento/sdk-web` package from npm, instead of `@gomomento/sdk` (which is the Node.js SDK).

Here's an example import statement for the web SDK:

`import {CacheClient} from ‘@gomomento/sdk-web’;`

## Credentials for Browsers

In order for your browser application to communicate with Momento services, you will need to provide the browser with a Momento auth token.
The recommended practice is to generate a Momento disposable token that has expiring credentials for each browser session. This enables the app to distribute tokens without worrying about your data being compromised.

To create a Momento disposable token for use in the browser, you will generally need a ["token vending machine"](https://www.gomomento.com/blog/introducing-the-momento-token-vending-machine) component. The token vending machine can be a [standalone application](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) with an HTTP endpoint that a static website can access, or it can be a component embedded into the server side of your web application, as in our [Next.js chat app example](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/nextjs-chat/README.md).

In either case, you will likely use the Node.js SDK to instantiate a Momento `AuthClient` and provide it an API key with Super User scope generated via the [Momento Console](https://console.gomomento.com/):

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_InstantiateAuthClient'} />

Then you will use the `generateDisposableToken` API to create a disposable token that you can vend to the browser. These tokens are short-lived by default and they must expire within one hour.

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_GenerateDisposableToken'} />

For more information on Momento tokens, including `DisposableTokenScope` and permission objects for authorization, see [Auth API Reference](/cache/develop/api-reference/auth#generatedisposabletoken).

## FAQ

<details>
  <summary>Is the traffic from the browser encrypted?</summary>

  As with all traffic with Momento services, the web SDK is fully encrypted on the wire. In addition, the SDK uses TLS 1.2+ encryption.
</details>
