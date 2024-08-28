"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6863],{4652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(4848),o=n(8453),s=(n(2821),n(503));const r={sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},c="Getting Started with Momento Topics in Go",a={id:"platform/sdks/go/topics",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",source:"@site/docs/platform/sdks/go/topics.mdx",sourceDirName:"platform/sdks/go",slug:"/platform/sdks/go/topics",permalink:"/ja/platform/sdks/go/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/go/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/ja/platform/sdks/go/cache"},next:{title:"Storage",permalink:"/ja/platform/sdks/go/storage"}},l={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-momento-topics-in-go",children:"Getting Started with Momento Topics in Go"})}),"\n",(0,i.jsxs)(t.p,{children:["If you need to get going quickly with Go and Momento Topics, this page contains the basic API calls you'll need. ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Check the Go SDK examples"})," for complete, working code samples."]}),"\n",(0,i.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,i.jsxs)(t.p,{children:["After you have ",(0,i.jsx)(t.a,{href:"https://go.dev/doc/code#Command",children:"created your Go project"}),", install the Momento Go SDK."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cli",children:"go get github.com/momentohq/client-sdk-go\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-your-momento-api-key",children:"Get your Momento API key"}),"\n",(0,i.jsxs)(t.p,{children:["You'll need a Momento API key. You can get one from the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-topicclient",children:"Set up a TopicClient"}),"\n",(0,i.jsx)(t.p,{children:"This code creates the TopicClient that you will use to interact with your pub/sub topic."}),"\n",(0,i.jsx)(s.F,{language:"go",code:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err = momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"publish-a-message-to-a-topic",children:"Publish a message to a topic"}),"\n",(0,i.jsx)(t.p,{children:'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'}),"\n",(0,i.jsx)(s.F,{language:"go",code:'_, err := topicClient.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"subscribe-to-a-topic",children:"Subscribe to a topic"}),"\n",(0,i.jsx)(t.p,{children:'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'}),"\n",(0,i.jsx)(s.F,{language:"go",code:'// Instantiate subscriber\nsub, subErr := topicClient.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := topicClient.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\n// Receive only subscription items with messages\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}\n\n// Receive all subscription events (messages, discontinuities, heartbeats)\nevent, err := sub.Event(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch e := event.(type) {\ncase momento.TopicHeartbeat:\n\tfmt.Printf("received heartbeat\\n")\ncase momento.TopicDiscontinuity:\n\tfmt.Printf("received discontinuity\\n")\ncase momento.TopicItem:\n\tfmt.Printf(\n\t\t"received message with sequence number %d and publisher id %s: %v \\n",\n\t\te.GetTopicSequenceNumber(),\n\t\te.GetPublisherId(),\n\t\te.GetValue(),\n\t)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,i.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-go/tree/main/examples",children:"Go SDK GitHub repo examples directory"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,i.jsx)(t.a,{href:"/topics/develop/api-reference",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var i=n(1432),o=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,o.jsx)(i.A,{language:t,children:n})}}}]);