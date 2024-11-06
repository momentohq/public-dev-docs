---
sidebar_position: 1
sidebar_label: How it works
title: How does live streaming work?
description: Discover the ins and outs of live streaming media from glass to glass
pagination_next: null
hide_title: true
keywords:
  - momento
  - media storage
  - origin
  - encoding
  - streaming
  - live
  - elemental
  - serverless
---


# How does live streaming work?

Live streaming allows video content to be broadcast in real time, enabling viewers to watch events as they happen. Whether it's a sports event, a concert, or live news, live streaming requires a highly optimized system that minimizes latency, ensures scalability, and maintains video quality. Unlike [video on demand (VOD)](/media-storage/streaming/video-on-demand/media-storage), where the content is pre-recorded and stored, live streaming involves capturing, encoding, and delivering video in near real time.

## Components of a live streaming Workflow

Live streaming is a complex process that requires the seamless integration of transcoding, segmenting, content delivery, and playback. With **Momento Media Storage** as the foundation, you can optimize your live streaming pipeline to deliver content quickly, reliably, and at scale, ensuring a high-quality viewing experience for all audiences.

### Capture and transcoding

The live streaming process begins with capturing the event via a camera. The raw video feed is then transcoded into multiple resolutions and bitrates to support [adaptive bitrate streaming (ABR)](/media-storage/performance/adaptive-bitrates/how-it-works). This ensures that viewers can receive the best quality stream based on their available bandwidth, whether they are watching in 4K or 480p.

Transcoding converts the raw feed into different versions, each [optimized for different network conditions](/media-storage/core-concepts/abr-ladder). This allows the video player to switch between quality levels during playback to avoid buffering or interruptions.

### Segmenting the video

After transcoding, the video is divided into small chunks known as [segments](/media-storage/core-concepts/segments). Segments typically range from 2 to 10 seconds in length and are created for efficient delivery over the internet. Segmenting reduces the need to send large video files all at once, making it easier to stream content without interruptions.

The segments are stored on the [origin](/media-storage/core-concepts/origin), which is responsible for delivering them to the content delivery network (CDN). **Momento Media Storage** serves as the origin in many live streaming setups, offering ultra-low latency access to video segments, allowing CDNs to retrieve them quickly.

### Content delivery networks (CDNs)

Once the video is divided into segments and stored on the origin, it is delivered to viewers via **content delivery networks (CDNs)**. CDNs cache the video segments in points of presence (PoPs) located closer to the viewers, reducing the distance that data needs to travel in order to improve delivery speed.

When CDNs receive multiple requests for the same segment, they often collapse these requests *into a single call to the origin* to reduce load. **Momento Media Storage**, as the origin, provides ultra-fast responses to these collapsed requests, ensuring that the CDN can distribute the video segments quickly to multiple viewers.

### Video player buffering and playback

On the viewer's side, the video player requests segments from the CDN and puts them in a **look-ahead buffer** to ensure smooth playback. The player continuously monitors network conditions and adjusts the video quality in real time by switching between different resolutions and bitrates provided by the ABR ladder.

The shorter the segments and the faster they are retrieved from the origin, the lower the likelihood of buffering. **Momento Media Storage's** low-latency storage ensures that segments are retrieved quickly, allowing the player to keep its buffer full and maintain smooth playback even during fluctuating network conditions.

## Minimizing latency in live streaming

Arguably the most important factor in live streaming is **latency** - the delay between when an event is captured and when it is displayed to the viewer. [Glass-to-glass latency](/media-storage/streaming/live-streaming/glass-to-glass-latency) refers to the time between the camera capturing an event (the "glass" of the camera) and when it appears on the viewer’s screen (the "glass" of the device).

Minimizing latency involves optimizing every part of the live streaming pipeline, including:

* **Shorter segment durations** - Using shorter segments (e.g., 2 seconds instead of 10) allows for more frequent delivery of new content to the video player, reducing the time between capturing the live feed and displaying it to viewers.
* **Efficient content delivery** - CDNs cache segments closer to the viewer, and **Momento Media Storage** ensures those segments are available instantly and with low margin of error when requested, reducing any delays that could occur between the origin and the CDN.
* **Player buffering optimizations** - Players can be configured to buffer only a few seconds of content ahead of time, further reducing playback delay.

## Scaling for massive audiences

Live streaming can quickly go from serving a few viewers to millions, especially for high-demand events like sporting events, global conferences, or concerts. Scalability is critical in these scenarios, as a spike in viewers requires the platform to handle an immense number of requests without performance degradation.

**Momento Media Storage** scales effortlessly to meet these demands, serving millions of concurrent requests per second. This ensures that even under heavy load, video segments are delivered to the CDN without delays, keeping the viewing experience smooth and uninterrupted for all users.
