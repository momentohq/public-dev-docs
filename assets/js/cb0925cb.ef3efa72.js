"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1841],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(614),i=o(7294);const a=e=>{let{language:t,code:o}=e;return i.createElement(n.Z,{language:t},o)}},3399:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(7462),i=(o(7294),o(3905)),a=(o(3043),o(7235));const s={sidebar_position:4,sidebar_label:"Topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},r="Getting Started with Momento Topics in JavaScript",c={unversionedId:"sdks/nodejs/topics",id:"sdks/nodejs/topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",source:"@site/docs/sdks/nodejs/topics.mdx",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/topics",permalink:"/sdks/nodejs/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/topics.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]}},p={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a TopicClient object",id:"import-libraries-and-create-a-topicclient-object",level:2},{value:"Subscribe and publish a message to a topic",id:"subscribe-and-publish-a-message-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:l};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-momento-topics-in-javascript"},"Getting Started with Momento Topics in JavaScript"),(0,i.kt)("p",null,"Momento provides two JavaScript SDKs; ",(0,i.kt)("a",{parentName:"p",href:"/sdks/nodejs"},"one for Node.js")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdks/web"},"one for browsers other web applications"),". The two SDKs have identical APIs, so your code will look the same except for ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments."),(0,i.kt)("p",null,"This page contains the basics that you will need in order to get going quickly with Momento Topics. For more in-depth information and examples, visit the SDK pages linked above."),(0,i.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,i.kt)("p",null,"To Install the Momento Node.js SDK in an existing Node.js project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,i.kt)("p",null,"OR, to install the Momento Web SDK in an existing browser application project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk-web\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You only need one of the two libraries; either ",(0,i.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk-web"),", depending on your target platform. You do not need both.")),(0,i.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,i.kt)("p",null,"You'll need a ",(0,i.kt)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"Momento API key")," to authenticate with Momento. You can get one, preferably a fine-grained token, from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have a token, store it in an environment variable so that the Momento client can consume it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,i.kt)("h2",{id:"import-libraries-and-create-a-topicclient-object"},"Import libraries and create a TopicClient object"),(0,i.kt)("p",null,"This code sets up the main function, pulls in the necessary imports, and instantiates the TopicClient that will be used to interact with your pub/sub topic."),(0,i.kt)(a.Z,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {TopicClient, TopicConfigurations, CredentialProvider} from '@gomomento/sdk';\n\nfunction main() {\n  const cacheClient = new TopicClient({\n    configuration: TopicConfigurations.Default.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n  });\n}\n\ntry {\n  main();\n} catch (e) {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e;\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"subscribe-and-publish-a-message-to-a-topic"},"Subscribe and publish a message to a topic"),(0,i.kt)("p",null,'This example subscribes to a topic called "test-topic" in the Momento Cache named "test-cache", then it publishes to the topic if the subscription is successful.'),(0,i.kt)(a.Z,{language:"javascript",code:"const result = await topicClient.subscribe(cacheName, 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Received an item on subscription for 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  console.log(\"Publishing a value to the topic 'test-topic'\");\n  // Publish a value\n  await topicClient.publish(cacheName, 'test-topic', 'test-value');\n\n  console.log('Waiting for the published value to be received.');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"running-the-code"},"Running the code"),(0,i.kt)("p",null,"You can find complete, working examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples"},"JavaScript SDK GitHub repo examples directory"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,i.kt)("a",{parentName:"p",href:"/cache/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls."),(0,i.kt)("p",{parentName:"admonition"},"Follow this link to see this same type of code but for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts"},"more advanced calls"),".")))}m.isMDXComponent=!0}}]);