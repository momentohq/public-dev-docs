"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7138],{16:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(4848),o=s(8453),r=(s(2821),s(503));const a={sidebar_position:5,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},i="JavaScript\u3067Momento Storage\u3092\u59cb\u3081\u308b\u3002",c={id:"platform/sdks/nodejs/storage",title:"Getting started with Momento Cache in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/sdks/nodejs/storage.mdx",sourceDirName:"platform/sdks/nodejs",slug:"/platform/sdks/nodejs/storage",permalink:"/ja/platform/sdks/nodejs/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/nodejs/storage.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},sidebar:"platformSidebar",previous:{title:"Topics",permalink:"/ja/platform/sdks/nodejs/topics"},next:{title:"Compression",permalink:"/ja/platform/sdks/nodejs/compression"}},l={},d=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a\u3002",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068StorageClient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3002",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068storageclient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"Momento Storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b\u3002",id:"momento-storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u540d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u540d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"\u30b9\u30c8\u30a2\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30b9\u30c8\u30a2\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30b9\u30c8\u30a2\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080\u3002",id:"\u30b9\u30c8\u30a2\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c\u3002",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"javascript\u3067momento-storage\u3092\u59cb\u3081\u308b",children:"JavaScript\u3067Momento Storage\u3092\u59cb\u3081\u308b\u3002"})}),"\n",(0,n.jsxs)(t.p,{children:["Momento\u306f2\u3064\u306eJavaScript SDK\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.jsx)(t.a,{href:"/platform/sdks/nodejs",children:"1\u3064\u306fNode.js\u7528"}),"\u3001",(0,n.jsx)(t.a,{href:"/platform/sdks/web",children:"1\u3064\u306f\u30d6\u30e9\u30a6\u30b6\u305d\u306e\u4ed6\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528"}),"\u3067\u3059\u30022\u3064\u306eSDK\u306f\u540c\u3058API\u3092\u6301\u3063\u3066\u3044\u308b\u305f\u3081\u3001",(0,n.jsx)(t.code,{children:"import"}),"\u6587\u4ee5\u5916\u3001\u30b3\u30fc\u30c9\u306f\u540c\u3058\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u304c\u3001\u305d\u306e\u88cf\u5074\u3067\u306f\u3001\u7570\u306a\u308bJavaScript\u5b9f\u884c\u74b0\u5883\u3067\u6700\u9069\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u4e92\u63db\u6027\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u3001Momento Storage\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306a\u60c5\u5831\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u3084\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u4e0a\u8a18\u306e\u30ea\u30f3\u30af\u5148\u306e SDK \u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u65e2\u5b58\u306eNode.js\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bMomento Node.js SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cli",children:"npm install @gomomento/sdk\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u307e\u305f\u306f\u3001\u65e2\u5b58\u306e\u30d6\u30e9\u30a6\u30b6 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b Momento Web SDK \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cli",children:"npm install @gomomento/sdk-web\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"gomento/sdk"}),"\u307e\u305f\u306f",(0,n.jsx)(t.code,{children:"@gomento/sdk-web"}),"\u306e\u3069\u3061\u3089\u304b\u7247\u65b9\u3060\u3051\u304c\u5fc5\u8981\u3067\u3059\u3002\u4e21\u65b9\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"]})}),"\n",(0,n.jsx)(t.h2,{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",children:"API\u30ad\u30fc\u306e\u8a2d\u5b9a\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002 Momento Web Console](",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/caches)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.gomomento.com/caches)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\nAPI\u30ad\u30fc\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":  \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068storageclient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",children:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068StorageClient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u30e1\u30a4\u30f3\u95a2\u6570\u3092\u8a2d\u5b9a\u3057\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u53d6\u308a\u8fbc\u307f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306e\u3084\u308a\u3068\u308a\u306b\u4f7f\u7528\u3059\u308bStorageClient\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {PreviewStorageClient, StorageConfigurations} from '@gomomento/sdk';\n\nconst storageClient = new PreviewStorageClient({\n  configuration: StorageConfigurations.Laptop.latest(),\n});\n"}),"\n",(0,n.jsx)(t.h2,{id:"momento-storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b",children:"Momento Storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"const result = await storageClient.createStore(storeName);\nswitch (result.type) {\n  case CreateStoreResponse.AlreadyExists:\n    console.log(`Store '${storeName}' already exists`);\n    break;\n  case CreateStoreResponse.Success:\n    console.log(`Store '${storeName}' created`);\n    break;\n  case CreateStoreResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to create store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,n.jsx)(t.h2,{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u540d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",children:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u540d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b"}),"\n",(0,n.jsx)(t.p,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30b9\u30c8\u30a2\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8\u3002"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"const result = await storageClient.listStores();\nswitch (result.type) {\n  case ListStoresResponse.Success:\n    console.log(\n      `Stores:\\n${result\n        .stores()\n        .map(c => c.getName())\n        .join('\\n')}\\n\\n`\n    );\n    break;\n  case ListStoresResponse.Error:\n    throw new Error(`An error occurred while attempting to list stores: ${result.errorCode()}: ${result.toString()}`);\n}"}),"\n",(0,n.jsx)(t.h2,{id:"\u30b9\u30c8\u30a2\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u66f8\u304d\u8fbc\u3080",children:"\u30b9\u30c8\u30a2\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u66f8\u304d\u8fbc\u3080"}),"\n",(0,n.jsx)(t.p,{children:"\u30d7\u30c3\u30c8\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3002"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"// to store a string value:\nconst result = await storageClient.putString(storeName, 'test-key', 'test-value');\nswitch (result.type) {\n  case StoragePutResponse.Success:\n    console.log(\"Key 'test-key' stored successfully\");\n    break;\n  case StoragePutResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to store key 'test-key' in store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}\n\n// Momento storage also supports these other data types:\nawait storageClient.putInt(storeName, 'test-key', 42);\nawait storageClient.putDouble(storeName, 'test-key', 3.14);\nawait storageClient.putBytes(storeName, 'test-key', Buffer.from('test-value'));"}),"\n",(0,n.jsx)(t.h2,{id:"\u30b9\u30c8\u30a2\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30b9\u30c8\u30a2\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u30b9\u30c8\u30a2\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3067\u3059\u3002"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"const getResponse = await storageClient.get(storeName, 'test-key');\n// simplified style; assume the value was found, and that it was a string\nconsole.log(`string hit: ${getResponse.value()!.string()!}`);\n\n// if the value was an integer:\nconst integerGetResponse = await storageClient.get(storeName, 'test-integer-key');\nconsole.log(`integer hit: ${integerGetResponse.value()!.int()!}`);\n\n// pattern-matching style; safer for production code\nswitch (getResponse.type) {\n  case StorageGetResponse.Found:\n    // if you know the value is a string:\n    console.log(`Retrieved value for key 'test-key': ${getResponse.value().string()!}`);\n    break;\n  case StorageGetResponse.NotFound:\n    console.log(`Key 'test-key' was not found in store '${storeName}'`);\n    break;\n  case StorageGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from store '${storeName}': ${getResponse.errorCode()}: ${getResponse.toString()}`\n    );\n}"}),"\n",(0,n.jsx)(t.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c\u3002"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples",children:"JavaScript SDK GitHub repo examples directory"}),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306eMomento API\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.jsx)(t.a,{href:"/ja/storage/develop/api-reference/",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2821:(e,t,s)=>{s(6540)},503:(e,t,s)=>{s.d(t,{F:()=>r});var n=s(1432),o=(s(6540),s(4848));const r=e=>{let{language:t,code:s}=e;return(0,o.jsx)(n.A,{language:t,children:s})}}}]);