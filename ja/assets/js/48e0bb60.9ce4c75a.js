"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9730],{7943:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(4848),o=r(8453),a=(r(1441),r(5347));const i={sidebar_position:6,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Developing applications with Momento SDKs",s={id:"storage/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/storage/develop/index.md",sourceDirName:"storage/develop",slug:"/storage/develop/",permalink:"/ja/storage/develop/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/storage/develop/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"storageSidebar",previous:{title:"Momento Storage",permalink:"/ja/storage/"},next:{title:"API Reference",permalink:"/ja/storage/develop/api-reference/"}},c={},d=[{value:"Constructing a Storage Client",id:"constructing-a-storage-client",level:2},{value:"Instantiating credential providers using Momento API keys",id:"instantiating-credential-providers-using-momento-api-keys",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"developing-applications-with-momento-sdks",children:"Developing applications with Momento SDKs"})}),"\n",(0,t.jsx)(n.p,{children:"\u3088\u3046\u3053\u305d \u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento\u306e\u3059\u3079\u3066\u306eSDK\u3067Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a2\u30bb\u30f3\u30d6\u30eb\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u4e00\u822c\u7684\u306a\u69cb\u6210\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento\u306e\u8a8d\u8a3c\u60c5\u5831\uff08API\u30ad\u30fc\u3068\u547c\u3070\u308c\u307e\u3059\uff09\u306e\u63d0\u4f9b\u65b9\u6cd5\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u672c\u756a\u74b0\u5883\u3078\u306e\u6e96\u5099\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"constructing-a-storage-client",children:"Constructing a Storage Client"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"StorageClient"})," \u306f\u3001Momento \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30e1\u30a4\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308b\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001 ",(0,t.jsx)(n.code,{children:"CredentialProvider"})," \u3068 ",(0,t.jsx)(n.code,{children:"Configuration"})," \u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306b ",(0,t.jsx)(n.code,{children:"StorageClient"})," \u306e\u4f5c\u6210\u4f8b\u3092\u793a\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(a.r,{js:"return new PreviewStorageClient({\n  configuration: StorageConfigurations.Laptop.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});",python:"",java:'try (PreviewStorageClient storageClient =\n    new PreviewStorageClient(\n        CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n        StorageConfigurations.Laptop.latest())) {\n  // ...\n}',kotlin:"",go:'credentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\nstorageClient, err = momento.NewPreviewStorageClient(config.StorageLaptopLatest(), credentialProvider)\nif err != nil {\n\tpanic(err)\n}',csharp:"",php:"",rust:'  let _storage_client = PreviewStorageClient::builder()\n      .configuration(momento::storage::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(n.h2,{id:"instantiating-credential-providers-using-momento-api-keys",children:"Instantiating credential providers using Momento API keys"}),"\n",(0,t.jsxs)(n.p,{children:["Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u969b\u306b\u3001Momento API\u30ad\u30fc\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u3060\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(n.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"})," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001",(0,t.jsx)(n.code,{children:"CredentialProvider"})," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b Momento SDK \u306b\u30c8\u30fc\u30af\u30f3\u3092\u6e21\u3059\u3002\u74b0\u5883\u5909\u6570\u307e\u305f\u306f\u6587\u5b57\u5217\u304b\u3089 ",(0,t.jsx)(n.code,{children:"CredentialProvider"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30d5\u30a1\u30af\u30c8\u30ea\u30e1\u30bd\u30c3\u30c9\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u74b0\u5883\u5909\u6570\u304b\u3089 ",(0,t.jsx)(n.code,{children:"CredentialProvider"})," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,t.jsx)(a.r,{js:"CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY');",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:'credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}',csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_API_KEY");',rust:'  let _credential_provider = CredentialProvider::from_env_var("MOMENTO_API_KEY".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",ts:""}),"\n",(0,t.jsxs)(n.p,{children:["Momento\u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secret Manager"}),"\u3084",(0,t.jsx)(n.a,{href:"https://cloud.google.com/secret-manager",children:"GCP Secret Manager"}),"\u306a\u3069\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u3084\u30ed\u30fc\u30ab\u30eb\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u307e\u305a\u305d\u3053\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u6b21\u306e\u3088\u3046\u306b\u6587\u5b57\u5217\u304b\u3089",(0,t.jsx)(n.code,{children:"CredentialProvider"}),"\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(a.r,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:'apiKey := RetrieveApiKeyFromYourSecretsManager()\ncredentialProvider, err = auth.NewStringMomentoTokenProvider(apiKey)\nif err != nil {\n\tfmt.Println("Error parsing API key:", err)\n}',csharp:"",php:"",rust:'  let _credential_provider = CredentialProvider::from_string("my-api-key".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_CredentialProviderFromEnvVar() {\n  let _credential_provider = CredentialProvider::from_env_var("MOMENTO_API_KEY".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",ts:""}),"\n",(0,t.jsxs)(n.p,{children:["AWS Secrets Manager\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"/cache/integrations/aws-secrets-manager",children:"Retrieving a Momento auth token from AWS Secrets Manager"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"./develop/api-reference",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u30da\u30fc\u30b8\u3084\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u7279\u5b9a\u306e",(0,t.jsx)(n.a,{href:"/platform/sdks",children:"SDK"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1441:(e,n,r)=>{r(6540)},5347:(e,n,r)=>{r.d(n,{r:()=>v});var t=r(1470),o=r(9365),a=r(1432),i=(r(6540),r(7293)),l=r(4848);const s="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",c="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",d="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",p="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",m="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",h="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",g="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",u="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",_="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",f="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",x="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",v=e=>{let{js:n,python:r,java:v,kotlin:b,go:j,csharp:A,php:P,rust:k,ruby:M,elixir:C,swift:w,dart:E,cli:y}=e;return n||r||v||b||j||A||P||k||M||C||w||E||y?(0,l.jsxs)(t.A,{children:[n&&(0,l.jsxs)(o.A,{value:"js",label:"JavaScript",children:[(0,l.jsx)(a.A,{language:"js",children:n}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),r&&(0,l.jsxs)(o.A,{value:"python",label:"Python",children:[(0,l.jsx)(a.A,{language:"python",children:r}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,l.jsxs)(o.A,{value:"java",label:"Java",children:[(0,l.jsx)(a.A,{language:"java",children:v}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),b&&(0,l.jsxs)(o.A,{value:"kotlin",label:"Kotlin",children:[(0,l.jsx)(a.A,{language:"kotlin",children:b}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),j&&(0,l.jsxs)(o.A,{value:"go",label:"Go",children:[(0,l.jsx)(a.A,{language:"go",children:j}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,l.jsxs)(o.A,{value:"csharp",label:"C#",children:[(0,l.jsx)(a.A,{language:"csharp",children:A}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),P&&(0,l.jsxs)(o.A,{value:"php",label:"PHP",children:[(0,l.jsx)(a.A,{language:"php",children:P}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),k&&(0,l.jsxs)(o.A,{value:"rust",label:"Rust",children:[(0,l.jsx)(a.A,{language:"rust",children:k}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),M&&(0,l.jsx)(o.A,{value:"ruby",label:"Ruby",children:(0,l.jsx)(a.A,{language:"ruby",children:M})}),C&&(0,l.jsxs)(o.A,{value:"elixir",label:"Elixir",children:[(0,l.jsx)(a.A,{language:"elixir",children:C}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:_,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,l.jsxs)(o.A,{value:"swift",label:"Swift",children:[(0,l.jsx)(a.A,{language:"swift",children:w}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),E&&(0,l.jsxs)(o.A,{value:"dart",label:"Dart",children:[(0,l.jsx)(a.A,{language:"dart",children:E}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,l.jsx)(o.A,{value:"cli",label:"CLI",children:(0,l.jsx)(a.A,{language:"cli",children:y})})]}):null}}}]);