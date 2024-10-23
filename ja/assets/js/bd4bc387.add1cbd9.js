"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1494],{2254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var r=s(4848),i=s(8453);const t={sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},d="Momento\u30c8\u30d4\u30c3\u30af\u306eHTTP API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",c={id:"topics/api-reference/http-api",title:"HTTP API for Momento Topics",description:"Discover the HTTP API for edge computing services to access pub/sub services.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/api-reference/http-api.md",sourceDirName:"topics/api-reference",slug:"/topics/api-reference/http-api",permalink:"/ja/topics/api-reference/http-api",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},sidebar:"topicsSidebar",previous:{title:"Webhooks",permalink:"/ja/topics/api-reference/webhooks"},next:{title:"Response objects",permalink:"/ja/topics/api-reference/response-objects"}},l={},h=[{value:"Authentication",id:"authentication",level:2},{value:"Publish",id:"publish",level:2},{value:"Request",id:"request",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses",level:3},{value:"Success",id:"success",level:4},{value:"Error",id:"error",level:4},{value:"Examples",id:"examples",level:3},{value:"Publish with token query parameter",id:"publish-with-token-query-parameter",level:4},{value:"Publish with Authorization header",id:"publish-with-authorization-header",level:4},{value:"Subscribe",id:"subscribe",level:2},{value:"Request",id:"request-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:4},{value:"Query parameters",id:"query-parameters-1",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Success",id:"success-1",level:3},{value:"Error",id:"error-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Request with no sequence number",id:"request-with-no-sequence-number",level:4},{value:"Request with a sequence number provided",id:"request-with-a-sequence-number-provided",level:4}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"momento\u30c8\u30d4\u30c3\u30af\u306ehttp-api\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",children:"Momento\u30c8\u30d4\u30c3\u30af\u306eHTTP API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})}),"\n",(0,r.jsxs)(n.p,{children:["Momento\u306f\u3001\u79c1\u305f\u3061\u306e",(0,r.jsx)(n.a,{href:"../",children:"SDK"}),"\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u3001curl\u3084fetch\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u4f7f\u7528\u3057\u305f\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306bHTTP API\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,r.jsx)(n.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare Workers"}),"\u3001",(0,r.jsx)(n.a,{href:"https://www.fastly.com/products/edge-compute",children:"Fastly Compute@Edge"}),"\u306a\u3069\u306e\u30a8\u30c3\u30b8\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u30b5\u30fc\u30d3\u30b9\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5834\u5408\u3001\u3053\u306eAPI\u306f\u3042\u306a\u305f\u306e\u305f\u3081\u306b\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001",(0,r.jsx)(n.a,{href:"../",children:"Momento's SDK clients"})," \u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u306e",(0,r.jsx)(n.a,{href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00",children:"Postman\u306e\u516c\u958b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"}),".\u3067\u3082Open API Specification\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"Info",type:"tip",children:(0,r.jsxs)(n.p,{children:["Momento\u306f\u30ea\u30fc\u30b8\u30e7\u30f3\u30d9\u30fc\u30b9\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u4e16\u754c\u4e2d\u3067\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u3002\u3054\u5e0c\u671b\u306e\u5730\u57df\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044\u3002\u30b5\u30dd\u30fc\u30c8\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044](mailto",":support","@momentohq.com)\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(n.p,{children:["\u5404\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f\u3001",(0,r.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"})," \u307e\u305f\u306f ",(0,r.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3057\u3066\u3044\u308b\u30c8\u30fc\u30af\u30f3\u300c\u81ea\u52d5\u8ca9\u58f2\u6a5f\u300d\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9"})," \u3092\u4ecb\u3057\u3066\u751f\u6210\u3055\u308c\u305f API \u30ad\u30fc\u307e\u305f\u306f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002Momento auth \u30c8\u30fc\u30af\u30f3\u306f\u3001Momento \u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3057\u3001\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3057\u305f\u308a\u3001\u7279\u5b9a\u306e\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef/\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30c8\u30fc\u30af\u30f3\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e2\u3064\u306e\u5834\u6240\u306e\u3044\u305a\u308c\u304b\u3067\u6307\u5b9a\u3055\u308c\u308b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["An ",(0,r.jsx)(n.code,{children:"Authorization"})," header"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"token"})," query parameter"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Tip",type:"info",children:(0,r.jsxs)(n.p,{children:["\u30d8\u30c3\u30c0\u30fc\u3068\u30af\u30a8\u30ea\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u4e21\u65b9\u304c\u63d0\u4f9b\u3055\u308c\u308b\u5834\u5408\u3001 ",(0,r.jsxs)(n.em,{children:["\u30ea\u30af\u30a8\u30b9\u30c8\u306f",(0,r.jsx)(n.code,{children:"400 Bad Request"}),"\u3067\u5931\u6557\u3059\u3057\u307e\u3059\u3002"]})]})}),"\n",(0,r.jsx)(n.h2,{id:"publish",children:"Publish"}),"\n",(0,r.jsx)(n.p,{children:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Path: /topics/{cacheName}/{topicName}"}),"\n",(0,r.jsx)(n.li,{children:"HTTP Method: POST"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter\xa0name"}),(0,r.jsx)(n.th,{children:"Required?"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheName"}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"URL-safe string"}),(0,r.jsx)(n.td,{children:"\u30c8\u30d4\u30c3\u30af\u3092\u542b\u3080\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicName"}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"URL-safe string"}),(0,r.jsx)(n.td,{children:"\u516c\u958b\u3059\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter\xa0name"}),(0,r.jsx)(n.th,{children:"Required?"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"token"})}),(0,r.jsx)(n.td,{children:"no**"}),(0,r.jsx)(n.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3059\u308b Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3 (\u6587\u5b57\u5217\u5f62\u5f0f)"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header\xa0name"}),(0,r.jsx)(n.th,{children:"Required?"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Authorization"})}),(0,r.jsx)(n.td,{children:"no**"}),(0,r.jsx)(n.td,{children:"\u6587\u5b57\u5217\u5f62\u5f0f\u306e Momento auth \u30c8\u30fc\u30af\u30f3\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Content-Type"})}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsxs)(n.td,{children:["\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\uff08UTF-8\uff09\u3092\u516c\u958b\u3059\u308b\u306b\u306f ",(0,r.jsx)(n.code,{children:"text/plain"})," \u3092\u6307\u5b9a\u3059\u308b\u3002\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u516c\u958b\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"application/octet-stream"})," \u3092\u6307\u5b9a\u3057\u307e\u3059"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"body",children:"Body"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP POST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u672c\u6587\u306b\u306f\u3001\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3059\u308b\u5024\u3092\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u516c\u958b\u3067\u304d\u308b\u306e\u306f\n\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\u304b\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u306e\u3069\u3061\u3089\u304b\u3092\u516c\u958b\u3067\u304d\u307e\u3059\u3002\u516c\u958b\u3059\u308b\u30c7\u30fc\u30bf\u306e\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3059\u308b\u306b\u306f\u3001\u4e0a\u8a18\u306e ",(0,r.jsx)(n.a,{href:"#Headers",children:"\u30d8\u30c3\u30c0\u30fc"})," \u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3057\u305f ",(0,r.jsx)(n.code,{children:"Content-Type"})," \u30d8\u30c3\u30c0\u30fc\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"responses",children:"Responses"}),"\n",(0,r.jsx)(n.h4,{id:"success",children:"Success"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status Code: 204 No Content"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u6307\u5b9a\u3055\u308c\u305f\u30c8\u30d4\u30c3\u30af\u306b\u6b63\u5e38\u306b\u516c\u958b\u3055\u308c\u307e\u3057\u305f"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"error",children:"Error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 400 Bad Request"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6307\u5b9a\u304c\u6b63\u3057\u304f\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u3092\u53c2\u7167\u306e\u3053\u3068\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 401 Unauthorized"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u6e21\u3055\u308c\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u7121\u52b9\u304b\u671f\u9650\u5207\u308c\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u672c\u6587\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 403 Forbidden"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u6e21\u3055\u308c\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u3001\u8a66\u884c\u3057\u305f\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u5fc5\u8981\u306a\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u672c\u6587\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 404 Not Found"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u300cCache Not Found\u300d\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5b58\u5728\u3057\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 429 Too Many Requests"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc \u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4e0a\u9650\u3092\u8d85\u3048\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u3092\u53c2\u7167\u3059\u308b\u304b\u3001Momento \u30b5\u30dd\u30fc\u30c8\u306b\u9023\u7d61\u3057\u3066\u9650\u5ea6\u984d\u306e\u5f15\u304d\u4e0a\u3052\u3092\u4f9d\u983c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 500 Internal Server Error"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002Momento\u30b5\u30dd\u30fc\u30c8\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f\u3001",(0,r.jsx)(n.code,{children:"hello world!"})," \u3068\u3044\u3046\u5024\u3092 ",(0,r.jsx)(n.em,{children:"us-east-1"})," \u30ea\u30fc\u30b8\u30e7\u30f3\u306e ",(0,r.jsx)(n.em,{children:"my-cache"})," \u30ad\u30e3\u30c3\u30b7\u30e5\u306e ",(0,r.jsx)(n.em,{children:"example"})," \u30c8\u30d4\u30c3\u30af\u306b\u767a\u884c\u3059\u308b\u4f8b\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"publish-with-token-query-parameter",children:"Publish with token query parameter"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"curl -X POST -d 'hello world!' \"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>\""})}),"\n",(0,r.jsx)(n.h4,{id:"publish-with-authorization-header",children:"Publish with Authorization header"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'curl -X POST -H "Authorization: <token>" -d \'hello world!\' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"'})}),"\n",(0,r.jsx)(n.h2,{id:"subscribe",children:"Subscribe"}),"\n",(0,r.jsx)(n.p,{children:"\u9577\u3044\u30dd\u30fc\u30ea\u30f3\u30b0\u306b\u3088\u3063\u3066\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u306e\u3092\u5f85\u3061\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Path: /topics/{cacheName}/{topicName}"}),"\n",(0,r.jsx)(n.li,{children:"HTTP Method: GET"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"path-parameters-1",children:"Path parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter\xa0name"}),(0,r.jsx)(n.th,{children:"Required?"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheName"}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"URL-safe string"}),(0,r.jsx)(n.td,{children:"\u30c8\u30d4\u30c3\u30af\u3092\u542b\u3080\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicName"}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"URL-safe string"}),(0,r.jsx)(n.td,{children:"\u8cfc\u8aad\u3059\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"query-parameters-1",children:"Query parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter\xa0name"}),(0,r.jsx)(n.th,{children:"Required?"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"token"})}),(0,r.jsx)(n.td,{children:"no**"}),(0,r.jsx)(n.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3059\u308b Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3 (\u6587\u5b57\u5217\u5f62\u5f0f)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sequence_number"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u6700\u5f8c\u306b\u53d7\u4fe1\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u6307\u5b9a\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9806\u756a\u306b\u53d7\u4fe1\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u304b\u3001\u307e\u305f\u306f\u4e0d\u9023\u7d9a\u3092\u691c\u51fa\u3059\u308b"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"headers-1",children:"Headers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header\xa0name"}),(0,r.jsx)(n.th,{children:"Required?"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Authorization"})}),(0,r.jsx)(n.td,{children:"no**"}),(0,r.jsx)(n.td,{children:"\u6587\u5b57\u5217\u5f62\u5f0f\u306e Momento auth \u30c8\u30fc\u30af\u30f3\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"responses-1",children:"Responses"}),"\n",(0,r.jsx)(n.h3,{id:"success-1",children:"Success"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 200 OK"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306f\u6210\u529f\u3057\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8fd4\u3055\u308c\u307e\u3057\u305f\u3002\u5fdc\u7b54\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u305d\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u756a\u53f7\u3092\u6301\u3064 JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u542b\u307f\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u30b7\u30fc\u30b1\u30f3\u30b9\u306b\u30ae\u30e3\u30c3\u30d7\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u4e0d\u9023\u7d9a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"error-1",children:"Error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 401 Unauthorized"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u6e21\u3055\u308c\u305fMomento\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u7121\u52b9\u304b\u671f\u9650\u5207\u308c\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u672c\u6587\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 403 Forbidden"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u6e21\u3055\u308c\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u3001\u8a66\u884c\u3057\u305f\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u5fc5\u8981\u306a\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u672c\u6587\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 404 Not Found"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'\u300cCache Not Found" \u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u307e\u305f\u306f\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3057\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 429 Too Many Requests"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc \u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4e0a\u9650\u3092\u8d85\u3048\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u3092\u53c2\u7167\u3059\u308b\u304b\u3001Momento \u30b5\u30dd\u30fc\u30c8\u306b\u9023\u7d61\u3057\u3066\u4e0a\u9650\u306e\u5f15\u304d\u4e0a\u3052\u3092\u8981\u6c42\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Status code: 500 Internal Server Error"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002Momento\u30b5\u30dd\u30fc\u30c8\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsx)(n.h4,{id:"request-with-no-sequence-number",children:"Request with no sequence number"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u30d8\u30c3\u30c0\u30fc\u3068\u3057\u3066auth\u3092\u542b\u307f\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'curl -X GET -H "Authorization: <token>" "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/my-topic"'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "item": {\n        "topic_sequence_number": 0,\n        "value": {\n          "text": "hello world"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"request-with-a-sequence-number-provided",children:"Request with a sequence number provided"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f\u3001\u30af\u30a8\u30ea\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3068\u3057\u3066auth\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'curl -X GET "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/my-topic?token=<token>&sequence_number=100"'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "discontinuity": {\n        "last_topic_sequence": 100,\n        "new_topic_sequence": 104\n      }\n    },\n    {\n      "item": {\n        "topic_sequence_number": 104,\n        "value": {\n          "text": "hello world"\n        }\n      }\n    }\n  ]\n}\n\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(6540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);