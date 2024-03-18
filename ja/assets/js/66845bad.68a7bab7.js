"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9553],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),l=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(d.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,u=p["".concat(d,".").concat(b)]||p[b]||m[b]||o;return n?t.createElement(u,s(s({ref:r},c),{},{components:n})):t.createElement(u,s({ref:r},c))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7232:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Mapping leaderboard IDs to strings",sidebar_label:"Mapping leaderboard IDs to strings",description:"Learn how to map numeric leaderboard IDs to arbitrary strings.",keywords:["momento","leaderboard","gaming","serverless"]},s="How to map numeric leaderboard IDs to arbitrary strings",i={unversionedId:"leaderboards/patterns/map-id-to-string",id:"leaderboards/patterns/map-id-to-string",title:"Mapping leaderboard IDs to strings",description:"Learn how to map numeric leaderboard IDs to arbitrary strings.",source:"@site/docs/leaderboards/patterns/map-id-to-string.md",sourceDirName:"leaderboards/patterns",slug:"/leaderboards/patterns/map-id-to-string",permalink:"/ja/leaderboards/patterns/map-id-to-string",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/patterns/map-id-to-string.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Mapping leaderboard IDs to strings",sidebar_label:"Mapping leaderboard IDs to strings",description:"Learn how to map numeric leaderboard IDs to arbitrary strings.",keywords:["momento","leaderboard","gaming","serverless"]},sidebar:"leaderboardSidebar",previous:{title:"Patterns"},next:{title:"Service Limits",permalink:"/ja/leaderboards/limits"}},d={},l=[],c={toc:l},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-map-numeric-leaderboard-ids-to-arbitrary-strings"},"How to map numeric leaderboard IDs to arbitrary strings"),(0,a.kt)("p",null,"Momento Leaderboards elements are uniquely identified by an unsigned 64-bit number that can represent a player identifier, session identifier, browser identifier or any other kind of identifier you want to use. An id can only appear in a leaderboard one time, meaning you can't have two scores for one player unless that player has two ids!"),(0,a.kt)("p",null,"In some cases, you may want to associate that ID with some other information, such as a player's name, for a more human-friendly leaderboard display.\nYou can use a dictionary to convert between the string and ID representations as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  PreviewLeaderboardClient,\n  LeaderboardConfigurations,\n  CredentialProvider,\n  CacheClient,\n  Configurations,\n  CreateCache,\n  LeaderboardDelete,\n  LeaderboardFetch,\n  LeaderboardOrder,\n  LeaderboardUpsert,\n} from '@gomomento/sdk';\n\nasync function main() {\n  // 1. Create a CacheClient to connect to Momento\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 60,\n  });\n\n  // 2. Create a cache for the leaderboard to live in\n  const createCacheResponse = await cacheClient.createCache('my-cache');\n  if (createCacheResponse instanceof CreateCache.AlreadyExists) {\n    console.log('cache already exists');\n  } else if (createCacheResponse instanceof CreateCache.Error) {\n    throw createCacheResponse.innerException();\n  }\n\n  // 3. Create a Leaderboard client\n  const client = new PreviewLeaderboardClient({\n    configuration: LeaderboardConfigurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n  });\n\n  // 4. Create a leaderboard with given cache and leaderboard names\n  const leaderboard = client.leaderboard('my-cache', 'my-leaderboard');\n\n  // 5. Create a mapping between element IDs and arbitrary strings\n  const id2name: Record<number, string> = {\n    123: 'Alice',\n    456: 'Bob',\n    789: 'Charlie',\n    1234: 'David',\n    5678: 'Eve',\n  };\n\n  // 6. Upsert the elements along with some scores\n  let upsertElements: Record<number, number> = {}\n  for (const id of Object.keys(id2name)) {\n    upsertElements[Number(id)] = Math.floor(Math.random() * 1000);\n  }\n  const upsertResponse = await leaderboard.upsert(upsertElements);\n  if (upsertResponse instanceof LeaderboardUpsert.Success) {\n    console.log('Upsert success!');\n  } else if (upsertResponse instanceof LeaderboardUpsert.Error) {\n    console.log('Upsert error:', upsertResponse.message());\n  }\n\n  // 7. Fetch the top 5 elements in the leaderboard and print scores and corresponding strings\n  const fetchResponse = await leaderboard.fetchByRank(0, 5, { order: LeaderboardOrder.Descending });\n  if (fetchResponse instanceof LeaderboardFetch.Success) {\n    const elements = fetchResponse.values();\n    console.log('------------Top 5 Leaderboard-------------');\n    console.log('------------------------------------------');\n    for (const element of elements) {\n      console.log(`${id2name[element.id]}: ${element.score}`);\n    }\n    console.log('------------------------------------------');\n  } else if (fetchResponse instanceof LeaderboardFetch.Error) {\n    console.log('Fetch error:', fetchResponse.message());\n  }\n\n  // 8. Delete the entire leaderboard when done.\n  // Leaderboard items have a default 7-day TTL so make sure to clean up\n  // all unnecessary elements when no longer needed.\n  const deleteResp = await leaderboard.delete();\n  if (deleteResp instanceof LeaderboardDelete.Success) {\n    console.log('Delete leaderboard success');\n  } else if (deleteResp instanceof LeaderboardDelete.Error) {\n    console.log('Delete leaderboard error:', deleteResp.message());\n  }\n}\n\nmain()\n  .then(() => {\n    console.log('Leaderboard example completed!');\n    exit();\n  })\n  .catch((e: Error) => {\n    console.error(`Uncaught exception while running example: ${e.message}`);\n    throw e;\n  });\n")),(0,a.kt)("p",null,"When the example runs, you'll see a leaderboard printed out like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"------------Top 5 Leaderboard-------------\n------------------------------------------\nBob: 772\nCharlie: 685\nDavid: 483\nAlice: 450\nEve: 13\n------------------------------------------\n")))}m.isMDXComponent=!0}}]);