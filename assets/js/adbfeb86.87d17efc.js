"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2619],{97293:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(74848),r=i(28453);const s={sidebar_position:1,sidebar_label:"Overview",title:"Streaming media",description:"Learn what goes on behind the scenes when you stream media over the internet",pagination_next:null,hide_title:!0,keywords:["momento","mediastore","origin","streaming","live","elemental","serverless"]},o="Streaming media",a={id:"mediastore/streaming/overview",title:"Streaming media",description:"Learn what goes on behind the scenes when you stream media over the internet",source:"@site/docs/mediastore/streaming/overview.md",sourceDirName:"mediastore/streaming",slug:"/mediastore/streaming/overview",permalink:"/mediastore/streaming/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/streaming/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Streaming media",description:"Learn what goes on behind the scenes when you stream media over the internet",pagination_next:null,hide_title:!0,keywords:["momento","mediastore","origin","streaming","live","elemental","serverless"]},sidebar:"mediastoreSidebar",previous:{title:"Streaming"}},d={},l=[{value:"Encoding and adaptive bitrate streaming (ABR)",id:"encoding-and-adaptive-bitrate-streaming-abr",level:2},{value:"Types of streaming",id:"types-of-streaming",level:2},{value:"Live streaming",id:"live-streaming",level:3},{value:"Video on demand (VOD)",id:"video-on-demand-vod",level:3},{value:"Content delivery and storage",id:"content-delivery-and-storage",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"streaming-media",children:"Streaming media"})}),"\n",(0,n.jsxs)(t.p,{children:["Streaming allows users to instantly watch video and audio content by delivering it in real time over the internet. Whether for ",(0,n.jsx)(t.a,{href:"/mediastore/streaming/live-streaming/how-it-works",children:"live streaming"})," or ",(0,n.jsx)(t.a,{href:"/mediastore/streaming/video-on-demand/media-storage",children:"video on demand (VOD)"}),", streaming relies on a series of processes that ensure the smooth delivery of media, from encoding the video to dynamically adjusting its quality based on network conditions. By leveraging ",(0,n.jsx)(t.strong,{children:"Momento MediaStore"})," as the origin, you can optimize the storage and retrieval of ",(0,n.jsx)(t.a,{href:"/mediastore/core-concepts/segments",children:"segments"})," to ensure fast, reliable access for viewers."]}),"\n",(0,n.jsx)(t.h2,{id:"encoding-and-adaptive-bitrate-streaming-abr",children:"Encoding and adaptive bitrate streaming (ABR)"}),"\n",(0,n.jsxs)(t.p,{children:["The streaming process starts with ",(0,n.jsx)(t.strong,{children:"encoding"}),", where raw video is transcoded into ",(0,n.jsx)(t.a,{href:"/mediastore/core-concepts/abr-ladder",children:"multiple bitrates and resolutions"}),", making it suitable for streaming over the internet. Each version of the video is divided into ",(0,n.jsx)(t.strong,{children:"segments"}),", which are small chunks of video a few seconds in length. These segments are stored in ",(0,n.jsx)(t.strong,{children:"Momento MediaStore"}),", ready to be served on demand to content delivery networks (CDNs)."]}),"\n",(0,n.jsxs)(t.p,{children:["To adapt to varying network conditions, video players use ",(0,n.jsx)(t.a,{href:"/mediastore/performance/adaptive-bitrates/how-it-works",children:"adaptive bitrate streaming (ABR)"}),", which allows them to dynamically switch between different quality levels. This is managed through an ",(0,n.jsx)(t.a,{href:"/mediastore/core-concepts/abr-ladder",children:"ABR ladder"}),", a set of streams with different bitrates and resolutions, stored in ",(0,n.jsx)(t.strong,{children:"Momento MediaStore"}),". The player selects the appropriate quality based on the viewer\u2019s available bandwidth to minimize buffering, maintain the best possible video quality, and maximize the ",(0,n.jsx)(t.a,{href:"/mediastore/core-concepts/zero-buffer-rate",children:"zero buffer rate (ZBR)"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"types-of-streaming",children:"Types of streaming"}),"\n",(0,n.jsx)(t.h3,{id:"live-streaming",children:"Live streaming"}),"\n",(0,n.jsxs)(t.p,{children:["Live streaming enables real-time broadcasting of events such as sports, concerts, or webinars. One of the key challenges in live streaming is minimizing ",(0,n.jsx)(t.a,{href:"/mediastore/streaming/live-streaming/glass-to-glass-latency",children:"glass-to-glass latency"})," - the time between capturing an event and displaying it on the viewer\u2019s screen. Bringing this latency as close to zero as possible is key for differentiating yourself against comptetitors."]}),"\n",(0,n.jsxs)(t.p,{children:["In a live streaming workflow, the video feed is encoded into segments and sent to ",(0,n.jsx)(t.strong,{children:"Momento MediaStore"}),", which acts as the ",(0,n.jsx)(t.a,{href:"/mediastore/core-concepts/origin",children:"origin"})," for storing and delivering those segments. By leveraging Momento's ",(0,n.jsx)(t.strong,{children:"ultra-low-latency architecture"}),", you can ensure that segments are available for near-instant retrieval by CDNs, reducing latency and improving the overall streaming experience."]}),"\n",(0,n.jsx)(t.h3,{id:"video-on-demand-vod",children:"Video on demand (VOD)"}),"\n",(0,n.jsxs)(t.p,{children:["In contrast to live streaming, video on demand (VOD) allows users to stream ",(0,n.jsx)(t.a,{href:"/mediastore/streaming/video-on-demand/media-storage",children:"pre-recorded content"})," whenever they choose. The challenge here is ensuring that media is stored and retrieved quickly enough to deliver an uninterrupted viewing experience, especially during peak usage periods."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Momento MediaStore"})," provides the ideal solution for VOD workflows. As the origin, it stores both video segments and ",(0,n.jsx)(t.a,{href:"/mediastore/performance/adaptive-bitrates/dash",children:"manifest files"})," with ",(0,n.jsx)(t.strong,{children:"in-memory storage"}),", allowing video players to access content with minimal delay. This enables fast retrieval times and reduces buffering, making sure viewers can enjoy their content, regardless of network conditions."]}),"\n",(0,n.jsx)(t.h2,{id:"content-delivery-and-storage",children:"Content delivery and storage"}),"\n",(0,n.jsxs)(t.p,{children:["Efficient ",(0,n.jsx)(t.strong,{children:"content delivery"})," makes or breaks the success of both live streaming and VOD. Once video segments are stored in ",(0,n.jsx)(t.strong,{children:"Momento MediaStore"}),", they are distributed upon request to CDN points of presence (PoPs) to bring the content closer to the end users. The role of Momento MediaStore is to serve as the primary storage for all video segments and manifest files. By keeping this content in-memory, MediaStore provides ultra-low latency access, ensuring that CDNs can quickly retrieve the necessary files for distribution."]}),"\n",(0,n.jsx)(t.p,{children:"This origin-to-CDN workflow is what enables smooth, fast playback across all devices and networks. Without a fast, reliable origin, video players would struggle to fetch segments quickly enough, leading to buffering and poor viewer experiences."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);