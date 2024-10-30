"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1925],{81213:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=s(74848),r=s(28453),l=(s(51441),s(35347));const c={sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache."},i="Set API reference for Momento Cache",o={id:"cache/develop/api-reference/set-collections",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/set-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/set-collections",permalink:"/cache/develop/api-reference/set-collections",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/set-collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache."},sidebar:"cacheSidebar",previous:{title:"Lists",permalink:"/cache/develop/api-reference/list-collections"},next:{title:"Sorted sets",permalink:"/cache/develop/api-reference/sorted-set-collections"}},a={},h=[{value:"Set methods",id:"set-methods",level:2},{value:"SetAddElement",id:"setaddelement",level:3},{value:"SetAddElements",id:"setaddelements",level:3},{value:"SetFetch",id:"setfetch",level:3},{value:"SetSample",id:"setsample",level:3},{value:"SetRemoveElement",id:"setremoveelement",level:3},{value:"SetRemoveElements",id:"setremoveelements",level:3},{value:"SetContainsElement",id:"setcontainselement",level:3},{value:"SetContainsElements",id:"setcontainselements",level:3},{value:"SetLength",id:"setlength",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"set-api-reference-for-momento-cache",children:"Set API reference for Momento Cache"})}),"\n",(0,n.jsx)(t.p,{children:"A set is a collection of elements, but each element can appear only once and order is not guaranteed."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Momento collection types use a ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL"}),' to specify their TTL behavior. This is an optional argument for all "write" operations.']})}),"\n",(0,n.jsxs)(t.p,{children:["Example: if your set contains ",(0,n.jsx)(t.code,{children:"[1, 2, 3]"})," and you add 2, the set remains ",(0,n.jsx)(t.code,{children:"[1, 2, 3]."})]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/basics/datatypes#sets",children:"Sets"})," for more information on their usage."]}),"\n",(0,n.jsx)(t.h2,{id:"set-methods",children:"Set methods"}),"\n",(0,n.jsx)(t.h3,{id:"setaddelement",children:"SetAddElement"}),"\n",(0,n.jsx)(t.p,{children:"Adds an element to a set. If the set item does not already exist, this method will create one."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item to be altered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"element"}),(0,n.jsx)(t.td,{children:"String | Bytes"}),(0,n.jsx)(t.td,{children:"Element to be added by this operation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ttl"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,n.jsx)(t.td,{children:"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Success"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"const result = await cacheClient.setAddElement(cacheName, 'test-set', 'test-element');\nswitch (result.type) {\n  case CacheSetAddElementResponse.Success:\n    console.log(\"Element added successfully to set 'test-set'\");\n    break;\n  case CacheSetAddElementResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetAddElement on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setaddelements",children:"SetAddElements"}),"\n",(0,n.jsx)(t.p,{children:"Adds multiple elements to a set item. If the set item does not already exist, this method will create one."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item to be altered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"elements"}),(0,n.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,n.jsx)(t.td,{children:"Elements to be added by this operation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ttl"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,n.jsx)(t.td,{children:"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Success"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"const result = await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nswitch (result.type) {\n  case CacheSetAddElementsResponse.Success:\n    console.log(\"Elements added successfully to set 'test-set'\");\n    break;\n  case CacheSetAddElementsResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetAddElements on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .set_add_elements(cache_name, "set_name", vec!["value1", "value2"])\n      .await?;\n  println!("Elements added to set");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setfetch",children:"SetFetch"}),"\n",(0,n.jsx)(t.p,{children:"Gets a set item from a cache."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"The name of the set item to be retrieved."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsx)(t.p,{children:"The response object for SetFetch returns three possible options, a cache hit, miss, or an error."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Hit","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"valueSetBytes(): Bytes[]"}),"\n",(0,n.jsx)(t.li,{children:"valueSetString(): String[]"}),"\n",(0,n.jsx)(t.li,{children:"toString(): String"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Miss"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setFetch(cacheName, 'test-set');\n\n// simplified style; assume the value was found\nconsole.log(`Set fetched: ${result.value()!}`);\n\n// pattern-matching style; safer for production code\nswitch (result.type) {\n  case CacheSetFetchResponse.Hit:\n    console.log('Set fetched successfully- ');\n    result.value().forEach((value, key) => {\n      console.log(`${key} : ${value}`);\n    });\n    break;\n  case CacheSetFetchResponse.Miss:\n    console.log(`Set 'test-set' was not found in cache '${cacheName}'`);\n    break;\n  case CacheSetFetchResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetFetch on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _fetched_elements: Vec<String> = cache_client\n      .set_fetch(cache_name, "set_name")\n      .await?\n      .try_into()\n      .expect("Expected a set!");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setsample",children:"SetSample"}),"\n",(0,n.jsx)(t.p,{children:"Gets a random sampling of elements from a set item in a cache."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"The name of the set item to sample."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The maximum number of elements to be retrieved."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsx)(t.p,{children:"The response object for SetSample returns three possible options, a cache hit, miss, or an error."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Hit","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"valueSetBytes(): Bytes[]"}),"\n",(0,n.jsx)(t.li,{children:"valueSetString(): String[]"}),"\n",(0,n.jsx)(t.li,{children:"toString(): String"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Miss"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2', 'test-element3']);\nconst result = await cacheClient.setSample(cacheName, 'test-set', 2);\n\n// simplified style; assume the value was found\nconsole.log(`Sampled 2 elements from set: ${result.value()!}`);\n\n// pattern-matching style; safer for production code\nswitch (result.type) {\n  case CacheSetSampleResponse.Hit:\n    console.log('Sample of 2 elements from set: ');\n    result.valueSet().forEach((value, key) => {\n      console.log(`${key} : ${value}`);\n    });\n    break;\n  case CacheSetSampleResponse.Miss:\n    console.log(`Set 'test-set' was not found in cache '${cacheName}'`);\n    break;\n  case CacheSetSampleResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetSample on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:'var setAddResult = await cacheClient.SetAddElementsAsync("test-cache", "test-set", new string[] { "foo", "bar", "baz" });\r\nif (setAddResult is CacheSetAddElementsResponse.Success)\r\n{\r\n    Console.WriteLine("Added elements to \'test-set\' successfully");\r\n}\r\nelse if (setAddResult is CacheSetAddElementsResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to delete key \'test-key\' from cache \'test-cache\': {error.ErrorCode}: {error}");\r\n}\r\n\nvar setSampleResult = await cacheClient.SetSampleAsync("test-cache", "test-set", 2);\r\nif (setSampleResult is CacheSetSampleResponse.Hit setSampleHit)\r\n{\r\n    Console.WriteLine($"Sampled random elements from \'test-set\': {String.Join(", ", setSampleHit.ValueSetString)}");\r\n}\r\nelse if (setSampleResult is CacheSetSampleResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to sample from \'test-set\' from cache \'test-cache\': {error.ErrorCode}: {error}");\r\n}\r',php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setremoveelement",children:"SetRemoveElement"}),"\n",(0,n.jsx)(t.p,{children:"Removes a single element from an existing set item. If the set is emptied as a result, the item is deleted."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item to be altered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"element"}),(0,n.jsx)(t.td,{children:"String | Bytes"}),(0,n.jsx)(t.td,{children:"Element to be removed by this operation."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Success"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"await cacheClient.setAddElement(cacheName, 'test-set', 'test-element');\nconst result = await cacheClient.setRemoveElement(cacheName, 'test-set', 'test-element');\nswitch (result.type) {\n  case CacheSetRemoveElementResponse.Success:\n    console.log(\"Element 'test-element' removed successfully from set 'test-set'\");\n    break;\n  case CacheSetRemoveElementResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetRemoveElement on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setremoveelements",children:"SetRemoveElements"}),"\n",(0,n.jsx)(t.p,{children:"Removes multiple elements from an existing set item. If the set is emptied as a result, the item is deleted."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item to be altered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"element"}),(0,n.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,n.jsx)(t.td,{children:"Elements to be removed by this operation."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Success"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setRemoveElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nswitch (result.type) {\n  case CacheSetRemoveElementsResponse.Success:\n    console.log(\"Elements 'test-element1' and 'test-element2' removed successfully from set 'test-set'\");\n    break;\n  case CacheSetRemoveElementsResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call cacheSetRemoveElements on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .set_remove_elements(cache_name, "set_name", vec!["element1", "element2"])\n      .await?;\n  println!("Elements removed from set");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setcontainselement",children:"SetContainsElement"}),"\n",(0,n.jsx)(t.p,{children:"Checks if a provided element is in the given set."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"element"}),(0,n.jsx)(t.td,{children:"String | Bytes"}),(0,n.jsx)(t.td,{children:"Name of the element to check existence of."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsx)(t.p,{children:"The response object for SetContainsElement returns three possible options, a cache hit, miss, or an error."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Hit","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"containsElement(): bool"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Miss"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setcontainselements",children:"SetContainsElements"}),"\n",(0,n.jsx)(t.p,{children:"Checks if provided elements are in the given set."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"elements"}),(0,n.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,n.jsx)(t.td,{children:"Array of element names to check existence of."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsx)(t.p,{children:"The response object for SetContainsElements returns three possible options, a cache hit, miss, or an error."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Hit","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"containsElements(): bool[]"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Miss"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,n.jsx)(t.h3,{id:"setlength",children:"SetLength"}),"\n",(0,n.jsx)(t.p,{children:"Get the length of an existing set item"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the cache."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"setName"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Name of the set item to be checked."})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Method response object"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Hit","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"length()"}),": Number"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Miss"}),"\n",(0,n.jsx)(t.li,{children:"Error"}),"\n"]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,n.jsx)(l.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},51441:(e,t,s)=>{s(96540)},35347:(e,t,s)=>{s.d(t,{r:()=>S});var n=s(11470),r=s(19365),l=s(21432),c=(s(96540),s(27293)),i=s(74848);const o="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",a="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",h="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",d="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",m="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",x="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",j="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",p="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",u="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",f="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",b="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",S=e=>{let{js:t,python:s,java:S,kotlin:g,go:v,csharp:y,php:E,rust:A,ruby:w,elixir:k,swift:N,dart:C,cli:_}=e;return t||s||S||g||v||y||E||A||w||k||N||C||_?(0,i.jsxs)(n.A,{children:[t&&(0,i.jsxs)(r.A,{value:"js",label:"JavaScript",children:[(0,i.jsx)(l.A,{language:"js",children:t}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),s&&(0,i.jsxs)(r.A,{value:"python",label:"Python",children:[(0,i.jsx)(l.A,{language:"python",children:s}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),S&&(0,i.jsxs)(r.A,{value:"java",label:"Java",children:[(0,i.jsx)(l.A,{language:"java",children:S}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),g&&(0,i.jsxs)(r.A,{value:"kotlin",label:"Kotlin",children:[(0,i.jsx)(l.A,{language:"kotlin",children:g}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,i.jsxs)(r.A,{value:"go",label:"Go",children:[(0,i.jsx)(l.A,{language:"go",children:v}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,i.jsxs)(r.A,{value:"csharp",label:"C#",children:[(0,i.jsx)(l.A,{language:"csharp",children:y}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),E&&(0,i.jsxs)(r.A,{value:"php",label:"PHP",children:[(0,i.jsx)(l.A,{language:"php",children:E}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,i.jsxs)(r.A,{value:"rust",label:"Rust",children:[(0,i.jsx)(l.A,{language:"rust",children:A}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,i.jsx)(r.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(l.A,{language:"ruby",children:w})}),k&&(0,i.jsxs)(r.A,{value:"elixir",label:"Elixir",children:[(0,i.jsx)(l.A,{language:"elixir",children:k}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),N&&(0,i.jsxs)(r.A,{value:"swift",label:"Swift",children:[(0,i.jsx)(l.A,{language:"swift",children:N}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),C&&(0,i.jsxs)(r.A,{value:"dart",label:"Dart",children:[(0,i.jsx)(l.A,{language:"dart",children:C}),(0,i.jsxs)(c.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),_&&(0,i.jsx)(r.A,{value:"cli",label:"CLI",children:(0,i.jsx)(l.A,{language:"cli",children:_})})]}):null}}}]);