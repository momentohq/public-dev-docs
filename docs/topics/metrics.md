---
sidebar_position: 7
sidebar_label: Metrics
title: Topic Metrics
pagination_prev: null
description: Discover how to view your Topic usage directly in the Momento console
keywords:
  - momento
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - serverless
  - metrics
  - dashboard
  - metric
  - resources
hide_title: true
---

# Usage metrics

When developing and operating applications with Momento Topics, you'll want visibility to effectively diagnose bugs and optimize performance. Momento provides an hour of service-side metrics to all customers via the Momento console, aimed at facilitating troubleshooting and tuning. If you're an enterprise with critical dependency on Momento Cache, we recommend partnering more closely with the Momento team for support and delivery of detailed historical metrics.

Within the Momento console, you can visit the cache metrics dashboard by selecting the small bar graph icon on the left navigation menu, as shown below.

![image](@site/static/img/metrics_select.png)

The available metrics cover cache data plane operations only (control plane operations such as creation or deletion of a cache are not included), and for the preceding hour. The metrics presently show an aggregation for all the caches in your Momento account. You can view point data for any given minute by hovering over the bubble for that minute in the line graph. Metrics display typically lags by a minute or two.

## TPS (transactions per second)
This line graph represents the number of cache data operation requests per second, averaged over each one minute period. You can use this to understand the level of application activity within your caches. If you don't see anything here, you're not using any caches and should check the operational health of your application and the logic within your code!

![image](@site/static/img/metrics_tps.png)

## Byte count (data volume in/out of your Momento caches)
This line graph represents the number of bytes transferred in or out of your Momento caches summed over the one minute period. The total byte count transferred over the most recent hour is also shown in the top bar. You can use this to understand the level of application activity within your caches. If you don't see anything here, you're not using any caches and should check the operational health of your application and the logic within your code! The information on data transferred can be used to get an estimate of the throughput your applications are driving to your caches, which can tell you what your cost expectations might be for the month. Looking at both the TPS and the byte count metrics can also give you rough information about cache item size.

![image](@site/static/img/metrics_bytecount.png)

## Errors and successes
This graph tells you about the number of error and success responses from Momento for application requests to your caches. It can be viewed as a percentage or as a raw count of responses for the minute. If you are seeing an elevated level of errors, dig closer into your application logs to better understand the cause. Elevated error rates can be an indicator that your application requests are being throttled by Momento due to encountering a [service limit](/topics/limits).

![image](@site/static/img/metrics_success-error.png)

## Hits and misses (hit rate)
This graph tells you how well your application is applying caching - you want to see a high rate of hits versus misses. Factors that can affect your hit rate include the TTL chosen for your items and your strategy for populating the cache (you need to write the items into the cache if you expect to find them there next time you make a read). The higher the hit rate you achieve, the greater the benefit you'll see from caching. However, you should balance this against the staleness of the data your application is working with if you are using long TTLs.

![image](@site/static/img/metrics_hit-miss.png)


## FAQ
<details>
  <summary>How can I get metrics for more than an hour?</summary>

  For production, we recommend partnering with the Momento team for support - this includes publishing of detailed metrics into your observability tooling (presently CloudWatch but more options to come). With delivery of detailed metrics enabled, you can build alarms and dashboards in accordance with your operating standards.

</details>

<details>
  <summary>Why are there no latency metrics provided?</summary>

  Momento can only measure latency associated with traffic internal to the service (between request routers and storage nodes) - a much better indicator for your application is to measure latency as experienced by the client. This tells much more about the overall latency story and the experience your users are receiving. You might also consider using a canary to test and report on latency as experienced by end users somewhere further away on the network.

  For customers receiving detailed metrics delivery to CloudWatch, a latency metric with percentiles is provided. This can be used in comparison with client-side latency and canary latency to quickly determine whether a user experience problem is related to your Momento cache or if you should look elsewhere for root cause and resolution.

</details>
