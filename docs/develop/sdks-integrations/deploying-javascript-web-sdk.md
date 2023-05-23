---
sidebar_position: 5
sidebar_class_name: sidebar-item-websdk
sidebar_label: Web SDK
title: Deploying the web SDK for JavaScript in browsers
description: Get up and running quickly with the Javascript web-sdk for use in browsers connecting to a Momento Cache or Topics services.
---

# Deploying the web SDK for Javascript in browsers
Momento provides a fully browser-compatible SDK, which is executed within a user’s browser facilitating direct communication with Momento services. This functionality bypasses the customary requirement for building and operating your own web service to mediate cache or pub/sub calls between the browser and Momento services. Consequently, this not only enhances the efficiency of your web applications but also broadens the scope of feasible technical use cases.

## Web SDK and Momento Topics
Momento Topics significantly simplifies pub-sub communication in a browser. Traditionally, developers establish server-side infrastructure to manage web socket connections for all active browser clients. A classic example of this is a chat application embedded in a website. This requirement is eliminated by incorporating Momento Topics with the Momento Web SDK. Developers can subscribe to topics directly from the browser. At the same time, Momento takes care of all communication when messages are published to the topic, eliminating the need for server-side infrastructure for web sockets.

# Using the Web SDK for browsers
While the API calls are [identical to the Momento node.js SDK](https://github.com/momentohq/client-sdk-javascript), the import/const statement uses `@gomomento/sdk-web` instead of `@gomomento/sdk` as the Web SDK is its own entity.

`import {CacheClient} from ‘@gomomento/sdk-web’;`


Link to node.js cheat sheet
Link to web SDK examples directory in client-sdk-javascript repo
Link to Allen’s demo app that includes pubsub
Maybe even a screenshot of Allen’s app?

Credentials for Browsers
In most cases, generate a single-use Momento auth token that has expiring credentials to distribute to the browser. To create a Momento auth token for use in the browser, use the `generateAuthToken` API. Here is a code sample:
```javascript
const authClient = new AuthClient({credentialProvider: …});
const generateResponse = await sessionTokenAuthClient.generateAuthToken(
    	AllDataReadWrite,
    	ExpiresIn.minutes(30)
  	);
```

## FAQ
Q: Is the traffic encrypted?
A: As with all traffic with Momento services, the Web SDK is fully encrypted on the wire. In addition, the SDK uses minimum TLS 1.2+ encryption.
