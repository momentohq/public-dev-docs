"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5312],{8853:(e,c,t)=>{t.r(c),t.d(c,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(4848),i=t(8453);const o={sidebar_position:4,sidebar_label:"Time to Live",title:"Cache Concepts - Time to live (TTL)",description:"Learn about the use of Time to live when caching data in a high speed serverless managed cache."},s="Cache \u306e \u30b3\u30f3\u30bb\u30d7\u30c8: Time to live (TTL)",a={id:"cache/learn/courses/cache-concepts/time-to-live",title:"Cache Concepts - Time to live (TTL)",description:"Learn about the use of Time to live when caching data in a high speed serverless managed cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/learn/courses/cache-concepts/time-to-live.md",sourceDirName:"cache/learn/courses/cache-concepts",slug:"/cache/learn/courses/cache-concepts/time-to-live",permalink:"/ja/cache/learn/courses/cache-concepts/time-to-live",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/courses/cache-concepts/time-to-live.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Time to Live",title:"Cache Concepts - Time to live (TTL)",description:"Learn about the use of Time to live when caching data in a high speed serverless managed cache."},sidebar:"cacheSidebar",previous:{title:"Why Use a Serverless Managed Service",permalink:"/ja/cache/learn/courses/cache-concepts/why-use-serverless-services"},next:{title:"Eviction vs Expiration",permalink:"/ja/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration"}},r={},l=[{value:"Video",id:"video",level:2},{value:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8",level:2}];function h(e){const c={a:"a",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.h1,{id:"cache-\u306e-\u30b3\u30f3\u30bb\u30d7\u30c8-time-to-live-ttl",children:"Cache \u306e \u30b3\u30f3\u30bb\u30d7\u30c8: Time to live (TTL)"}),"\n",(0,n.jsx)(c.p,{children:"\u3053\u306e\u30ec\u30c3\u30b9\u30f3\u3067\u306f\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3084\u4e00\u822c\u7684\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u542b\u3081\u3001TTL (time to live) \u306e\u91cd\u8981\u306a\u6982\u5ff5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u307e\u305f\u3001Momento Cache\u306b\u304a\u3051\u308bTTL\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u3068\u5236\u9650\u306b\u3064\u3044\u3066\u3082\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(c.h2,{id:"video",children:"Video"}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FDmk6RP8-b0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,n.jsx)(c.h2,{id:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8",children:"\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8"}),"\n",(0,n.jsx)(c.p,{children:"TTL\uff08Time to Live\uff09\u3068\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u306e\u9805\u76ee\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u5024\u3067\u3042\u308b\u3002\u3053\u308c\u306f\u3001\u305d\u306e\u30c7\u30fc\u30bf\u304c\u671f\u9650\u5207\u308c\u3068\u307f\u306a\u3055\u308c\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u305f\u5834\u5408\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u8fd4\u3055\u308c\u306a\u304f\u306a\u308b\u307e\u3067\u306b\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3069\u308c\u3060\u3051\u306e\u671f\u9593\u6b8b\u3063\u3066\u3044\u308b\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u3067\u306f\u3001\u306a\u305cTTL\u304c\u91cd\u8981\u306a\u306e\u3067\u3057\u3087\u3046\u304b\uff1f"}),"\n",(0,n.jsx)(c.p,{children:"\u3055\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30c7\u30fc\u30bf\u304c\u904e\u5ea6\u306b\u53e4\u304f\u306a\u3063\u3066\u3044\u308b\u72b6\u6cc1\u3092\u60f3\u50cf\u3057\u3066\u307f\u3066\u307b\u3057\u3044\u3002\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u3082\u306f\u3084\u95a2\u9023\u6027\u306e\u306a\u3044\u60c5\u5831\u304c\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u3001\u6642\u306b\u306f\u6df1\u523b\u306a\u7d50\u679c\u3092\u62db\u304f\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002TTL\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u4e00\u5b9a\u671f\u9593\u304c\u7d4c\u904e\u3057\u305f\u5f8c\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30c7\u30fc\u30bf\u304c\u524a\u9664\u3055\u308c\u3001\u30a2\u30d7\u30ea\u304c\u6a29\u5a01\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3092\u78ba\u5b9f\u306b\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(c.p,{children:"\u30bb\u30c3\u30b7\u30e7\u30f3\u30fb\u30c8\u30fc\u30af\u30f3\u306e\u4fdd\u5b58\u306f\u3001TTL\u306e\u826f\u3044\u4f7f\u7528\u4f8b\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u9577\u304f\u3066\u308230\u5206\u7a0b\u5ea6\u3067\u3042\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3057\u305f\u3044\u3068\u3057\u307e\u3057\u3087\u3046\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u633f\u5165\u3055\u308c\u308b\u30bb\u30c3\u30b7\u30e7\u30f3\u30c8\u30fc\u30af\u30f3\u30a2\u30a4\u30c6\u30e0\u306eTTL\u5024\u3092\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u751f\u6210\u304b\u308930\u5206\u306b\u8a2d\u5b9a\u3057\u300130\u5206\u7d4c\u904e\u5f8c\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u30bb\u30c3\u30b7\u30e7\u30f3\u30c8\u30fc\u30af\u30f3\u3092\u524a\u9664\u3059\u308b\u3068\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u304c\u30c8\u30fc\u30af\u30f3\u306e\u5b58\u5728\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u30a2\u30d7\u30ea\u306f\u30e6\u30fc\u30b6\u30fc\u304c\u518d\u5ea6\u30ed\u30b0\u30a4\u30f3\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u77e5\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(c.p,{children:"\u30a2\u30d7\u30ea\u304c\u30c8\u30fc\u30af\u30f3\u306e\u5b58\u5728\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u30a2\u30d7\u30ea\u306f\u30e6\u30fc\u30b6\u30fc\u304c\u518d\u5ea6\u30ed\u30b0\u30a4\u30f3\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u77e5\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001TTL\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u969b\u306b\u8003\u616e\u3059\u3079\u304d\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u304c\u3042\u308a\u307e\u3059\u3002TTL\u3092\u8a2d\u5b9a\u3059\u308b\u306e\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u6700\u3082\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u305f\u3081\u3060\u3068\u3057\u307e\u3059\u3002\u983b\u7e41\u306b\u8aad\u307f\u8fbc\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306b\u3064\u3044\u3066\u3001\u5024\u3092\u4f4e\u304f\u8a2d\u5b9a\u3057\u3059\u304e\u305f\u3089\u3069\u3046\u306a\u308b\u3067\u3057\u3087\u3046\u304b\uff1f\u305d\u306e\u5834\u5408\u3001\u30a2\u30d7\u30ea\u306b\u3088\u3063\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u983b\u7e41\u306b\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3055\u308c\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u8ca0\u8377\u304c\u5897\u52a0\u3057\u3001\u305d\u306e\u7d50\u679c\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u4f4e\u4e0b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(c.p,{children:["\u4e00\u65b9\u3001TTL\u5024\u3092\u9ad8\u304f\u8a2d\u5b9a\u3057\u3059\u304e\u308b\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30c7\u30fc\u30bf\u304c\u53e4\u304f\u306a\u308a\u3001\u4e0d\u6b63\u78ba\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u6700\u5f8c\u306e\u90e8\u5206\u306f\u3001\u3069\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u3046\u304b\u306b\u3088\u308a\u307e\u3059\u304c\u3001\u305d\u308c\u306f\u5225\u306e\u30d3\u30c7\u30aa\u306e\u8a71\u984c\u306b\u3057\u307e\u3057\u3087\u3046\u3002\u3053\u306e\u8a71\u984c\u306b\u3064\u3044\u3066\u306f\u3001\u8aac\u660e\u6587\uff08",(0,n.jsx)(c.a,{href:"https://docs.momentohq.com/introduction/common-caching-patterns",children:"\u3053\u3061\u3089"}),"\uff09\u306b\u30ea\u30f3\u30af\u3092\u8cbc\u3063\u3066\u304a\u304d\u307e\u3059\u3002\u3044\u305a\u308c\u306b\u305b\u3088\u3001TTL\u5024\u306e\u9069\u5207\u306a\u30d0\u30e9\u30f3\u30b9\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u306f\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u975e\u5e38\u306b\u91cd\u8981\u3067\u3042\u308a\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u3088\u3063\u3066\u306f\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,n.jsx)(c.p,{children:"TTL\u306e\u610f\u5473\u3068\u4f7f\u3044\u65b9\u304c\u308f\u304b\u3063\u305f\u3068\u3053\u308d\u3067\u3001Momento Cache\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u95a2\u4fc2\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(c.p,{children:"Momento Cache\u30b5\u30fc\u30d3\u30b9\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30a2\u30a4\u30c6\u30e0\u306b\u3064\u3044\u3066\u3001\u79d2\u5358\u4f4d\u3067time to live\u306e\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5834\u6240\u306f2\u3064\u3042\u308a\u307e\u3059\u30021\u3064\u76ee\u306f\u3001\u30a2\u30d7\u30ea\u304cSDK\u30b3\u30fc\u30eb\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u969b\u306bTTL\u5024\u3092\u6e21\u3059\u65b9\u6cd5\u3067\u3059\u3002\u3053\u306e\u5024\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3067\u5fc5\u9808\u3067\u3042\u308a\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u3044\u9650\u308a\u3001\u3059\u3079\u3066\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(c.p,{children:"\u3053\u308c\u304c2\u3064\u76ee\u306e\u5834\u6240\u306b\u3064\u306a\u304c\u308b\u3002\u3069\u306e\u3088\u3046\u306a\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3067\u3082\u3001\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304b\u3089\u8a2d\u5b9a\u3055\u308c\u305f\u5024\u3092\u4e0a\u66f8\u304d\u3059\u308b\u3088\u3046\u306bTTL\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3059\u3079\u3066\u306e\u30a2\u30a4\u30c6\u30e0\u306b\u72ec\u81ea\u306eTTL\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001Momento Cache\u3067\u8a2d\u5b9a\u3067\u304d\u308bTTL\u306e\u6700\u5927\u5024\u306f24\u6642\u9593\u3067\u3059\u300224\u6642\u9593\u3088\u308a\u9577\u3044\u5024\u3092\u8a2d\u5b9a\u3057\u3066\u3082\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u305d\u306e\u5024\u309224\u6642\u9593\u306b\u623b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(c.p,{children:"\u7d50\u8ad6\u3068\u3057\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30bf\u30a4\u30e0\u30fb\u30c8\u30a5\u30fb\u30e9\u30a4\u30d6\u306f\u3001\u30c7\u30fc\u30bf\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6b63\u78ba\u3055\u3068\u65b0\u9bae\u3055\u3092\u4fdd\u8a3c\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u91cd\u8981\u306a\u6982\u5ff5\u3067\u3059\u3002\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u3092\u614e\u91cd\u306b\u691c\u8a0e\u3057\u3001\u9069\u5207\u306a\u30d0\u30e9\u30f3\u30b9\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u3067\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u52b9\u7387\u6027\u3068\u6700\u9ad8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function d(e={}){const{wrapper:c}={...(0,i.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,c,t)=>{t.d(c,{R:()=>s,x:()=>a});var n=t(6540);const i={},o=n.createContext(i);function s(e){const c=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:c},e.children)}}}]);