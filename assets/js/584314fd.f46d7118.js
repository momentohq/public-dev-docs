"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=n,b=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:3,sidebar_label:"Service Limits",title:"Service Limits",pagination_next:null,description:"Explore Momento Leaderboards service limits, the default values, and how to get them changed if you need.",hide_title:!0},o="Service Limits for Momento Leaderboards",i={unversionedId:"leaderboards/limits",id:"leaderboards/limits",title:"Service Limits",description:"Explore Momento Leaderboards service limits, the default values, and how to get them changed if you need.",source:"@site/docs/leaderboards/limits.md",sourceDirName:"leaderboards",slug:"/leaderboards/limits",permalink:"/leaderboards/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/limits.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Service Limits",title:"Service Limits",pagination_next:null,description:"Explore Momento Leaderboards service limits, the default values, and how to get them changed if you need.",hide_title:!0},sidebar:"leaderboardSidebar",previous:{title:"Language Support",permalink:"/leaderboards/language-support/"}},s={},d=[{value:"Soft limits and support",id:"soft-limits-and-support",level:2},{value:"Operations",id:"operations",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"service-limits-for-momento-leaderboards"},"Service Limits for Momento Leaderboards"),(0,n.kt)("p",null,'Momento Leaderboards seeks to protect itself and its customers when it comes to service resources. To do this, every account, cache, and leaderboard has service limits, or what we call "guardrails" (like a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Momento Leaderboards limits"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API rate per cache (data plane)"),(0,n.kt)("td",{parentName:"tr",align:null},"100 operations/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API rate per customer (control plane)"),(0,n.kt)("td",{parentName:"tr",align:null},"5 operations/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,n.kt)("td",{parentName:"tr",align:null},"1MB/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max cache count (per account)"),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Time to live (TTL)"),(0,n.kt)("td",{parentName:"tr",align:null},"7 days")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Permissions per ",(0,n.kt)("a",{parentName:"td",href:"./develop/api-reference/auth"},"API key or token"),"  (hard limit)"),(0,n.kt)("td",{parentName:"tr",align:null},"10")))),(0,n.kt)("h2",{id:"soft-limits-and-support"},"Soft limits and support"),(0,n.kt)("p",null,"The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support"),". Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you\u2019d like increased."),(0,n.kt)("h2",{id:"operations"},"Operations"),(0,n.kt)("p",null,"Service limits are based on the number of operations performed per second. Some leaderboard APIs can perform multiple operations in a single request."),(0,n.kt)("p",null,"Since multi-element operations are more efficient, the limit cost of these APIs is discounted at a ",(0,n.kt)("strong",{parentName:"p"},"2:1 ratio"),". This means every two elements will count as one operation towards the limiter. For example, a ",(0,n.kt)("inlineCode",{parentName:"p"},"Upsert")," request adding one or two elements costs one operation, but with three or four elements it costs two operations, etc."),(0,n.kt)("p",null,"The below table describes how the number of operations is calculated for all leaderboard APIs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"API Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Multi-Element API"),(0,n.kt)("th",{parentName:"tr",align:null},"Operations"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Upsert"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FetchByScore"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if leaderboard is not found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FetchByRank"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if leaderboard is not found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRank"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if leaderboard is not found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Length"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RemoveElements"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of elements in response/2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"1")))))}u.isMDXComponent=!0}}]);