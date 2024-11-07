---
sidebar_position: 1
sidebar_label: Optimizing delivery
title: Optimizing media delivery
description: Learn how to optimize delivery of segments to a CDN
hide_title: true
keywords:
  - momento
  - media storage
  - origin
  - streaming
  - live
  - elemental
  - serverless
  - performance
---

# Optimizing segment delivery

Providing a seamless streaming experience with a high [zero buffer rate](/media-storage/core-concepts/zero-buffer-rate) for users is a foundational pillar of any streaming provider. As viewer expectations rise and content becomes more complex, providing fast, reliable delivery is essential to avoid buffering, maintain quality, and handle varying levels of traffic. **Momento Media Storage** plays a key role in optimizing the storage and retrieval of [media segments](/media-storage/core-concepts/segments), enabling faster, more reliable delivery through low-latency access, CDN integration, and scalable architecture.

But Momento Media Storage can't do it all on its own. It's up to you to build on top of it in a way that best takes advantage of these capabilities. By building with the optimization strategies below, you can:

* **Minimize buffering events** - Viewers expect instant playback; delays and buffering can lead to disengagement.
* **Support adaptive bitrate streaming (ABR)** - Fast and seamless switching between different quality levels prevents buffering and quality loss.
* **Maintain viewer retention** - Optimized delivery reduces disruptions, leading to better viewer retention.

## Use content delivery networks (CDNs)

CDNs are crucial for optimizing media delivery by caching content close to the viewer. When integrated with **Momento Media Storage**, CDNs handle the majority of user requests, reducing latency and ensuring smooth playback. Incorporating a CDN into your workflow will reduce latency to viewers by removing calls directly to the origin. The cached segments will be geographically close to your end users, providing the fastest delivery possible.

A CDN will also perform techniques like **request collapsing** which will queue requests for segments on a cache miss and respond to them once the content is successfully retrieved from the [origin](/media-storage/core-concepts/origin). This minimizes requests to the origin, which relieves strain and ultimately provides a faster experience to your users.

By combining Momento Media Storage's low-latency origin with a CDN's caching and request optimization techniques, you can deliver content to your users faster, more securely, and more reliably.

## Store shorter segments

Storing shorter [media segments](/media-storage/core-concepts/segments), typically 2 to 4 seconds in duration, can significantly improve delivery speed by allowing players to retrieve smaller chunks of data more quickly. This is especially beneficial for [adaptive bitrate streaming (ABR)](/media-storage/performance/adaptive-bitrates/how-it-works), where players can seamlessly switch between quality levels as network conditions change, reducing the risk of buffering. Shorter segments also help keep live streaming closer to real-time, minimizing [glass-to-glass latency](/media-storage/streaming/live-streaming/glass-to-glass-latency).

However, shorter segments come with a few trade-offs. They increase the number of HTTP requests to the CDN and origin, which can slightly raise server load and CDN overhead. More frequent requests also mean a smaller **lookahead buffer**, leaving less time to recover from network disruptions. Additionally, if a request for a segment fails, it can interrupt playback more often than with longer segments. Despite these challenges, the performance gains in smoother playback and reduced buffering often make shorter segments the preferred choice.

## Improving adaptive bitrate streaming transitions

Adaptive bitrate streaming (ABR) enables players to dynamically switch between video quality levels based on network conditions, ensuring smoother playback. To optimize these transitions, it's essential to store multiple resolutions — such as 1080p, 720p, and 480p — in Momento Media Storage, allowing the player to access the appropriate quality level when needed.

### Optimized manifests and key naming

Well-structured manifest files and consistent key naming are key to fast and seamless transitions. An optimized master manifest clearly lists different bitrates and points to the relevant playlists for each quality level.

```plaintext
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
livestreams/1080p/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720
livestreams/720p/playlist.m3u8
```

Each playlist should reference well-named segments for faster retrieval and use **predictable, consistent key names**.

```plaintext
livestreams/1080p/segment1.ts
livestreams/720p/segment1.ts
```

This allows CDNs to efficiently cache and serve segments, which results in faster transitions between quality levels. In contrast, inconsistent key names slow down retrieval by making caching and prefetching less effective.

### Considerations and trade-offs

While optimizing ABR transitions improves the viewing experience, be sure to consider the following:

* **Storage overhead** - Storing multiple versions of content increases storage requirements.
* **Cache updates** - More frequent cache updates may be needed as content or bitrates change.
* **Handling rapid fluctuations** - Sudden network changes can still cause brief interruptions if the next segment isn’t cached or retrieved quickly enough.

Despite these trade-offs, optimizing manifests and key naming ensures faster, smoother ABR transitions, minimizing buffering and improving the overall quality of the streaming experience.
