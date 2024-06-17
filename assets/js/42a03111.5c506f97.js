"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9364],{4314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(4848),o=t(8453);const s={sidebar_position:11,sidebar_label:"Amazon EventBridge",title:"Momento + Amazon EventBridge",description:"Trigger async events in Momento directly with Amazon EventBridge!"},a=void 0,r={id:"cache/develop/integrations/amazon-eventbridge",title:"Momento + Amazon EventBridge",description:"Trigger async events in Momento directly with Amazon EventBridge!",source:"@site/docs/cache/develop/integrations/amazon-eventbridge.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/amazon-eventbridge",permalink:"/cache/develop/integrations/amazon-eventbridge",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/amazon-eventbridge.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Amazon EventBridge",title:"Momento + Amazon EventBridge",description:"Trigger async events in Momento directly with Amazon EventBridge!"},sidebar:"tutorialSidebar",previous:{title:"Deno",permalink:"/cache/develop/integrations/deno"},next:{title:"Drupal",permalink:"/cache/develop/integrations/drupal-integration"}},l={},c=[{value:"Deploying to AWS",id:"deploying-to-aws",level:2},{value:"Resources",id:"resources",level:3},{value:"Triggering the API calls",id:"triggering-the-api-calls",level:2},{value:"Setting a cache item",id:"setting-a-cache-item",level:3},{value:"Deleting a cache item",id:"deleting-a-cache-item",level:3},{value:"Publishing to a topic",id:"publishing-to-a-topic",level:3},{value:"Possible use cases",id:"possible-use-cases",level:2},{value:"Example",id:"example",level:2},{value:"Try it out!",id:"try-it-out",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["If you build event-driven architectures in AWS, you're likely familiar with ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/eventbridge/",children:"Amazon EventBridge"}),". This serverless event bus service helps you filter, transform, route, and deliver events with robust error handling and high availability. Wouldn't it be great if you could use it directly with Momento? Good news, you can!"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"On this page you'll learn some general-purpose patterns for connecting EventBridge to Momento."}),(0,i.jsxs)(n.p,{children:["For a more concrete example, check out our ",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/aws/eventbridge",children:"DynamoDB-Momento EventBridge Demo"}),"!\nThis project shows how to create a write-through cache in Momento using DynamoDB Streams and AWS EventBridge.\nWith this app, you can create, update, and delete items in a DynamoDB table, and see these changes reflected in the cache/topic in real-time."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Using the Momento ",(0,i.jsx)(n.a,{href:"/cache/develop/api-reference/http-api",children:"HTTP API"})," and ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",children:"Amazon EventBridge API Destinations"}),", you can trigger asynchronous events with a simple ",(0,i.jsx)(n.code,{children:"PutEvents"})," call in your workflows. Here's how it works:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Diagram of compute resources triggering an event that calls Momento",src:t(936).A+"",width:"800",height:"443"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A compute service calls the ",(0,i.jsx)(n.code,{children:"PutEvents"})," API for EventBridge"]}),"\n",(0,i.jsxs)(n.li,{children:["EventBridge routes the event to qualifying ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html",children:"rules"})," based on the content of the event"]}),"\n",(0,i.jsx)(n.li,{children:"The qualifying rule will invoke an API destination"}),"\n",(0,i.jsxs)(n.li,{children:["The API destination looks up the auth token from ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secrets Manager"})]}),"\n",(0,i.jsx)(n.li,{children:"The event payload is transformed and calls the Momento HTTP API"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Given the event-based nature of this workflow, ",(0,i.jsx)(n.em,{children:"it is an asynchronous process"})," and your code will not wait for completion before continuing. If something goes wrong or the API returns an error, the message will be delivered to a ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/what-is/dead-letter-queue/",children:"dead letter queue"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For the tl;dr, you can deploy the EventBridge resources directly into your account by clicking this button ",(0,i.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml",children:(0,i.jsx)(n.img,{alt:"Launch stack button",src:t(4262).A+"",width:"144",height:"27"})})]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-to-aws",children:"Deploying to AWS"}),"\n",(0,i.jsxs)(n.p,{children:["When you hit the ",(0,i.jsx)(n.em,{children:"Launch stack"})," button above, it will open a tab to the CloudFormation console in AWS. The screen will prompt you for your Momento auth token, which can be created via the ",(0,i.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"Momento Console"}),". You can create a super user token in the region you want to deploy this stack into. Once you generate your token, come back to the console and fill in the property. This will be stored securely in Secrets Manager on your behalf."]}),"\n",(0,i.jsxs)(n.p,{children:["You optionally can provide the EventBridge event bus name that will rules will trigger from. It automatically fills in the ",(0,i.jsx)(n.em,{children:"default"})," event bus, but you can use any existing event bus you'd like. The deployment will fail if you do not provide a valid bus name."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CloudFormation UI with deployment parameters configured",src:t(1548).A+"",width:"800",height:"415"})}),"\n",(0,i.jsxs)(n.p,{children:["With the two parameters filled out, you can hit ",(0,i.jsx)(n.em,{children:"Create stack"})," and the resources will be deployed automatically for you, optimized for your deployment region. ",(0,i.jsx)(n.em,{children:"Wondering what that means?"})," Momento, like AWS, is region-based, and your auth tokens target a specific region. For the HTTP API, this means you must ",(0,i.jsx)(n.a,{href:"/cache/develop/api-reference/http-api#regions",children:"hit a different base URL"})," depending on the region you wish to use. The quick start we've provided will determine the appropriate base URL upon deployment so you don't have to think about it \ud83d\udc4d"]}),"\n",(0,i.jsx)(n.p,{children:"This also means the integration will only work in the Momento-supported AWS Regions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"us-east-1"}),"\n",(0,i.jsx)(n.li,{children:"us-west-2"}),"\n",(0,i.jsx)(n.li,{children:"ap-northeast-1"}),"\n",(0,i.jsx)(n.li,{children:"ap-south-1"}),"\n",(0,i.jsx)(n.li,{children:"eu-west-1"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:"The deployed stack will create the following resources in your AWS account:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1x ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_Connection.html",children:"EventBridge Connection"})," - for storing connection info to Momento"]}),"\n",(0,i.jsxs)(n.li,{children:["3x EventBridge API Destinations - ",(0,i.jsx)(n.em,{children:"Cache Item Set"}),", ",(0,i.jsx)(n.em,{children:"Cache Item Delete"}),", ",(0,i.jsx)(n.em,{children:"Topic Publish"})]}),"\n",(0,i.jsx)(n.li,{children:"3x EventBridge Rules - for triggering the API calls"}),"\n",(0,i.jsx)(n.li,{children:"1x IAM Role - to allow EventBridge to invoke the destinations when the rules are triggered"}),"\n",(0,i.jsx)(n.li,{children:"1x SQS Queue - for Dead Letter Queue on failed delivery"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you wish to see the raw CloudFormation template, ",(0,i.jsx)(n.a,{href:"https://momento-developers.s3.amazonaws.com/api-destinations.yaml",children:"click here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"triggering-the-api-calls",children:"Triggering the API calls"}),"\n",(0,i.jsxs)(n.p,{children:["We currently support three API calls with this integration, ",(0,i.jsx)(n.em,{children:"Cache Item Set"}),", ",(0,i.jsx)(n.em,{children:"Cache Item Delete"}),", and ",(0,i.jsx)(n.em,{children:"Topic Publish"}),". To invoke one of these rules, you must put an event on the configured event bus."]}),"\n",(0,i.jsx)(n.h3,{id:"setting-a-cache-item",children:"Setting a cache item"}),"\n",(0,i.jsx)(n.p,{children:"To set a cache item, publish an event with the following information:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Detail Type"}),": ",(0,i.jsx)(n.em,{children:"cacheSet"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'{\n  "cacheName": "<your cache name>",\n  "key": "<cache item key>",\n  "key_base64": "<cache item key base-64 encoded>",\n  "message": "<value to save to the cache item>",\n  "ttl": 60 // time to live in seconds \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["All values are required and the name of the cache must be a valid, existing cache available in your account. If you don't have a cache, you can ",(0,i.jsx)(n.a,{href:"https://console.gomomento.com",children:"create one here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"NOTE -"})," The ",(0,i.jsx)(n.code,{children:"key"})," and ",(0,i.jsx)(n.code,{children:"key_base64"})," properties are mutually exclusive. If you provide both (or neither) your cache item will not be set."]}),"\n",(0,i.jsx)(n.h3,{id:"deleting-a-cache-item",children:"Deleting a cache item"}),"\n",(0,i.jsx)(n.p,{children:"Cache items will expire automatically but in the event when you need to delete one manually, you can use the following event:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Detail Type"}),": ",(0,i.jsx)(n.em,{children:"cacheDelete"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'{\n  "cacheName": "<your cache name>",\n  "key": "<cache item key>",\n  "key_base64": "<cache item key base-64 encoded>"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Once again, the ",(0,i.jsx)(n.code,{children:"key"})," and ",(0,i.jsx)(n.code,{children:"key_base64"})," properties are mutually exclusive. Providing both will result in an error and your cache item not being deleted."]}),"\n",(0,i.jsx)(n.h3,{id:"publishing-to-a-topic",children:"Publishing to a topic"}),"\n",(0,i.jsx)(n.p,{children:"You can publish to any topic (unless restricted by your provided auth token) with the following event:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Detail Type"}),": ",(0,i.jsx)(n.em,{children:"topicPublish"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'{\n  "cacheName": "<your cache name>",\n  "topicName": "<your topic name>",\n  "message": "<value to publish to the topic>"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"possible-use-cases",children:"Possible use cases"}),"\n",(0,i.jsx)(n.p,{children:"The ability to update a cache item or publish to a topic via EventBridge opens up a wide range of possible use cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Automatically updating or deleting your cache items from a DynamoDB stream using EventBridge pipes"}),"\n",(0,i.jsx)(n.li,{children:"Sending status updates to end users in your user interface directly via a Step Function workflow"}),"\n",(0,i.jsx)(n.li,{children:"Updating cache items from fan-out operations that already use EventBridge"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Below is an example using the AWS SDK v3 for JavaScript to save an item in the cache via an EventBridge event on the default event bus:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const events = new EventBridgeClient(config);\nawait events.send(new PutEventsCommand({\n  Entries: [\n    {\n      Source: 'demo',\n      DetailType: 'cacheSet',\n      Detail: JSON.stringify({\n        cacheName: 'my-cache',\n        key: 'test-key',\n        message: 'hello world!',\n        ttl: 300\n      })\n    }\n  ]\n}));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When that code runs, it will publish an event to the default event bus, the ",(0,i.jsx)(n.em,{children:"Cache Item Set"})," rule will trigger and invoke the API destination, then the cache item will be set in the ",(0,i.jsx)(n.code,{children:"my-cache"})," cache with the value ",(0,i.jsx)(n.em,{children:"hello world!"})," for 5 minutes (300 seconds)."]}),"\n",(0,i.jsx)(n.h2,{id:"try-it-out",children:"Try it out!"}),"\n",(0,i.jsxs)(n.p,{children:["This integration will continue to grow as our HTTP API gains more and more features. You can always come back here, ",(0,i.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml",children:"deploy the stack to your AWS account"})," and get the updated version automatically."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have issues deploying the stack to your account or would like support for another region, feel free to ",(0,i.jsx)(n.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"reach out on Discord"})," and the team will be happy to help you."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4262:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},1548:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/eb-destination-ui-34c37ddb3c254d19440e076344015696.png"},936:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/eventbridge_destinations-580b59cc390bb7ec90d3a04b3aceb187.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);