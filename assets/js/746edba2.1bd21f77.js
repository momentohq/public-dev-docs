"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[874],{9458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(74848),i=a(28453),o=(a(42821),a(70503));const s={sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","java","jvm"]},r="Getting Started with Momento Topics in Java",c={id:"platform/sdks/java/topics",title:"Getting started with Momento Cache in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Cache.",source:"@site/docs/platform/sdks/java/topics.mdx",sourceDirName:"platform/sdks/java",slug:"/platform/sdks/java/topics",permalink:"/platform/sdks/java/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/java/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","java","jvm"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/platform/sdks/java/cache"},next:{title:"Kotlin",permalink:"/platform/sdks/kotlin/"}},l={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getting-started-with-momento-topics-in-java",children:"Getting Started with Momento Topics in Java"})}),"\n",(0,n.jsxs)(t.p,{children:["If you need to get going quickly with Java and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-java/tree/main/examples",children:"Check the Java SDK examples"})," for complete, working code samples."]}),"\n",(0,n.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,n.jsxs)(t.p,{children:["The Momento SDK is available on Maven Central: ",(0,n.jsx)(t.a,{href:"https://central.sonatype.com/artifact/software.momento.java/sdk",children:"`software.momento.java/sdk"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://central.sonatype.com/artifact/software.momento.java/sdk",children:"Maven Central"})," to find the latest available version of the SDK."]})}),"\n",(0,n.jsx)(t.p,{children:"Install the client library in an existing Java project:"}),"\n",(0,n.jsx)(t.h3,{id:"gradle",children:"Gradle"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'implementation("software.momento.java:sdk:1.x.x")\n'})}),"\n",(0,n.jsx)(t.h3,{id:"maven",children:"Maven"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>software.momento.java</groupId>\n    <artifactId>sdk</artifactId>\n    <version>1.x.x</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"get-your-momento-api-key",children:"Get your Momento API key"}),"\n",(0,n.jsxs)(t.p,{children:["You'll need a Momento API key. You can get one from the ",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,n.jsx)(t.h2,{id:"set-up-a-topicclient",children:"Set up a TopicClient"}),"\n",(0,n.jsx)(t.p,{children:"This code creates the TopicClient that you will use to interact with your pub/sub topic."}),"\n",(0,n.jsx)(o.F,{language:"java",code:""}),"\n",(0,n.jsx)(t.h2,{id:"publish-a-message-to-a-topic",children:"Publish a message to a topic"}),"\n",(0,n.jsx)(t.p,{children:'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'}),"\n",(0,n.jsx)(o.F,{language:"java",code:""}),"\n",(0,n.jsx)(t.h2,{id:"subscribe-to-a-topic",children:"Subscribe to a topic"}),"\n",(0,n.jsx)(t.p,{children:'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'}),"\n",(0,n.jsx)(o.F,{language:"java",code:""}),"\n",(0,n.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,n.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-java/tree/main/examples",children:"Java SDK GitHub repo examples directory"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,n.jsx)(t.a,{href:"/topics/api-reference",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},42821:(e,t,a)=>{a(96540)},70503:(e,t,a)=>{a.d(t,{F:()=>o});var n=a(21432),i=(a(96540),a(74848));const o=e=>{let{language:t,code:a}=e;return(0,i.jsx)(n.default,{language:t,children:a})}}}]);