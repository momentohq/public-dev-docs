"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1928],{9059:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=o(4848),a=o(8453),i=(o(1441),o(5347));const r={sidebar_position:10,sidebar_label:"SDK Configuration Objects",title:"SDK configuration objects",description:"Discover how to use configuration objects to initialize the Momento SDK client.",pagination_prev:null},s="SDK Client configuration objects",l={id:"cache/develop/basics/client-configuration-objects",title:"SDK configuration objects",description:"Discover how to use configuration objects to initialize the Momento SDK client.",source:"@site/docs/cache/develop/basics/client-configuration-objects.md",sourceDirName:"cache/develop/basics",slug:"/cache/develop/basics/client-configuration-objects",permalink:"/cache/develop/basics/client-configuration-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/basics/client-configuration-objects.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"SDK Configuration Objects",title:"SDK configuration objects",description:"Discover how to use configuration objects to initialize the Momento SDK client.",pagination_prev:null},sidebar:"cacheSidebar",next:{title:"SDK Error Handling",permalink:"/cache/develop/basics/error-handling-production-readiness"}},c={},d=[{value:"Pre-built configurations",id:"pre-built-configurations",level:2},{value:"Laptop",id:"laptop",level:3},{value:"Browser",id:"browser",level:3},{value:"InRegion - Default",id:"inregion---default",level:3},{value:"InRegion - Low Latency",id:"inregion---low-latency",level:3},{value:"Lambda",id:"lambda",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sdk-client-configuration-objects",children:"SDK Client configuration objects"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configuration"})," objects contain the settings necessary for how a Momento client should connect to Momento services. The ",(0,t.jsx)(n.code,{children:"Configuration"})," object controls settings such as timeouts, retries, logging, middleware, ",(0,t.jsx)(n.a,{href:"../../learn/how-it-works/read-concern",children:"read concern"}),", and more."]}),"\n",(0,t.jsxs)(n.p,{children:["Each SDK contains pre-built ",(0,t.jsx)(n.code,{children:"Configuration"})," objects to help get you up and running as quickly as possible. We did the hard work of tuning for various deployment environments so you can focus on the things unique to your business. (We even have a blog series about it! ",(0,t.jsx)(n.a,{href:"https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you",children:"Shockingly simple: Cache clients that do the hard work for you"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Pre-built configurations come with a ",(0,t.jsx)(n.code,{children:"latest()"})," version, which will always give you the latest recommended configuration for a given environment. For example,"]}),"\n",(0,t.jsx)(i.r,{js:"Configurations.InRegion.Default.latest();",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"latest()"})," pre-built configuration may change between SDK releases as we continue to test, tune, and deliver better settings. If you would like to ensure your configuration does not change with an SDK upgrade, we provide fixed versions such as ",(0,t.jsx)(n.code,{children:"v1()"}),", which are guaranteed to remain static from one release to the next. For example,"]}),"\n",(0,t.jsx)(i.r,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsxs)(n.p,{children:["If you need a custom configuration, you can build your own ",(0,t.jsx)(n.code,{children:"Configuration"})," object. See the examples in the ",(0,t.jsx)(n.code,{children:"Configurations"})," namespace in the source code of each SDK to see how they are constructed."]}),"\n",(0,t.jsxs)(n.p,{children:["We hope these configurations will meet the needs of most use cases, but if you find them lacking in any way, please open a GitHub issue on that SDK repo, or contact us at ",(0,t.jsx)(n.code,{children:"support@momentohq.com"}),". We would love to hear about your use case so we can fix or extend the pre-built configurations to better support you."]}),"\n",(0,t.jsx)(n.h2,{id:"pre-built-configurations",children:"Pre-built configurations"}),"\n",(0,t.jsx)(n.p,{children:"Here are some of the pre-built configurations that you might be interested in."}),"\n",(0,t.jsx)(n.h3,{id:"laptop",children:"Laptop"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configurations.Laptop"})," is a development environment, just for poking around on your... laptop :) It has relaxed timeouts and assumes your network latencies might be a bit high."]}),"\n",(0,t.jsx)(i.r,{js:"Configurations.Laptop.v1();",python:"",java:"Configurations.Laptop.v1();",kotlin:"Configurations.Laptop.latest",go:"",csharp:"",php:"",rust:'  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.h3,{id:"browser",children:"Browser"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configurations.Browser"})," is a configuration unique to our ",(0,t.jsx)(n.a,{href:"/platform/sdks/web/",children:"web SDK"}),". It has relaxed timeout settings since latencies can be highly variable in individual users' browsers."]}),"\n",(0,t.jsx)(n.h3,{id:"inregion---default",children:"InRegion - Default"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configurations.InRegion.Default"})," is the recommended configuration for most server-side use cases, where you send requests to Momento services from your apps hosted in the same cloud provider Region. It has more aggressive timeouts and retry behavior than the Laptop config, so it will fail faster and allow your application to fall back to your database or other data source more quickly. This helps ensure your applications don't bottleneck on Momento during a network or service interruption."]}),"\n",(0,t.jsx)(i.r,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.h3,{id:"inregion---low-latency",children:"InRegion - Low Latency"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configurations.InRegion.LowLatency"})," is a configuration that prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing some throughput to achieve this. It will time out quicker than the ",(0,t.jsx)(n.code,{children:"InRegion.Default"})," configuration. Use this configuration if the most critical factor is to ensure that cache unavailability doesn't force unacceptably high latencies for your application, and you want to fall back to application logic or an authoritative data source more quickly if the cache hasn't responded."]}),"\n",(0,t.jsx)(i.r,{js:"Configurations.InRegion.LowLatency.v1();",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.h3,{id:"lambda",children:"Lambda"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Configurations.Lambda"})," is a configuration that is available in some SDKs, and is optimized for the AWS Lambda environment. It has configuration settings designed to pre-warm the client on Lambda function cold starts, and to ensure the connection is re-established proactively if a Lambda function remains idle long enough for the connection to time out."]}),"\n",(0,t.jsx)(i.r,{js:"Configurations.Lambda.latest();",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"",swift:"",dart:"",ts:""})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1441:(e,n,o)=>{o(6540)},5347:(e,n,o)=>{o.d(n,{r:()=>j});var t=o(1470),a=o(9365),i=o(1432),r=(o(6540),o(7293)),s=o(4848);const l="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",c="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",d="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",h="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",u="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",p="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",m="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",f="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",g="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",b="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",x="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",j=e=>{let{js:n,python:o,java:j,kotlin:_,go:v,csharp:w,php:y,rust:k,ruby:A,elixir:C,swift:L,dart:I,cli:D}=e;return n||o||j||_||v||w||y||k||A||C||L||I||D?(0,s.jsxs)(t.A,{children:[n&&(0,s.jsxs)(a.A,{value:"js",label:"JavaScript",children:[(0,s.jsx)(i.A,{language:"js",children:n}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),o&&(0,s.jsxs)(a.A,{value:"python",label:"Python",children:[(0,s.jsx)(i.A,{language:"python",children:o}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),j&&(0,s.jsxs)(a.A,{value:"java",label:"Java",children:[(0,s.jsx)(i.A,{language:"java",children:j}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),_&&(0,s.jsxs)(a.A,{value:"kotlin",label:"Kotlin",children:[(0,s.jsx)(i.A,{language:"kotlin",children:_}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,s.jsxs)(a.A,{value:"go",label:"Go",children:[(0,s.jsx)(i.A,{language:"go",children:v}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,s.jsxs)(a.A,{value:"csharp",label:"C#",children:[(0,s.jsx)(i.A,{language:"csharp",children:w}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,s.jsxs)(a.A,{value:"php",label:"PHP",children:[(0,s.jsx)(i.A,{language:"php",children:y}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),k&&(0,s.jsxs)(a.A,{value:"rust",label:"Rust",children:[(0,s.jsx)(i.A,{language:"rust",children:k}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,s.jsx)(a.A,{value:"ruby",label:"Ruby",children:(0,s.jsx)(i.A,{language:"ruby",children:A})}),C&&(0,s.jsxs)(a.A,{value:"elixir",label:"Elixir",children:[(0,s.jsx)(i.A,{language:"elixir",children:C}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),L&&(0,s.jsxs)(a.A,{value:"swift",label:"Swift",children:[(0,s.jsx)(i.A,{language:"swift",children:L}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),I&&(0,s.jsxs)(a.A,{value:"dart",label:"Dart",children:[(0,s.jsx)(i.A,{language:"dart",children:I}),(0,s.jsxs)(r.A,{type:"info",children:["Full example code and imports can be found ",(0,s.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),D&&(0,s.jsx)(a.A,{value:"cli",label:"CLI",children:(0,s.jsx)(i.A,{language:"cli",children:D})})]}):null}}}]);