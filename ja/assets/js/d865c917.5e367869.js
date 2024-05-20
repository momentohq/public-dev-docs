"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,p(p({ref:t},c),{},{components:a})):n.createElement(h,p({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:7,pagination_prev:null,sidebar_label:"PHP",title:"Get to know the Momento PHP SDK",description:"The Momento PHP SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","php","laravel","drupal"]},p="Momento PHP SDK",i={unversionedId:"sdks/php/index",id:"sdks/php/index",title:"Get to know the Momento PHP SDK",description:"The Momento PHP SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/php/index.md",sourceDirName:"sdks/php",slug:"/sdks/php/",permalink:"/ja/sdks/php/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/php/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_prev:null,sidebar_label:"PHP",title:"Get to know the Momento PHP SDK",description:"The Momento PHP SDK allows you to create server-side applications, and take advantage of Momento's caching and pub-sub features. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","server-side","php","laravel","drupal"]}},l={},s=[{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",id:"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-php-sdk"},"Momento PHP SDK"),(0,r.kt)("p",null,"Momento PHP SDK \u306f Packagist \u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/momentohq/client-sdk-php"},(0,r.kt)("inlineCode",{parentName:"a"},"momentohq/client-sdk-php"))," \u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fGitHub\u306b\u3042\u308a\u307e\u3059\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-php"},"momentohq/client-sdk-php"),"\u3002"),(0,r.kt)("h2",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Momento\u306eAPI\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento\u30a6\u30a7\u30d6\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u4f4ePHP 8.0\u4ee5\u4e0a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"grpc PHP \u62e1\u5f35\u30e2\u30b8\u30e5\u30fc\u30eb\u3002\u62e1\u5f35\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/master/src/php/README.md"},"gRPC docs")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044"))),(0,r.kt)("li",{parentName:"ul"},"protobuf C \u62e1\u5f35\u30e2\u30b8\u30e5\u30fc\u30eb\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u306b\u3064\u3044\u3066\u306f ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/client-libs/php/protobuf#c_implementation"},"protobuf C extension docs")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044")),(0,r.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/php/cache"},"Getting started with Momento Cache in PHP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md"},"PHP SDK examples"),": PHP SDK \u306e\u4f7f\u3044\u65b9\u3092\u8aac\u660e\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,r.kt)("h2",{id:"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},"\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/cache/develop/integrations/drupal-integration"},"Drupal Cache Backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/laravel-cache"},"Laravel Cache")," - \u306f\u3001\u65e2\u5b58\u306eLaravel\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067Momento Cache\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u7f6e\u304d\u63db\u3048\u3067\u3059\uff01Laravel\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3](/ja/cache/develop/integrations/momento-cache-laravel-php)\u30da\u30fc\u30b8\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/laravel-example"},"Laravel Example App")," - Momento Laravel\u30ad\u30e3\u30c3\u30b7\u30e5\u7d71\u5408\u3092\u4f7f\u7528\u3057\u305f\u3001\u5b8c\u5168\u306b\u52d5\u4f5c\u3059\u308bLaravel\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md"},"PSR-16 Cache API")," - PHP\u306ePSR-16\u30ad\u30e3\u30c3\u30b7\u30e5\u4ed5\u69d8\u306e\u5b9f\u88c5\u3067\u3001Momento Cache\u306b\u3088\u3063\u3066\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3055\u308c\u3066\u3044\u307e\u3059\u3002")))}m.isMDXComponent=!0}}]);