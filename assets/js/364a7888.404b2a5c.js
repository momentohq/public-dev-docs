"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8047],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(614),n=o(7294);const s=e=>{let{language:t,code:o}=e;return n.createElement(i.Z,{language:t},o)}},3412:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=o(7462),n=(o(7294),o(3905)),s=(o(3043),o(7235));const a={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","rust","tokio"]},r="Getting Started with Momento Topics in Rust",c={unversionedId:"sdks/rust/topics",id:"sdks/rust/topics",title:"Getting started with Momento Topics in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Topics.",source:"@site/docs/sdks/rust/topics.mdx",sourceDirName:"sdks/rust",slug:"/sdks/rust/topics",permalink:"/sdks/rust/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/rust/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","rust","tokio"]}},l={},p=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],u={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-momento-topics-in-rust"},"Getting Started with Momento Topics in Rust"),(0,n.kt)("p",null,"If you need to get going quickly with Rust and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-rust/tree/main/example"},"Check the Rust SDK examples")," for complete, working code samples."),(0,n.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,n.kt)("p",null,"The Momento SDK is available on crates.io: ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/momento"},(0,n.kt)("inlineCode",{parentName:"a"},"momento")),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/momento"},"crates.io")," to find the latest available version of the SDK.")),(0,n.kt)("p",null,"Install the client library in an existing Rust project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add momento\n")),(0,n.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,n.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,n.kt)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,n.kt)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,n.kt)(s.Z,{language:"rust",code:'  let _topic_client = TopicClient::builder()\n      .configuration(momento::topics::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var("MOMENTO_API_KEY")?)\n      .build()?;',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,n.kt)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,n.kt)(s.Z,{language:"rust",code:'  topic_client\n      .publish(cache_name, topic_name, "Hello, Momento!")\n      .await?;\n  println!("Published message");',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,n.kt)("p",null,'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'),(0,n.kt)(s.Z,{language:"rust",code:'  // Make a subscription\n  let mut subscription = topic_client\n      .subscribe(cache_name, topic_name)\n      .await\n      .expect("subscribe rpc failed");\n\n  // Consume the subscription\n  while let Some(item) = subscription.next().await {\n      println!("Received subscription item: {item:?}")\n  }',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"running-the-code"},"Running the code"),(0,n.kt)("p",null,"You can find complete, working examples in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-rust/tree/main/example"},"Rust SDK GitHub repo examples directory"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}m.isMDXComponent=!0}}]);