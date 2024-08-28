"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4454],{4981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=t(4848),o=t(8453),a=(t(2821),t(503));const s={sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Cache in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","jvm","java"]},r="Getting Started with Momento Cache in Kotlin",c={id:"platform/sdks/kotlin/cache",title:"Getting started with Momento Cache in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Cache in your native Android applications, or your JVM server-side applications.",source:"@site/docs/platform/sdks/kotlin/cache.mdx",sourceDirName:"platform/sdks/kotlin",slug:"/platform/sdks/kotlin/cache",permalink:"/platform/sdks/kotlin/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/kotlin/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Cache in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","jvm","java"]},sidebar:"platformSidebar",previous:{title:"Kotlin",permalink:"/platform/sdks/kotlin/"},next:{title:"Topics",permalink:"/platform/sdks/kotlin/topics"}},l={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and instantiate a CacheClient object",id:"import-libraries-and-instantiate-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started-with-momento-cache-in-kotlin",children:"Getting Started with Momento Cache in Kotlin"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to get going quickly with Kotlin and Momento Cache, this page contains the basic API calls you'll need. ",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Check the Kotlin SDK examples"})," for complete, working examples including build configuration files."]}),"\n",(0,i.jsx)(n.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,i.jsxs)(n.p,{children:["The Momento SDK is available on Maven Central: ",(0,i.jsx)(n.a,{href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",children:(0,i.jsx)(n.code,{children:"software.momento.kotlin/sdk"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",children:"Maven Central"})," to find the latest available version of the SDK."]})}),"\n",(0,i.jsx)(n.p,{children:"Install the client library in an existing Kotlin project:"}),"\n",(0,i.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'implementation("software.momento.kotlin:sdk:x.x.x")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>software.momento.kotlin</groupId>\n    <artifactId>sdk</artifactId>\n    <version>x.x.x</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,i.jsxs)(n.p,{children:["You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,i.jsx)(n.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"import-libraries-and-instantiate-a-cacheclient-object",children:"Import libraries and instantiate a CacheClient object"}),"\n",(0,i.jsx)(n.p,{children:"This code sets up the main function, the necessary imports, and the CacheClient instantiation that each of the other functions will need to call."}),"\n",(0,i.jsx)(a.F,{language:"kotlin",code:'package software.momento.example.doc_examples\n\nimport kotlinx.coroutines.runBlocking\nimport software.momento.kotlin.sdk.CacheClient\nimport software.momento.kotlin.sdk.auth.CredentialProvider\nimport software.momento.kotlin.sdk.config.Configurations\nimport software.momento.kotlin.sdk.responses.cache.GetResponse\nimport kotlin.time.Duration.Companion.seconds\n\nfun main() = runBlocking {\n    CacheClient(\n        CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n        Configurations.Laptop.latest,\n        60.seconds\n    ).use { client ->\n        //...\n    }\n}\n'}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,i.jsx)(n.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,i.jsx)(a.F,{language:"kotlin",code:'when (val response = cacheClient.createCache("test-cache")) {\n    is CacheCreateResponse.Success -> println("Cache \'test-cache\' created")\n    is CacheCreateResponse.AlreadyExists -> println("Cache \'test-cache\' already exists")\n    is CacheCreateResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to create cache \'test-cache\': ${response.errorCode}", response\n    )\n}'}),"\n",(0,i.jsx)(n.h2,{id:"list-the-names-of-existing-caches-in-your-account",children:"List the names of existing caches in your account"}),"\n",(0,i.jsx)(n.p,{children:"A simple list of the names of caches for the account."}),"\n",(0,i.jsx)(a.F,{language:"kotlin",code:'when (val response: CacheListResponse = cacheClient.listCaches()) {\n    is CacheListResponse.Success -> {\n        val caches: String = response.caches.joinToString("\\n") { cacheInfo -> cacheInfo.name }\n        println("Caches:\\n$caches")\n    }\n\n    is CacheListResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to list caches: ${response.errorCode}", response\n    )\n}'}),"\n",(0,i.jsx)(n.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,i.jsx)(n.p,{children:"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."}),"\n",(0,i.jsx)(a.F,{language:"kotlin",code:'when (val response = cacheClient.set("test-cache", "test-key", "test-value")) {\n    is SetResponse.Success -> println("Key \'test-key\' stored successfully")\n    is SetResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': ${response.errorCode}",\n        response\n    )\n}'}),"\n",(0,i.jsx)(n.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,i.jsx)(n.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,i.jsx)(a.F,{language:"kotlin",code:"when (val response = cacheClient.get(\"test-cache\", \"test-key\")) {\n    is GetResponse.Hit -> println(\"Retrieved value for key 'test-key': ${response.value}\")\n    is GetResponse.Miss -> println(\"Key 'test-key' was not found in cache 'test-cache'\")\n    is GetResponse.Error -> throw RuntimeException(\n        \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${response.errorCode}\",\n        response\n    )\n}"}),"\n",(0,i.jsx)(n.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,i.jsxs)(n.p,{children:["You can find complete, working examples in the ",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Kotlin SDK github repo examples directory"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Beyond these basic API calls check out the ",(0,i.jsx)(n.a,{href:"/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2821:(e,n,t)=>{t(6540)},503:(e,n,t)=>{t.d(n,{F:()=>a});var i=t(1432),o=(t(6540),t(4848));const a=e=>{let{language:n,code:t}=e;return(0,o.jsx)(i.A,{language:n,children:t})}}}]);