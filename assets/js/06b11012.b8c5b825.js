"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2576],{82922:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var t=a(74848),r=a(28453);const n={sidebar_position:1,sidebar_label:"Overview",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null,hide_title:!0,keywords:["momento","leaderboard","gaming","serverless"]},s="What is Momento Leaderboards?",d={id:"leaderboards/index",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",source:"@site/docs/leaderboards/index.md",sourceDirName:"leaderboards",slug:"/leaderboards/",permalink:"/leaderboards/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null,hide_title:!0,keywords:["momento","leaderboard","gaming","serverless"]},sidebar:"leaderboardSidebar"},i={},l=[{value:"Getting Started with Momento Leaderboards",id:"getting-started-with-momento-leaderboards",level:2},{value:"Step 1: Create your Momento API key and cache",id:"step-1-create-your-momento-api-key-and-cache",level:3},{value:"Step 2: Create a Momento Leaderboards",id:"step-2-create-a-momento-leaderboards",level:3},{value:"Step 3: Upsert, fetch, and remove elements",id:"step-3-upsert-fetch-and-remove-elements",level:3},{value:"Frequently asked questions about Momento Leaderboards",id:"frequently-asked-questions-about-momento-leaderboards",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"what-is-momento-leaderboards",children:"What is Momento Leaderboards?"})}),"\n",(0,t.jsx)(o.p,{children:"Momento Leaderboards is a serverless leaderboard service that supports tens of millions of items and rapid ingestion/querying/updates. While many databases approximate leaderboards via general purpose data structures like sorted set or range queries, Momento Leaderboard is a first-class, full-fledged service that you can quickly and easily integrate with your application."}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Leaderboard items will have a 7-day TTL by default. For persistence (unlimited TTL), please contact our team through the ",(0,t.jsx)(o.a,{href:"https://www.gomomento.com/contact-us",children:"contact form"}),", on ",(0,t.jsx)(o.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"Discord"}),", or by emailing ",(0,t.jsx)(o.a,{href:"mailto:support@momentohq.com",children:"support@momentohq.com"}),"."]})}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsx)(o.p,{children:"What's the difference between Momento Leaderboards and a Sorted Set?"}),(0,t.jsx)(o.p,{children:"Momento Leaderboards has a much more efficient memory footprint, allowing us to scale to tens of millions of records, and the APIs were built with gaming use cases specifically in mind."})]}),"\n",(0,t.jsx)(o.h2,{id:"getting-started-with-momento-leaderboards",children:"Getting Started with Momento Leaderboards"}),"\n",(0,t.jsx)(o.h3,{id:"step-1-create-your-momento-api-key-and-cache",children:"Step 1: Create your Momento API key and cache"}),"\n",(0,t.jsxs)(o.p,{children:["Go to the ",(0,t.jsx)(o.a,{href:"https://console.gomomento.com",children:"Momento console"})," and follow the instructions to log in with your email address, Google account, or GitHub account."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Image of Momento console landing page",src:a(43083).A+"",width:"700",height:"337"})}),"\n",(0,t.jsx)(o.p,{children:"Click on the Create Cache button and create a cache using the cloud provider and region you want to use for your Momento Leaderboards."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Image of Momento console Create Cache form",src:a(24149).A+"",width:"2990",height:"1350"})}),"\n",(0,t.jsxs)(o.p,{children:["Then follow our ",(0,t.jsx)(o.a,{href:"https://docs.momentohq.com/cache/develop/authentication/api-keys",children:"step-by-step instructions"})," to create an API key via the ",(0,t.jsx)(o.a,{href:"https://console.gomomento.com",children:"Momento console"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"step-2-create-a-momento-leaderboards",children:"Step 2: Create a Momento Leaderboards"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-javascript",children:"// Create a new leaderboard client, which you can use to create\n// as many leaderboards as you wish\nconst client = new PreviewLeaderboardClient({\n  configuration: LeaderboardConfigurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});\n\n// Create a new leaderboard with the given cache and leaderboard name\nconst leaderboard = client.leaderboard('my-cache', 'my-leaderboard');\n"})}),"\n",(0,t.jsx)(o.h3,{id:"step-3-upsert-fetch-and-remove-elements",children:"Step 3: Upsert, fetch, and remove elements"}),"\n",(0,t.jsxs)(o.p,{children:["See the ",(0,t.jsx)(o.a,{href:"/leaderboards/api-reference/",children:"API reference"})," page for documentation on each available leaderboard API."]}),"\n",(0,t.jsxs)(o.p,{children:["Check out the ",(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts",children:"Node.js example"})," for a runnable program that includes examples of how to call each API."]}),"\n",(0,t.jsx)(o.h1,{id:"language-support-for-momento-leaderboards",children:"Language Support for Momento Leaderboards"}),"\n",(0,t.jsxs)(o.p,{children:["Learn more about the SDKs available for different programming languages on our ",(0,t.jsx)(o.a,{href:"/leaderboards/language-support/",children:"Language Support Page"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"frequently-asked-questions-about-momento-leaderboards",children:"Frequently asked questions about Momento Leaderboards"}),"\n",(0,t.jsx)(n,{children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)("summary",{children:"Do Momento Leaderboards items expire?"}),"\nMomento Leaderboards items have a 7-day TTL by default. If the default TTL for leaderboard items doesn\u2019t work for you, reach out to ",(0,t.jsx)(o.a,{href:"mailto:support@momentohq.com",children:"support@momentohq.com"})," to discuss removing limits."]})})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},24149:(e,o,a)=>{a.d(o,{A:()=>t});const t=a.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},43083:(e,o,a)=>{a.d(o,{A:()=>t});const t=a.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},28453:(e,o,a)=>{a.d(o,{R:()=>s,x:()=>d});var t=a(96540);const r={},n=t.createContext(r);function s(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);