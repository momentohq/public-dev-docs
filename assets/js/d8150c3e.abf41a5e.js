"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9838],{355:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(4848),s=n(8453);const r={sidebar_position:2,sidebar_label:"How it works",title:"How does live streaming work?",description:"Discover the ins and outs of live streaming media from glass to glass",pagination_next:null,hide_title:!0,keywords:["momento","mediastore","origin","encoding","streaming","live","elemental","serverless"]},o="How does live streaming work?",a={id:"mediastore/streaming/live-streaming/how-it-works",title:"How does live streaming work?",description:"Discover the ins and outs of live streaming media from glass to glass",source:"@site/docs/mediastore/streaming/live-streaming/how-it-works.md",sourceDirName:"mediastore/streaming/live-streaming",slug:"/mediastore/streaming/live-streaming/how-it-works",permalink:"/mediastore/streaming/live-streaming/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/streaming/live-streaming/how-it-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"How it works",title:"How does live streaming work?",description:"Discover the ins and outs of live streaming media from glass to glass",pagination_next:null,hide_title:!0,keywords:["momento","mediastore","origin","encoding","streaming","live","elemental","serverless"]},sidebar:"mediastoreSidebar",previous:{title:"Encoding a live feed",permalink:"/mediastore/streaming/live-streaming/encoding-a-live-feed"}},l={},d=[{value:"Components of a live streaming Workflow",id:"components-of-a-live-streaming-workflow",level:2},{value:"Capture and transcoding",id:"capture-and-transcoding",level:3},{value:"Segmenting the video",id:"segmenting-the-video",level:3},{value:"Content delivery networks (CDNs)",id:"content-delivery-networks-cdns",level:3},{value:"Video player buffering and playback",id:"video-player-buffering-and-playback",level:3},{value:"Minimizing latency in live streaming",id:"minimizing-latency-in-live-streaming",level:2},{value:"Scaling for massive audiences",id:"scaling-for-massive-audiences",level:2}];function c(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"how-does-live-streaming-work",children:"How does live streaming work?"})}),"\n",(0,t.jsxs)(i.p,{children:["Live streaming allows video content to be broadcast in real time, enabling viewers to watch events as they happen. Whether it's a sports event, a concert, or live news, live streaming requires a highly optimized system that minimizes latency, ensures scalability, and maintains video quality. Unlike ",(0,t.jsx)(i.a,{href:"/mediastore/streaming/video-on-demand/media-storage",children:"video on demand (VOD)"}),", where the content is pre-recorded and stored, live streaming involves capturing, encoding, and delivering video in near real time."]}),"\n",(0,t.jsx)(i.h2,{id:"components-of-a-live-streaming-workflow",children:"Components of a live streaming Workflow"}),"\n",(0,t.jsxs)(i.p,{children:["Live streaming is a complex process that requires the seamless integration of transcoding, segmenting, content delivery, and playback. With ",(0,t.jsx)(i.strong,{children:"Momento MediaStore"})," as the foundation, you can optimize your live streaming pipeline to deliver content quickly, reliably, and at scale, ensuring a high-quality viewing experience for all audiences."]}),"\n",(0,t.jsx)(i.h3,{id:"capture-and-transcoding",children:"Capture and transcoding"}),"\n",(0,t.jsxs)(i.p,{children:["The live streaming process begins with capturing the event via a camera. The raw video feed is then transcoded into multiple resolutions and bitrates to support ",(0,t.jsx)(i.a,{href:"/mediastore/performance/adaptive-bitrates/how-it-works",children:"adaptive bitrate streaming (ABR)"}),". This ensures that viewers can receive the best quality stream based on their available bandwidth, whether they are watching in 4K or 480p."]}),"\n",(0,t.jsxs)(i.p,{children:["Transcoding converts the raw feed into different versions, each ",(0,t.jsx)(i.a,{href:"/mediastore/core-concepts/abr-ladder",children:"optimized for different network conditions"}),". This allows the video player to switch between quality levels during playback to avoid buffering or interruptions."]}),"\n",(0,t.jsx)(i.h3,{id:"segmenting-the-video",children:"Segmenting the video"}),"\n",(0,t.jsxs)(i.p,{children:["After transcoding, the video is divided into small chunks known as ",(0,t.jsx)(i.a,{href:"/mediastore/core-concepts/segments",children:"segments"}),". Segments typically range from 2 to 10 seconds in length and are created for efficient delivery over the internet. Segmenting reduces the need to send large video files all at once, making it easier to stream content without interruptions."]}),"\n",(0,t.jsxs)(i.p,{children:["The segments are stored on the ",(0,t.jsx)(i.a,{href:"/mediastore/core-concepts/origin",children:"origin"}),", which is responsible for delivering them to the content delivery network (CDN). ",(0,t.jsx)(i.strong,{children:"Momento MediaStore"})," serves as the origin in many live streaming setups, offering ultra-low latency access to video segments, allowing CDNs to retrieve them quickly."]}),"\n",(0,t.jsx)(i.h3,{id:"content-delivery-networks-cdns",children:"Content delivery networks (CDNs)"}),"\n",(0,t.jsxs)(i.p,{children:["Once the video is divided into segments and stored on the origin, it is delivered to viewers via ",(0,t.jsx)(i.strong,{children:"content delivery networks (CDNs)"}),". CDNs cache the video segments in points of presence (PoPs) located closer to the viewers, reducing the distance that data needs to travel in order to improve delivery speed."]}),"\n",(0,t.jsxs)(i.p,{children:["When CDNs receive multiple requests for the same segment, they often collapse these requests ",(0,t.jsx)(i.em,{children:"into a single call to the origin"})," to reduce load. ",(0,t.jsx)(i.strong,{children:"Momento MediaStore"}),", as the origin, provides ultra-fast responses to these collapsed requests, ensuring that the CDN can distribute the video segments quickly to multiple viewers."]}),"\n",(0,t.jsx)(i.h3,{id:"video-player-buffering-and-playback",children:"Video player buffering and playback"}),"\n",(0,t.jsxs)(i.p,{children:["On the viewer's side, the video player requests segments from the CDN and puts them in a ",(0,t.jsx)(i.strong,{children:"look-ahead buffer"})," to ensure smooth playback. The player continuously monitors network conditions and adjusts the video quality in real time by switching between different resolutions and bitrates provided by the ABR ladder."]}),"\n",(0,t.jsxs)(i.p,{children:["The shorter the segments and the faster they are retrieved from the origin, the lower the likelihood of buffering. ",(0,t.jsx)(i.strong,{children:"Momento MediaStore's"})," low-latency storage ensures that segments are retrieved quickly, allowing the player to keep its buffer full and maintain smooth playback even during fluctuating network conditions."]}),"\n",(0,t.jsx)(i.h2,{id:"minimizing-latency-in-live-streaming",children:"Minimizing latency in live streaming"}),"\n",(0,t.jsxs)(i.p,{children:["Arguably the most important factor in live streaming is ",(0,t.jsx)(i.strong,{children:"latency"})," - the delay between when an event is captured and when it is displayed to the viewer. ",(0,t.jsx)(i.a,{href:"/mediastore/streaming/live-streaming/glass-to-glass-latency",children:"Glass-to-glass latency"}),' refers to the time between the camera capturing an event (the "glass" of the camera) and when it appears on the viewer\u2019s screen (the "glass" of the device).']}),"\n",(0,t.jsx)(i.p,{children:"Minimizing latency involves optimizing every part of the live streaming pipeline, including:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Shorter segment durations"})," - Using shorter segments (e.g., 2 seconds instead of 10) allows for more frequent delivery of new content to the video player, reducing the time between capturing the live feed and displaying it to viewers."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Efficient content delivery"})," - CDNs cache segments closer to the viewer, and ",(0,t.jsx)(i.strong,{children:"Momento MediaStore"})," ensures those segments are available instantly and with low margin of error when requested, reducing any delays that could occur between the origin and the CDN."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Player buffering optimizations"})," - Players can be configured to buffer only a few seconds of content ahead of time, further reducing playback delay."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"scaling-for-massive-audiences",children:"Scaling for massive audiences"}),"\n",(0,t.jsx)(i.p,{children:"Live streaming can quickly go from serving a few viewers to millions, especially for high-demand events like sporting events, global conferences, or concerts. Scalability is critical in these scenarios, as a spike in viewers requires the platform to handle an immense number of requests without performance degradation."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Momento MediaStore"})," scales effortlessly to meet these demands, serving millions of concurrent requests per second. This ensures that even under heavy load, video segments are delivered to the CDN without delays, keeping the viewing experience smooth and uninterrupted for all users."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);