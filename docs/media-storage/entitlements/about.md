---
sidebar_position: 1
sidebar_label: About
title: Entitlements
description: Learn about media entitlements and how to use them with Momento Media Storage
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

# Entitlements in Momento Media Storage

Entitlements are the authorization mechanisms that control what content users can access based on their subscriptions, region, or viewing rights. Managing entitlements efficiently provides a **secure**, **personalized**, and **authorized** delivery of content. Momento enables you to implement low-latency, scalable patterns that manage, distribute, and enforce entitlements dynamically in real-time, ensuring the smooth delivery of content while safeguarding rights and access.

## What are entitlements?

Entitlements define the permissions and rights a user has to view specific media content. These permissions can be based on:

* **Subscription tiers** (premium vs. free)
* **Geographic location** (regional restrictions)
* **User identity** (logged-in vs. anonymous users)
* **Device limitations** (access on mobile devices only)
* **Time-bound access** (rental or limited-time access to specific content)

:::info
Entitlements answer the critical question: *“Can this user access this content, at this time, on this device?”*
:::

## Types of access restriction

Entitlements can be based on a number of factors depending on use case. Here are some common examples.

### Subscription-based

A user’s subscription level dictates which video libraries or specific titles they can stream. For example, only premium users can access 4K streams or exclusive content.

### Geo-restrictions

Content is restricted based on the viewer's geographic location due to licensing agreements. For example, certain content is available in the US but blocked in Europe.

### Device restrictions

Certain content might be available only on specific devices. For example, a media service could provide mobile-only offers or VR-specific experiences.

### Time-sensitive access

Some content is available only for a limited time, such as live events or pay-per-view offerings that expire after viewing.

## Efficiently managing entitlements with Momento Media Storage

Entitlement checks are often resource-intensive, especially when involving complex logic that depends on user data, location, device, and content metadata. Traditional approaches often result in high database loads and latenc With Momento, you can dramatically reduce this overhead by caching entitlement data and handling real-time authorization checks with minimal delay.

## Use Momento Cache for entitlement storage

Momento Cache is an ultra-low latency cache accessible from anywhere, including browsers, media servers, and auth mechanisms. After the initial entitlement calculation for a user is performed, you can store it in the cache to provide the fastest possible experience for your viewers.

Not only is Momento Cache blazingly fast, but it also automatically scales to millions of transactions per second (TPS), leaving you without the burden of infrastructure management during stressful high-demand events. This immediate elasticity prevents traffic bottlenecks on mission-critical components of your application.

With several data types at your disposal, Momento Cache offers a flexible way to store and fetch entitlement data for access control.

### Example entitlement object

Consider the example entitlement object below.

```json
{
  "subscription_level": "premium",
  "region": "US",
  "device_restriction": "none",
  "valid_from": "2024-10-01T00:00:00Z",
  "valid_until": "2024-12-31T23:59:59Z",
  "allowed_content": ["movie_id_123", "series_id_456"]
}

```

This object contains information about a user that can be used to check access in a number of ways. Storing this data efficiently depends on how you evaluate entitlements at runtime.

### Storing data as a dictionary

A [cache dictionary](/cache/develop/basics/datatypes#dictionaries) allows you to store individual string and number properties and fetch them either all at once or as a subset. This provides a granular way to check entitlements if specific content is strictly region-based, tiered, etc…

Dictionaries can store an entire JSON object with a single command, providing a quick and easy way to cache entitlements after calculation. Take the example below that stores the entire entitlements object on the auth server, then evaluates access based on subscription tier on the client in the media player.

```javascript
// Auth server
const entitlements = await calculateEntitlements(userId);
await cacheClient.dictionarySetFields(NAMESPACE, userId, entitlements);

// Client side media player
let subscriptionLevel = 'free';
const subscriptionResponse = await cacheClient.dictionaryGetField(NAMESPACE, userId, 'subscription_level');
if(subscriptionResponse.type == CacheDictionaryGetFieldResponse.Hit) {
  subscriptionLevel = subscriptionResponse.value();
}

const canView = subscriptionLevel === 'premium';
return canView;
```

In this example, the media player is fetching only the `subscription_level` property from the entitlements cache item, minimizing the amount of data loaded in the player.

If the entitlement evaluation is more involved and requires the entire object, it can be fetched in a single [dictionary fetch command](/cache/develop/api-reference/dictionary-collections#dictionaryfetch) instead.

### Storing data as a blob

An alternative to storing entitlements as a cache dictionary is storing it as a blob in a *scalar* cache item. This foundational object storage method will store data either as binary data or as a string.

```javascript
// Auth server
const entitlements = await calculateEntitlements(userId);
await cacheClient.set(NAMESPACE, userId, entitlements);

// Client side media player
let entitlements;
const entitlementsResponse = await cacheClient.get(NAMESPACE, userId);
if(entitlementsResponse.type == CacheGet.Hit) {
  entitlements = entitlementsResponse.value():
}

const canView = await evaluate(entitlements);
return canView;
```

This example fetches the entire entitlements object out of the cache and evaluates it with more meaningful calculations based on your specific business requirements.

:::tip
Accessing scalar values can be done via the [Momento HTTP API](/cache/develop/api-reference/http-api) or through [one of the SDKs](/platform/sdks), granting cache data access to anything with internet access. Cache dictionaries are only accessible through the Momento SDK.
:::

## Restricting access with Momento auth tokens

Another way to approach entitlements is by embedding access to content directly in [session tokens](/cache/develop/authentication/tokens). After your entitlements calculation is complete and you have a known list of media a user can access, you can grant explicit access to the content via a short-lived token.

If Momento Media Storage is being used as the [media origin](/media-storage/core-concepts/origin), fine-grained access control can be used to restrict access to content upon request.

:::warning
When using a CDN to serve media, this approach does not work. This solution is for use cases that fetch content directly from Momento. Momento’s Intelligent Gateway evaluates every incoming request against the provided auth token. A CDN would not forward a particular viewer's token to Momento, which would leave this approach ineffective.
:::

Imagine your content is stored in Momento Media Storage with the following structure:

```text
/{ContentName}/playlist.m3u8
/{ContentName}/1080p/playlist.m3u8
/{ContentName}/1080p/segment1.ts
/{ContentName}/720p/playlist.m3u8
/{ContentName}/720p/segment1.ts
```

This structure implies an [HLS](/media-storage/performance/adaptive-bitrates/hls) encoded video with multiple resolutions and bitrates. All keys for this particular piece of media are prefixed with the content identifier. When creating a short-lived token, you can grant read only access to all keys for that piece of content.

```javascript
const scope = {
  permissions: [ {
    role: 'readonly',
    cache: 'media',
    item: {
      keyPrefix: `/${ContentName}/`
    }
  }]
};

const token = authClient.generateDisposableToken(scope, ExpiresIn.hours(1), { tokenId: userId }):
```

This example creates a permission scope that grants read only access to every key beginning with the name of the content and creates a token with the Momento AuthClient valid for 1 hour with the user's id embedded in it for implicit identification. The token can then be served down the the media player to use to fetch the video directly from the origin. If the player attempts to load a video not explicitly granted in the token, it will receive an `Unauthorized` response.
