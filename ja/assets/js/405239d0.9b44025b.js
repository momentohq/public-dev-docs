"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9503],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(k,a(a({ref:e},d),{},{components:n})):r.createElement(k,a({ref:e},d))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1006:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_label:"Quotas and Limits",sidebar_position:5,title:"Momento Leaderboards service quotas",pagination_next:null,description:"Examine the namespace and item-level quotas in place with Momento Leaderboards and discover the default and tunable values for your workload based on your support plan.",hide_title:!0},a="Momento Leaderboards service quotas",i={unversionedId:"leaderboards/limits",id:"leaderboards/limits",title:"Momento Leaderboards service quotas",description:"Examine the namespace and item-level quotas in place with Momento Leaderboards and discover the default and tunable values for your workload based on your support plan.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaderboards/limits.mdx",sourceDirName:"leaderboards",slug:"/leaderboards/limits",permalink:"/ja/leaderboards/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/limits.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Quotas and Limits",sidebar_position:5,title:"Momento Leaderboards service quotas",pagination_next:null,description:"Examine the namespace and item-level quotas in place with Momento Leaderboards and discover the default and tunable values for your workload based on your support plan.",hide_title:!0},sidebar:"leaderboardSidebar",previous:{title:"Mapping leaderboard IDs to strings",permalink:"/ja/leaderboards/patterns/map-id-to-string"}},s={},u=[{value:"Limits",id:"limits",level:2},{value:"Operations",id:"operations",level:2}],d={toc:u};function p(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"momento-leaderboards-service-quotas"},"Momento Leaderboards service quotas"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u30b5\u30fc\u30d3\u30b9\u30af\u30a9\u30fc\u30bf\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u30d7\u30e9\u30f3\u306b\u76f4\u63a5\u5f71\u97ff\u3055\u308c\u307e\u3059\u3002",(0,l.kt)("ins",null,"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30cf\u30fc\u30c9\u30ea\u30df\u30c3\u30c8"),"\u306e\u4e21\u65b9\u306f\u3001\u30d7\u30ed\u30c6\u30a3\u30a2\u30d7\u30e9\u30f3\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30d7\u30e9\u30f3\u3067\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e0a\u9650\u7de9\u548c\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://www.gomomento.com/contact-us"},"\u55b6\u696d\u62c5\u5f53\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"),".")),(0,l.kt)("h2",{id:"limits"},"Limits"),(0,l.kt)("table",{className:"customTable"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Resource"),(0,l.kt)("th",null,"Entity"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Basic support"),(0,l.kt)("th",null,"Pro support"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",{className:"highlightRow"},(0,l.kt)("td",{colspan:"5"},(0,l.kt)("strong",null,"Soft limits"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Operations per second"),(0,l.kt)("td",null,"namespace"),(0,l.kt)("td",null,"100"),(0,l.kt)("td",null,"1,000"),(0,l.kt)("td",null,"10,000")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Hot storage"),(0,l.kt)("td",null,"namespace"),(0,l.kt)("td",null,"100 MB"),(0,l.kt)("td",null,"1 GB"),(0,l.kt)("td",null,"10 GB")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Namespace count"),(0,l.kt)("td",null,"region"),(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"30"),(0,l.kt)("td",null,"300")),(0,l.kt)("tr",{className:"highlightRow"},(0,l.kt)("td",{colspan:"5"},(0,l.kt)("strong",null,"Hard limits"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Time to live (TTL)"),(0,l.kt)("td",null,"item"),(0,l.kt)("td",{colspan:"3"},"7 days")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Item size"),(0,l.kt)("td",null,"item"),(0,l.kt)("td",{colspan:"3"},"50 MB")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Entry size"),(0,l.kt)("td",null,"entry"),(0,l.kt)("td",{colspan:"3"},"128 KB")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Operations per second"),(0,l.kt)("td",null,"region"),(0,l.kt)("td",{colspan:"3"},"5")))),(0,l.kt)("h2",{id:"operations"},"Operations"),(0,l.kt)("p",null,"\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5API\u306f\u30011\u3064\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u8907\u6570\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u8907\u6570\u8981\u7d20\u306e\u64cd\u4f5c\u306f\u3088\u308a\u52b9\u7387\u7684\u3067\u3042\u308b\u305f\u3081\u3001\u3053\u308c\u3089\u306eAPI\u306e\u30b3\u30b9\u30c8\u306f",(0,l.kt)("strong",{parentName:"p"},"2:1\u306e\u6bd4\u7387"),"\u3067\u5272\u308a\u5f15\u304b\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u30012\u3064\u306e\u8981\u7d20\u3054\u3068\u306b1\u3064\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ea\u30df\u30c3\u30bf\u30fc\u306b\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u30011\u3064\u307e\u305f\u306f2\u3064\u306e\u8981\u7d20\u3092\u8ffd\u52a0\u3059\u308b",(0,l.kt)("inlineCode",{parentName:"p"},"Upsert"),"\u30ea\u30af\u30a8\u30b9\u30c8\u306f",(0,l.kt)("em",{parentName:"p"},"1\u3064\u306e\u64cd\u4f5c"),"\u3092\u8981\u3057\u307e\u3059\u304c\u30013\u3064\u307e\u305f\u306f4\u3064\u306e\u8981\u7d20\u3067\u306f",(0,l.kt)("em",{parentName:"p"},"2\u3064\u306e\u64cd\u4f5c"),"\u3092\u8981\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u6319\u3052\u308b\u3059\u3079\u3066\u306eAPI\u306f\u8907\u6570\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3057\u3001\u30b3\u30b9\u30c8\u524a\u6e1b\u306e\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306b\u306a\u3044API\u306f\u3059\u3079\u30661\u64cd\u4f5c\u306e\u30b3\u30b9\u30c8\u3067\u3059\u3002"),(0,l.kt)("table",{class:"customTable"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"API Name"),(0,l.kt)("th",null,"Operations"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"FetchByRank"),(0,l.kt)("td",null,"Number of elements in response / 2, or 1 if leaderboard is not found")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"FetchByScore"),(0,l.kt)("td",null,"Number of elements in response / 2, or 1 if leaderboard is not found")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"GetRank"),(0,l.kt)("td",null,"Number of elements in response / 2, or 1 if leaderboard is not found")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"RemoveElements"),(0,l.kt)("td",null,"Number of elements in response / 2")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Upsert"),(0,l.kt)("td",null,"Number of elements in request / 2")))))}p.isMDXComponent=!0}}]);