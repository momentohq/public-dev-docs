---
sidebar_position: 3
sidebar_label: Glass-to-glass latency
title: Glass-to-glass latency
description: Learn about the events that occur between the moment light hits the glass of a camera sensor and the moment the image is displayed on your screen.
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
  - latency
  - glass-to-glass
---

# What is glass-to-glass latency?

Glass-to-glass latency refers to the time it takes for a live event to be captured by a camera (the "glass" of the camera lens) and displayed on a viewer's screen (the "glass" of the display device). In live streaming workflows, reducing this latency is critical for delivering real-time content, especially for events like sports or news broadcasts where any delay can negatively impact the experience.

Minimizing glass-to-glass latency involves optimizing every part of the streaming pipeline, from capturing and encoding the live video to delivering it to viewers via content delivery networks (CDNs) and video players.

## Components of glass-to-glass Latency

Several key components contribute to the total glass-to-glass latency:

* **Capture and transcoding** - Video is recorded and transcoded into [different bitrates and resolutions](/media-storage/core-concepts/abr-ladder) to prepare it for streaming

* **Segmenting and storing** - The video is divided into small chunks known as [segments](/media-storage/core-concepts/segments). These segments are stored on the [origin](/media-storage/core-concepts/origin). With **Momento Media Storage** as the origin, segments are stored with ultra-low latency, allowing fast retrieval by the CDNs

* **Content delivery networks** - Segments are cached close to viewers, reducing the distance that data needs to travel and lowering the chance of buffering. When CDNs receive requests from multiple viewers for the same segment, they often *collapse these requests into a single call* to the origin to reduce load. If the origin is slow, it can delay the delivery of segments to the CDN, which adds up and impacts the latency experienced by all viewers relying on that CDN.

* **Player buffering and playback** - The video player buffers, or stores, the content to ensure smooth playback. The shorter the segments and the faster they are retrieved from the origin, the lower the latency experienced by viewers. Players with lower buffer requirements can further reduce delays in playback.

## Minimizing glass-to-glass latency with Momento Media Storage

By providing ultra-low latency access to video segments, Momento Media Storage ensures that segments are always ready for immediate retrieval by CDNs. This minimizes the delay between transcoding and content delivery, significantly reducing the total latency in the pipeline.

* **Low-latency segment storage** - Segments are stored in-memory, allowing for instant retrieval without the overhead of traditional disk-based storage. This means that as soon as the CDN requests a segment, **Momento Media Storage** delivers it, helping to prevent any bottlenecks in the content delivery process.

* **Immediate manifest access** - In addition to storing video segments, **Momento Media Storage** also stores [manifest files](/media-storage/performance/adaptive-bitrates/hls) that guide the player in retrieving the appropriate segments. Quick access to these manifests is crucial for players to make decisions about which segments to load, further reducing delays.

* **Scalability** - For live streams with massive audiences, such as sporting events or live concerts, **Momento Media Storage** scales effortlessly to handle millions of concurrent requests per second.

## Additional techniques for reducing latency

While **Momento Media Storage** plays a key role in minimizing latency, there are additional strategies to reduce glass-to-glass latency:

* **Shorter Segments** - Reducing the duration of video segments from 10 seconds to 2 seconds, for example, can significantly decrease the time needed for a player to buffer content, allowing for quicker delivery.

* **Chunked transfer encoding** - Instead of waiting for an entire segment to be encoded and packaged, send smaller chunnks as soon as they are available.

* **Optimized player buffering** - Players can be tuned to buffer fewer seconds of video ahead of time, reducing the waiting period before playback starts. However, this comes with the trade-off of increased buffering risks if network conditions degrade.

Combining **Momento Media Storage's** low-latency segment/manifest storage and efficient content retrieval with additional strategies like shorter segments and chunked transfer encoding, significantly reduces glass-to-glass latency in your live streams. Whether you're streaming sports, concerts, or news, reducing this latency is critical to delivering real-time content that keeps viewers engaged. As the demand for faster, more responsive live streams grows, leveraging both optimized infrastructure and modern streaming techniques helps you provide a smooth, high-quality experience for audiences worldwide.
