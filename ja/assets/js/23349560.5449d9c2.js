"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4247],{6269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(4848),i=n(8453),s=(n(2821),n(503));const r={sidebar_position:4,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},a="Getting Started with Momento Topics in JavaScript",c={id:"platform/sdks/nodejs/topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",source:"@site/docs/platform/sdks/nodejs/topics.mdx",sourceDirName:"platform/sdks/nodejs",slug:"/platform/sdks/nodejs/topics",permalink:"/ja/platform/sdks/nodejs/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/nodejs/topics.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/ja/platform/sdks/nodejs/cache"},next:{title:"Storage",permalink:"/ja/platform/sdks/nodejs/storage"}},l={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a TopicClient object",id:"import-libraries-and-create-a-topicclient-object",level:2},{value:"Subscribe and publish a message to a topic",id:"subscribe-and-publish-a-message-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getting-started-with-momento-topics-in-javascript",children:"Getting Started with Momento Topics in JavaScript"})}),"\n",(0,o.jsxs)(t.p,{children:["Momento provides two JavaScript SDKs; ",(0,o.jsx)(t.a,{href:"/platform/sdks/nodejs",children:"one for Node.js"})," and ",(0,o.jsx)(t.a,{href:"/platform/sdks/web",children:"one for browsers other web applications"}),". The two SDKs have identical APIs, so your code will look the same except for ",(0,o.jsx)(t.code,{children:"import"})," statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments."]}),"\n",(0,o.jsx)(t.p,{children:"This page contains the basics that you will need in order to get going quickly with Momento Topics. For more in-depth information and examples, visit the SDK pages linked above."}),"\n",(0,o.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,o.jsx)(t.p,{children:"To Install the Momento Node.js SDK in an existing Node.js project:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cli",children:"npm install @gomomento/sdk\n"})}),"\n",(0,o.jsx)(t.p,{children:"OR, to install the Momento Web SDK in an existing browser application project:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cli",children:"npm install @gomomento/sdk-web\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["You only need one of the two libraries; either ",(0,o.jsx)(t.code,{children:"@gomomento/sdk"})," or ",(0,o.jsx)(t.code,{children:"@gomomento/sdk-web"}),", depending on your target platform. You do not need both."]})}),"\n",(0,o.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need a ",(0,o.jsx)(t.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"})," to authenticate with Momento. You can get one, preferably a fine-grained token, from the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have a token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento token here>\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"}),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,o.jsx)(t.h2,{id:"import-libraries-and-create-a-topicclient-object",children:"Import libraries and create a TopicClient object"}),"\n",(0,o.jsx)(t.p,{children:"This code sets up the main function, pulls in the necessary imports, and instantiates the TopicClient that will be used to interact with your pub/sub topic."}),"\n",(0,o.jsx)(s.F,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {TopicClient, TopicConfigurations, CredentialProvider} from '@gomomento/sdk';\n\nfunction main() {\n  const cacheClient = new TopicClient({\n    configuration: TopicConfigurations.Default.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n  });\n}\n\ntry {\n  main();\n} catch (e) {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e;\n}\n"}),"\n",(0,o.jsx)(t.h2,{id:"subscribe-and-publish-a-message-to-a-topic",children:"Subscribe and publish a message to a topic"}),"\n",(0,o.jsx)(t.p,{children:'This example subscribes to a topic called "test-topic" in the Momento Cache named "test-cache", then it publishes to the topic if the subscription is successful.'}),"\n",(0,o.jsx)(s.F,{language:"javascript",code:"const result = await topicClient.subscribe(cacheName, 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Received an item on subscription for 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nswitch (result.type) {\n  case TopicSubscribeResponse.Subscription:\n    console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n    console.log(\"Publishing a value to the topic 'test-topic'\");\n    // Publish a value\n    await topicClient.publish(cacheName, 'test-topic', 'test-value');\n\n    console.log('Waiting for the published value to be received.');\n    await new Promise(resolve => setTimeout(resolve, 1000));\n\n    // Need to close the stream before the example ends or else the example will hang.\n    result.unsubscribe();\n    break;\n  case TopicSubscribeResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to subscribe to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,o.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,o.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples",children:"JavaScript SDK GitHub repo examples directory"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,o.jsx)(t.a,{href:"/cache/develop/api-reference",children:"API reference page"})," for more information on the full assortment of Momento API calls."]}),(0,o.jsxs)(t.p,{children:["Follow this link to see this same type of code but for ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts",children:"more advanced calls"}),"."]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var o=n(1432),i=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,i.jsx)(o.A,{language:t,children:n})}}}]);