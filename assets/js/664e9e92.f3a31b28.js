"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1021],{4085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=n(4848),i=n(8453),r=(n(1441),n(5347));const l={sidebar_position:2,sidebar_label:"Lists",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache."},c="List API reference for Momento Cache",a={id:"cache/develop/api-reference/list-collections",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/list-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/list-collections",permalink:"/cache/develop/api-reference/list-collections",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/list-collections.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Lists",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache."},sidebar:"cacheSidebar",previous:{title:"Dictionary",permalink:"/cache/develop/api-reference/dictionary-collections"},next:{title:"Sets",permalink:"/cache/develop/api-reference/set-collections"}},h={},o=[{value:"List methods",id:"list-methods",level:2},{value:"ListFetch",id:"listfetch",level:3},{value:"ListConcatenateBack",id:"listconcatenateback",level:3},{value:"ListConcatenateFront",id:"listconcatenatefront",level:3},{value:"ListLength",id:"listlength",level:3},{value:"ListPopBack",id:"listpopback",level:3},{value:"ListPopFront",id:"listpopfront",level:3},{value:"ListPushBack",id:"listpushback",level:3},{value:"ListPushFront",id:"listpushfront",level:3},{value:"ListRemoveValue",id:"listremovevalue",level:3},{value:"ListRetain",id:"listretain",level:3},{value:"Truncate to size",id:"truncate-to-size",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"list-api-reference-for-momento-cache",children:"List API reference for Momento Cache"}),"\n",(0,s.jsxs)(t.p,{children:["This page details the Momento API methods for the ",(0,s.jsx)(t.a,{href:"/cache/develop/basics/datatypes#lists",children:"list collection data types"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Momento collection types use a ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL"}),' to specify their TTL behavior. This is an optional argument for all "write" operations.']})}),"\n",(0,s.jsx)(t.h2,{id:"list-methods",children:"List methods"}),"\n",(0,s.jsx)(t.h3,{id:"listfetch",children:"ListFetch"}),"\n",(0,s.jsx)(t.p,{children:"Gets a list item from a cache, with optional slices."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The name of the list item to be retrieved."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startIndex"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsxs)(t.td,{children:["The starting inclusive element of the list to fetch. Default is 0. ",(0,s.jsx)(t.strong,{children:"This argument is optional."})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"endIndex"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsxs)(t.td,{children:["The ending exclusive element of the list to fetch. Default is end of list. ",(0,s.jsx)(t.strong,{children:"This argument is optional."})]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsx)(t.p,{children:"The response object for ListFetch returns three possible options, a cache hit, miss, or an error."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"valueListBytes(): Bytes[]"}),"\n",(0,s.jsx)(t.li,{children:"valueListString(): String[]"}),"\n",(0,s.jsxs)(t.li,{children:["toString(): String - Display a truncated valueListString(). See ",(0,s.jsx)(t.a,{href:"#truncate-to-size",children:"truncation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateBack(cacheName, 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listFetch(cacheName, 'test-list');\nif (result instanceof CacheListFetch.Hit) {\n  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions\n  console.log(`List fetched successfully: ${result.valueList()}`);\n} else if (result instanceof CacheListFetch.Miss) {\n  console.log(`List 'test-list' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheListFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to fetch the list 'test-list' from cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _fetched_values: Vec<String> = cache_client\n      .list_fetch(cache_name, "list_name")\n      .await?\n      .try_into()\n      .expect("Expected a list fetch!");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listconcatenateback",children:"ListConcatenateBack"}),"\n",(0,s.jsx)(t.p,{children:"Appends the supplied list to the end of an existing list item."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.p,{children:"If you have [1, 2, 3] and listConcatenateBack [4, 5, 6] you will have [1, 2, 3, 4, 5, 6]."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"values"}),(0,s.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,s.jsx)(t.td,{children:"Values to be added as elements to the list item."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client connection object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"truncateFrontToSize"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"#truncate-to-size",children:"truncate to size"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Success","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"listLength()"}),": Number - the new length of the list"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toString()"}),": String - add the listLength"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateBack(cacheName, 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listConcatenateBack(cacheName, 'test-list', ['x', 'y', 'z']);\nif (result instanceof CacheListConcatenateBack.Success) {\n  console.log(`Values added successfully to the back of the list 'test-list'. Result - ${result.toString()}`);\n} else if (result instanceof CacheListConcatenateBack.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListConcatenateBack on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .list_concatenate_back(cache_name, "list_name", vec!["value1", "value2"])\n      .await?;\n  println!("Elements appended to list");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listconcatenatefront",children:"ListConcatenateFront"}),"\n",(0,s.jsx)(t.p,{children:"Appends the supplied list to the front of an existing list item."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.p,{children:"If you have [1, 2, 3] and listConcatenateFront [4, 5, 6] you will have [4, 5, 6, 1, 2, 3]."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"values"}),(0,s.jsx)(t.td,{children:"String[] | Bytes[]"}),(0,s.jsx)(t.td,{children:"Values to be added as elements to the list item."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"truncateBackToSize"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"#truncate-to-size",children:"truncate to size"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Success","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"listLength()"}),": Number - the new length of the list item"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toString()"}),": String - add the listLength"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateFront(cacheName, 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listConcatenateFront(cacheName, 'test-list', ['x', 'y', 'z']);\nif (result instanceof CacheListConcatenateFront.Success) {\n  console.log(`Values added successfully to the front of the list 'test-list'. Result - ${result.toString()}`);\n} else if (result instanceof CacheListConcatenateFront.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListConcatenateFront on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .list_concatenate_front(cache_name, "list_name", vec!["value1", "value2"])\n      .await?;\n  println!("Elements prepended to list");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listlength",children:"ListLength"}),"\n",(0,s.jsx)(t.p,{children:"Get the length of an existing list item"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be checked."})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"length()"}),": Number"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateBack(cacheName, 'test-list', ['one', 'two', 'three']);\nconst result = await cacheClient.listLength(cacheName, 'test-list');\nif (result instanceof CacheListLength.Hit) {\n  console.log(`Length of list 'test-list' is ${result.length()}`);\n} else if (result instanceof CacheListLength.Miss) {\n  console.log(`List 'test-list' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheListLength.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListLength on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _length: u32 = cache_client\n      .list_length(cache_name, "list_name")\n      .await?\n      .try_into()\n      .expect("Expected a list length!");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listpopback",children:"ListPopBack"}),"\n",(0,s.jsx)(t.p,{children:"Remove and return the last element from a list item."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be retrieved."})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"valueString()"}),": String"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"valueBytes()"}),": Bytes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toString()"}),": truncated valueString()"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateBack(cacheName, 'test-list', ['one', 'two', 'three']);\nconst result = await cacheClient.listPopBack(cacheName, 'test-list');\nif (result instanceof CacheListPopBack.Hit) {\n  console.log(`Last value was removed successfully from list 'test-list': ${result.valueString()}`);\n} else if (result instanceof CacheListPopBack.Miss) {\n  console.log(`List 'test-list' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheListPopBack.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPopBack on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _popped_value: String = cache_client\n      .list_pop_back(cache_name, "list_name")\n      .await?\n      .try_into()\n      .expect("Expected a popped list value!");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listpopfront",children:"ListPopFront"}),"\n",(0,s.jsx)(t.p,{children:"Remove and return the first element from a list item."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be retrieved."})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hit","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"valueString()"}),": String"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"valueBytes()"}),": Bytes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toString()"}),": truncated valueString()"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Miss"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateFront(cacheName, 'test-list', ['one', 'two', 'three']);\nconst result = await cacheClient.listPopFront(cacheName, 'test-list');\nif (result instanceof CacheListPopFront.Hit) {\n  console.log(`First value was removed successfully from list 'test-list': ${result.valueString()}`);\n} else if (result instanceof CacheListPopFront.Miss) {\n  console.log(`List 'test-list' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheListPopFront.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPopFront on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _popped_value: String = cache_client\n      .list_pop_front(cache_name, "list_name")\n      .await?\n      .try_into()\n      .expect("Expected a popped list value!");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listpushback",children:"ListPushBack"}),"\n",(0,s.jsxs)(t.p,{children:["Push a value to the end of a list item. This is exactly like passing just one value to ",(0,s.jsx)(t.a,{href:"#listconcatenateback",children:"ListConcatenateBack"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsx)(t.td,{children:"String | Bytes"}),(0,s.jsx)(t.td,{children:"Value to be added."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"truncateBackToSize"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"#truncate-to-size",children:"truncate to size"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Success","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"listLength()"}),": Number - the new length of the list item"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toString()"}),": String - add the listLength"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateBack(cacheName, 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listPushBack(cacheName, 'test-list', 'x');\nif (result instanceof CacheListPushBack.Success) {\n  console.log(\"Value 'x' added successfully to back of list 'test-list'\");\n} else if (result instanceof CacheListPushBack.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPushBack on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listpushfront",children:"ListPushFront"}),"\n",(0,s.jsxs)(t.p,{children:["Push a value to the beginning of a list item. Just like ",(0,s.jsx)(t.a,{href:"#listpushback",children:"ListPushBack"}),", but to the front."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsx)(t.td,{children:"String | Bytes"}),(0,s.jsx)(t.td,{children:"Value to be added to the list item by the operation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"truncateBackToSize"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"#truncate-to-size",children:"truncate to size"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Success","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"listLength()"}),": Number - the new length of the list"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toString()"}),": String - add the listLength"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateFront(cacheName, 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listPushFront(cacheName, 'test-list', 'x');\nif (result instanceof CacheListPushFront.Success) {\n  console.log(\"Value 'x' added successfully to front of list 'test-list'\");\n} else if (result instanceof CacheListPushFront.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPushFront on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listremovevalue",children:"ListRemoveValue"}),"\n",(0,s.jsx)(t.p,{children:"Remove all elements in a list item equal to a particular value."}),"\n",(0,s.jsx)(t.p,{children:"Examples"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you have the list ",(0,s.jsx)(t.code,{children:"['up', 'up', 'down', 'down', 'left', 'right']"})," and remove \u2018up\u2019 the list will be ",(0,s.jsx)(t.code,{children:"['down', 'down', 'left', 'right']"})]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsx)(t.td,{children:"String | Bytes"}),(0,s.jsx)(t.td,{children:"Value to be added to the list item by the operation."})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsx)(t.p,{children:"Responses"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Success - even if the value does not exist"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateFront(cacheName, 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listRemoveValue(cacheName, 'test-list', 'b');\nif (result instanceof CacheListRemoveValue.Success) {\n  console.log(\"Value 'b' removed successfully from list 'test-list'\");\n} else if (result instanceof CacheListRemoveValue.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListRemoveValue on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .list_remove_value(cache_name, "list_name", "value1")\n      .await?;\n  println!("Value removed from list");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"listretain",children:"ListRetain"}),"\n",(0,s.jsx)(t.p,{children:"Retains only slice of the list where the start is inclusive and the end is exclusive.  The items outside of this range will be dropped from the list."}),"\n",(0,s.jsx)(t.p,{children:"Example:\nFor the specified list, start at index 4 (the startIndex) and keep the next five elements, end at index 10 (the endIndex). Discard all other elements in the list. In this example, elements at position 0-3 and 9 or higher are dropped."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cacheName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the cache."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"listName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the list item to be set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startIndex"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsx)(t.td,{children:"The starting inclusive element of the list to retain. Default is 0."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"endIndex"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsx)(t.td,{children:"The ending exclusive element of the list to retain. Default is end of list."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ttl"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,s.jsx)(t.td,{children:"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client."})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Method response object"}),(0,s.jsx)(t.p,{children:"Responses"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Success - even if the value does not exist"}),"\n",(0,s.jsx)(t.li,{children:"Error"}),"\n"]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,s.jsx)(r.r,{js:"await cacheClient.listConcatenateFront(cacheName, 'test-list', ['a', 'b', 'c', 'd', 'e', 'f']);\nconst result = await cacheClient.listRetain(cacheName, 'test-list', {startIndex: 1, endIndex: 4});\nif (result instanceof CacheListRetain.Success) {\n  console.log(\"Retaining elements from index 1 to 4 from list 'test-list'\");\n} else if (result instanceof CacheListRetain.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListRetain on list 'test-list' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h2,{id:"truncate-to-size",children:"Truncate to size"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"#listconcatenateback",children:"ListConcatenate"})," and ",(0,s.jsx)(t.a,{href:"#listpushback",children:"ListPush"})," type API calls all have truncation options. If after adding their elements the list exceeds this size, this list will be truncated."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Example: If the list is ",(0,s.jsx)(t.code,{children:"[1, 2, 3]"})," and you ListConcatenateBack ",(0,s.jsx)(t.code,{children:"[4, 5, 6]"})," with ",(0,s.jsx)(t.code,{children:"truncateFrontToSize: 5"})," the list will be truncated to ",(0,s.jsx)(t.code,{children:"[2, 3, 4, 5, 6]"})," and the response ListLength will be 5."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Example: If the list is ",(0,s.jsx)(t.code,{children:"[1, 2, 3]"})," and you ListConcatenateBack ",(0,s.jsx)(t.code,{children:"[4, 5, 6]"})," with ",(0,s.jsx)(t.code,{children:"truncateFrontToSize: 10"})," the list will not be truncated. It will be ",(0,s.jsx)(t.code,{children:"[1, 2, 3, 4, 5, 6]"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164);const i={tabItem:"tabItem_Ymn6"};var r=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>L});var s=n(6540),i=n(4164),r=n(3104),l=n(6347),c=n(205),a=n(7485),h=n(1682),o=n(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=u(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[h,d]=x({queryString:n,groupId:i}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,o.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),m=(()=>{const e=h??p;return j({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),o=e=>{const t=e.currentTarget,n=a.indexOf(t),i=c[n].value;i!==s&&(h(t),l(i))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:d,onClick:o,...r,className:(0,i.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function L(e){const t=(0,f.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},1441:(e,t,n)=>{n(6540)},5347:(e,t,n)=>{n.d(t,{r:()=>c});var s=n(1470),i=n(9365),r=n(1432),l=(n(6540),n(4848));const c=e=>{let{js:t,python:n,java:c,kotlin:a,go:h,csharp:o,php:d,rust:u,ruby:j,elixir:x,swift:p,dart:f,cli:m}=e;return t||n||c||a||h||o||d||u||j||x||p||f||m?(0,l.jsxs)(s.A,{children:[t&&(0,l.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,l.jsx)(r.A,{language:"js",children:t})}),n&&(0,l.jsx)(i.A,{value:"python",label:"Python",children:(0,l.jsx)(r.A,{language:"python",children:n})}),c&&(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(r.A,{language:"java",children:c})}),a&&(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(r.A,{language:"kotlin",children:a})}),h&&(0,l.jsx)(i.A,{value:"go",label:"Go",children:(0,l.jsx)(r.A,{language:"go",children:h})}),o&&(0,l.jsx)(i.A,{value:"csharp",label:"C#",children:(0,l.jsx)(r.A,{language:"csharp",children:o})}),d&&(0,l.jsx)(i.A,{value:"php",label:"PHP",children:(0,l.jsx)(r.A,{language:"php",children:d})}),u&&(0,l.jsx)(i.A,{value:"rust",label:"Rust",children:(0,l.jsx)(r.A,{language:"rust",children:u})}),j&&(0,l.jsx)(i.A,{value:"ruby",label:"Ruby",children:(0,l.jsx)(r.A,{language:"ruby",children:j})}),x&&(0,l.jsx)(i.A,{value:"elixir",label:"Elixir",children:(0,l.jsx)(r.A,{language:"elixir",children:x})}),p&&(0,l.jsx)(i.A,{value:"swift",label:"Swift",children:(0,l.jsx)(r.A,{language:"swift",children:p})}),f&&(0,l.jsx)(i.A,{value:"dart",label:"Dart",children:(0,l.jsx)(r.A,{language:"dart",children:f})}),m&&(0,l.jsx)(i.A,{value:"cli",label:"CLI",children:(0,l.jsx)(r.A,{language:"cli",children:m})})]}):null}}}]);