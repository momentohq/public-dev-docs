---
sidebar_position: 3
sidebar_label: ABR ladder
title: What is the ABR ladder?
description: Learn what the ABR ladder is and why it's important in the world of media and entertainment.
hide_title: true
keywords:
  - momento
  - media storage
  - abr ladder
  - bitrate
  - adaptive bitrate
  - streaming
  - live
  - elemental
  - serverless
  - zero buffer rate
  - zbr
---

# What is an ABR Ladder?

An **ABR (Adaptive Bitrate) ladder** is a collection of progressively higher quality video streams that a media player can switch between based on a player's network conditions. These streams are encoded at different *bitrates* and *resolutions*, and the player selects the best quality in real-time for the best possible viewing experience. The goal of an ABR ladder is to maximize video quality while minimizing buffering, which can occur due to fluctuating network bandwidth.

## Role of the ABR Ladder in media streaming

<div style={{ display: "flex", alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '2' }}>
The ABR ladder enables [adaptive bitrate streaming](/media-storage/performance/adaptive-bitrates/how-it-works), where the video player dynamically adjusts the quality of the stream based on network performance. If bandwidth is high, the player selects a higher-quality stream (higher resolution and bitrate). If bandwidth drops, the player switches to a lower-quality stream, preventing interruptions in playback. This adaptability contributes to [zero buffer rate](/media-storage/core-concepts/zero-buffer-rate), the pinnacle metric of viewer experience.


### Bitrate and resolution

- **Bitrate** - The amount of data used per second of video, usually measured in **kilobits per second (kbps)** or **megabits per second (Mbps)**. Higher bitrates deliver more data per second, resulting in higher visual quality. However, higher bitrates also require more bandwidth to stream, and if the network is slow, the player may need to switch to a lower-bitrate stream to prevent buffering.


</div>
 <div className="hideOnMobile" style={{ flex: '1', paddingLeft: '20px' }}>
  <img src="/img/media-storage/mo-ladder.png" alt="Mo climbing ladder" style={{ width: '80%' }} />
  </div>
</div>

- **Resolution**: The **number of pixels** that make up the video image, which directly correlates to the clarity and sharpness of the video. Common resolutions include **1080p** (1920x1080 pixels), **720p** (1280x720 pixels), and **480p** (854x480 pixels). Higher resolutions provide more detail and better image quality, but they also require more bandwidth and higher bitrates to maintain that quality.


### Progressive rungs of the ABR ladder

An ABR ladder consists of several **rungs**, each representing a different combination of bitrate and resolution, for example:

<table className="customTable">
  <thead>
    <tr>
      <th>Resolution</th>
      <th>Bitrate</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4K (2160p)</td>
      <td>30-45mbps</td>
      <td>Ultra-high resolution for 4K-capable devices and fast connections</td>
    </tr>
    <tr>
      <td>1080p</td>
      <td>8mbps</td>
      <td>High definition for most standard devices, offering a balance of quality and data usage</td>
    </tr>
    <tr>
      <td>720p</td>
      <td>5mbps</td>
      <td>Moderate resolution and bitrate, suitable for slower connections while maintaining decent video quality</td>
    </tr>
    <tr>
      <td>480p</td>
      <td>2.5mbps</td>
      <td>Lower resolution for acceptable quality on limited bandwidth connections</td>
    </tr>
    <tr>
      <td>360p</td>
      <td>1mbps</td>
      <td>Low resolution and bitrate, typically used when bandwidth is severely constrained</td>
    </tr>
  </tbody>
</table>

This structure ensures that the player can always deliver video content in the best available quality given the player's current network conditions and device capabilities.

## Momento Media Storage keeps you at the highest rungs possible

Momento’s in-memory, two-tier architecture is optimized for **low-latency delivery**, significantly improving the performance of streaming workflows that use an ABR ladder. By reducing origin latency, Momento delivers segments with unbeatable reliability and performance, allowing video players to stay on the highest-quality rungs for the longest amount of time possible.

In contrast, a slow origin can cause **timeouts** at CDN points of presence (POPs), which may result in buffering in downstream video players as they struggle to handle the delayed or missing data. Momento mitigates these risks by providing low-latency, in-memory access to [segments](/media-storage/core-concepts/segments), ensuring that content is delivered smoothly and without delays.

By reducing origin latency, Momento not only prevents timeouts but also helps CDNs maintain a **consistent flow of data**, enabling higher-quality, uninterrupted playback and [zero buffer rates](/media-storage/core-concepts/zero-buffer-rate).
