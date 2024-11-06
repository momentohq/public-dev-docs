---
sidebar_position: 1
sidebar_label: Media storage
title: Media storage with VOD
description: With video on demand (VOD), how you store your content is critical to availability to your consumers. Learn how to stay performant and reduce costs with Momento Media Storage
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
  - video on demand
  - vod
  - storage
  - mdeia
---

# Video on Demand (VOD) media storage

With video on demand (VOD) workflows, media storage plays a critical role in making pre-recorded content readily available to viewers whenever they choose to watch. Efficient storage allows fast access and scalability, making it possible for platforms to serve millions of users without delays, especially during high-traffic periods. **Momento Media Storage** provides an optimized solution for VOD, offering ultra-low latency access to video segments and manifest files, ensuring seamless playback across devices.

## Storage characteristics

The media storage system in a VOD workflow must support several key tasks:

* **Storing video segments** - When content is prepared for VOD, it is encoded and divided into small chunks called [segments](/media-storage/core-concepts/segments) which are stored on the [origin](/media-storage/core-concepts/origin). **Momento Media Storage** acts as the origin, offering in-memory storage that enables ultra-fast retrieval of video segments whenever they are requested by a content delivery network (CDN).

* **Managing manifest files** - In addition to storing video segments, the media storage system manages **manifest files** (e.g., `.m3u8` for [HLS](/media-storage/performance/adaptive-bitrates/hls) or `.mpd` for [DASH](/media-storage/performance/adaptive-bitrates/dash)), which contain the [available bitrates and resolutions](/media-storage/core-concepts/abr-ladder) of the video. These manifest files guide the video player in selecting the appropriate segments based on network conditions.

* **Handling multiple resolutions and bitrates** - VOD content is often encoded into multiple bitrates and resolutions to accommodate different network conditions and device capabilities. **Momento Media Storage** stores the segments of each version of the video as individual items, supporting [adaptive bitrate streaming (ABR)](/media-storage/performance/adaptive-bitrates/how-it-works) workflows by ensuring that each segment is delivered quickly, whether in high-definition or lower-quality formats.

* **Tiered storage** - Not all content is accessed with the same frequency. Some videos, such as new releases, may experience high traffic immediately, while older or less popular content may be accessed less frequently. **Tiered storage** helps optimize how this content is managed.

**Momento Media Storage** can be part of a **tiered storage** strategy where frequently accessed content is stored in high-speed in-memory storage for rapid retrieval, while less popular content is moved to slower, cost-effective storage tiers. This approach ensures that the most frequently watched videos are always delivered with low latency, while still maintaining availability for less frequently accessed content. By tiering storage based on content demand, platforms can maintain high performance while optimizing costs.

## Optimizing for scalability and performance

As VOD platforms scale, they must handle increased traffic while maintaining fast and reliable access to media. **Momento Media Storage** is built for scalability, effortlessly supporting millions of concurrent requests without performance degradation. Whether users are watching the latest release or older content, **Momento Media Storage** ensures that video segments and manifest files are delivered quickly, preventing delays and maintaining a smooth viewing experience.

One of the major advantages of using **Momento Media Storage** in VOD workflows is its ability to balance high-speed storage for popular content with efficient retrieval for long-tail content. This flexibility allows platforms to serve their entire content library efficiently, ensuring viewers enjoy a high-quality experience no matter what they’re watching.
