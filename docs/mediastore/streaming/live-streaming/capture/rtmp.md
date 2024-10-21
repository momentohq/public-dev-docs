---
sidebar_position: 1
sidebar_label: RTMP
title: RTMP and Momento MediaStore
description: Learn how to use RTMP to capture and transcode live video and upload it to Momento MediaStore.
hide_title: true
keywords:
  - momento
  - mediastore
  - zero buffer rate
  - zbr
  - streaming
  - live
  - elemental
  - serverless
  - latency
  - video capture
  - ffmpeg
  - encoding
  - transcoding
  - rtmp
---

# Live streaming with RTMP, FFmpeg, and Momento MediaStore

In this tutorial, you will build a live stream ingestion workflow where an HTTP POST request initiates the process. The request will contain the [RTMP stream](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) URL, which triggers **FFmpeg** to transcode the stream into multiple resolutions and upload the resulting HLS segments and manifest files to **Momento MediaStore** using the Momento SDK.

## Architecture

Below is a diagram of what you will be building in this tutorial.

```mermaid
graph TD;
    A[Live Video Source] --> B[RTMP Ingestion via POST /livestreams];
    B --> C[FFmpeg Transcoding];
    C --> D[HLS Segments & Manifests];
    D --> E[Momento MediaStore (Origin)];
    E --> G[Media Player];

    subgraph Transcoding Process
        C --> H[1080p @ 5 Mbps];
        C --> I[720p @ 3 Mbps];
        C --> J[480p @ 1.5 Mbps];
    end

    subgraph Momento MediaStore
        E --> K[Store HLS Segments];
        E --> L[Store Playlists];
        K --> G;
        L --> G;
    end

    G --> F[Playback];
```

## Step 1: Setting up the Express Web API

First, create an [Express app](https://expressjs.com/) that listens for POST requests at the `/livestreams` endpoint. The request body will contain the RTMP URL, and the server will kick off an asynchronous workflow to process the stream.

### Install Dependencies

Install the npm packages below and make sure [FFmpeg](http://www.ffmpeg.org/) is installed on your media server with the `FFMPEG_PATH` environment variable set to the location of the FFmpeg binary.

```bash
npm install express fluent-ffmpeg @gomomento/sdk
```

### Create the Express.js Server

To define the **POST /livestreams** endpoint and kick off the async processing task, use the code below.

```javascript
import express from 'express';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import { CacheClient } from '@gomomento/sdk';

// Initialize Momento CacheClient
const momento = new CacheClient({ defaultTtlSeconds: 3600 });

const NAMESPACE = 'livestreams';
const app = express();
app.use(express.json());

// POST endpoint to trigger livestream processing
app.post('/livestreams', async (req, res) => {
  const { rtmpUrl } = req.body;

  if (!rtmpUrl) {
    return res.status(400).json({ error: 'RTMP URL is required' });
  }

  res.status(202).json({ message: 'Stream processing started' });
  startTranscodingWorkflow(rtmpUrl);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

The code above initializes the Momento `CacheClient` and configures the Express app to run with the `/livestreams` endpoint with basic validation.

### Build the transcoding workflow

Now that the request is handled, we need to write the async workflow that ingests the RTMP stream and transcodes it to different bitrates and resolutions.

```javascript
function startTranscodingWorkflow(rtmpUrl) {
  ffmpeg(rtmpUrl)
    .outputOptions([
      '-c:v libx264',
      '-g 48',
      '-sc_threshold 0',
      '-f hls',
      '-hls_time 4',
      '-hls_list_size 0'
    ])
    .output('1080p/segment%d.ts')
    .size('1920x1080')
    .videoBitrate('5000k')
    .output('720p/segment%d.ts')
    .size('1280x720')
    .videoBitrate('3000k')
    .output('480p/segment%d.ts')
    .size('854x480')
    .videoBitrate('1500k')
    .on('end', () => {
      console.log('Transcoding complete');
    })
    .on('error', (err) => {
      console.error(`Error during transcoding: ${err.message}`);
    })
    .run();

  watchAndUploadSegments(['1080p', '720p', '480p']);
}
```

This code uses the wrapper package `fluent-ffmpeg` to pass commands to the FFmpeg binary using the RTMP steam as input. We are building a command that will transcode the stream into *1080p at 5mbps*, *720p at 3mbps*, and *480p at 1.5mbps* bitrates and resolutions with four second segments. Each segment will be output to a directory for the specific resolution with the naming convention "segment<#>".

Next, we need to implement the watcher function that uploads segments to Momento MediaStore as they are created in real time.

### Uploading segments and manifest files
