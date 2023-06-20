---
sidebar_position: 2
sidebar_label: Common Caching Use Cases
title: Cache Concepts | Common caching use cases
description: Learn about the common use cases for a cache and how to use them in your daily work.
---

# Cache Concepts: Common caching use cases

## Video 
<iframe width="560" height="315" src="https://www.youtube.com/embed/IlVRBF96Ci0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Transcript
In this module, we'll discuss common use cases for caching and how they might work with caching.

The first common use case is API responses. This is where you cache commonly used API calls to improve application performance and reduce calls to those APIs that generate somewhat static content. For example, consider an e-commerce website that uses an API to a microservice to retrieve product information.

This API is called every time a user visits a product detail page. To reduce the load on the server and improve the performance of the website, the API response can be cached. So when a user visits the product detail page, the website can check the cache to see if the response has already been stored. If it has, the cached response can be returned immediately without calling the API again.

The second use case is caching database query results. And this one might be one of the most common and important that I see. This is where you cache commonly used data to reduce the load on the database and improve application performance. For example, consider a news website that has a database of articles. When a user visits, the home page, the website should present the latest articles. If these articles are in the cache, the customer is served faster and with less overall load and cost on the entire system.

The third use case is caching static assets. In this use case, we're discussing caching, image files, data files, configuration files, scripts, and the like. Some of these assets might be cached in a caching server, while others make sense to cache in a user's client. These items don't change often, but they are often used and likely need to be available very quickly to the user.

Since it is user-facing, it is critical the data is available very fast and can be changed. Many times, data like this is ephemeral; for example, after a user session is over, the data is no longer needed. Therefore a cache is a fantastic place to store exactly this. Set of time to live value, and when the user session times out, their cached data is deleted by the cache on your behalf.

The final scenario is user session and personalization data. This is not strictly caching at all. It's more like a primary data store, but one that doesn't need the level of durability that a typical database provides and can thus benefit from a lower cost and better performance of a cache. This can be web or app usage, data shopping cart info, site preferences, and the like. Some of this data might be static, but most times, it changes quickly as the user navigates through a website or an app.

These four common use cases for caching or just the beginning of how you might cache data to give your users a better experience, lower your own costs, and manage your architecture better.
