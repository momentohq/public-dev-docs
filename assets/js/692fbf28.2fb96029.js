"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4734],{3736:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=l(4848),o=l(8453),i=(l(1441),l(5347));const r={sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache."},s="CollectionTTL object API reference",c={id:"cache/develop/api-reference/collection-ttl",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache.",source:"@site/docs/cache/develop/api-reference/collection-ttl.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/collection-ttl",permalink:"/cache/develop/api-reference/collection-ttl",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/collection-ttl.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache."},sidebar:"cacheSidebar",previous:{title:"HTTP API",permalink:"/cache/develop/api-reference/http-api"},next:{title:"Response objects",permalink:"/cache/develop/api-reference/response-objects"}},a={},h=[{value:"Compatible data types",id:"compatible-data-types",level:2},{value:"Default Behavior",id:"default-behavior",level:2},{value:"Examples",id:"examples",level:2},{value:"Constructor parameters",id:"constructor-parameters",level:2},{value:"Additional constructors",id:"additional-constructors",level:2},{value:"Instance methods",id:"instance-methods",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"collectionttl-object-api-reference",children:"CollectionTTL object API reference"})}),"\n",(0,t.jsx)(n.p,{children:"The CollectionTtl type is used when performing write operations on a collection."}),"\n",(0,t.jsx)(n.p,{children:"Sometimes, when you update a collection, you want to refresh the TTL. Other times you want to keep the TTL the same. The\nCollectionTtl parameter allows you to specify this behavior."}),"\n",(0,t.jsxs)(n.p,{children:["The default behavior is that the collection TTL is reset whenever a write operation occurs. You cannot provide a CollectionTTL object when performing a read operation like ",(0,t.jsx)(n.code,{children:"dictionaryFetch"})," or ",(0,t.jsx)(n.code,{children:"listLength"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/cache/learn/how-it-works/expire-data-with-ttl",children:"Expire Data with TTL"})," for more information on how TTL works with Momento Cache."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The CollectionTTL specifies the TTL for the entire collection, ",(0,t.jsx)(n.em,{children:"not"})," for setting the TTL of individual elements within a collection. The elements within will not expire if the collection does not expire."]})}),"\n",(0,t.jsx)(n.h2,{id:"compatible-data-types",children:"Compatible data types"}),"\n",(0,t.jsxs)(n.p,{children:["The CollectionTTL object is compatible with the following ",(0,t.jsx)(n.a,{href:"/cache/develop/basics/datatypes#collection-data-types-cdts",children:"collection data types"})," ",(0,t.jsx)(n.em,{children:"when performing write operations"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cache/develop/api-reference/dictionary-collections",children:"Dictionary"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cache/develop/api-reference/list-collections",children:"List"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cache/develop/api-reference/set-collections",children:"Set"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cache/develop/api-reference/sorted-set-collections",children:"Sorted Set"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As the image below illustrates, collections are considered ",(0,t.jsx)(n.code,{children:"items"})," that may contain ",(0,t.jsx)(n.code,{children:"elements"}),"."]}),"\n",(0,t.jsx)("img",{src:"/img/collection_data_types.png",alt:"Collection data types drawing | Momento Cache",width:"80%"}),"\n",(0,t.jsx)(n.h2,{id:"default-behavior",children:"Default Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"CollectionTtl"})," parameter is optional for all collection write operations."]}),"\n",(0,t.jsxs)(n.li,{children:["If a CollectionTTL is not specified, a default value of ",(0,t.jsx)(n.code,{children:"CollectionTtl.fromCacheTtl()"})," will be used. This value is the default TTL configured on the cache client."]}),"\n",(0,t.jsx)(n.li,{children:"The TTL for the collection will be refreshed any time the collection is modified."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"If you need a behavior other than the default, you can provide a CollectionTtl object for any collection write operation."}),"\n",(0,t.jsxs)(n.p,{children:["To specify an explicit TTL to refresh the collection to on a write operation, you can use ",(0,t.jsx)(n.code,{children:"CollectionTtl.of()"}),":"]}),"\n",(0,t.jsx)(i.r,{js:"CollectionTtl.of(20 * 60); // 20 minutes",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.p,{children:"This is a convenience method that is equivalent to calling the constructor directly:"}),"\n",(0,t.jsx)(i.r,{js:"const ttlSeconds = 20 * 60; // 20 minutes\nconst refreshTtl = true;\nnew CollectionTtl(ttlSeconds, refreshTtl);",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsxs)(n.p,{children:["If you want to specify a TTL that is only set when the collection is created, but not refreshed on subsequent writes, you can use ",(0,t.jsx)(n.code,{children:"withNoRefreshTtlOnUpdates()"}),":"]}),"\n",(0,t.jsx)(i.r,{js:"CollectionTtl.of(20 * 60).withNoRefreshTtlOnUpdates(); // 20 minutes, only when collection is created",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.p,{children:"This is also a convenience method that is equivalent to calling the constructor directly:"}),"\n",(0,t.jsx)(i.r,{js:"const ttlSeconds = 20 * 60; // 20 minutes\nconst refreshTtl = false;\nnew CollectionTtl(ttlSeconds, refreshTtl);",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.h2,{id:"constructor-parameters",children:"Constructor parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ttl"}),": duration - (optional)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If no TTL is given, the TTL set in the current client connection object is used."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refreshTtl"}),": boolean = true","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If set to true, the collection\u2019s TTL will be reset to the provided value."}),"\n",(0,t.jsx)(n.li,{children:"If set to false, the existing TTL set on the collection is retained."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-constructors",children:"Additional constructors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fromCacheTtl()"}),": CollectionTtl - uses the client\u2019s TTL, equivalent to ",(0,t.jsx)(n.code,{children:"CollectionTtl(null, true)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"of(ttl: duration)"}),": CollectionTtl - equivalent to ",(0,t.jsx)(n.code,{children:"CollectionTtl(ttl, true)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refreshTtlIfProvided(ttl?: duration)"}),": CollectionTtl - if a value is provided, it will refresh the collection's TTL. If no value is provided, it will not refresh the TTL."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ttlSeconds()"}),": duration - Returns the TTL in seconds"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ttlMilliseconds()"}),": duration - Returns the TTL in milliseconds"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refreshTtl()"}),": boolean - Sets if the TTL should be refreshed when the item is modified"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withRefreshTtlOnUpdates()"}),": CollectionTtl - a copy, but refresh is true"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withNoRefreshTtlOnUpdates()"}),": CollectionTtl - a copy, but refresh is false"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toString()"}),": displays the TTL in seconds and the refreshTtl configuration"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1441:(e,n,l)=>{l(6540)},5347:(e,n,l)=>{l.d(n,{r:()=>T});var t=l(1470),o=l(9365),i=l(1432),r=(l(6540),l(7293)),s=l(4848);const c="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",a="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",h="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",d="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",p="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",x="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",m="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",u="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",j="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",f="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",b="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",T=e=>{let{js:n,python:l,java:T,kotlin:v,go:g,csharp:w,php:y,rust:A,ruby:C,elixir:k,swift:L,dart:_,cli:I}=e;return n||l||T||v||g||w||y||A||C||k||L||_||I?(0,s.jsxs)(t.A,{children:[n&&(0,s.jsxs)(o.A,{value:"js",label:"JavaScript",children:[(0,s.jsx)(i.A,{language:"js",children:n}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),l&&(0,s.jsxs)(o.A,{value:"python",label:"Python",children:[(0,s.jsx)(i.A,{language:"python",children:l}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),T&&(0,s.jsxs)(o.A,{value:"java",label:"Java",children:[(0,s.jsx)(i.A,{language:"java",children:T}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,s.jsxs)(o.A,{value:"kotlin",label:"Kotlin",children:[(0,s.jsx)(i.A,{language:"kotlin",children:v}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),g&&(0,s.jsxs)(o.A,{value:"go",label:"Go",children:[(0,s.jsx)(i.A,{language:"go",children:g}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,s.jsxs)(o.A,{value:"csharp",label:"C#",children:[(0,s.jsx)(i.A,{language:"csharp",children:w}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,s.jsxs)(o.A,{value:"php",label:"PHP",children:[(0,s.jsx)(i.A,{language:"php",children:y}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,s.jsxs)(o.A,{value:"rust",label:"Rust",children:[(0,s.jsx)(i.A,{language:"rust",children:A}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),C&&(0,s.jsx)(o.A,{value:"ruby",label:"Ruby",children:(0,s.jsx)(i.A,{language:"ruby",children:C})}),k&&(0,s.jsxs)(o.A,{value:"elixir",label:"Elixir",children:[(0,s.jsx)(i.A,{language:"elixir",children:k}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),L&&(0,s.jsxs)(o.A,{value:"swift",label:"Swift",children:[(0,s.jsx)(i.A,{language:"swift",children:L}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),_&&(0,s.jsxs)(o.A,{value:"dart",label:"Dart",children:[(0,s.jsx)(i.A,{language:"dart",children:_}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),I&&(0,s.jsx)(o.A,{value:"cli",label:"CLI",children:(0,s.jsx)(i.A,{language:"cli",children:I})})]}):null}}}]);