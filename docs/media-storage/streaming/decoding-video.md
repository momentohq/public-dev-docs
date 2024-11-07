---
sidebar_position: 2
sidebar_label: Decoding video streams
title: Decoding video streams
description: Discover how to decode media in your video player for live streaming or video on demand (VOD)
pagination_next: null
hide_title: true
keywords:
  - momento
  - media storage
  - origin
  - decoding
  - streaming
  - live
  - elemental
  - serverless
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Decoding video streams

Decoding video streams allows video players to stream content, whether it's [live streaming](/media-storage/streaming/live-streaming/how-it-works) or [video on demand (VOD)](/media-storage/streaming/video-on-demand/media-storage). The process involves fetching [segments](/media-storage/core-concepts/segments) from a content delivery network (CDN), decoding them into viewable content, and delivering the video to the viewer's screen with minimal delay. Two widely used protocols dominate video streaming: [HLS (HTTP Live Streaming)](/media-storage/performance/adaptive-bitrates/hls) and [DASH (Dynamic Adaptive Streaming over HTTP)](/media-storage/performance/adaptive-bitrates/dash). These protocols rely on *manifest files* to point the player at the location of segments at the [desired bitrate and resolution](/media-storage/core-concepts/abr-ladder).

## How video players work

As mentioned ealier, the two main protocols in video streaming are HLS and DASH. Both protocols enable support for [adaptive bitrate streaming (ABR)](/media-storage/performance/adaptive-bitrates/how-it-works), allowing the player to switch between different resolutions and bitrates dynamically to optimize playback quality based on the viewer's network conditions. This is done through the use of **manifest files**.

### Manifest files and segments stored in Momento Media Storage

Manifest files list available video segments for a stream, along with their corresponding bitrates and resolutions. These manifest files direct the video player to the specific segments and other manifests stored in **Momento Media Storage**.

Stored segments and bitrate/resolution specific manifest files are identified by **key names**. The key names map either directly to the url where the segment lives or to a relative path based on the base URL of the manifest. Files stored in Momento Media Storage are accessible via HTTP based on the namespace and name of the key.

Since all data in the Momento platform is stored securely by default, authorization is required for access. Given the nature of how video players work, manifest files are typically structured in one of two ways:

* Directly at Momento with a `token` query parameter
* Pointed at a CDN that forwards an `Authorization` header

#### Using a token query parameter

Live streams are short-lived by nature. As content is recorded, it is streamed to end users in the moment. After it plays, it's over and the segments aren't accessible unless the provider decides to make it available on demand. This use case is perfect for a [Momento session token](/cache/develop/authentication/tokens), which is created with a finite duration and limited scope permission set.

