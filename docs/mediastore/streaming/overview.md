---
sidebar_position: 1
sidebar_label: Overview
title: Streaming media
description: Learn what goes on behind the scenes when you stream media over the internet
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

# Streaming media

Streaming allows users to instantly watch video and audio content by delivering it in real time over the internet. Whether for [live streaming](/mediastore/streaming/live-streaming/how-it-works) or [video on demand (VOD)](/mediastore/streaming/video-on-demand/media-storage), streaming relies on a series of processes that ensure the smooth delivery of media, from encoding the video to dynamically adjusting its quality based on network conditions. By leveraging **Momento MediaStore** as the origin, you can optimize the storage and retrieval of [segments](/mediastore/core-concepts/segments) to ensure fast, reliable access for viewers.

## Encoding and adaptive bitrate streaming (ABR)

The streaming process starts with **encoding**, where raw video is transcoded into [multiple bitrates and resolutions](/mediastore/core-concepts/abr-ladder), making it suitable for streaming over the internet. Each version of the video is divided into **segments**, which are small chunks of video a few seconds in length. These segments are stored in **Momento MediaStore**, ready to be served on demand to content delivery networks (CDNs).

To adapt to varying network conditions, video players use [adaptive bitrate streaming (ABR)](/mediastore/performance/adaptive-bitrates/how-it-works), which allows them to dynamically switch between different quality levels. This is managed through an [ABR ladder](/mediastore/core-concepts/abr-ladder), a set of streams with different bitrates and resolutions, stored in **Momento MediaStore**. The player selects the appropriate quality based on the viewer’s available bandwidth to minimize buffering, maintain the best possible video quality, and maximize the [zero buffer rate (ZBR)](/mediastore/core-concepts/zero-buffer-rate).

## Types of streaming

### Live streaming

Live streaming enables real-time broadcasting of events such as sports, concerts, or webinars. One of the key challenges in live streaming is minimizing [glass-to-glass latency](/mediastore/streaming/live-streaming/glass-to-glass-latency) - the time between capturing an event and displaying it on the viewer’s screen. Bringing this latency as close to zero as possible is key for differentiating yourself against comptetitors.

In a live streaming workflow, the video feed is encoded into segments and sent to **Momento MediaStore**, which acts as the [origin](/mediastore/core-concepts/origin) for storing and delivering those segments. By leveraging Momento's **ultra-low-latency architecture**, you can ensure that segments are available for near-instant retrieval by CDNs, reducing latency and improving the overall streaming experience.

### Video on demand (VOD)

In contrast to live streaming, video on demand (VOD) allows users to stream [pre-recorded content](/mediastore/streaming/video-on-demand/media-storage) whenever they choose. The challenge here is ensuring that media is stored and retrieved quickly enough to deliver an uninterrupted viewing experience, especially during peak usage periods.

**Momento MediaStore** provides the ideal solution for VOD workflows. As the origin, it stores both video segments and [manifest files](/mediastore/performance/adaptive-bitrates/dash) with **in-memory storage**, allowing video players to access content with minimal delay. This enables fast retrieval times and reduces buffering, making sure viewers can enjoy their content, regardless of network conditions.

## Content delivery and storage

Efficient **content delivery** makes or breaks the success of both live streaming and VOD. Once video segments are stored in **Momento MediaStore**, they are distributed upon request to CDN points of presence (PoPs) to bring the content closer to the end users. The role of Momento MediaStore is to serve as the primary storage for all video segments and manifest files. By keeping this content in-memory, MediaStore provides ultra-low latency access, ensuring that CDNs can quickly retrieve the necessary files for distribution.

This origin-to-CDN workflow is what enables smooth, fast playback across all devices and networks. Without a fast, reliable origin, video players would struggle to fetch segments quickly enough, leading to buffering and poor viewer experiences.
