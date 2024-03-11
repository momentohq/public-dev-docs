"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:9,pagination_prev:null,sidebar_label:"Rust",title:"Get to know the Momento Rust SDK",description:"The Momento Rust SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","rust","cargo"]},a="Momento Rust SDK",i={unversionedId:"sdks/rust/index",id:"sdks/rust/index",title:"Get to know the Momento Rust SDK",description:"The Momento Rust SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/rust/index.md",sourceDirName:"sdks/rust",slug:"/sdks/rust/",permalink:"/ja/sdks/rust/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/rust/index.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,pagination_prev:null,sidebar_label:"Rust",title:"Get to know the Momento Rust SDK",description:"The Momento Rust SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","rust","cargo"]}},u={},c=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-rust-sdk"},"Momento Rust SDK"),(0,o.kt)("p",null,"Momento Rust SDK \u306f crates.io \u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/momento"},(0,o.kt)("inlineCode",{parentName:"a"},"momento"))," \u304b\u3089\u5165\u624b\u3067\u304d\u308b\u3002"),(0,o.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fgithub\u306b\u3042\u308a\u307e\u3059\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-rust"},"momentohq/client-sdk-rust"),"\u3002"),(0,o.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Momento API Key\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,o.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-rust/blob/main/example/README.md"},"Rust SDK Examples"),": Rust SDK\u306e\u4f7f\u3044\u65b9\u3092\u8aac\u660e\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")))}d.isMDXComponent=!0}}]);