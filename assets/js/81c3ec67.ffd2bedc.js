"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9625],{1707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=n(74848),i=n(28453);const s={sidebar_position:2,sidebar_label:"Security",title:"Webhook Security",description:"Learn how to secure your endpoint accepting webhook requests with request signatures and verification.",pagination_next:null,hide_title:!0,keywords:["momento","webhooks","security","eda","event-driven architectures","serverless"]},r="Secure your webhook endpoints",a={id:"topics/webhooks/security",title:"Webhook Security",description:"Learn how to secure your endpoint accepting webhook requests with request signatures and verification.",source:"@site/docs/topics/webhooks/security.md",sourceDirName:"topics/webhooks",slug:"/topics/webhooks/security",permalink:"/topics/webhooks/security",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/webhooks/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Security",title:"Webhook Security",description:"Learn how to secure your endpoint accepting webhook requests with request signatures and verification.",pagination_next:null,hide_title:!0,keywords:["momento","webhooks","security","eda","event-driven architectures","serverless"]},sidebar:"topicsSidebar",previous:{title:"Getting Started",permalink:"/topics/webhooks/creating-a-webhook"}},c={},h=[{value:"Request signing",id:"request-signing",level:2},{value:"Verifying signatures with the Momento SDK",id:"verifying-signatures-with-the-momento-sdk",level:3},{value:"Verifying signatures manually",id:"verifying-signatures-manually",level:3},{value:"User Agent",id:"user-agent",level:2},{value:"Running test scenarios",id:"running-test-scenarios",level:3},{value:"Signing secret",id:"signing-secret",level:2},{value:"Obtaining your signing secret programmatically",id:"obtaining-your-signing-secret-programmatically",level:3},{value:"Obtaining your signing secret via the Momento console",id:"obtaining-your-signing-secret-via-the-momento-console",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Replay attacking",id:"replay-attacking",level:3},{value:"Regularly rotate secrets",id:"regularly-rotate-secrets",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"secure-your-webhook-endpoints",children:"Secure your webhook endpoints"})}),"\n",(0,o.jsx)(t.p,{children:"After you successfully connect a webhook to Momento, it is recommended to validate incoming requests to guarantee the authenticity. Since your endpoint is publicly accessible, guaranteeing the sender is critical in protecting against bad actors. Authenticity and integrity of the requests can be validated in a couple of ways."}),"\n",(0,o.jsx)(t.h2,{id:"request-signing",children:"Request signing"}),"\n",(0,o.jsxs)(t.p,{children:["Request signing is a security measure used in software systems to verify the authenticity and integrity of a message. Prior to publishing, Momento signs webhook events with a signature contained in the request's ",(0,o.jsx)(t.code,{children:"momento-signature"})," header. This signature uses your webhook's ",(0,o.jsx)(t.a,{href:"#signing-secret",children:"signing secret"})," and event request body to confirm authenticity. This allows you to verify the event originated from Momento, not from a 3rd party or malicious actor."]}),"\n",(0,o.jsx)(t.h3,{id:"verifying-signatures-with-the-momento-sdk",children:"Verifying signatures with the Momento SDK"}),"\n",(0,o.jsxs)(t.p,{children:["The Momento ",(0,o.jsx)(t.a,{href:"/platform/sdks/nodejs",children:"Node.js SDK"})," includes native support for verifying signatures. This is the recommended approach to verify signatures. To verify, provide the raw request body, the signature, and your signing secret."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import express from 'express';\nimport { WebhookUtils } from '@gomomento/sdk';\nconst app = express();\n\napp.post('/', (req, res) => {\n    const response = WebhookUtils.validateWebhookRequest({\n        body: req.rawBody,\n        signature: req.headers['momento-signature'],\n        signingSecret: process.env.SIGNING_SECRET\n    });\n\n    if (response === WebhookUtils.RequestValidation.VALID) {\n        // Request is valid. Continue processing.\n    } else {\n        res.status(403).send('Signature invalid');\n    }\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"verifying-signatures-manually",children:"Verifying signatures manually"}),"\n",(0,o.jsxs)(t.p,{children:["For other languages, or if you prefer to verify the signature yourself, you can use an ",(0,o.jsx)(t.em,{children:"HMAC SHA3-256"})," with your signing secret to validate the incoming request."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import * as crypto from 'crypto';\n\nconst didRequestComeFromMomento = (req, secret) => {\n    const hash = crypto.createHmac(\"SHA3-256\", secret);\n    const hashed = hash.update(req.rawBody).digest('hex');\n    return hashed === req.headers['momento-signature'];\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"user-agent",children:"User Agent"}),"\n",(0,o.jsxs)(t.p,{children:["In addition to the digital signature, all webhook events also receive a ",(0,o.jsx)(t.code,{children:"User-Agent"})," header. This can be used to in conjunction with the signature to guarantee authenticity or used to divert the workflow for testing scenarios. This header is a static value that only changes on major version releases:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)"})}),"\n",(0,o.jsx)(t.p,{children:"The value is composed of the following pieces:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Momento"})," - Indicates the origin is from Momento"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"1.0"})," - Major version number of the service"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Webhooks"})," - States the specific origin from the request"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:["+",(0,o.jsx)(t.a,{href:"https://docs.momentohq.com/topics/webhooks",children:"https://docs.momentohq.com/topics/webhooks"})]})," - Additional information about the webhook service can be found here"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Do not exlusively use this value to validate incoming requests. This header is easily spoofed and is not intended to verify authenticity on its own."})}),"\n",(0,o.jsx)(t.h3,{id:"running-test-scenarios",children:"Running test scenarios"}),"\n",(0,o.jsxs)(t.p,{children:["Before bringing your app to production, you might want to test your webhook is in working order and you can verify requests without executing your production code. This is where the ",(0,o.jsx)(t.code,{children:"User-Agent"})," header can be used to divert execution of your code. By creating a request, signing it yourself using the ",(0,o.jsx)(t.a,{href:"#verifying-signatures-manually",children:"manual verification code"}),", and publishing to your endpoint with a different ",(0,o.jsx)(t.code,{children:"User-Agent"})," header value, you can shortcut the execution after verifying the payload."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const MOMENTO_USER_AGENT = 'Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)';\nconst TEST_USER_AGENT = 'Test Harness/PostmanRuntime';\n\napp.post('/', (req, res) => {\n    if(didRequestComeFromMomento(req, process.env.SIGNING_SECRET)){\n        if(req.headers['User-Agent'] === MOMENTO_USER_AGENT){\n            // Continue processing\n        } else if (req.headers['User-Agent'] === TEST_USER_AGENT) {\n            // This is a test request, return success\n            res.status(200).send('Skipping execution');\n        }\n    } else {\n        res.status(403).send('Signature invalid');\n    }\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"signing-secret",children:"Signing secret"}),"\n",(0,o.jsxs)(t.p,{children:["When you create a new webhook in Momento you will be provided a signing secret. This secret value is used to digitally sign event payloads from Momento, allowing you to verify authenticity of a request. You can obtain the secret in either programmatically or via the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento console"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"obtaining-your-signing-secret-programmatically",children:"Obtaining your signing secret programmatically"}),"\n",(0,o.jsxs)(t.p,{children:["When you create a new webhook with the ",(0,o.jsx)(t.a,{href:"/topics/api-reference/webhooks#put-webhook-api",children:"putWebhook API"}),", you will receive the signing secret as part of a successful response. If you lose the secret or forget to save it as part of the request, the ",(0,o.jsx)(t.a,{href:"/topics/api-reference/webhooks#get-webhook-secret-api",children:"getWebhookSecret API"})," will return the current value."]}),"\n",(0,o.jsx)(t.h3,{id:"obtaining-your-signing-secret-via-the-momento-console",children:"Obtaining your signing secret via the Momento console"}),"\n",(0,o.jsxs)(t.p,{children:["If you prefer using the Momento console, you can always navigate to your webhook and click on the ",(0,o.jsx)(t.em,{children:"copy"})," button next on the secret string row."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Webhook detail page in the Momento Console",src:n(31787).A+"",width:"795",height:"551"})}),"\n",(0,o.jsxs)(t.p,{children:["To navigate to the webhook detail page, click on the cache of your choice on the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"cache list page"}),". Navigate to the ",(0,o.jsx)(t.em,{children:"Webhooks"})," menu option and click on the webhook you wish to view."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"When you first create a webhook you will be navigated to the webhook list page. To retrieve the signing secret, you must then click into the webhook and press the copy button."})}),"\n",(0,o.jsx)(t.h2,{id:"considerations",children:"Considerations"}),"\n",(0,o.jsx)(t.p,{children:"The verification information listed above is the minimum required to guarantee authenticity of an incoming request. However, further security best practices should also be considered when building your webhook."}),"\n",(0,o.jsx)(t.h3,{id:"replay-attacking",children:"Replay attacking"}),"\n",(0,o.jsxs)(t.p,{children:["If a valid webhook event is intercepted by a malicious actor and your endpoint implements sender verification only, you are susceptible to a ",(0,o.jsx)(t.em,{children:"replay attack"}),". A replay attack occurs when a bad actor sends a valid request to your system repeatedly, forcing your system to process the same event multiple times. To prevent these attacks from harming your system, consider also validating the age of the event. Any event that comes in older than your allowed age threshold would be automatically discarded."]}),"\n",(0,o.jsxs)(t.p,{children:["You can use the ",(0,o.jsx)(t.a,{href:"./overview#publish_timestamp",children:"publish_timestamp"})," property of the event to determine age. As best practice, consider rejecting events ",(0,o.jsx)(t.em,{children:"older than 60 seconds"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"regularly-rotate-secrets",children:"Regularly rotate secrets"}),"\n",(0,o.jsxs)(t.p,{children:["If your webhook signing secret is compromised, you cannot guarantee authenticity of a request. Consider rotating the secret periodically to ensure safety of your endpoints. You can rotate a secret using the ",(0,o.jsx)(t.a,{href:"/topics/api-reference/webhooks#rotate-webhook-secret-api",children:"rotateWebhookSecret API"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},31787:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/webhook-secret-string-ca389eaa23753d7e13c860f6fc87dbbc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);