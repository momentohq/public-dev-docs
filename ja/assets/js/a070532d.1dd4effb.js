"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4399],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:30,title:"Permissions",sidebar_label:"Permissions",description:"API\u30ad\u30fc\u3068\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u5229\u7528\u53ef\u80fd\u306a\u6a29\u9650\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},i="Permissions",l={unversionedId:"cache/develop/authentication/permissions",id:"cache/develop/authentication/permissions",title:"Permissions",description:"API\u30ad\u30fc\u3068\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u5229\u7528\u53ef\u80fd\u306a\u6a29\u9650\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/authentication/permissions.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/permissions",permalink:"/ja/cache/develop/authentication/permissions",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/permissions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Permissions",sidebar_label:"Permissions",description:"API\u30ad\u30fc\u3068\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u5229\u7528\u53ef\u80fd\u306a\u6a29\u9650\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},sidebar:"tutorialSidebar",previous:{title:"Tokens",permalink:"/ja/cache/develop/authentication/tokens"},next:{title:"Basics"}},s={},p=[{value:"Scope",id:"scope",level:2},{value:"Roles",id:"roles",level:3},{value:"Cache roles",id:"cache-roles",level:4},{value:"Topic roles",id:"topic-roles",level:4},{value:"Cache",id:"cache",level:3},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f8b",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f8b",level:4},{value:"\u30c8\u30d4\u30c3\u30af\u306e\u4f8b",id:"\u30c8\u30d4\u30c3\u30af\u306e\u4f8b",level:4},{value:"\u30a2\u30a4\u30c6\u30e0\u30ec\u30d9\u30eb\u306e\u5236\u9650",id:"\u30a2\u30a4\u30c6\u30e0\u30ec\u30d9\u30eb\u306e\u5236\u9650",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"\u81ea\u5206\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u304f\u306a\u308b\u307e\u3067\u306f\u3001\u697d\u3057\u3044\u3053\u3068\u3070\u304b\u308a\u3067\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3068\u3044\u3048\u3070\u3001\u307e\u3055\u306b\u3053\u3053\u3067\u8a71\u3059\u3053\u3068\u3067\u3082\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001Momento\u3067\u306f\u4e3b\u306b2\u3064\u306e\u8a8d\u8a3c\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/cache/develop/authentication/api-keys"},"API \u30ad\u30fc"),": \u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u3001\u9577\u5bff\u547d\u3067\u8010\u4e45\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/cache/develop/authentication/tokens"},"\u30c8\u30fc\u30af\u30f3"),": \u500b\u4eba (\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u30c7\u30d0\u30a4\u30b9) \u304c\u4e00\u6642\u7684\u306b\u4f7f\u7528\u3059\u308b\u3001\u77ed\u547d\u3067\u9650\u5b9a\u3055\u308c\u305f\u7bc4\u56f2\u306e\u3082\u306e\u3067\u3059\u3002")),(0,a.kt)("p",null,"API\u30ad\u30fc\u306f",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u3067\u76f4\u63a5\u4f5c\u6210\u3067\u304d\u307e\u3059\u304c\u3001\u30c8\u30fc\u30af\u30f3\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nAPI\u30ad\u30fc\u3084\u30c8\u30fc\u30af\u30f3\u306e\u6a29\u9650\u3092\u5236\u9650\u3059\u308b\u969b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u3092\u3053\u3053\u3067\u306f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"API \u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionScope")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenScope")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u307b\u3068\u3093\u3069\u540c\u3058\u3067\u3059\u304c\u30011\u3064\u3060\u3051\u5927\u304d\u306a\u9055\u3044\u304c\u3042\u308a\u307e\u3059\u3002\n\u307e\u305a\u3001\u985e\u4f3c\u70b9\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"roles"},"Roles"),(0,a.kt)("p",null,"Momento \u306b\u306f\u3001\u30b9\u30b3\u30fc\u30d7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u3001\u4e8b\u524d\u306b\u4f5c\u6210\u3055\u308c\u305f\u30ed\u30fc\u30eb\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059 \u3002\ud83d\udc47"),(0,a.kt)("h4",{id:"cache-roles"},"Cache roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"readwrite")," - \u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3078\u306e\u30d5\u30eb\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"writeonly")," - \u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306e\u307f\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059(",(0,a.kt)("inlineCode",{parentName:"li"},"set"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"sortedSetIncrementScore"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"listPopFront")," \u306a\u3069)\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"readonly")," - \u8aad\u307f\u8fbc\u307f\u64cd\u4f5c (",(0,a.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dictionaryFetch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"setFetch")," \u306a\u3069) \u306e\u307f\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u975e\u7834\u58ca\u7684\u306a\u64cd\u4f5c\u3067\u3059\u3002")),(0,a.kt)("h4",{id:"topic-roles"},"Topic roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"publishsubscribe")," - \u30c8\u30d4\u30c3\u30af\u30c7\u30fc\u30bf\u3078\u306e\u30d5\u30eb\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"publishonly")," - \u66f8\u304d\u8fbc\u307f\u64cd\u4f5c (",(0,a.kt)("inlineCode",{parentName:"li"},"publish"),") \u306e\u307f\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"subscribeonly")," - \u8aad\u307f\u53d6\u308a\u64cd\u4f5c (",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe"),") \u306e\u307f\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"cache"},"Cache"),(0,a.kt)("p",null,"\u4fe1\u3058\u3089\u308c\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u30c8\u30d4\u30c3\u30af\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30c8\u30d4\u30c3\u30af\u306f\u6280\u8853\u7684\u306b\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u305d\u306e\u3082\u306e\u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u304c\u3001\u4e00\u7a2e\u306e\u540d\u524d\u7a7a\u9593\u3068\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30b9\u30b3\u30fc\u30d7\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u306f\u3001\u3069\u306e\u3088\u3046\u306a\u5834\u5408\u3067\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306f\u6587\u5b57\u5217\u3067\u6307\u5b9a\u3059\u308b\u304b\u3001SDK\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u5024\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30c8\u30d4\u30c3\u30af\u540d\u3082\u540c\u69d8\u3067\u3059\u3002"),(0,a.kt)("h4",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f8b"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u3082\u3057\u304f\u306f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { AllCaches } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches\n    }\n  ]\n};\n")),(0,a.kt)("h4",{id:"\u30c8\u30d4\u30c3\u30af\u306e\u4f8b"},"\u30c8\u30d4\u30c3\u30af\u306e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "topic": "test"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u3082\u3057\u304f\u306f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { AllCaches, AllTopics } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches,\n      topic: AllTopics\n    }\n  ]\n};\n")),(0,a.kt)("h3",{id:"\u30a2\u30a4\u30c6\u30e0\u30ec\u30d9\u30eb\u306e\u5236\u9650"},"\u30a2\u30a4\u30c6\u30e0\u30ec\u30d9\u30eb\u306e\u5236\u9650"),(0,a.kt)("p",null,"\u3053\u308c\u307e\u3067\u8aac\u660e\u3057\u3066\u304d\u305f\u3053\u3068\u306f\u3059\u3079\u3066\u3001API\u30ad\u30fc\u3068\u30c8\u30fc\u30af\u30f3\u306e\u4e21\u65b9\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\n\u3057\u304b\u3057\u3053\u3053\u3067\u3001\u30c8\u30fc\u30af\u30f3\u7279\u6709\u306e\u5236\u9650\u306b\u3064\u3044\u3066\u8aac\u660e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u30a2\u30a4\u30c6\u30e0\u30ec\u30d9\u30eb\u306e\u5236\u9650"),"\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u3068\u304d\u3001\u500b\u3005\u306e\u30ad\u30fc\u3084\u7279\u5b9a\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u59cb\u307e\u308b\u30ad\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u7279\u5b9a\u306e2\u3064\u306e\u30ad\u30fc\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u5236\u9650\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u30bb\u30c3\u30c8\u3059\u308b\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "key": "mappings"\n      }\n    },\n    {\n      "role": "readwrite",\n      "cache": "demo",\n      "item": {\n        "key": "hits"\n      }\n    },\n  ]\n}\n')),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"mappings"),"\u30ad\u30fc\u3078",(0,a.kt)("em",{parentName:"p"},"read only"),"\u3067\u30a2\u30af\u30bb\u30b9\u3057\u3001",(0,a.kt)("em",{parentName:"p"},"demo"),"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"hits"),"\u30ad\u30fc\u3078",(0,a.kt)("em",{parentName:"p"},"read and write"),"\u3067\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u660e\u793a\u7684\u306b\u8a31\u53ef\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u8907\u6570\u306e\u30ad\u30fc\u306b\u5bfe\u3057\u3066\u540c\u3058\u30ed\u30fc\u30eb\u3092\u4ed8\u4e0e\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u4e0a\u8a18\u3068\u540c\u69d8\u306b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306e\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u5fc5\u8981\u306a\u30ed\u30fc\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u30021\u3064\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u8907\u6570\u306e\u30ad\u30fc\u3092\u6e21\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u30ad\u30fc\u306e\u7bc4\u56f2\u3067\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u306f\u3001\u7279\u5b9a\u306e\u6587\u5b57\u5217\u3067\u59cb\u307e\u308b\u3059\u3079\u3066\u306e\u30ad\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u3068\u3044\u3046\u610f\u5473\u3067\u3059\u3002\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\u3067\u3001\u30c6\u30ca\u30f3\u30c8ID\u3092\u542b\u3080\u5f62\u5f0f\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u30ad\u30fc\u3092\u6301\u3063\u3066\u3044\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002\u7279\u5b9a\u306e\u30c6\u30ca\u30f3\u30c8\u306e\u3059\u3079\u3066\u306e\u30ad\u30fc\u3078\u306e\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u6a29\u9650\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "keyPrefix": "MYTENANTID-"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"\u3053\u306e\u6a29\u9650\u30bb\u30c3\u30c8\u3067\u751f\u6210\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u306e\u5229\u7528\u8005\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"MYTENANTID-"),"\u3067\u59cb\u307e\u308b\u30ad\u30fc\u304b\u3089\u306e\u8aad\u307f\u53d6\u308a\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u7570\u306a\u308b\u30c6\u30ca\u30f3\u30c8ID\u3067\u59cb\u307e\u308b\u30ad\u30fc\u304b\u3089\u8aad\u307f\u8fbc\u3082\u3046\u3068\u3059\u308b\u3068\u3001\u8a8d\u8a3c\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);