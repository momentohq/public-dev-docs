"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:11,sidebar_label:"Response objects",title:"Response object API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",pagination_next:null,description:"Momento API \u306b\u304a\u3051\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},s="Momento API \u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",l={unversionedId:"topics/develop/api-reference/response-objects",id:"topics/develop/api-reference/response-objects",title:"Response object API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento API \u306b\u304a\u3051\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/response-objects.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/response-objects",permalink:"/ja/topics/develop/api-reference/response-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Response object API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",pagination_next:null,description:"Momento API \u306b\u304a\u3051\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},sidebar:"topicsSidebar",previous:{title:"HTTP API",permalink:"/ja/topics/develop/api-reference/http-api"}},a={},c=[{value:"Error",id:"error",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3},{value:"Success",id:"success",level:2},{value:"Hit",id:"hit",level:2},{value:"Miss",id:"miss",level:2},{value:"Set",id:"set",level:2},{value:"NotSet",id:"notset",level:2},{value:"Stored",id:"stored",level:2},{value:"NotStored",id:"notstored",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-api-\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"},"Momento API \u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306f\u3059\u3079\u3066\u306e\u30b3\u30de\u30f3\u30c9\u306e\u57fa\u672c\u7684\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u3067\u3059\u3002\u4e00\u90e8\u306e\u30b3\u30de\u30f3\u30c9\u3067\u306f\u3001\u8ffd\u52a0\u306e\u30c7\u30fc\u30bf\u3084\u6a5f\u80fd\u304c\u63d0\u4f9b\u3055\u308c\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,o.kt)("em",{parentName:"p"},"\u4e00\u822c\u7684"),"\u306b2\u3064\u306e\u30ab\u30c6\u30b4\u30ea\u306b\u5206\u985e\u3055\u308c\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Success or Error")," - \u4f8b\u3048\u3070\u3001Set \u64cd\u4f5c\u306f\u305d\u306e\u4e00\u4f8b\u3067\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u304c\u6b63\u5e38\u306b\u66f8\u304d\u8fbc\u307e\u308c\u305f\u5834\u5408\u3068\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306e2\u3064\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Hit, Miss, or Error")," - \u4f8b\u3048\u3070\u3001Get \u64cd\u4f5c\u306f\u305d\u306e\u4e00\u4f8b\u3067\u3059\u3002\u8981\u6c42\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3068\u306a\u308a\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u3068\u306a\u308a\u307e\u3059\u3002\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"error"},"Error"),(0,o.kt)("p",null,"\u4f8b\u5916\u306e\u4ee3\u308f\u308a\u306b\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"constructor"},"Constructor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"innerException: Exception - \u30a8\u30e9\u30fc\u306e\u539f\u56e0\u3068\u306a\u3063\u305f\u4f8b\u5916")),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"message(): String - \u8aad\u307f\u3084\u3059\u3044\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,o.kt)("li",{parentName:"ul"},"innerException(): Exception - \u5143\u306e\u4f8b\u5916"),(0,o.kt)("li",{parentName:"ul"},"errorCode(): MomentoErrorCode - Momento \u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u30ab\u30c6\u30b4\u30ea\uff08\u4f8b\uff1aInvalidArgument \u3084 BadRequest \uff09\u3092\u6307\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md"},"Standards And Practices - Error Handling"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("li",{parentName:"ul"},"toString(): String - message() \u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3067\u3059\u3002")),(0,o.kt)("h2",{id:"success"},"Success"),(0,o.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u306f\u6210\u529f\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"hit"},"Hit"),(0,o.kt)("p",null,"\u30ad\u30fc\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5b58\u5728\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u5024\u3092\u8fd4\u3059\u3088\u3046\u306b\u62e1\u5f35\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"miss"},"Miss"),(0,o.kt)("p",null,"\u30ad\u30fc\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5b58\u5728\u3057\u307e\u305b\u3093\u3002"),(0,o.kt)("h2",{id:"set"},"Set"),(0,o.kt)("p",null,"TTL\u30b3\u30de\u30f3\u30c9\u306b\u5bfe\u3057\u3066\u3001\u66f4\u65b0\u304c\u6b63\u5e38\u306b\u9069\u7528\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"notset"},"NotSet"),(0,o.kt)("p",null,"TTL \u30b3\u30de\u30f3\u30c9\u306b\u5bfe\u3057\u3066\u3001\u66f4\u65b0\u306f\u9069\u7528\u3055\u308c\u305a\u3001\u65e2\u5b58\u306e TTL \u306b\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"stored"},"Stored"),(0,o.kt)("p",null,"setIfNotExists \u30b3\u30de\u30f3\u30c9\u306b\u304a\u3044\u3066\u3001\u30ad\u30fc\u304c\u5b58\u5728\u305b\u305a\u3001\u5024\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"notstored"},"NotStored"),(0,o.kt)("p",null,"setIfNotExists \u30b3\u30de\u30f3\u30c9\u306b\u304a\u3044\u3066\u3001\u30ad\u30fc\u304c\u5b58\u5728\u3057\u3001\u5024\u306f\u8a2d\u5b9a\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u3002"))}d.isMDXComponent=!0}}]);