Tokens used for live streaming should be generated with `readonly` access scoped to either a specific namespace or [key prefix](/cache/develop/authentication/permissions#item-level-restriction) to operate with least-privilege permissions. The path to segments or manifest files should match one of the examples below.

<Tabs>
<TabItem value="hls-absolute" label="HLS - Absolute">

```plaintext
#EXTINF:2.000,
https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>
#EXTINF:2.000,
https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>
```

</TabItem>
<TabItem value="hls-relative" label="HLS - Relative">

```plaintext
#EXTINF:2.000,
/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>
#EXTINF:2.000,
/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>
```

</TabItem>
<TabItem value="dash-absolute" label="DASH - Absolute">

```xml
<SegmentURL media="https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>" />
<SegmentURL media="https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>" />
```

</TabItem>
<TabItem value="dash-relative" label="DASH - Relative">

```xml
<SegmentURL media="/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>" />
<SegmentURL media="/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>" />
```

</TabItem>
</Tabs>

In the examples above, the placeholders resolve to the following values:

* `MOMENTO_REGION_BASE_URL` - The [endpoint](/platform/regions) for the region being used as the origin
* `NAMESPACE` - Name of the namespace/cache in the origin region
* `SEGMENT_#_NAME` - Key of the segment stored in Momento. Typically ends with `.ts` for HLS and `.m4s` for DASH
* `MOMENTO_TOKEN` - Short-lived token granting read access to the specific segment in the namespace

### Using a CDN with header forwarding

In video on demand (VOD) workflows, requests for access to segments could come at any point in time, so using a short-lived token is not a possible solution. Instead, using a CDN like Amazon CloudFront or Cloudflare to forward your request with added headers is a viable alternative using a long-lived [Momento API key](/cache/develop/authentication/api-keys). This solution allows video players to make calls do your CDN without knowledge of a token or API key and have it automatically added for them on the server side.

:::warning[Note]
The solution above should include some sort of authentication mechanism or firewall support to prevent malicious attacks. It is potentially unsafe to expose data publicly without some form of auth
:::

The calls to your CDN serve as a proxy to the Momento platform. It will be calling Momento directly on behalf of your users. Below are examples of manifest files using header forwarding.

<Tabs>
<TabItem value="hls-proxy-absolute" label="HLS - Absolute">

```plaintext
#EXTINF:2.000,
https://<YOUR_BASE_URL>/<SEGMENT_1_NAME>
#EXTINF:2.000,
https://<YOUR_BASE_URL>/<SEGMENT_2_NAME>
```

</TabItem>
<TabItem value="hls-proxy-relative" label="HLS - Relative">

```plaintext
#EXTINF:2.000,
<SEGMENT_1_NAME>
#EXTINF:2.000,
<SEGMENT_2_NAME>
```

</TabItem>
<TabItem value="dash-proxy-absolute" label="DASH - Absolute">

```xml
<SegmentURL media="https://<YOUR_BASE_URL>/<SEGMENT_1_NAME>" />
<SegmentURL media="https://<YOUR_BASE_URL>/<SEGMENT_2_NAME>" />
```

</TabItem>
<TabItem value="dash-proxy-relative" label="DASH - Relative">

```xml
<SegmentURL media="<SEGMENT_1_NAME>" />
<SegmentURL media="<SEGMENT_2_NAME>" />
```

</TabItem>
</Tabs>

In the examples above, the placeholders resolve to the following values:

* `YOUR_BASE_URL` - The base url of your CDN
* `SEGMENT_#_NAME` - Key of the segment stored in Momento. Typically ends with `.ts` for HLS and `.m4s` for DASH

The tradeoff between the two options is where the simplicity lies. With **short-lived tokens**, the simplicity lies in your architecture, you're making direct calls to the Momento HTTP service after having generated a short-lived session token. With the **CDN approach**, the simplicity lies in your manifest files, but you have a more complicated server-side implementation to manage.

### Adaptive bitrate streaming (ABR)

Adaptive bitrate streaming (ABR) allows the video player to adjust the quality of the stream dynamically, providing the best possible experience based on the viewer's network conditions. The streaming process typically involves multiple manifests: a **master manifest** (also called a *master playlist*) that lists different quality levels and **media playlists** for each bitrate and resolution. The player selects the appropriate playlist based on the available bandwidth and can switch between quality levels in real-time to maintain smooth playback.

#### Master and media playlists

The **master manifest** is the top-level file that points to other **media playlists**. Each media playlist contains the list of segments for a [specific combination of bitrate and resolution](/media-storage/core-concepts/abr-ladder). This structure allows the player to choose the most suitable stream, dynamically switching between quality levels as network conditions change.

```plaintext
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
1080p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720
720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1500000,RESOLUTION=854x480
480p.m3u8
```

In this example:
* The master manifest lists three different quality levels: *1080p at 5mbps*, *720p at 3mbps*, and *480p at 1.5mbps*.
* Each entry points to a media playlist in Momento Media Storage for that specific quality level using relative paths

#### Using a single manifest

While it's common for ABR to rely on this master-media playlist structure, it’s not strictly required. In some simpler streaming setups, a single manifest can point directly to the video segments for one bitrate and resolution. However, without multiple playlists, the player won’t be able to adapt dynamically to network conditions, limiting the playback experience to a fixed quality level.

If you're supporting adaptive streaming, a master manifest with media playlists is required to provide the ability to switch between different quality levels seamlessly.
