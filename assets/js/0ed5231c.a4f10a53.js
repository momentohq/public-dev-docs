"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6782],{5680:(e,t,o)=>{o.d(t,{xA:()=>l,yg:()=>b});var n=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(o),m=r,b=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return o?n.createElement(b,a(a({ref:t},l),{},{components:o})):n.createElement(b,a({ref:t},l))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3181:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(8168),r=(o(6540),o(5680));const i={sidebar_position:2,sidebar_label:"Getting Started",title:"Creating a webhook",description:"Learn how to create a webhook using the Momento Console",pagination_next:null,keywords:["topics","webhooks","eda","momento","event-driven architecture"]},a="Create your first webhook in Momento",s={unversionedId:"topics/webhooks/creating-a-webhook",id:"topics/webhooks/creating-a-webhook",title:"Creating a webhook",description:"Learn how to create a webhook using the Momento Console",source:"@site/docs/topics/webhooks/creating-a-webhook.md",sourceDirName:"topics/webhooks",slug:"/topics/webhooks/creating-a-webhook",permalink:"/topics/webhooks/creating-a-webhook",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/webhooks/creating-a-webhook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Getting Started",title:"Creating a webhook",description:"Learn how to create a webhook using the Momento Console",pagination_next:null,keywords:["topics","webhooks","eda","momento","event-driven architecture"]},sidebar:"topicsSidebar",previous:{title:"Overview",permalink:"/topics/webhooks/overview"}},c={},p=[],l={toc:p},h="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(h,(0,n.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-your-first-webhook-in-momento"},"Create your first webhook in Momento"),(0,r.yg)("p",null,"To complete step one of setting up the webhook, log into the ",(0,r.yg)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". Navigate to the ",(0,r.yg)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"cache list")," on the left navigation bar and select the cache that will publish to the webhook."),(0,r.yg)("p",null,"To create the webhook, a few simple details need to be supplied."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Webhook Creation",src:o(601).A,width:"2402",height:"804"})),(0,r.yg)("p",null,"The three fields presented are important for different reasons."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Webhook Name"),": Human-readable name for the webhook."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Topic Name"),": Topic that will trigger the webhook when published."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Webhook Destination"),": Endpoint URL of the webhook to POST to.")),(0,r.yg)("p",null,"Next, ",(0,r.yg)("a",{parentName:"p",href:"https://console.gomomento.com/api-keys"},"create a Fine-Grained Access Key")," for the cache, with topic ",(0,r.yg)("inlineCode",{parentName:"p"},"publish")," permissions."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Token Creation",src:o(4126).A,width:"1279",height:"508"})),(0,r.yg)("p",null,"Using this token, you can now start publishing to the topic. You can use the ",(0,r.yg)("a",{parentName:"p",href:"/topics/develop/api-reference"},"Momento SDK")," to publish to the topic."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import {TopicClient, TopicPublish, CredentialProvider} from '@gomomento/sdk';\n\nconst momento = new TopicClient({\n    credentialProvider: CredentialProvider.fromString('<the api key>'),\n});\nconst publishResponse = await momento.publish(cacheName, topicName, value);\nif (publishResponse instanceof TopicPublish.Success) {\n    console.log('Value published successfully!');\n} else {\n    console.log(`Error publishing value: ${publishResponse.toString()}`);\n}\n")),(0,r.yg)("p",null,"You should now be able to see the events being received by your webhook endpoint. What this endpoint does with the events is up to you! It is worth noting that this Webhook can listen to multiple topics across multiple caches. Since the ",(0,r.yg)("inlineCode",{parentName:"p"},"topic")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"cache")," come as part of the POST body, events can be distinguished by these attributes, and processed in differently depending on which Cache/Topic the event came from."))}u.isMDXComponent=!0},601:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/creating_webhook-d370b1e45b70e26f02cc9f1ceb77150a.jpg"},4126:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/create-fine-grained-token-97e4922c35cfd605d5409827859cbfc6.png"}}]);