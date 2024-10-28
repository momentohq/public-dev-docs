"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1487],{36406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>h,toc:()=>r});var o=t(74848),i=t(28453);const s={sidebar_position:7,sidebar_label:"Unity",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity."},c=void 0,h={id:"cache/integrations/unity-integration",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/integrations/unity-integration.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/unity-integration",permalink:"/ja/cache/integrations/unity-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/unity-integration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Unity",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity."},sidebar:"cacheSidebar",previous:{title:"Sequelize",permalink:"/ja/cache/integrations/sequelize"},next:{title:"Vercel",permalink:"/ja/cache/integrations/vercel-integration"}},d={},r=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Unity",id:"unity",level:3},{value:"Momento",id:"momento",level:3},{value:"Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:3},{value:"Unity\u306bMomento .NET SDK\u3092\u8ffd\u52a0\u3059\u308b",id:"unity\u306bmomento-net-sdk\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"Momento\u30c8\u30d4\u30c3\u30af\u3067Unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b",id:"momento\u30c8\u30d4\u30c3\u30af\u3067unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3",id:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3",level:3},{value:"Example Scenes",id:"example-scenes",level:3},{value:"(optional) Momento API\u30ad\u30fc\u306e\u8ffd\u52a0",id:"optional-momento-api\u30ad\u30fc\u306e\u8ffd\u52a0",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://unity.com/",children:"Unity"}),"\u306f\u3001\u4eca\u65e5\u3001\u5e02\u5834\u3067\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b\u30b2\u30fc\u30e0\u30a8\u30f3\u30b8\u30f3\u306e1\u3064\u3067\u3042\u308b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u958b\u767a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002Unity\u30b2\u30fc\u30e0\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3001\u6ca1\u5165\u578b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff08\u62e1\u5f35\u73fe\u5b9f\u3084\u4eee\u60f3\u73fe\u5b9f\u306a\u3069\uff09\u3092\u542b\u3080\u3055\u307e\u3056\u307e\u306a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30012D\u304a\u3088\u30733D\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f55\u5343\u4eba\u3082\u306e\u958b\u767a\u8005\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet",children:"Momento .NET SDK"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"\u30b7\u30f3\u30d7\u30eb\u306aUnity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001",(0,o.jsx)(n.a,{href:"https://docs.momentohq.com/topics",children:"Momento Topics"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c1\u30e3\u30c3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3092\u884c\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["Momento Topics\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3059\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30c8\u30d4\u30c3\u30af\u3068\u547c\u3070\u308c\u308b\u5c02\u7528\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u3066\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Unity\u30d9\u30fc\u30b9\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6700\u9069\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3042\u308b\u305f\u3081\u3001\u72ec\u81ea\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u4f5c\u6210\u3057\u305f\u308a\u8a2d\u5b9a\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u8a73\u7d30\u306f",(0,o.jsx)(n.a,{href:"https://docs.momentohq.com/topics",children:"Momento Topics Documentation page"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,o.jsx)(n.h3,{id:"unity",children:"Unity"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://unity.com/releases/lts",children:"Unity 2022 LTS release"}),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u66f8\u304f\u306b\u3042\u305f\u308a\u3001\u7279\u306bUnity 2022.3.9f1\u3092\u4f7f\u7528\u3057\u307e\u3057\u305f\u304c\u3001\u3069\u306eUnity 2022 LTS\u30ea\u30ea\u30fc\u30b9\u3067\u3082\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"momento",children:"Momento"}),"\n",(0,o.jsxs)(n.p,{children:["Unity\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5f85\u3064\u9593\u3001\u30aa\u30d7\u30b7\u30e7\u30f3\u3067",(0,o.jsx)(n.a,{href:"https://console.gomomento.com",children:"Momento console"}),"\u3092\u4f7f\u3063\u3066Momento\u5074\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6ce8\u610f: \u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u72ec\u81ea\u306e API Auth Token \u3092\u8a2d\u5b9a\u3059\u308b\u5834\u5408\u306b\u306e\u307f\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u6b8b\u308a\u306e\u90e8\u5206\u3067\u306f\u3001\u30e1\u30a4\u30f3\u306e ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/moderated-chat/",children:"Momento Moderated Chat"})," \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u90e8\u3068\u3057\u3066\u65e2\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3044\u308b ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"Token Vending Machine"})," \u3092\u5229\u7528\u3059\u308b\u306e\u3067\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"Unity demo repository"}),"\u306b\u306f\u3001\u72ec\u81ea\u306eMomento Topic\u3092\u5229\u7528\u3067\u304d\u308b2\u3064\u306eUnity\u30b7\u30fc\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u8a73\u3057\u304f\u306f\u3001\u4ee5\u4e0b\u306e",(0,o.jsx)(n.a,{href:"#example-scenes",children:"Example Scenes"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://console.gomomento.com",children:"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3067\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b\u304b\u3001\u65e2\u5b58\u306eGoogle\u307e\u305f\u306fGitHub\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u30ea\u30f3\u30af\u3059\u308b\u3053\u3068\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u30da\u30fc\u30b8\u306e\u53f3\u4e0a\u306b\u3042\u308b ",(0,o.jsx)(n.code,{children:"Create Cache"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\uff1a\n",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(81200).A+"",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u4f5c\u6210\u30dc\u30bf\u30f3"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Unity-Topics-Cache"}),"\u3068\u3044\u3046\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3001AWS\u307e\u305f\u306fGCP\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u3001\u4efb\u610f\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Create"}),"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u5229\u7528\u53ef\u80fd\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u65b0\u3057\u3044",(0,o.jsx)(n.code,{children:"Unity-Topics-Cache"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u305f\u5730\u57df\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3067 Momento API Key\u3092\u751f\u6210\u3059\u308b\u3068\u304d\u306b\u3001\u540c\u3058\u5730\u57df\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(79950).A+"",children:"\u30c1\u30e3\u30c3\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"API Key"}),"\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3057\u305f\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3001",(0,o.jsx)(n.code,{children:"Super User API Key"})," \u30c8\u30fc\u30af\u30f3\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u3001",(0,o.jsx)(n.code,{children:"Generate API Key"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,o.jsx)(n.img,{alt:"Generate token",src:t(25329).A+"",width:"3416",height:"1670"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"API\u30ad\u30fc"}),"\u3092\u30b3\u30d4\u30fc\u3057\u3066\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5f8c\u3067Unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u969b\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\n",(0,o.jsx)(n.img,{alt:"Generated token",src:t(83761).A+"",width:"2704",height:"416"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,o.jsx)(n.h3,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"#prerequisites",children:"\u524d\u63d0\u6761\u4ef6"}),"\u3092\u30af\u30ea\u30a2\u3057\u305f\u3089\u3001Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001\u79c1\u305f\u3061\u306e",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"example demo repository"}),"\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3066\u305d\u3053\u304b\u3089\u59cb\u3081\u308b\u304b\u3001\u30bc\u30ed\u304b\u3089\u81ea\u5206\u3067\u4f5c\u6210\u3057\u307e\u3059\u3002Unity\u306b\u6163\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3084\u3001\u5f8c\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u6642\u9593\u3092\u7bc0\u7d04\u3057\u305f\u3044\u5834\u5408\u306f\u3001example\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u30b5\u30f3\u30d7\u30eb\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308bUnity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"https://github.com/momentohq/momento-unity-demo"})," \u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"Unity Hub \u3092\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(n.li,{children:['\u65e2\u5b58\u306eUnity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 "Open"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u958b\u304d\u307e\u3059\uff1a\n',(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(59719).A+"",children:"\u65b0\u3057\u3044Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})]}),"\n",(0,o.jsx)(n.li,{children:"\u30af\u30ed\u30fc\u30f3\u3057\u305f\u30d5\u30a9\u30eb\u30c0\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.li,{children:"Unity 2022.3.9f1\u4ee5\u5916\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001Unity\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a8\u30c7\u30a3\u30bf\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9069\u5207\u306b\u5909\u66f4\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3089\u3001",(0,o.jsx)(n.code,{children:"MomentoTopicsDemo-ModeratedChat.unity"}),"\u30b7\u30fc\u30f3\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u69d8\u3005\u306a\u30ec\u30d9\u30eb\u306e\u6a5f\u80fd\u3092\u793a\u3059\u3044\u304f\u3064\u304b\u306e\u30b7\u30fc\u30f3\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\u3002Moderated Chat \u30b7\u30fc\u30f3\u306f\u3001\u30e1\u30a4\u30f3\u306e",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/moderated-chat/",children:"Momento Moderated Chat"}),"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eUnity\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",(0,o.jsx)(n.a,{href:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app",children:"How to use webhooks and Momento Topics to build a multi-language chat app"}),"\u306e\u30d6\u30ed\u30b0\u8a18\u4e8b\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u6b8b\u308a\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u5229\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"unity\u306bmomento-net-sdk\u3092\u8ffd\u52a0\u3059\u308b",children:"Unity\u306bMomento .NET SDK\u3092\u8ffd\u52a0\u3059\u308b"}),"\n",(0,o.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3051\u305f\u3089"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u6700\u65b0\u306e",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases",children:"MomentoSdkUnity\u30ea\u30ea\u30fc\u30b9.zip\u30d5\u30a1\u30a4\u30eb"}),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases/tag/v1.31.1",children:"v1.31.1 \u30ea\u30ea\u30fc\u30b9"})," \u306e\u5834\u5408\u306f\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases/download/v1.31.1/MomentoSdkUnity-1.31.1.zip",children:"MomentoSdkUnity-1.31.1.zip"})," \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u306e.zip\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001Unity\u306eHTTP/2\u4e92\u63db\u6027\u306e\u5236\u9650\u306e\u305f\u3081\u306bgRPC-Web\u3092\u5229\u7528\u3059\u308bMomento .NET SDK\u306e\u7279\u5225\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5fc5\u8981\u306a DLL \u306e\u4f9d\u5b58\u95a2\u4fc2\u3082 zip \u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u30d5\u30a9\u30eb\u30c0 ",(0,o.jsx)(n.code,{children:"Assets/MomentoSdkUnity"})," \u5185\u306b\u89e3\u51cd\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"momento\u30c8\u30d4\u30c3\u30af\u3067unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b",children:"Momento\u30c8\u30d4\u30c3\u30af\u3067Unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b"}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u307e\u3067\u304f\u308c\u3070\u3001",(0,o.jsx)(n.a,{href:"https://docs.momentohq.com/cache/develop/sdks/dotnet",children:"Momento .NET SDK"}),"\u3092\u4ecb\u3057\u3066Momento\u30c8\u30d4\u30c3\u30af\u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u69cb\u7bc9\u3068C#\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210\u3092\u958b\u59cb\u3059\u308b\u6e96\u5099\u304c\u6574\u3063\u305f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30af\u30ed\u30fc\u30f3\u3055\u308c\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u5229\u7528\u3057\u3001\u4ee5\u4e0b\u306e2\u3064\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067UI\u3068C#\u30b3\u30fc\u30c9\u304c\u3069\u306e\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3",children:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3"}),"\n",(0,o.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u3059\u3067\u306b3\u3064\u306e\u5225\u3005\u306e",(0,o.jsx)(n.a,{href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html",children:"Unity UI Canvas"}),"\u8981\u7d20\u306b\u30d3\u30eb\u30c9\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u30021\u3064\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u540d\u524d\u3092\u9078\u629e\u3055\u305b\u308b\u305f\u3081\u306e\u3082\u306e\u30011\u3064\u306f\u5b9f\u969b\u306e\u30c1\u30e3\u30c3\u30c8UI\u306e\u305f\u3081\u306e\u3082\u306e\u3001\u305d\u3057\u30661\u3064\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u30a8\u30e9\u30fc\u3092\u4f1d\u3048\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306b\u793a\u3059\u3088\u3046\u306b\u3001NameCanvas\u306b\u306f",(0,o.jsx)(n.a,{href:"https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/",children:"TextMeshPro"}),"\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u300cStart\u300d\u30dc\u30bf\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"NameCanvas",src:t(99534).A+"",width:"1447",height:"708"})}),"\n",(0,o.jsx)(n.p,{children:'\u30e6\u30fc\u30b6\u30fc\u304c\u540d\u524d\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001Enter\u30ad\u30fc\u3092\u62bc\u3059\u304b\u3001"Start "\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3068\u3001C# \u30b9\u30af\u30ea\u30d7\u30c8\u306f NameCanvas \u3092\u975e\u8868\u793a\u306b\u3057\u3001MessagingCanvas \u3092\u8868\u793a\u3057\u307e\u3059\u3002'}),"\n",(0,o.jsx)(n.p,{children:"MessagingCanvas\u306f\u307e\u305f\u3001Unity\u306e\u30e2\u30c7\u30ec\u30fc\u30c8\u30c1\u30e3\u30c3\u30c8\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u5b8c\u6210\u3055\u305b\u308b\u305f\u3081\u306b\u3044\u304f\u3064\u304b\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"UI\u306e\u53f3\u4e0a\u306b\u3042\u308b\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30bb\u30ec\u30af\u30c8\u30e1\u30cb\u30e5\u30fc\u3067\u3001\u69d8\u3005\u306a\u8a00\u8a9e\u306e\u7ffb\u8a33\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ed\u30fc\u30c9\u3057\u3066\u3044\u308b\u6642\u306b\u8868\u793a\u3055\u308c\u308b\u30d3\u30e5\u30fc\u306e\u4e2d\u592e\u306e\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30b5\u30fc\u30af\u30eb\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,o.jsxs)(n.li,{children:["\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e",(0,o.jsx)(n.a,{href:"https://github.com/gkngkc/UnityStandaloneFileBrowser",children:"UnityStandaloneFileBrowser"}),"\u3092\u5229\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30c1\u30e3\u30c3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u304b\u3089\u753b\u50cf\u3092\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u53f3\u4e0b\u306e\u753b\u50cf\u30dc\u30bf\u30f3\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-scenes",children:"Example Scenes"}),"\n",(0,o.jsxs)(n.p,{children:["\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u306f\u3001Momento SDK\u3068Unity\u3092\u7d71\u5408\u3059\u308b\u69d8\u3005\u306a\u65b9\u6cd5\u3092\u7d39\u4ecb\u3059\u308b4\u3064\u306eUnity\u30b7\u30fc\u30f3\u4f8b\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u6700\u521d\u306e2\u3064\u306f\u3001\u74b0\u5883\u5909\u6570 ",(0,o.jsx)(n.code,{children:"MOMENTO_AUTH_TOKEN"})," \u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u304b\u3001\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u30b3\u30d4\u30fc\u3057\u3066 ",(0,o.jsx)(n.code,{children:"Assets/Scripts/TopicsTest.cs"})," (\u307e\u305f\u306f ",(0,o.jsx)(n.code,{children:"Assets/Scripts/TopicsTestCoroutine.cs"}),") \u306b\u8cbc\u308a\u4ed8\u3051\u3001",(0,o.jsx)(n.code,{children:"ReadAuthToken()"})," \u95a2\u6570\u306e ",(0,o.jsx)(n.code,{children:"ADD_YOUR_TOKEN_HERE"})," \u3092\u7f6e\u304d\u63db\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059 (\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u30b3\u30fc\u30c9\u306b\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3059\u308b\u3053\u3068\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30c6\u30b9\u30c8\u76ee\u7684\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MomentoTopicsDemo.unity"})," (using ",(0,o.jsx)(n.code,{children:"TopicsTest.cs"}),"): ",(0,o.jsx)(n.code,{children:"Task.Run()"})," \u3092\u5229\u7528\u3057\u3066\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u30b9\u30ec\u30c3\u30c9\u3067 Momento Topic \u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u4e0a\u8a18\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3059\u3002\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample",children:"Momento .NET SDK Topic Example"})," \u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MomentoTopicsDemo-Coroutine.unity"}),"\uff08",(0,o.jsx)(n.code,{children:"TopicsTestCoroutine.cs"}),"\u3092\u4f7f\u7528\uff09\uff1a\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u3067\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u975e\u540c\u671f\u306b\u5b9f\u884c\u3059\u308b\u305f\u3081\u306bUnity Coroutines\u3092\u5229\u7528\u3059\u308b\u4ee5\u5916\u306f\u3001\u524d\u306e\u30b7\u30fc\u30f3\u3068\u540c\u3058\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MomentoTopicsDemo-TokenVendingMachine.unity"})," (using ",(0,o.jsx)(n.code,{children:"TopicsTestTokenVendingMachine.cs"}),"): \u4f8b\u306e ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"Momento Token Vending Machine"})," \u3092\u5229\u7528\u3057\u3066\u3001\u4e00\u6642\u7684\u306a\u5236\u9650\u4ed8\u304d\u30b9\u30b3\u30fc\u30d7\u306e Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002(2) \u30c8\u30d4\u30c3\u30af\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u57cb\u3081\u8fbc\u307e\u308c\u305f ",(0,o.jsx)(n.code,{children:"tokenId"})," \u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u7279\u5b9a\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30e6\u30fc\u30b6\u540d\u3092\u3088\u308a\u5b89\u5168\u306b\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002TokenVendingMachine\u3092\u5225\u9014\u660e\u793a\u7684\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001",(0,o.jsx)(n.code,{children:"TopicsTestTokenVendingMachine.cs"}),"\u3067\u6307\u5b9a\u3057\u305f ",(0,o.jsx)(n.code,{children:"tokenVendingMachineURL"})," \u5909\u6570\u3067\u305d\u306eURL\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MomentoTopicsDemo-ModeratedChat.unity"})," (\u3044\u304f\u3064\u304b\u306e\u30d8\u30eb\u30d1\u30fc\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u5171\u306b ",(0,o.jsx)(n.code,{children:"ModeratedChat.cs"})," \u3092\u4f7f\u7528): \u516c\u958b\u3055\u308c\u3066\u3044\u308b Momento \u30e2\u30c7\u30ec\u30fc\u30c8\u30c1\u30e3\u30c3\u30c8\u30c7\u30e2\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 (",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/moderated-chat/tree/main",children:"https://github.com/momentohq/moderated-chat/tree/main"})," \u3068 ",(0,o.jsx)(n.a,{href:"https://chat.gomomento.com/",children:"https://chat.gomomento.com/"})," \u3092\u53c2\u7167) \u3092\u5229\u7528\u3057\u3066\u3001\u516c\u958b\u30c1\u30e3\u30c3\u30c8\u30c7\u30e2\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u30c1\u30e3\u30c3\u30c8\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306a\u306e\u3067\u3001C#\u30b3\u30fc\u30c9\u306e\u307b\u3068\u3093\u3069\u306f\u3059\u3067\u306b\u5b58\u5728\u3059\u308bJavascript\u306e",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/moderated-chat/tree/main/frontend",children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a6\u30a7\u30d6\u30af\u30e9\u30a4\u30a2\u30f3\u30c8"}),"\u3092\u8e0f\u8972\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"optional-momento-api\u30ad\u30fc\u306e\u8ffd\u52a0",children:"(optional) Momento API\u30ad\u30fc\u306e\u8ffd\u52a0"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e",(0,o.jsx)(n.a,{href:"#example-scenes",children:"\u30b5\u30f3\u30d7\u30eb\u30b7\u30fc\u30f3"}),"\u3067\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001\u72b6\u6cc1\u306b\u3088\u3063\u3066\u306fUnity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u4f8b\u3068\u3057\u3066 ",(0,o.jsx)(n.code,{children:"Assets/Scripts/TopicsTest.cs"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u307e\u305a\u6700\u521d\u306b\u3001C#\u30b9\u30af\u30ea\u30d7\u30c8\u306b",(0,o.jsx)(n.a,{href:"#momento",children:"Momento Prerequisite"}),"\u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305fAPI\u30ad\u30fc\u3092\u77e5\u3089\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample",children:"Momento .NET SDK\u30c8\u30d4\u30c3\u30af\u306e\u4f8b"}),"\u306b\u5f93\u3044\u3001\u74b0\u5883\u5909\u6570\u304b\u3089API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b\u304b\u3001\u30b3\u30fc\u30c9\u306bAPI\u30ad\u30fc\u3092\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3057\u307e\u3059(\u30b3\u30fc\u30c9\u306bAPI\u30ad\u30fc\u3092\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3059\u308b\u3053\u3068\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30c6\u30b9\u30c8\u76ee\u7684\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"\u30c8\u30fc\u30af\u30f3\u81ea\u52d5\u8ca9\u58f2\u6a5f"}),"\u3092\u4f7f\u7528\u3059\u308b\u5225\u306e\u65b9\u6cd5\u306f\u3001\u4e0a\u8a18\u306e",(0,o.jsx)(n.a,{href:"#example-scenes",children:"\u30b7\u30fc\u30f3\u306e\u4f8b"}),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059)\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['Windows\u3067\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001Windows\u306e\u30b9\u30bf\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001"environment "\u3092\u691c\u7d22\u3057\u3066\u3001"Edit the system environment variables "\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u6b21\u306b "Environment Variables "\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001',(0,o.jsx)(n.code,{children:"MOMENTO_API_KEY"}),"\u74b0\u5883\u5909\u6570\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u65b0\u3057\u304f\u4f5c\u6210\u3057\u305f\u74b0\u5883\u5909\u6570\u3092\u8a8d\u8b58\u3055\u305b\u308b\u305f\u3081\u306bUnity\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["C# \u30b9\u30af\u30ea\u30d7\u30c8\u3067 API \u30ad\u30fc\u3092\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001API \u30ad\u30fc\u3092\u30b3\u30d4\u30fc\u3057\u3066 ",(0,o.jsx)(n.code,{children:"Assets/Scripts/TopicsTest.cs"})," \u306b\u8cbc\u308a\u4ed8\u3051\u3001",(0,o.jsx)(n.code,{children:"ReadAuthToken()"})," \u95a2\u6570\u306e ",(0,o.jsx)(n.code,{children:"ADD_YOUR_TOKEN_HERE"})," \u3092\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'API\u30ad\u30fc\u304c\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u3089\u3001Unity Editor\u306e "Play "\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01'}),"\n",(0,o.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,o.jsxs)(n.p,{children:["\u7d50\u8ad6\u304b\u3089\u8a00\u3046\u3068\u3001Momento\u3068Unity\u3092\u7d71\u5408\u3059\u308b\u306b\u306f\u3001\u6700\u65b0\u306e",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases",children:"MomentoSdkUnity\u30ea\u30ea\u30fc\u30b9.zip\u30d5\u30a1\u30a4\u30eb"}),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001Unity\u306e",(0,o.jsx)(n.code,{children:"Assets"}),"\u30d5\u30a9\u30eb\u30c0\u5185\u306e\u4efb\u610f\u306e\u5834\u6240\u306b\u89e3\u51cd\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3055\u3089\u306b\u4e00\u6b69\u8e0f\u307f\u8fbc\u3093\u3067\u3001Momento\u30c8\u30d4\u30c3\u30af\u306b\u63a5\u7d9a\u3057\u3066\u3001\u7c21\u5358\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3057\u305f\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8cfc\u8aad\u3057\u305f\u308a\u3067\u304d\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u30c1\u30e3\u30c3\u30c8\u30fb\u30e6\u30fc\u30b6\u30fc\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30e2\u30c7\u30ec\u30fc\u30c8\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ",(0,o.jsx)(n.a,{href:"https://chat.gomomento.com/",children:"https://chat.gomomento.com/"})," \u306e Unity \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30c7\u30e2\u3057\u307e\u3057\u305f\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},81200:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/console-create-cache-90d89709336a49153da1d5b47282742a.png"},79950:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/Unity-Topics-Cache-a2d727138074b13e28cae8e3de98a042.png"},59719:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/hub-new-project-4677003da342342d687c2cb5057a0373.png"},83761:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},25329:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"},99534:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/NameCanvas-a876be532918e9c9dec8409671d2e857.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>h});var o=t(96540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);