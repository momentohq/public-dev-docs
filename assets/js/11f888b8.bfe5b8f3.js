"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},a="What is Cloud Linter?",l={unversionedId:"cloud-linter/index",id:"cloud-linter/index",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",source:"@site/docs/cloud-linter/index.md",sourceDirName:"cloud-linter",slug:"/cloud-linter/",permalink:"/cloud-linter/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cloud-linter/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},sidebar:"cloudLinterSidebar"},s={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-cloud-linter"},"What is Cloud Linter?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/cloud-linter"},"Cloud Linter")," is a web service that you can use to automatically inspect your cloud footprint for common inefficiencies."),(0,o.kt)("p",null,"Operating cloud infrastructure at enterprise scale is a challenge in governance and compliance. Automated tools such as Cloud Linter empower a platform team to conduct large-scale audits or a product team to self-assess their architecture. For smaller development teams, it provides instant access to a tremendous pool of accumulated expertise."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Linter Diagram",src:r(2694).Z,width:"761",height:"691"})),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Cloud Linter is modeled after a code linter, in the sense that nothing it detects is necessarily wrong, just questionable and potentially costly. It incorporates learnings from the Momento team's collective decades of experience operating global-scale infrastructure, as well as our visibility into design patterns and workload data from across the tech industry."),(0,o.kt)("p",null,"The analysis that Cloud Linter applies to your configuration and usage data are designed to surface the most actionable insights. Heuristics are biased towards reducing false positives (ie, bad recommendations), at the risk of missing some edge-case opportunities. While Cloud Linter favors cost optimization as the clearest metric for demonstrating impact, it may offer suggestions that improve other crucial metrics, such as availability and scalability, even if that would increase cost."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Cloud Linter is a living project. Support for more resource types will be added frequently, so check back here often for the latest updates!"),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"Please note that Cloud Linter is designed solely for the purpose of calling specific control plane APIs listed below. Cloud Linter does not perform any resource-intensive operations on production services' CPU and memory."),(0,o.kt)("p",null,"Cloud Linter is intended to interact with the following AWS services via their respective control plane APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon DynamoDB"),(0,o.kt)("li",{parentName:"ul"},"Amazon ElastiCache"),(0,o.kt)("li",{parentName:"ul"},"Amazon CloudWatch")),(0,o.kt)("p",null,"The usage of the software is limited to the following API calls and transactions per second (TPS):"),(0,o.kt)("p",null,"Elasticache:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DescribeCacheClusters: 10 TPS"),(0,o.kt)("li",{parentName:"ul"},"DescribeServerlessCaches: 10 TPS")),(0,o.kt)("p",null,"DynamoDB:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ListTables: 10 TPS"),(0,o.kt)("li",{parentName:"ul"},"DescribeTable: 10 TPS"),(0,o.kt)("li",{parentName:"ul"},"DescribeTimeToLive: 1 TPS")),(0,o.kt)("p",null,"CloudWatch:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GetMetricData: 20 TPS")),(0,o.kt)("p",null,"Cloud Linter is designed to always stay within these specified limits. It's crafted with careful consideration to avoid generating any traffic to these APIs that could lead to AWS throttling or disrupt the normal operations of your AWS resources.\nPlease note that while the average running time typically spans 15 minutes, this can vary significantly based on the volume of data being processed. Therefore, the process may extend up to 1 hour in some cases."),(0,o.kt)("p",null,"Cloud Linter complies with Momento's Terms of Service. For further information, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/terms-of-service"},"Terms of Service")," page."))}d.isMDXComponent=!0},2694:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cloud-linter-diagram-e6f301dfc36c516579826e91a4b64015.png"}}]);