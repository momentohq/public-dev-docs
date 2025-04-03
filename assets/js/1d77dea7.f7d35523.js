"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2735],{17584:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=a(74848),r=a(28453),o=(a(51441),a(35347));const l={sidebar_position:4,sidebar_label:"Read Concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs"},i="What is Read Concern?",s={id:"cache/learn/how-it-works/read-concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs",source:"@site/docs/cache/learn/how-it-works/read-concern.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/read-concern",permalink:"/cache/learn/how-it-works/read-concern",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/read-concern.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Read Concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs"},sidebar:"cacheSidebar",previous:{title:"Cache eviction vs expiration",permalink:"/cache/learn/how-it-works/cache-eviction-vs-expiration"},next:{title:"Courses"}},c={},d=[];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"what-is-read-concern",children:"What is Read Concern?"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, a Momento Cache follows an eventual consistency model. That is, if you write a value from the cache, and then quickly read it back within a small fraction of a second, there is a slim, but possible chance that the response will not reflect the most recently updated value. Momento clients provide a configuration option ",(0,t.jsx)(n.code,{children:"ReadConcern"}),", which can be used to tune this behavior. The ",(0,t.jsx)(n.code,{children:"ReadConcern"})," configuration can be modified to tune the level of consistency and responsiveness that your system requires. It can be modified accordingly:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Read Concern"}),(0,t.jsx)(n.th,{children:"Operation Count Multiplier"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Balanced"}),(0,t.jsx)(n.td,{children:"1x"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Consistent"}),(0,t.jsx)(n.td,{children:"6x"}),(0,t.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Since this configuration is specified at the client level, it will be used for all api calls from that client. If there are only a few api calls that require read consistency, it is best to create 2 separate clients, one for a ",(0,t.jsx)(n.code,{children:"Consistent"})," ",(0,t.jsx)(n.code,{children:"ReadConcern"}),", and another for a ",(0,t.jsx)(n.code,{children:"Balanced"})," ",(0,t.jsx)(n.code,{children:"ReadConcern"}),". This way, only the consistent read requests will incur the 6x operations count multiplier."]})}),"\n",(0,t.jsxs)(n.p,{children:["An example of instantiating a new client with a ",(0,t.jsx)(n.code,{children:"Consistent"})," ",(0,t.jsx)(n.code,{children:"ReadConcern"})," is shown below:"]}),"\n",(0,t.jsx)(o.r,{js:"return await CacheClient.create({\n  configuration: Configurations.Laptop.v1().withReadConcern(ReadConcern.CONSISTENT),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});",python:"",java:"",kotlin:"",go:'credentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := time.Duration(9999)\neagerConnectTimeout := 30 * time.Second\n\nclient, err := momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest().WithReadConcern(config.CONSISTENT),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(ctx)',csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},51441:(e,n,a)=>{a(96540)},35347:(e,n,a)=>{a.d(n,{r:()=>g});var t=a(11470),r=a(19365),o=a(21432),l=(a(96540),a(27293)),i=a(74848);const s="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",c="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",d="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",h="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",p="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",u="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",m="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",x="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",b="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",f="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",j="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",g=e=>{let{js:n,python:a,java:g,kotlin:v,go:w,csharp:C,php:k,rust:y,ruby:A,elixir:_,swift:R,dart:T,cli:q}=e;return n||a||g||v||w||C||k||y||A||_||R||T||q?(0,i.jsxs)(t.A,{children:[n&&(0,i.jsxs)(r.A,{value:"js",label:"JavaScript",children:[(0,i.jsx)(o.default,{language:"js",children:n}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),a&&(0,i.jsxs)(r.A,{value:"python",label:"Python",children:[(0,i.jsx)(o.default,{language:"python",children:a}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),g&&(0,i.jsxs)(r.A,{value:"java",label:"Java",children:[(0,i.jsx)(o.default,{language:"java",children:g}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,i.jsxs)(r.A,{value:"kotlin",label:"Kotlin",children:[(0,i.jsx)(o.default,{language:"kotlin",children:v}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,i.jsxs)(r.A,{value:"go",label:"Go",children:[(0,i.jsx)(o.default,{language:"go",children:w}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),C&&(0,i.jsxs)(r.A,{value:"csharp",label:"C#",children:[(0,i.jsx)(o.default,{language:"csharp",children:C}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),k&&(0,i.jsxs)(r.A,{value:"php",label:"PHP",children:[(0,i.jsx)(o.default,{language:"php",children:k}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,i.jsxs)(r.A,{value:"rust",label:"Rust",children:[(0,i.jsx)(o.default,{language:"rust",children:y}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,i.jsx)(r.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(o.default,{language:"ruby",children:A})}),_&&(0,i.jsxs)(r.A,{value:"elixir",label:"Elixir",children:[(0,i.jsx)(o.default,{language:"elixir",children:_}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),R&&(0,i.jsxs)(r.A,{value:"swift",label:"Swift",children:[(0,i.jsx)(o.default,{language:"swift",children:R}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),T&&(0,i.jsxs)(r.A,{value:"dart",label:"Dart",children:[(0,i.jsx)(o.default,{language:"dart",children:T}),(0,i.jsxs)(l.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),q&&(0,i.jsx)(r.A,{value:"cli",label:"CLI",children:(0,i.jsx)(o.default,{language:"cli",children:q})})]}):null}}}]);