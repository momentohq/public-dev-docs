"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9960],{82857:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(74848),s=t(28453);const r={sidebar_position:1,sidebar_label:"Optimizing delivery",title:"Optimizing media delivery",description:"Learn how to optimize delivery of segments to a CDN",hide_title:!0,keywords:["momento","mediastore","origin","streaming","live","elemental","serverless","performance"]},a="Optimizing segment delivery",o={id:"mediastore/performance/optimizing-delivery",title:"Optimizing media delivery",description:"Learn how to optimize delivery of segments to a CDN",source:"@site/docs/mediastore/performance/optimizing-delivery.md",sourceDirName:"mediastore/performance",slug:"/mediastore/performance/optimizing-delivery",permalink:"/mediastore/performance/optimizing-delivery",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/performance/optimizing-delivery.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Optimizing delivery",title:"Optimizing media delivery",description:"Learn how to optimize delivery of segments to a CDN",hide_title:!0,keywords:["momento","mediastore","origin","streaming","live","elemental","serverless","performance"]},sidebar:"mediastoreSidebar",previous:{title:"Performance"},next:{title:"Adaptive bitrates"}},l={},d=[{value:"Use content delivery networks (CDNs)",id:"use-content-delivery-networks-cdns",level:2},{value:"Store shorter segments",id:"store-shorter-segments",level:2},{value:"Improving adaptive bitrate streaming transitions",id:"improving-adaptive-bitrate-streaming-transitions",level:2},{value:"Optimized manifests and key naming",id:"optimized-manifests-and-key-naming",level:3},{value:"Considerations and trade-offs",id:"considerations-and-trade-offs",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"optimizing-segment-delivery",children:"Optimizing segment delivery"})}),"\n",(0,n.jsxs)(i.p,{children:["Providing a seamless streaming experience with a high ",(0,n.jsx)(i.a,{href:"/mediastore/core-concepts/zero-buffer-rate",children:"zero buffer rate"})," for users is a foundational pillar of any streaming provider. As viewer expectations rise and content becomes more complex, providing fast, reliable delivery is essential to avoid buffering, maintain quality, and handle varying levels of traffic. ",(0,n.jsx)(i.strong,{children:"Momento MediaStore"})," plays a key role in optimizing the storage and retrieval of ",(0,n.jsx)(i.a,{href:"/mediastore/core-concepts/segments",children:"media segments"}),", enabling faster, more reliable delivery through low-latency access, CDN integration, and scalable architecture."]}),"\n",(0,n.jsx)(i.p,{children:"But Momento MediaStore can't do it all on its own. It's up to you to build on top of it in a way that best takes advantage of these capabilities. By building with the optimization strategies below, you can:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Minimize buffering events"})," - Viewers expect instant playback; delays and buffering can lead to disengagement."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Support adaptive bitrate streaming (ABR)"})," - Fast and seamless switching between different quality levels prevents buffering and quality loss."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Maintain viewer retention"})," - Optimized delivery reduces disruptions, leading to better viewer retention."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"use-content-delivery-networks-cdns",children:"Use content delivery networks (CDNs)"}),"\n",(0,n.jsxs)(i.p,{children:["CDNs are crucial for optimizing media delivery by caching content close to the viewer. When integrated with ",(0,n.jsx)(i.strong,{children:"Momento MediaStore"}),", CDNs handle the majority of user requests, reducing latency and ensuring smooth playback. Incorporating a CDN into your workflow will reduce latency to viewers by removing calls directly to the origin. The cached segments will be geographically close to your end users, providing the fastest delivery possible."]}),"\n",(0,n.jsxs)(i.p,{children:["A CDN will also perform techniques like ",(0,n.jsx)(i.strong,{children:"request collapsing"})," which will queue requests for segments on a cache miss and respond to them once the content is successfully retrieved from the ",(0,n.jsx)(i.a,{href:"/mediastore/core-concepts/origin",children:"origin"}),". This minimizes requests to the origin, which relieves strain and ultimately provides a faster experience to your users."]}),"\n",(0,n.jsx)(i.p,{children:"By combining Momento MediaStore's low-latency origin with a CDN's caching and request optimization techniques, you can deliver content to your users faster, more securely, and more reliably."}),"\n",(0,n.jsx)(i.h2,{id:"store-shorter-segments",children:"Store shorter segments"}),"\n",(0,n.jsxs)(i.p,{children:["Storing shorter ",(0,n.jsx)(i.a,{href:"/mediastore/core-concepts/segments",children:"media segments"}),", typically 2 to 4 seconds in duration, can significantly improve delivery speed by allowing players to retrieve smaller chunks of data more quickly. This is especially beneficial for ",(0,n.jsx)(i.a,{href:"/mediastore/performance/adaptive-bitrates/how-it-works",children:"adaptive bitrate streaming (ABR)"}),", where players can seamlessly switch between quality levels as network conditions change, reducing the risk of buffering. Shorter segments also help keep live streaming closer to real-time, minimizing ",(0,n.jsx)(i.a,{href:"/mediastore/streaming/live-streaming/glass-to-glass-latency",children:"glass-to-glass latency"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["However, shorter segments come with a few trade-offs. They increase the number of HTTP requests to the CDN and origin, which can slightly raise server load and CDN overhead. More frequent requests also mean a smaller ",(0,n.jsx)(i.strong,{children:"lookahead buffer"}),", leaving less time to recover from network disruptions. Additionally, if a request for a segment fails, it can interrupt playback more often than with longer segments. Despite these challenges, the performance gains in smoother playback and reduced buffering often make shorter segments the preferred choice."]}),"\n",(0,n.jsx)(i.h2,{id:"improving-adaptive-bitrate-streaming-transitions",children:"Improving adaptive bitrate streaming transitions"}),"\n",(0,n.jsx)(i.p,{children:"Adaptive bitrate streaming (ABR) enables players to dynamically switch between video quality levels based on network conditions, ensuring smoother playback. To optimize these transitions, it's essential to store multiple resolutions \u2014 such as 1080p, 720p, and 480p \u2014 in Momento MediaStore, allowing the player to access the appropriate quality level when needed."}),"\n",(0,n.jsx)(i.h3,{id:"optimized-manifests-and-key-naming",children:"Optimized manifests and key naming"}),"\n",(0,n.jsx)(i.p,{children:"Well-structured manifest files and consistent key naming are key to fast and seamless transitions. An optimized master manifest clearly lists different bitrates and points to the relevant playlists for each quality level."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:"#EXTM3U\n#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080\nlivestreams/1080p/playlist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720\nlivestreams/720p/playlist.m3u8\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Each playlist should reference well-named segments for faster retrieval and use ",(0,n.jsx)(i.strong,{children:"predictable, consistent key names"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-plaintext",children:"livestreams/1080p/segment1.ts\nlivestreams/720p/segment1.ts\n"})}),"\n",(0,n.jsx)(i.p,{children:"This allows CDNs to efficiently cache and serve segments, which results in faster transitions between quality levels. In contrast, inconsistent key names slow down retrieval by making caching and prefetching less effective."}),"\n",(0,n.jsx)(i.h3,{id:"considerations-and-trade-offs",children:"Considerations and trade-offs"}),"\n",(0,n.jsx)(i.p,{children:"While optimizing ABR transitions improves the viewing experience, be sure to consider the following:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Storage overhead"})," - Storing multiple versions of content increases storage requirements."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Cache updates"})," - More frequent cache updates may be needed as content or bitrates change."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Handling rapid fluctuations"})," - Sudden network changes can still cause brief interruptions if the next segment isn\u2019t cached or retrieved quickly enough."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Despite these trade-offs, optimizing manifests and key naming ensures faster, smoother ABR transitions, minimizing buffering and improving the overall quality of the streaming experience."})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);