"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9720],{1147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=n(4848),r=n(8453),l=(n(1441),n(5347));const c={sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Momento Cache\u306e\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},i="Momento Cache\u306e\u305f\u3081\u306eSet API\u306b\u3064\u3044\u3066",a={id:"cache/develop/api-reference/set-collections",title:"Set API reference",description:"Momento Cache\u306e\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/api-reference/set-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/set-collections",permalink:"/ja/cache/develop/api-reference/set-collections",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/set-collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Momento Cache\u306e\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},sidebar:"cacheSidebar",previous:{title:"Lists",permalink:"/ja/cache/develop/api-reference/list-collections"},next:{title:"Sorted sets",permalink:"/ja/cache/develop/api-reference/sorted-set-collections"}},d={},h=[{value:"Set methods",id:"set-methods",level:2},{value:"SetAddElement",id:"setaddelement",level:3},{value:"SetAddElements",id:"setaddelements",level:3},{value:"SetFetch",id:"setfetch",level:3},{value:"SetSample",id:"setsample",level:3},{value:"SetRemoveElement",id:"setremoveelement",level:3},{value:"SetRemoveElements",id:"setremoveelements",level:3},{value:"SetContainsElement",id:"setcontainselement",level:3},{value:"SetContainsElements",id:"setcontainselements",level:3},{value:"SetLength",id:"setlength",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"momento-cache\u306e\u305f\u3081\u306eset-api\u306b\u3064\u3044\u3066",children:"Momento Cache\u306e\u305f\u3081\u306eSet API\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Momento\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u306f\u3001",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/collection-ttl",children:"CollectionTTL"}),'\u3092\u4f7f\u7528\u3057\u3066TTL\u52d5\u4f5c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e "write" \u64cd\u4f5c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u5f15\u6570\u3067\u3059\u3002']})}),"\n",(0,s.jsxs)(t.p,{children:["\u96c6\u5408\u306f\u8981\u7d20\u306e\u96c6\u307e\u308a\u3067\u3059\u304c\u3001\u5404\u8981\u7d20\u306f\u4e00\u5ea6\u3057\u304b\u73fe\u308c\u305a\u3001\u9806\u5e8f\u306f\u4fdd\u8a3c\u3055\u308c\u307e\u305b\u3093\u3002\n\u4f8b: \u30bb\u30c3\u30c8\u304c ",(0,s.jsx)(t.code,{children:"[1, 2, 3]"})," \u3092\u542b\u307f\u30012 \u3092\u8ffd\u52a0\u3057\u3066\u3082\u30bb\u30c3\u30c8\u306f ",(0,s.jsx)(t.code,{children:"[1, 2, 3]."})," \u306e\u307e\u307e\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f\u3001",(0,s.jsx)(t.a,{href:"/ja/cache/develop/basics/datatypes#sets",children:"Sets"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"set-methods",children:"Set methods"}),"\n",(0,s.jsx)(t.h3,{id:"setaddelement",children:"SetAddElement"}),"\n",(0,s.jsx)(t.p,{children:"\u30bb\u30c3\u30c8\u306b\u8981\u7d20\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30bb\u30c3\u30c8\u9805\u76ee\u304c\u307e\u3060\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u305d\u308c\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"element"}),(0,s.jsx)(t.td,{children:"String | Bytes"}),(0,s.jsx)(t.td,{children:"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u8ffd\u52a0\u3055\u308c\u308b\u8981\u7d20\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u9805\u76ee\u306e TTL\u3067\u3059\u3002\u3053\u306e TTL \u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u63a5\u7d9a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u521d\u671f\u5316\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3055\u308c\u308b TTL \u3088\u308a\u3082\u512a\u5148\u3055\u308c\u307e\u3059\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Success"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"const result = await cacheClient.setAddElement(cacheName, 'test-set', 'test-element');\nswitch (result.type) {\n  case CacheSetAddElementResponse.Success:\n    console.log(\"Element added successfully to set 'test-set'\");\n    break;\n  case CacheSetAddElementResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetAddElement on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setaddelements",children:"SetAddElements"}),"\n",(0,s.jsx)(t.p,{children:"Adds multiple elements to a set item."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"elements"}),(0,s.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,s.jsx)(t.td,{children:"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u8ffd\u52a0\u3055\u308c\u308b\u8981\u7d20\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u9805\u76ee\u306e TTL\u3067\u3059\u3002\u3053\u306e TTL \u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u63a5\u7d9a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u521d\u671f\u5316\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3055\u308c\u308b TTL \u3088\u308a\u3082\u512a\u5148\u3055\u308c\u307e\u3059\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Success"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"const result = await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nswitch (result.type) {\n  case CacheSetAddElementsResponse.Success:\n    console.log(\"Elements added successfully to set 'test-set'\");\n    break;\n  case CacheSetAddElementsResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetAddElements on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .set_add_elements(cache_name, "set_name", vec!["value1", "value2"])\n      .await?;\n  println!("Elements added to set");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setfetch",children:"SetFetch"}),"\n",(0,s.jsx)(t.p,{children:"Gets a set item from a cache."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u53d6\u5f97\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsx)(t.p,{children:"SetFetch \u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"valueSetBytes(): Bytes[]"}),"\n",(0,s.jsx)(t.li,{children:"valueSetString(): String[]"}),"\n",(0,s.jsx)(t.li,{children:"toString(): String"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setFetch(cacheName, 'test-set');\nswitch (result.type) {\n  case CacheSetFetchResponse.Hit:\n    console.log('Set fetched successfully- ');\n    result.valueSet().forEach((value, key) => {\n      console.log(`${key} : ${value}`);\n    });\n    break;\n  case CacheSetFetchResponse.Miss:\n    console.log(`Set 'test-set' was not found in cache '${cacheName}'`);\n    break;\n  case CacheSetFetchResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetFetch on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _fetched_elements: Vec<String> = cache_client\n      .set_fetch(cache_name, "set_name")\n      .await?\n      .try_into()\n      .expect("Expected a set!");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setsample",children:"SetSample"}),"\n",(0,s.jsx)(t.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30bb\u30c3\u30c8\u9805\u76ee\u304b\u3089\u8981\u7d20\u306e\u30e9\u30f3\u30c0\u30e0\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u30bb\u30c3\u30c8\u9805\u76ee\u306e\u540d\u524d"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsx)(t.td,{children:"\u53d6\u5f97\u3059\u308b\u8981\u7d20\u306e\u6700\u5927\u6570"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\u30e1\u30bd\u30c3\u30c9\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,s.jsx)(t.p,{children:"SetSample\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"valueSetBytes(): Bytes[]"}),"\n",(0,s.jsx)(t.li,{children:"valueSetString(): String[]"}),"\n",(0,s.jsx)(t.li,{children:"toString(): String"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2', 'test-element3']);\nconst result = await cacheClient.setSample(cacheName, 'test-set', 2);\nswitch (result.type) {\n  case CacheSetSampleResponse.Hit:\n    console.log('Sample of 2 elements fetched successfully- ');\n    result.valueSet().forEach((value, key) => {\n      console.log(`${key} : ${value}`);\n    });\n    break;\n  case CacheSetSampleResponse.Miss:\n    console.log(`Set 'test-set' was not found in cache '${cacheName}'`);\n    break;\n  case CacheSetSampleResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetSample on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:'var setAddResult = await cacheClient.SetAddElementsAsync("test-cache", "test-set", new string[] {"foo", "bar", "baz"});\r\nif (setAddResult is CacheSetAddElementsResponse.Success)\r\n{\r\n    Console.WriteLine("Added elements to \'test-set\' successfully");\r\n}\r\nelse if (setAddResult is CacheSetAddElementsResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to delete key \'test-key\' from cache \'test-cache\': {error.ErrorCode}: {error}");\r\n}\r\n\nvar setSampleResult = await cacheClient.SetSampleAsync("test-cache", "test-set", 2);\r\nif (setSampleResult is CacheSetSampleResponse.Hit setSampleHit)\r\n{\r\n    Console.WriteLine($"Sampled random elements from \'test-set\': {String.Join(", ", setSampleHit.ValueSetString)}");\r\n}\r\nelse if (setSampleResult is CacheSetSampleResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to sample from \'test-set\' from cache \'test-cache\': {error.ErrorCode}: {error}");\r\n}\r',php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setremoveelement",children:"SetRemoveElement"}),"\n",(0,s.jsx)(t.p,{children:"\u65e2\u5b58\u306e\u30bb\u30c3\u30c8\u9805\u76ee\u304b\u3089\u5358\u4e00\u306e\u8981\u7d20\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"element"}),(0,s.jsx)(t.td,{children:"String | Bytes"}),(0,s.jsx)(t.td,{children:"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u524a\u9664\u3055\u308c\u308b\u8981\u7d20\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Success"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"await cacheClient.setAddElement(cacheName, 'test-set', 'test-element');\nconst result = await cacheClient.setRemoveElement(cacheName, 'test-set', 'test-element');\nswitch (result.type) {\n  case CacheSetRemoveElementResponse.Success:\n    console.log(\"Element 'test-element' removed successfully from set 'test-set'\");\n    break;\n  case CacheSetRemoveElementResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetRemoveElement on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setremoveelements",children:"SetRemoveElements"}),"\n",(0,s.jsx)(t.p,{children:"\u65e2\u5b58\u306e\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u304b\u3089\u8907\u6570\u306e\u8981\u7d20\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"elements"}),(0,s.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,s.jsx)(t.td,{children:"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u524a\u9664\u3055\u308c\u308b\u8981\u7d20\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Success"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setRemoveElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nswitch (result.type) {\n  case CacheSetRemoveElementsResponse.Success:\n    console.log(\"Elements 'test-element1' and 'test-element2' removed successfully from set 'test-set'\");\n    break;\n  case CacheSetRemoveElementsResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetRemoveElements on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .set_remove_elements(cache_name, "set_name", vec!["element1", "element2"])\n      .await?;\n  println!("Elements removed from set");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setcontainselement",children:"SetContainsElement"}),"\n",(0,s.jsx)(t.p,{children:"\u6307\u5b9a\u3055\u308c\u305f\u8981\u7d20\u304c\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30c3\u30c8\u306b\u542b\u307e\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u8abf\u3079\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"element"}),(0,s.jsx)(t.td,{children:"String | Bytes"}),(0,s.jsx)(t.td,{children:"\u5b58\u5728\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u8981\u7d20\u306e\u540d\u524d\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsx)(t.p,{children:"SetContainsElement\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"containsElement(): bool"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setcontainselements",children:"SetContainsElements"}),"\n",(0,s.jsx)(t.p,{children:"\u6307\u5b9a\u3055\u308c\u305f\u8981\u7d20\u304c\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30c3\u30c8\u306b\u542b\u307e\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"elements"}),(0,s.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,s.jsx)(t.td,{children:"\u5b58\u5728\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u8981\u7d20\u540d\u306e\u914d\u5217\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsx)(t.p,{children:"SetContainsElements\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"containsElements(): bool[]"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"setlength",children:"SetLength"}),"\n",(0,s.jsx)(t.p,{children:"\u65e2\u5b58\u306e\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u9577\u3055\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u524d"}),(0,s.jsx)(t.th,{children:"\u578b"}),(0,s.jsx)(t.th,{children:"\u8a73\u7d30"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u30c1\u30a7\u30c3\u30af\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002"})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"length()"}),": Number"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["\u8a73\u3057\u304f\u306f",(0,s.jsx)(t.a,{href:"/ja/cache/develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsx)(l.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,c),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),r=n(4164),l=n(3104),c=n(6347),i=n(205),a=n(7485),d=n(1682),h=n(679);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=j(e),[c,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[d,o]=u({queryString:n,groupId:r}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,h.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=d??m;return x({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&a(v)}),[v]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,l]),tabValues:l}}var p=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=n(4848);function f(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),h=e=>{const t=e.currentTarget,n=a.indexOf(t),r=i[n].value;r!==s&&(d(t),c(r))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:o,onClick:h,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=m(e);return(0,S.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,S.jsx)(f,{...t,...e}),(0,S.jsx)(b,{...t,...e})]})}function y(e){const t=(0,p.A)();return(0,S.jsx)(g,{...e,children:o(e.children)},String(t))}},1441:(e,t,n)=>{n(6540)},5347:(e,t,n)=>{n.d(t,{r:()=>i});var s=n(1470),r=n(9365),l=n(1432),c=(n(6540),n(4848));const i=e=>{let{js:t,python:n,java:i,kotlin:a,go:d,csharp:h,php:o,rust:j,ruby:x,elixir:u,swift:m,dart:p,cli:v}=e;return t||n||i||a||d||h||o||j||x||u||m||p||v?(0,c.jsxs)(s.A,{children:[t&&(0,c.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,c.jsx)(l.A,{language:"js",children:t})}),n&&(0,c.jsx)(r.A,{value:"python",label:"Python",children:(0,c.jsx)(l.A,{language:"python",children:n})}),i&&(0,c.jsx)(r.A,{value:"java",label:"Java",children:(0,c.jsx)(l.A,{language:"java",children:i})}),a&&(0,c.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,c.jsx)(l.A,{language:"kotlin",children:a})}),d&&(0,c.jsx)(r.A,{value:"go",label:"Go",children:(0,c.jsx)(l.A,{language:"go",children:d})}),h&&(0,c.jsx)(r.A,{value:"csharp",label:"C#",children:(0,c.jsx)(l.A,{language:"csharp",children:h})}),o&&(0,c.jsx)(r.A,{value:"php",label:"PHP",children:(0,c.jsx)(l.A,{language:"php",children:o})}),j&&(0,c.jsx)(r.A,{value:"rust",label:"Rust",children:(0,c.jsx)(l.A,{language:"rust",children:j})}),x&&(0,c.jsx)(r.A,{value:"ruby",label:"Ruby",children:(0,c.jsx)(l.A,{language:"ruby",children:x})}),u&&(0,c.jsx)(r.A,{value:"elixir",label:"Elixir",children:(0,c.jsx)(l.A,{language:"elixir",children:u})}),m&&(0,c.jsx)(r.A,{value:"swift",label:"Swift",children:(0,c.jsx)(l.A,{language:"swift",children:m})}),p&&(0,c.jsx)(r.A,{value:"dart",label:"Dart",children:(0,c.jsx)(l.A,{language:"dart",children:p})}),v&&(0,c.jsx)(r.A,{value:"cli",label:"CLI",children:(0,c.jsx)(l.A,{language:"cli",children:v})})]}):null}}}]);