"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6337],{65675:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var o=i(74848),a=i(28453);const n={sidebar_position:1,sidebar_label:"Media storage",title:"Media storage with VOD",description:"With video on demand (VOD), how you store your content is critical to availability to your consumers. Learn how to stay performant and reduce costs with Momento Media Storage",hide_title:!0,keywords:["momento","media storage","zero buffer rate","zbr","streaming","live","elemental","serverless","video on demand","vod","storage","mdeia"]},s="Video on Demand (VOD) media storage",r={id:"media-storage/streaming/video-on-demand/media-storage",title:"Media storage with VOD",description:"With video on demand (VOD), how you store your content is critical to availability to your consumers. Learn how to stay performant and reduce costs with Momento Media Storage",source:"@site/docs/media-storage/streaming/video-on-demand/media-storage.md",sourceDirName:"media-storage/streaming/video-on-demand",slug:"/media-storage/streaming/video-on-demand/media-storage",permalink:"/ja/media-storage/streaming/video-on-demand/media-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/media-storage/streaming/video-on-demand/media-storage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Media storage",title:"Media storage with VOD",description:"With video on demand (VOD), how you store your content is critical to availability to your consumers. Learn how to stay performant and reduce costs with Momento Media Storage",hide_title:!0,keywords:["momento","media storage","zero buffer rate","zbr","streaming","live","elemental","serverless","video on demand","vod","storage","mdeia"]},sidebar:"mediastorageSidebar",previous:{title:"Video on demand (VOD)"},next:{title:"Performance"}},d={},l=[{value:"Storage characteristics",id:"storage-characteristics",level:2},{value:"Optimizing for scalability and performance",id:"optimizing-for-scalability-and-performance",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"video-on-demand-vod-media-storage",children:"Video on Demand (VOD) media storage"})}),"\n",(0,o.jsxs)(t.p,{children:["With video on demand (VOD) workflows, media storage plays a critical role in making pre-recorded content readily available to viewers whenever they choose to watch. Efficient storage allows fast access and scalability, making it possible for platforms to serve millions of users without delays, especially during high-traffic periods. ",(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," provides an optimized solution for VOD, offering ultra-low latency access to video segments and manifest files, ensuring seamless playback across devices."]}),"\n",(0,o.jsx)(t.h2,{id:"storage-characteristics",children:"Storage characteristics"}),"\n",(0,o.jsx)(t.p,{children:"The media storage system in a VOD workflow must support several key tasks:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Storing video segments"})," - When content is prepared for VOD, it is encoded and divided into small chunks called ",(0,o.jsx)(t.a,{href:"/media-storage/core-concepts/segments",children:"segments"})," which are stored on the ",(0,o.jsx)(t.a,{href:"/media-storage/core-concepts/origin",children:"origin"}),". ",(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," acts as the origin, offering in-memory storage that enables ultra-fast retrieval of video segments whenever they are requested by a content delivery network (CDN)."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Managing manifest files"})," - In addition to storing video segments, the media storage system manages ",(0,o.jsx)(t.strong,{children:"manifest files"})," (e.g., ",(0,o.jsx)(t.code,{children:".m3u8"})," for ",(0,o.jsx)(t.a,{href:"/media-storage/performance/adaptive-bitrates/hls",children:"HLS"})," or ",(0,o.jsx)(t.code,{children:".mpd"})," for ",(0,o.jsx)(t.a,{href:"/media-storage/performance/adaptive-bitrates/dash",children:"DASH"}),"), which contain the ",(0,o.jsx)(t.a,{href:"/media-storage/core-concepts/abr-ladder",children:"available bitrates and resolutions"})," of the video. These manifest files guide the video player in selecting the appropriate segments based on network conditions."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Handling multiple resolutions and bitrates"})," - VOD content is often encoded into multiple bitrates and resolutions to accommodate different network conditions and device capabilities. ",(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," stores the segments of each version of the video as individual items, supporting ",(0,o.jsx)(t.a,{href:"/media-storage/performance/adaptive-bitrates/how-it-works",children:"adaptive bitrate streaming (ABR)"})," workflows by ensuring that each segment is delivered quickly, whether in high-definition or lower-quality formats."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tiered storage"})," - Not all content is accessed with the same frequency. Some videos, such as new releases, may experience high traffic immediately, while older or less popular content may be accessed less frequently. ",(0,o.jsx)(t.strong,{children:"Tiered storage"})," helps optimize how this content is managed."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," can be part of a ",(0,o.jsx)(t.strong,{children:"tiered storage"})," strategy where frequently accessed content is stored in high-speed in-memory storage for rapid retrieval, while less popular content is moved to slower, cost-effective storage tiers. This approach ensures that the most frequently watched videos are always delivered with low latency, while still maintaining availability for less frequently accessed content. By tiering storage based on content demand, platforms can maintain high performance while optimizing costs."]}),"\n",(0,o.jsx)(t.h2,{id:"optimizing-for-scalability-and-performance",children:"Optimizing for scalability and performance"}),"\n",(0,o.jsxs)(t.p,{children:["As VOD platforms scale, they must handle increased traffic while maintaining fast and reliable access to media. ",(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," is built for scalability, effortlessly supporting millions of concurrent requests without performance degradation. Whether users are watching the latest release or older content, ",(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," ensures that video segments and manifest files are delivered quickly, preventing delays and maintaining a smooth viewing experience."]}),"\n",(0,o.jsxs)(t.p,{children:["One of the major advantages of using ",(0,o.jsx)(t.strong,{children:"Momento Media Storage"})," in VOD workflows is its ability to balance high-speed storage for popular content with efficient retrieval for long-tail content. This flexibility allows platforms to serve their entire content library efficiently, ensuring viewers enjoy a high-quality experience no matter what they\u2019re watching."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var o=i(96540);const a={},n=o.createContext(a);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);