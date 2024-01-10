---
sidebar_position: 7
sidebar_label: Validating webhook requests
title: Validating webhook requests
description: Learn how to secure your endpoint accepting webhook requests with request signatures and verification.
pagination_next: null
---

# Validating Webhook requests

Webhooks offer a powerful means to connect with a broader event-driven architecture (EDA) by enabling you to trigger any
POST API endpoint whenever a new message is published on a Momento Topic. While this capability is a powerful tool for developers, one of
the first questions many developers ask when building a webhook endpoint is “how do I guarantee that messages received
on this API are truly being sent by Momento?”

Lets deep dive on request signing and how it can be used to verify both the sender and integrity of a message received.
But before we dive into [Momento webhooks](https://docs.momentohq.com/topics/webhooks) and how to validate messages, we
first need to talk about request signing in
general.

## What is request signing?

> Request signing is a security measure used in computer systems to verify the authenticity and integrity of a message
> or request.

Request signing is commonly employed in web applications, APIs, and other distributed systems where communication occurs
between different components or services. It provides several security benefits, including:

* **Authentication:** Ensures the sender of the request is who they claim to be.
* **Integrity:** Verifies that the request data has not been altered during transmission.
* **Non-repudiation:** The sender cannot deny sending the request, as the digital signature serves as proof of origin.

## How to implement request signing

1. **Sender generates a request**:  
   When a client or user initiates a request, the sender (client) generates a request message that includes information
   such as the request method, headers, body, and other relevant details.
2. **Generate a signature**  
   The sender then creates a digital signature based on the request data. This signature is typically generated using a
   secret key or some form of cryptographic algorithm. The secret key is known only to the sender and the receiver.
3. **Include the signature in the request**  
   The generated signature is appended to the original request, often in a specific header or as a query parameter.
4. **Send the signed request**  
   The signed request is sent to the recipient (server).
5. **Verification at the receiver's end**  
   Upon receiving the request, the recipient (server) performs the following steps:
   Extracts the request data and the included signature.
   Recalculates the signature using its own copy of the secret key and compares it to the received signature.
   If the calculated signature matches the received signature, the request is considered authentic and has not been
   tampered with during transit.

## How does Momento Webhooks implement request signing?

Now that we have a general idea of what request signing is and the benefits it provides, let's talk about how it is
implemented with Momento Webhooks, specifically addressing webhook security.

Each webhook that gets created will get a unique signing secret. Using this signing secret, you can verify whether this
request came from Momento. Each HTTP request sent by Momento includes a momento-signature header. This signature is
created by combining the signing secret with the request body using a standard HMAC hash.

### Obtaining your signing secret:

When creating a new webhook using the `putWebhook` API in the Momento SDK, you receive a secret in the response.

```typescript
const result = await webhookClient.putWebhook(
    'exampleCache', 'exampleWebhook', {
        destination: new PostUrlWebhookDestination('https://example.com/webhook'),
        topicName: 'exampleTopic',
    });
if (result instanceof PutWebhook.Success) {
    console.log('Webhook created successfully. Secret:', result.secret);
}
```

You can also get a copy of the signing secret by calling `getWebhookSecret` API

```typescript
const result = await webhookClient.getWebhookSecret(
    'exampleCache',
    'exampleWebhook'
);
if (result instanceof GetWebhookSecret.Success) {
    console.log('Webhook secret retrieved successfully:', result.secret);
}
```

### Validating inbound request:

1. Retrieve the momento-signature header from the request
2. Using HMAC SHA3-256, hash the request body using the signing secret associated with the webhook
3. Compare the computed signature to the momento-signature header on the request

```typescript
import * as crypto from 'crypto';

const didRequestComeFromMomento = (req: Request): boolean => {
    const hash = crypto.createHmac("SHA3-256", "the signing secret");
    const hashed = hash.update(req.rawBody).digest('hex');
    return hashed === req.headers['momento-signature'];
}
```

Momento also provides utility functions in certain [SDKs](https://docs.momentohq.com/topics/develop) to assist with the
request validation. For example, you could use
our [Javascript SDK](https://docs.momentohq.com/topics/develop/sdks/nodejs) to do the validation for you:

```typescript
import {WebhookUtils} from '@gomomento/sdk';

const res = WebhookUtils.validateWebhookRequest({
    body: requestBody,
    signature,
    signingSecret,
});

if (res === WebhookUtils.RequestValidation.VALID) {
    // request is valid
} else {
    // request is invalid
}
```

## Closing Thoughts

By incorporating signature validation into your webhook destination, you can ensure that the messages received originate
exclusively from Momento. This adds a layer of certainty by confirming that the message content aligns with the attached
signature. After you validate the request, you can confidently proceed with processing the message. Congratulations, you
genuinely verified your messages are from Momento, guarding against potential malicious attempts to spoof your endpoint
and enhancing webhook security.
