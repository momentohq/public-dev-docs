"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4726],{4628:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(4848),t=r(8453),a=(r(2821),r(503));const i={sidebar_position:1,sidebar_label:"Config and Error Handling",displayed_sidebar:"platformSidebar",title:"Manage Momento Configuration and Error Handling in TypeScript and Node.js",description:"Learn how to configure your Momento CacheClient and write production-ready error handling code in TypeScript and Node.js",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript"]},d="Momento Node.js SDK\u3067\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5",s={id:"platform/sdks/nodejs/config-and-error-handling",title:"Manage Momento Configuration and Error Handling in TypeScript and Node.js",description:"Learn how to configure your Momento CacheClient and write production-ready error handling code in TypeScript and Node.js",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/sdks/nodejs/config-and-error-handling.mdx",sourceDirName:"platform/sdks/nodejs",slug:"/platform/sdks/nodejs/config-and-error-handling",permalink:"/ja/platform/sdks/nodejs/config-and-error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/nodejs/config-and-error-handling.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Config and Error Handling",displayed_sidebar:"platformSidebar",title:"Manage Momento Configuration and Error Handling in TypeScript and Node.js",description:"Learn how to configure your Momento CacheClient and write production-ready error handling code in TypeScript and Node.js",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript"]},sidebar:"platformSidebar",previous:{title:"Node.js",permalink:"/ja/platform/sdks/nodejs/"},next:{title:"Style Guide",permalink:"/ja/platform/sdks/nodejs/style-guide"}},c={},l=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"momento-nodejs-sdk\u3067\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5",children:"Momento Node.js SDK\u3067\u8a2d\u5b9a\u3068\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306f ",(0,o.jsx)(n.code,{children:"CacheClient"})," \u3092\u4f5c\u6210\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u308b\uff1a"]}),"\n",(0,o.jsx)(a.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,o.jsxs)(n.p,{children:["\u3057\u304b\u3057\u3001",(0,o.jsx)(n.code,{children:"Configuration"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u3066\u3001\u52d5\u4f5c\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["Momento \u306f ",(0,o.jsx)(n.code,{children:"Configurations"})," \u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u3001",(0,o.jsx)(n.code,{children:"InRegion"})," (\u540c\u3058 AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u5185\u304b\u3089\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u63a5\u7d9a\u306b\u9069\u3057\u305f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3068\u63a5\u7d9a\u30ab\u30a6\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u305f\u3082\u306e)\n(\u540c\u3058 AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u5185\u304b\u3089\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u63a5\u7d9a\u306b\u9069\u3057\u305f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3068\u63a5\u7d9a\u30ab\u30a6\u30f3\u30c8\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059)\u3001\n\u3084 ",(0,o.jsx)(n.code,{children:"Lambda"})," (AWS Lambda \u74b0\u5883\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b) \u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306f ",(0,o.jsx)(n.code,{children:"Lambda"})," \u306e\u8a2d\u5b9a\u65b9\u6cd5\u3067\u3059\uff1a"]}),"\n",(0,o.jsx)(a.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  configuration: Configurations.Lambda.latest(),\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u3053\u306e\u8a2d\u5b9a\u3092\u7701\u7565\u3059\u308b\u3068\u3001Momento \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,o.jsx)(n.code,{children:"Laptop"})," \u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u8a2d\u5b9a\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u304c\u7de9\u3084\u304b\u3067\n\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u304c\u7de9\u3084\u304b\u3067\u3001\u958b\u767a\u3084\u9045\u5ef6\u306e\u5927\u304d\u3044\u74b0\u5883\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002(\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u306e\u4f7f\u7528\u306f\u304a\u52e7\u3081\u3057\u307e\u305b\u3093)\u3002"]})}),"\n",(0,o.jsxs)(n.p,{children:["Configuration\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.jsx)(n.a,{href:"/ja/cache/develop/basics/client-configuration-objects",children:"SDK Configuration Objects"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001",(0,o.jsx)(n.code,{children:"CacheClient"})," \u306e\u30a8\u30e9\u30fc\u306f\u3001\u4f8b\u5916\u3092\u30b9\u30ed\u30fc\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u547c\u3073\u51fa\u3057\u306e\u8fd4\u308a\u5024\u306e\u4e00\u90e8\u3068\u3057\u3066\u958b\u767a\u8005\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n\u4f8b\u5916\u3092\u30b9\u30ed\u30fc\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u547c\u3073\u51fa\u3057\u306e\u623b\u308a\u5024\u306e\u4e00\u90e8\u3068\u3057\u3066\u958b\u767a\u8005\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u3068\u304d\u306b\u30a8\u30e9\u30fc\u304c\u3088\u308a\u898b\u3084\u3059\u304f\u306a\u308a\u3001IDE \u304c\u3088\u308a\u5f79\u7acb\u3064\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f ",(0,o.jsx)(n.code,{children:"get"})," \u547c\u3073\u51fa\u3057\u306e\u30a8\u30e9\u30fc\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,o.jsx)(a.F,{language:"javascript",code:"const result = await cacheClient.get('test-cache', 'test-key');\nswitch (result.type) {\n  case CacheGetResponse.Hit:\n    console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n    break;\n  case CacheGetResponse.Miss:\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n    break;\n  case CacheGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,o.jsxs)(n.p,{children:["\u305f\u3060\u3057\u3001\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u305f\u3044\u5834\u5408\u306f\u3001",(0,o.jsx)(n.code,{children:"CacheClient"})," \u3092\u8a2d\u5b9a\u3057\u3066\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,o.jsx)(a.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  configuration: Configurations.Lambda.latest().withThrowOnErrors(true),\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u3068 ",(0,o.jsx)(n.code,{children:"SdkError"})," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u30b9\u30ed\u30fc\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3066\n.errorCode()`\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u7279\u5b9a\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,o.jsx)(a.F,{language:"javascript",code:"try {\n  const result = (await cacheClient.get('test-cache', 'test-key')).value();\n  if (result !== undefined) {\n    console.log(`Retrieved value for key 'test-key': ${result}`);\n  } else {\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n  }\n} catch (e) {\n  const momentoError = e as SdkError;\n  if (momentoError.errorCode() === MomentoErrorCode.LIMIT_EXCEEDED_ERROR) {\n    console.log('Request rate limit exceeded, may need to request a limit increase!');\n  } else {\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${momentoError.errorCode()}: ${momentoError.toString()}`\n    );\n  }\n}"}),"\n",(0,o.jsxs)(n.p,{children:["Momento\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.jsx)(n.a,{href:"/ja/cache/develop/basics/error-handling-production-readiness",children:"SDK Error Handling"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2821:(e,n,r)=>{r(6540)},503:(e,n,r)=>{r.d(n,{F:()=>a});var o=r(1432),t=(r(6540),r(4848));const a=e=>{let{language:n,code:r}=e;return(0,t.jsx)(o.A,{language:n,children:r})}}}]);