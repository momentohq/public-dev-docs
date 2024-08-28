"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2366],{9042:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(4848),o=i(8453);const l={sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},s="Cloud Linter \u3068\u306f?",r={id:"cloud-linter/index",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cloud-linter/index.md",sourceDirName:"cloud-linter",slug:"/cloud-linter/",permalink:"/ja/cloud-linter/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cloud-linter/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cloud Linter",title:"Cloud Linter",description:"Learn about the Momento Cloud Linter",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","lint","cloud","cloud lint","cloud linter","cost","redis","serverless"]},sidebar:"cloudLinterSidebar"},d={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"\u514d\u8cac\u4e8b\u9805",id:"\u514d\u8cac\u4e8b\u9805",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cloud-linter-\u3068\u306f",children:"Cloud Linter \u3068\u306f?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://console.gomomento.com/caches",children:"Cloud Linter"}),"\u306f\u3001\u30af\u30e9\u30a6\u30c9\u306e\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3092\u81ea\u52d5\u7684\u306b\u691c\u67fb\u3057\u3001\u4e00\u822c\u7684\u306a\u975e\u52b9\u7387\u6027\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3092\u4f01\u696d\u898f\u6a21\u3067\u904b\u7528\u3059\u308b\u3053\u3068\u306f\u3001\u30ac\u30d0\u30ca\u30f3\u30b9\u3068\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306e\u8ab2\u984c\u3067\u3059\u3002Cloud Linter\u306e\u3088\u3046\u306a\u81ea\u52d5\u5316\u30c4\u30fc\u30eb\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30c1\u30fc\u30e0\u304c\u5927\u898f\u6a21\u306a\u76e3\u67fb\u3092\u5b9f\u65bd\u3057\u305f\u308a\u3001\u88fd\u54c1\u30c1\u30fc\u30e0\u304c\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u81ea\u5df1\u8a55\u4fa1\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u5c0f\u898f\u6a21\u306a\u958b\u767a\u30c1\u30fc\u30e0\u306b\u3068\u3063\u3066\u306f\u3001\u84c4\u7a4d\u3055\u308c\u305f\u5c02\u9580\u77e5\u8b58\u306e\u81a8\u5927\u306a\u30d7\u30fc\u30eb\u306b\u5373\u5ea7\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image of Momento console landing page",src:i(7002).A+"",width:"803",height:"626"})}),"\n",(0,t.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u306f\u3001\u30b3\u30fc\u30c9\u30fb\u30ea\u30f3\u30bf\u30fc\u3092\u30e2\u30c7\u30eb\u306b\u3057\u3066\u304a\u308a\u3001\u691c\u51fa\u3055\u308c\u308b\u3082\u306e\u306f\u5fc5\u305a\u3057\u3082\u9593\u9055\u3063\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u7591\u308f\u3057\u3044\u3082\u306e\u3001\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u3082\u306e\u3060\u3051\u3067\u3059\u3002Momento\u30c1\u30fc\u30e0\u306e\u6570\u5341\u5e74\u306b\u308f\u305f\u308b\u30b0\u30ed\u30fc\u30d0\u30eb\u30fb\u30b9\u30b1\u30fc\u30eb\u306e\u30a4\u30f3\u30d5\u30e9\u904b\u7528\u306e\u7d4c\u9a13\u3084\u3001\u6280\u8853\u696d\u754c\u5168\u4f53\u306e\u30c7\u30b6\u30a4\u30f3\u30fb\u30d1\u30bf\u30fc\u30f3\u3084\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u30fb\u30c7\u30fc\u30bf\u306e\u53ef\u8996\u6027\u304b\u3089\u5f97\u3089\u308c\u305f\u5b66\u7fd2\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u304c\u8a2d\u5b9a\u3068\u4f7f\u7528\u30c7\u30fc\u30bf\u306b\u9069\u7528\u3059\u308b\u5206\u6790\u306f\u3001\u6700\u3082\u5b9f\u7528\u7684\u306a\u6d1e\u5bdf\u3092\u8868\u9762\u5316\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30d2\u30e5\u30fc\u30ea\u30b9\u30c6\u30a3\u30c3\u30af\u306f\u507d\u967d\u6027\uff08\u3064\u307e\u308a\u60aa\u3044\u63a8\u5968\uff09\u3092\u6e1b\u3089\u3059\u3053\u3068\u306b\u504f\u3063\u3066\u304a\u308a\u3001\u30a8\u30c3\u30b8\u30b1\u30fc\u30b9\u306e\u6a5f\u4f1a\u3092\u898b\u9003\u3059\u30ea\u30b9\u30af\u304c\u3042\u308a\u307e\u3059\u3002Cloud Linter\u306f\u3001\u5f71\u97ff\u3092\u5b9f\u8a3c\u3059\u308b\u305f\u3081\u306e\u6700\u3082\u660e\u78ba\u306a\u6307\u6a19\u3068\u3057\u3066\u30b3\u30b9\u30c8\u306e\u6700\u9069\u5316\u3092\u512a\u5148\u3057\u307e\u3059\u304c\u3001\u305f\u3068\u3048\u30b3\u30b9\u30c8\u304c\u5897\u52a0\u3059\u308b\u3068\u3057\u3066\u3082\u3001\u53ef\u7528\u6027\u3084\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u306a\u3069\u306e\u4ed6\u306e\u91cd\u8981\u306a\u6307\u6a19\u3092\u6539\u5584\u3059\u308b\u63d0\u6848\u3092\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u306f\u751f\u304d\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u65b0\u3057\u3044\u30eb\u30fc\u30eb\u3084\u3001\u3088\u308a\u591a\u304f\u306e\u30ea\u30bd\u30fc\u30b9\u30bf\u30a4\u30d7\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u983b\u7e41\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u6700\u65b0\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u305f\u3081\u306b\u983b\u7e41\u306b\u3053\u3053\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\uff01"}),"\n",(0,t.jsx)(n.h2,{id:"\u514d\u8cac\u4e8b\u9805",children:"\u514d\u8cac\u4e8b\u9805"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u306f\u4ee5\u4e0b\u306e\u7279\u5b9a\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3API\u3092\u547c\u3073\u51fa\u3059\u305f\u3081\u3060\u3051\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002Cloud Linter\u306f\u672c\u756a\u30b5\u30fc\u30d3\u30b9\u306eCPU\u3084\u30e1\u30e2\u30ea\u306b\u5bfe\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u5927\u91cf\u306b\u6d88\u8cbb\u3059\u308b\u3088\u3046\u306a\u64cd\u4f5c\u306f\u884c\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u306f\u3001\u305d\u308c\u305e\u308c\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3API\u3092\u4ecb\u3057\u3066\u4ee5\u4e0b\u306eAWS\u30b5\u30fc\u30d3\u30b9\u3068\u76f8\u4e92\u4f5c\u7528\u3059\u308b\u3053\u3068\u3092\u610f\u56f3\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Amazon DynamoDB"}),"\n",(0,t.jsx)(n.li,{children:"Amazon ElastiCache"}),"\n",(0,t.jsx)(n.li,{children:"Amazon CloudWatch"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u4ee5\u4e0b\u306eAWS\u30b5\u30fc\u30d3\u30b9\u3068\u3084\u308a\u3068\u308a\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Amazon S3, ",(0,t.jsx)(n.code,{children:"--enable-s3"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b"]}),"\n",(0,t.jsxs)(n.li,{children:["Amazon API Gateway, ",(0,t.jsx)(n.code,{children:"--enable-api-gateway"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u4f7f\u7528\u306f\u3001\u4ee5\u4e0b\u306eAPI\u30b3\u30fc\u30eb\u30681\u79d2\u3042\u305f\u308a\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff08TPS\uff09\u306b\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"Elasticache:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DescribeCacheClusters: 10 TPS"}),"\n",(0,t.jsx)(n.li,{children:"DescribeServerlessCaches: 10 TPS"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"DynamoDB:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ListTables: 10 TPS"}),"\n",(0,t.jsx)(n.li,{children:"DescribeTable: 10 TPS"}),"\n",(0,t.jsx)(n.li,{children:"DescribeTimeToLive: 1 TPS"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"CloudWatch:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GetMetricData: 20 TPS"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"S3:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ListBuckets"}),"\n",(0,t.jsx)(n.li,{children:"ListBucketMetricsConfigurations: 10 TPS"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"API Gateway:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GetRestApis: 10 TPS"}),"\n",(0,t.jsx)(n.li,{children:"GetRestApi: 10 TPS"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u306f\u5e38\u306b\u3053\u308c\u3089\u306e\u6307\u5b9a\u3055\u308c\u305f\u5236\u9650\u5185\u306b\u53ce\u307e\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002AWS\u306e\u30b9\u30ed\u30c3\u30c8\u30ea\u30f3\u30b0\u3084AWS\u30ea\u30bd\u30fc\u30b9\u306e\u6b63\u5e38\u306a\u904b\u7528\u306b\u652f\u969c\u3092\u304d\u305f\u3059\u3088\u3046\u306aAPI\u3078\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u767a\u751f\u3055\u305b\u306a\u3044\u3088\u3046\u3001\u7d30\u5fc3\u306e\u6ce8\u610f\u3092\u6255\u3063\u3066\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\n\u5e73\u5747\u5b9f\u884c\u6642\u9593\u306f\u901a\u5e3815\u5206\u3067\u3059\u304c\u3001\u3053\u308c\u306f\u51e6\u7406\u3055\u308c\u308b\u30c7\u30fc\u30bf\u91cf\u306b\u3088\u3063\u3066\u5927\u304d\u304f\u5909\u308f\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u305f\u3081\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f1\u6642\u9593\u7a0b\u5ea6\u304b\u304b\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u30af\u30e9\u30a6\u30c9\u30ea\u30f3\u30bf\u30fc\u306e\u4f7f\u7528\u65b9\u6cd5\u3068\u5236\u9650\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://docs.momentohq.com/cloud-linter",children:"https://docs.momentohq.com/cloud-linter"})," \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Cloud Linter\u306fMomento\u306e\u30b5\u30fc\u30d3\u30b9\u5229\u7528\u898f\u7d04\u306b\u6e96\u62e0\u3057\u3066\u3044\u307e\u3059\u3002Momento\u306e\u30b5\u30fc\u30d3\u30b9\u898f\u7d04\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30b5\u30fc\u30d3\u30b9\u898f\u7d04\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\uff1a ",(0,t.jsx)(n.a,{href:"https://www.gomomento.com/terms-of-service",children:"https://www.gomomento.com/terms-of-service"})]}),"\n",(0,t.jsx)(n.p,{children:"Cloud Linter\u306f\u5e38\u306b\u3053\u308c\u3089\u306e\u6307\u5b9a\u3055\u308c\u305f\u5236\u9650\u5185\u306b\u53ce\u307e\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002AWS\u306e\u30b9\u30ed\u30c3\u30c8\u30ea\u30f3\u30b0\u3084AWS\u30ea\u30bd\u30fc\u30b9\u306e\u6b63\u5e38\u306a\u904b\u7528\u306b\u652f\u969c\u3092\u304d\u305f\u3059\u3088\u3046\u306aAPI\u3078\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u767a\u751f\u3055\u305b\u306a\u3044\u3088\u3046\u3001\u7d30\u5fc3\u306e\u6ce8\u610f\u3092\u6255\u3063\u3066\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\n\u5e73\u5747\u5b9f\u884c\u6642\u9593\u306f\u901a\u5e3815\u5206\u3067\u3059\u304c\u3001\u3053\u308c\u306f\u51e6\u7406\u3055\u308c\u308b\u30c7\u30fc\u30bf\u91cf\u306b\u3088\u3063\u3066\u5927\u304d\u304f\u5909\u308f\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u305f\u3081\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f1\u6642\u9593\u7a0b\u5ea6\u304b\u304b\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Cloud Linter\u306fMomento\u306e\u5229\u7528\u898f\u7d04\u306b\u6e96\u62e0\u3057\u3066\u3044\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,t.jsx)(n.a,{href:"https://www.gomomento.com/terms-of-service",children:"\u5229\u7528\u898f\u7d04"}),"\u306e\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7002:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cloud-linter-diagram-23b026d84b2f569a914e6b4fd7c4e643.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);