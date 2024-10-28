"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5112],{20798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(74848),o=t(28453),a=(t(51441),t(35347));const i={sidebar_position:6,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Developing applications with Momento SDKs",s={id:"cache/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/docs/cache/develop/index.md",sourceDirName:"cache/develop",slug:"/cache/develop/",permalink:"/cache/develop/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"cacheSidebar",previous:{title:"API Caching",permalink:"/cache/patterns/api-caching"},next:{title:"API Reference",permalink:"/cache/develop/api-reference/"}},c={},d=[{value:"Constructing a Cache Client",id:"constructing-a-cache-client",level:2},{value:"Instantiating credential providers using Momento API keys",id:"instantiating-credential-providers-using-momento-api-keys",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"developing-applications-with-momento-sdks",children:"Developing applications with Momento SDKs"})}),"\n",(0,r.jsx)(n.p,{children:"Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called API keys), how to configure your client, and some basic information about error handling and production readiness."}),"\n",(0,r.jsx)(n.h2,{id:"constructing-a-cache-client",children:"Constructing a Cache Client"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CacheClient"})," is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a ",(0,r.jsx)(n.code,{children:"CredentialProvider"}),", a ",(0,r.jsx)(n.code,{children:"Configuration"}),", and a default time to live (TTL) value. The default TTL determines how long items using that ",(0,r.jsx)(n.code,{children:"CacheClient"})," will be stored in the cache before the cache deletes them. When performing ",(0,r.jsx)(n.code,{children:"Set"})," operations, you can override this TTL value unique to that operation. See ",(0,r.jsx)(n.a,{href:"./learn/how-it-works/expire-data-with-ttl",children:"Expire data with Time-to-Live (TTL) in Momento Cache"})," for more information."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of how to construct a ",(0,r.jsx)(n.code,{children:"CacheClient"}),":"]}),"\n",(0,r.jsx)(a.r,{js:"return await CacheClient.create({\n  configuration: Configurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});",python:'await CacheClientAsync.create(\n    Configurations.Laptop.latest(),\n    CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),\n    timedelta(seconds=60),\n)\n\n',java:'try (CacheClient cacheClient =\n    CacheClient.create(\n        CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n        Configurations.Laptop.v1(),\n        Duration.ofSeconds(60))) {\n  // ...\n}',kotlin:'CacheClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), Configurations.Laptop.latest, 60.seconds\n).use { cacheClient ->\n    //...\n}',go:'context := context.Background()\ncredentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := 60 * time.Second\neagerConnectTimeout := 30 * time.Second\n\nclient, err = momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest(),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)',csharp:"",php:'\nnew CacheClient(\n    Laptop::latest(),\n    CredentialProvider::fromEnvironmentVariable("MOMENTO_API_KEY"),\n    60\n);',rust:'  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:'config = Momento.Configurations.Laptop.latest()\n\ncredential_provider = Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")\ndefault_ttl_seconds = 60.0\nMomento.CacheClient.create!(config, credential_provider, default_ttl_seconds)',swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let cacheClient = CacheClient(\n        configuration: CacheClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider,\n        defaultTtlSeconds: 10\n    )\n} catch {\n    print("Unable to create cache client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final cacheClient = CacheClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      CacheClientConfigurations.latest(),\n      Duration(seconds: 30));\n} catch (e) {\n  print("Unable to create cache client: $e");\n  exit(1);\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"instantiating-credential-providers-using-momento-api-keys",children:"Instantiating credential providers using Momento API keys"}),"\n",(0,r.jsxs)(n.p,{children:["You need to provide a Momento API key when instantiating a Momento client. If you don't have one yet, you can get one from the ",(0,r.jsx)(n.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),". Once you have a token, provide it to Momento SDKs when you create an instance of ",(0,r.jsx)(n.code,{children:"CredentialProvider"}),". There are convenient factory methods provided to construct a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," object, either from an environment variable or from a String. Below is an example of how to instantiate ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," from an environment variable:"]}),"\n",(0,r.jsx)(a.r,{js:"CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY');",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:'credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}',csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_API_KEY");',rust:'  let _credential_provider = CredentialProvider::from_env_var("MOMENTO_API_KEY".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["If you're storing your Momento auth token in a secret manager such as ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secret Manager"}),", ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/secret-manager",children:"GCP Secret Manager"}),", or a local config file, you must first retrieve the credentials from there and then instantiate a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," from a string, like this:"]}),"\n",(0,r.jsx)(a.r,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:'apiKey := RetrieveApiKeyFromYourSecretsManager()\ncredentialProvider, err = auth.NewStringMomentoTokenProvider(apiKey)\nif err != nil {\n\tfmt.Println("Error parsing API key:", err)\n}',csharp:"",php:"",rust:'  let _credential_provider = CredentialProvider::from_string("my-api-key".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_CredentialProviderFromEnvVar() {\n  let _credential_provider = CredentialProvider::from_env_var("MOMENTO_API_KEY".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["For an example of how to retrieve credentials from AWS Secrets Manager, see ",(0,r.jsx)(n.a,{href:"/cache/integrations/aws-secrets-manager",children:"Retrieving a Momento auth token from AWS Secrets Manager"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For general information on Momento authentication, see ",(0,r.jsx)(n.a,{href:"./develop/authentication",children:"our auth page"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, see our ",(0,r.jsx)(n.a,{href:"./develop/api-reference/response-objects",children:"Response Objects"})," page, and the docs for the specific SDK that you are using (under ",(0,r.jsx)(n.code,{children:"Develop"}),"->",(0,r.jsx)(n.code,{children:"SDKs"})," in the left nav)."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},51441:(e,n,t)=>{t(96540)},35347:(e,n,t)=>{t.d(n,{r:()=>x});var r=t(11470),o=t(19365),a=t(21432),i=(t(96540),t(27293)),l=t(74848);const s="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",c="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",d="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",h="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",m="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",p="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",u="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",f="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",g="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",_="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",v="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",x=e=>{let{js:n,python:t,java:x,kotlin:b,go:j,csharp:C,php:A,rust:P,ruby:M,elixir:k,swift:y,dart:E,cli:w}=e;return n||t||x||b||j||C||A||P||M||k||y||E||w?(0,l.jsxs)(r.A,{children:[n&&(0,l.jsxs)(o.A,{value:"js",label:"JavaScript",children:[(0,l.jsx)(a.A,{language:"js",children:n}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),t&&(0,l.jsxs)(o.A,{value:"python",label:"Python",children:[(0,l.jsx)(a.A,{language:"python",children:t}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),x&&(0,l.jsxs)(o.A,{value:"java",label:"Java",children:[(0,l.jsx)(a.A,{language:"java",children:x}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),b&&(0,l.jsxs)(o.A,{value:"kotlin",label:"Kotlin",children:[(0,l.jsx)(a.A,{language:"kotlin",children:b}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),j&&(0,l.jsxs)(o.A,{value:"go",label:"Go",children:[(0,l.jsx)(a.A,{language:"go",children:j}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),C&&(0,l.jsxs)(o.A,{value:"csharp",label:"C#",children:[(0,l.jsx)(a.A,{language:"csharp",children:C}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,l.jsxs)(o.A,{value:"php",label:"PHP",children:[(0,l.jsx)(a.A,{language:"php",children:A}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),P&&(0,l.jsxs)(o.A,{value:"rust",label:"Rust",children:[(0,l.jsx)(a.A,{language:"rust",children:P}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),M&&(0,l.jsx)(o.A,{value:"ruby",label:"Ruby",children:(0,l.jsx)(a.A,{language:"ruby",children:M})}),k&&(0,l.jsxs)(o.A,{value:"elixir",label:"Elixir",children:[(0,l.jsx)(a.A,{language:"elixir",children:k}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,l.jsxs)(o.A,{value:"swift",label:"Swift",children:[(0,l.jsx)(a.A,{language:"swift",children:y}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:_,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),E&&(0,l.jsxs)(o.A,{value:"dart",label:"Dart",children:[(0,l.jsx)(a.A,{language:"dart",children:E}),(0,l.jsxs)(i.A,{type:"info",children:["Full example code and imports can be found ",(0,l.jsx)("a",{href:v,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,l.jsx)(o.A,{value:"cli",label:"CLI",children:(0,l.jsx)(a.A,{language:"cli",children:w})})]}):null}}}]);