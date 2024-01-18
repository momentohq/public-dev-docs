"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8099],{5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),i=n(6010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),i=n(7294),a=n(6010),s=n(2466),o=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function m(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,c]=h({queryString:n,groupId:r}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=l??p;return b({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),d(e)}),[c,d,a]),tabValues:a}}var g=n(2389);const v="tabList__CuJ",f="tabItem_LNqP";function T(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),l(r))},b=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:m},s,{className:(0,a.Z)("tabs__item",f,null==s?void 0:s.className,{"tabs__item--active":o===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=d(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",v)},i.createElement(T,(0,r.Z)({},e,t)),i.createElement(w,(0,r.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return i.createElement(E,(0,r.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>o});var r=n(4866),i=n(5162),a=n(614),s=n(7294);const o=e=>{let{js:t,python:n,java:o,kotlin:l,go:c,csharp:u,php:p,rust:m,ruby:b,elixir:h,swift:d,dart:g,cli:v}=e;return t||n||o||l||c||u||p||m||b||h||d||g||v?s.createElement(r.Z,null,t&&s.createElement(i.Z,{value:"js",label:"JavaScript"},s.createElement(a.Z,{language:"js"},t)),n&&s.createElement(i.Z,{value:"python",label:"Python"},s.createElement(a.Z,{language:"python"},n)),o&&s.createElement(i.Z,{value:"java",label:"Java"},s.createElement(a.Z,{language:"java"},o)),l&&s.createElement(i.Z,{value:"kotlin",label:"Kotlin"},s.createElement(a.Z,{language:"kotlin"},l)),c&&s.createElement(i.Z,{value:"go",label:"Go"},s.createElement(a.Z,{language:"go"},c)),u&&s.createElement(i.Z,{value:"csharp",label:"C#"},s.createElement(a.Z,{language:"csharp"},u)),p&&s.createElement(i.Z,{value:"php",label:"PHP"},s.createElement(a.Z,{language:"php"},p)),m&&s.createElement(i.Z,{value:"rust",label:"Rust"},s.createElement(a.Z,{language:"rust"},m)),b&&s.createElement(i.Z,{value:"ruby",label:"Ruby"},s.createElement(a.Z,{language:"ruby"},b)),h&&s.createElement(i.Z,{value:"elixir",label:"Elixir"},s.createElement(a.Z,{language:"elixir"},h)),d&&s.createElement(i.Z,{value:"swift",label:"Swift"},s.createElement(a.Z,{language:"swift"},d)),g&&s.createElement(i.Z,{value:"dart",label:"Dart"},s.createElement(a.Z,{language:"dart"},g)),v&&s.createElement(i.Z,{value:"cli",label:"CLI"},s.createElement(a.Z,{language:"cli"},v))):null}},6146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),a=(n(3404),n(9720));const s={sidebar_position:1,sidebar_label:"API Reference",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API."},o="Using the Momento Topics API",l={unversionedId:"topics/develop/api-reference/index",id:"topics/develop/api-reference/index",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",source:"@site/docs/topics/develop/api-reference/index.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/",permalink:"/topics/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API Reference",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API."},sidebar:"topicsSidebar",previous:{title:"Develop",permalink:"/topics/develop/"},next:{title:"Auth",permalink:"/topics/develop/api-reference/auth"}},c={},u=[{value:"TopicClient",id:"topicclient",level:2},{value:"Topics methods",id:"topics-methods",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"Example apps using Momento Topics APIs",id:"example-apps-using-momento-topics-apis",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-momento-topics-api"},"Using the Momento Topics API"),(0,i.kt)("p",null,"Momento Topics is a messaging pattern enabling real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic and subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics."),(0,i.kt)("h2",{id:"topicclient"},"TopicClient"),(0,i.kt)("p",null,"Momento Topics API calls are made using a ",(0,i.kt)("inlineCode",{parentName:"p"},"TopicClient")," object."),(0,i.kt)(a.X,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\n    TopicConfigurations.Laptop.latest(),\n    new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")\n);\n',php:"",rust:"",ruby:"",elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("h2",{id:"topics-methods"},"Topics methods"),(0,i.kt)("h3",{id:"subscribe"},"Subscribe"),(0,i.kt)("p",null,"This method subscribes to a topic to receive new values with a stateful connection."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the cache where the topic exists.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topicName"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the topic to subscribe to.")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Method response object"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Success - Returns a subscription object."),(0,i.kt)("li",{parentName:"ul"},"Error")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/topics/develop/api-reference/response-objects"},"response objects")," for specific information."),(0,i.kt)("p",null,"With the returned subscription object, once put in a for loop, your code will receive an event when a new value is published to the Topic.")),(0,i.kt)(a.X,{js:"const result = await topicClient.subscribe('test-cache', 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Publishing values to the topic 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  // Publish a value\n  await topicClient.publish('test-cache', 'test-topic', 'test-value');\n\n  // Wait for published values to be received.\n  setTimeout(() => {\n    console.log('Waiting for the published values');\n  }, 2000);\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n',java:"",kotlin:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}',go:'// Instantiate subscriber\nsub, subErr := client.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}',csharp:'var produceCancellation = new CancellationTokenSource();\nproduceCancellation.CancelAfter(2000);\n\nvar subscribeResponse = await topicClient.SubscribeAsync("test-cache", "test-topic");\nswitch (subscribeResponse)\n{\n    case TopicSubscribeResponse.Subscription subscription:\n        var cancellableSubscription = subscription.WithCancellation(produceCancellation.Token);\n\n        await Task.Delay(1_000);\n        await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\n        await Task.Delay(1_000);\n\n        await foreach (var message in cancellableSubscription)\n        {\n            switch (message)\n            {\n                case TopicMessage.Binary:\n                    Console.WriteLine("Received unexpected binary message from topic.");\n                    break;\n                case TopicMessage.Text text:\n                    Console.WriteLine($"Received string message from topic: {text.Value}");\n                    break;\n                case TopicMessage.Error error:\n                    throw new Exception($"An error occurred while receiving topic message: {error.ErrorCode}: {error}");\n                default:\n                    throw new Exception("Bad message received");\n            }\n        }\n        subscription.Dispose();\n        break;\n    case TopicSubscribeResponse.Error error:\n        throw new Exception($"An error occurred subscribing to a topic: {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",swift:'let subscribeResponse = await topicClient.subscribe(cacheName: cacheName, topicName: "topic")\n\n#if swift(>=5.9)\nlet subscription = switch subscribeResponse {\n    case .error(let err): fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub): sub\n}\n#else \nlet subscription: TopicSubscription\nswitch subscribeResponse {\n    case .error(let err):\n        fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub):\n        subscription = sub\n}\n#endif\n\n// unsubscribe in 5 seconds\nTask {\n    try await Task.sleep(nanoseconds: 5_000_000_000)\n    subscription.unsubscribe()\n}\n\n// loop over messages as they are received\nfor try await item in subscription.stream {\n    var value: String = ""\n    switch item {\n    case .itemText(let textItem):\n        value = textItem.value\n        print("Subscriber recieved text message: \\(value)")\n    case .itemBinary(let binaryItem):\n        value = String(decoding: binaryItem.value, as: UTF8.self)\n        print("Subscriber recieved binary message: \\(value)")\n    case .error(let err):\n        print("Subscriber received error: \\(err)")\n    }\n}',dart:'final subscription = await topicClient.subscribe("test-cache", "test-topic");\nfinal messageStream = switch (subscription) {\n  TopicSubscription() => subscription.stream,\n  TopicSubscribeError() => throw Exception(\n      "Subscribe error: ${subscription.errorCode} ${subscription.message}"),\n};\n\n// cancel subscription 5 seconds from now\nTimer(const Duration(seconds: 5), () {\n  print("Cancelling subscription!");\n  subscription.unsubscribe();\n});\n\ntry {\n  await for (final msg in messageStream) {\n    switch (msg) {\n      case TopicSubscriptionItemBinary():\n        print("Binary value: ${msg.value}");\n      case TopicSubscriptionItemText():\n        print("String value: ${msg.value}");\n    }\n  }\n} catch (e) {\n  print("Runtime type: ${e.runtimeType}");\n  print("Error with await for loop: $e");\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("h3",{id:"publish"},"Publish"),(0,i.kt)("p",null,"Publishes a message to a topic."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the cache where the topic exists.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topicName"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the topic to publish the value to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"String / bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Value to publish to the topic.")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Method response object"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Success"),(0,i.kt)("li",{parentName:"ul"},"Error")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/topics/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,i.kt)(a.X,{js:"const result = await topicClient.publish('test-cache', 'test-topic', 'test-topic-value');\nif (result instanceof TopicPublish.Success) {\n  console.log(\"Value published to topic 'test-topic'\");\n} else if (result instanceof TopicPublish.Error) {\n  throw new Error(\n    `An error occurred while attempting to publish to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n',java:"",kotlin:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}',go:'_, err := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}',csharp:'var publishResponse =\n     await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\nswitch (publishResponse)\n{\n    case TopicPublishResponse.Success:\n        Console.WriteLine("Successfully published message to \'test-topic\'");\n        break;\n    case TopicPublishResponse.Error error:\n        throw new Exception($"An error occurred while publishing topic message: {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",swift:'let result = await topicClient.publish(\n    cacheName: cacheName,\n    topicName: "topic",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully published message!")\ncase .error(let err):\n    print("Unable to publish message: \\(err)")\n    exit(1)\n}',dart:'final result = await topicClient.publish("cache", "topic", "hello message!");\nswitch (result) {\n  case TopicPublishSuccess():\n    print("Successful publish!");\n  case TopicPublishError():\n    print("Publish error: ${result.errorCode} ${result.message}");\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.kt)("h2",{id:"example-apps-using-momento-topics-apis"},"Example apps using Momento Topics APIs"),(0,i.kt)("p",null,"A growing list of example apps using the Momento Topics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice"},"A serverless item publishing microservice")," This microservice is written in TypeScript and runs on AWS using API Gateway, a Lambda function, and Momento Topics. It can be used by any of your other services (with the correct security on API Gateway) to publish messages to various topics that are then subscribed to by other applications. You pass into this API a ",(0,i.kt)("inlineCode",{parentName:"li"},"topicName")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"topicValue")," and this service publishes the value to that topic.")))}m.isMDXComponent=!0}}]);