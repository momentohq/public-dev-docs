"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5289],{359:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(4848),o=i(8453),s=(i(2821),i(503));const r={sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","java","jvm"]},a="Getting Started with Momento Topics in Kotlin",c={id:"platform/sdks/kotlin/topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",source:"@site/docs/platform/sdks/kotlin/topics.mdx",sourceDirName:"platform/sdks/kotlin",slug:"/platform/sdks/kotlin/topics",permalink:"/platform/sdks/kotlin/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/kotlin/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","java","jvm"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/platform/sdks/kotlin/cache"},next:{title:"Rust",permalink:"/platform/sdks/rust/"}},l={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getting-started-with-momento-topics-in-kotlin",children:"Getting Started with Momento Topics in Kotlin"})}),"\n",(0,n.jsxs)(t.p,{children:["If you need to get going quickly with Kotlin and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Check the Kotlin SDK examples"})," for complete, working code samples."]}),"\n",(0,n.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,n.jsxs)(t.p,{children:["The Momento SDK is available on Maven Central: ",(0,n.jsx)(t.a,{href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",children:"`software.momento.kotlin/sdk"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",children:"Maven Central"})," to find the latest available version of the SDK."]})}),"\n",(0,n.jsx)(t.p,{children:"Install the client library in an existing Kotlin project:"}),"\n",(0,n.jsx)(t.h3,{id:"gradle",children:"Gradle"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'implementation("software.momento.kotlin:sdk:x.x.x")\n'})}),"\n",(0,n.jsx)(t.h3,{id:"maven",children:"Maven"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>software.momento.kotlin</groupId>\n    <artifactId>sdk</artifactId>\n    <version>x.x.x</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"get-your-momento-api-key",children:"Get your Momento API key"}),"\n",(0,n.jsxs)(t.p,{children:["You'll need a Momento API key. You can get one from the ",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,n.jsx)(t.h2,{id:"set-up-a-topicclient",children:"Set up a TopicClient"}),"\n",(0,n.jsx)(t.p,{children:"This code creates the TopicClient that you will use to interact with your pub/sub topic."}),"\n",(0,n.jsx)(s.F,{language:"kotlin",code:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}'}),"\n",(0,n.jsx)(t.h2,{id:"publish-a-message-to-a-topic",children:"Publish a message to a topic"}),"\n",(0,n.jsx)(t.p,{children:'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'}),"\n",(0,n.jsx)(s.F,{language:"kotlin",code:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}'}),"\n",(0,n.jsx)(t.h2,{id:"subscribe-to-a-topic",children:"Subscribe to a topic"}),"\n",(0,n.jsx)(t.p,{children:'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'}),"\n",(0,n.jsx)(s.F,{language:"kotlin",code:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}'}),"\n",(0,n.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,n.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Kotlin SDK GitHub repo examples directory"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,n.jsx)(t.a,{href:"/topics/develop/api-reference",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2821:(e,t,i)=>{i(6540)},503:(e,t,i)=>{i.d(t,{F:()=>s});var n=i(1432),o=(i(6540),i(4848));const s=e=>{let{language:t,code:i}=e;return(0,o.jsx)(n.A,{language:t,children:i})}}}]);