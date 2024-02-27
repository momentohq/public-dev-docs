"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(k,r(r({ref:t},s),{},{components:n})):o.createElement(k,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:7,sidebar_label:"Unity",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity."},r=void 0,l={unversionedId:"cache/develop/integrations/unity-integration",id:"cache/develop/integrations/unity-integration",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/unity-integration.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/unity-integration",permalink:"/ja/cache/develop/integrations/unity-integration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/unity-integration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Unity",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity."},sidebar:"tutorialSidebar",previous:{title:"Sequelize",permalink:"/ja/cache/develop/integrations/sequelize"},next:{title:"Vercel",permalink:"/ja/cache/develop/integrations/vercel-integration"}},p={},m=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Unity",id:"unity",level:3},{value:"Momento",id:"momento",level:3},{value:"Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:3},{value:"Unity\u306bMomento .NET SDK\u3092\u8ffd\u52a0\u3059\u308b",id:"unity\u306bmomento-net-sdk\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"Momento\u30c8\u30d4\u30c3\u30af\u3067Unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b",id:"momento\u30c8\u30d4\u30c3\u30af\u3067unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3",id:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3",level:3},{value:"Momento\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308bC#\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7406\u89e3\u3059\u308b",id:"momento\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308bc\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7406\u89e3\u3059\u308b",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],s={toc:m};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://unity.com/"},"Unity"),"\u306f\u3001\u4eca\u65e5\u3001\u5e02\u5834\u3067\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b\u30b2\u30fc\u30e0\u30a8\u30f3\u30b8\u30f3\u306e1\u3064\u3067\u3042\u308b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u958b\u767a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002Unity\u30b2\u30fc\u30e0\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3001\u6ca1\u5165\u578b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff08\u62e1\u5f35\u73fe\u5b9f\u3084\u4eee\u60f3\u73fe\u5b9f\u306a\u3069\uff09\u3092\u542b\u3080\u3055\u307e\u3056\u307e\u306a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30012D\u304a\u3088\u30733D\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f55\u5343\u4eba\u3082\u306e\u958b\u767a\u8005\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet"},"Momento .NET SDK"),"\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-unity-demo"},"\u30b7\u30f3\u30d7\u30eb\u306aUnity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),"\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics"},"Momento Topics"),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c1\u30e3\u30c3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3092\u884c\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"Momento Topics\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3059\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30c8\u30d4\u30c3\u30af\u3068\u547c\u3070\u308c\u308b\u5c02\u7528\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u3066\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Unity\u30d9\u30fc\u30b9\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6700\u9069\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3042\u308b\u305f\u3081\u3001\u72ec\u81ea\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u4f5c\u6210\u3057\u305f\u308a\u8a2d\u5b9a\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/topics"},"Momento Topics Documentation page"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("h3",{id:"unity"},"Unity"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://unity.com/releases/lts"},"Unity 2022 LTS release"),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u66f8\u304f\u306b\u3042\u305f\u308a\u3001\u7279\u306bUnity 2022.3.9f1\u3092\u4f7f\u7528\u3057\u307e\u3057\u305f\u304c\u3001\u3069\u306eUnity 2022 LTS\u30ea\u30ea\u30fc\u30b9\u3067\u3082\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"momento"},"Momento"),(0,a.kt)("p",null,"Unity\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5f85\u3064\u9593\u3001",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u3092\u4f7f\u3063\u3066Momento\u5074\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e Google \u307e\u305f\u306f GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u30ea\u30f3\u30af\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u30da\u30fc\u30b8\u306e\u53f3\u4e0a\u306b\u3042\u308b ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Cache")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\uff1a\n",(0,a.kt)("a",{target:"_blank",href:n(9599).Z},"\u30ad\u30e3\u30c3\u30b7\u30e5\u4f5c\u6210\u30dc\u30bf\u30f3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Unity-Topics-Cache"),"\u3068\u3044\u3046\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3001AWS\u307e\u305f\u306fGCP\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u3001\u4efb\u610f\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Create"),"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u5229\u7528\u53ef\u80fd\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u65b0\u3057\u3044",(0,a.kt)("inlineCode",{parentName:"li"},"Unity-Topics-Cache"),"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u305f\u5730\u57df\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3067 Momento API Key\u3092\u751f\u6210\u3059\u308b\u3068\u304d\u306b\u3001\u540c\u3058\u5730\u57df\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,a.kt)("a",{target:"_blank",href:n(101).Z},"\u30c1\u30e3\u30c3\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://console.gomomento.com/tokens"},"API Key"),"\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3057\u305f\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Super User API Key")," \u30c8\u30fc\u30af\u30f3\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Generate API Key")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,a.kt)("img",{alt:"Generate token",src:n(2904).Z,width:"3416",height:"1670"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"API Key"),"\u3092\u30b3\u30d4\u30fc\u3057\u3066\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5f8c\u3067Unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,a.kt)("img",{alt:"Generated token",src:n(903).Z,width:"2704",height:"416"}))),(0,a.kt)("h2",{id:"unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,a.kt)("h3",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#prerequisites"},"\u524d\u63d0\u6761\u4ef6"),"\u3092\u30af\u30ea\u30a2\u3057\u305f\u3089\u3001Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001\u79c1\u305f\u3061\u306e",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-unity-demo"},"example demo repository"),"\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3066\u305d\u3053\u304b\u3089\u59cb\u3081\u308b\u304b\u3001\u30bc\u30ed\u304b\u3089\u81ea\u5206\u3067\u4f5c\u6210\u3057\u307e\u3059\u3002Unity\u306b\u6163\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3084\u3001\u5f8c\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u6642\u9593\u3092\u7bc0\u7d04\u3057\u305f\u3044\u5834\u5408\u306f\u3001example\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308bUnity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-unity-demo"},"https://github.com/momentohq/momento-unity-demo")," \u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"Unity Hub \u3092\u958b\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},'\u65e2\u5b58\u306eUnity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 "Open"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u958b\u304d\u307e\u3059\uff1a\n',(0,a.kt)("a",{target:"_blank",href:n(677).Z},"\u65b0\u3057\u3044Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("li",{parentName:"ol"},"\u30af\u30ed\u30fc\u30f3\u3057\u305f\u30d5\u30a9\u30eb\u30c0\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("ol",{parentName:"li",start:5},(0,a.kt)("li",{parentName:"ol"},"Unity 2022.3.9f1\u4ee5\u5916\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001Unity\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a8\u30c7\u30a3\u30bf\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9069\u5207\u306b\u5909\u66f4\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"))),(0,a.kt)("li",{parentName:"ol"},"6.Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Scenes/MomentTopicsDemo.unity"),"\u30b7\u30fc\u30f3\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002")),(0,a.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u6b8b\u308a\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"unity\u306bmomento-net-sdk\u3092\u8ffd\u52a0\u3059\u308b"},"Unity\u306bMomento .NET SDK\u3092\u8ffd\u52a0\u3059\u308b"),(0,a.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3051\u305f\u3089"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6700\u65b0\u306e",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet/releases"},"MomentoSdkUnity\u30ea\u30ea\u30fc\u30b9.zip\u30d5\u30a1\u30a4\u30eb"),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet/releases/tag/v1.23.0"},"v1.23.0 \u30ea\u30ea\u30fc\u30b9")," \u306e\u5834\u5408\u3001",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet/releases/download/v1.23.0/MomentoSdkUnity-1.23.0.zip"},"MomentoSdkUnity-1.23.0.zip")," \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u306e.zip\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001Unity\u306eHTTP/2\u4e92\u63db\u6027\u306e\u5236\u9650\u306e\u305f\u3081\u306bgRPC-Web\u3092\u5229\u7528\u3059\u308bMomento .NET SDK\u306e\u7279\u5225\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5fc5\u8981\u306a DLL \u306e\u4f9d\u5b58\u95a2\u4fc2\u3082 zip \u30d5\u30a1\u30a4\u30eb\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u30d5\u30a9\u30eb\u30c0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Assets/MomentoSdkUnity")," \u5185\u306b\u89e3\u51cd\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"momento\u30c8\u30d4\u30c3\u30af\u3067unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b"},"Momento\u30c8\u30d4\u30c3\u30af\u3067Unity\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u307e\u3067\u304f\u308c\u3070\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/cache/develop/sdks/dotnet"},"Momento .NET SDK"),"\u3092\u4ecb\u3057\u3066Momento\u30c8\u30d4\u30c3\u30af\u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u69cb\u7bc9\u3068C#\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210\u3092\u958b\u59cb\u3059\u308b\u6e96\u5099\u304c\u6574\u3063\u305f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30af\u30ed\u30fc\u30f3\u3055\u308c\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u5229\u7528\u3057\u3001\u4ee5\u4e0b\u306e2\u3064\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067UI\u3068C#\u30b3\u30fc\u30c9\u304c\u3069\u306e\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3"},"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7406\u89e3"),(0,a.kt)("p",null,"\u79c1\u305f\u3061\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u3059\u3067\u306b2\u3064\u306e\u5225\u3005\u306e",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html"},"Unity UI Canvas"),"\u8981\u7d20\u306b\u30d3\u30eb\u30c9\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u30021\u3064\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u540d\u524d\u3092\u9078\u629e\u3055\u305b\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3001\u3082\u30461\u3064\u306f\u5b9f\u969b\u306e\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u3088\u3046\u306b\u3001NameCanvas\u306b\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/"},"TextMeshPro"),"\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u300cStart\u300d\u30dc\u30bf\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NameCanvas",src:n(7634).Z,width:"1602",height:"805"})),(0,a.kt)("p",null,'\u30e6\u30fc\u30b6\u30fc\u304c\u540d\u524d\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001Enter\u30ad\u30fc\u3092\u62bc\u3059\u304b\u3001"Start "\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3068\u3001C# \u30b9\u30af\u30ea\u30d7\u30c8\u306f NameCanvas \u3092\u975e\u8868\u793a\u306b\u3057\u3001MessagingCanvas \u3092\u8868\u793a\u3057\u307e\u3059\u3002'),(0,a.kt)("p",null,"MessagingCanvas \u306b\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIInteractionComponents.html#scroll-rect-scroll-view"},"Scroll View")," \u304c\u3042\u308a\u3001\u30c1\u30e3\u30c3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u9069\u5207\u306a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIBasicLayout.html"},"UI \u8981\u7d20\u306e\u4f4d\u7f6e\u6c7a\u3081")," \u306b\u3088\u308a\u3001\u30c1\u30e3\u30c3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30a8\u30ea\u30a2\u304c\u4e0a\u65b9\u5411\u306b\u6210\u9577\u3057\u3001\u6700\u65b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5e38\u306b\u4e0b\u306b\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MessagingCanvas",src:n(8832).Z,width:"1527",height:"671"})),(0,a.kt)("p",null,"MessagingCanvas\u306b\u306f\u7d75\u6587\u5b57\u30dc\u30bf\u30f3\u3082\u3042\u308a\u3001\u5229\u7528\u53ef\u80fd\u306a\u7d75\u6587\u5b57\u3092\u8868\u793a\u3057\u305f\u308a\u3001\u30c1\u30e3\u30c3\u30c8\u306b\u7d75\u6587\u5b57\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(8334).Z},"\u30c7\u30e2\u30d3\u30c7\u30aa")),(0,a.kt)("p",null,"\u7d75\u6587\u5b57\u306e\u633f\u5165\u3092\u51e6\u7406\u3059\u308b\u306b\u306f\u3001\u30d8\u30eb\u30d1\u30fcC#\u30b9\u30af\u30ea\u30d7\u30c8 ",(0,a.kt)("inlineCode",{parentName:"p"},"EmojiHelper.cs")," \u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,a.kt)("h3",{id:"momento\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308bc\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7406\u89e3\u3059\u308b"},"Momento\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308bC#\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7406\u89e3\u3059\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample"},"Momento .NET SDK Topic Example")," \u306b\u57fa\u3065\u3044\u3066\u3044\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/TopicsTest.cs")," \u3067\u30de\u30b8\u30c3\u30af\u304c\u8d77\u3053\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6700\u521d\u306b\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u306e\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"#momento"},"Momento Prerequisite")," \u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305fAPI Key\u3092 C# \u30b9\u30af\u30ea\u30d7\u30c8\u306b\u77e5\u3089\u305b\u308b\u3053\u3068\u3067\u3059\u3002",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample"},"Momento .NET SDK Topic Example"),"\u306b\u5f93\u3063\u3066\u3001\u74b0\u5883\u5909\u6570\u304b\u3089API key\u3092\u53d6\u5f97\u3059\u308b\u304b\u3001\u30b3\u30fc\u30c9\u306b\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3057\u307e\u3059\uff08\u30b3\u30fc\u30c9\u306bAPI Key\u3092\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30c6\u30b9\u30c8\u76ee\u7684\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Windows\u3067\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001Windows\u306e\u30b9\u30bf\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001"environment "\u3092\u691c\u7d22\u3057\u3066\u3001"Edit the system environment variables "\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u6b21\u306b "Environment Variables "\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001',(0,a.kt)("inlineCode",{parentName:"li"},"MOMENTO_API_KEY"),"\u74b0\u5883\u5909\u6570\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u65b0\u3057\u304f\u4f5c\u6210\u3057\u305f\u74b0\u5883\u5909\u6570\u3092\u8a8d\u8b58\u3055\u305b\u308b\u305f\u3081\u306bUnity\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("li",{parentName:"ul"},"C# \u30b9\u30af\u30ea\u30d7\u30c8\u3067API key \u3092\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001API KEY\u3092\u30b3\u30d4\u30fc\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"li"},"Assets/TopicsTest.cs")," \u306b\u8cbc\u308a\u4ed8\u3051\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"ReadAuthToken()")," \u95a2\u6570\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD_YOUR_TOKEN_HERE")," \u3092\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002")),(0,a.kt)("p",null,'API Key\u304c\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u3089\u3001Unity Editor\u306e "Play "\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01'),(0,a.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,a.kt)("p",null,"\u7d50\u8ad6\u304b\u3089\u8a00\u3046\u3068\u3001Momento\u3068Unity\u3092\u7d71\u5408\u3059\u308b\u306b\u306f\u3001\u6700\u65b0\u306e",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/releases"},"MomentoSdkUnity\u30ea\u30ea\u30fc\u30b9.zip\u30d5\u30a1\u30a4\u30eb"),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001Unity\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"Assets"),"\u30d5\u30a9\u30eb\u30c0\u5185\u306e\u4efb\u610f\u306e\u5834\u6240\u306b\u89e3\u51cd\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3055\u3089\u306b\u4e00\u6b69\u8e0f\u307f\u8fbc\u3093\u3067\u3001Momento\u30c8\u30d4\u30c3\u30af\u306b\u63a5\u7d9a\u3057\u3001\u7c21\u5358\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3057\u305f\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8cfc\u8aad\u3067\u304d\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u30c1\u30e3\u30c3\u30c8\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"))}c.isMDXComponent=!0},9599:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/console-create-cache-90d89709336a49153da1d5b47282742a.png"},101:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/Unity-Topics-Cache-a2d727138074b13e28cae8e3de98a042.png"},8334:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/emojis-25fb0a70eeb90fb72bf829e91d0d2345.png"},677:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/hub-new-project-4677003da342342d687c2cb5057a0373.png"},903:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},2904:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"},8832:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/MessagingCanvas-c60f1068e03375c5407c153c02b78a6a.png"},7634:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/NameCanvas-02005d290024a8436b742a8701c10056.png"}}]);