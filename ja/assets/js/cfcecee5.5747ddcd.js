"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9118],{3084:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(74848),t=s(28453);const i={sidebar_position:1,sidebar_label:"RTMP",title:"RTMP and Momento MediaStore",description:"Learn how to use RTMP to capture and transcode live video and upload it to Momento MediaStore.",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","latency","video capture","ffmpeg","encoding","transcoding","rtmp"]},o="RTMP\u3001FFmpeg\u3001Momento MediaStore\u306b\u3088\u308b\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0",a={id:"mediastore/streaming/capture/rtmp",title:"RTMP and Momento MediaStore",description:"Learn how to use RTMP to capture and transcode live video and upload it to Momento MediaStore.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/mediastore/streaming/capture/rtmp.md",sourceDirName:"mediastore/streaming/capture",slug:"/mediastore/streaming/capture/rtmp",permalink:"/ja/mediastore/streaming/capture/rtmp",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/streaming/capture/rtmp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"RTMP",title:"RTMP and Momento MediaStore",description:"Learn how to use RTMP to capture and transcode live video and upload it to Momento MediaStore.",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","latency","video capture","ffmpeg","encoding","transcoding","rtmp"]},sidebar:"mediastoreSidebar",previous:{title:"Video capture"},next:{title:"Live streaming"}},l={},d=[{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",level:2},{value:"Step 1: \u30a8\u30af\u30b9\u30d7\u30ec\u30b9API\u306e\u8a2d\u5b9a",id:"step-1-\u30a8\u30af\u30b9\u30d7\u30ec\u30b9api\u306e\u8a2d\u5b9a",level:2},{value:"\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210",level:3},{value:"Express.js\u30b5\u30fc\u30d0\u30fc\u306e\u4f5c\u6210",id:"expressjs\u30b5\u30fc\u30d0\u30fc\u306e\u4f5c\u6210",level:3},{value:"2. \u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u7bc9",id:"2-\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u7bc9",level:2},{value:"3. Momento\u306b\u30c7\u30fc\u30bf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",id:"3-momento\u306b\u30c7\u30fc\u30bf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",level:2},{value:"4. \u8a66\u3057\u3066\u307f\u308b",id:"4-\u8a66\u3057\u3066\u307f\u308b",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"rtmpffmpegmomento-mediastore\u306b\u3088\u308b\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0",children:"RTMP\u3001FFmpeg\u3001Momento MediaStore\u306b\u3088\u308b\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001HTTP POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30c8\u30ea\u30ac\u30fc\u3068\u3059\u308b\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30e0\u53d6\u308a\u8fbc\u307f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol",children:"RTMP \u30b9\u30c8\u30ea\u30fc\u30e0"})," \u306e URL \u3068\u30b9\u30c8\u30ea\u30fc\u30e0\u540d\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30c8\u30ea\u30ac\u30fc\u3068\u3057\u3066\u3001",(0,r.jsx)(n.strong,{children:"FFmpeg"})," \u304c\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u8907\u6570\u306e\u89e3\u50cf\u5ea6\u306b\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3057\u3001Momento SDK \u3092\u4f7f\u7528\u3057\u3066\u3001\u7d50\u679c\u306e ",(0,r.jsx)(n.a,{href:"/mediastore/performance/adaptive-bitrates/hls",children:"HLS \u30bb\u30b0\u30e1\u30f3\u30c8"})," \u3068\u30de\u30cb\u30d5\u30a7\u30b9\u30c8 \u30d5\u30a1\u30a4\u30eb\u3092 ",(0,r.jsx)(n.strong,{children:"Momento MediaStore"})," \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/momentohq/demo-rtmp-streaming",children:"GitHub\u306e\u30b3\u30fc\u30c9"}),"\u306b\u76f4\u63a5\u98db\u3093\u3067\u3082\u3044\u3044\u3057\u3067\u3059\u3057\u3001\u4ee5\u4e0b\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306b\u6cbf\u3063\u3066\u9032\u3093\u3067\u3082\u3044\u3044\u3067\u3059\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u3042\u306a\u305f\u304c\u4f5c\u308b\u3082\u306e\u306e\u56f3\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.mermaid,{value:"graph TD;\n    A[Live video source] --\x3e B[RTMP ingestion via API];\n    B --\x3e C[FFmpeg transcoding];\n    C --\x3e D[HLS segments & manifests];\n    D --\x3e E[Momento Cache];\n\n\n    subgraph Transcoding process\n        C --\x3e H[1080p @ 5 bps];\n        C --\x3e I[720p @ 3 Mbps];\n        C --\x3e J[480p @ 1.5 Mbps];\n    end\n\n    subgraph Momento MediaStore\n        E --\x3e K[Store HLS segments];\n        E --\x3e L[Store playlists];\n    end\n\n    K --\x3e G[Media player];\n    L --\x3e G;\n    G --\x3e F[Playback];"}),"\n",(0,r.jsx)(n.h2,{id:"step-1-\u30a8\u30af\u30b9\u30d7\u30ec\u30b9api\u306e\u8a2d\u5b9a",children:"Step 1: \u30a8\u30af\u30b9\u30d7\u30ec\u30b9API\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(n.p,{children:["\u307e\u305a\u3001",(0,r.jsx)(n.code,{children:"/livestreams"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067 POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u308b ",(0,r.jsx)(n.a,{href:"https://expressjs.com/",children:"Express app"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u30fb\u30dc\u30c7\u30a3\u306fRTMP\u306eURL\u3068\u30b9\u30c8\u30ea\u30fc\u30e0\u540d\u3092\u542b\u307f\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u975e\u540c\u671f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306enpm\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001",(0,r.jsx)(n.a,{href:"http://www.ffmpeg.org/",children:"FFmpeg"}),"\u304c\u30e1\u30c7\u30a3\u30a2\u30b5\u30fc\u30d0\u30fc\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001",(0,r.jsx)(n.code,{children:"FFmpeg_PATH"}),"\u74b0\u5883\u5909\u6570\u304cFFmpeg\u30d0\u30a4\u30ca\u30ea\u306e\u5834\u6240\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install express fluent-ffmpeg @gomomento/sdk\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210"}),"\n",(0,r.jsxs)(n.p,{children:["\u30bb\u30b0\u30e1\u30f3\u30c8\u3068\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306f ",(0,r.jsx)(n.a,{href:"/cache",children:"Momento Cache"})," \u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u524d\u306b\u3001",(0,r.jsx)(n.a,{href:"https://console.gomomento.com",children:"\u81ea\u5206\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b"})," \u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f ",(0,r.jsx)(n.code,{children:"livestreams"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"expressjs\u30b5\u30fc\u30d0\u30fc\u306e\u4f5c\u6210",children:"Express.js\u30b5\u30fc\u30d0\u30fc\u306e\u4f5c\u6210"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"POST /livestreams"}),"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5b9a\u7fa9\u3057\u3001\u975e\u540c\u671f\u51e6\u7406\u30bf\u30b9\u30af\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import express from 'express';\nimport fs from 'fs';\nimport ffmpeg from 'fluent-ffmpeg';\nimport { CacheClient } from '@gomomento/sdk';\n\n// Initialize Momento CacheClient\nconst momento = new CacheClient({ defaultTtlSeconds: 3600 });\n\nconst NAMESPACE = 'livestreams';\nconst app = express();\napp.use(express.json());\n\n// POST endpoint to trigger livestream processing\napp.post('/livestreams', async (req, res) => {\n  const { rtmpUrl, streamName } = req.body;\n\n  if (!rtmpUrl || !streamName ) {\n    return res.status(400).json({ error: 'RTMP url and stream name are required' });\n  }\n\n  const stream = streamName.replace(/[^a-zA-Z]/g, \"\").toLowerCase();\n  res.status(202).json({ stream: `${stream}_playlist.m3u8` });\n  startTranscodingWorkflow(rtmpUrl, stream);\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001Momento \u306e ",(0,r.jsx)(n.code,{children:"CacheClient"})," \u3092\u521d\u671f\u5316\u3057\u3001Express \u30a2\u30d7\u30ea\u304c\u57fa\u672c\u7684\u306a\u691c\u8a3c\u3092\u884c\u3044\u306a\u304c\u3089 ",(0,r.jsx)(n.code,{children:"/livestreams"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u3068\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e",(0,r.jsx)(n.a,{href:"/cache/learn/how-it-works/expire-data-with-ttl",children:"time to live"}),"\u30921\u6642\u9593\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u30021\u6642\u9593\u7d4c\u904e\u3059\u308b\u3068\u3001\u305d\u308c\u3089\u306f\u81ea\u52d5\u7684\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u30de\u30b9\u30bf\u30fc\u30d7\u30ec\u30a4\u30ea\u30b9\u30c8\u306e\u30ad\u30fc\u3092\u6301\u3064 ",(0,r.jsx)(n.code,{children:"stream"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u7bc9",children:"2. \u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u7bc9"}),"\n",(0,r.jsxs)(n.p,{children:["\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u51e6\u7406\u3055\u308c\u305f\u306e\u3067\u3001RTMP\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u30a4\u30f3\u30b8\u30a7\u30b9\u30c8\u3057\u3066",(0,r.jsx)(n.a,{href:"/mediastore/core-concepts/abr-ladder",children:"\u7570\u306a\u308b\u30d3\u30c3\u30c8\u30ec\u30fc\u30c8\u3068\u89e3\u50cf\u5ea6"}),"\u306b\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3059\u308b\u975e\u540c\u671f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u66f8\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function startTranscodingWorkflow(rtmpUrl, streamName) {\n  ffmpeg(rtmpUrl)\n    // 1080p Output\n    .size('1920x1080')\n    .videoBitrate('5000k')\n    .output(`${streamName}/1080p/playlist.m3u8`)\n    .outputOptions([\n      '-c:v libx264',\n      '-g 48',\n      '-sc_threshold 0',\n      '-f hls',\n      '-hls_time 1',\n      '-hls_list_size 0',\n      `-hls_segment_filename ${streamName}/1080p/${streamName}_1080p_segment%03d.ts`\n    ])\n    // 720p Output\n    .size('1280x720')\n    .videoBitrate('3000k')\n    .output(`${streamName}/720p/playlist.m3u8`)\n    .outputOptions([\n      '-c:v libx264',\n      '-g 48',\n      '-sc_threshold 0',\n      '-f hls',\n      '-hls_time 1',\n      '-hls_list_size 0',\n      `-hls_segment_filename ${streamName}/720p/${streamName}_720p_segment%03d.ts`\n    ])\n    // 480p Output\n    .size('854x480')\n    .videoBitrate('1500k')\n    .output(`${streamName}/480p/playlist.m3u8`)\n    .outputOptions([\n      '-c:v libx264',\n      '-g 48',\n      '-sc_threshold 0',\n      '-f hls',\n      '-hls_time 1',\n      '-hls_list_size 0',\n      `-hls_segment_filename ${streamName}/480p/${streamName}_480p_segment%03d.ts`\n    ])\n    .on('end', () => {\n      console.log('Transcoding complete');\n    })\n    .on('error', (err) => {\n      console.error(`Error during transcoding: ${err.message}`);\n    })\n    .run();\n\n  watchAndUploadSegments(streamName, ['1080p', '720p', '480p']);\n  uploadMasterPlaylist(streamName);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f ",(0,r.jsx)(n.code,{children:"fluent-ffmpeg"})," \u3068\u3044\u3046\u30e9\u30c3\u30d1\u30fc\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3063\u3066\u3001RTMP \u30b9\u30c1\u30fc\u30e0\u3092\u5165\u529b\u3068\u3057\u3066 FFmpeg \u30d0\u30a4\u30ca\u30ea\u306b\u30b3\u30de\u30f3\u30c9\u3092\u6e21\u3057\u307e\u3059\u3002\u30b9\u30c8\u30ea\u30fc\u30e0\u3092",(0,r.jsx)(n.em,{children:"1080p at 5mbps"}),"\u3001",(0,r.jsx)(n.em,{children:"720p at 3mbps"}),"\u3001",(0,r.jsx)(n.em,{children:"480p at 1.5mbps"}),"\u306e\u30d3\u30c3\u30c8\u30ec\u30fc\u30c8\u3068\u89e3\u50cf\u5ea6\u306b1\u79d2\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u3067\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u69cb\u7bc9\u3057\u3066\u3044\u307e\u3059\u3002\u5404\u30bb\u30b0\u30e1\u30f3\u30c8\u306f\u3001\u300c(streamName)_(resolution)_segment(number).ts \u300d\u3068\u3044\u3046\u547d\u540d\u898f\u5247\u3067\u3001\u7279\u5b9a\u306e\u89e3\u50cf\u5ea6\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u547d\u540d\u898f\u5247\u306b\u3088\u308a\u3001\u5404\u30bb\u30b0\u30e1\u30f3\u30c8\u3068\u89e3\u50cf\u5ea6\u306b\u4e00\u610f\u306e\u30ad\u30fc\u540d\u304c\u4e0e\u3048\u3089\u308c\u307e\u3059\u3002\u51fa\u529b\u30d5\u30a1\u30a4\u30eb\u540d\u306f\u3001ffmpeg \u306b\u3088\u3063\u3066\u5404\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306b\u3001Momento MediaStore \u306b\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u95a2\u6570\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"3-momento\u306b\u30c7\u30fc\u30bf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",children:"3. Momento\u306b\u30c7\u30fc\u30bf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:"RTMP\u30b9\u30c8\u30ea\u30fc\u30e0\u304b\u3089\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u306e\u3067\u3001\u305d\u308c\u3089\u3092Momento\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u3001CDN\u3067\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u3001\u51fa\u529b\u30d5\u30a9\u30eb\u30c0\u306b\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u3092\u8ffd\u52a0\u3057\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u8ffd\u52a0\u3055\u308c\u305f\u3089\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function watchAndUploadSegments(streamName, directories) {\n  for (const directory of directories) {\n    const streamDirectory = `${streamName}/${directory}`;\n    if (!fs.existsSync(streamDirectory)) {\n      fs.mkdirSync(streamDirectory, { recursive: true });\n    }\n\n    fs.watch(streamDirectory, (eventType, fileName) => {\n      if (fileName.endsWith('.ts') || fileName.endsWith('.m3u8')) {\n        const location = `${streamDirectory}/${fileName}`;\n        const key = `${streamName}_${directory}_${fileName}`;\n        uploadToMomento(location, key);\n      }\n    });\n  }\n}\n\nasync function uploadToMomento(filepath, key) {\n  try {\n    const fileData = fs.readFileSync(filepath);\n    await momento.set(NAMESPACE, key, fileData);\n    console.log(`${key} uploaded`);\n  } catch (error) {\n    console.error(`Failed to upload ${key}:`, error);\n  }\n}\n\nasync function uploadMasterPlaylist(streamName) {\n  const masterPlaylist = `#EXTM3U\n  #EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080\n  ${streamName}_1080p_playlist.m3u8\n  #EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720\n  ${streamName}_720p_playlist.m3u8\n  #EXT-X-STREAM-INF:BANDWIDTH=1500000,RESOLUTION=854x480\n  ${streamName}_480p_playlist.m3u8\n  `;\n\n  await momento.set(NAMESPACE, `${streamName}_playlist.m3u8`, masterPlaylist);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u95a2\u6570\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u5909\u66f4\u3092\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u76e3\u8996\u3057\u3001\u30d5\u30a1\u30a4\u30eb\u3092 Momento \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002FFmpeg \u306f\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u81ea\u52d5\u7684\u306b\u5404\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u3001\u305d\u308c\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30c8\u30ea\u30ac\u30fc\u3068\u306a\u3063\u3066\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u306f\u307e\u305f\u3001",(0,r.jsx)(n.em,{children:"\u30de\u30b9\u30bf\u30fc\u30fb\u30d7\u30ec\u30a4\u30ea\u30b9\u30c8"}),"\u3092\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3057\u3001\u4f5c\u6210\u3059\u308b3\u3064\u306e\u7570\u306a\u308b\u89e3\u50cf\u5ea6\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002FFmpeg\u306f\u81ea\u5206\u3067\u305d\u308c\u3092\u4f5c\u6210\u3057\u306a\u3044\u306e\u3067\u3001\u3053\u3053\u3067\u306f\u624b\u52d5\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u6d3b\u767a\u306b\u4f5c\u6210\u3055\u308c\u3001\u89e3\u50cf\u5ea6\u56fa\u6709\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u304c\u5e38\u306b\u66f4\u65b0\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u3064\u307e\u308a\u3001\u30b9\u30c8\u30ea\u30fc\u30e0\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306e\u69cb\u7bc9\u306b\u6210\u529f\u3057\u305f\u3068\u3044\u3046\u3053\u3068\u3067\u3059\uff01"}),"\n",(0,r.jsx)(n.h2,{id:"4-\u8a66\u3057\u3066\u307f\u308b",children:"4. \u8a66\u3057\u3066\u307f\u308b"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://obsproject.com/",children:"OBS (Open Broadcaster Software)"}),"\u304b\u3089\u306eRTMP\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u306e\u8a2d\u5b9a\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u30c6\u30b9\u30c8\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Setup your media server"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.nginx.com/nginx/admin-guide/dynamic-modules/rtmp/",children:"RTMP\u30e2\u30b8\u30e5\u30fc\u30eb"}),"\u3092\u642d\u8f09\u3057\u305fNginx\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nginx.conf"})," \u30d5\u30a1\u30a4\u30eb\u306b\u6b21\u306e rtmp \u30b9\u30cb\u30da\u30c3\u30c8\u3092\u542b\u3081\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"rtmp {\n  server {\n    listen 1935;\n\n    application live {\n        live on;\n    }\n\n    application hls {\n        live on;\n        hls on;\n        hls_path temp/hls;\n        hls_fragment 8s;\n    }\n }\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start Nginx"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["*NOTE - \u30b3\u30f3\u30d5\u30a3\u30b0\u30d5\u30a1\u30a4\u30eb\u306frtmp\u30bb\u30af\u30b7\u30e7\u30f3\u4ee5\u4e0a\u306e\u3082\u306e\u304c\u5fc5\u8981\u3067\u3059\u3002\u8a73\u7d30\u306f",(0,r.jsx)(n.a,{href:"https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/",children:"Nginx docs"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OBS\u3092RTMP\u3067\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["OBS**\u3092\u958b\u304d\u3001",(0,r.jsx)(n.strong,{children:"File > Settings > Stream"}),"\u306b\u9032\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066 ",(0,r.jsx)(n.strong,{children:"Custom"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Server"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u306b ",(0,r.jsx)(n.code,{children:"rtmp://localhost/live"})," \u3068\u5165\u529b\u3059\u308b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Stream Key"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b ",(0,r.jsx)(n.code,{children:"teststream"})," \u3068\u5165\u529b\u3059\u308b\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u8a2d\u5b9a\u3092\u9069\u7528\u3057\u3001\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u958b\u59cb\u3059\u308b\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Express\u30b5\u30fc\u30d0\u30fc\u306e\u5b9f\u884c"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.ffmpeg.org/",children:"FFmpeg\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068"}),"\u3068",(0,r.jsx)(n.code,{children:"FFMPEG_PATH"}),"\u74b0\u5883\u5909\u6570\u306bFFmpeg\u306e\u30d0\u30a4\u30ca\u30ea\u306e\u5834\u6240\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node app.js\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u547c\u3073\u51fa\u3057"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Postman\u3084curl\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066POST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u3001\u30b9\u30c8\u30ea\u30fc\u30e0\u51e6\u7406\u3092\u958b\u59cb\u3057\u307e\u3059\u3002","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:3000/livestreams \\\n-H "Content-Type: application/json" \\\n-d \'{"rtmpUrl": "rtmp://localhost/live/teststream", "streamName": "My Momento Stream"}\'\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3092\u76e3\u8996\u3059\u308b"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30a2\u30d7\u30ea\u304c\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067",(0,r.jsx)(n.strong,{children:"Momento MediaStore"}),"\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u51e6\u7406\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002\u30b5\u30fc\u30d0\u30fc\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u8a18\u9332\u3057\u3001\u5b8c\u4e86\u3059\u308b\u3068\u901a\u77e5\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u307e\u305f\u3001\u5404\u89e3\u50cf\u5ea6\u30d5\u30a9\u30eb\u30c0\u306b\u4f5c\u6210\u3055\u308c\u305f\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3067\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Playback"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30bb\u30b0\u30e1\u30f3\u30c8\u3068\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30fb\u30d5\u30a1\u30a4\u30eb\u304c ",(0,r.jsx)(n.strong,{children:"Momento MediaStore"})," \u306b\u683c\u7d0d\u3055\u308c\u308b\u3068\u3001\u30de\u30b9\u30bf\u30fc\u30fb\u30d7\u30ec\u30a4\u30ea\u30b9\u30c8 URL \u3092\u4f7f\u7528\u3057\u3066\u3001HLS \u4e92\u63db\u30d7\u30ec\u30fc\u30e4\u30fc\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://<your-cdn-url>/<streamName>/playlist.m3u8\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u30c6\u30b9\u30c8\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u3067",(0,r.jsx)(n.a,{href:"https://www.videolan.org/",children:"VLC"}),"\u3084",(0,r.jsx)(n.a,{href:"https://videojs.com/",children:"Video.js"}),"\u306e\u3088\u3046\u306a\u30d7\u30ec\u30fc\u30e4\u30fc\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c7\u30e2\u3067\u4f7f\u7528\u3057\u305f\u306e\u306f\u3001\u30e1\u30c7\u30a3\u30a2 \u30d5\u30a1\u30a4\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e ",(0,r.jsx)(n.a,{href:"/mediastore/streaming/decoding-video#using-a-cdn-with-header-forwarding",children:"CDN \u30eb\u30fc\u30c8"})," \u3067\u3059\u3002\u3053\u306e CDN \u306f\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308a\u3001Momento \u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u76f4\u63a5 Momento MediaStore \u306b\u8ee2\u9001\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046 CDN \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30e1\u30c7\u30a3\u30a2 \u30d7\u30ec\u30fc\u30e4\u306f\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3068\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u3067\u3001RTMP\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3001\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3001",(0,r.jsx)(n.strong,{children:"Momento MediaStore"}),"\u3078\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u4fdd\u5b58\u306e\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306e\u30cb\u30fc\u30ba\u306b\u5fdc\u3058\u3066\u3001\u30b9\u30c8\u30ea\u30fc\u30e0\u306e\u54c1\u8cea\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u306e\u9577\u3055\u3001\u305d\u306e\u4ed6\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8abf\u6574\u3067\u304d\u307e\u3059\u3002\u30cf\u30c3\u30d4\u30fc\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\uff01"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);