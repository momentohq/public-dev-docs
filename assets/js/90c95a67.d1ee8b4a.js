"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7693],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var i=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,s=function(e,t){if(null==e)return{};var o,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=i.createContext({}),p=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(o),d=s,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return o?i.createElement(h,r(r({ref:t},l),{},{components:o})):i.createElement(h,r({ref:t},l))}));function h(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,r=new Array(n);r[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:s,r[1]=a;for(var p=2;p<n;p++)r[p]=o[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7527:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var i=o(7462),s=(o(7294),o(3905));const n={sidebar_position:1,sidebar_label:"Momento Topics",title:"Topics",pagination_prev:null,description:"Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.",hide_title:!0,keywords:["momento","topics","event-driven architecture","eda","websockets","real-time","serverless"]},r="What is Momento Topics?",a={unversionedId:"topics/index",id:"topics/index",title:"Topics",description:"Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.",source:"@site/docs/topics/index.md",sourceDirName:"topics",slug:"/topics/",permalink:"/topics/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Momento Topics",title:"Topics",pagination_prev:null,description:"Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.",hide_title:!0,keywords:["momento","topics","event-driven architecture","eda","websockets","real-time","serverless"]},sidebar:"topicsSidebar",next:{title:"Webhooks"}},c={},p=[{value:"How does Momento Topics work?",id:"how-does-momento-topics-work",level:2},{value:"Where can I use Momento Topics?",id:"where-can-i-use-momento-topics",level:2},{value:"Connect from browsers and mobile apps",id:"connect-from-browsers-and-mobile-apps",level:3},{value:"Connect from servers",id:"connect-from-servers",level:3},{value:"Examples",id:"examples",level:2},{value:"Blog posts",id:"blog-posts",level:2},{value:"API calls for Momento Topics",id:"api-calls-for-momento-topics",level:2},{value:"Language support for Momento Topics",id:"language-support-for-momento-topics",level:2},{value:"Demo",id:"demo",level:2},{value:"Frequently asked questions about Momento Topics",id:"frequently-asked-questions-about-momento-topics",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-is-momento-topics"},"What is Momento Topics?"),(0,s.kt)("p",null,"Momento Topics is a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern that allows for real-time communication between parts of a distributed system. It enables your apps to subscribe to ",(0,s.kt)("em",{parentName:"p"},"topics"),", or dedicated channels, to receive items sent by your app\u2019s publishers. As the Momento Topics service is serverless, there is no infrastructure to create or manage and no pub/sub topic to instantiate. When you publish an item to a topic, if it does not exist yet, the topic is created. As Topics utilizes Momento Cache, there is no scaling configuration either. You\u2019re charged just for ",(0,s.kt)("a",{parentName:"p",href:"/topics/manage/pricing"},"the data transferred in and out")," of the service."),(0,s.kt)("h2",{id:"how-does-momento-topics-work"},"How does Momento Topics work?"),(0,s.kt)("p",null,"Momento Topics is a serverless service that enables efficient real-time communication between different parts of a distributed system. The pub/sub service promotes a decoupled architecture, where publishers (producers) send items to specific topics without needing to know the identities or locations of the subscribers (consumers). Subscribers listen for items on one or more topics of interest, receiving all items published to those topics by the publishers."),(0,s.kt)("p",null,"This topic-based communication allows for effective routing and filtering, as subscribers only receive items relevant to their subscribed topics, enabling them to focus on these specific topics. This approach simplifies the implementation of real-time applications, such as chat systems, notifications, or data streaming."),(0,s.kt)("p",null,"Momento Topics operates on a fire-and-forget messaging model, which means that once an item is published, it is immediately sent to all current subscribers of the topic and then discarded. There is no built-in item persistence or delivery guarantees. Consequently, Momento Topics is most suitable for applications where low latency is crucial and occasional item loss can be tolerated."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"As Momento Topics uses Momento Cache as its backend, you either use an existing cache or create a new cache in Momento Cache, then call the ",(0,s.kt)("a",{parentName:"p",href:"/topics/develop/api-reference/"},"Momento Topics publish and subscribe API"),".")),(0,s.kt)("h2",{id:"where-can-i-use-momento-topics"},"Where can I use Momento Topics?"),(0,s.kt)("p",null,"You can think of Topics almost like a managed WebSocket service that handles channels and connections for you, with one upside - it connects everything!"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A diagram showing service-to-service, service-to-browser, and browser-to-browser connectivity with Topics",src:o(3931).Z,width:"626",height:"440"})),(0,s.kt)("h3",{id:"connect-from-browsers-and-mobile-apps"},"Connect from browsers and mobile apps"),(0,s.kt)("p",null,"You can both publish and subscribe to Topics in a browser, or on iOS or Android devices using our front-end SDKs. When publishing data to a Topic, all subscribers will receive the data, meaning you can connect browsers together without building any server-side infrastructure!"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/web/"},"Momento Web SDK")," (for JavaScript browser apps)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/swift/"},"Momento Swift SDK")," (for native iOS apps)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/kotlin/"},"Momento Kotlin SDK")," (for native Android apps)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/dart/"},"Momento Dart SDK")," (for Flutter apps)")),(0,s.kt)("h3",{id:"connect-from-servers"},"Connect from servers"),(0,s.kt)("p",null,"You can also publish and subscribe to Topics in your backend services. Here are SDKs that support server-side development:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/nodejs/"},"Momento Node.js SDK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/go/"},"Momento Go SDK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/java/"},"Momento Java SDK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/kotlin/"},"Momento Kotlin SDK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/python/"},"Momento Python SDK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdks/dotnet/"},"Momento .NET SDK"))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"As a heads up, Momento Topics requires a stateful connection for subscribers, so it's not the best match for serverless functions like Lambda or Cloudflare workers. However, if you're looking to publish data, that's completely stateless and works perfectly in a function!")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice"},"A serverless item publishing microservice")," This microservice is written in TypeScript and runs on AWS using API Gateway, a Lambda function, and Momento Topics. It can be used by any of your other services (with the correct security on API Gateway) to publish messages to various topics that are then subscribed to by other applications. You pass into this API a ",(0,s.kt)("inlineCode",{parentName:"p"},"topicName")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"topicValue")," and this service publishes the value to that topic.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat"},"Using topics inside a Next.js chat application")," This application is written in TypeScript using the Next.js framework. A user selects a chatroom to join, using a cache and topic name. There is an API that distributes low-scope, short-lived tokens to the front end, which the browser uses to subscribe to the topic. When the token expires, the frontend calls the API to get a new token and resubscribes to the topic automatically. There is a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app"},"static version")," of this application as well, which requires an API available to vend tokens to the front end."))),(0,s.kt)("h2",{id:"blog-posts"},"Blog posts"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.gomomento.com/blog/momento-just-got-more-powerful-introducing-topics"},"Introducing Momento Topics")," - A simply priced, fully serverless event messaging system ready for massive scale."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.gomomento.com/blog/build-on-momento-event-routing-with-momento-topics"},"Event routing with Momento Topics")," - Find out how simple it is to introduce events into your architecture with Momento Topics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.gomomento.com/blog/why-are-websockets-so-hard"},"Why are WebSockets so Hard?")," - A look into what makes WebSockets so difficult and how Momento Topics solves them.")),(0,s.kt)("h2",{id:"api-calls-for-momento-topics"},"API calls for Momento Topics"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/topics/develop/api-reference/"},"API reference page for Topics"),"."),(0,s.kt)("h2",{id:"language-support-for-momento-topics"},"Language support for Momento Topics"),(0,s.kt)("p",null,"Learn more about the SDKs available for different programming languages on our ",(0,s.kt)("a",{parentName:"p",href:"/topics/develop/language-support/"},"Language Support Page"),"."),(0,s.kt)("h2",{id:"demo"},"Demo"),(0,s.kt)("p",null,"Interested in taking Topics out for a spin? You can try it out for free directly in the ",(0,s.kt)("a",{parentName:"p",href:"https://console.gomomento.com/topics"},"Momento Console"),". Select your region and cache, enter a topic name, and start sending messages!"),(0,s.kt)("h2",{id:"frequently-asked-questions-about-momento-topics"},"Frequently asked questions about Momento Topics"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"If an app subscribes to a topic after an item has been published, will it still get that item?"),"No. A subscriber does not have access to historical items on a Topic."))}u.isMDXComponent=!0},3931:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/topics-connections-c01578306e319fb94740b436c40dbec5.png"}}]);