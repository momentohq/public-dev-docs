---
sidebar_position: 4
sidebar_label: Zero buffer rate (ZBR)
title: What is zero buffer rate?
description: Learn what zero buffer rate means and why Momento Media Storage is the perfect option to get it.
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
---

# What is zero buffer rate?

Zero buffer rate (ZBR) measures the percentage of viewers who can watch an entire stream without encountering a single buffering event. A high ZBR indicates a smooth, uninterrupted streaming experience, which is essential for maintaining viewer satisfaction and engagement. Buffering interruptions can be frustrating and cause viewers to leave a stream, so achieving a high ZBR is a critical goal for any streaming service.

<div style={{display: 'flex', justifyContent: 'center'}}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xSWRpr2we6Y?si=u4TtsVlEQtm44cvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ZBR in media streaming

To maintain a high ZBR, it is critical that [segments](/media-storage/core-concepts/segments) are delivered quickly and consistently. The video player relies on receiving video segments ahead of time to build a *look-ahead buffer*, which prevents playback interruptions. If the player runs out of content in the look-ahead buffer due to delays in segment retrieval, it will be forced to pause and buffer, reducing the ZBR.

### Factors that affect ZBR

- **Network conditions** - Fluctuating bandwidth on cellular or Wi-Fi networks can prevent the player from maintaining a steady look-ahead buffer
- **CDN performance** - Points of presence (POPs) try to collapse requests to reduce the load on the origin, but they can still experience delays or bottlenecks if the origin is experiencing issues
- **Origin latency**: A slow [origin](/media-storage/core-concepts/origin) introduces additional delays like failed writes or slow reads

## How Momento maximizes ZBR

Momento improves ZBR with its **in-memory architecture** and **low tail latencies**. As a fast, reliable origin, Momento ensures that video segments are delivered quickly, reducing the risk of buffering. The platform's finely tuned architecture minimizes segment delivery times, allowing players to maintain a full look-ahead buffer, which is critical for uninterrupted playback.

In addition to low-latency delivery, Momento's architecture helps reduce error rates, lowering the chances of failed writes or retries that could delay segment delivery. Through fewer errors and faster data transfer, Momento significantly improves ZBR. With tail latencies that are 100 times faster than traditional object stores Momento Media Storage provides smooth and consistent streaming for all viewers, even during high-demand situations.

A slow origin can introduce bottlenecks, causing players to buffer while they wait for new segments to load, ultimately reducing ZBR. With Momento, these risks are minimized, providing a seamless, buffer-free viewing experience that keeps viewers engaged.
