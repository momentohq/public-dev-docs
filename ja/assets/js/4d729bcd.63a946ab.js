"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2872],{3559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(4848),o=n(8453);n(2821),n(503);const s={sidebar_position:2,sidebar_label:"Observability",title:"Observability for .NET SDK",displayed_sidebar:"platformSidebar",description:"Instrument your Momento-enabled .NET code with Logs, Metrics, and Traces"},r=".NET\u306eMomento\u306b\u3088\u308b\u89b3\u6e2c\u53ef\u80fd\u6027",d={id:"platform/sdks/dotnet/observability",title:"Observability for .NET SDK",description:"Instrument your Momento-enabled .NET code with Logs, Metrics, and Traces",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/sdks/dotnet/observability.mdx",sourceDirName:"platform/sdks/dotnet",slug:"/platform/sdks/dotnet/observability",permalink:"/ja/platform/sdks/dotnet/observability",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/dotnet/observability.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Observability",title:"Observability for .NET SDK",displayed_sidebar:"platformSidebar",description:"Instrument your Momento-enabled .NET code with Logs, Metrics, and Traces"},sidebar:"platformSidebar",previous:{title:"Topics",permalink:"/ja/platform/sdks/dotnet/topics"},next:{title:"Unity (C#)",permalink:"/ja/platform/sdks/unity/"}},a={},l=[{value:"\u30ed\u30ae\u30f3\u30b0",id:"\u30ed\u30ae\u30f3\u30b0",level:2},{value:"\u30e1\u30c8\u30ea\u30af\u30b9",id:"\u30e1\u30c8\u30ea\u30af\u30b9",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"net\u306emomento\u306b\u3088\u308b\u89b3\u6e2c\u53ef\u80fd\u6027",children:".NET\u306eMomento\u306b\u3088\u308b\u89b3\u6e2c\u53ef\u80fd\u6027"})}),"\n",(0,i.jsx)(t.h2,{id:"\u30ed\u30ae\u30f3\u30b0",children:"\u30ed\u30ae\u30f3\u30b0"}),"\n",(0,i.jsx)(t.p,{children:"\u3059\u3079\u3066\u306eMomento SDK\u306e\u76ee\u6a19\u306f\u3001\u958b\u767a\u8005\u304cMomento\u306e\u30ed\u30b0\u51fa\u529b\u3092\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3068\u540c\u3058\u5b9b\u5148\u306b\u5411\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u7279\u5b9a\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u4e00\u822c\u7684\u306a\u30ed\u30ae\u30f3\u30b0\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u3059\u3079\u3066\u3068\u4e92\u63db\u6027\u304c\u3042\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(t.p,{children:[".NET SDK\u306f",(0,i.jsxs)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/extensions/logging?tabs=command-line",children:[(0,i.jsx)(t.code,{children:"ILoggerFactory"}),"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3068",(0,i.jsx)(t.code,{children:"ILogger"}),"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"]}),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u9069\u5207\u306a\u30ed\u30ae\u30f3\u30b0\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30ed\u30b0\u3092\u5e0c\u671b\u3059\u308b\u5b9b\u5148\u306b\u66f8\u304d\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u597d\u307f\u306e\u30ed\u30ac\u30fc\u304c ",(0,i.jsx)(t.code,{children:"ILogger"})," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3057\u3066\u3044\u308c\u3070\u3001 Momento \u306e\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30ed\u30ac\u30fc\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u3042\u306a\u305f\u304c\u66f8\u3044\u305f\u30ab\u30b9\u30bf\u30e0\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u5b9f\u88c5 (",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/src/Momento.Sdk/Config/Middleware/LoggingMiddleware.cs",children:"\u4f8b\u306f\u3053\u3061\u3089"}),") \u3067\u3082\u3001\u304a\u597d\u307f\u306e\u30ed\u30ac\u30fc\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30ed\u30ae\u30f3\u30b0\u74b0\u5883\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"[1685649962168] INFO (CacheClient/4386 on mycomputer.local): Creating Momento CacheClient\n[1685649962168] INFO (ControlClient/4386 on mycomputer.local): Creating cache: test-cache\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u30e1\u30c8\u30ea\u30af\u30b9",children:"\u30e1\u30c8\u30ea\u30af\u30b9"}),"\n",(0,i.jsx)(t.p,{children:"\u30e1\u30c8\u30ea\u30af\u30b9\u3068\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3084\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u5b9a\u91cf\u7684\u306a\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u6e2c\u5b9a\u5024\u306e\u3053\u3068\u3067\u3042\u308b\u3002\u4e00\u5b9a\u306e\u9593\u9694\u3067\u53d6\u5f97\u30fb\u8a18\u9332\u3055\u308c\u308b\u6570\u5024\u3067\u3042\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u50be\u5411\u3084\u30d1\u30bf\u30fc\u30f3\u3092\u7406\u89e3\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u7d71\u8a08\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3059\u308b\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u7279\u306bMomento\u306e\u5834\u5408\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6570\u3001\u6642\u9593\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30b5\u30a4\u30ba\u3001\u5931\u6557\u7387\u306a\u3069\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u53d6\u5f97\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u51fa\u529b\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001",(0,i.jsx)(t.code,{children:"ExperimentalMetricsMiddleware"}),"\u30af\u30e9\u30b9\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u306fJSON\u5f62\u5f0f\u3067\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u51fa\u529b\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'(Momento: _ExperimentalMetricsLoggingMiddleware):\n{\n  "momento": {\n    "numActiveRequestsAtStart": 1,\n    "numActiveRequestsAtFinish": 1,\n    "requestType": "_GetRequest",\n    "status": 0,\n    "startTime": 1697663118489,\n    "requestBodyTime": 1697663118489,\n    "endTime": 1697663118492,\n    "duration": 3,\n    "requestSize": 32,\n    "responseSize": 2,\n    "connectionID": "0"\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u5c06\u6765\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3001\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u5b89\u5b9a\u3057\u305f\u3068\u307f\u306a\u3055\u308c\u305f\u6642\u70b9\u3067\u3001\u3053\u306e\u30af\u30e9\u30b9\u306f ",(0,i.jsx)(t.code,{children:"Experimental"})," \u3068\u3044\u3046\u63a5\u982d\u8f9e\u3092\u53d6\u308a\u9664\u3044\u305f\u540d\u524d\u306b\u5909\u66f4\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u30fb\u30af\u30e9\u30b9\u306f2\u3064\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[ExperimentalMetricsLoggingMiddleware",(0,i.jsx)(t.code,{children:"](https://github.com/momentohq/client-sdk-dotnet/blob/main/src/Momento.Sdk/Config/Middleware/ExperimentalMetricsLoggingMiddleware.cs)\uff1a\u9078\u629e\u3057\u305f\u30ed\u30ac\u30fc\u306b\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u51fa\u529b\u3057\u307e\u3059\u3002\u8b66\u544a: \u30ea\u30af\u30a8\u30b9\u30c8\u91cf\u306b\u5fdc\u3058\u3066\u3001\u3053\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306f\u5927\u91cf\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u306b\u76f4\u63a5\u30ed\u30b0\u3092\u66f8\u304d\u8fbc\u3080\u5834\u5408\u306f\u3001\u30c7\u30a3\u30b9\u30af\u306e\u4f7f\u7528\u91cf\u306b\u6ce8\u610f\u3057\u3001"}),"logrotate`\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3067\u30ed\u30b0\u306e\u30ed\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3/\u5727\u7e2e\u3092\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/src/Momento.Sdk/Config/Middleware/ExperimentalMetricsCsvMiddleware.cs",children:"ExperimentalMetricsCsvMiddleware`"}),"\uff1a\u30e1\u30c8\u30ea\u30af\u30b9\u3092CSV\u30d5\u30a1\u30a4\u30eb\u306b\u51fa\u529b\u3057\u307e\u3059\u3002\u8b66\u544a: \u3053\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u3061\u3087\u3063\u3068\u3057\u305f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u4e0a\u306e\u5f71\u97ff\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u91cf\u306b\u3088\u3063\u3066\u306f\u3001CSV\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u3059\u3050\u306b\u5927\u304d\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u3084CSV\u3092\u5206\u6790\u3057\u305f\u308a\u3001Momento\u3068\u5171\u6709\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u554f\u984c\u3092\u8a3a\u65ad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30ed\u30b0\u3092 AWS CloudWatch Log Group \u306b\u8ee2\u9001\u3057\u3001CloudWatch \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3066 Momento \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u76e3\u8996\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/cloudwatch-metrics",children:"Momento \u30e1\u30c8\u30ea\u30af\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u8d77\u52d5\u4f8b"})," \u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001Node.js SDK \u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002Node.js\u306eLambda\u3068Fargate\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b\u3067\u306f\u3001",(0,i.jsx)(t.code,{children:"ExperimentalMetricsLoggingMiddleware"}),"\u30af\u30e9\u30b9\u3068CloudWatch\u30e1\u30c8\u30ea\u30c3\u30af\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u5229\u7528\u3057\u3066\u3001\u4e0b\u56f3\u306e\u3088\u3046\u306a\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u751f\u6210\u3057\u3066\u3044\u307e\u3059\u304c\u3001CloudWatch\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3060\u3051\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3001\u72ec\u81ea\u306e.NET\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30b0\u30e9\u30d5\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"An image of a CloudWatch dashboard with nine graphs populated by Momento metrics",src:n(4814).A+"",width:"3456",height:"2234"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var i=n(1432),o=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,o.jsx)(i.A,{language:t,children:n})}},4814:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cloudwatch-dashboard-0cb80aeb853a930776addddbd2e28ce6.png"}}]);