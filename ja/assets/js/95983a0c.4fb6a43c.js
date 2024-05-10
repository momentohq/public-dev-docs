"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,pagination_prev:null,sidebar_label:"Node.js",title:"Get to know the Momento Node.js SDK",description:"The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","server-side"]},i="Momento Node.js SDK",s={unversionedId:"sdks/nodejs/index",id:"sdks/nodejs/index",title:"Get to know the Momento Node.js SDK",description:"The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/nodejs/index.md",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/",permalink:"/ja/sdks/nodejs/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,pagination_prev:null,sidebar_label:"Node.js",title:"Get to know the Momento Node.js SDK",description:"The Momento Node.js SDK allows you to create server-side applications in TypeScript or JavaScript, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","server-side"]}},d={},l=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u7d71\u5408",id:"\u7d71\u5408",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-nodejs-sdk"},"Momento Node.js SDK"),(0,r.kt)("p",null,"Momento Node.js SDK\u306fnpm\u30d1\u30c3\u30b1\u30fc\u30b8",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomento/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@gomento/sdk")),"\u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fGitHub\u306b\u3042\u308a\u307e\u3059\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript"),"\u3002"),(0,r.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ce\u30fc\u30c9\u306e\u30d0\u30fc\u30b8\u30e7\u30f3",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"14\u4ee5\u4e0a"),"\u304c\u5fc5\u8981\u3002"),(0,r.kt)("li",{parentName:"ul"},"Momento API Key\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/sdks/nodejs/cache"},"Getting started with Momento Cache in JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/sdks/nodejs/topics"},"Getting started with Momento Topics in JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/sdks/nodejs/config-and-error-handling"},"Node.js SDK Configuration and Error Handling"),": \u30b3\u30fc\u30c9\u3092\u672c\u756a\u306b\u6301\u3061\u8fbc\u3080"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/sdks/nodejs/style-guide"},"Node.js SDK Style Guide"),": Momento\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3067\u304d\u308b2\u3064\u306e\u7570\u306a\u308b\u30b3\u30fc\u30c9\u30b9\u30bf\u30a4\u30eb\u306b\u3064\u3044\u3066\u5b66\u3076"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/sdks/nodejs/observability"},"Node.js SDK Observability"),": Node.js SDK\u306b\u3088\u308b\u30ed\u30ae\u30f3\u30b0\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u30e1\u30c8\u30ea\u30af\u30b9")),(0,r.kt)("h2",{id:"\u7d71\u5408"},"\u7d71\u5408"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},"Node.js Token Vending Machine"),": \u306f\u3001",(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web"},"Momento Web SDK"),"\u306b\u5bfe\u3057\u3066\u8a18\u8ff0\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u30d6\u30e9\u30a6\u30b6\u3067\u4f7f\u7528\u3067\u304d\u308b\u3001\u4e00\u6642\u7684\u306a\u3001\u5236\u9650\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u306eMomento Auth\u30c8\u30fc\u30af\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"@redis/client"))," - \u306f\u3001\u65e2\u5b58\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"@redis/client")," \u30b3\u30fc\u30c9\u3067 Momento Cache \u3092\u4f7f\u3048\u308b\u3088\u3046\u306b\u3059\u308b\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u7f6e\u304d\u63db\u3048\u3067\u3059\uff01",(0,r.kt)("a",{parentName:"li",href:"/ja/cache/develop/integrations/redis-client-compatibility"},"Redis \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u306e\u4e92\u63db\u6027")," \u30da\u30fc\u30b8\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"ioredis"))," - \u306f\u3001Momento Cache \u3092\u65e2\u5b58\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"ioredis")," \u30b3\u30fc\u30c9\u3067\u4f7f\u3048\u308b\u3088\u3046\u306b\u3059\u308b\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u306e\u7f6e\u304d\u63db\u3048\u3067\u3059\uff01",(0,r.kt)("a",{parentName:"li",href:"/ja/cache/develop/integrations/redis-client-compatibility"},"Redis \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u306e\u4e92\u63db\u6027")," \u30da\u30fc\u30b8\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}p.isMDXComponent=!0}}]);