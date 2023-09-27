"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,sidebar_label:"Service Limits",title:"Service limits for Momento Topics",pagination_next:null,description:"Explore Momento Topic's service limits, the default values, and how to get them changed if you need."},a="Service limits for Momento Topics",s={unversionedId:"topics/manage/limits",id:"topics/manage/limits",title:"Service limits for Momento Topics",description:"Explore Momento Topic's service limits, the default values, and how to get them changed if you need.",source:"@site/docs/topics/manage/limits.md",sourceDirName:"topics/manage",slug:"/topics/manage/limits",permalink:"/topics/manage/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/manage/limits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Service Limits",title:"Service limits for Momento Topics",pagination_next:null,description:"Explore Momento Topic's service limits, the default values, and how to get them changed if you need."},sidebar:"topicsSidebar",previous:{title:"Pricing and free tier",permalink:"/topics/manage/pricing"}},l={},c=[{value:"Soft limits and support",id:"soft-limits-and-support",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-limits-for-momento-topics"},"Service limits for Momento Topics"),(0,i.kt)("p",null,'Momento Topics seek to protect themselves and their customers when it comes to service resources. To do this, every account, topic, and cache has service limits, or what we call "guardrails" (like on a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Momento Topics limits"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Subscribers per cache"),(0,i.kt)("td",{parentName:"tr",align:null},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Message size"),(0,i.kt)("td",{parentName:"tr",align:null},"4KiB per published message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,i.kt)("td",{parentName:"tr",align:null},"10 publish requests/sec")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Since Topics utilizes Momento Cache, so all ",(0,i.kt)("a",{parentName:"p",href:"/cache/manage/limits"},"Cache limits")," apply to Topics as well.")),(0,i.kt)("h2",{id:"soft-limits-and-support"},"Soft limits and support"),(0,i.kt)("p",null,"The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support"),". Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you\u2019d like increased."))}u.isMDXComponent=!0}}]);