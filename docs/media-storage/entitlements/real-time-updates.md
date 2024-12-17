---
sidebar_position: 2
sidebar_label: Real-time updates
title: Real-time entitlement updates
description: Learn how to keep entitlements in sync across all your media players
hide_title: true
keywords:
  - momento
  - media storage
  - zero buffer rate
  - zbr
  - streaming
  - live
  - elemental
  - serverless
  - metrics
  - entitlements
---

# Making real-time updates to entitlements

When users purchase a subscription, you need to make new content immediately accessible. But if [entitlements](/media-storage/entitlements/about) are cached on client-side players, how do you invalidate it efficiently?

[Momento Topics](/topics) is a high-performance pub/sub service accessible from anywhere with tight security controls built in. When entitlements change, a message can be published to a topic to notify players of the update so they can respond immediately.

Let's take an example of a user who starts watching free tier content, but decides to upgrade her account to premium.

## 1. Entitlements are calculated and sent to the media player

Whenever the user logs in, the server calculates her entitlements, saves them in the cache, generated a session token unique for her, and passes it down to the browser making the request.

```javascript
const loginHandler = async (req, res) => {
  const { userId } = req.claims;
  const entitlements = calculateEntitlements(userId);
  await cacheClient.set(NAMESPACE, userId, JSON.stringify(entitlements));

  const scope = {
    permissions: [{
      role: 'readonly',
      cache: NAMESPACE,
      item: {
        key: userId
      }
    },
    {
      role: 'subscribeonly',
      cache: NAMESPACE,
      topic: userId
    }]
  };

  const tokenResponse = await authClient.generateDisposableToken(scope, ExpiresIn.hours(1), { tokenId: userId }):
  res.status(200).json({ token: tokenResponse.authToken, userId }):
}
```

The generated token allows the caller to read the entitlements object in the cache and to subscribe to a topic specific to the user.

## 2. Fetch entitlements and subscribe for updates

The user's browser now has a token that allows her to get what she needs to view free tier content and subscribe for updates if the entitlements change. Below is an excerpt of the code running in the browser (this could be a web page or in a media player component).

```javascript
// Call the loginHandler from the first step
const data = await login();
cacheClient = new CacheClient({ defaultTtlSeconds: 60, credentialProvider: CredentialProvider.fromString(data.token)}):
topicClient = new TopicClient({ credentialProvider: CredentialProvider.fromString(data.token)});

await topicClient.subscribe(NAMESPACE, data.userId, {
  onItem: (message) => updateEntitlements(data.userId)
});

updateEntitlements(data.userId);

function updateEntitlements(userId) {
  const entitlementsResponse = await cacheClient.get(NAMESPACE, userId):

  // set globally scoped entitlements object
  entitlements = entitlementsResponse.value();
  displayAvailableMedia();
}
```

Here, the browser is initializing both a Momento CacheClient and TopicClient with the token returned from the login API call. After the clients are created, it subscribes to the user-specific topic and fetches the entitlements out of the cache.

Whenever a message is received on the user topic, it calls a function to refresh the entitlements from the cache.

## 3. Update entitlements and notify

After watching a few videos, the user decides she would like to become a premium tier member. She goes through the checkout process and post checkout, the following code runs.

```javascript

const updateEntitlements = async (userId) => {
  // Do business logic to recalculate entitlements
  const newEntitlements = calculate(userId);

  await cacheClient.set(NAMESPACE, userId, JSON.stringify(newEntitlements));
  await topicClient.publish(NAMESPACE, userId, JSON.stringify(newEntitlements))
}
```

This code snippet runs some business logic to recalculate what the entitlements look like, then store the updated object in the cache. After the entitlements are updated, it publishes a message to the user-specific topic containing the updated entitlements.

This will signal to the connected browser to refresh the entitlements it has with the data out of Momento Cache, making sure it is immediately up to date with the changes. No additional work needs to be done! It's as easy as that!
