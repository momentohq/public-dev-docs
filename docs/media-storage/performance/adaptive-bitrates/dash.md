---
sidebar_position: 3
sidebar_label: DASH
title: Dynamic Adaptive Streaming over HTTP
description: Learn about the Dynamic Adaptive Streaming over HTTP (DASH) protocol and how it works
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
---

# What is DASH (Dynamic Adaptive Streaming over HTTP)?

DASH (Dynamic Adaptive Streaming over HTTP) is an [adaptive bitrate streaming protocol](/media-storage/performance/adaptive-bitrates/how-it-works) that allows video to be delivered smoothly over the internet by adjusting the quality of the stream in real time based on a video player's available bandwidth. Like [HLS](/media-storage/performance/adaptive-bitrates/hls), DASH breaks video content into [segments](/media-storage/core-concepts/segments) and delivers them over HTTP. It allows players to dynamically switch between quality levels, ensuring a buffer-free experience, even when network conditions fluctuate.

## How DASH works

DASH works by dividing content into small segments and providing a **manifest file** (called an MPD — Media Presentation Description) that lists all available segments at different bitrates and resolutions. A video player uses this manifest to request the correct segments for playback based on current network conditions. If bandwidth is high, the player streams higher-quality segments, but if it drops, the player switches to lower-quality segments to avoid interruptions.

### The DASH workflow

DASH follows a similar workflow to other adaptive bitrate streaming protocols like HLS, but it uses different formats and segment structures. Here’s an overview of how it works:

1. **Encoding and segmenting** - The source video is encoded into multiple bitrates and resolutions. Each version of the video is divided into small segments, typically between **2 to 10 seconds** in length. These segments are stored using unique **key names**.

2. **Manifest file (MPD)** - An MPD file is generated, listing the available segments at different quality levels. The MPD file contains information about each segment’s bitrate, resolution, and the corresponding URL or key name for each segment.

3. **Segment delivery** - The video segments and MPD file are stored on the [origin](/media-storage/core-concepts/origin). The player retrieves the MPD and uses it to download the appropriate segments from a **content delivery network (CDN)**. The player dynamically adjusts the stream quality based on changing network conditions.

4. **Dynamic switching** - As network bandwidth fluctuates, the player dynamically switches between different quality levels by fetching different segments as specified in the MPD file.

## How DASH Differs from HLS

While both DASH and HLS are adaptive bitrate streaming protocols, there are a few key differences between them:

* **Compatibility** - HLS is natively supported by Apple devices (iOS, macOS), while DASH is more broadly supported across other platforms like Android and most web browsers.

* **File format**- DASH uses an *MPD* file as the manifest, whereas HLS uses an `.m3u8` playlist. The underlying segment format in DASH is typically `.m4s` (MPEG-4 Segment), while HLS uses `.ts` (MPEG-2 Transport Stream) segments.

## DASH with Momento Media Storage

Momento Media Storage stores both the **segments** and the **MPD file**. Each segment is stored with a unique **key name**, referenced by the MPD file, making it easy for the player to request the correct segment for playback. For example, a *1080p* segment might be stored as `segment-1080p-0001.m4s`, while a *720p* version of the same segment might be stored as `segment-720p-0001.m4s`.

The MPD file lists these key names, guiding the player on which segments to download based on current bandwidth conditions. Here's an example of how an MPD file might look for adaptive bitrate streaming (ABR) in DASH:

```xml
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.5S" profiles="urn:mpeg:dash:profile:isoff-live:2011">
  <Period>
    <AdaptationSet>
      <Representation id="1080p" bandwidth="5000000" width="1920" height="1080">
        <SegmentTemplate media="segment-1080p-$Number$.m4s" startNumber="1" duration="2000" />
      </Representation>
      <Representation id="720p" bandwidth="3000000" width="1280" height="720">
        <SegmentTemplate media="segment-720p-$Number$.m4s" startNumber="1" duration="2000" />
      </Representation>
      <Representation id="480p" bandwidth="1500000" width="854" height="480">
        <SegmentTemplate media="segment-480p-$Number$.m4s" startNumber="1" duration="2000" />
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

In this example, the player refers to the MPD to choose the appropriate segments for *1080p*, *720p*, or *480p* streams, depending on the available bandwidth. The player begins streaming by requesting the first segment based on the current available bandwidth. As the stream progresses, the player continually monitors network conditions and adjusts the bitrate accordingly. **Momento Media Storage** ensures fast, low-latency access to these segments, enabling quick switching between quality levels and minimizing buffering.
