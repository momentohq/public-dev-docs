"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4522],{9924:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=n(4848),i=n(8453);const o={sidebar_position:5,sidebar_label:"Eviction vs Expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",pagination_next:null},a="\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6982\u5ff5\uff1a \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u671f\u9650\u5207\u308c",r={id:"cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration.md",sourceDirName:"cache/learn/courses/cache-concepts",slug:"/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",permalink:"/ja/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Eviction vs Expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",pagination_next:null},sidebar:"cacheSidebar",previous:{title:"Time to Live",permalink:"/ja/cache/learn/courses/cache-concepts/time-to-live"}},s={},h=[{value:"\u52d5\u753b",id:"\u52d5\u753b",level:2},{value:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8",level:2}];function l(e){const c={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.header,{children:(0,t.jsx)(c.h1,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6982\u5ff5-\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u671f\u9650\u5207\u308c",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6982\u5ff5\uff1a \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u671f\u9650\u5207\u308c"})}),"\n",(0,t.jsx)(c.p,{children:"\u3053\u306e\u30ec\u30c3\u30b9\u30f3\u3067\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u57fa\u672c\u7684\u306a\u76ee\u7684\u3068\u5229\u70b9\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30d3\u30af\u30b7\u30e7\u30f3\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30af\u30b9\u30d1\u30a4\u30a2\u306e\u6982\u5ff5\u3092\u5206\u89e3\u3057\u3001Momento Cache\u306e\u821e\u53f0\u88cf\u3067\u305d\u308c\u3089\u304c\u3069\u306e\u3088\u3046\u306b\u51e6\u7406\u3055\u308c\u308b\u306e\u304b\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(c.h2,{id:"\u52d5\u753b",children:"\u52d5\u753b"}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/76qpwvn262g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsx)(c.h2,{id:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8",children:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8"}),"\n",(0,t.jsx)(c.p,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u983b\u7e41\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3092\u4e00\u6642\u7684\u306b\u4fdd\u5b58\u3059\u308b\u9818\u57df\u3067\u3059\u3002\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u76ee\u7684\u306f\u3001\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\u305f\u3081\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u56de\u6570\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u3059\u3002\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u3068\u53d6\u5f97\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4f9d\u5b58\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30fb\u30b5\u30fc\u30d0\u30fc\u306e\u8ca0\u8377\u3092\u8efd\u6e1b\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3068\u53ef\u7528\u6027\u3092\u5411\u4e0a\u3055\u305b\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,t.jsx)(c.p,{children:"\u3055\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6709\u52b9\u671f\u9650\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3088\u3046\u3002\u3053\u306e2\u3064\u306e\u6982\u5ff5\u306f\u95a2\u9023\u3057\u3066\u3044\u308b\u304c\u3001\u307e\u3063\u305f\u304f\u7570\u306a\u308b\u3082\u306e\u3067\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3068\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30b5\u30fc\u30d3\u30b9\u304c\u30c7\u30fc\u30bf\u3092\u524a\u9664\u3057\u3066\u4ed6\u306e\u30c7\u30fc\u30bf\u306e\u305f\u3081\u306e\u30b9\u30da\u30fc\u30b9\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u3044\u3063\u3071\u3044\u306b\u306a\u308a\u3001\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u5834\u6240\u304c\u306a\u304f\u306a\u3063\u305f\u3068\u304d\u306b\u8d77\u3053\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(c.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u6d88\u53bb\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u6d88\u53bb\u304c\u767a\u751f\u3057\u305f\u3068\u304d\u306b\u3001\u3069\u306e\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u6d88\u53bb\u3055\u308c\u308b\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u6d88\u53bb\u30dd\u30ea\u30b7\u30fc\u306e\u4f8b\u3068\u3057\u3066\u306f\u3001LRU\uff08least recently used\uff09\u3001LFU\uff08least frequently used\uff09\u3001\u30e9\u30f3\u30c0\u30e0\u6d88\u53bb\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6709\u52b9\u671f\u9650\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u524a\u9664\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002\u3053\u308c\u306f\u901a\u5e38\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6709\u52b9\u671f\u9650\uff08TTL\uff09\u3068\u547c\u3070\u308c\u308b\u5024\u306b\u3088\u3063\u3066\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u5024\u306f\u3001\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u308b\u3068\u304d\u306b\u3001\u305d\u308c\u305e\u308c\u306e\u30c7\u30fc\u30bf\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002TTL\u5024\u306b\u9054\u3059\u308b\u3068\u3001\u305d\u306e\u30c7\u30fc\u30bf\u306f\u671f\u9650\u5207\u308c\u3068\u307f\u306a\u3055\u308c\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u3063\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(c.p,{children:"\u8981\u7d04\u3059\u308b\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3068\u306f\u3001\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u306e\u305f\u3081\u306e\u30b9\u30da\u30fc\u30b9\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u524a\u9664\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3042\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3068\u306f\u3001\u3082\u306f\u3084\u65b0\u9bae\u3067\u306a\u3044\u3001\u307e\u305f\u306f\u6700\u65b0\u3067\u306a\u3044\u3068\u307f\u306a\u3055\u308c\u308b\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u306e2\u3064\u306e\u6982\u5ff5\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30b7\u30b9\u30c6\u30e0\u306e\u52b9\u7387\u3068\u6709\u52b9\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,t.jsx)(c.p,{children:"\u3053\u306e2\u3064\u306e\u7528\u8a9e\u304c\u308f\u304b\u3063\u305f\u3068\u3053\u308d\u3067\u3001Momento Cache\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u9023\u3059\u308b\u3053\u308c\u3089\u306e\u7528\u8a9e\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002Momento\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7acb\u3061\u6d88\u3048\u3092\u30b5\u30fc\u30d3\u30b9\u54c1\u8cea\u4f4e\u4e0b\u306e\u91cd\u8981\u306a\u6307\u6a19\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002\u30b5\u30fc\u30d3\u30b9\u306f\u3053\u308c\u3092\u7d99\u7d9a\u7684\u306b\u76e3\u8996\u3057\u3001\u3059\u3079\u3066\u306e\u9867\u5ba2\u306e\u305f\u3081\u306b\u30d0\u30c3\u30d5\u30a1\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u5bb9\u91cf\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002Momento Cache\u306e\u30b5\u30fc\u30d3\u30b9\u30ec\u30d9\u30eb\u306e\u76ee\u6a19\u306f\u3001\u3059\u3079\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306eTTL\u306e\u6709\u52b9\u671f\u9650\u3092\u5c0a\u91cd\u3057\u3001\u30c7\u30fc\u30bf\u3092\u9000\u907f\u3055\u305b\u306a\u3044\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,t.jsx)(c.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001Momento Cache\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u633f\u5165\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b\u3001\u79d2\u5358\u4f4d\u3067time to live\u306e\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5834\u6240\u306f2\u3064\u3042\u308a\u307e\u3059\u30021\u3064\u76ee\u306f\u3001SDK\u3078\u306e\u30b3\u30fc\u30eb\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b\u3068\u304d\u306b\u3001\u305d\u306e\u5024\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u305d\u3057\u30662\u3064\u76ee\u306f\u3001\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3092\u884c\u3046\u3068\u304d\u306b\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b\u305d\u306e\u5024\u3092\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3067TTL\u5024\u3092\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001SDK\u306f\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5024\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001TTL\u306e\u6700\u5927\u5024\u306f24\u6642\u9593\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(c.p,{children:['\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001"',(0,t.jsx)(c.a,{href:"/ja/cache/learn/how-it-works/cache-eviction-vs-expiration",children:"Cache eviction vs. cache expiration"}),'" \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002']})]})}function d(e={}){const{wrapper:c}={...(0,i.R)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,c,n)=>{n.d(c,{R:()=>a,x:()=>r});var t=n(6540);const i={},o=t.createContext(i);function a(e){const c=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:c},e.children)}}}]);