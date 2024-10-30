"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[787],{52561:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(74848),n=t(28453);const i={sidebar_position:4,sidebar_label:"Zero buffer rate (ZBR)",title:"What is zero buffer rate?",description:"Learn what zero buffer rate means and why Momento MediaStore is the perfect option to get it.",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless"]},s="\u30bc\u30ed\u30fb\u30d0\u30c3\u30d5\u30a1\u30fb\u30ec\u30fc\u30c8\u3068\u306f\uff1f",a={id:"mediastore/core-concepts/zero-buffer-rate",title:"What is zero buffer rate?",description:"Learn what zero buffer rate means and why Momento MediaStore is the perfect option to get it.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/mediastore/core-concepts/zero-buffer-rate.md",sourceDirName:"mediastore/core-concepts",slug:"/mediastore/core-concepts/zero-buffer-rate",permalink:"/ja/mediastore/core-concepts/zero-buffer-rate",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/core-concepts/zero-buffer-rate.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Zero buffer rate (ZBR)",title:"What is zero buffer rate?",description:"Learn what zero buffer rate means and why Momento MediaStore is the perfect option to get it.",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless"]},sidebar:"mediastoreSidebar",previous:{title:"ABR ladder",permalink:"/ja/mediastore/core-concepts/abr-ladder"},next:{title:"Streaming"}},c={},d=[{value:"\u30e1\u30c7\u30a3\u30a2\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308bZBR",id:"\u30e1\u30c7\u30a3\u30a2\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308bzbr",level:2},{value:"ZBR\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0",id:"zbr\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0",level:3},{value:"Momento\u304cZBR\u3092\u6700\u5927\u5316\u3059\u308b\u65b9\u6cd5",id:"momento\u304czbr\u3092\u6700\u5927\u5316\u3059\u308b\u65b9\u6cd5",level:2}];function l(e){const r={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"\u30bc\u30ed\u30d0\u30c3\u30d5\u30a1\u30ec\u30fc\u30c8\u3068\u306f",children:"\u30bc\u30ed\u30fb\u30d0\u30c3\u30d5\u30a1\u30fb\u30ec\u30fc\u30c8\u3068\u306f\uff1f"})}),"\n",(0,o.jsx)(r.p,{children:"\u30bc\u30ed\u30fb\u30d0\u30c3\u30d5\u30a1\u30fb\u30ec\u30fc\u30c8\uff08ZBR\uff09\u306f\u3001\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u30fb\u30a4\u30d9\u30f3\u30c8\u306b1\u5ea6\u3082\u906d\u9047\u3059\u308b\u3053\u3068\u306a\u304f\u30b9\u30c8\u30ea\u30fc\u30e0\u5168\u4f53\u3092\u8996\u8074\u3067\u304d\u308b\u8996\u8074\u8005\u306e\u5272\u5408\u3092\u6e2c\u5b9a\u3057\u307e\u3059\u3002ZBR\u304c\u9ad8\u3044\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u8996\u8074\u8005\u306e\u6e80\u8db3\u5ea6\u3068\u30a8\u30f3\u30b2\u30fc\u30b8\u30e1\u30f3\u30c8\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u4e0d\u53ef\u6b20\u306a\u3001\u30b9\u30e0\u30fc\u30ba\u3067\u4e2d\u65ad\u306e\u306a\u3044\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u4f53\u9a13\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u306e\u4e2d\u65ad\u306f\u8996\u8074\u8005\u3092\u30a4\u30e9\u30a4\u30e9\u3055\u305b\u3001\u30b9\u30c8\u30ea\u30fc\u30e0\u304b\u3089\u96e2\u8131\u3055\u305b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u9ad8\u3044ZBR\u3092\u9054\u6210\u3059\u308b\u3053\u3068\u306f\u3001\u3042\u3089\u3086\u308b\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u306b\u3068\u3063\u3066\u91cd\u8981\u306a\u76ee\u6a19\u3067\u3059\u3002"}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xSWRpr2we6Y?si=u4TtsVlEQtm44cvQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),"\n",(0,o.jsx)(r.h2,{id:"\u30e1\u30c7\u30a3\u30a2\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308bzbr",children:"\u30e1\u30c7\u30a3\u30a2\u30fb\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306b\u304a\u3051\u308bZBR"}),"\n",(0,o.jsxs)(r.p,{children:["\u9ad8\u3044 ZBR \u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,o.jsx)(r.a,{href:"/mediastore/core-concepts/segments",children:"segments"})," \u304c\u8fc5\u901f\u304b\u3064\u4e00\u8cab\u3057\u3066\u914d\u4fe1\u3055\u308c\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u30d3\u30c7\u30aa \u30d7\u30ec\u30fc\u30e4\u30fc\u306f\u3001\u30d3\u30c7\u30aa \u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u4e8b\u524d\u306b\u53d7\u4fe1\u3057\u3066\u3001",(0,o.jsx)(r.em,{children:"\u30eb\u30c3\u30af\u30a2\u30d8\u30c3\u30c9 \u30d0\u30c3\u30d5\u30a1\u30fc"}),"\u3092\u69cb\u7bc9\u3057\u3001\u518d\u751f\u306e\u4e2d\u65ad\u3092\u9632\u304e\u307e\u3059\u3002\u30bb\u30b0\u30e1\u30f3\u30c8\u53d6\u5f97\u306e\u9045\u5ef6\u306b\u3088\u308a\u30eb\u30c3\u30af\u30a2\u30d8\u30c3\u30c9 \u30d0\u30c3\u30d5\u30a1\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u4e0d\u8db3\u3059\u308b\u3068\u3001\u30d7\u30ec\u30fc\u30e4\u306f\u4e00\u6642\u505c\u6b62\u3068\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3092\u4f59\u5100\u306a\u304f\u3055\u308c\u3001ZBR \u304c\u4f4e\u4e0b\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.h3,{id:"zbr\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0",children:"ZBR\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Network conditions"})," - \u643a\u5e2f\u96fb\u8a71\u3084Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5e2f\u57df\u5e45\u304c\u5909\u52d5\u3059\u308b\u3068\u3001\u30d7\u30ec\u30fc\u30e4\u30fc\u304c\u5b89\u5b9a\u3057\u305f\u30eb\u30c3\u30af\u30a2\u30d8\u30c3\u30c9\u30d0\u30c3\u30d5\u30a1\u3092\u7dad\u6301\u3067\u304d\u306a\u304f\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"CDN performance"})," - \u30dd\u30a4\u30f3\u30c8\u30fb\u30aa\u30d6\u30fb\u30d7\u30ec\u30bc\u30f3\u30b9\uff08POP\uff09\u306f\u3001\u30aa\u30ea\u30b8\u30f3\u306e\u8ca0\u8377\u3092\u8efd\u6e1b\u3059\u308b\u305f\u3081\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u6298\u308a\u305f\u305f\u3082\u3046\u3068\u3057\u307e\u3059\u304c\u3001\u30aa\u30ea\u30b8\u30f3\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u9045\u5ef6\u3084\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Origin latency"}),": \u9045\u3044",(0,o.jsx)(r.a,{href:"/mediastore/core-concepts/origin",children:"origin"}),"\u306f\u3001\u5931\u6557\u3057\u305f\u66f8\u304d\u8fbc\u307f\u3084\u9045\u3044\u8aad\u307f\u8fbc\u307f\u306e\u3088\u3046\u306a\u8ffd\u52a0\u306e\u9045\u5ef6\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"momento\u304czbr\u3092\u6700\u5927\u5316\u3059\u308b\u65b9\u6cd5",children:"Momento\u304cZBR\u3092\u6700\u5927\u5316\u3059\u308b\u65b9\u6cd5"}),"\n",(0,o.jsxs)(r.p,{children:["Momento\u306f\u3001",(0,o.jsx)(r.strong,{children:"\u30a4\u30f3\u30fb\u30e1\u30e2\u30ea\u30fb\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"}),"\u3068",(0,o.jsx)(r.strong,{children:"\u4f4e\u30c6\u30fc\u30eb\u30fb\u30ec\u30a4\u30c6\u30f3\u30b7"}),"\u306b\u3088\u308a\u3001ZBR\u3092\u6539\u5584\u3057\u307e\u3059\u3002\u9ad8\u901f\u3067\u4fe1\u983c\u6027\u306e\u9ad8\u3044\u30aa\u30ea\u30b8\u30f3\u3068\u3057\u3066\u3001Momento \u306f\u52d5\u753b\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u8fc5\u901f\u306b\u914d\u4fe1\u3057\u3001\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u306e\u30ea\u30b9\u30af\u3092\u4f4e\u6e1b\u3057\u307e\u3059\u3002\u3053\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u7d30\u304b\u304f\u8abf\u6574\u3055\u308c\u305f\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u914d\u4fe1\u6642\u9593\u3092\u6700\u5c0f\u5316\u3057\u3001\u30d7\u30ec\u30fc\u30e4\u30fc\u304c\u4e2d\u65ad\u306e\u306a\u3044\u518d\u751f\u306b\u4e0d\u53ef\u6b20\u306a\u5b8c\u5168\u306a\u30eb\u30c3\u30af\u30a2\u30d8\u30c3\u30c9\u30fb\u30d0\u30c3\u30d5\u30a1\u3092\u7dad\u6301\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(r.p,{children:"\u4f4e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u914d\u4fe1\u306b\u52a0\u3048\u3001Momento\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u30a8\u30e9\u30fc\u7387\u3092\u4f4e\u6e1b\u3057\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u914d\u4fe1\u3092\u9045\u3089\u305b\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u66f8\u304d\u8fbc\u307f\u5931\u6557\u3084\u518d\u8a66\u884c\u306e\u53ef\u80fd\u6027\u3092\u4f4e\u6e1b\u3057\u307e\u3059\u3002\u30a8\u30e9\u30fc\u306e\u6e1b\u5c11\u3068\u30c7\u30fc\u30bf\u8ee2\u9001\u306e\u9ad8\u901f\u5316\u306b\u3088\u308a\u3001Momento\u306fZBR\u3092\u5927\u5e45\u306b\u6539\u5584\u3057\u307e\u3059\u3002\u5f93\u6765\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30a2\u306b\u6bd4\u3079\u3066100\u500d\u3082\u901f\u3044\u30c6\u30fc\u30eb\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3067\u3001Momento MediaStore\u306f\u3001\u30cf\u30a4\u30c7\u30de\u30f3\u30c9\u30b7\u30fc\u30f3\u3067\u3082\u3001\u3059\u3079\u3066\u306e\u8996\u8074\u8005\u306b\u30b9\u30e0\u30fc\u30ba\u3067\u4e00\u8cab\u6027\u306e\u3042\u308b\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u30aa\u30ea\u30b8\u30f3\u304c\u9045\u3044\u3068\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u304c\u767a\u751f\u3057\u3001\u30d7\u30ec\u30fc\u30e4\u30fc\u304c\u65b0\u3057\u3044\u30bb\u30b0\u30e1\u30f3\u30c8\u306e\u30ed\u30fc\u30c9\u3092\u5f85\u3064\u9593\u306b\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u304c\u767a\u751f\u3057\u3001\u6700\u7d42\u7684\u306b ZBR \u304c\u4f4e\u4e0b\u3057\u307e\u3059\u3002Momento\u3067\u306f\u3001\u3053\u306e\u3088\u3046\u306a\u30ea\u30b9\u30af\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3001\u8996\u8074\u8005\u3092\u98fd\u304d\u3055\u305b\u306a\u3044\u30b7\u30fc\u30e0\u30ec\u30b9\u3067\u30d0\u30c3\u30d5\u30a1\u306e\u306a\u3044\u8996\u8074\u4f53\u9a13\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var o=t(96540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);