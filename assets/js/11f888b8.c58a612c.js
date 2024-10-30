"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8609],{23604:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(74848),s=i(28453);const o={sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},r="What is Cloud Linter?",l={id:"cloud-linter/index",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",source:"@site/docs/cloud-linter/index.md",sourceDirName:"cloud-linter",slug:"/cloud-linter/",permalink:"/cloud-linter/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cloud-linter/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},sidebar:"cloudLinterSidebar"},a={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Disclaimer",id:"disclaimer",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"what-is-cloud-linter",children:"What is Cloud Linter?"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://console.gomomento.com/cloud-linter",children:"Cloud Linter"})," is a web service that you can use to automatically inspect your cloud footprint for common inefficiencies."]}),"\n",(0,n.jsx)(t.p,{children:"Operating cloud infrastructure at enterprise scale is a challenge in governance and compliance. Automated tools such as Cloud Linter empower a platform team to conduct large-scale audits or a product team to self-assess their architecture. For smaller development teams, it provides instant access to a tremendous pool of accumulated expertise."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cloud Linter Diagram",src:i(77002).A+"",width:"803",height:"626"})}),"\n",(0,n.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,n.jsx)(t.p,{children:"Cloud Linter is modeled after a code linter, in the sense that nothing it detects is necessarily wrong, just questionable and potentially costly. It incorporates learnings from the Momento team's collective decades of experience operating global-scale infrastructure, as well as our visibility into design patterns and workload data from across the tech industry."}),"\n",(0,n.jsx)(t.p,{children:"The analysis that Cloud Linter applies to your configuration and usage data are designed to surface the most actionable insights. Heuristics are biased towards reducing false positives (ie, bad recommendations), at the risk of missing some edge-case opportunities. While Cloud Linter favors cost optimization as the clearest metric for demonstrating impact, it may offer suggestions that improve other crucial metrics, such as availability and scalability, even if that would increase cost."}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,n.jsx)(t.p,{children:"Cloud Linter is a living project. Support for more resource types will be added frequently, so check back here often for the latest updates!"}),"\n",(0,n.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,n.jsx)(t.p,{children:"Please note that Cloud Linter is designed solely for the purpose of calling specific control plane APIs listed below. Cloud Linter does not perform any resource-intensive operations on production services' CPU and memory."}),"\n",(0,n.jsx)(t.p,{children:"Cloud Linter is intended to interact with the following AWS services via their respective control plane APIs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Amazon DynamoDB"}),"\n",(0,n.jsx)(t.li,{children:"Amazon ElastiCache"}),"\n",(0,n.jsx)(t.li,{children:"Amazon CloudWatch"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It can optionally interact with the following AWS services:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Amazon S3, using the ",(0,n.jsx)(t.code,{children:"--enable-s3"})," option"]}),"\n",(0,n.jsxs)(t.li,{children:["Amazon API Gateway, using the ",(0,n.jsx)(t.code,{children:"--enable-api-gateway"})," option"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The usage of the software is limited to the following API calls and transactions per second (TPS):"}),"\n",(0,n.jsx)(t.p,{children:"Elasticache:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"DescribeCacheClusters: 10 TPS"}),"\n",(0,n.jsx)(t.li,{children:"DescribeServerlessCaches: 10 TPS"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"DynamoDB:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"ListTables: 10 TPS"}),"\n",(0,n.jsx)(t.li,{children:"DescribeTable: 10 TPS"}),"\n",(0,n.jsx)(t.li,{children:"DescribeTimeToLive: 1 TPS"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"CloudWatch:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"GetMetricData: 20 TPS"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"S3:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"ListBuckets"}),"\n",(0,n.jsx)(t.li,{children:"ListBucketMetricsConfigurations: 10 TPS"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"API Gateway:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"GetRestApis: 10 TPS"}),"\n",(0,n.jsx)(t.li,{children:"GetRestApi: 10 TPS"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Cloud Linter is designed to always stay within these specified limits. It's crafted with careful consideration to avoid generating any traffic to these APIs that could lead to AWS throttling or disrupt the normal operations of your AWS resources.\nPlease note that while the average running time typically spans 15 minutes, this can vary significantly based on the volume of data being processed. Therefore, the process may extend up to 1 hour in some cases."}),"\n",(0,n.jsxs)(t.p,{children:["Cloud Linter complies with Momento's Terms of Service. For further information, please refer to our ",(0,n.jsx)(t.a,{href:"https://www.gomomento.com/terms-of-service",children:"Terms of Service"})," page."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},77002:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/cloud-linter-diagram-23b026d84b2f569a914e6b4fd7c4e643.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);