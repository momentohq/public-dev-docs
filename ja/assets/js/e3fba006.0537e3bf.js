"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[199],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(614),a=n(7294);const c=e=>{let{language:t,code:n}=e;return a.createElement(o.Z,{language:t},n)}},9490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),c=(n(3043),n(7235));const s={sidebar_position:1,sidebar_label:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",title:"TypeScript \u3068 Node.js \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Cache \u3092 TypeScript \u3068 Node.js \u3092\u4f7f\u3063\u3066\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u307e\u3057\u3087\u3046"},r="Momento Cache \u3092 Node.js \u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",l={unversionedId:"cache/develop/sdks/nodejs/cheat-sheet",id:"cache/develop/sdks/nodejs/cheat-sheet",title:"TypeScript \u3068 Node.js \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Cache \u3092 TypeScript \u3068 Node.js \u3092\u4f7f\u3063\u3066\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u307e\u3057\u3087\u3046",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/sdks/nodejs/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/nodejs",slug:"/cache/develop/sdks/nodejs/cheat-sheet",permalink:"/ja/cache/develop/sdks/nodejs/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/nodejs/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",title:"TypeScript \u3068 Node.js \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Cache \u3092 TypeScript \u3068 Node.js \u3092\u4f7f\u3063\u3066\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u307e\u3057\u3087\u3046"},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/ja/cache/develop/sdks/nodejs/"},next:{title:"Config and Error Handling",permalink:"/ja/cache/develop/sdks/nodejs/config-and-error-handling"}},i={},d=[{value:"Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"momento-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"API key\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"api-key\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b",level:2},{value:"Momento Cache \u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",id:"momento-cache-\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b",id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b",level:2},{value:"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",id:"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059",level:2},{value:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",id:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",level:2}],h={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-cache-\u3092-nodejs-\u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"},"Momento Cache \u3092 Node.js \u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,a.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento Cache \u3092 Node.js + TypeScript \u3067\u7d20\u65e9\u304f\u4f7f\u3063\u3066\u307f\u305f\u3044\u65b9\u306e\u305f\u3081\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u790e\u7684\u306a API \u547c\u51fa\u3057\u3092\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3081\u305f\u52d5\u4f5c\u53ef\u80fd\u306a\u4f8b\u3068\u3057\u3066\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/cache"},"Node.js SDK \u306e\u4f8b\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044"),"\u3002"),(0,a.kt)("h2",{id:"momento-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("p",null,"\u65e2\u5b58\u306e Node.js \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,a.kt)("h2",{id:"api-key\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"},"API key\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"),(0,a.kt)("p",null,"Momento \u3067\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u306f Momento API key\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento \u30a6\u30a7\u30d6\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089\u53d6\u5f97\u53ef\u80fd\u3067\u3059\u3002\nAPI key\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u74b0\u5883\u5909\u6570\u306b\u683c\u7d0d\u3057\u3066 Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u4f7f\u3048\u308b\u3088\u3046\u306b\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API key\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u683c\u7d0d\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306b\u74b0\u5883\u5909\u6570\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u5374\u3057\u3066\u63a5\u7d9a\u3059\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u305d\u3057\u3066\u305d\u308c\u305e\u308c\u306e\u4ed6\u306e\u95a2\u6570\u304c\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306e\u3042\u308b CacheClient \u3092\u751f\u6210\u3057\u3066\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,a.kt)(c.Z,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {CacheGet, CreateCache, CacheSet, CacheClient, Configurations, CredentialProvider} from '@gomomento/sdk';\n\nasync function main() {\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 60,\n  });\n}\n\nmain().catch(e => {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e; // Depending on the environment, this might not be necessary.\n});\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"momento-cache-\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache \u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u95a2\u6570\u3092\u4f7f\u3063\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.createCache('test-cache');\nif (result instanceof CreateCache.Success) {\n  console.log(\"Cache 'test-cache' created\");\n} else if (result instanceof CreateCache.AlreadyExists) {\n  console.log(\"Cache 'test-cache' already exists\");\n} else if (result instanceof CreateCache.Error) {\n  throw new Error(\n    `An error occurred while attempting to create cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30ea\u30b9\u30c8\u3059\u308b"),(0,a.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30b7\u30f3\u30d7\u30eb\u306b\u30ea\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,a.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.listCaches();\nif (result instanceof ListCaches.Success) {\n  console.log(\n    `Caches:\\n${result\n      .getCaches()\n      .map(c => c.getName())\n      .join('\\n')}\\n\\n`\n  );\n} else if (result instanceof ListCaches.Error) {\n  throw new Error(`An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`);\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"},"\u9805\u76ee\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"),(0,a.kt)("p",null,"\u66f8\u8fbc\u307f\u64cd\u4f5c\u3092\u884c\u3046\u30b7\u30f3\u30d7\u30eb\u306a\u4f8b\u3067\u3059\u3002client.set \u547c\u51fa\u3057\u3067\u306f\u3001TTL \u306f\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u3067\u3059\u3002\u3082\u3057 TTL \u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL \u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u8aad\u307f\u51fa\u3059"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u8aad\u307f\u51fa\u3057\u64cd\u4f5c\u3067\u3059\u3002"),(0,a.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b"},"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("p",null,"\u5b9f\u884c\u53ef\u80fd\u306a\u5b8c\u6210\u3055\u308c\u305f\u4f8b\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples"},"JavaScript SDK GitHub \u30ec\u30dd\u30b8\u30c8\u30ea\u306e examples \u30c7\u30a3\u30ec\u30af\u30c8\u30ea"),"\u3092\u3054\u89a7\u4e0b\u3055\u3044\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e API \u547c\u51fa\u3057\u4ee5\u4e0a\u306e\u3082\u306e\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"./../../api-reference"},"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3067 Momento API \u547c\u51fa\u3057\u306e\u5168\u7a2e\u985e\u306e\u8a73\u3057\u3044\u60c5\u5831\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u540c\u3058\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3067\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts"},"\u3088\u308a\u9ad8\u5ea6\u306a\u547c\u51fa\u3057"),"\u3092\u898b\u308b\u306b\u306f\u3001\u3053\u306e\u30ea\u30f3\u30af\u306b\u5f93\u3063\u3066\u4e0b\u3055\u3044\u3002")))}p.isMDXComponent=!0}}]);