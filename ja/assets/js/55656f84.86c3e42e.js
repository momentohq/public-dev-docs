"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1202],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>b});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,u=m["".concat(d,".").concat(b)]||m[b]||p[b]||o;return r?t.createElement(u,s(s({ref:n},c),{},{components:r})):t.createElement(u,s({ref:n},c))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},926:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,title:"Mapping leaderboard IDs to strings",sidebar_label:"Mapping leaderboard IDs to strings",description:"Learn how to map numeric leaderboard IDs to arbitrary strings.",keywords:["momento","leaderboard","gaming","serverless"]},s="\u6570\u5024\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9ID\u3092\u4efb\u610f\u306e\u6587\u5b57\u5217\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u65b9\u6cd5",i={unversionedId:"leaderboards/patterns/map-id-to-string",id:"leaderboards/patterns/map-id-to-string",title:"Mapping leaderboard IDs to strings",description:"Learn how to map numeric leaderboard IDs to arbitrary strings.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaderboards/patterns/map-id-to-string.md",sourceDirName:"leaderboards/patterns",slug:"/leaderboards/patterns/map-id-to-string",permalink:"/ja/leaderboards/patterns/map-id-to-string",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/patterns/map-id-to-string.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Mapping leaderboard IDs to strings",sidebar_label:"Mapping leaderboard IDs to strings",description:"Learn how to map numeric leaderboard IDs to arbitrary strings.",keywords:["momento","leaderboard","gaming","serverless"]},sidebar:"leaderboardSidebar",previous:{title:"Patterns"},next:{title:"Quotas and Limits",permalink:"/ja/leaderboards/limits"}},d={},l=[],c={toc:l};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u5024\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9id\u3092\u4efb\u610f\u306e\u6587\u5b57\u5217\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u65b9\u6cd5"},"\u6570\u5024\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9ID\u3092\u4efb\u610f\u306e\u6587\u5b57\u5217\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u65b9\u6cd5"),(0,a.kt)("p",null,"Momento Leaderboards\u306e\u8981\u7d20\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u8b58\u5225\u5b50\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u8b58\u5225\u5b50\u3001\u30d6\u30e9\u30a6\u30b6\u8b58\u5225\u5b50\u3001\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u4f7f\u7528\u3057\u305f\u3044\u8b58\u5225\u5b50\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u7b26\u53f7\u306a\u305764\u30d3\u30c3\u30c8\u756a\u53f7\u306b\u3088\u3063\u3066\u4e00\u610f\u306b\u8b58\u5225\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u304c2\u3064\u306eID\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u9650\u308a\u30011\u4eba\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306b\u5bfe\u3057\u30662\u3064\u306e\u30b9\u30b3\u30a2\u3092\u6301\u3064\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\uff01"),(0,a.kt)("p",null,"\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3001\u305d\u306eID\u3092\u4ed6\u306e\u60c5\u5831\u3001\u305f\u3068\u3048\u3070\u9078\u624b\u306e\u540d\u524d\u306a\u3069\u3068\u95a2\u9023\u4ed8\u3051\u3066\u3001\u3088\u308a\u4eba\u9593\u306b\u308f\u304b\u308a\u3084\u3059\u3044\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u8868\u793a\u306b\u3057\u305f\u3044\u3053\u3068\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001\u8f9e\u66f8\u3092\u4f7f\u3063\u3066\u6587\u5b57\u5217\u3068ID\u3092\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  PreviewLeaderboardClient,\n  LeaderboardConfigurations,\n  CredentialProvider,\n  CacheClient,\n  Configurations,\n  CreateCache,\n  LeaderboardDelete,\n  LeaderboardFetch,\n  LeaderboardOrder,\n  LeaderboardUpsert,\n} from '@gomomento/sdk';\n\nasync function main() {\n  // 1. Create a CacheClient to connect to Momento\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 60,\n  });\n\n  // 2. Create a cache for the leaderboard to live in\n  const createCacheResponse = await cacheClient.createCache('my-cache');\n  if (createCacheResponse instanceof CreateCache.AlreadyExists) {\n    console.log('cache already exists');\n  } else if (createCacheResponse instanceof CreateCache.Error) {\n    throw createCacheResponse.innerException();\n  }\n\n  // 3. Create a Leaderboard client\n  const client = new PreviewLeaderboardClient({\n    configuration: LeaderboardConfigurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n  });\n\n  // 4. Create a leaderboard with given cache and leaderboard names\n  const leaderboard = client.leaderboard('my-cache', 'my-leaderboard');\n\n  // 5. Create a mapping between element IDs and arbitrary strings\n  const id2name: Record<number, string> = {\n    123: 'Alice',\n    456: 'Bob',\n    789: 'Charlie',\n    1234: 'David',\n    5678: 'Eve',\n  };\n\n  // 6. Upsert the elements along with some scores\n  let upsertElements: Record<number, number> = {}\n  for (const id of Object.keys(id2name)) {\n    upsertElements[Number(id)] = Math.floor(Math.random() * 1000);\n  }\n  const upsertResponse = await leaderboard.upsert(upsertElements);\n  if (upsertResponse instanceof LeaderboardUpsert.Success) {\n    console.log('Upsert success!');\n  } else if (upsertResponse instanceof LeaderboardUpsert.Error) {\n    console.log('Upsert error:', upsertResponse.message());\n  }\n\n  // 7. Fetch the top 5 elements in the leaderboard and print scores and corresponding strings\n  const fetchResponse = await leaderboard.fetchByRank(0, 5, { order: LeaderboardOrder.Descending });\n  if (fetchResponse instanceof LeaderboardFetch.Success) {\n    const elements = fetchResponse.values();\n    console.log('------------Top 5 Leaderboard-------------');\n    console.log('------------------------------------------');\n    for (const element of elements) {\n      console.log(`${id2name[element.id]}: ${element.score}`);\n    }\n    console.log('------------------------------------------');\n  } else if (fetchResponse instanceof LeaderboardFetch.Error) {\n    console.log('Fetch error:', fetchResponse.message());\n  }\n\n  // 8. Delete the entire leaderboard when done.\n  // Leaderboard items have a default 7-day TTL so make sure to clean up\n  // all unnecessary elements when no longer needed.\n  const deleteResp = await leaderboard.delete();\n  if (deleteResp instanceof LeaderboardDelete.Success) {\n    console.log('Delete leaderboard success');\n  } else if (deleteResp instanceof LeaderboardDelete.Error) {\n    console.log('Delete leaderboard error:', deleteResp.message());\n  }\n}\n\nmain()\n  .then(() => {\n    console.log('Leaderboard example completed!');\n    exit();\n  })\n  .catch((e: Error) => {\n    console.error(`Uncaught exception while running example: ${e.message}`);\n    throw e;\n  });\n")),(0,a.kt)("p",null,"\u4f8b\u984c\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u3088\u3046\u306b\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"------------Top 5 Leaderboard-------------\n------------------------------------------\nBob: 772\nCharlie: 685\nDavid: 483\nAlice: 450\nEve: 13\n------------------------------------------\n")))}p.isMDXComponent=!0}}]);