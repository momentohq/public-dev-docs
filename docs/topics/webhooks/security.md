---
sidebar_position: 2
sidebar_label: Security
title: Webhook Security
description: Learn how to secure your endpoint accepting webhook requests with request signatures and verification.
pagination_next: null
hide_title: true
keywords:
  - momento
  - webhooks
  - security
  - eda
  - event-driven architectures
  - serverless
---

# Secure your webhook endpoints

After you successfully connect a webhook to Momento, it is recommended to validate incoming requests to guarantee the authenticity. Since your endpoint is publicly accessible, guaranteeing the sender is critical in protecting against bad actors. Authenticity and integrity of the requests can be validated in a couple of ways.

## Request signing

Request signing is a security measure used in software systems to verify the authenticity and integrity of a message. Prior to publishing, Momento signs webhook events with a signature contained in the request's `momento-signature` header. This signature uses your webhook's [signing secret](#signing-secret) and event request body to confirm authenticity. This allows you to verify the event originated from Momento, not from a 3rd party or malicious actor.

### Verifying signatures with the Momento SDK

The Momento [Node.js SDK](/sdks/nodejs) includes native support for verifying signatures. This is the recommended approach to verify signatures. To verify, provide the raw request body, the signature, and your signing secret.

```javascript
import express from 'express';
import { WebhookUtils } from '@gomomento/sdk';
const app = express();

app.post('/', (req, res) => {
    const response = WebhookUtils.validateWebhookRequest({
        body: req.rawBody,
        signature: req.headers['momento-signature'],
        signingSecret: process.env.SIGNING_SECRET
    });

    if (response === WebhookUtils.RequestValidation.VALID) {
        // Request is valid. Continue processing.
    } else {
        res.status(403).send('Signature invalid');
    }
});
```

### Verifying signatures manually

For other languages, or if you prefer to verify the signature yourself, you can use an *HMAC SHA3-256* with your signing secret to validate the incoming request.

```javascript
import * as crypto from 'crypto';

const didRequestComeFromMomento = (req, secret) => {
    const hash = crypto.createHmac("SHA3-256", secret);
    const hashed = hash.update(req.rawBody).digest('hex');
    return hashed === req.headers['momento-signature'];
};
```

## User Agent

In addition to the digital signature, all webhook events also receive a `User-Agent` header. This can be used to in conjunction with the signature to guarantee authenticity or used to divert the workflow for testing scenarios. This header is a static value that only changes on major version releases:

`Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)`

The value is composed of the following pieces:

* **Momento** - Indicates the origin is from Momento
* **1.0** - Major version number of the service
* **Webhooks** - States the specific origin from the request
* **+https://docs.momentohq.com/topics/webhooks** - Additional information about the webhook service can be found here

:::warning

Do not exlusively use this value to validate incoming requests. This header is easily spoofed and is not intended to verify authenticity on its own.

:::

### Running test scenarios

Before bringing your app to production, you might want to test your webhook is in working order and you can verify requests without executing your production code. This is where the `User-Agent` header can be used to divert execution of your code. By creating a request, signing it yourself using the [manual verification code](#verifying-signatures-manually), and publishing to your endpoint with a different `User-Agent` header value, you can shortcut the execution after verifying the payload.

```javascript
const MOMENTO_USER_AGENT = 'Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)';
const TEST_USER_AGENT = 'Test Harness/PostmanRuntime';

app.post('/', (req, res) => {
    if(didRequestComeFromMomento(req, process.env.SIGNING_SECRET)){
        if(req.headers['User-Agent'] === MOMENTO_USER_AGENT){
            // Continue processing
        } else if (req.headers['User-Agent'] === TEST_USER_AGENT) {
            // This is a test request, return success
            res.status(200).send('Skipping execution');
        }
    } else {
        res.status(403).send('Signature invalid');
    }
});
```

## Signing secret

When you create a new webhook in Momento you will be provided a signing secret. This secret value is used to digitally sign event payloads from Momento, allowing you to verify authenticity of a request. You can obtain the secret in either programmatically or via the [Momento console](https://console.gomomento.com).

### Obtaining your signing secret programmatically

When you create a new webhook with the [putWebhook API](./../develop/api-reference/webhooks#put-webhook-api), you will receive the signing secret as part of a successful response. If you lose the secret or forget to save it as part of the request, the [getWebhookSecret API](./../develop/api-reference/webhooks#get-webhook-secret-api) will return the current value.

### Obtaining your signing secret via the Momento console

If you prefer using the Momento console, you can always navigate to your webhook and click on the *copy* button next on the secret string row.

![Webhook detail page in the Momento Console](@site/static/img/webhook-secret-string.png)

To navigate to the webhook detail page, click on the cache of your choice on the [cache list page](https://console.gomomento.com/caches). Navigate to the *Webhooks* menu option and click on the webhook you wish to view.

:::tip
When you first create a webhook you will be navigated to the webhook list page. To retrieve the signing secret, you must then click into the webhook and press the copy button.
:::

## Considerations

The verification information listed above is the minimum required to guarantee authenticity of an incoming request. However, further security best practices should also be considered when building your webhook.

### Replay attacking

If a valid webhook event is intercepted by a malicious actor and your endpoint implements sender verification only, you are susceptible to a *replay attack*. A replay attack occurs when a bad actor sends a valid request to your system repeatedly, forcing your system to process the same event multiple times. To prevent these attacks from harming your system, consider also validating the age of the event. Any event that comes in older than your allowed age threshold would be automatically discarded.

You can use the [publish_timestamp](./overview#publish_timestamp) property of the event to determine age. As best practice, consider rejecting events *older than 60 seconds*.

### Regularly rotate secrets

If your webhook signing secret is compromised, you cannot guarantee authenticity of a request. Consider rotating the secret periodically to ensure safety of your endpoints. You can rotate a secret using the [rotateWebhookSecret API](./../develop/api-reference/webhooks#rotate-webhook-secret-api).
