---
sidebar_position: 20
sidebar_label: SDK Error Handling
title: SDK error handling
description: Discover how to handle errors when using the Momento SDK.
pagination_next: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDK Error Handling

Each of our SDKs has its own page in this documentation; you can navigate to them by clicking `Develop`->`SDKs` in the left navigation menu. On each of these pages, you'll find a link for "Taking your code to prod" which provides best practices for production-ready code in that language.

Momento SDKs are designed to behave well in production environments using the pre-built configuration objects provided, so most users can easily move from proof of concept to production with no changes in operating practices. This page shares some general notes on error handling in Momento SDKs, and why the default behaviors we've chosen are recommended for most customers.

## Surfacing errors

Errors that occur in calls to `CacheClient` methods (e.g. Get, Set, Increment) are surfaced to developers as part of the return values of the calls, as opposed to throwing exceptions. This makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why [Exceptions are bugs](https://www.gomomento.com/blog/exceptions-are-bugs), and send us any feedback you have!

This also helps to ensure your application doesn't crash at runtime. Momento is a cache, so applications usually have an authoritative data source they from which they retrieve data if the cache is unavailable. Therefore, Momento SDKs are designed to avoid throwing exceptions so your app won't crash if you forget to add a try/catch block.

Instead, Momento response objects extend from a parent class, have child types such as `Hit,` `Miss,` and `Error,` and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a `Hit,` a `Miss,` or an `Error`, and then branches accordingly. Using this approach, you get a type-safe response object in the case of a cache hit, with `value` properties that you can be assured at compile-time are not `null.` If the cache read results in a `Miss` or an `Error,` you'll also get a type-safe object that you can use to get more information about what happened (with properties such as `errorCode` that aren't present on a `Hit` object).

Here's an example of how to do the pattern matching on a `Hit`/`Miss`/`Error` response:

<SdkExampleTabs snippetId={'API_ErrorHandlingHitMiss'} />

Some APIs, such as write APIs (e.g. Set, Delete) only have `Success` and `Error` responses (as opposed to `Hit`/`Miss`). Here's an example of handling one of these responses:

<SdkExampleTabs snippetId={'API_ErrorHandlingSuccess'} />

In all cases, your IDE will be able to give you hints as to which types of responses are available for a given API, and what properties/methods are available on each of the response types.

For an example of how the error response works and how to use it, watch this video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/h9FiNCxlZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Retrying calls that returned an error
The general pattern of behavior you can expect from Momento SDKs when it comes to retrying a call after an error response is as follows:

<img src="/img/sdk_retry_behavior.png" width="100%" alt="logic diagram depicting SDK retry behavior"/>

Momento SDKs do not retry throttled requests ([limits exceeded](/cache/manage/limits)). For other errors, the SDK will not retry if the operation requested is not [idempotent](https://en.wikipedia.org/wiki/Idempotence). For example, if you are incrementing a counter and receive an error response, the SDK will not retry on your behalf (because this could result in over-counting). In the case of non-idempotent operations, it is safer to let the developer choose whether to retry.
