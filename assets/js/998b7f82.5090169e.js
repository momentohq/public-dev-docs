"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[961],{3043:(e,t,i)=>{i(7294)},7235:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(614),n=i(7294);const a=e=>{let{language:t,code:i}=e;return n.createElement(o.Z,{language:t},i)}},2715:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=i(7462),n=(i(7294),i(3905)),a=(i(3043),i(7235));const s={sidebar_position:1,sidebar_label:"Topics",sidebar_class_name:"sidebar-item-dart",title:"Getting started with Momento Topics in Dart",description:"Learn the basic building blocks for writing Dart code to interact with Momento Topics in your Flutter client applications. You can target browsers, iOS, and Android from a single code base.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","ios","flutter","dart","web","browser"]},r="Getting Started with Momento Topics in Dart",c={unversionedId:"sdks/dart/topics",id:"sdks/dart/topics",title:"Getting started with Momento Topics in Dart",description:"Learn the basic building blocks for writing Dart code to interact with Momento Topics in your Flutter client applications. You can target browsers, iOS, and Android from a single code base.",source:"@site/docs/sdks/dart/topics.mdx",sourceDirName:"sdks/dart",slug:"/sdks/dart/topics",permalink:"/sdks/dart/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/dart/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",sidebar_class_name:"sidebar-item-dart",title:"Getting started with Momento Topics in Dart",description:"Learn the basic building blocks for writing Dart code to interact with Momento Topics in your Flutter client applications. You can target browsers, iOS, and Android from a single code base.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","ios","flutter","dart","web","browser"]}},l={},p=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-momento-topics-in-dart"},"Getting Started with Momento Topics in Dart"),(0,n.kt)("p",null,"If you need to get going quickly with Dart and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dart/tree/main/example"},"Check the Dart SDK examples")," for complete, working code samples."),(0,n.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,n.kt)("p",null,"The Momento Dart SDK is available on ",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/packages/momento"},"pub.dev as ",(0,n.kt)("inlineCode",{parentName:"a"},"momento")),"."),(0,n.kt)("p",null,"To install in your Dart program, use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub add momento\n")),(0,n.kt)("p",null,"To install in your Flutter program, use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add momento\n")),(0,n.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,n.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,n.kt)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,n.kt)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,n.kt)(a.Z,{language:"dart",code:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,n.kt)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,n.kt)(a.Z,{language:"dart",code:'final result = await topicClient.publish("cache", "topic", "hello message!");\nswitch (result) {\n  case TopicPublishSuccess():\n    print("Successful publish!");\n  case TopicPublishError():\n    print("Publish error: ${result.errorCode} ${result.message}");\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,n.kt)("p",null,'This is an example of subscribing to a topic called "topic", then catching the return value to check if it was successful. If a subscription was received, an ',(0,n.kt)("inlineCode",{parentName:"p"},"await for")," loop is used to asynchronously receive and print the messages that are published to this topic."),(0,n.kt)(a.Z,{language:"dart",code:'final subscription = await topicClient.subscribe("test-cache", "test-topic");\nfinal messageStream = switch (subscription) {\n  TopicSubscription() => subscription.stream,\n  TopicSubscribeError() => throw Exception(\n      "Subscribe error: ${subscription.errorCode} ${subscription.message}"),\n};\n\n// cancel subscription 5 seconds from now\nTimer(const Duration(seconds: 5), () {\n  print("Cancelling subscription!");\n  subscription.unsubscribe();\n});\n\ntry {\n  await for (final msg in messageStream) {\n    switch (msg) {\n      case TopicSubscriptionItemBinary():\n        print("Binary value: ${msg.value}");\n      case TopicSubscriptionItemText():\n        print("String value: ${msg.value}");\n    }\n  }\n} catch (e) {\n  print("Runtime type: ${e.runtimeType}");\n  print("Error with await for loop: $e");\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"running-the-code"},"Running the code"),(0,n.kt)("p",null,"You can find complete, working examples in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dart/tree/main/example"},"Dart SDK GitHub repo examples directory"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}m.isMDXComponent=!0}}]);