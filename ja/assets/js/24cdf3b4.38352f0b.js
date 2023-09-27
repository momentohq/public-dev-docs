"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Momento Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Momento Node.js SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002"},i="Momento Node.js SDK",l={unversionedId:"cache/develop/sdks/nodejs/index",id:"cache/develop/sdks/nodejs/index",title:"Momento Node.js SDK",description:"Momento Node.js SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/sdks/nodejs/index.md",sourceDirName:"cache/develop/sdks/nodejs",slug:"/cache/develop/sdks/nodejs/",permalink:"/ja/cache/develop/sdks/nodejs/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/nodejs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Momento Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Momento Node.js SDK \u306b\u95a2\u3059\u308b\u60c5\u5831\u3067\u3059\u3002"},sidebar:"tutorialSidebar",next:{title:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",permalink:"/ja/cache/develop/sdks/nodejs/cheat-sheet"}},s={},d=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u9023\u643a",id:"\u9023\u643a",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-nodejs-sdk"},"Momento Node.js SDK"),(0,r.kt)("p",null,"\u3088\u3046\u3053\u305d\u3001Momento Node.js SDK \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3078\uff01"),(0,r.kt)("p",null,"Momento Node.js SDK \u306f ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk"))," \u306e npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f GitHub \u306b\u3042\u308a\u307e\u3059: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript")),(0,r.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"14\u4ee5\u4e0a")," \u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento \u30a6\u30a7\u30d6\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089\u53d6\u5f97\u53ef\u80fd\u3067\u3059\u3002")),(0,r.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/cache/develop/sdks/nodejs/cheat-sheet"},"Node.js SDK Cache \u30c1\u30fc\u30c8\u30b7\u30fc\u30c8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md"},"Node.js SDK \u4f8b"),": Node.js SDK \u306e\u4f7f\u3044\u65b9\u3092\u304a\u898b\u305b\u3059\u308b\u305f\u3081\u306e\u52d5\u4f5c\u53ef\u80fd\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f8b\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u307e\u3082\u306a\u304f: \u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3: Node.js SDK \u3092\u4f7f\u3063\u305f\u30ed\u30ae\u30f3\u30b0\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u30e1\u30c8\u30ea\u30af\u30b9"),(0,r.kt)("li",{parentName:"ul"},"\u307e\u3082\u306a\u304f: \u30b3\u30fc\u30c9\u3092\u672c\u756a\u74b0\u5883\u3078: Node.js SDK \u3067\u306e\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0")),(0,r.kt)("h2",{id:"\u9023\u643a"},"\u9023\u643a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},(0,r.kt)("inlineCode",{parentName:"a"},"@redis/client")," \u306e\u305f\u3081\u306e Redis \u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8")," - \u65e2\u5b58\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"@redis/client")," \u3092\u4f7f\u3063\u305f\u30b3\u30fc\u30c9\u3092\u7f6e\u304d\u63db\u3048\u308b\u3060\u3051\u3067 Momento Cache \u3092\u5229\u7528\u53ef\u80fd\u306b\uff01\u3053\u3061\u3089\u306e ",(0,r.kt)("a",{parentName:"li",href:"./../integrations/redis-client-compatibility"},"Redis \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4e92\u63db\u6027")," \u30da\u30fc\u30b8\u3082\u3054\u89a7\u4e0b\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},(0,r.kt)("inlineCode",{parentName:"a"},"ioredis")," \u306e\u305f\u3081\u306e Redis \u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8")," - \u65e2\u5b58\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"ioredis")," \u3092\u4f7f\u3063\u305f\u30b3\u30fc\u30c9\u3092\u7f6e\u304d\u63db\u3048\u308b\u3060\u3051\u3067 Momento Cache \u3092\u5229\u7528\u53ef\u80fd\u306b\uff01\u3053\u3061\u3089\u306e ",(0,r.kt)("a",{parentName:"li",href:"./../integrations/redis-client-compatibility"},"Redis \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4e92\u63db\u6027")," \u30da\u30fc\u30b8\u3082\u3054\u89a7\u4e0b\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);