"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8734],{41538:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=n(74848),t=n(28453),i=(n(42821),n(70503));const r={sidebar_position:2,pagination_prev:null,sidebar_label:"JS Web SDK",displayed_sidebar:"platformSidebar",title:"Get to know the Momento Web SDK",description:"The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript, and take advantage of caching and pub-sub features without the need for server-side infrastructure. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","browser","web"]},a="Momento Web SDK for JavaScript in browsers",c={id:"platform/sdks/web/index",title:"Get to know the Momento Web SDK",description:"The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript, and take advantage of caching and pub-sub features without the need for server-side infrastructure. Find resources and examples here!",source:"@site/docs/platform/sdks/web/index.md",sourceDirName:"platform/sdks/web",slug:"/platform/sdks/web/",permalink:"/platform/sdks/web/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/web/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,pagination_prev:null,sidebar_label:"JS Web SDK",displayed_sidebar:"platformSidebar",title:"Get to know the Momento Web SDK",description:"The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript, and take advantage of caching and pub-sub features without the need for server-side infrastructure. Find resources and examples here!",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","browser","web"]},sidebar:"platformSidebar",next:{title:"Python",permalink:"/platform/sdks/python/"}},l={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Momento web SDK and Momento Topics",id:"momento-web-sdk-and-momento-topics",level:2},{value:"Using the web SDK for browsers",id:"using-the-web-sdk-for-browsers",level:2},{value:"Credentials for Browsers",id:"credentials-for-browsers",level:2},{value:"FAQ",id:"faq",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components},{Details:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"momento-web-sdk-for-javascript-in-browsers",children:"Momento Web SDK for JavaScript in browsers"})}),"\n",(0,s.jsxs)(o.p,{children:["Momento provides two JavaScript SDKs; ",(0,s.jsx)(o.a,{href:"/platform/sdks/nodejs",children:"one for Node.js"})," and one for browsers other web applications (this page). The two SDKs have identical APIs, so your code will look the same except for ",(0,s.jsx)(o.code,{children:"import"})," statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments."]}),"\n",(0,s.jsx)(o.p,{children:"The Node.js SDK is best suited for server-side use cases. The Momento web SDK, however, allows developers to write JavaScript code that runs in a browser and communicates directly with Momento services. This allows you to avoid the typical overhead of building and operating your own web service to mediate cache or pub/sub calls between the browser and Momento. It also means one less hop for your web traffic, so you can get even better performance out of your browser application. The best of both worlds!"}),"\n",(0,s.jsx)(o.p,{children:"You can also use the web SDK in other non-Node.js JavaScript environments."}),"\n",(0,s.jsxs)(o.p,{children:["The Momento web SDK is available via the npm package ",(0,s.jsx)(o.a,{href:"https://www.npmjs.com/package/@gomomento/sdk-web",children:(0,s.jsx)(o.code,{children:"@gomomento/sdk-web"})}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["The source code can be found on GitHub: ",(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"momentohq/client-sdk-javascript"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["A Momento API key is required; you can get one from the ",(0,s.jsx)(o.a,{href:"https://console.gomomento.com/",children:"Momento web console"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"/platform/sdks/nodejs/cache",children:"Getting started with Momento Cache in JavaScript"}),": this cheat sheet targets the Node.js SDK, but the web SDK APIs are fully compatible."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"/platform/sdks/nodejs/topics",children:"Getting started with Momento Topics in JavaScript"}),": this cheat sheet targets the Node.js SDK, but the web SDK APIs are fully compatible."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat",children:"Chat app: Next.js"}),": a dynamic app that allows users to chat in their browser by entering a cache and topic name. The application vends low scope, short-lived auth tokens to the browser which uses them to subscribe to the topic."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app",children:"Chat app: Vite"}),": a static version of the chat app that requires a separate API (such as our ",(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"Node.js token vending machine"}),") to provide auth tokens to browsers."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md",children:"Web SDK Examples"}),": working example projects that illustrate how to use the web SDK"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"momento-web-sdk-and-momento-topics",children:"Momento web SDK and Momento Topics"}),"\n",(0,s.jsx)(o.p,{children:"Momento Topics significantly simplifies publisher-subscriber communication in a browser. Traditionally, developers example of this is a chat application embedded in a website; you are not only building the client code for the browser, but the server-side code for routing all the communications."}),"\n",(0,s.jsx)(o.p,{children:"This server-side complexity is eliminated by incorporating Momento Topics with the Momento web SDK. Developers can subscribe to Momento Topics directly from the browser. Momento then takes care of all communication when messages are published to the topic, eliminating the need for custom server-side infrastructure for WebSockets!"}),"\n",(0,s.jsx)(o.h2,{id:"using-the-web-sdk-for-browsers",children:"Using the web SDK for browsers"}),"\n",(0,s.jsxs)(o.p,{children:["While the API calls are ",(0,s.jsx)(o.a,{href:"/platform/sdks/nodejs/cache",children:"identical to the Momento Node.js SDK"}),", the import/require statement will consume the ",(0,s.jsx)(o.code,{children:"@gomomento/sdk-web"})," package from npm, instead of ",(0,s.jsx)(o.code,{children:"@gomomento/sdk"})," (which is the Node.js SDK)."]}),"\n",(0,s.jsx)(o.p,{children:"Here's an example import statement for the web SDK:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.code,{children:"import {CacheClient} from \u2018@gomomento/sdk-web\u2019;"})}),"\n",(0,s.jsx)(o.h2,{id:"credentials-for-browsers",children:"Credentials for Browsers"}),"\n",(0,s.jsx)(o.p,{children:"In order for your browser application to communicate with Momento services, you will need to provide the browser with a Momento auth token.\nThe recommended practice is to generate a Momento disposable token that has expiring credentials for each browser session. This enables the app to distribute tokens without worrying about your data being compromised."}),"\n",(0,s.jsxs)(o.p,{children:["To create a Momento disposable token for use in the browser, you will generally need a ",(0,s.jsx)(o.a,{href:"https://www.gomomento.com/blog/introducing-the-momento-token-vending-machine",children:'"token vending machine"'})," component. The token vending machine can be a ",(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"standalone application"})," with an HTTP endpoint that a static website can access, or it can be a component embedded into the server side of your web application, as in our ",(0,s.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/nextjs-chat/README.md",children:"Next.js chat app example"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["In either case, you will likely use the Node.js SDK to instantiate a Momento ",(0,s.jsx)(o.code,{children:"AuthClient"})," and provide it an API key with Super User scope generated via the ",(0,s.jsx)(o.a,{href:"https://console.gomomento.com/",children:"Momento Console"}),":"]}),"\n",(0,s.jsx)(i.F,{language:"javascript",code:"new AuthClient({\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});"}),"\n",(0,s.jsxs)(o.p,{children:["Then you will use the ",(0,s.jsx)(o.code,{children:"generateDisposableToken"})," API to create a disposable token that you can vend to the browser. These tokens are short-lived by default and they must expire within one hour."]}),"\n",(0,s.jsx)(i.F,{language:"javascript",code:"// Generate a disposable token with read-write access to a specific key in one cache\nconst oneKeyOneCacheToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyReadWrite('squirrels', 'mo'),\n  ExpiresIn.minutes(30)\n);\nswitch (oneKeyOneCacheToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to the \"mo\" key in the \"squirrels\" cache!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${oneKeyOneCacheToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${oneKeyOneCacheToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneKeyOneCacheToken.errorCode()}: ${oneKeyOneCacheToken.toString()}`\n    );\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nconst keyPrefixAllCachesToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyPrefixReadWrite(AllCaches, 'squirrel'),\n  ExpiresIn.minutes(30)\n);\nswitch (keyPrefixAllCachesToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to keys prefixed with \"squirrel\" in all caches!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${keyPrefixAllCachesToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${keyPrefixAllCachesToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${keyPrefixAllCachesToken.errorCode()}: ${keyPrefixAllCachesToken.toString()}`\n    );\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nconst allTopicsOneCacheToken = await authClient.generateDisposableToken(\n  TokenScopes.topicSubscribeOnly('squirrel', AllTopics),\n  ExpiresIn.minutes(30)\n);\nswitch (allTopicsOneCacheToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${allTopicsOneCacheToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${allTopicsOneCacheToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${allTopicsOneCacheToken.errorCode()}: ${allTopicsOneCacheToken.toString()}`\n    );\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nconst oneTopicAllCachesToken = await authClient.generateDisposableToken(\n  TokenScopes.topicPublishOnly(AllCaches, 'acorn'),\n  ExpiresIn.minutes(30)\n);\nswitch (oneTopicAllCachesToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${oneTopicAllCachesToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${oneTopicAllCachesToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneTopicAllCachesToken.errorCode()}: ${oneTopicAllCachesToken.toString()}`\n    );\n}"}),"\n",(0,s.jsxs)(o.p,{children:["For more information on Momento tokens, including ",(0,s.jsx)(o.code,{children:"DisposableTokenScope"})," and permission objects for authorization, see ",(0,s.jsx)(o.a,{href:"/cache/develop/api-reference/auth#generatedisposabletoken-api",children:"Auth API Reference"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Is the traffic from the browser encrypted?"}),(0,s.jsx)(o.p,{children:"As with all traffic with Momento services, the web SDK is fully encrypted on the wire. In addition, the SDK uses TLS 1.2+ encryption."})]})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},42821:(e,o,n)=>{n(96540)},70503:(e,o,n)=>{n.d(o,{F:()=>i});var s=n(21432),t=(n(96540),n(74848));const i=e=>{let{language:o,code:n}=e;return(0,t.jsx)(s.default,{language:o,children:n})}}}]);