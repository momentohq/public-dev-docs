"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9506],{7740:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>m});var i=n(4848),t=n(8453),a=n(1470),o=n(9365),r=n(8254),c=n(7206);const l={sidebar_position:10,title:"Instant Messaging Pattern",sidebar_label:"Instant messaging",description:"Learn best practices for building instant messaging with Momento Cache and Topics.",keywords:["topics","development patterns","momento","chat","instant messaging","enterprise patterns"]},d="Use Momento Cache and Topics to build instant messaging",h={id:"topics/patterns/instant-messaging",title:"Instant Messaging Pattern",description:"Learn best practices for building instant messaging with Momento Cache and Topics.",source:"@site/docs/topics/patterns/instant-messaging.mdx",sourceDirName:"topics/patterns",slug:"/topics/patterns/instant-messaging",permalink:"/topics/patterns/instant-messaging",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/patterns/instant-messaging.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Instant Messaging Pattern",sidebar_label:"Instant messaging",description:"Learn best practices for building instant messaging with Momento Cache and Topics.",keywords:["topics","development patterns","momento","chat","instant messaging","enterprise patterns"]},sidebar:"topicsSidebar",previous:{title:"Patterns"},next:{title:"Running background tasks",permalink:"/topics/patterns/running-background-tasks"}},p={},m=[{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2},{value:"Message storage",id:"message-storage",level:3},{value:"Lists",id:"lists",level:4},{value:"Delivery",id:"delivery",level:3},{value:"Publishing a message",id:"publishing-a-message",level:4},{value:"Subscribing to a topic",id:"subscribing-to-a-topic",level:4},{value:"Security",id:"security",level:2},{value:"Client-side only",id:"client-side-only",level:3},{value:"Server-side and client-side",id:"server-side-and-client-side",level:3},{value:"Learn more",id:"learn-more",level:2}];function g(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"use-momento-cache-and-topics-to-build-instant-messaging",children:"Use Momento Cache and Topics to build instant messaging"})}),"\n",(0,i.jsxs)(s.p,{children:["Instant messaging is a must-have feature in many applications. Communicating seamlessly in one-to-one, one-to-many, and many-to-many conversations is often thought of as a necessary component of an application. With Momento Cache and Topics, you can build instant messaging into your application without any backend infrastructure. Using the ",(0,i.jsx)(s.a,{href:"/platform/sdks/web",children:"Momento web SDK"}),", you can access your cache data and publish and subscribe to messages directly in your browser."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["This pattern uses ",(0,i.jsx)(s.strong,{children:"Momento Cache"})," to store historical messages and ",(0,i.jsx)(s.strong,{children:"Momento Topics"})," to facilitate real-time communication between instant messaging participants."]})}),"\n",(0,i.jsx)(s.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(s.p,{children:"Building instant messaging on Momento can be done entirely client-side, meaning in your user interface. Browsers, iPhone apps, and Android apps all have the capability to access resources in Momento directly."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Diagram of client applications communicating directly via Momento",src:n(5156).A+"",width:"1299",height:"253"})}),"\n",(0,i.jsxs)(s.p,{children:["In the diagram above, messages are being loaded from a ",(0,i.jsx)(s.a,{href:"/cache/develop/basics/datatypes#lists",children:"list"})," when a new user joins the chat. Users subscribe to a chatroom-specific topic to recieve messages in real-time while they are active in the chat. As messages are sent, they are added directly to the list by the sender."]}),"\n",(0,i.jsx)(s.h2,{id:"components",children:"Components"}),"\n",(0,i.jsx)(s.p,{children:"Instant messaging is separated into two parts:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Message storage"}),"\n",(0,i.jsx)(s.li,{children:"Delivery"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"These core components allow users to join your chat at any time and view the message history and enable them to receive new messages in real time."}),"\n",(0,i.jsx)(s.h3,{id:"message-storage",children:"Message storage"}),"\n",(0,i.jsxs)(s.p,{children:["Most instant messaging platforms store messages to allow users to view the conversation history if messages were sent prior to their arrival. Part of the startup tasks when entering a chat room is loading said history and displaying it on screen. This can easily be done with a Momento ",(0,i.jsx)(s.strong,{children:"list"})," cache item."]}),"\n",(0,i.jsx)(s.h4,{id:"lists",children:"Lists"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.a,{href:"../../cache/develop/basics/datatypes#lists",children:"list"})," is a collection data type that stores an ordered array of elements. You can push elements to either the front or back of a list and you can add multiple entries at one time. A list is a great data type for instant messaging because it stores messages in the order they were sent. When users join an instant messaging session, you can quickly fetch the entire chat history with a single ",(0,i.jsx)(s.a,{href:"../../cache/develop/api-reference/list-collections#listfetch",children:"listFetch API call"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Elements in a list do not need to be unique. You can push the same message into a list over and over again and it will be added every time. Lists are a good choice for instant messaging for the following use cases:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Fetching messages N at a time"}),"\n",(0,i.jsx)(s.li,{children:"Adding multiple messages at once"}),"\n",(0,i.jsx)(s.li,{children:"Maintaining a chat history of fixed length, i.e. the last 100 messages"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"When using a list, you have a number of array manipulation functions, allowing you to automatically truncate message history if it gets too long or remove specific elements for things like content moderation."}),"\n",(0,i.jsx)(s.h3,{id:"delivery",children:"Delivery"}),"\n",(0,i.jsxs)(s.p,{children:["Technically, message storage is not a required component for instant messaging. In theory you could have a messaging system that only showed the messages that were sent while a user is connected. Messages could be stored in memory in the client and you'd be done. In contrast, message delivery is a mandatory part of instant messaging. Getting the message from the sender to all recipients with minimal latency is the core of this pattern. To do this, we use ",(0,i.jsx)(s.a,{href:"https://www.gomomento.com/platform/topics",children:"Momento Topics"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Momento Topics is a low-latency pub/sub service that connects clients together, clients to servers, servers to clients, and servers to servers. Think WebSockets but ",(0,i.jsx)(s.em,{children:"way better"}),". When you publish a message to a topic, Momento will broadcast to all subscribers of the topic, providing fan-out capability or 1 to 1, depending on your use case."]}),"\n",(0,i.jsxs)(s.p,{children:["For instant messaging, the sender will ",(0,i.jsx)(s.em,{children:"publish"})," a message to a topic. The recipients of the message, be it one or many depending on your use case, will be ",(0,i.jsx)(s.em,{children:"subscribers"}),". Momento Topics will deliver the published message to the subscribers in real-time, providing for the instant messaging experience we're looking for!"]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Momento Topics provides you with flexible, dynamic topics that are not defined as resources in your infrastructure. The recommended way to build instant messaging is to ",(0,i.jsx)(s.em,{children:"use the chat room or session identifier as the topic name"}),". This provides flexible and dedicated topics for chat use cases."]})}),"\n",(0,i.jsx)(s.h4,{id:"publishing-a-message",children:"Publishing a message"}),"\n",(0,i.jsx)(s.p,{children:"To publish a message, all you need is a single command:"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(o.A,{value:"node",label:"Node.js",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"await topics.publish('message-namespace', sessionId, 'Hello world!');\n"})})}),(0,i.jsx)(o.A,{value:"python",label:"Python",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'topics.publish("message-namespace", sessionId, "Hello world!")\n'})})}),(0,i.jsx)(o.A,{value:"go",label:"Go",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:'_, err := topics.Publish(ctx, &momento.TopicPublishRequest{\n  CacheName: momento.String("message-namespace"),\n  TopicName: sessionId,\n  Value: momento.String("Hello world!")\n})\n'})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'final TopicPublishResponse response = topics.publish("message-namespace", sessionId, "Hello world!").join();\n'})})}),(0,i.jsx)(o.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:'var response = await topics.PublishAsync("message-namespace", sessionId, "Hello world!");\n'})})})]}),"\n",(0,i.jsx)(s.h4,{id:"subscribing-to-a-topic",children:"Subscribing to a topic"}),"\n",(0,i.jsx)(s.p,{children:"Subscribing for messages tells Momento whenever something is published to a specific topic, deliver it here and run a specific event handler function. You can subscribe 1 or thousands (or more!) of clients to an individual topic."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(o.A,{value:"node",label:"Node.js",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const subscription = await topics.subscribe('message-namespace', sessionId, {\n  onItem: (data) => processMessage(data.value(), data.tokenId())\n});\n"})})}),(0,i.jsx)(o.A,{value:"python",label:"Python",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'with TopicClient(TopicConfigurations.Default.v1(), _AUTH_PROVIDER) as client:\n  subscription = client.subscribe("cache", "my_topic")\n  match subscription:\n    case TopicSubscribe.Error():\n      raise Exception("Subscription error: ", subscription.message)\n    case TopicSubscribe.Subscription():\n      for item in subscription:\n        match item:\n          case TopicSubscriptionItem.Text():\n            print(item.value)\n          case TopicSubscriptionItem.Binary():\n            print(item.value!r)\n'})})}),(0,i.jsx)(o.A,{value:"go",label:"Go",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"subscription, err := topicClient.Subscribe(ctx, &momento.TopicSubscribeRequest{\n  CacheName: cacheName,\n  TopicName: topicName,\n})\nif err != nil {\n  panic(err)\n}\n\ngo func() { pollForMessages(ctx, subscription) }()\ntime.Sleep(time.Second)\n\nfunc pollForMessages(ctx context.Context, subscription momento.TopicSubscription) {\n  for {\n    item, err := subscription.Item(ctx)\n    if err != nil {\n      panic(err)\n    }\n    switch message := item.(type) {\n    case momento.String:\n      fmt.Printf(\"received message as string: '%v'\\n\", message)\n    case momento.Bytes:\n      fmt.Printf(\"received message as bytes: '%v'\\n\", message)\n    }\n  }\n}\n"})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'final TopicSubscribeResponse subscribeResponse =\n  topicClient\n    .subscribe(\n      TopicExample.CACHE_NAME,\n      TOPIC_NAME,\n      new ISubscriptionCallbacks() {\n        @Override\n        public void onItem(TopicMessage message) {\n          logger.info("Received message on topic {}: {}", TOPIC_NAME, message.toString());\n        };\n\n        @Override\n        public void onError(Throwable error) {\n          logger.error("Subscription to topic {} failed with error", TOPIC_NAME, error);\n        };\n      };).join();\n'})})}),(0,i.jsx)(o.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:'var subscriptionTask = Task.Run(async () =>\n{\n  var subscribeResponse = await topicClient.SubscribeAsync(cacheName, TopicName);\n  switch (subscribeResponse)\n  {\n    case TopicSubscribeResponse.Subscription subscription:\n      try {\n        var cancellableSubscription = subscription.WithCancellation(cts.Token);\n        await foreach (var message in cancellableSubscription) {\n          switch (message)\n          {\n            case TopicMessage.Binary:\n              Logger.LogInformation("Received binary message from topic: {binaryData}", Convert.ToBase64String(binary.Value));\n              break;\n            case TopicMessage.Text text:\n              Logger.LogInformation("Received string message from topic: {message}", text.Value);\n              break;\n            case TopicMessage.Error error:\n              Logger.LogInformation("Received error message from topic: {error}", error.Message);\n              cts.Cancel();\n              break;\n          }\n        }\n      } finally {\n        subscription.Dispose();\n      }\n\n      break;\n    case TopicSubscribeResponse.Error error:\n      Logger.LogInformation("Error subscribing to a topic: {error}", error.Message);\n      cts.Cancel();\n      break;\n  }\n});\n'})})})]}),"\n",(0,i.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(s.p,{children:["Momento provides a ",(0,i.jsx)(s.a,{href:"../develop/authentication/tokens",children:"robust authorization mechanism"})," that limits consumers to specific resources and actions. When building an instant messaging feature, it is incredibly important to take scope into consideration so users do not intercept messages they shouldn't have access to."]}),"\n",(0,i.jsx)(s.p,{children:"The pattern described above uses both cache and topic resources. Following the best practice recommended above by making the chat room match the topic name, we can create policies in a couple of different ways."}),"\n",(0,i.jsx)(s.h3,{id:"client-side-only",children:"Client-side only"}),"\n",(0,i.jsx)(s.p,{children:"It's possible to build instant messaging completely on the client side, meaning directly in the browser or mobile application. The policy below would be used in your clients."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(o.A,{value:"node",label:"Node.js",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'const scope = {\n  permissions: [\n    {\n      role: "readwrite",\n      cache: "instant-messaging",\n      item: {\n        key: chatId\n      }\n    },\n    {\n      role: "publishsubscribe",\n      cache: "instant-messaging",\n      topic: chatId\n    }\n  ]\n};\n\nconst token = await authClient.generateDisposableToken(scope, ExpiresIn.hours(1));\n'})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'List<DisposableTokenPermission> permissions = new ArrayList<>();\n  permissions.add(\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadWrite, CacheSelector.ByName("instant-messaging"), CacheSelector.ByName(chatId)));\n  permissions.add(\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishSubscribe,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatId)));\n  DisposableTokenScope scope = new DisposableTokenScope(permissions);\n\n  GenerateDisposableTokenResponse response =  authClient.generateDisposableTokenAsync(scope, ExpiresIn.hours(1)).join();\n'})})}),(0,i.jsx)(o.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:'var scope = new DisposableTokenScope(Permissions: new List<DisposableTokenPermission>\n  {\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadWrite,\n          CacheSelector.ByName("instant-messaging"),\n          CacheSelector.ByName(chatid)\n      ),\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishSubscribe,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatid)\n      )\n  });\n\n  var tokenResponse = await client.GenerateDisposableTokenAsync( scope, ExpiresIn.Hours(1));\n'})})})]}),"\n",(0,i.jsx)(s.p,{children:"This policy grants read and write permissions to a specific cache item."}),"\n",(0,i.jsx)(s.p,{children:"It also grants publish and subscribe permissions to a single topic. Consumers will be able to publish messages to and recieve messages from the one topic. Attempting to subscribe to any other topic will result in an authorization error."}),"\n",(0,i.jsx)(s.p,{children:"Note that both the cache item and topic share the same value. This is the recommended best practice and the data from the cache item will not interfere with the messages being published to the topic."}),"\n",(0,i.jsx)(s.p,{children:"Once the policy is created, you pass it to the client and create a token that expires after a set amount of time."}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"The tradeoff for a client-side only approach is trust in your front-end. Since this opens write permissions to the client, you must be careful with what you expose in the code. Allowing end users to do write operations requires trust in their usage, since you cannot moderate messages before accepting them. This also takes a distributed approach to storing data instead of centralizing storage in server-side code."}),(0,i.jsx)(s.p,{children:"If that is tolerable for your application, it results in unrivaled time-to-market and minimal complexity in your application."})]}),"\n",(0,i.jsx)(s.h3,{id:"server-side-and-client-side",children:"Server-side and client-side"}),"\n",(0,i.jsx)(s.p,{children:"If you centralize writes in your server-side code, the pattern changes slightly. Raw message input would be submitted through one topic and be picked up by the server code. Any transformations or moderation would be performed before sending it back down to the verified topic. Below is an example of the policy that would be used on the client side following this pattern."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(o.A,{value:"node",label:"Node.js",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'const scope = {\n  permissions: [\n    {\n      role: "read",\n      cache: "instant-messaging",\n      item: {\n        key: chatId\n      }\n    },\n    {\n      role: "publishonly",\n      cache: "instant-messaging",\n      topic: `${chatid}-input`\n    },\n    {\n      role: "subscribeonly",\n      cache: "instant-messaging",\n      topic: chatid\n    },\n  ]\n};\n\nconst token = await authClient.generateDisposableToken(scope, ExpiresIn.hours(1));\n'})})}),(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:'List<DisposableTokenPermission> permissions = new ArrayList<>();\n  permissions.add(\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadOnly, CacheSelector.ByName("instant-messaging"), CacheSelector.ByName(chatId)));\n  permissions.add(\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatId + "-input")));\n  permissions.add(\n    new DisposableToken.TopicPermission(\n          TopicRole.SubscribeOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatId)));\n\n  DisposableTokenScope scope = new DisposableTokenScope(permissions);\n\n  GenerateDisposableTokenResponse response =  authClient.generateDisposableTokenAsync(scope, ExpiresIn.hours(1)).join();\n'})})}),(0,i.jsx)(o.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:'var scope = new DisposableTokenScope(Permissions: new List<DisposableTokenPermission>\n  {\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadOnly,\n          CacheSelector.ByName("instant-messaging"),\n          CacheSelector.ByName(chatid)\n      ),\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName($"{chatid}-input")\n      ),\n      new DisposableToken.TopicPermission(\n          TopicRole.SubscribeOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatid)\n      )\n  });\n\n  var tokenResponse = await client.GenerateDisposableTokenAsync( scope, ExpiresIn.Hours(1));\n'})})})]}),"\n",(0,i.jsx)(s.p,{children:"The policy above grants read-only access to the cache item storing the conversation. The write is done server-side after moderation and transformation is complete."}),"\n",(0,i.jsxs)(s.p,{children:["It also grants publish access to the ",(0,i.jsx)(s.code,{children:"{chatid}-input"})," topic. The server code subscribes to this topic, does the moderation, and publishes the final message to the ",(0,i.jsx)(s.code,{children:"{chatid}"})," topic, which the client has subscribe access to."]}),"\n",(0,i.jsx)(s.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,i.jsx)(s.p,{children:"Momento enables fast, secure development of instant messaging in any application. To learn more about Cache and Topics or to get a quick-start on your project, check out some additional resources below."}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(c.V,{title:"More about instant messaging",link:"https://www.gomomento.com/solutions/use-cases/chat",description:"Learn more about how to build instant messaging on Momento"}),(0,i.jsx)(c.V,{title:"How to build a multi-language chat app",link:"https://www.gomomento.com/blog/how-to-develop-a-chat-app-with-built-in-moderation",description:"Walk through an app that automatically translates messages to other languages"}),(0,i.jsx)(c.V,{title:"In-game chat case study",link:"https://www.gomomento.com/resources/case-studies/momento-enables-zigzagame-to-go-fully-serverless-and-save-money-in-the-process",description:"See how ZigZaGame used Momento to power their in-game chat"})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},8254:(e,s,n)=>{var i=n(6305).default;s.p=void 0;i(n(4788));var t=n(4848);s.p=e=>{let{variant:s,children:n}=e;return(0,t.jsx)("div",{...{0:{className:"xrvj5dj xoybqp3 x1p9eum2"},1:{className:"xrvj5dj xoybqp3 x1wlfl8j"}}[!("dense"!==s)|0],children:n})}},7206:(e,s,n)=>{var i=n(6305).default;s.V=void 0;i(n(4788));var t=n(4848);s.V=e=>{let{title:s,description:n,link:i,icon:a,alignText:o="start",alignItems:r="start"}=e;return(0,t.jsxs)("a",{href:i,target:"_blank",...{0:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np x7a106z xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g"},1:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g x6s0dn4"}}[!("center"!==r)|0],children:[a&&(0,t.jsx)("img",{src:a,height:"32px",width:"32px"}),(0,t.jsxs)("div",{...{0:{className:"x1iyjqo2 x1yc453h"},1:{className:"x1iyjqo2 x2b8uid"}}[!("center"!==o)|0],children:[(0,t.jsx)("h3",{className:"x1q12cbh",children:s}),(0,t.jsx)("p",{className:"xif65rj xo1l8bm x1du4iog",children:n})]})]})}},5156:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/instant-messaging-architecture-7571645aa4337dc413b47eebd12ee1aa.png"}}]);