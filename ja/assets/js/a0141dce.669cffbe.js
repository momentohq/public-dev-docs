"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3784],{9415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(4848),r=t(8453),o=(t(2821),t(503));const i={sidebar_position:2,sidebar_label:"Style Guide",title:"Style guide for Momento Node.js code",description:"Learn about the two different styles you can use when writing Momento Node.js code: the pattern matching style, or the simplified style.",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript","style guide","style","pattern matching","undefined"]},d="Momento Node.js \u30b9\u30bf\u30a4\u30eb\u30ac\u30a4\u30c9",c={id:"sdks/nodejs/style-guide",title:"Style guide for Momento Node.js code",description:"Learn about the two different styles you can use when writing Momento Node.js code: the pattern matching style, or the simplified style.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/nodejs/style-guide.mdx",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/style-guide",permalink:"/ja/sdks/nodejs/style-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/style-guide.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Style Guide",title:"Style guide for Momento Node.js code",description:"Learn about the two different styles you can use when writing Momento Node.js code: the pattern matching style, or the simplified style.",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript","style guide","style","pattern matching","undefined"]}},l={},a=[{value:"\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",id:"\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",level:2},{value:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b9\u30bf\u30a4\u30eb",id:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b9\u30bf\u30a4\u30eb",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"momento-nodejs-\u30b9\u30bf\u30a4\u30eb\u30ac\u30a4\u30c9",children:"Momento Node.js \u30b9\u30bf\u30a4\u30eb\u30ac\u30a4\u30c9"}),"\n",(0,s.jsx)(n.p,{children:"Momento Node.js\u306e\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3059\u308b\u969b\u306b\u306f\u3001\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb\u3068\u7c21\u6613\u30b9\u30bf\u30a4\u30eb\u306e2\u3064\u306e\u7570\u306a\u308b\u30b9\u30bf\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u30012\u3064\u306e\u30b9\u30bf\u30a4\u30eb\u306e\u9055\u3044\u3092\u7406\u89e3\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u6700\u9069\u306a\u30b9\u30bf\u30a4\u30eb\u3092\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",children:"\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u30d1\u30bf\u30fc\u30f3\u30fb\u30de\u30c3\u30c1\u306b\u99b4\u67d3\u307f\u304c\u306a\u3044\u4eba\u3082\u3044\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u304c\u3001\u3053\u308c\u306f\u6700\u8fd1\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u307e\u3059\u307e\u3059\u666e\u53ca\u3057\u3066\u3044\u308b\u30e1\u30ab\u30cb\u30ba\u30e0\u3067\u3059\u3002\u30d1\u30bf\u30fc\u30f3\u3068\u5024\u3092\u30de\u30c3\u30c1\u3055\u305b\u3066\u5024\u306e\u578b\u3092\u6c7a\u5b9a\u3057\u3001\u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u62bd\u51fa\u3057\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6210\u5426\u306b\u3088\u3063\u3066\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u578b\u304c\u5927\u304d\u304f\u5909\u308f\u308b\u3088\u3046\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30fb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u3059\u308b\u3068\u304d\u306b\u3001\u53ef\u80fd\u6027\u306e\u3042\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u578b\u3092\u3059\u3079\u3066\u51e6\u7406\u3059\u308b\u7db2\u7f85\u7684\u3067\u578b\u5b89\u5168\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u975e\u5e38\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001Momento \u306e ",(0,s.jsx)(n.code,{children:"get"})," \u30ea\u30af\u30a8\u30b9\u30c8 (\u307e\u305f\u306f\u4ed6\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u8aad\u307f\u8fbc\u307f\u30ea\u30af\u30a8\u30b9\u30c8) \u3092\u767a\u884c\u3059\u308b\u3068\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u306f3\u3064\u306e\u30bf\u30a4\u30d7\u306e\u3046\u3061\u306e1\u3064\u306b\u306a\u308a\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Hit"})," - \u30ad\u30fc\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u898b\u3064\u304b\u308a\u3001\u5024\u304c\u8fd4\u3055\u308c\u305f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Miss"})," - \u30ad\u30fc\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u5024\u304c\u8fd4\u3055\u308c\u306a\u304b\u3063\u305f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Error"})," - \u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u5024\u3092\u8aad\u307f\u8fbc\u3082\u3046\u3068\u3057\u3066\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3054\u60f3\u50cf\u306e\u901a\u308a\u3001\u3053\u306e\u3088\u3046\u306a\u7570\u306a\u308b\u30b1\u30fc\u30b9\u3092\u578b\u5b89\u5168\u306b\u30e2\u30c7\u30eb\u5316\u3057\u305f\u5834\u5408\u3001\u3069\u306e\u30bf\u30a4\u30d7\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u53d7\u3051\u53d6\u308b\u304b\u3067\u3001\u516c\u958b\u3055\u308c\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u5927\u304d\u304f\u7570\u306a\u308a\u307e\u3059\uff1a\n*",(0,s.jsx)(n.code,{children:"Hit"})," \u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f ",(0,s.jsx)(n.code,{children:"value"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u3001\u305d\u308c\u306f ",(0,s.jsx)(n.code,{children:"undefined"})," \u3067\u306a\u3044\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001",(0,s.jsx)(n.code,{children:"undefined"})," \u306e\u30b1\u30fc\u30b9\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306b ",(0,s.jsx)(n.code,{children:"if"})," \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u66f8\u304f\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5024\u304c\u8fd4\u3055\u308c\u306a\u304b\u3063\u305f\u306e\u3067\u3001",(0,s.jsx)(n.code,{children:"Miss"})," \u5fdc\u7b54\u306f\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3061\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Error"})," \u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f ",(0,s.jsx)(n.code,{children:"errorCode"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u3001\u3069\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u304b\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u30d1\u30bf\u30fc\u30f3\u30fb\u30de\u30c3\u30c1\u3092\u4f7f\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(o.F,{language:"javascript",code:"const result = await cacheClient.get('test-cache', 'test-key');\nswitch (result.type) {\n  case CacheGetResponse.Hit:\n    console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n    break;\n  case CacheGetResponse.Miss:\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n    break;\n  case CacheGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,s.jsxs)(n.p,{children:["if",(0,s.jsx)(n.code,{children:"\u6587\u306e\u5404\u5206\u5c90\u3067\u3001TypeScript\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u306f\u8ce2\u3044\u306e\u3067\u3001"}),"result`\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u6b63\u78ba\u306a\u578b\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u8a8d\u8b58\u3057\u3001\u3069\u306e\u578b\u3067\u3042\u308b\u304b\u306b\u57fa\u3065\u3044\u3066\u6b63\u3057\u3044\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u3001\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u3092\u767a\u898b\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u591a\u304f\u306e\u7a2e\u985e\u306e\u30a8\u30e9\u30fc\u3092\u767a\u898b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u901a\u5e38\u306e try/catch \u30d6\u30ed\u30c3\u30af\u3088\u308a\u3082\u5b89\u5168\u306b\u30a8\u30e9\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3082\u3057\u3042\u306a\u305f\u306e\u7b2c\u4e00\u306e\u76ee\u7684\u304c\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u53d7\u3051\u53d6\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u5fb9\u5e95\u7684\u306b\u51e6\u7406\u3057\u305f\u3001\u5fb9\u5e95\u7684\u3067\u672c\u756a\u306b\u4f7f\u3048\u308b\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u3067\u3042\u308b\u306a\u3089\u3001\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u9069\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u3057\u304b\u3057\u3001\u4ed6\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u5bfe\u3057\u3066\u66f8\u304d\u6163\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306b\u6bd4\u3079\u308b\u3068\u3001\u5197\u9577\u306b\u306a\u308a\u3001\u8a18\u8ff0\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3082\u3063\u3068\u7c21\u6f54\u306a\u3082\u306e\u3092\u304a\u671b\u307f\u306a\u3089\u3001\u7c21\u7565\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b9\u30bf\u30a4\u30eb",children:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b9\u30bf\u30a4\u30eb"}),"\n",(0,s.jsxs)(n.p,{children:["\u7c21\u7565\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\u3067\u306f\u3001\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u3084\u578b\u30c1\u30a7\u30c3\u30af\u306f\u884c\u3044\u307e\u305b\u3093\u3002\u305d\u306e\u4ee3\u308f\u308a\u306b\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,s.jsx)(n.code,{children:".value()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3060\u3051\u3067\u3059\u3002Hit",(0,s.jsx)(n.code,{children:"\u306e\u5834\u5408\u306f\u5024\u304c\u8fd4\u3055\u308c\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f "}),"undefined` \u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7c21\u7565\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u304a\u305d\u3089\u304f ",(0,s.jsx)(n.code,{children:"withThrowOnErrors"})," \u8a2d\u5b9a\u3092\u6709\u52b9\u306b\u3057\u305f\u304f\u306a\u308b\u3067\u3057\u3087\u3046\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001Momento \u306f\u30a8\u30e9\u30fc\u3092\u30b9\u30ed\u30fc\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u5e38\u306b\u8fd4\u308a\u5024\u306e\u4e00\u90e8\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u7c21\u7565\u5316\u3055\u308c\u305f\u30b3\u30fc\u30c9\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u5bfe\u3057\u3066 ",(0,s.jsx)(n.code,{children:".value()"})," \u3092\u547c\u3073\u51fa\u3057\u3066 ",(0,s.jsx)(n.code,{children:"undefined"})," \u3092\u8fd4\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u304c ",(0,s.jsx)(n.code,{children:"Miss"})," \u306a\u306e\u304b ",(0,s.jsx)(n.code,{children:"Error"})," \u306a\u306e\u304b\u3092\u5224\u5225\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002withThrowOnErrors` \u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u3067\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3068\u304d\u306b\u30a8\u30e9\u30fc\u3092\u6295\u3052\u308b\u3088\u3046\u306b\u6307\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"withThrowOnErrors"}),"\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u306f\u4ee5\u4e0b\u306e\u901a\u308a\uff1a"]}),"\n",(0,s.jsx)(o.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  configuration: Configurations.Lambda.latest().withThrowOnErrors(true),\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"/ja/sdks/nodejs/config-and-error-handling",children:"\u30b3\u30f3\u30d5\u30a3\u30ae\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u30a8\u30e9\u30fc\u51e6\u7406"}),"\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"withThrowOnErrors"}),"\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(o.F,{language:"javascript",code:"const result = (await cacheClient.get('test-cache', 'test-key')).value();\nif (result !== undefined) {\n  console.log(`Retrieved value for key 'test-key': ${result}`);\n} else {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n}"}),"\n",(0,s.jsx)(n.p,{children:"\u307e\u305f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u4f8b\u5916\u3068\u3057\u3066\u30b9\u30ed\u30fc\u3055\u308c\u307e\u3059\u3002\u4f8b\u5916\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3001\u901a\u5e38\u306etry/catch\u30d6\u30ed\u30c3\u30af\u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(o.F,{language:"javascript",code:"try {\n  const result = (await cacheClient.get('test-cache', 'test-key')).value();\n  if (result !== undefined) {\n    console.log(`Retrieved value for key 'test-key': ${result}`);\n  } else {\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n  }\n} catch (e) {\n  const momentoError = e as SdkError;\n  if (momentoError.errorCode() === MomentoErrorCode.LIMIT_EXCEEDED_ERROR) {\n    console.log('Request rate limit exceeded, may need to request a limit increase!');\n  } else {\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${momentoError.errorCode()}: ${momentoError.toString()}`\n    );\n  }\n}"}),"\n",(0,s.jsx)(n.p,{children:"\u5358\u7d14\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\u306f\u3001\u304a\u305d\u3089\u304f\u3042\u306a\u305f\u304c\u904e\u53bb\u306b\u4f7f\u7528\u3057\u305f\u3053\u3068\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u4ed6\u306eNode.js\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u6bd4\u8f03\u3057\u3066\u3001\u3088\u308a\u898b\u6163\u308c\u305f\u3082\u306e\u306b\u898b\u3048\u3001\u611f\u3058\u308b\u3067\u3057\u3087\u3046\u3002\u307e\u305f\u3001\u30d1\u30bf\u30fc\u30f3\u30fb\u30de\u30c3\u30c1\u30fb\u30b9\u30bf\u30a4\u30eb\u3088\u308a\u3082\u7c21\u6f54\u3067\u901f\u304f\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3088\u308a\u7c21\u6f54\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u3092\u597d\u307f\u3001\u7db2\u7f85\u7684\u306a\u578b\u30c1\u30a7\u30c3\u30af\u304c\u3067\u304d\u306a\u3044\u3068\u3044\u3046\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u3092\u6c17\u306b\u3057\u306a\u3044\u306e\u3067\u3042\u308c\u3070\u3001\u3053\u306e\u30b9\u30bf\u30a4\u30eb\u306f\u3042\u306a\u305f\u306b\u5408\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff01"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2821:(e,n,t)=>{t(6540)},503:(e,n,t)=>{t.d(n,{F:()=>o});var s=t(1432),r=(t(6540),t(4848));const o=e=>{let{language:n,code:t}=e;return(0,r.jsx)(s.A,{language:n,children:t})}}}]);