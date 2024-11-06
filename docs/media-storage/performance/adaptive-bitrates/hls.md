---
sidebar_position: 2
sidebar_label: HLS
title: HLS
description: Discover what an HLS manifest is and how to create one with Momento Media Storage.
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
  - abr
  - bitrate
  - hls
---

# What is HLS (HTTP Live Streaming)?

HLS (HTTP Live Streaming) is a widely-used [adaptive bitrate streaming protocol](/media-storage/performance/adaptive-bitrates/how-it-works) that breaks video content into small chunks called [segments](/media-storage/core-concepts/segments) and delivers them over HTTP. A video player can dynamically adjust the quality of the stream depending on network conditions, ensuring smooth playback with minimal buffering. HLS has become one of the most popular streaming protocols, supported by most modern devices and browsers.

## How HLS works

HLS works by dividing media into segments and providing a **playlist file** (typically an `.m3u8` file) that lists all available segments at different bitrates and resolutions. Video players use this playlist to fetch the correct segments for playback based on the available bandwidth. If the network is strong, the player can stream higher-quality segments (i.e. *1080p at 5mbps*). If the network slows down, the player switches to lower-quality segments (i.e. *720p at 3mbps*) to prevent buffering.

### The HLS Workflow

HLS involves several key components:

1. **Encoding and segmenting** - The source video is encoded into multiple bitrates and resolutions. Each version of the video is divided into segments typically between **2 to 10 seconds** in length. These segments are stored using unique **key names**.

2. **Playlist file (manifest)** - A playlist file (in `.m3u8` format) is generated that lists the available segments. The player refers to this playlist to download segments from a CDN point of presence (PoP). The playlist contains URLs or key names that point to specific segments.

3. **Segment delivery** - The segments and playlist file are stored on the [origin](/media-storage/core-concepts/origin). The player retrieves the playlist and uses it to download the appropriate segments.

4. **Dynamic switching** - As network bandwidth fluctuates, the player switches quality levels by fetching different entries from the playlist file.

## HLS Advantages

HLS offers several key benefits that have made it a dominant streaming protocol:

* **Wide compatibility** - Supported on a wide range of devices, including iOS, macOS, Android, and most web browsers, making it ideal for delivering content to a large, diverse audience
* **Scalability** - Delivered over standard HTTP, which works well with CDNs, enabling scalable content delivery to a global audience
* **Adaptive bitrate streaming** - Uses ABR to ensure the player always receives the best possible video quality without interruption
* **Support for live and on-demand content** - Supports both live streaming and video-on-demand (VOD) content

## HLS with Momento Media Storage

Momento Media Storage stores both the **segments** and the **playlist file**. Each segment is stored in Momento Media Storage using a unique key name, which is referenced in the playlist. For example, a segment for a *1080p* stream might have the key name `segment-1080p-0001.ts`, while a lower quality version like *720p* would be stored as `segment-720p-0001.ts`.

The playlist file (`.m3u8`) would then list these key names, directing the player to fetch the appropriate segment based on available bandwidth. Here's an example of how a playlist for [ABR (Adaptive Bitrate Streaming)](/media-storage/performance/adaptive-bitrates/how-it-works) might look when stored in Momento Media Storage:

```plaintext
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
segment-1080p-0001.ts
#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720
segment-720p-0001.ts
#EXT-X-STREAM-INF:BANDWIDTH=1500000,RESOLUTION=854x480
segment-480p-0001.ts
#EXT-X-STREAM-INF:BANDWIDTH=600000,RESOLUTION=426x240
segment-240p-0001.ts
```

In this example, the player would begin by downloading the playlist, then request segments (`.ts` files) based on the network conditions. As the stream progresses, the player continuously monitors network conditions. If the network speed decreases, the player will request lower-quality segments to prevent buffering. Conversely, if the network improves, the player will switch to higher-quality segments.

This ability to seamlessly switch between bitrates is what makes **adaptive bitrate streaming (ABR)** powerful. The playlist ensures that the player always has access to the best segment for the current network conditions.

## How Momento Media Storage enhances HLS performance

With **Momento Media Storage**, the segments and playlist file are stored in an in-memory architecture, making it ideal for low-latency, high-performance HLS streaming. By including the segment **key names** in Momento Media Storage, video players can fetch segments directly from Momento extremely quickly, which is crucial for maintaining smooth, uninterrupted playback. When network conditions fluctuate, the player can rapidly switch between segments at different bitrates without delay.

In addition, Momento’s reliability and scalability ensure that the origin can handle high traffic and deliver segments efficiently, even during live events with large audiences. This minimizes latency and improves [zero buffer rate (ZBR)](/media-storage/core-concepts/zero-buffer-rate), providing viewers a seamless, buffer-free experience.
