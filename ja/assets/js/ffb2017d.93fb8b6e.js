"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2446],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4067:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(7462),o=t(7294),a=t(3905);const s="formContainer_Day2",i=e=>{let{portalId:r,formId:t}=e;return(0,o.useEffect)((()=>{const e=document.createElement("script");return e.src="//js.hsforms.net/forms/embed/v2.js",e.async=!0,e.onload=()=>{window.hbspt&&window.hbspt.forms.create({portalId:r,formId:t,target:"#hubspot-form-container"})},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[r,t]),o.createElement("div",{id:"hubspot-form-container",className:s})},c={sidebar_position:4,pagination_prev:null,sidebar_label:"Unreal (C++)",title:"Get to know the Momento SDK for Unreal",description:"The Momento SDK for Unreal allows you to create server-side applications with Unreal Engine, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","dotnet","csharp","c sharp","c#",".net","unreal"]},l="Momento SDK for Unreal (C++)",d={unversionedId:"sdks/unreal/index",id:"sdks/unreal/index",title:"Get to know the Momento SDK for Unreal",description:"The Momento SDK for Unreal allows you to create server-side applications with Unreal Engine, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/unreal/index.md",sourceDirName:"sdks/unreal",slug:"/sdks/unreal/",permalink:"/ja/sdks/unreal/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/unreal/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,pagination_prev:null,sidebar_label:"Unreal (C++)",title:"Get to know the Momento SDK for Unreal",description:"The Momento SDK for Unreal allows you to create server-side applications with Unreal Engine, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","dotnet","csharp","c sharp","c#",".net","unreal"]}},u={},p=[],m={toc:p};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-sdk-for-unreal-c"},"Momento SDK for Unreal (C++)"),(0,a.kt)("p",null,"\u73fe\u5728\u3001Momento SDK for Unreal \u306f\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u5c06\u6765\u7684\u306b Unreal Engine \u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001\u7a4d\u6975\u7684\u306b\u958b\u767a\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002\nMomento\u3068Unreal Engine\u306e\u9023\u643a\u306b\u3054\u8208\u5473\u306e\u3042\u308b\u65b9\u306f\u3001\u4ee5\u4e0b\u306e\u30d5\u30a9\u30fc\u30e0\u306b\u3054\u8a18\u5165\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("div",null,(0,a.kt)(i,{portalId:"21979607",formId:"1343380b-3ab4-417a-b010-edd49ad29235",mdxType:"HubSpotForm"})))}f.isMDXComponent=!0}}]);