"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3319],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(614),r=n(7294);const s=e=>{let{language:t,code:n}=e;return r.createElement(o.Z,{language:t},n)}},259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),s=(n(3043),n(7235));const a={sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in .NET",description:"Learn the basic building blocks for writing .NET/C# code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","dotnet","csharp","c sharp","c#"]},c=".NET\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b",i={unversionedId:"sdks/dotnet/cache",id:"sdks/dotnet/cache",title:"Getting started with Momento Cache in .NET",description:"Learn the basic building blocks for writing .NET/C# code to interact with Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/dotnet/cache.mdx",sourceDirName:"sdks/dotnet",slug:"/sdks/dotnet/cache",permalink:"/ja/sdks/dotnet/cache",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/dotnet/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in .NET",description:"Learn the basic building blocks for writing .NET/C# code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","dotnet","csharp","c sharp","c#"]}},l={},d=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}],h={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"net\u3067momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b"},".NET\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u59cb\u3081\u308b"),(0,r.kt)("p",null,".NET\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples"},".NET\u306eSDK\u30b5\u30f3\u30d7\u30eb"),"\u306b\u306f\u3001\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u5b8c\u5168\u306a\u30b5\u30f3\u30d7\u30eb\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,r.kt)("p",null,"\u65e2\u5b58\u306e.NET\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"dotnet add package Momento.Sdk\n")),(0,r.kt)("h2",{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a"},"API\u30ad\u30fc\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002 Momento Web Console](",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"},"https://console.gomomento.com/caches)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),"\nAPI\u30ad\u30fc\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3044\u308b\u3002"),(0,r.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/MomentoUsage/Program.cs"},"\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30fb\u30d5\u30a1\u30a4\u30eb")," \u306f\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u53d6\u308a\u8fbc\u307f\u3001\u74b0\u5883\u5909\u6570\u304b\u3089 API \u30ad\u30fc\u3092\u8aad\u307f\u53d6\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3059\u308b CacheClient \u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(s.Z,{language:"csharp",code:'var result = await cacheClient.CreateCacheAsync("test-cache");\nif (result is CreateCacheResponse.Success)\n{\n    Console.WriteLine("Cache \'test-cache\' created");\n}\nelse if (result is CreateCacheResponse.CacheAlreadyExists)\n{\n    Console.WriteLine("Cache \'test-cache\' already exists");\n}\nelse if (result is CreateCacheResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to create cache \'test-cache\': {error.ErrorCode}: {error}");\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059"},"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8\u3002"),(0,r.kt)(s.Z,{language:"csharp",code:'var result = await cacheClient.ListCachesAsync();\nif (result is ListCachesResponse.Success success)\n{\n    Console.WriteLine($"Caches:\\n{string.Join("\\n", success.Caches.Select(c => c.Name))}\\n\\n");\n}\nelse if (result is ListCachesResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to list caches: {error.ErrorCode}: {error}");\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"),(0,r.kt)("p",null,"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3002client.set\u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002TTL\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(s.Z,{language:"csharp",code:'var result = await cacheClient.SetAsync("test-cache", "test-key", "test-value");\nif (result is CacheSetResponse.Success)\n{\n    Console.WriteLine("Key \'test-key\' stored successfully");\n}\nelse if (result is CacheSetResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': {error.ErrorCode}: {error}");\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"),(0,r.kt)(s.Z,{language:"csharp",code:"var result = await cacheClient.GetAsync(\"test-cache\", \"test-key\");\nif (result is CacheGetResponse.Hit hit)\n{\n    Console.WriteLine($\"Retrieved value for key 'test-key': {hit.ValueString}\");\n}\nelse if (result is CacheGetResponse.Miss)\n{\n    Console.WriteLine(\"Key 'test-key' was not found in cache 'test-cache'\");\n}\nelse if (result is CacheGetResponse.Error error)\n{\n    throw new Exception($\"An error occurred while attempting to get key 'test-key' from cache 'test-cache': {error.ErrorCode}: {error}\");\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"},"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples"},"csharp SDK GitHub repo examples directory"),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/MomentoApplication/Program.cs"},"\u3088\u308a\u9ad8\u5ea6\u306a\u30b3\u30fc\u30eb"),"\u306e\u30b3\u30fc\u30c9\u4f8b\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);