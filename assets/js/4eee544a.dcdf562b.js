"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2414],{1857:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=s(4848),t=s(8453);const r={sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Topics",description:"Learn how to interact with the response object in the Momento API for Momento Topics."},i="Response objects from Momento APIs in Momento Topics",c={id:"topics/develop/api-reference/response-objects",title:"Response object API reference in Momento Topics",description:"Learn how to interact with the response object in the Momento API for Momento Topics.",source:"@site/docs/topics/develop/api-reference/response-objects.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/response-objects",permalink:"/topics/develop/api-reference/response-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Topics",description:"Learn how to interact with the response object in the Momento API for Momento Topics."},sidebar:"topicsSidebar",previous:{title:"HTTP API",permalink:"/topics/develop/api-reference/http-api"},next:{title:"Authentication",permalink:"/topics/develop/authentication/"}},a={},h=[{value:"Error",id:"error",level:2},{value:"Available methods",id:"available-methods",level:3},{value:"Success",id:"success",level:2},{value:"Subscription",id:"subscription",level:3},{value:"ListWebhooks",id:"listwebhooks",level:3},{value:"PutWebhook",id:"putwebhook",level:3},{value:"GetWebhookSecret",id:"getwebhooksecret",level:3},{value:"RotateWebhookSecret",id:"rotatewebhooksecret",level:3}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"response-objects-from-momento-apis-in-momento-topics",children:"Response objects from Momento APIs in Momento Topics"}),"\n",(0,n.jsxs)(o.p,{children:["Momento response objects extend from a parent class, have child types such as ",(0,n.jsx)(o.code,{children:"Success"})," and ",(0,n.jsx)(o.code,{children:"Error,"}),' and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a ',(0,n.jsx)(o.code,{children:"Success"})," or an ",(0,n.jsx)(o.code,{children:"Error"}),", and then branches accordingly. Using this approach, you get a type-safe response object that you can use to get more information."]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"error",children:"Error"}),"\n",(0,n.jsxs)(o.p,{children:["Errors that occur in calls to the Momento Leaderboards service are surfaced to developers as part of the return values of the calls rather than thrown exceptions. This helps to ensure your application doesn't crash at runtime, makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why ",(0,n.jsx)(o.a,{href:"https://www.gomomento.com/blog/exceptions-are-bugs",children:"Exceptions are bugs"}),", and send us any feedback you have!"]}),"\n",(0,n.jsx)(o.h3,{id:"available-methods",children:"Available methods"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"message()"}),": String - a human readable error message"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"innerException()"}),": Exception - the original exception."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"errorCode()"}),": MomentoErrorCode - Momento\u2019s own category of errors such as InvalidArgument or BadRequest. See ",(0,n.jsx)(o.a,{href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md",children:"Standards And Practices - Error Handling"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"toString()"}),": String - alias for message()"]}),"\n"]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"success",children:"Success"}),"\n",(0,n.jsx)(o.p,{children:"Generic response object indicating a successful request with no additional methods attached."}),"\n",(0,n.jsx)(o.p,{children:"Variations of the Success response object include:"}),"\n",(0,n.jsx)(o.h3,{id:"subscription",children:"Subscription"}),"\n",(0,n.jsx)(o.p,{children:"Indicates a successful Momento Topics subscription. Depending on the language, you may be provided a callback function or an iterator you can use to poll for new subscription items."}),"\n",(0,n.jsx)(o.p,{children:"Available methods include:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"unsubscribe()"}),": void - closes the topics subscription."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"listwebhooks",children:"ListWebhooks"}),"\n",(0,n.jsx)(o.p,{children:"Indicates a successful list webhooks request. Available methods include:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"getWebhooks()"}),": List - returns a list of existing webhooks. Each ",(0,n.jsxs)(o.a,{href:"./webhooks#webhook-object",children:[(0,n.jsx)(o.code,{children:"Webhook"})," object"]})," contains the fields ",(0,n.jsx)(o.code,{children:"destination"}),", ",(0,n.jsx)(o.code,{children:"id"}),", and ",(0,n.jsx)(o.code,{children:"topicName"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"putwebhook",children:"PutWebhook"}),"\n",(0,n.jsx)(o.p,{children:"Indicates a successful put webhook request. Available methods include:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"secretString()"}),": String - returns the signing secret for the webhook."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"getwebhooksecret",children:"GetWebhookSecret"}),"\n",(0,n.jsx)(o.p,{children:"Indicates a successful get webhook secret request. Available methods include:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"secret()"}),": String - returns the signing secret for the webhook."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"webhookName()"}),": String - returns the name of the webhook."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"cacheName()"}),": String - returns the name of the cache associated with the webhook."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"rotatewebhooksecret",children:"RotateWebhookSecret"}),"\n",(0,n.jsx)(o.p,{children:"Indicates a successful rotate webhook secret request. Available methods include:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"secret()"}),": String - returns the signing secret for the webhook."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"webhookName()"}),": String - returns the name of the webhook."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"cacheName()"}),": String - returns the name of the cache associated with the webhook."]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>c});var n=s(6540);const t={},r=n.createContext(t);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);