"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8274],{3905:(t,e,r)=>{r.d(e,{Zo:()=>N,kt:()=>s});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var k=a.createContext({}),d=function(t){var e=a.useContext(k),r=e;return t&&(r="function"==typeof t?t(e):m(m({},e),t)),r},N=function(t){var e=d(t.components);return a.createElement(k.Provider,{value:e},t.children)},i="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,k=t.parentName,N=o(t,["components","mdxType","originalType","parentName"]),i=d(r),l=n,s=i["".concat(k,".").concat(l)]||i[l]||u[l]||p;return r?a.createElement(s,m(m({ref:e},N),{},{components:r})):a.createElement(s,m({ref:e},N))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,m=new Array(p);m[0]=l;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=t,o[i]="string"==typeof t?t:n,m[1]=o;for(var d=2;d<p;d++)m[d]=r[d];return a.createElement.apply(null,m)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},5055:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const p={sidebar_position:12,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",pagination_next:null},m=void 0,o={unversionedId:"topics/develop/language-support/language-support",id:"topics/develop/language-support/language-support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",source:"@site/docs/topics/develop/language-support/language-support.md",sourceDirName:"topics/develop/language-support",slug:"/topics/develop/language-support/",permalink:"/topics/develop/language-support/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/language-support/language-support.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",pagination_next:null},sidebar:"topicsSidebar",previous:{title:"Building and deploying Topics listeners on AWS",permalink:"/topics/develop/guides/building-and-deploying-topics-listeners-on-aws"}},k={},d=[{value:"Current Status of API support in Momento SDKs",id:"current-status-of-api-support-in-momento-sdks",level:2}],N={toc:d},i="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(i,(0,a.Z)({},N,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"current-status-of-api-support-in-momento-sdks"},"Current Status of API support in Momento SDKs"),(0,n.kt)("h3",null,"Topics"),(0,n.kt)("p",null,"A matrix of SDK support for Momento Topics APIs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"Kotlin"),(0,n.kt)("th",{parentName:"tr"},"Elixir"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"),(0,n.kt)("th",{parentName:"tr"},"Swift"),(0,n.kt)("th",{parentName:"tr"},"Dart"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"subscribe"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"publish"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705")))),(0,n.kt)("h3",null,"Webhook Management"),(0,n.kt)("p",null,"A matrix of SDK support for Momento Webhook APIs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"Kotlin"),(0,n.kt)("th",{parentName:"tr"},"Elixir"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"),(0,n.kt)("th",{parentName:"tr"},"Swift"),(0,n.kt)("th",{parentName:"tr"},"Dart"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listWebhooks"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"putWebhook"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"deleteWebhook"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"getWebhookSecret"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"rotateWebhookSecret"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Auth"),(0,n.kt)("p",null,"A matrix of SDK support for Momento auth token APIs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"Kotlin"),(0,n.kt)("th",{parentName:"tr"},"Elixir"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"),(0,n.kt)("th",{parentName:"tr"},"Swift"),(0,n.kt)("th",{parentName:"tr"},"Dart"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"generateAuthToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"refreshAuthToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"generateDisposableToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))))}u.isMDXComponent=!0}}]);