"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[54],{139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=t(4848),i=t(8453),s=(t(1441),t(5347)),o=t(1470),c=t(9365);const a={sidebar_position:2,sidebar_label:"Topics",title:"Topics API reference",description:"Learn how to interact programmatically with the Momento Topics API.",keywords:["momento","topics","pubsub","pub/sub","eda","event-driven architecture","serverless","resources","api","docs"]},l="Momento Topics\uff08pub/sub\uff09API \u3092\u4f7f\u7528\u3059\u308b",u={id:"topics/api-reference/index",title:"Topics API reference",description:"Learn how to interact programmatically with the Momento Topics API.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/api-reference/index.md",sourceDirName:"topics/api-reference",slug:"/topics/api-reference/",permalink:"/ja/topics/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/api-reference/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Topics",title:"Topics API reference",description:"Learn how to interact programmatically with the Momento Topics API.",keywords:["momento","topics","pubsub","pub/sub","eda","event-driven architecture","serverless","resources","api","docs"]},sidebar:"topicsSidebar",previous:{title:"Overview",permalink:"/ja/topics/"},next:{title:"Auth",permalink:"/ja/topics/api-reference/auth"}},p={},d=[{value:"Topics \u306e\u30e1\u30bd\u30c3\u30c9",id:"topics-\u306e\u30e1\u30bd\u30c3\u30c9",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"TopicClient",id:"topicclient",level:2},{value:"Example apps using Momento Topics APIs",id:"example-apps-using-momento-topics-apis",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"momento-topicspubsubapi-\u3092\u4f7f\u7528\u3059\u308b",children:"Momento Topics\uff08pub/sub\uff09API \u3092\u4f7f\u7528\u3059\u308b"})}),"\n",(0,r.jsx)(n.p,{children:"Momento Topics \u306f\u3001\u5206\u6563\u578b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5404\u90e8\u5206\u9593\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002\u30c8\u30d4\u30c3\u30af\u306e\u5024\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5(\u30d7\u30ed\u30c7\u30e5\u30fc\u30b9)\u3057\u3001\u30c8\u30d4\u30c3\u30af\u304b\u3089\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6(\u30b3\u30f3\u30b7\u30e5\u30fc\u30e0)\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento Topics \u3067\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e Momento API \u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306f",(0,r.jsx)(n.a,{href:"/topics",children:"Momento Topics"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"topics-\u306e\u30e1\u30bd\u30c3\u30c9",children:"Topics \u306e\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,r.jsx)(n.h3,{id:"subscribe",children:"Subscribe"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u63a5\u7d9a\u3067\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306b\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8a00\u8a9e\u306b\u3088\u3063\u3066\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u3001\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8\u3001\u4e0d\u9023\u7d9a\u306a\u3069\u306e\u65b0\u3057\u3044\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3084\u30a4\u30c6\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30a2\u30a4\u30c6\u30e0\u306f\u3001\u6587\u5b57\u5217\u307e\u305f\u306f\u30d0\u30a4\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3001\u30c8\u30d4\u30c3\u30af\u30b7\u30fc\u30b1\u30f3\u30b9\u756a\u53f7\u3001\u4e00\u610f\u306a\u30c8\u30fc\u30af\u30f3\u8b58\u5225\u5b50\u304c\u3042\u308c\u3070\u305d\u308c\u3092\u542b\u307f\u307e\u3059(",(0,r.jsx)(n.a,{href:"https://www.gomomento.com/blog/momento-topics-just-got-more-secure-introducing-embedded-token-identifiers",children:"learn more"}),")\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8\u306f\u63a5\u7d9a\u304c\u307e\u3060\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u9023\u7d9a\u306f\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306b\u4e2d\u65ad\u304c\u3042\u3063\u305f\u3053\u3068\u3092\u793a\u3057\u3001\u3044\u304f\u3064\u304b\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30b9\u30ad\u30c3\u30d7\u3055\u308c\u305f\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u524d"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d"})]})]})]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(c.A,{value:"golang",label:"Go",default:!0,children:(0,r.jsxs)(n.p,{children:["\u3053\u308c\u304c ",(0,r.jsx)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26",children:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"}),"\u3067\u3059\u3002"]})}),(0,r.jsx)(c.A,{value:"nodejs",label:"Node.js",default:!0,children:(0,r.jsx)(n.p,{children:"Coming soon."})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u30e1\u30bd\u30c3\u30c8\u3099\u306e\u30ec\u30b9\u30db\u309a\u30f3\u30b9\u30aa\u30d5\u3099\u30b7\u3099\u30a7\u30af\u30c8"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Success - ",(0,r.jsx)(n.a,{href:"/ja/topics/api-reference/response-objects#subscription",children:"subscription"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"Error"}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,r.jsx)(n.a,{href:"/topics/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,r.jsx)(s.r,{js:"const result = await topicClient.subscribe(cacheName, 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Received an item on subscription for 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nswitch (result.type) {\n  case TopicSubscribeResponse.Subscription:\n    console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n    console.log(\"Publishing a value to the topic 'test-topic'\");\n    // Publish a value\n    await topicClient.publish(cacheName, 'test-topic', 'test-value');\n\n    console.log('Waiting for the published value to be received.');\n    await new Promise(resolve => setTimeout(resolve, 1000));\n\n    // Need to close the stream before the example ends or else the example will hang.\n    result.unsubscribe();\n    break;\n  case TopicSubscribeResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to subscribe to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n',java:"",kotlin:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}',go:'// Instantiate subscriber\nsub, subErr := topicClient.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := topicClient.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\n// Receive only subscription items with messages\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}\n\n// Receive all subscription events (messages, discontinuities, heartbeats)\nevent, err := sub.Event(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch e := event.(type) {\ncase momento.TopicHeartbeat:\n\tfmt.Printf("received heartbeat\\n")\ncase momento.TopicDiscontinuity:\n\tfmt.Printf("received discontinuity\\n")\ncase momento.TopicItem:\n\tfmt.Printf(\n\t\t"received message with sequence number %d and publisher id %s: %v \\n",\n\t\te.GetTopicSequenceNumber(),\n\t\te.GetPublisherId(),\n\t\te.GetValue(),\n\t)\n}',csharp:'var produceCancellation = new CancellationTokenSource();\r\nproduceCancellation.CancelAfter(2000);\r\n\nvar subscribeResponse = await topicClient.SubscribeAsync("test-cache", "test-topic");\r\nswitch (subscribeResponse)\r\n{\r\n    case TopicSubscribeResponse.Subscription subscription:\r\n        var cancellableSubscription = subscription.WithCancellation(produceCancellation.Token);\r\n\n        await Task.Delay(1_000);\r\n        await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\r\n        await Task.Delay(1_000);\r\n\n        await foreach (var message in cancellableSubscription)\r\n        {\r\n            switch (message)\r\n            {\r\n                case TopicMessage.Binary:\r\n                    Console.WriteLine("Received unexpected binary message from topic.");\r\n                    break;\r\n                case TopicMessage.Text text:\r\n                    Console.WriteLine($"Received string message from topic: {text.Value}");\r\n                    break;\r\n                case TopicMessage.Error error:\r\n                    throw new Exception($"An error occurred while receiving topic message: {error.ErrorCode}: {error}");\r\n                default:\r\n                    throw new Exception("Bad message received");\r\n            }\r\n        }\r\n        subscription.Dispose();\r\n        break;\r\n    case TopicSubscribeResponse.Error error:\r\n        throw new Exception($"An error occurred subscribing to a topic: {error.ErrorCode}: {error}");\r\n}\r',php:"",rust:'  // Make a subscription\n  let mut subscription = topic_client\n      .subscribe(cache_name, topic_name)\n      .await\n      .expect("subscribe rpc failed");\n\n  // Consume the subscription\n  while let Some(item) = subscription.next().await {\n      println!("Received subscription item: {item:?}")\n  }',elixir:"",swift:'let subscribeResponse = await topicClient.subscribe(cacheName: cacheName, topicName: "topic")\n\n#if swift(>=5.9)\nlet subscription = switch subscribeResponse {\n    case .error(let err): fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub): sub\n}\n#else \nlet subscription: TopicSubscription\nswitch subscribeResponse {\n    case .error(let err):\n        fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub):\n        subscription = sub\n}\n#endif\n\n// unsubscribe in 5 seconds\nTask {\n    try await Task.sleep(nanoseconds: 5_000_000_000)\n    subscription.unsubscribe()\n}\n\n// loop over messages as they are received\nfor try await item in subscription.stream {\n    var value: String = ""\n    switch item {\n    case .itemText(let textItem):\n        value = textItem.value\n        print("Subscriber recieved text message: \\(value)")\n    case .itemBinary(let binaryItem):\n        value = String(decoding: binaryItem.value, as: UTF8.self)\n        print("Subscriber recieved binary message: \\(value)")\n    case .error(let err):\n        print("Subscriber received error: \\(err)")\n    }\n}',dart:'final subscription = await topicClient.subscribe("test-cache", "test-topic");\nfinal messageStream = switch (subscription) {\n  TopicSubscription() => subscription.stream,\n  TopicSubscribeError() => throw Exception(\n      "Subscribe error: ${subscription.errorCode} ${subscription.message}"),\n};\n\n// cancel subscription 5 seconds from now\nTimer(const Duration(seconds: 5), () {\n  print("Cancelling subscription!");\n  subscription.unsubscribe();\n});\n\ntry {\n  await for (final msg in messageStream) {\n    switch (msg) {\n      case TopicSubscriptionItemBinary():\n        print("Binary value: ${msg.value}");\n      case TopicSubscriptionItemText():\n        print("String value: ${msg.value}");\n    }\n  }\n} catch (e) {\n  print("Runtime type: ${e.runtimeType}");\n  print("Error with await for loop: $e");\n}',ts:""}),"\n",(0,r.jsx)(n.h3,{id:"publish",children:"Publish"}),"\n",(0,r.jsx)(n.p,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u524d"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u5024\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u30c8\u30d4\u30c3\u30af\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"String / bytes"}),(0,r.jsx)(n.td,{children:"\u3000\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u5024"})]})]})]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(c.A,{value:"golang",label:"Go",default:!0,children:(0,r.jsxs)(n.p,{children:["\u3053\u3061\u3089\u304c",(0,r.jsx)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95",children:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"}),"\u3067\u3059\u3002"]})}),(0,r.jsx)(c.A,{value:"nodejs",label:"Node.js",default:!0,children:(0,r.jsx)(n.p,{children:"Coming soon."})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u30e1\u30bd\u30c3\u30c8\u3099\u306e\u30ec\u30b9\u30db\u309a\u30f3\u30b9\u30aa\u30d5\u3099\u30b7\u3099\u30a7\u30af\u30c8"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Success"}),"\n",(0,r.jsx)(n.li,{children:"Error"}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,r.jsx)(n.a,{href:"/topics/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,r.jsx)(s.r,{js:"const result = await topicClient.publish(cacheName, 'test-topic', 'test-topic-value');\nswitch (result.type) {\n  case TopicPublishResponse.Success:\n    console.log(\"Value published to topic 'test-topic'\");\n    break;\n  case TopicPublishResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to publish to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n',java:"",kotlin:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}',go:'_, err := topicClient.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}',csharp:'var publishResponse =\r\n     await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\r\nswitch (publishResponse)\r\n{\r\n    case TopicPublishResponse.Success:\r\n        Console.WriteLine("Successfully published message to \'test-topic\'");\r\n        break;\r\n    case TopicPublishResponse.Error error:\r\n        throw new Exception($"An error occurred while publishing topic message: {error.ErrorCode}: {error}");\r\n}\r',php:"",rust:'  topic_client\n      .publish(cache_name, topic_name, "Hello, Momento!")\n      .await?;\n  println!("Published message");',elixir:"",swift:'let result = await topicClient.publish(\n    cacheName: cacheName,\n    topicName: "topic",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully published message!")\ncase .error(let err):\n    print("Unable to publish message: \\(err)")\n    exit(1)\n}',dart:'final result = await topicClient.publish("cache", "topic", "hello message!");\nswitch (result) {\n  case TopicPublishSuccess():\n    print("Successful publish!");\n  case TopicPublishError():\n    print("Publish error: ${result.errorCode} ${result.message}");\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"topicclient",children:"TopicClient"}),"\n",(0,r.jsx)(n.p,{children:"\u307b\u3068\u3093\u3069\u306e Momento Cache API \u30b3\u30fc\u30eb\u3067\u306f CacheClient \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001Topics \u306b\u3064\u3044\u3066\u306f TopicClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.r,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err = momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\r\n    TopicConfigurations.Laptop.latest(),\r\n    new EnvMomentoTokenProvider("MOMENTO_API_KEY")\r\n);\r',php:"",rust:'  let _topic_client = TopicClient::builder()\n      .configuration(momento::topics::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var("MOMENTO_API_KEY")?)\n      .build()?;',elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"example-apps-using-momento-topics-apis",children:"Example apps using Momento Topics APIs"}),"\n",(0,r.jsx)(n.p,{children:"A growing list of example apps using the Momento Topics."}),"\n",(0,r.jsx)(n.p,{children:"Momento Topics\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u306e\u4f8b\u304c\u7d9a\u3005\u3068\u5897\u3048\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice",children:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9"})," \u3053\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306fTypeScript\u3067\u66f8\u304b\u308c\u3001API Gateway\u3001Lambda\u95a2\u6570\u3001Momento Topics\u3092\u4f7f\u3063\u3066AWS\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b\u3002(API Gateway\u4e0a\u3067\u9069\u5207\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308c\u3070\uff09\u4ed6\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u69d8\u3005\u306a\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3066\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u8cfc\u8aad\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e API \u306b ",(0,r.jsx)(n.code,{children:"topicName"})," \u3068 ",(0,r.jsx)(n.code,{children:"topicValue"})," \u3092\u6e21\u3059\u3068\u3001\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u305d\u306e\u5024\u3092\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>T});var r=t(6540),i=t(4164),s=t(3104),o=t(6347),c=t(205),a=t(7485),l=t(1682),u=t(679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=d(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,p]=b({queryString:t,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),x=(()=>{const e=l??m;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{x&&a(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),p(e),g(e)}),[p,g,s]),tabValues:s}}var g=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),i=c[t].value;i!==r&&(l(n),o(i))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:p,onClick:u,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function T(e){const n=(0,g.A)();return(0,v.jsx)(w,{...e,children:p(e.children)},String(n))}},1441:(e,n,t)=>{t(6540)},5347:(e,n,t)=>{t.d(n,{r:()=>c});var r=t(1470),i=t(9365),s=t(1432),o=(t(6540),t(4848));const c=e=>{let{js:n,python:t,java:c,kotlin:a,go:l,csharp:u,php:p,rust:d,ruby:h,elixir:b,swift:m,dart:g,cli:x}=e;return n||t||c||a||l||u||p||d||h||b||m||g||x?(0,o.jsxs)(r.A,{children:[n&&(0,o.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(s.A,{language:"js",children:n})}),t&&(0,o.jsx)(i.A,{value:"python",label:"Python",children:(0,o.jsx)(s.A,{language:"python",children:t})}),c&&(0,o.jsx)(i.A,{value:"java",label:"Java",children:(0,o.jsx)(s.A,{language:"java",children:c})}),a&&(0,o.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(s.A,{language:"kotlin",children:a})}),l&&(0,o.jsx)(i.A,{value:"go",label:"Go",children:(0,o.jsx)(s.A,{language:"go",children:l})}),u&&(0,o.jsx)(i.A,{value:"csharp",label:"C#",children:(0,o.jsx)(s.A,{language:"csharp",children:u})}),p&&(0,o.jsx)(i.A,{value:"php",label:"PHP",children:(0,o.jsx)(s.A,{language:"php",children:p})}),d&&(0,o.jsx)(i.A,{value:"rust",label:"Rust",children:(0,o.jsx)(s.A,{language:"rust",children:d})}),h&&(0,o.jsx)(i.A,{value:"ruby",label:"Ruby",children:(0,o.jsx)(s.A,{language:"ruby",children:h})}),b&&(0,o.jsx)(i.A,{value:"elixir",label:"Elixir",children:(0,o.jsx)(s.A,{language:"elixir",children:b})}),m&&(0,o.jsx)(i.A,{value:"swift",label:"Swift",children:(0,o.jsx)(s.A,{language:"swift",children:m})}),g&&(0,o.jsx)(i.A,{value:"dart",label:"Dart",children:(0,o.jsx)(s.A,{language:"dart",children:g})}),x&&(0,o.jsx)(i.A,{value:"cli",label:"CLI",children:(0,o.jsx)(s.A,{language:"cli",children:x})})]}):null}}}]);