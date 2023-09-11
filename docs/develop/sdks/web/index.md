---
sidebar_position: 2
title: Momento JavaScript web SDK
pagination_prev: null
sidebar_label: JS Web SDK
description: Information about the Momento web SDK
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleCodeBlock to SdkExampleCodeBlockImpl
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# Momento web SDK for JavaScript in browsers

Momento provides two JavaScript SDKs; [one for Node.js](/develop/sdks/nodejs) and one for other web applications. The two SDKs have identical APIs, so your code will look the same except for `import` statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments.

<img src="/img/web.jpg" width="90%" alt="a picture of abstract web strung between node.js nodes." />

The Node.js SDK is best suited for server-side use cases. The Momento web SDK, however, allows developers to write JavaScript code that runs in a browser and communicates directly with Momento services. This allows you to avoid the typical overhead of building and operating your own web service to mediate cache or pub/sub calls between the browser and Momento. It also means one less hop for your web traffic, so you can get even better performance out of your browser application. The best of both worlds!

You can also use the web SDK in other non-Node.js JavaScript environments.

The Momento web SDK is available via the npm package [`@gomomento/sdk-web`](https://www.npmjs.com/package/@gomomento/sdk-web).

The source code can be found on GitHub: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript).

## Requirements

- A Momento auth token is required; you can get one from the [Momento web console](https://console.gomomento.com/).

## Resources

- [Momento Node.js cheat sheet](/develop/sdks/nodejs/cheat-sheet.mdx): this cheat sheet targets the Node.js SDK, but the web SDK APIs are fully compatible.
- [Chat app: Next.js](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat): a dynamic app that allows users to chat in their browser by entering a cache and topic name. The application vends low scope, short-lived auth tokens to the browser which uses them to subscribe to the topic.
- [Chat app: Vite](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app): a static version of the chat app that requires a separate API (such as our [Node.js token vending machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)) to provide auth tokens to browsers.
- [Web SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md): working example projects that illustrate how to use the web SDK
- COMING SOON: Taking your code to prod: configuration and error handling in the web SDK

## Momento web SDK and Momento Topics

Momento Topics significantly simplifies publisher-subscriber communication in a browser. Traditionally, developers example of this is a chat application embedded in a website; you are not only building the client code for the browser, but the server-side code for routing all the communications.

This server-side complexity is eliminated by incorporating Momento Topics with the Momento web SDK. Developers can subscribe to Momento Topics directly from the browser. Momento then takes care of all communication when messages are published to the topic, eliminating the need for custom server-side infrastructure for WebSockets!

## Using the web SDK for browsers

While the API calls are [identical to the Momento Node.js SDK](/develop/sdks/nodejs/cheat-sheet.mdx), the import/require statement will consume the `@gomomento/sdk-web` package from npm, instead of `@gomomento/sdk` (which is the Node.js SDK).

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

For more information on Momento tokens, including `DisposableTokenScope` and permission objects for authorization, see [Auth API Reference](../../api-reference/auth.md#generatedisposabletoken-api).

## FAQ

<details>
  <summary>Is the traffic from the browser encrypted?</summary>
As with all traffic with Momento services, the web SDK is fully encrypted on the wire. In addition, the SDK uses TLS 1.2+ encryption.
</details>
