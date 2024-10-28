"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[945],{3961:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=n(4848),r=n(8453);const t={sidebar_position:2,sidebar_label:"How it works",title:"How does live streaming work?",description:"Discover the ins and outs of live streaming media from glass to glass",pagination_next:null,hide_title:!0,keywords:["momento","mediastore","origin","encoding","streaming","live","elemental","serverless"]},o="\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306f\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u306e\u304b\uff1f",l={id:"mediastore/streaming/live-streaming/how-it-works",title:"How does live streaming work?",description:"Discover the ins and outs of live streaming media from glass to glass",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/mediastore/streaming/live-streaming/how-it-works.md",sourceDirName:"mediastore/streaming/live-streaming",slug:"/mediastore/streaming/live-streaming/how-it-works",permalink:"/ja/mediastore/streaming/live-streaming/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/streaming/live-streaming/how-it-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"How it works",title:"How does live streaming work?",description:"Discover the ins and outs of live streaming media from glass to glass",pagination_next:null,hide_title:!0,keywords:["momento","mediastore","origin","encoding","streaming","live","elemental","serverless"]},sidebar:"mediastoreSidebar",previous:{title:"Glass-to-glass latency",permalink:"/ja/mediastore/streaming/live-streaming/glass-to-glass-latency"}},d={},a=[{value:"\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u6210\u8981\u7d20",id:"\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u6210\u8981\u7d20",level:2},{value:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3068\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",id:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3068\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",level:3},{value:"\u30d3\u30c7\u30aa\u306e\u5206\u5272",id:"\u30d3\u30c7\u30aa\u306e\u5206\u5272",level:3},{value:"Content delivery networks (CDNs)",id:"content-delivery-networks-cdns",level:3},{value:"\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3068\u518d\u751f",id:"\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3068\u518d\u751f",level:3},{value:"\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308b\u9045\u5ef6\u306e\u6700\u5c0f\u5316",id:"\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308b\u9045\u5ef6\u306e\u6700\u5c0f\u5316",level:2},{value:"\u81a8\u5927\u306a\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3078\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0",id:"\u81a8\u5927\u306a\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3078\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0",level:2}];function c(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306f\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u306e\u304b",children:"\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306f\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u306e\u304b\uff1f"})}),"\n",(0,i.jsxs)(s.p,{children:["\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306f\u3001\u30d3\u30c7\u30aa\u30fb\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u653e\u9001\u3057\u3001\u8996\u8074\u8005\u304c\u51fa\u6765\u4e8b\u3092\u305d\u306e\u5834\u3067\u898b\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u30b9\u30dd\u30fc\u30c4\u30a4\u30d9\u30f3\u30c8\u3067\u3042\u308c\u3001\u30b3\u30f3\u30b5\u30fc\u30c8\u3067\u3042\u308c\u3001\u30e9\u30a4\u30d6\u30cb\u30e5\u30fc\u30b9\u3067\u3042\u308c\u3001\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u306f\u3001\u9045\u5ef6\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3001\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3092\u78ba\u4fdd\u3057\u3001\u30d3\u30c7\u30aa\u54c1\u8cea\u3092\u7dad\u6301\u3059\u308b\u3001\u9ad8\u5ea6\u306b\u6700\u9069\u5316\u3055\u308c\u305f\u30b7\u30b9\u30c6\u30e0\u304c\u5fc5\u8981\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e8b\u524d\u306b\u9332\u753b\u3057\u3066\u4fdd\u5b58\u3059\u308b",(0,i.jsx)(s.a,{href:"/mediastore/streaming/video-on-demand/media-storage",children:"\u30d3\u30c7\u30aa\u30fb\u30aa\u30f3\u30fb\u30c7\u30de\u30f3\u30c9(VOD)"}),"\u3068\u306f\u7570\u306a\u308a\u3001\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3067\u306f\u3001\u307b\u307c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u6620\u50cf\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3001\u30a8\u30f3\u30b3\u30fc\u30c9\u3057\u3066\u914d\u4fe1\u3059\u308b\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u6210\u8981\u7d20",children:"\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u69cb\u6210\u8981\u7d20"}),"\n",(0,i.jsxs)(s.p,{children:["\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306f\u3001\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3001\u30bb\u30b0\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u3001\u518d\u751f\u306e\u30b7\u30fc\u30e0\u30ec\u30b9\u306a\u7d71\u5408\u3092\u5fc5\u8981\u3068\u3059\u308b\u8907\u96d1\u306a\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002",(0,i.jsx)(s.strong,{children:"Momento MediaStore"}),"\u3092\u57fa\u76e4\u3068\u3059\u308b\u3053\u3068\u3067\u3001\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u6700\u9069\u5316\u3057\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8fc5\u901f\u3001\u78ba\u5b9f\u3001\u304b\u3064\u5927\u898f\u6a21\u306b\u914d\u4fe1\u3057\u3001\u3059\u3079\u3066\u306e\u8996\u8074\u8005\u306b\u9ad8\u54c1\u8cea\u306e\u8996\u8074\u4f53\u9a13\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3068\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",children:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3068\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"}),"\n",(0,i.jsxs)(s.p,{children:["\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30fb\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u30ab\u30e1\u30e9\u3067\u30a4\u30d9\u30f3\u30c8\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u3053\u3068\u304b\u3089\u59cb\u307e\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u751f\u306e\u30d3\u30c7\u30aa\u30d5\u30a3\u30fc\u30c9\u3092\u8907\u6570\u306e\u89e3\u50cf\u5ea6\u3068\u30d3\u30c3\u30c8\u30ec\u30fc\u30c8\u306b\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3057\u3001",(0,i.jsx)(s.a,{href:"/mediastore/performance/adaptive-bitrates/how-it-works",children:"ABR\uff08\u30a2\u30c0\u30d7\u30c6\u30a3\u30d6\u30fb\u30d3\u30c3\u30c8\u30ec\u30fc\u30c8\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\uff09"}),"\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8996\u8074\u8005\u306f4K\u3067\u3042\u308d\u3046\u3068480p\u3067\u3042\u308d\u3046\u3068\u3001\u5229\u7528\u53ef\u80fd\u306a\u5e2f\u57df\u5e45\u306b\u57fa\u3065\u3044\u3066\u6700\u9ad8\u54c1\u8cea\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u53d7\u4fe1\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306f\u3001\u751f\u306e\u30d5\u30a3\u30fc\u30c9\u3092\u7570\u306a\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5909\u63db\u3057\u3001\u305d\u308c\u305e\u308c",(0,i.jsx)(s.a,{href:"/mediastore/core-concepts/abr-ladder",children:"\u7570\u306a\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u6761\u4ef6\u306b\u6700\u9069\u5316"}),"\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306f\u3001\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3084\u4e2d\u65ad\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u3001\u518d\u751f\u4e2d\u306b\u54c1\u8cea\u30ec\u30d9\u30eb\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u30d3\u30c7\u30aa\u306e\u5206\u5272",children:"\u30d3\u30c7\u30aa\u306e\u5206\u5272"}),"\n",(0,i.jsxs)(s.p,{children:["\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u5f8c\u3001\u30d3\u30c7\u30aa\u306f",(0,i.jsx)(s.a,{href:"/mediastore/core-concepts/segments",children:"\u30bb\u30b0\u30e1\u30f3\u30c8"}),"\u3068\u3057\u3066\u77e5\u3089\u308c\u308b\u5c0f\u3055\u306a\u584a\u306b\u5206\u5272\u3055\u308c\u308b\u3002\u30bb\u30b0\u30e1\u30f3\u30c8\u306f\u901a\u5e382\u79d2\u304b\u308910\u79d2\u306e\u9577\u3055\u3067\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u3067\u52b9\u7387\u7684\u306b\u914d\u4fe1\u3059\u308b\u305f\u3081\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u30bb\u30b0\u30e1\u30f3\u30c8\u5316\u3059\u308b\u3053\u3068\u3067\u3001\u5927\u304d\u306a\u52d5\u753b\u30d5\u30a1\u30a4\u30eb\u3092\u4e00\u5ea6\u306b\u9001\u4fe1\u3059\u308b\u5fc5\u8981\u6027\u304c\u6e1b\u308a\u3001\u4e2d\u65ad\u3059\u308b\u3053\u3068\u306a\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u30bb\u30b0\u30e1\u30f3\u30c8\u306f",(0,i.jsx)(s.a,{href:"/mediastore/core-concepts/origin",children:"origin"}),"\u306b\u4fdd\u5b58\u3055\u308c\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(CDN)\u306b\u914d\u4fe1\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(s.strong,{children:"Momento MediaStore"}),"\u306f\u3001\u591a\u304f\u306e\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30fb\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u30aa\u30ea\u30b8\u30f3\u3068\u3057\u3066\u6a5f\u80fd\u3057\u3001\u52d5\u753b\u30bb\u30b0\u30e1\u30f3\u30c8\u3078\u306e\u8d85\u4f4e\u9045\u5ef6\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u3001CDN\u304c\u305d\u308c\u3089\u3092\u8fc5\u901f\u306b\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"content-delivery-networks-cdns",children:"Content delivery networks (CDNs)"}),"\n",(0,i.jsxs)(s.p,{children:["\u52d5\u753b\u304c\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u5206\u5272\u3055\u308c\u3066\u30aa\u30ea\u30b8\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u308b\u3068\u3001",(0,i.jsx)(s.strong,{children:"\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\uff08CDN\uff09"})," \u3092\u4ecb\u3057\u3066\u8996\u8074\u8005\u306b\u914d\u4fe1\u3055\u308c\u307e\u3059\u3002CDN\u306f\u3001\u8996\u8074\u8005\u306b\u8fd1\u3044\u4f4d\u7f6e\u306b\u3042\u308bPoP\uff08Point of Presence\uff09\u306b\u30d3\u30c7\u30aa\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u3001\u914d\u4fe1\u901f\u5ea6\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u30c7\u30fc\u30bf\u306e\u79fb\u52d5\u8ddd\u96e2\u3092\u77ed\u7e2e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["CDN \u306f\u3001\u540c\u3058\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u4fe1\u3057\u305f\u5834\u5408\u3001\u8ca0\u8377\u3092\u8efd\u6e1b\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u308c\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092 1 \u56de\u306e\u30aa\u30ea\u30b8\u30f3\u3078\u306e\u547c\u3073\u51fa\u3057\u306b\u307e\u3068\u3081\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002",(0,i.jsx)(s.strong,{children:"Momento MediaStore"}),"\u306f\u3001\u30aa\u30ea\u30b8\u30f3\u3068\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u6298\u308a\u305f\u305f\u307e\u308c\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8d85\u9ad8\u901f\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u63d0\u4f9b\u3057\u3001CDN\u304c\u8907\u6570\u306e\u8996\u8074\u8005\u306b\u30d3\u30c7\u30aa\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u8fc5\u901f\u306b\u914d\u4fe1\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3068\u518d\u751f",children:"\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3068\u518d\u751f"}),"\n",(0,i.jsxs)(s.p,{children:["\u8996\u8074\u8005\u5074\u3067\u306f\u3001\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u304cCDN\u306b\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3001",(0,i.jsx)(s.strong,{children:"\u30eb\u30c3\u30af\u30a2\u30d8\u30c3\u30c9\u30fb\u30d0\u30c3\u30d5\u30a1"}),"\u306b\u5165\u308c\u308b\u3053\u3068\u3067\u3001\u30b9\u30e0\u30fc\u30ba\u306a\u518d\u751f\u3092\u5b9f\u73fe\u3059\u308b\u3002\u30d7\u30ec\u30fc\u30e4\u30fc\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u72b6\u614b\u3092\u7d99\u7d9a\u7684\u306b\u76e3\u8996\u3057\u3001ABR\u30e9\u30c0\u30fc\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u308b\u7570\u306a\u308b\u89e3\u50cf\u5ea6\u3068\u30d3\u30c3\u30c8\u30ec\u30fc\u30c8\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30d3\u30c7\u30aa\u54c1\u8cea\u3092\u8abf\u6574\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u77ed\u304f\u3001\u30aa\u30ea\u30b8\u30f3\u304b\u3089\u306e\u53d6\u5f97\u304c\u901f\u3044\u307b\u3069\u3001\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u306e\u53ef\u80fd\u6027\u306f\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002",(0,i.jsx)(s.strong,{children:"Momento MediaStore\u306e"}),"\u4f4e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u306e\u8fc5\u901f\u306a\u53d6\u5f97\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u3001\u30d7\u30ec\u30fc\u30e4\u30fc\u306f\u30d0\u30c3\u30d5\u30a1\u3092\u30d5\u30eb\u306b\u4fdd\u3061\u3001\u5909\u52d5\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u6761\u4ef6\u4e0b\u3067\u3082\u30b9\u30e0\u30fc\u30ba\u306a\u518d\u751f\u3092\u7dad\u6301\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308b\u9045\u5ef6\u306e\u6700\u5c0f\u5316",children:"\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308b\u9045\u5ef6\u306e\u6700\u5c0f\u5316"}),"\n",(0,i.jsxs)(s.p,{children:["\u30e9\u30a4\u30d6\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3044\u3066\u6700\u3082\u91cd\u8981\u306a\u8981\u7d20\u306f\u3001",(0,i.jsx)(s.strong,{children:"\u9045\u5ef6"}),"\u3067\u3059\u3002",(0,i.jsx)(s.a,{href:"/mediastore/streaming/live-streaming/glass-to-glass-latency",children:"Glass-to-glass latency"}),"\u306f\u3001\u30ab\u30e1\u30e9\u304c\u30a4\u30d9\u30f3\u30c8\u3092\u6355\u6349\u3057\u3066\u304b\u3089\uff08\u30ab\u30e1\u30e9\u306e \u300cglass\u300d\uff09\u3001\u8996\u8074\u8005\u306e\u753b\u9762\uff08\u30c7\u30d0\u30a4\u30b9\u306e \u300cglass\u300d\uff09\u306b\u8868\u793a\u3055\u308c\u308b\u307e\u3067\u306e\u6642\u9593\u3092\u6307\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u9045\u5ef6\u306e\u6700\u5c0f\u5316\u306b\u306f\u3001\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30fb\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306e\u3042\u3089\u3086\u308b\u90e8\u5206\u3092\u6700\u9069\u5316\u3059\u308b\u3053\u3068\u304c\u542b\u307e\u308c\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Shorter segment durations"})," - \u77ed\u3044\u30bb\u30b0\u30e1\u30f3\u30c8\uff08\u305f\u3068\u3048\u3070\u300110\u79d2\u3067\u306f\u306a\u304f2\u79d2\uff09\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306b\u65b0\u3057\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u3088\u308a\u983b\u7e41\u306b\u914d\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30e9\u30a4\u30d6\u30d5\u30a3\u30fc\u30c9\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u304b\u3089\u8996\u8074\u8005\u306b\u8868\u793a\u3059\u308b\u307e\u3067\u306e\u6642\u9593\u3092\u77ed\u7e2e\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Efficient content delivery"})," - CDN\u306f\u3001\u8996\u8074\u8005\u306b\u8fd1\u3044\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u3001",(0,i.jsx)(s.strong,{children:"Momento MediaStore"}),"\u306f\u3001\u3053\u308c\u3089\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u8981\u6c42\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u5373\u5ea7\u306b\u3001\u8aa4\u5dee\u306e\u5c11\u306a\u3044\u72b6\u614b\u3067\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3001\u30aa\u30ea\u30b8\u30f3\u3068CDN\u306e\u9593\u3067\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u9045\u5ef6\u3092\u8efd\u6e1b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Player buffering optimizations"})," - \u30d7\u30ec\u30fc\u30e4\u30fc\u306f\u3001\u6570\u79d2\u9593\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3060\u3051\u3092\u5148\u306b\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u3001\u518d\u751f\u306e\u9045\u5ef6\u3092\u3055\u3089\u306b\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u81a8\u5927\u306a\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3078\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0",children:"\u81a8\u5927\u306a\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3078\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0"}),"\n",(0,i.jsx)(s.p,{children:"\u30e9\u30a4\u30d6\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306f\u3001\u7279\u306b\u30b9\u30dd\u30fc\u30c4\u30fb\u30a4\u30d9\u30f3\u30c8\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30fb\u30ab\u30f3\u30d5\u30a1\u30ec\u30f3\u30b9\u3001\u30b3\u30f3\u30b5\u30fc\u30c8\u306a\u3069\u3001\u9700\u8981\u306e\u9ad8\u3044\u30a4\u30d9\u30f3\u30c8\u306e\u5834\u5408\u3001\u6570\u4eba\u306e\u8996\u8074\u8005\u3078\u306e\u914d\u4fe1\u304b\u3089\u6570\u767e\u4e07\u4eba\u3078\u306e\u914d\u4fe1\u3078\u3068\u6025\u901f\u306b\u62e1\u5927\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u30b7\u30ca\u30ea\u30aa\u3067\u306f\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u304c\u91cd\u8981\u3067\u3059\u3002\u8996\u8074\u8005\u304c\u6025\u5897\u3059\u308b\u3068\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u4f4e\u4e0b\u3055\u305b\u308b\u3053\u3068\u306a\u304f\u81a8\u5927\u306a\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Momento MediaStore"})," \u306f\u3001\u3053\u306e\u3088\u3046\u306a\u9700\u8981\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001\u6bce\u79d2\u6570\u767e\u4e07\u306e\u540c\u6642\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u5fdc\u3057\u3001\u5bb9\u6613\u306b\u62e1\u5f35\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u9ad8\u8ca0\u8377\u6642\u3067\u3082\u30d3\u30c7\u30aa\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u9045\u5ef6\u306a\u304fCDN\u306b\u914d\u4fe1\u3055\u308c\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u30b9\u30e0\u30fc\u30ba\u3067\u4e2d\u65ad\u306e\u306a\u3044\u8996\u8074\u4f53\u9a13\u304c\u7dad\u6301\u3055\u308c\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(6540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);