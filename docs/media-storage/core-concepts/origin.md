---
sidebar_position: 1
sidebar_label: Origin
title: What is an origin?
description: Learn what an origin is in the world of media and entertainment.
hide_title: true
keywords:
  - momento
  - momento media storage
  - origin
  - streaming
  - live
  - elemental
  - serverless
---

# What is an origin?

An origin is the **single source of truth** for media in a streaming workflow. It is responsible for storing and delivering media to content delivery networks (CDNs), which then distribute that content to players. Origins play a critical role making sure content is available, high-quality, and efficiently delivered to various geographic locations.

## Key responsibilities

1. **Storage** - Store video, audio, and manifest files, typically in formats for [adaptive bitrate streaming](/media-storage/performance/adaptive-bitrates/how-it-works)
2. **Delivery** - Retrieve media [segments](/media-storage/core-concepts/segments) and manifests and deliver them to a CDN
3. **Security** - Provide access control to protect the content
4. **Scalability** - Handle varying loads, from delivering a single video file to streaming to millions of viewers in real-time
5. **Reliability** - Maintain uptime and fault tolerance for timely (low tail latency) and low error rate (> 99.9%) reads and writes to prevent downstream latency

## Origins in media streaming

In a media streaming workflow, the origin is one of several components that work together to deliver content to end users. Here's how the media origin fits into the broader ecosystem:

![Diagram: Media streaming components](../images/streaming-components.png)

* **Video encoder** - Transforms raw video/audio files into formats suitable for streaming, like [HLS (HTTP Live Streaming)](/media-storage/performance/adaptive-bitrates/hls) or [DASH (Dynamic Adaptive Streaming over HTTP)](/media-storage/performance/adaptive-bitrates/dash)
* **Origin** - Stores the encoded media and manifests (playlists) and makes them available for distribution
* **Content delivery network (CDN)** - Distributes the content to end users by caching it in geographically distributed servers known as Points of Presence (PoP) to reduce latency and improve streaming performance
* **Media player** - The device (i.e. browser, smart TV, or mobile app) that requests the media segments from the CDN and plays them as specified by the manifest

## Momento Media Storage as an origin

Momento Media Storage is a purpose-built high-speed origin designed to meet the demands of [live streaming](/media-storage/streaming/live-streaming/how-it-works) and is also able to transfer the live content to a long term storage tier for [video-on-demand (VOD)](/media-storage/streaming/video-on-demand/media-storage) applications. By leveraging our ultra-low latency storage, the Momento Media Storage origin ensures content is always accessible and ready for distribution to CDNs, enabling a smooth, uninterrupted viewer experience. Whether it's live events or on-demand content, Momento Media Storage simplifies the process of managing media delivery while maintaining exceptional performance.

Reliability is at the core of all services on the Momento platform, and the Media Storage product is no exception. It minimizes buffering, achieving a [zero-buffer rate (ZBR)](/media-storage/core-concepts/zero-buffer-rate) for viewers across devices and locations. The platform is built to scale effortlessly, handling concurrent requests from multiple CDNs without interruption, making it ideal for high-traffic events like live sports.

The developer-friendly API makes integrating and managing media assets straightforward, reducing complexity in workflows. With dynamic, automatic scaling of our services, Media Storage consistently delivers content even during traffic surges or outages, allowing video streaming engineering teams to focus on building and innovating without worrying about infrastructure. This combination of reliability and simplicity provides a dependable and easy-to-use solution for modern media streaming.
