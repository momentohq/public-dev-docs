"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9985],{94273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=n(74848),c=n(28453),s=(n(42821),n(70503));const a={sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Swift for iOS",description:"Learn the basic building blocks for writing Swift code to interact with Momento Cache in your native iOS applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","swift","ios","mobile"]},r="Swift\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b",l={id:"platform/sdks/swift/cache",title:"Getting started with Momento Cache in Swift for iOS",description:"Learn the basic building blocks for writing Swift code to interact with Momento Cache in your native iOS applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/sdks/swift/cache.mdx",sourceDirName:"platform/sdks/swift",slug:"/platform/sdks/swift/cache",permalink:"/ja/platform/sdks/swift/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/swift/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Swift for iOS",description:"Learn the basic building blocks for writing Swift code to interact with Momento Cache in your native iOS applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","swift","ios","mobile"]},sidebar:"platformSidebar",previous:{title:"Swift",permalink:"/ja/platform/sdks/swift/"},next:{title:"Topics",permalink:"/ja/platform/sdks/swift/topics"}},o={},h=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"CacheClient \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"cacheclient-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u524a\u9664",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u524a\u9664",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"swift\u3067momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b",children:"Swift\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b"})}),"\n",(0,i.jsxs)(t.p,{children:["Swift\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5b8c\u5168\u3067\u52d5\u4f5c\u3059\u308b\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples",children:"Swift SDK \u306e\u30b5\u30f3\u30d7\u30eb"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Momento Swift SDK\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306fGitHub\u3067\u5165\u624b\u53ef\u80fd\u3067\u3059\uff1a ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-swift",children:"momentohq/client-sdk-swift"}),"\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",children:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"cacheclient-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"CacheClient \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u547c\u3073\u51fa\u3057\u306b\u4f7f\u7528\u3059\u308b CacheClient \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let cacheClient = CacheClient(\n        configuration: CacheClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider,\n        defaultTtlSeconds: 10\n    )\n} catch {\n    print("Unable to create cache client: \\(error)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",children:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'let result = await cacheClient.createCache(cacheName: cacheName)\nswitch result {\ncase .alreadyExists(_):\n    print("Cache already exists!")\ncase .success(_):\n    print("Successfully created the cache!")\ncase .error(let err):\n    print("Unable to create the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",children:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059"}),"\n",(0,i.jsx)(t.p,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'let result = await cacheClient.listCaches()\nswitch result {\ncase .success(let success):\n    print("Successfully fetched list of caches: \\(success.caches.map { $0.name })")\ncase .error(let err):\n    print("Unable to fetch list of caches: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u524a\u9664",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u524a\u9664"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3057\u307e\u3059"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'let result = await cacheClient.deleteCache(cacheName: cacheName)\nswitch result {\ncase .success(let success):\n    print("Successfully deleted the cache")\ncase .error(let err):\n    print("Unable to delete cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"}),"\n",(0,i.jsx)(t.p,{children:"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u5358\u7d14\u306a\u4f8b\u3002CacheClient.set() \u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL \u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3053\u308c\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u65e2\u5b9a\u306e TTL \u5024\u304c\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u307e\u3059"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'let result = await cacheClient.set(\n    cacheName: cacheName,\n    key: "key",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully set item in the cache")\ncase .error(let err):\n    print("Unable to set item in the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'let result = await cacheClient.get(\n    cacheName: cacheName,\n    key: "key"\n)\nswitch result {\ncase .hit(let hit):\n    print("Cache hit: \\(hit.valueString)")\ncase .miss(_):\n    print("Cache miss")\ncase .error(let err):\n    print("Unable to get item in the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u308c\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b\u4f8b\u3067\u3042\u308b"}),"\n",(0,i.jsx)(s.F,{language:"swift",code:'let result = await cacheClient.delete(\n    cacheName: cacheName,\n    key: "key"\n)\nswitch result {\ncase .success(_):\n    print("Successfully deleted item in the cache")\ncase .error(let err):\n    print("Unable to delete item in the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-swift/tree/main/examples",children:"Swift SDK GitHub repo examples directory"}),"\u3067\u3001\u5b8c\u5168\u306a\u3001\u52d5\u4f5c\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(t.a,{href:"/ja/cache/develop/api-reference/",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},42821:(e,t,n)=>{n(96540)},70503:(e,t,n)=>{n.d(t,{F:()=>s});var i=n(21432),c=(n(96540),n(74848));const s=e=>{let{language:t,code:n}=e;return(0,c.jsx)(i.A,{language:t,children:n})}}}]);