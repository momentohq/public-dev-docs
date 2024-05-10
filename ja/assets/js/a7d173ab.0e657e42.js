"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8119],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?l.createElement(k,a(a({ref:e},c),{},{components:n})):l.createElement(k,a({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6821:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Quotas and Limits",sidebar_position:7,title:"Momento Topics service quotas",pagination_next:null,description:"Examine the namespace, webhook, and message-level quotas in place with Momento Topics and discover the default and tunable values for your workload based on your support plan.",hide_title:!0,slug:"/topics/limits"},a="Momento Topics service quotas",i={unversionedId:"topics/limits",id:"topics/limits",title:"Momento Topics service quotas",description:"Examine the namespace, webhook, and message-level quotas in place with Momento Topics and discover the default and tunable values for your workload based on your support plan.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/limits.mdx",sourceDirName:"topics",slug:"/topics/limits",permalink:"/ja/topics/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/limits.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Quotas and Limits",sidebar_position:7,title:"Momento Topics service quotas",pagination_next:null,description:"Examine the namespace, webhook, and message-level quotas in place with Momento Topics and discover the default and tunable values for your workload based on your support plan.",hide_title:!0,slug:"/topics/limits"},sidebar:"topicsSidebar",previous:{title:"Pricing and Free Tier",permalink:"/ja/topics/manage/pricing"}},s={},u=[{value:"Limits",id:"limits",level:2},{value:"Operations",id:"operations",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-topics-service-quotas"},"Momento Topics service quotas"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u30b5\u30fc\u30d3\u30b9\u30af\u30a9\u30fc\u30bf\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u30d7\u30e9\u30f3\u306b\u76f4\u63a5\u5f71\u97ff\u3055\u308c\u307e\u3059\u3002",(0,o.kt)("ins",null,"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30cf\u30fc\u30c9\u30ea\u30df\u30c3\u30c8"),"\u306e\u4e21\u65b9\u306f\u3001\u30d7\u30ed\u30c6\u30a3\u30a2\u30d7\u30e9\u30f3\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30d7\u30e9\u30f3\u3067\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e0a\u9650\u7de9\u548c\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/contact-us"},"\u55b6\u696d\u62c5\u5f53\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"),".")),(0,o.kt)("h2",{id:"limits"},"Limits"),(0,o.kt)("table",{className:"customTable"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Resource"),(0,o.kt)("th",null,"Entity"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Basic support"),(0,o.kt)("th",null,"Pro support"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{className:"highlightRow"},(0,o.kt)("td",{colspan:"5"},(0,o.kt)("strong",null,"Soft limits"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Operations per second"),(0,o.kt)("td",null,"namespace"),(0,o.kt)("td",null,"100"),(0,o.kt)("td",null,"1,000"),(0,o.kt)("td",null,"10,000")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Concurrent connections"),(0,o.kt)("td",null,"namespace"),(0,o.kt)("td",null,"100"),(0,o.kt)("td",null,"1,000"),(0,o.kt)("td",null,"10,000")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Number of webhooks"),(0,o.kt)("td",null,"namespace"),(0,o.kt)("td",null,"10"),(0,o.kt)("td",null,"100"),(0,o.kt)("td",null,"1,000")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Message delivery per second"),(0,o.kt)("td",null,"webhook"),(0,o.kt)("td",null,"50"),(0,o.kt)("td",null,"500"),(0,o.kt)("td",null,"5,000")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Namespace count"),(0,o.kt)("td",null,"region"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"30"),(0,o.kt)("td",null,"300")),(0,o.kt)("tr",{className:"highlightRow"},(0,o.kt)("td",{colspan:"5"},(0,o.kt)("strong",null,"Hard limits"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Payload size"),(0,o.kt)("td",null,"message"),(0,o.kt)("td",{colspan:"3"},"4 KB")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Delivery timeout"),(0,o.kt)("td",null,"webhook"),(0,o.kt)("td",{colspan:"3"},"5 seconds")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Operations per second"),(0,o.kt)("td",null,"account"),(0,o.kt)("td",{colspan:"3"},"5")))),(0,o.kt)("h2",{id:"operations"},"Operations"),(0,o.kt)("p",null,"Momento Topics\u306b\u516c\u958b\u3055\u308c\u305f\u5404\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30011\u3064\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002\u914d\u4fe1\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u3059\u3079\u3066\u8ffd\u52a0\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002\u8cfc\u8aad\u8005\u304c 9 \u4eba\u3044\u308b\u30c8\u30d4\u30c3\u30af\u3067\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u305f\u3073\u306b 10 \u56de\u306e\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u306f1KB\u5358\u4f4d\u3067\u8ab2\u91d1\u3055\u308c\u307e\u3059\u30020.5KB\u306e\u516c\u958b\u30e1\u30c3\u30bb\u30fc\u30b8\u306f1\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u30011.4 KB\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u306f2\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Message broadcast")),(0,o.kt)("p",null,"9\u4eba\u306e\u8cfc\u8aad\u8005\u304c\u3044\u308b\u30c8\u30d4\u30c3\u30af\u306b\u30011KB\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"1\u30e1\u30c3\u30bb\u30fc\u30b8\u516c\u958b\uff0b9\u8cfc\u8aad\u8005\uff1d10\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Large direct message")),(0,o.kt)("p",null,"4 KB\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u304c1\u4eba\u306e\u30c8\u30d4\u30c3\u30af\u306b\u767a\u884c\u3055\u308c\u308b\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"(4KB\xf71KB\u30c1\u30e3\u30f3\u30af\uff09\xd71\u52a0\u5165\u8005\uff1d4\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"),"\u3002")))}p.isMDXComponent=!0}}]);