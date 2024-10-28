"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8151],{72229:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var c=s(74848),i=s(28453);const o={sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},r="\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3068\u30a2\u30af\u30bb\u30b9\u5236\u5fa1",l={id:"cache/develop/authentication/permissions",title:"Permissions and access control",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/authentication/permissions.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/permissions",permalink:"/ja/cache/develop/authentication/permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/permissions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},sidebar:"cacheSidebar",previous:{title:"Tokens",permalink:"/ja/cache/develop/authentication/tokens"}},a={},t=[{value:"\u7bc4\u56f2",id:"\u7bc4\u56f2",level:2},{value:"\u30ed\u30fc\u30eb",id:"\u30ed\u30fc\u30eb",level:3},{value:"Cache roles",id:"cache-roles",level:4},{value:"Topic roles",id:"topic-roles",level:4},{value:"Cache",id:"cache",level:3},{value:"Cache Examples",id:"cache-examples",level:4},{value:"Topic examples",id:"topic-examples",level:4},{value:"\u9805\u76ee\u30ec\u30d9\u30eb\u306e\u5236\u9650",id:"\u9805\u76ee\u30ec\u30d9\u30eb\u306e\u5236\u9650",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3068\u30a2\u30af\u30bb\u30b9\u5236\u5fa1",children:"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3068\u30a2\u30af\u30bb\u30b9\u5236\u5fa1"})}),"\n",(0,c.jsxs)(n.p,{children:["\u81ea\u5206\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u304f\u306a\u308b\u307e\u3067\u306f\u3001\u697d\u3057\u3044\u3053\u3068\u3070\u304b\u308a\u3060\u3002\u81ea\u5206\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3068\u3044\u3048\u3070\u3001\u305d\u308c\u3053\u305d\u79c1\u305f\u3061\u304c\u3053\u3053\u3067\u8a71\u3057\u305f\u3044\u3053\u3068\u3060\u3002",(0,c.jsx)(n.em,{children:"\u4eba\u3005\u304c\u30a2\u30af\u30bb\u30b9\u3059\u3079\u304d\u3067\u306a\u3044\u3082\u306e\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306e\u3092\u963b\u6b62\u3059\u308b\u3053\u3068\u3060\u3002"})]}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001Momento \u306b\u306f 2 \u3064\u306e\u4e3b\u8981\u306a\u8a8d\u8a3c\u5f62\u5f0f\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/ja/cache/develop/authentication/api-keys",children:"API keys"}),": \u9577\u5bff\u547d\u3067\u8010\u4e45\u6027\u304c\u3042\u308a\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u7684\u306b\u4f7f\u7528\u3067\u304d\u308b\u3082\u306e"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/ja/cache/develop/authentication/tokens",children:"Tokens"}),": \u500b\u4eba\uff08\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u30c7\u30d0\u30a4\u30b9\uff09\u306b\u3088\u308b\u4e00\u6642\u7684\u306a\u4f7f\u7528\u306e\u305f\u3081\u306e\u3001\u77ed\u547d\u3067\u9650\u5b9a\u3055\u308c\u305f\u7bc4\u56f2\u3067\u5229\u7528\u53ef\u80fd\u306a\u3082\u306e"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["API\u30ad\u30fc\u306f",(0,c.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3067\u76f4\u63a5\u4f5c\u6210\u3067\u304d\u307e\u3059\u304c\u3001\u30c8\u30fc\u30af\u30f3\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u4f7f\u3063\u3066API\u30ad\u30fc\u3084\u30c8\u30fc\u30af\u30f3\u306e\u6a29\u9650\u3092\u5236\u9650\u3059\u308b\u5834\u5408\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7bc4\u56f2",children:"\u7bc4\u56f2"}),"\n",(0,c.jsxs)(n.p,{children:["API \u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f ",(0,c.jsx)(n.code,{children:"PermissionScope"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f ",(0,c.jsx)(n.code,{children:"PermissionScope"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u307b\u3068\u3093\u3069\u540c\u3058\u3060\u304c\u30011\u3064\u3060\u3051\u5927\u304d\u306a\u9055\u3044\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305a\u3001\u985e\u4f3c\u70b9\u304b\u3089\u307f\u3066\u3044\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u30ed\u30fc\u30eb",children:"\u30ed\u30fc\u30eb"}),"\n",(0,c.jsx)(n.p,{children:"Momento \u306b\u306f\u3001\u30b9\u30b3\u30fc\u30d7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u3001\u3042\u3089\u304b\u3058\u3081\u4f5c\u6210\u3055\u308c\u305f\u30ed\u30fc\u30eb\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\ud83d\udc47"}),"\n",(0,c.jsx)(n.h4,{id:"cache-roles",children:"Cache roles"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"readwrite"})," - \u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3078\u306e\u30d5\u30eb\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"writeonly"})," - \u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\uff08",(0,c.jsx)(n.code,{children:"set"}),"\u3001",(0,c.jsx)(n.code,{children:"sortedSetIncrementScore"}),"\u3001",(0,c.jsx)(n.code,{children:"listPopFront"})," \u306a\u3069\uff09\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"readonly"})," - \u8aad\u307f\u8fbc\u307f\u64cd\u4f5c (",(0,c.jsx)(n.code,{children:"get"}),"\u3001",(0,c.jsx)(n.code,{children:"dictionaryFetch"}),"\u3001",(0,c.jsx)(n.code,{children:"setFetch"})," \u306a\u3069) \u306e\u307f\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u975e\u7834\u58ca\u7684\u306a\u64cd\u4f5c\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"topic-roles",children:"Topic roles"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"publishsubscribe"})," - \u30c8\u30d4\u30c3\u30af\u30c7\u30fc\u30bf\u3078\u306e\u30d5\u30eb\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"publishonly"})," - \u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306e\u307f\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002(",(0,c.jsx)(n.code,{children:"publish"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"subscribeonly"})," - \u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u307f\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 (",(0,c.jsx)(n.code,{children:"subscribe"}),")"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,c.jsxs)(n.p,{children:["\u4fe1\u3058\u3089\u308c\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u30ad\u30e3\u30c3\u30b7\u30e5",(0,c.jsx)(n.em,{children:"\u3068"}),"\u30c8\u30d4\u30c3\u30af\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c8\u30d4\u30c3\u30af\u306f\u6280\u8853\u7684\u306b\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u305d\u306e\u3082\u306e\u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u304c\u3001\u4e00\u7a2e\u306e\u540d\u524d\u7a7a\u9593\u3068\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30b9\u30b3\u30fc\u30d7\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u306f\u3001\u4f55\u304c\u3042\u3063\u3066\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u6587\u5b57\u5217\u3068\u3057\u3066\u6307\u5b9a\u3059\u308b\u304b\u3001SDK \u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u5024\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u30c8\u30d4\u30c3\u30af\u540d\u3082\u540c\u69d8\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"cache-examples",children:"Cache Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo"\n    }\n  ]\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"or"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"import { AllCaches } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches\n    }\n  ]\n};\n"})}),"\n",(0,c.jsx)(n.h4,{id:"topic-examples",children:"Topic examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "topic": "test"\n    }\n  ]\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"or"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"import { AllCaches, AllTopics } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches,\n      topic: AllTopics\n    }\n  ]\n};\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u9805\u76ee\u30ec\u30d9\u30eb\u306e\u5236\u9650",children:"\u9805\u76ee\u30ec\u30d9\u30eb\u306e\u5236\u9650"}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u307e\u3067\u8aac\u660e\u3057\u3066\u304d\u305f\u3053\u3068\u306f\u3059\u3079\u3066\u3001API\u30ad\u30fc\u3068\u30c8\u30fc\u30af\u30f3\u306e\u4e21\u65b9\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3053\u3053\u3067\u3001\u30c8\u30fc\u30af\u30f3\u7279\u6709\u306e\u5236\u9650\u306b\u3064\u3044\u3066\u8aac\u660e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a \u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u306e\u305f\u3081\u306e",(0,c.jsx)(n.strong,{children:"\u9805\u76ee\u30ec\u30d9\u30eb\u306e\u5236\u9650"}),"\u306b\u3064\u3044\u3066\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u5834\u5408\u3001\u500b\u3005\u306e\u30ad\u30fc\u3084\u7279\u5b9a\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u59cb\u307e\u308b\u30ad\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e2\u3064\u306e\u7279\u5b9a\u306e\u30ad\u30fc\u306b\u5236\u9650\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30fb\u30bb\u30c3\u30c8\u306e\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "key": "mappings"\n      }\n    },\n    {\n      "role": "readwrite",\n      "cache": "demo",\n      "item": {\n        "key": "hits"\n      }\n    },\n  ]\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001",(0,c.jsx)(n.code,{children:"mappings"}),"\u30ad\u30fc\u3078\u306e",(0,c.jsx)(n.em,{children:"read only"}),"\u30a2\u30af\u30bb\u30b9\u3068\u3001",(0,c.jsx)(n.em,{children:"demo"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e",(0,c.jsx)(n.code,{children:"hits"}),"\u30ad\u30fc\u3078\u306e",(0,c.jsx)(n.em,{children:"read and write"}),"\u30a2\u30af\u30bb\u30b9\u3092\u660e\u793a\u7684\u306b\u8a31\u53ef\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u8907\u6570\u306e\u30ad\u30fc\u306b\u5bfe\u3057\u3066\u540c\u3058\u30ed\u30fc\u30eb\u3092\u4ed8\u4e0e\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u4e0a\u8a18\u3068\u540c\u69d8\u306b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u5fc5\u8981\u306a\u30ed\u30fc\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u30021\u3064\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u8907\u6570\u306e\u30ad\u30fc\u3092\u6e21\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30ad\u30fc\u306e\u7bc4\u56f2\u306b\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4e0e\u3048\u305f\u3044\u5834\u5408\u306f\u3001\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u306f\u3001\u7279\u5b9a\u306e\u6587\u5b57\u5217\u3067\u59cb\u307e\u308b\u3059\u3079\u3066\u306e\u30ad\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4e0e\u3048\u308b\u3068\u3044\u3046\u610f\u5473\u3067\u3059\u3002\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\u3067\u3001\u30c6\u30ca\u30f3\u30c8ID\u3092\u542b\u3080\u5f62\u5f0f\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u30ad\u30fc\u3092\u6301\u3063\u3066\u3044\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002\u7279\u5b9a\u306e\u30c6\u30ca\u30f3\u30c8\u306e\u3059\u3079\u3066\u306e\u30ad\u30fc\u3078\u306e\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u6a29\u9650\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "keyPrefix": "MYTENANTID-"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30fb\u30bb\u30c3\u30c8\u3067\u751f\u6210\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u306e\u5229\u7528\u8005\u306f\u3001",(0,c.jsx)(n.code,{children:"MYTENANTID-"}),"\u3067\u59cb\u307e\u308b\u30ad\u30fc\u304b\u3089\u306e\u8aad\u307f\u53d6\u308a\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u7570\u306a\u308b\u30c6\u30ca\u30f3\u30c8ID\u3067\u59cb\u307e\u308b\u30ad\u30fc\u304b\u3089\u8aad\u307f\u8fbc\u3082\u3046\u3068\u3059\u308b\u3068\u3001\u8a8d\u8a3c\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var c=s(96540);const i={},o=c.createContext(i);function r(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);