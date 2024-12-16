---
sidebar_position: 2
sidebar_label: Quick start guide
title: How to configure a live origin with Momento
description: Using Momento Storage as a live HLS origin for AWS MediaLive and CloudFront.
pagination_next: null
hide_title: false
keywords:
  - momento
  - media storage
  - origin
  - encoding
  - streaming
  - live
  - elemental
  - tutorial
  - how to
  - guide
  - medialive
  - CloudFront
---


# Creating a live video origin with Momento Media Storage, AWS MediaLive, and Amazon CloudFront

Live video streaming requires a highly performant and scalable [origin server](/media-storage/core-concepts/origin) to handle the demands of a global audience. Traditional origin servers often struggle with latency, scalability, or complexity when integrated with modern cloud workflows. Momento Media Storage offers a simple, high-scale solution by providing a robust, low-latency, and cost-effective origin solution tailored for live video streaming.

In this tutorial, you will learn how to set up Momento Media Storage as the origin server for a live video stream encoded by [AWS Elemental MediaLive](https://aws.amazon.com/medialive/) and delivered via [Amazon CloudFront](https://aws.amazon.com/CloudFront/). By the end of this guide, you'll have a fully functional workflow capable of delivering live [HLS streams](/media-storage/performance/adaptive-bitrates/hls) optimized for performance and reliability.

Here's what we'll cover:

1. Creating a cache in Momento Media Storage to act as the origin server.
2. Configuring AWS Elemental MediaLive to encode and push live content to Momento.
3. Setting up Amazon CloudFront to serve content to viewers with low latency.
4. Testing and troubleshooting your setup to ensure smooth playback.

In this tutorial, we will use the [Momento console](https://console.gomomento.com), but everything could be created programmatically through [the Momento SDK](/platform/sdks).

## 1. Create a cache in your Momento account

With Momento Media Storage, an origin server is defined *as a cache*. So, let's [create a new Momento Media Storage cache](https://console.gomomento.com/caches/create) called `live-origin`. The AWS region we choose should be the **closest available to the live encoder or encoding service** you will be using.

![Momento console displaying the create cache dialog with all fields configured](./_how-to-images/console-create-cache.png)

Next, we generate the API key to access the `live-origin` cache to securely upload your video segments and manifests. [From the Momento console](https://console.gomomento.com/api-keys), let's define a "*Fine-Grained Access Key*" that expires in 30 days, with read-write access to our newly created `live-origin` cache. Don't forget to click on the "*Add Permission*" button to enable the attributes you want to grant to the API key.

![Momento console displaying the generate api key page with all fields configured](./_how-to-images/console-api-key-1.png)

Click on the "*Generate Api Key*" button, to get the details for the new key.

![Momento console showing readwrite permissions for the live-origin cache](./_how-to-images/console-api-key-2.png)

This API key information can be downloaded as the file *momento_key_info.json*. From now on, we will reference this API key as `encoder_api_key`.

![Momento console displaying the contents of the generated API key](./_how-to-images/console-api-key-3.png)

Video players read the content pushed by encoders to Momento Media Storage via a **Content Delivery Network (CDN)**. For security best practices, we must create a *readonly* API key with access to the `live-origin` cache as well. Use the same Generate API Key page as before to add this new read-only API key to your `live-origin` cache. We will reference this API key as the `player_api_key`.

:::info[Checking in]

At the end of this step, you should have created two API keys: one that grants *read/write* access and one that *read only* access to your `live-origin` cache. Keep these handy, as we'll need them in the upcoming steps.

:::

## 2. Set up AWS MediaLive for live video encoding

AWS Elemental MediaLive is a live video encoding service from AWS that enables you to process and deliver live streams at scale. It converts live video into streaming formats like [HLS](/media-storage/performance/adaptive-bitrates/hls) and is used across the globe for live sports, big events, and 24/7 channels.

We will configure MediaLive to act as the **encoder** for our live video workflow. The encoded video will be sent directly to our `live-origin` cache, which is serving as the origin server.

:::tip

For best performance, make sure the MediaLive service and your `live-origin` cache are in the same AWS region or as close as possible. If you are new to MediaLive, refer to the [AWS documentation](https://docs.aws.amazon.com/medialive/latest/ug/container-planning-workflow.html) for detailed setup instructions.

:::

We will use a MediaLive channel with a single encoding pipeline, sending to one destination (our `live-origin` cache in Momento). This channel should be configured with an [adaptive bitrate ladder](/media-storage/core-concepts/abr-ladder) of 3 encoding profiles (**720p at 2,500 kbps**, **480p at 1,500 kbps** and **240p at 750kbps**). Follow these best practices to optimize your configuration:

* **Segment size** - Media segments should be less than 10MB (Momento's current limit). To estimate segment size:
  * Multiply the bitrate (in Mbps) by the segment duration (in seconds).
  * Add 10% overhead for variability and headers (e.g., for 3 Mbps and 2-second segments: 3 * 2 * 1.1 = 6.6MB).
* **Segment duration** - Set segment durations to 1-2.5 seconds for lower latency without impacting performance.
* **TTL (Time-to-Live)** - Assign a TTL of 3600 seconds (1 hour) for live streams. Adjust this if your workflow involves features like replay or live-to-VOD.

The output destination URL for our channel should follow this format:

> https://\<*momento_rest_endpoint*\>/cache/\<*cache_name*\>/playlist.m3u8?token=\<*encoder_api_key*\>&ttl_seconds=\<*ttl*\>&role=origin

The variable placeholders are:

* `momento_rest_endpoint` - Region-specific endpoint of the Momento HTTP API ([find the endpoint of your region here](/platform/regions)).
* `cache_name` - Name of the cache to upload the segments to.
* `encoder_api_key` - Value of the encoder key generated in step 1.
* `ttl` - Number of seconds to keep the playlist and segments in the cache.

*Note - The query parameter `role=origin` is required for AWS MediaLive and is NOT a required query parameter with the Momento HTTP API.*

Applied to this tutorial, the resulting destination URL would be:

```
https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/live-origin/playlist.m3u8?token=ey[...]J9&ttl_seconds=3600&role=origin
```

Set the *CDN Settings* field to **HLS basic put** and configure the retry policy as shown below to guarantee compatibility with the Momento Media Storage cache retention period.

![AWS MediaLive console with channel configuration filled out](./_how-to-images/medialive-create-channel.png)

In the **Manifest and Segments** section, configure the following fields:

* **Output Selection** - MANIFESTS_AND_SEGMENTS
* **Mode** - LIVE
* **TS File Mode** - SEGMENTED_FILES
* **Segment Length** - 2

The remaining settings should match the configuration below:

![AWS MediaLive console with output configuration complete](./_how-to-images/medialive-segments.png)

Finally, we configure how AWS Elemental MediaLive updates the variant playlists: the variant playlists are derived from the master manifest by appending a *Name modifier* at the end of the master playlist chosen name. For each variant playlist/output, add a descriptive modifier that tells us at a glance which playlist we are looking at. For example, each of the variant playlists in our example will have `_480p30`, `_240p30`, and `_720p30` as the *Name Modifier*. Since we named the master manifest `playlist.m3u8`, the resulting variant manifests will be named respectively `playlist_480p30.m3u8`, `playlist_240p30.m3u8`, and `playlist_720p30.m3u8`. This naming convention will need to be specified in the CloudFront settings below.

![AWS MediaLive console with the name modifier configured for all outputs](./_how-to-images/medialive-output.png)

Once everything is configured, hit the *Create channel* button to create our encoder!

## 3. Optimize content delivery with Amazon CloudFront

Amazon CloudFront is a Content Delivery Network (CDN) that ensures your live video streams are delivered quickly and reliably to viewers worldwide. In this step, we'll configure CloudFront to work with Momento Media Storage - optimizing latency, managing costs, and securing access.

CloudFront will serve two key purposes in this workflow:

1. Reduce latency and costs by caching video segments across its Points of Presence (PoPs).
2. Secure access to the Momento origin by adding the appropriate authorization tokens to requests.

[Media segments](/media-storage/core-concepts/segments) are assets that change infrequently. They represent 1-5 seconds of video, audio, or metadata that will not change once it's been generated by the encoder. These media assets are usually best cached by a CDN service like Amazon CloudFront across multiple PoPs located close to the end viewers for both [live](/media-storage/streaming/live-streaming/how-it-works) and [VOD](/media-storage/streaming/video-on-demand/media-storage) video workflows.

While VOD workflows have HLS manifests that never change once they are created, HLS manifests in live video workflows are constantly recreated by the encoders to present the latest media segments, at the "live point". As a result, *live HLS manifests should not be cached by a CDN for longer than the size of a media segment*. So we will **not cache the manifests** and instead hand them over the Momento origin, which is designed to manage frequently changing objects.

:::tip

You can optimize retreival of manifest files by using a short TTL in your cache.

:::

In the [Amazon CloudFront console](https://console.aws.amazon.com/cloudfront), create a CloudFront distribution that enables these rules through custom CloudFront behaviors.

![CloudFront console with the create distribution fields completed](./_how-to-images/cloudfront-origin.png)

The *Origin domain* of the CloudFront distribution must be set as the `momento_rest_endpoint` url we used to configure our MediaLive channel, with the *Origin path* as `/cache/<cache_name>`. Note the *Origin path* field **is required for this workflow**.

Since CloudFront is accessed by video players, which don't go through auth flows to obtain API keys or session tokens, we must set up the default policy to add an *Authorization* header with our `player_api_key` for incoming requests. This enables CloudFront to automatically forward an API key to Momento, granting read-only access to the generated segments.

You do not need to enable the *Origin Shield* functionality of CloudFront, Momento takes care of it natively.

For the **Web Application Firewall (WAF)** settings, select *Do not enable security protections* for our demo.

Now we need to define the CloudFront behaviors for three types of objects read from the Momento origin server:

1. The default behavior
2. The behavior for media segments
3. The behavior for variant playlists

![CloudFront console listing the caching behaviors and their policies](./_how-to-images/cloudfront-behaviors.png)

**Default behavior**: This "behavior" is for items that are not part of the video origin workflow. We assume these objects will be changed frequently, so we won't cache them in CloudFront, using the a "CachingDisabled" policy. Configure the policy as outlined below.

![CloudFront behavior for the default behavior](./_how-to-images/cloudfront-default.png)

**Media segments behavior**: These files won't change after the encoder has sent them to the origin, so they are good candidates for being cached by CloudFront and its "CachingOptimized" policy. From our AWS MediaLive configuration, the segments that contain audio/video will always have the file extension `.ts` :

![CloudFront behavior for caching segments](./_how-to-images/cloudfront-segments.png)

**Variant playlists behavior**: These `playlist_*.m3u8` files are refreshed every time a new media segment is available from AWS Elemental MediaLive. When MediaLive recreates the playlists, it automatically appends the `encoder_api_key` token query parameter in its URI. Since our default rules apply a different, conflicting value (`player_api_key`) in *Authorization* header when requesting these segments, we need to define a behavior where the *Authorization* header is dropped for these requests. To accomplish this, set the *Origin request policy* to None.

![CloudFront behavior for variant playlists](./_how-to-images/cloudfront-playlist.png)


## 4. Playback and troubleshooting

With that, we're ready to stream! You can now point your favorite HLS player (in [VLC media player](https://www.videolan.org/) open a network stream and paste the .m3u8 path) to `https://<your_CloudFront_id>.CloudFront.net/playlist.m3u8` and play the live stream encoded by AWS Elemental MediaLive.

If things go wrong and the stream doesn't play, the best way to troubleshoot is to manually check each of the steps that is performed by the HLS video player.

### Momento and encoder level

Verify the master manifest is accessible with your `player_api_key` and returns the variant playlists correctly. You can use the following `curl` command to test it yourself, or you can use the [Momento console](https://console.gomomento.com/caches/live-origin) to view data in your cache.

```
$ curl "https://<momento_rest_endpoint>/cache/live-origin/playlist.m3u8?token=<player_api_key>"

#EXTM3U
#EXT-X-VERSION:3
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-STREAM-INF:BANDWIDTH=2648800,AVERAGE-BANDWIDTH=1790800,CODECS="avc1.77.30,mp4a.40.2",RESOLUTION=640x480,FRAME-RATE=30.000
playlist_480p30.m3u8?token=<encoder_api_key>&ttl_seconds=3600&role=origin
#EXT-X-STREAM-INF:BANDWIDTH=1394800,AVERAGE-BANDWIDTH=965800,CODECS="avc1.4d400d,mp4a.40.2",RESOLUTION=320x240,FRAME-RATE=30.000
playlist_240p30.m3u8?token=<encoder_api_key>&ttl_seconds=3600&role=origin
#EXT-X-STREAM-INF:BANDWIDTH=4391200,AVERAGE-BANDWIDTH=2961200,CODECS="avc1.4d401f,mp4a.40.2",RESOLUTION=960x720,FRAME-RATE=30.000
playlist_720p30.m3u8?token=<encoder_api_key>&ttl_seconds=3600&role=origin
```

Verify that each variant playlist is accessible, and if you can download the last media segment listed in the variant playlists (aka *the live point*). Below are the `curl` commands to view the 480p manifest and the live point.

```
$ curl "https://<momento_rest_endpoint>/cache/live-origin/playlist_480p30.m3u8?token=<player_api_key>"

#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:2
#EXT-X-MEDIA-SEQUENCE:891
#EXTINF:2.00000,
playlist_480p30_00891.ts
#EXTINF:2.00000,
playlist_480p30_00892.ts
#EXTINF:2.00000,
[...]
#EXTINF:2.00000,
playlist_480p30_00939.ts
#EXTINF:2.00000,
playlist_480p30_00940.ts

$ curl -o test.ts  "https://<momento_rest_endpoint>/cache/live-origin/playlist_480p30_00940.ts?token=<player_api_key>"
```

When viewing the live point, verify a `test.ts` file is correctly downloaded and looks OK with your favorite test tool ([ffprobe](https://ffmpeg.org/ffprobe.html), [mediainfo](https://mediaarea.net/en/MediaInfo), etc...).

If any of these steps fails, usual suspects are:

* Your Momento `encoder_api_key` or `player_api_key` might not have the right access level to the cache.
* AWS Elemental MediaLive isn't configured correctly or isn't running.
  * Double check the URI provided in the *Destination URL* field at the HLS output group level, and don't forget to add the query parameters `&ttl_seconds=<ttl>&role=origin`

### CloudFront level

If everything looks correct at the Momento level, verify the requests from CloudFront. Because of the distribution rules we have defined, you don't need to add the `player_api_key` in the URIs. We just need to verify that CloudFront inserts them properly.

The three commands below should give you the same results as the commands run at the Momento level, with the media segments in the variant playlists refreshed at the time you enter the command line `playlist_480p30_xxxx.ts`:

```
$ curl "https://<your_CloudFront_id>.CloudFront.net/playlist.m3u8"

$ curl "https://<your_CloudFront_id>.CloudFront.net/playlist_480p30.m3u8"

$ curl -o test.ts "https://<your_CloudFront_id>.CloudFront.net/playlist_480p30_01488.ts"
```

If any of these steps fails, usual suspects are:

* The *Authorization* header has not been correctly set to the `player_api_key` when the CloudFront distribution was created.
* A CloudFront behavior might be incorrectly set.
  * Double check the file patterns and the associated caching policies.

## That's it!

Congratulations! You've successfully set up a live video streaming workflow using Momento Media Storage, AWS MediaLive, and Amazon CloudFront. This modern, scalable solution ensures low latency, reliability, and optimal performance for delivering live HLS streams.

**Here's what you've learned:**

* Configured Momento Media Storage as a highly performant and cost-effective origin server.
* Set up AWS MediaLive to encode and push adaptive bitrate streams directly to Momento.
* Optimized content delivery using CloudFront to reduce latency, manage costs, and secure playback access.
* Tested and troubleshot the setup to ensure seamless streaming from origin to viewers.

**Next Steps**

Now that your live streaming workflow is up and running, consider exploring additional features and optimizations:

* Learn about [adding entitlements](/media-storage/entitlements/about) to your workflow.
* Discover [how to use ffmpeg and an RTMP stream](/media-storage/streaming/capture/rtmp) to stream to Momento.
* Add [real-time reactions](/media-storage/enhancements/live-reactions) to your streams.

We can't wait to see what you build. Happy coding!
