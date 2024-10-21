---
sidebar_position: 1
sidebar_label: Momento MediaStore
title: MediaStore
description: Discover the world's first purpose-built media origin service designed for zero buffer rates
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

# A best-in-class purpose-built origin

Momento MediaStore is a high-performance origin designed specifically for streaming use cases, including [video on demand (VOD)](/mediastore/streaming/video-on-demand/media-storage) and [live streaming](/mediastore/streaming/live-streaming/how-it-works). Built on an ultra-low latency, in-memory architecture, Momento MediaStore ensures that all your [video segments](/mediastore/core-concepts/segments), [manifests](/mediastore/performance/adaptive-bitrates/hls), and metadata are always available for fast, reliable delivery to content delivery networks (CDNs) and end users. Whether you're broadcasting a live event to millions of viewers or serving pre-recorded content on demand, **Momento MediaStore** delivers the best-in-class [origin](/mediastore/core-concepts/origin) solution that powers seamless media streaming experiences.

## What sets Momento MediaStore apart

Momento MediaStore is purpose-built to address the specific needs of media storage and delivery in streaming workflows. Here’s why it's the optimal choice for storing and serving your media assets:

### Ultra-low latency retrieval

Speed is critical in media delivery. Momento MediaStore stores video segments and manifest files in-memory, enabling **near-instant retrieval**. This low-latency architecture is crucial for both live streaming and VOD workflows, where slow segment access can lead to buffering, lower quality playback, and poor viewer experiences. Whether you’re delivering content in real time or serving on-demand requests, Momento MediaStore aims to provide the highest [zero buffer rate](/mediastore/core-concepts/zero-buffer-rate) possible.

### Scalability for high-traffic events

Live streaming events like global sports broadcasts or live concerts often see sudden spikes in traffic as millions of viewers tune in all at once. Momento MediaStore scales effortlessly to handle **millions of concurrent requests**, making it the perfect solution for large-scale events. The architecture of all services on the Momento platform are designed to scale on demand, ensuring performance remains reliable, even under peak loads.

### Seamless adaptive bitrate streaming

To provide the best quality experience, [adaptive bitrate streaming (ABR)](/mediastore/performance/adaptive-bitrates/how-it-works) requires fast access to video segments at various bitrates and resolutions. **Momento MediaStore** plays a critical role in ABR workflows, storing and delivering segments efficiently, allowing video players to switch between different quality levels on the fly based on network conditions. This provides viewers with the highest possible quality without buffering, regardless of their connection.

### Reliability and high availability

In streaming workflows, downtime can lead to lost viewership, frustration, and brand damage. **Momento MediaStore** is built on a foundation of high reliability and availability, ensuring your media content is always accessible when requested. With built-in redundancy and failover mechanisms, it maintains a consistently high level of service, even during unexpected surges in demand or infrastructure failures.

### Tiered storage for efficient content management

Not all content is accessed equally. Some videos—such as new releases—may see a surge in viewership, while older or niche content may be accessed less frequently. Momento MediaStore supports **tiered storage**, ensuring that frequently accessed content is stored in high-speed memory for the fastest retrieval, while less popular content can be moved to more cost-effective storage tiers. This approach optimizes both performance and cost, ensuring that the right content is always delivered quickly.
