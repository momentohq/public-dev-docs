---
sidebar_position: 1
sidebar_label: Common use cases
title: MediaStore use cases
description: See how others commonly use Momento MediaStore to boost performance and reliability in production
pagination_next: null
hide_title: true
keywords:
  - momento
  - mediastore
  - origin
  - streaming
  - live
  - elemental
  - serverless
---

# Common use cases

Momento MediaStore is designed to serve a wide range of media streaming needs, from large-scale live streaming events to efficient video on demand (VOD) delivery. Its ultra-low latency architecture, scalability, and reliability make it the ideal origin solution for modern media workflows. Below are some of the most common use cases where it excels.

## Live streaming high-traffic events

[Live streaming](/mediastore/streaming/live-streaming/how-it-works) major events, such as sporting events, concerts, or global conferences, requires a scalable and reliable origin to handle sudden traffic spikes and deliver content in real time. As millions of viewers tune in, the origin must store and serve video segments quickly to avoid latency or buffering issues.

### Why Momento MediaStore is the best fit

* **Scalability** - Effortlessly scales to handle millions of concurrent requests, ensuring no performance degradation during peak times.
* **Low-latency segment retrieval** - [Video segments](/mediastore/core-concepts/segments) and manifest files are stored in-memory, ensuring near-instant access for content delivery networks (CDNs), which minimizes [glass-to-glass latency](/mediastore/streaming/live-streaming/glass-to-glass-latency).

## Video on demand (VOD)

[Video on demand (VOD)](/mediastore/streaming/video-on-demand/media-storage) platforms serve a vast library of pre-recorded content to users at their convenience. Efficient media storage and retrieval are key to providing a smooth, buffer-free viewing experience, especially during peak demand times when popular content is being accessed by thousands of viewers simultaneously.

### Why Momento MediaStore is the best fit

* **Fast access to content** - Video segments and manifest files are stored in-memory, reducing the time it takes for the video player to retrieve the first segment and start playback.
* **Tiered storage support** - Frequently accessed content can be stored in high-speed memory for rapid retrieval, while less popular content can be moved to cost-effective storage tiers, optimizing performance and cost.
* **Scalability for large libraries** - Whether you are managing a small library or serving millions of users with thousands of hours of content, Momento MediaStore scales effortlessly to handle demand.

## Adaptive bitrate streaming (ABR)

[Adaptive bitrate streaming (ABR)](/mediastore/performance/adaptive-bitrates/how-it-works) is a technique used to dynamically adjust video quality based on the viewer's available bandwidth. By storing and delivering multiple versions of the same video at different bitrates and resolutions, **Momento MediaStore** supports seamless transitions between quality levels, allowing viewers to experience the best possible quality without interruptions.

### Why Momento MediaStore is the best fit

* **Efficient segment delivery** - Segments are stored in-memory, allowing the video player to quickly retrieve the appropriate bitrate based on current network conditions.
* **Fast manifest file access** - Immediate access to manifest files allows the player to make real-time decisions about which segments to load, reducing buffering and improving the viewer experience.
* **Multiple quality levels supported** - Whether you're streaming in 4K or 480p, **Momento MediaStore** supports the storage and delivery of multiple quality levels with minimal latency.

## Interactive streaming and real-time engagement

In interactive streaming scenarios, such as live auctions, online gaming, or real-time polling, **low latency** is critical for maintaining real-time interaction. High latency can disrupt the experience, causing delays in action or feedback, which can frustrate users and reduce engagement.

### Why Momento MediaStore is the best fit

* **Momento Topics for real-time updates** - For interactive experiences, **Momento Topics** delivers real-time event updates or messages between viewers and the platform, ensuring live interactions remain synchronized. Whether it's triggering actions in a live auction or updating scores during a live game, **Momento Topics** ensures real-time communication.
* **Reliable scaling** - Ranging from small, interactive sessions to a large, global event, **Momento MediaStore** can scale to handle high volumes of requests without compromising performance
* **Real-time segment retrieval** - For real-time engagement, quick access to video segments ensures that players or interactive elements respond immediately to user inputs.
