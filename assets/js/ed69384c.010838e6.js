"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3205],{1624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(4848),i=n(8453);const s={sidebar_position:10,title:"API Keys",sidebar_label:"API Keys",description:"Learn what Momento API keys are, how to create them, and how they are used."},a="Momento API keys",r={id:"cache/develop/authentication/api-keys",title:"API Keys",description:"Learn what Momento API keys are, how to create them, and how they are used.",source:"@site/docs/cache/develop/authentication/api-keys.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/api-keys",permalink:"/cache/develop/authentication/api-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/api-keys.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"API Keys",sidebar_label:"API Keys",description:"Learn what Momento API keys are, how to create them, and how they are used."},sidebar:"cacheSidebar",previous:{title:"Authentication",permalink:"/cache/develop/authentication/"},next:{title:"Tokens",permalink:"/cache/develop/authentication/tokens"}},c={},l=[{value:"Creating an API key",id:"creating-an-api-key",level:2},{value:"Step 1: Sign up or log into the Momento console",id:"step-1-sign-up-or-log-into-the-momento-console",level:3},{value:"Step 2: Generate your API key",id:"step-2-generate-your-api-key",level:3},{value:"Step 3: Secure it!",id:"step-3-secure-it",level:3},{value:"Expiration",id:"expiration",level:2},{value:"Use cases",id:"use-cases",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"momento-api-keys",children:"Momento API keys"}),"\n",(0,o.jsxs)(t.p,{children:["API keys are ",(0,o.jsx)(t.em,{children:"long-lived values intended for programmatic use"}),". These keys grant integrating applications access to certain caches and topics."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Not sure if you should be using an ",(0,o.jsx)(t.code,{children:"API key"})," or a ",(0,o.jsx)(t.code,{children:"token"}),"? Check out our ",(0,o.jsx)(t.a,{href:"/cache/develop/authentication/",children:"authentication"})," page for all the details!"]})}),"\n",(0,o.jsxs)(t.p,{children:["When creating an API key, you are presented with two options via the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"}),":"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'A "super-user" key that grants access to everything in your account, like creating and deleting caches, setting and getting cache items, and publishing and subscribing to topics.'}),"\n",(0,o.jsx)(t.li,{children:"A fine-grained access control (FGAC) key that is limited to data operations only, like setting and getting cache items or publishing and subscribing to topics."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:['It is not possible to create "super-user" API keys via the Momento SDK; these may only be created in the console. However, you ',(0,o.jsx)(t.em,{children:"can"})," use the SDK to create API keys with specific permissions, via fine-grain access control! Check out our ",(0,o.jsx)(t.a,{href:"/cache/develop/api-reference/auth",children:"Auth API reference page"})," for more details."]})}),"\n",(0,o.jsx)(t.h2,{id:"creating-an-api-key",children:"Creating an API key"}),"\n",(0,o.jsxs)(t.p,{children:["While it is possible to create API keys via the Momento SDK, the simplest way to create them is to use the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"step-1-sign-up-or-log-into-the-momento-console",children:"Step 1: Sign up or log into the Momento console"}),"\n",(0,o.jsxs)(t.p,{children:["Go to the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"})," and follow the instructions to log in with your email address, Google account, or GitHub account."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Image of Momento console landing page",src:n(3083).A+"",width:"700",height:"337"})}),"\n",(0,o.jsx)(t.h3,{id:"step-2-generate-your-api-key",children:"Step 2: Generate your API key"}),"\n",(0,o.jsxs)(t.p,{children:["In the console, select the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"API Keys"})," menu option."]}),"\n",(0,o.jsx)(t.p,{children:"Once on the API key page, select the information that matches where your caches live:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Cloud provider"}),"\n",(0,o.jsx)(t.li,{children:"Region"}),"\n",(0,o.jsx)(t.li,{children:"Key Type"}),"\n",(0,o.jsx)(t.li,{children:"(Optional) Expiration date"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Image showing the fields to create a new API key",src:n(5029).A+"",width:"1100",height:"409"})}),"\n",(0,o.jsxs)(t.p,{children:["Once complete, click on the ",(0,o.jsx)(t.strong,{children:"Generate"})," button to create your API Key!"]}),"\n",(0,o.jsxs)(t.p,{children:["You can copy the value of the key directly and store it in a secure location or you can click on the ",(0,o.jsx)(t.strong,{children:"Download JSON"})," button to download the key and expiration date to your machine."]}),"\n",(0,o.jsx)(t.h3,{id:"step-3-secure-it",children:"Step 3: Secure it!"}),"\n",(0,o.jsx)(t.p,{children:"API keys are long-lived and typically grant high levels of access to the holder. With this in mind, be sure to securely store your API key in a location that encrypts the value and prevents plain-text viewing."}),"\n",(0,o.jsxs)(t.p,{children:["If your application is hosted in the cloud, it is best practice to store your keys in and retrieve from services like ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secrets Manager"}),", ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/key-vault/general/overview",children:"Azure Key Vault"}),", or ",(0,o.jsx)(t.a,{href:"https://cloud.google.com/secret-manager",children:"GCP Secret Manager"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Storage of an API key is specific to your implementation and standard coding practices, but one thing is consistent across all applications - ",(0,o.jsx)(t.em,{children:"keep it safe"}),"!"]}),"\n",(0,o.jsx)(t.h2,{id:"expiration",children:"Expiration"}),"\n",(0,o.jsxs)(t.p,{children:["When creating an API key, you have the option to create one that never expires and one that expires after a certain amount of time. We ",(0,o.jsx)(t.strong,{children:"do not recommend creating keys that never expire"}),". This ends up being a security risk if the key were ever to become compromised."]}),"\n",(0,o.jsx)(t.p,{children:"The Momento console offers several pre-configured options for expiration ranges or you can select your own date. Just remember to create a new API key and rotate it in your application before it expires to prevent outages!"}),"\n",(0,o.jsxs)(t.p,{children:["Momento provides an example of an automatic API key rotation lambda for your convenience ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/auth-token-refresh-lambda",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,o.jsxs)(t.p,{children:["For shorter-lived authentication use cases, with targeted permission scopes, consider using ",(0,o.jsx)(t.a,{href:"/cache/develop/authentication/tokens",children:"Momento tokens"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"API keys are a good choice for situations where:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"All usage is programmatic and server-side"}),"\n",(0,o.jsx)(t.li,{children:"You are okay with longer-lived keys that must be rotated on a monthly/yearly basis"}),"\n",(0,o.jsx)(t.li,{children:"The key needs relatively broad permissions"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For more information on managing the permissions on either API Keys or Tokens via fine-grained access control, see the ",(0,o.jsx)(t.a,{href:"/cache/develop/authentication/permissions",children:"permissions page"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Ready to get started? Head on over to the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"})," and get your API key!"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3083:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},5029:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/select-provider-region-be65f042e7452917eb912b64e847d47b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);