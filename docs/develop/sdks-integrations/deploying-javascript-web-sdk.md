---
sidebar_position: 5
sidebar_class_name: sidebar-item-websdk
sidebar_label: Web SDK
title: Momento web SDK for JavaScript in browsers
description: Get up and running quickly with the JavaScript web SDK for use in browsers connecting to Momento Cache or Topics services.
---

# Momento web SDK for Javascript in browsers

Momento provides two JavaScript SDKs; one for Node.js and one for other web applications. The two SDKs have identical APIs, so your code will look the same except for `import` statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments.

The Node.js SDK is best suited for server-side use cases. The Momento web SDK, however, allows developers to write JavaScript code that runs in a browser and communicates directly with Momento services. This allows you to avoid the typical overhead of building and operating your own web service to mediate cache or pub/sub calls between the browser and Momento. It also means one less hop for your web traffic, so you can get even better performance out of your browser application. The best of both worlds!

You can also use the web SDK in other non-Node.js JavaScript environments, such as [Cloudflare workers](https://workers.cloudflare.com/).

## Momento web SDK and Momento Topics

Momento Topics significantly simplifies publisher-subscriber communication in a browser. Traditionally, developers example of this is a chat application embedded in a website; you are not only building the client code for the browser, but the server-side code for routing all the communications.

This server-side complexity is eliminated by incorporating Momento Topics with the Momento web SDK. Developers can subscribe to Momento Topics directly from the browser. Momento then takes care of all communication when messages are published to the topic, eliminating the need for custom server-side infrastructure for WebSockets!

## Using the web SDK for browsers

While the API calls are [identical to the Momento node.js SDK](/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md), the import/require statement will consume the `@gomomento/sdk-web` package from npm, instead of `@gomomento/sdk` (which is the Node.js SDK).

Here's an example import statement for the web SDK:

`import {CacheClient} from ‘@gomomento/sdk-web’;`

### Links

Here are some other useful links for getting started with the Momento web SDK:

* [Example Chat App](https://github.com/momentohq/example-chat-app) - fully functional chat application built using the web SDK!

![chat screenshot](/img/web-sdk-chat-app.png)

* [Momento Node.js Cheat Sheet](/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md)
* [Example web SDK scripts on github](https://github.com/momentohq/client-sdk-javascript/examples/web)

## Credentials for Browsers

In order for your browser application to communicate with Momento services, you will need to provide the browser with a Momento auth token. The recommended practice is to generate a Momento auth token that has expiring credentials for each browser session. This enables the app to distribute tokens without worrying about your data being compromised.

To create a Momento auth token for use in the browser, use the `generateAuthToken` API. Here is a code sample:

```javascript
const authClient = new AuthClient({
  credentialProvider: CredentialProvider.fromEnvironmentVariable({
    environmentVariableName: 'MOMENTO_AUTH_TOKEN',
  })
});
const generateResponse = await sessionTokenAuthClient.generateAuthToken(
    	AllDataReadWrite,
    	ExpiresIn.minutes(30)
);
if (generateResponse instanceof GenerateAuthToken.Success) {
  // if you get here, the auth token that you can send to the browser is available as:
  //
  //  generateResponse.authToken
  //
  // The expiration date is also available as:
  //
  //  generateResponse.expiresAt.epoch
}
```

## FAQ

<details>
  <summary>Is the traffic from the browser encrypted?</summary>
As with all traffic with Momento services, the web SDK is fully encrypted on the wire. In addition, the SDK uses TLS 1.2+ encryption.
</details>
