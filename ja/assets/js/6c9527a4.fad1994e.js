"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4610],{62857:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(74848),i=t(28453);const a={sidebar_position:2,sidebar_label:"Glass-to-glass latency",title:"Glass-to-glass latency",description:"Learn about the events that occur between the moment light hits the glass of a camera sensor and the moment the image is displayed on your screen.",hide_title:!0,keywords:["momento","media storage","zero buffer rate","zbr","streaming","live","elemental","serverless","latency","glass-to-glass"]},r="What is glass-to-glass latency?",o={id:"media-storage/streaming/live-streaming/glass-to-glass-latency",title:"Glass-to-glass latency",description:"Learn about the events that occur between the moment light hits the glass of a camera sensor and the moment the image is displayed on your screen.",source:"@site/docs/media-storage/streaming/live-streaming/glass-to-glass-latency.md",sourceDirName:"media-storage/streaming/live-streaming",slug:"/media-storage/streaming/live-streaming/glass-to-glass-latency",permalink:"/ja/media-storage/streaming/live-streaming/glass-to-glass-latency",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/media-storage/streaming/live-streaming/glass-to-glass-latency.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Glass-to-glass latency",title:"Glass-to-glass latency",description:"Learn about the events that occur between the moment light hits the glass of a camera sensor and the moment the image is displayed on your screen.",hide_title:!0,keywords:["momento","media storage","zero buffer rate","zbr","streaming","live","elemental","serverless","latency","glass-to-glass"]},sidebar:"mediastorageSidebar",previous:{title:"How it works",permalink:"/ja/media-storage/streaming/live-streaming/how-it-works"},next:{title:"Video on demand (VOD)"}},l={},d=[{value:"Components of glass-to-glass Latency",id:"components-of-glass-to-glass-latency",level:2},{value:"Minimizing glass-to-glass latency with Momento Media Storage",id:"minimizing-glass-to-glass-latency-with-momento-media-storage",level:2},{value:"Additional techniques for reducing latency",id:"additional-techniques-for-reducing-latency",level:2}];function c(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"what-is-glass-to-glass-latency",children:"What is glass-to-glass latency?"})}),"\n",(0,n.jsx)(s.p,{children:'Glass-to-glass latency refers to the time it takes for a live event to be captured by a camera (the "glass" of the camera lens) and displayed on a viewer\'s screen (the "glass" of the display device). In live streaming workflows, reducing this latency is critical for delivering real-time content, especially for events like sports or news broadcasts where any delay can negatively impact the experience.'}),"\n",(0,n.jsx)(s.p,{children:"Minimizing glass-to-glass latency involves optimizing every part of the streaming pipeline, from capturing and encoding the live video to delivering it to viewers via content delivery networks (CDNs) and video players."}),"\n",(0,n.jsx)(s.h2,{id:"components-of-glass-to-glass-latency",children:"Components of glass-to-glass Latency"}),"\n",(0,n.jsx)(s.p,{children:"Several key components contribute to the total glass-to-glass latency:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Capture and transcoding"})," - Video is recorded and transcoded into ",(0,n.jsx)(s.a,{href:"/media-storage/core-concepts/abr-ladder",children:"different bitrates and resolutions"})," to prepare it for streaming"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Segmenting and storing"})," - The video is divided into small chunks known as ",(0,n.jsx)(s.a,{href:"/media-storage/core-concepts/segments",children:"segments"}),". These segments are stored on the ",(0,n.jsx)(s.a,{href:"/media-storage/core-concepts/origin",children:"origin"}),". With ",(0,n.jsx)(s.strong,{children:"Momento Media Storage"})," as the origin, segments are stored with ultra-low latency, allowing fast retrieval by the CDNs"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Content delivery networks"})," - Segments are cached close to viewers, reducing the distance that data needs to travel and lowering the chance of buffering. When CDNs receive requests from multiple viewers for the same segment, they often ",(0,n.jsx)(s.em,{children:"collapse these requests into a single call"})," to the origin to reduce load. If the origin is slow, it can delay the delivery of segments to the CDN, which adds up and impacts the latency experienced by all viewers relying on that CDN."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Player buffering and playback"})," - The video player buffers, or stores, the content to ensure smooth playback. The shorter the segments and the faster they are retrieved from the origin, the lower the latency experienced by viewers. Players with lower buffer requirements can further reduce delays in playback."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"minimizing-glass-to-glass-latency-with-momento-media-storage",children:"Minimizing glass-to-glass latency with Momento Media Storage"}),"\n",(0,n.jsx)(s.p,{children:"By providing ultra-low latency access to video segments, Momento Media Storage ensures that segments are always ready for immediate retrieval by CDNs. This minimizes the delay between transcoding and content delivery, significantly reducing the total latency in the pipeline."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Low-latency segment storage"})," - Segments are stored in-memory, allowing for instant retrieval without the overhead of traditional disk-based storage. This means that as soon as the CDN requests a segment, ",(0,n.jsx)(s.strong,{children:"Momento Media Storage"})," delivers it, helping to prevent any bottlenecks in the content delivery process."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Immediate manifest access"})," - In addition to storing video segments, ",(0,n.jsx)(s.strong,{children:"Momento Media Storage"})," also stores ",(0,n.jsx)(s.a,{href:"/media-storage/performance/adaptive-bitrates/hls",children:"manifest files"})," that guide the player in retrieving the appropriate segments. Quick access to these manifests is crucial for players to make decisions about which segments to load, further reducing delays."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Scalability"})," - For live streams with massive audiences, such as sporting events or live concerts, ",(0,n.jsx)(s.strong,{children:"Momento Media Storage"})," scales effortlessly to handle millions of concurrent requests per second."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"additional-techniques-for-reducing-latency",children:"Additional techniques for reducing latency"}),"\n",(0,n.jsxs)(s.p,{children:["While ",(0,n.jsx)(s.strong,{children:"Momento Media Storage"})," plays a key role in minimizing latency, there are additional strategies to reduce glass-to-glass latency:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Shorter Segments"})," - Reducing the duration of video segments from 10 seconds to 2 seconds, for example, can significantly decrease the time needed for a player to buffer content, allowing for quicker delivery."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Chunked transfer encoding"})," - Instead of waiting for an entire segment to be encoded and packaged, send smaller chunnks as soon as they are available."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Optimized player buffering"})," - Players can be tuned to buffer fewer seconds of video ahead of time, reducing the waiting period before playback starts. However, this comes with the trade-off of increased buffering risks if network conditions degrade."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Combining ",(0,n.jsx)(s.strong,{children:"Momento Media Storage's"})," low-latency segment/manifest storage and efficient content retrieval with additional strategies like shorter segments and chunked transfer encoding, significantly reduces glass-to-glass latency in your live streams. Whether you're streaming sports, concerts, or news, reducing this latency is critical to delivering real-time content that keeps viewers engaged. As the demand for faster, more responsive live streams grows, leveraging both optimized infrastructure and modern streaming techniques helps you provide a smooth, high-quality experience for audiences worldwide."]})]})}function g(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);