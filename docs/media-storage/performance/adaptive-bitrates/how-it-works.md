---
sidebar_position: 1
sidebar_label: How it works
title: How adaptive bitrates work
description: Learn about adaptive bitrates and how to use Momento Media Storage as part of your streaming solution.
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

# How do adaptive bitrates work?

Adaptive bitrate streaming (ABR) is a technique that allows video players to deliver the best possible streaming experience under varying network conditions. By dynamically adjusting the quality of the video being streamed based on the viewer's available bandwidth, ABR ensures continuous playback with minimal interruptions like buffering. This method allows viewers to receive the highest quality video their connection can handle, while also preventing jarring playback pauses.

## How video players use adaptive bitrates

Video players use [ABR ladders](/media-storage/core-concepts/abr-ladder), a set of different video resolutions and bitrates, to provide smooth playback. When a video starts, the player first assesses the available network bandwidth by downloading a [segment](/media-storage/core-concepts/segments) of the video. Based on the speed of this download, the player initially selects a bitrate that matches the current bandwidth. As the video continues to stream, the player continuously monitors network conditions, adjusting the video quality on the fly.

### Dynamic quality adjustments

The heart of ABR lies in the ability of video players to dynamically switch between different **rungs** of the ABR ladder based on network conditions. If the bandwidth remains high, the player continues to stream higher-quality video (for example, *4K at 20mbps* or *1080p at 5mbps*). If the bandwidth drops, the player will automatically switch to a lower-quality version, such as *720p at 3mbps*, to ensure uninterrupted playback.

The player does this by downloading **segments** of the video in different bitrates and resolutions. Each segment represents a small chunk of video, typically a few seconds long, which allows the player to adjust the quality frequently without disrupting the viewer’s experience. The segments are stored on the [origin](/media-storage/core-concepts/origin) and delivered via a **content delivery network (CDN)**. The player can quickly request different quality segments as the network conditions change, ensuring that playback remains smooth.

### Manifests

To enable this flexibility, video players rely on a **manifest file** (known as an *MPD* in [DASH](/media-storage/performance/adaptive-bitrates/dash) or a *playlist* in [HLS](/media-storage/performance/adaptive-bitrates/dash)). This manifest provides a list of all available segments for a given video, along with the corresponding bitrates and resolutions. The player uses this file to decide which version of the video to download next.

For example, the manifest might list:
- **4K at 20 Mbps**
- **1080p at 5 Mbps**
- **720p at 3 Mbps**
- **480p at 1.5 Mbps**
- **240p at 600 Kbps**

The video player starts with one bitrate and resolution, and as the network fluctuates, it switches between these rungs by requesting the appropriate segments from the CDN.

## Look-ahead buffers

Another critically important part of how video players work with ABR is buffering. To avoid playback interruptions, video players maintain a **look-ahead buffer**, which contains several seconds or even minutes of upcoming content that has been preloaded. If the network connection slows down or drops temporarily, the player can continue to stream from this buffer without pausing.

ABR helps maintain this buffer by ensuring that the player always selects a bitrate it can sustain based on current network conditions. If the player detects that the buffer is depleting too quickly (due to slow segment delivery), it will switch to a lower bitrate to refill the buffer faster, preventing that jarring pause experience mentioned earlier. By utilizing Momento Media Storage as the origin for segments, players can quickly retrieve segments to refill their buffers, minimizing the chance of interruptions and maintaining smooth playback. This is critical for maintaining a high [zero buffer rate (ZBR)](/media-storage/core-concepts/zero-buffer-rate), which is the percentage of your viewers who stream with no buffering events.

## Improving the viewer experience

The key advantage of ABR is its ability to provide the best possible video quality without requiring the viewer to manually select the resolution. Whether a viewer’s network is fast, slow, or fluctuating, the player adjusts automatically between rungs of the ABR ladder. This results in:

* **Better quality when available** - Viewers can enjoy high-definition or 4K content when their connection supports it
* **Minimal interruptions** - Even on slower connections, the player ensures that playback continues at a lower quality rather than pausing or buffering frequently
* **Automatic adjustments** - Viewers don’t have to worry about manually switching resolutions when their bandwidth changes

By dynamically adjusting the video quality, ABR significantly improves the viewer experience, reducing frustration caused by buffering and pauses.
