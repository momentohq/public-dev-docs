"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||l[d]||a;return n?o.createElement(y,i(i({ref:t},m),{},{components:n})):o.createElement(y,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,pagination_prev:null,sidebar_label:"Unity (C#)",title:"Get to know the Momento SDK for Unity",description:"The Momento SDK for Unity allows you to create server-side applications in Unity, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","dotnet","csharp","c sharp","c#",".net","unity"]},i="Momento SDK for Unity (C#)",s={unversionedId:"sdks/unity/index",id:"sdks/unity/index",title:"Get to know the Momento SDK for Unity",description:"The Momento SDK for Unity allows you to create server-side applications in Unity, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/docs/sdks/unity/index.md",sourceDirName:"sdks/unity",slug:"/sdks/unity/",permalink:"/sdks/unity/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/unity/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,pagination_prev:null,sidebar_label:"Unity (C#)",title:"Get to know the Momento SDK for Unity",description:"The Momento SDK for Unity allows you to create server-side applications in Unity, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","dotnet","csharp","c sharp","c#",".net","unity"]}},c={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-sdk-for-unity-c"},"Momento SDK for Unity (C#)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-unity-demo"},"Momento Unity Demo")," uses the Momento .NET SDK available via the nuget package ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Momento.Sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"Momento.Sdk")),"."),(0,r.kt)("p",null,"Momento Unity Example can be found on Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-unity-demo"},"momentohq/momento-unity-demo")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Unity Version:")," Requires Unity 2022.3.9f1 or later"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MomentoSdkUnity:")," Requires v1.3.0 or later of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet/releases"},"MomentoSDKUnity package")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Momento API Key:")," You can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-unity-demo"},"Momento Unity Demo on GitHub"))))}l.isMDXComponent=!0}}]);