"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:7,pagination_prev:null,sidebar_label:"Elixir",title:"Get to know the Momento Elixir SDK",description:"The Momento Elixir SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","elixir","phoenix","erlang","beam"]},a="Momento Elixir SDK",s={unversionedId:"sdks/elixir/index",id:"sdks/elixir/index",title:"Get to know the Momento Elixir SDK",description:"The Momento Elixir SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/docs/sdks/elixir/index.md",sourceDirName:"sdks/elixir",slug:"/sdks/elixir/",permalink:"/sdks/elixir/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/elixir/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_prev:null,sidebar_label:"Elixir",title:"Get to know the Momento Elixir SDK",description:"The Momento Elixir SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","elixir","phoenix","erlang","beam"]}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"momento-elixir-sdk"},"Momento Elixir SDK"),(0,i.kt)("p",null,"The Momento Elixir SDK is available via the hex package ",(0,i.kt)("a",{parentName:"p",href:"https://hex.pm/packages/gomomento"},(0,i.kt)("inlineCode",{parentName:"a"},"gomomento")),"."),(0,i.kt)("p",null,"The source code can be found on GitHub: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-elixir"},"momentohq/client-sdk-elixir"),"."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://elixir-lang.org/install.html"},"Elixir version 1.14")," or higher is required."),(0,i.kt)("li",{parentName:"ul"},"A Momento API Key is required; you can get one from the ",(0,i.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./cache"},"Getting started with Momento Cache in Elixir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-elixir/blob/main/examples/README.md"},"Elixir SDK examples"),": working example projects that illustrate how to use the Elixir SDK")))}m.isMDXComponent=!0}}]);