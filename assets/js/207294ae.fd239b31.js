"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1115],{32750:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),r=n(28453);const o={sidebar_position:1,sidebar_label:"Origin",title:"What is an origin?",description:"Learn what an origin is in the world of media and entertainment.",hide_title:!0,keywords:["momento","momento media storage","origin","streaming","live","elemental","serverless"]},s="What is an origin?",a={id:"media-storage/core-concepts/origin",title:"What is an origin?",description:"Learn what an origin is in the world of media and entertainment.",source:"@site/docs/media-storage/core-concepts/origin.md",sourceDirName:"media-storage/core-concepts",slug:"/media-storage/core-concepts/origin",permalink:"/media-storage/core-concepts/origin",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/media-storage/core-concepts/origin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Origin",title:"What is an origin?",description:"Learn what an origin is in the world of media and entertainment.",hide_title:!0,keywords:["momento","momento media storage","origin","streaming","live","elemental","serverless"]},sidebar:"mediastorageSidebar",previous:{title:"Core Concepts"},next:{title:"Segments",permalink:"/media-storage/core-concepts/segments"}},d={},l=[{value:"Key responsibilities",id:"key-responsibilities",level:2},{value:"Origins in media streaming",id:"origins-in-media-streaming",level:2},{value:"Momento Media Storage as an origin",id:"momento-media-storage-as-an-origin",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"what-is-an-origin",children:"What is an origin?"})}),"\n",(0,t.jsxs)(i.p,{children:["An origin is the ",(0,t.jsx)(i.strong,{children:"single source of truth"})," for media in a streaming workflow. It is responsible for storing and delivering media to content delivery networks (CDNs), which then distribute that content to players. Origins play a critical role making sure content is available, high-quality, and efficiently delivered to various geographic locations."]}),"\n",(0,t.jsx)(i.h2,{id:"key-responsibilities",children:"Key responsibilities"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Storage"})," - Store video, audio, and manifest files, typically in formats for ",(0,t.jsx)(i.a,{href:"/media-storage/performance/adaptive-bitrates/how-it-works",children:"adaptive bitrate streaming"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Delivery"})," - Retrieve media ",(0,t.jsx)(i.a,{href:"/media-storage/core-concepts/segments",children:"segments"})," and manifests and deliver them to a CDN"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Security"})," - Provide access control to protect the content"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Scalability"})," - Handle varying loads, from delivering a single video file to streaming to millions of viewers in real-time"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Reliability"})," - Maintain uptime and fault tolerance for timely (low tail latency) and low error rate (> 99.9%) reads and writes to prevent downstream latency"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"origins-in-media-streaming",children:"Origins in media streaming"}),"\n",(0,t.jsx)(i.p,{children:"In a media streaming workflow, the origin is one of several components that work together to deliver content to end users. Here's how the media origin fits into the broader ecosystem:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Diagram: Media streaming components",src:n(7695).A+"",width:"1108",height:"430"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Video encoder"})," - Transforms raw video/audio files into formats suitable for streaming, like ",(0,t.jsx)(i.a,{href:"/media-storage/performance/adaptive-bitrates/hls",children:"HLS (HTTP Live Streaming)"})," or ",(0,t.jsx)(i.a,{href:"/media-storage/performance/adaptive-bitrates/dash",children:"DASH (Dynamic Adaptive Streaming over HTTP)"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Origin"})," - Stores the encoded media and manifests (playlists) and makes them available for distribution"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Content delivery network (CDN)"})," - Distributes the content to end users by caching it in geographically distributed servers known as Points of Presence (PoP) to reduce latency and improve streaming performance"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Media player"})," - The device (i.e. browser, smart TV, or mobile app) that requests the media segments from the CDN and plays them as specified by the manifest"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"momento-media-storage-as-an-origin",children:"Momento Media Storage as an origin"}),"\n",(0,t.jsxs)(i.p,{children:["Momento Media Storage is a purpose-built high-speed origin designed to meet the demands of ",(0,t.jsx)(i.a,{href:"/media-storage/streaming/live-streaming/how-it-works",children:"live streaming"})," and is also able to transfer the live content to a long term storage tier for ",(0,t.jsx)(i.a,{href:"/media-storage/streaming/video-on-demand/media-storage",children:"video-on-demand (VOD)"})," applications. By leveraging our ultra-low latency storage, the Momento Media Storage origin ensures content is always accessible and ready for distribution to CDNs, enabling a smooth, uninterrupted viewer experience. Whether it's live events or on-demand content, Momento Media Storage simplifies the process of managing media delivery while maintaining exceptional performance."]}),"\n",(0,t.jsxs)(i.p,{children:["Reliability is at the core of all services on the Momento platform, and the Media Storage product is no exception. It minimizes buffering, achieving a ",(0,t.jsx)(i.a,{href:"/media-storage/core-concepts/zero-buffer-rate",children:"zero-buffer rate (ZBR)"})," for viewers across devices and locations. The platform is built to scale effortlessly, handling concurrent requests from multiple CDNs without interruption, making it ideal for high-traffic events like live sports."]}),"\n",(0,t.jsx)(i.p,{children:"The developer-friendly API makes integrating and managing media assets straightforward, reducing complexity in workflows. With dynamic, automatic scaling of our services, Media Storage consistently delivers content even during traffic surges or outages, allowing video streaming engineering teams to focus on building and innovating without worrying about infrastructure. This combination of reliability and simplicity provides a dependable and easy-to-use solution for modern media streaming."})]})}function m(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7695:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/streaming-components-afa9273d63c7d73419e12eb3067d8b3c.png"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(96540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);