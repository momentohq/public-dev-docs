"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2049],{1947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),o=n(8453),s=(n(2821),n(503));const r={sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","python","asyncio"]},c="Getting Started with Momento Topics in Python",a={id:"platform/sdks/python/topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",source:"@site/docs/platform/sdks/python/topics.mdx",sourceDirName:"platform/sdks/python",slug:"/platform/sdks/python/topics",permalink:"/platform/sdks/python/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/python/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","python","asyncio"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/platform/sdks/python/cache"},next:{title:".NET",permalink:"/platform/sdks/dotnet/"}},p={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-momento-topics-in-python",children:"Getting Started with Momento Topics in Python"})}),"\n",(0,i.jsxs)(t.p,{children:["If you need to get going quickly with Python and Momento Topics, this page contains the basic API calls you'll need. ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-python/tree/main/examples",children:"Check the Python SDK examples"})," for complete, working code samples."]}),"\n",(0,i.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The Momento Python SDK is available on ",(0,i.jsxs)(t.a,{href:"https://pypi.org/project/momento/",children:["pypi as ",(0,i.jsx)(t.code,{children:"momento"})]}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To install in your Python application via pip, use:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install momento\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-your-momento-api-key",children:"Get your Momento API key"}),"\n",(0,i.jsxs)(t.p,{children:["You'll need a Momento API key. You can get one from the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-topicclient",children:"Set up a TopicClient"}),"\n",(0,i.jsx)(t.p,{children:"This code creates the TopicClient that you will use to interact with your pub/sub topic."}),"\n",(0,i.jsx)(s.F,{language:"python",code:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n'}),"\n",(0,i.jsx)(t.h2,{id:"publish-a-message-to-a-topic",children:"Publish a message to a topic"}),"\n",(0,i.jsx)(t.p,{children:'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'}),"\n",(0,i.jsx)(s.F,{language:"python",code:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n'}),"\n",(0,i.jsx)(t.h2,{id:"subscribe-to-a-topic",children:"Subscribe to a topic"}),"\n",(0,i.jsx)(t.p,{children:'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'}),"\n",(0,i.jsx)(s.F,{language:"python",code:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n'}),"\n",(0,i.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,i.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-python/tree/main/examples",children:"Python SDK GitHub repo examples directory"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,i.jsx)(t.a,{href:"/topics/develop/api-reference",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var i=n(1432),o=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,o.jsx)(i.A,{language:t,children:n})}}}]);