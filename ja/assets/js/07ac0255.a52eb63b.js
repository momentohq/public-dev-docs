"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7108],{45126:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=o(74848),i=o(28453);const s={sidebar_position:2,sidebar_label:"Live reactions",title:"Live reactions",description:"Learn how to overlay live reactions on your content with Momento MediaStore",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","metrics","overlay","reactions"]},r="\u30d3\u30c7\u30aa\u30b9\u30c8\u30ea\u30fc\u30e0\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u7d75\u6587\u5b57\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",d={id:"mediastore/enhancements/live-reactions",title:"Live reactions",description:"Learn how to overlay live reactions on your content with Momento MediaStore",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/mediastore/enhancements/live-reactions.md",sourceDirName:"mediastore/enhancements",slug:"/mediastore/enhancements/live-reactions",permalink:"/ja/mediastore/enhancements/live-reactions",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/enhancements/live-reactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Live reactions",title:"Live reactions",description:"Learn how to overlay live reactions on your content with Momento MediaStore",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","metrics","overlay","reactions"]},sidebar:"mediastoreSidebar",previous:{title:"Viewer metrics",permalink:"/ja/mediastore/enhancements/viewer-metrics"}},c={},a=[{value:"How it works",id:"how-it-works",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Step 1: \u30c8\u30fc\u30af\u30f3\u767a\u884c\u6a5f\u306e\u4f5c\u6210",id:"step-1-\u30c8\u30fc\u30af\u30f3\u767a\u884c\u6a5f\u306e\u4f5c\u6210",level:2},{value:"Step 2: \u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u3068\u7d75\u6587\u5b57\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306e\u4f5c\u6210",id:"step-2-\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u3068\u7d75\u6587\u5b57\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306e\u4f5c\u6210",level:2},{value:"Step 3: Momento\u30c8\u30d4\u30c3\u30af\u30b9\u3092\u4f7f\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u516c\u958b",id:"step-3-momento\u30c8\u30d4\u30c3\u30af\u30b9\u3092\u4f7f\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u516c\u958b",level:2},{value:"Step 4: \u7d75\u6587\u5b57\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u8868\u793a",id:"step-4-\u7d75\u6587\u5b57\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u8868\u793a",level:2},{value:"Step 5: \u7d75\u6587\u5b57\u3092\u98db\u3070\u305d\u3046\uff01",id:"step-5-\u7d75\u6587\u5b57\u3092\u98db\u3070\u305d\u3046",level:2},{value:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u521d\u671f\u5316\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u521d\u671f\u5316\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"Server-side code",id:"server-side-code",level:3},{value:"Client-side code",id:"client-side-code",level:3},{value:"\u5b66\u3093\u3060\u6982\u5ff5",id:"\u5b66\u3093\u3060\u6982\u5ff5",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u30d3\u30c7\u30aa\u30b9\u30c8\u30ea\u30fc\u30e0\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u7d75\u6587\u5b57\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",children:"\u30d3\u30c7\u30aa\u30b9\u30c8\u30ea\u30fc\u30e0\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u7d75\u6587\u5b57\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"})}),"\n",(0,t.jsx)(n.p,{children:"\u8996\u8074\u8005\u306e\u4f53\u9a13\u306b\u304a\u3044\u3066\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u6027\u306f\u91cd\u8981\u306a\u5f79\u5272\u3092\u679c\u305f\u3057\u3066\u3044\u307e\u3059\u3002\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u9001\u3063\u305f\u308a\u3001\u4ed6\u306e\u8996\u8074\u8005\u3068\u611f\u60c5\u3092\u5171\u6709\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3067\u3001\u30e1\u30c7\u30a3\u30a2\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3060\u3051\u3067\u306f\u5f97\u3089\u308c\u306a\u3044\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u611f\u3084\u30a8\u30f3\u30b2\u30fc\u30b8\u30e1\u30f3\u30c8\u304c\u751f\u307e\u308c\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u52d5\u753b\u30d7\u30ec\u30fc\u30e4\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u7d75\u6587\u5b57\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002Momento Topics** \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u5fdc\u3058\u3066\u7d75\u6587\u5b57\u306e\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5373\u5ea7\u306b\u8868\u793a\u3055\u308c\u308b\u305f\u3081\u3001\u751f\u304d\u751f\u304d\u3068\u3057\u305f\u9b45\u529b\u7684\u306a\u8996\u8074\u4f53\u9a13\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u5b8c\u5168\u306a",(0,t.jsx)(n.a,{href:"https://github.com/momentohq/demo-video-streaming",children:"GitHub\u306e\u4f8b"}),"\u306b\u98db\u3076\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001\u4ee5\u4e0b\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306b\u6cbf\u3063\u3066\u7c21\u5358\u306a\u5b9f\u88c5\u3092\u81ea\u5206\u3067\u4f5c\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Browser\n    participant Server\n    participant Momento\n    Browser->>+Server: Request auth token\n    Server->>+Momento: Create auth token\n    Momento--\x3e>-Server: Return auth token\n    Server--\x3e>-Browser: Send auth token\n    Browser->>+Momento: Publish reaction to Topics\n    Momento--\x3e>-Browser: Broadcast reaction to all viewers"}),"\n",(0,t.jsxs)(n.p,{children:["\u307e\u305a\u3001\u30d6\u30e9\u30a6\u30b6\u306f",(0,t.jsx)(n.em,{children:"token vending machine"}),"\u3068\u547c\u3070\u308c\u308b\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8981\u6c42\u3057\u307e\u3059\u3002\u3053\u306e\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u77ed\u547d\u3067\u30b9\u30b3\u30fc\u30d7\u304c\u9650\u5b9a\u3055\u308c\u305f",(0,t.jsx)(n.a,{href:"/cache/develop/authentication/tokens",children:"session tokens"}),"\u306e\u4f5c\u6210\u3068\u914d\u5e03\u3092\u62c5\u5f53\u3057\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u77ed\u671f\u9593\u6709\u52b9\u3067\u3001\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u9001\u53d7\u4fe1\u306b\u5fc5\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u307f\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30c8\u30fc\u30af\u30f3\u3092\u53d7\u3051\u53d6\u3063\u305f\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u3001\u3069\u306e\u7d75\u6587\u5b57\u304c\u62bc\u3055\u308c\u305f\u304b\u3092\u793a\u3059\u30e1\u30c3\u30bb\u30fc\u30b8\u3092",(0,t.jsx)(n.a,{href:"/topics",children:"Momento Topics"}),"\u306b\u516c\u958b\u3057\u307e\u3059\u3002Topics\u306f\u3001\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8cfc\u8aad\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306b\u7d75\u6587\u5b57\u3092\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"Momento Topics\u306b\u3088\u3063\u3066\u547c\u3073\u51fa\u3055\u308c\u305f\u30d6\u30e9\u30a6\u30b6\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306f\u3001\u753b\u9762\u4e0a\u306b\u7d75\u6587\u5b57\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-\u30c8\u30fc\u30af\u30f3\u767a\u884c\u6a5f\u306e\u4f5c\u6210",children:"Step 1: \u30c8\u30fc\u30af\u30f3\u767a\u884c\u6a5f\u306e\u4f5c\u6210"}),"\n",(0,t.jsxs)(n.p,{children:["\u52d5\u753b\u30d7\u30ec\u30fc\u30e4\u304c\u7d75\u6587\u5b57\u3092\u516c\u958b\u304a\u3088\u3073\u53d7\u4fe1\u3059\u308b\u306b\u306f\u3001Momento \u30c8\u30d4\u30c3\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u306b\u306f\u3001\u30bb\u30c3\u30b7\u30e7\u30f3 \u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u3066\u547c\u3073\u51fa\u3057\u5143\u306b\u8fd4\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001",(0,t.jsx)(n.code,{children:"POST /tokens"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u6301\u3064\u5358\u7d14\u306a ",(0,t.jsx)(n.a,{href:"https://expressjs.com/",children:"Express \u30b5\u30fc\u30d0"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import express from 'express';\nimport { AuthClient, ExpiresIn } from '@gomomento/sdk'\n\nconst authClient = new AuthClient();\nconst app = express();\napp.use(express.json());\n\napp.post('/tokens', (req, res) => {\n  const { playerId, streamId} = req.body;\n  const scope = {\n    permissions: [{\n      role: 'publishsubscribe',\n      cache: 'video',\n      topic: streamId\n    }]\n  },\n\n  const tokenResponse = await authClient.generateDisposableToken(scope, ExpiresIn.minutes(30), { tokenId: playerId });\n  res.status(201).json({ token: tokenResponse.authToken });\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u3053\u3067\u4f5c\u6210\u3057\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001",(0,t.jsx)(n.code,{children:"playerId"})," \u3068 ",(0,t.jsx)(n.code,{children:"streamId"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3059\u3002streamId",(0,t.jsx)(n.code,{children:" \u306f\u3001\u8996\u8074\u3059\u308b\u52d5\u753b\u30b9\u30c8\u30ea\u30fc\u30e0\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u305f\u52d5\u753b*\u306b\u9650\u5b9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"playerId",(0,t.jsx)(n.code,{children:"\u306f\u547c\u3073\u51fa\u3057\u5143\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002Momento \u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u306f\u3001*\u5e38\u306b\u30bb\u30c3\u30b7\u30e7\u30f3 \u30c8\u30fc\u30af\u30f3\u306b\u767a\u4fe1\u8005\u306e\u8b58\u5225\u5b50\u3092\u542b\u3081\u308b\u3088\u3046\u306b*\u8a00\u308f\u308c\u3066\u3044\u307e\u3059\u3002\u79c1\u305f\u3061\u306f"}),"playerId` \u3092\u76f4\u63a5\u57cb\u3081\u8fbc\u3093\u3060\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u3066\u304a\u308a\u3001\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u30e6\u30fc\u30b6\u30fc\u304c\u516c\u958b\u3059\u308b\u3059\u3079\u3066\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Momento AuthClient \u3092\u6b63\u3057\u304f\u521d\u671f\u5316\u3059\u308b\u306b\u306f\u3001Momento API \u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570 ",(0,t.jsx)(n.code,{children:"MOMENTO_API_KEY"})," \u306b\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e ",(0,t.jsx)(n.code,{children:"credentialProvider"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u76f4\u63a5\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u30c8\u30fc\u30af\u30f3\u3067\u4ed8\u4e0e\u3055\u308c\u305f\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306f\u3001\u547c\u3073\u51fa\u3057\u5143\u304c\u8996\u8074\u3057\u3066\u3044\u308b\u30d3\u30c7\u30aa\u30b9\u30c8\u30ea\u30fc\u30e0\u5c02\u7528\u306e\u30c8\u30d4\u30c3\u30af\u3078\u306e",(0,t.jsx)(n.em,{children:"publish"}),"\u3068",(0,t.jsx)(n.em,{children:"subscribe"}),"\u306e\u4e21\u65b9\u3092\u8a31\u53ef\u3059\u308b\u3002\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306f ",(0,t.jsx)(n.code,{children:"video"})," \u3068\u3044\u3046\u540d\u524d\u306e ",(0,t.jsx)(n.a,{href:"/cache",children:"cache"})," \u306b\u5b58\u5728\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6210\u529f\u3059\u308b\u3068\u3001\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f ",(0,t.jsx)(n.code,{children:"201 Created"})," \u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3068\u751f\u6210\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u3068\u7d75\u6587\u5b57\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306e\u4f5c\u6210",children:"Step 2: \u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u3068\u7d75\u6587\u5b57\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306e\u4f5c\u6210"}),"\n",(0,t.jsxs)(n.p,{children:["\u8996\u8074\u8005\u306b\u3088\u3063\u3066\u4e92\u3044\u306b\u9001\u4fe1\u3055\u308c\u308b\u7d75\u6587\u5b57\u306f\u3001\u5b9f\u969b\u306b\u306f\u57cb\u3081\u8fbc\u307f\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u81ea\u4f53\u306e\u4e00\u90e8\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u5b9f\u969b\u306b\u306f\u3001\u7d75\u6587\u5b57\u306f\u52d5\u753b\u30d7\u30ec\u30fc\u30e4\u30fc\u3092\u56f2\u3080 ",(0,t.jsx)(n.code,{children:"div"})," \u5185\u306b\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u7d75\u6587\u5b57\u306f ",(0,t.jsx)(n.em,{children:"\u7d76\u5bfe"})," \u4f4d\u7f6e\u6c7a\u3081\u3067\u914d\u7f6e\u3055\u308c\u3001CSS \u306e\u30ad\u30fc\u30d5\u30ec\u30fc\u30e0\u3067\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Live emoji reactions with Momento</title>\n  <style>\n    .video-container {\n      position: relative;\n    }\n    .reaction-buttons {\n      position: absolute;\n      display: flex;\n      top: 1rem;\n      right: 1rem;\n      gap: 0.5rem;\n    }\n    .reaction {\n      padding: 0.5rem;\n      background-color: black;\n      opacity: 0.5;\n      border-radius: 1.5rem;\n    }\n    .animated-emoji {\n      position: absolute;\n      bottom: 0;\n      font-size: 30px;\n      animation: floatUpAndOut 2s linear forwards;\n      pointer-events: none;\n    }\n    @keyframes floatUpAndOut {\n      0% { bottom: 0%; opacity: 1; transform: translateX(0) rotate(0deg); }\n      100% { bottom: 100%; opacity: 0; transform: translateX(20px) rotate(15deg); }\n    }\n  </style>\n</head>\n<body>\n  \x3c!-- Video Player Container --\x3e\n  <div id="videoPlayerContainer" class="video-container">\n    <video id="videoPlayer" controls autoplay muted></video>\n\n    \x3c!-- Reaction Buttons --\x3e\n    <div id="emojiReactions" class="reaction-buttons">\n      <button onclick="sendReaction(\'heart\')" class="reaction">\u2764\ufe0f</button>\n      <button onclick="sendReaction(\'100\')" class="reaction">\ud83d\udcaf</button>\n      <button onclick="sendReaction(\'thumbsup\')" class="reaction">\ud83d\udc4d</button>\n      <button onclick="sendReaction(\'mindblown\')" class="reaction">\ud83e\udd2f</button>\n    </div>\n  </div>\n</body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306eHTML\u3067\u306f\u3001\u5404\u7d75\u6587\u5b57\u30dc\u30bf\u30f3\u306f ",(0,t.jsx)(n.code,{children:"sendReaction"})," \u95a2\u6570\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u3001\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u3068\u7d75\u6587\u5b57\u306e\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002videoPlayerContainer`\u306b\u306f\u30d3\u30c7\u30aa\u30d7\u30ec\u30a4\u30e4\u30fc\u3068\u7d75\u6587\u5b57\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306e\u4e21\u65b9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u306f\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u53f3\u4e0a\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u2764\ufe0f, \ud83d\udcaf, \ud83d\udc4d, \u192f\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u304c\u79c1\u305f\u3061\u306e\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u57fa\u790e\u3067\u3059\u3002\u3055\u3066\u3001\u3053\u308c\u3092\u6a5f\u80fd\u3055\u305b\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\uff01"}),"\n",(0,t.jsx)(n.h2,{id:"step-3-momento\u30c8\u30d4\u30c3\u30af\u30b9\u3092\u4f7f\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u516c\u958b",children:"Step 3: Momento\u30c8\u30d4\u30c3\u30af\u30b9\u3092\u4f7f\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u516c\u958b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<script>"}),"\u30bf\u30b0\u304b\u5916\u90e8\u306e ",(0,t.jsx)(n.code,{children:"script.js"})," \u30d5\u30a1\u30a4\u30eb\u306b\u3001\u7d75\u6587\u5b57\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u3068\u304d\u306b\u30c8\u30fc\u30af\u30f3\u81ea\u52d5\u8ca9\u58f2\u6a5f\u3092\u547c\u3073\u51fa\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3059\u308b\u30ed\u30b8\u30c3\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u7c21\u5358\u306e\u305f\u3081\u3001\u30ed\u30fc\u30ab\u30eb\u3067\u5b9f\u884c\u3055\u308c\u308b\u3082\u306e\u3068\u4eee\u5b9a\u3057\u3001\u30c8\u30fc\u30af\u30f3\u81ea\u52d5\u8ca9\u58f2\u6a5f\u306e\u30d9\u30fc\u30b9URL\u3068\u3057\u3066 ",(0,t.jsx)(n.code,{children:"localhost"})," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let authToken;\nlet id = crypto.randomUUID();\nconst url = new URL(window.location.href);\nconst streamId = url.searchParams.get('videoId');\n\nconst response = await fetch('http://localhost/tokens', {\n  method: 'POST',\n  body: JSON.stringify({\n    playerId: id,\n    streamId: streamId\n  })\n});\n\nconst data = await response.json();\nauthToken = data.token;\n\nfunction sendReaction(reaction) {\n  fetch(`<MOMENTO_REGION_ENDOINT>/topics/video/${streamId}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': authToken\n    },\n    body: reaction\n  });\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u8996\u8074\u8005\u306b\u4e00\u610f\u306e ",(0,t.jsx)(n.code,{children:"playerId"})," \u3092\u751f\u6210\u3057\u3001\u30af\u30a8\u30ea\u6587\u5b57\u5217\u30d1\u30e9\u30e1\u30fc\u30bf ",(0,t.jsx)(n.code,{children:"videoId"})," \u304b\u3089\u8981\u6c42\u3055\u308c\u305f\u30d3\u30c7\u30aa ID \u3092\u53d6\u5f97\u3057\u3001\u30c8\u30fc\u30af\u30f3\u81ea\u52d5\u8ca9\u58f2\u6a5f\u304b\u3089\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u30c8\u30fc\u30af\u30f3\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u4fdd\u5b58\u3057\u3001Momento \u3092\u547c\u3073\u51fa\u3059\u969b\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u307e\u305f\u3001",(0,t.jsx)(n.code,{children:"sendReaction"})," \u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30b9\u30b3\u30fc\u30d7\u3055\u308c\u305f\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,t.jsx)(n.a,{href:"/topics/api-reference/http-api",children:"Momento HTTP API"})," \u3078\u306e\u547c\u3073\u51fa\u3057\u3092\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002Momento API\u3078\u306eURL\u306f",(0,t.jsx)(n.a,{href:"/platform/regions",children:"region-based"}),"\u3067\u3001\u5730\u57df\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002\u3053\u306e URL \u3092\u898b\u308b\u3068\u3001Momento Topics\u3001\u7279\u306b ",(0,t.jsx)(n.code,{children:"video"})," \u30ad\u30e3\u30c3\u30b7\u30e5\u306b POST \u3092\u884c\u3044\u3001",(0,t.jsx)(n.code,{children:"streamId"})," \u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d7\u30ec\u30fc\u30e4\u304c\u8996\u8074\u3057\u3066\u3044\u308b\u52d5\u753b\u56fa\u6709\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u30b9\u30b3\u30fc\u30d7\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u52d5\u753b\u306b\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u3001\u7279\u5b9a\u306e\u30e1\u30c7\u30a3\u30a2\u306b\u5bfe\u3057\u3066\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u3046\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3068\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4e00\u822c\u7684\u306a ",(0,t.jsx)(n.code,{children:"reactions"})," \u30c8\u30d4\u30c3\u30af\u306b\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30c8\u3057\u305f\u5834\u5408\u3001",(0,t.jsx)(n.em,{children:"\u3059\u3079\u3066\u306e\u52d5\u753b"}),"\u306b\u307e\u305f\u304c\u308b",(0,t.jsx)(n.em,{children:"\u3059\u3079\u3066\u306e\u30ea\u30a2\u30af\u30b7\u30e7\u30f3"}),"\u304c\u753b\u9762\u5168\u4f53\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"step-4-\u7d75\u6587\u5b57\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u8868\u793a",children:"Step 4: \u7d75\u6587\u5b57\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u8868\u793a"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ed6\u306e\u8996\u8074\u8005\u3068\u7d75\u6587\u5b57\u3092\u5171\u6709\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3057\u305f\u306e\u3067\u3001\u305d\u308c\u3089\u3092\u753b\u9762\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u306a\u52b9\u679c\u3092\u5f97\u308b\u305f\u3081\u306b\u3001\u5404\u7d75\u6587\u5b57\u306f\u52d5\u753b\u30d7\u30ec\u30fc\u30e4\u30fc\u3092\u6a2a\u5207\u308b\u30e9\u30f3\u30c0\u30e0\u306a\u4f4d\u7f6e\u306b\u914d\u7f6e\u3055\u308c\u3001\u4e0b\u304b\u3089\u4e0a\u306b\u5411\u304b\u3063\u3066\u5f90\u3005\u306b\u30d5\u30a7\u30fc\u30c9\u30a2\u30a6\u30c8\u3059\u308b\u3088\u3046\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3057\u307e\u3059\u3002\u30d5\u30a7\u30fc\u30c9\u30a2\u30c3\u30d7\u3068\u30d5\u30a7\u30fc\u30c9\u30a2\u30a6\u30c8\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001",(0,t.jsx)(n.em,{children:"step 2"})," \u3067 ",(0,t.jsx)(n.code,{children:"floatUpAndOut"})," \u30ad\u30fc\u30d5\u30ec\u30fc\u30e0 CSS \u30af\u30e9\u30b9\u3067\u8a2d\u5b9a\u6e08\u307f\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function displayEmoji(emoji) {\n  const emoji = document.createElement('div');\n  emoji.textContent = emoji;\n  emoji.className = 'animated-emoji';\n\n  // Random horizontal position within the video player\n  const containerWidth = document.getElementById('videoPlayerContainer').offsetWidth;\n  emoji.style.left = `${Math.random() * (containerWidth - 30)}px`;\n\n  document.getElementById('videoPlayerContainer').appendChild(emoji);\n\n  setTimeout(() => { emoji.remove(); }, 2000);\n}\n\nasync function longPoll(signal) {\n  try {\n    const response = await fetch('<MOMENTO_REGION_ENDOINT>/topics/video/${streamId}', {\n    headers: {\n      'Authorization': '{{{momento.token}}}',\n    }\n    });\n\n    if (response.ok) {\n      const data = await response.json();\n      if (data && data.items && data.items.length > 0) {\n        const emojiMap = {\n          'heart': '\u2764\ufe0f',\n          '100': '\ud83d\udcaf',\n          'thumbsup': '\ud83d\udc4d',\n          'mindblown': '\ud83e\udd2f'\n        };\n        data.items.forEach(item => {\n          if (item.item && item.item.value && item.item.value.text) {\n            const emoji = emojiMap[item.item.value.text];\n            if(emoji){\n              displayEmoji(emoji);\n            }\n          }\n        });\n      }\n    }\n  } catch (error) {\n    if (error.name !== 'AbortError') {\n      console.error('Long polling error:', error);\n    }\n  } finally {\n    if (!signal.aborted) {\n      setTimeout(() => longPoll(signal), 0);\n    }\n  }\n}\n\nconst pollingController = new AbortController();\nlongPoll(pollingController.signal);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u7d75\u6587\u5b57 ",(0,t.jsx)(n.code,{children:"div"})," \u3092\u52d5\u753b\u30d7\u30ec\u30a4\u30e4\u30fc\u306b\u8ffd\u52a0\u3059\u308b\u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u542b\u3080 CSS \u30af\u30e9\u30b9\u3092\u9069\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u7d42\u308f\u308b\u3068\uff08CSS\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b2\u79d2\u304b\u304b\u308a\u307e\u3059\uff09\u3001",(0,t.jsx)(n.code,{children:"div"}),"\u3092\u30da\u30fc\u30b8\u304b\u3089\u524a\u9664\u3057\u3066\u3059\u3079\u3066\u3092\u304d\u308c\u3044\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u306b\u3042\u308b\u3082\u3046\u3072\u3068\u3064\u306e\u5927\u304d\u306a\u90e8\u5206\u306f ",(0,t.jsx)(n.strong,{children:"\u30ed\u30f3\u30b0\u30dd\u30fc\u30ea\u30f3\u30b0"})," \u3067\u3059\u3002Momento HTTP API \u3092\u4f7f\u3063\u3066 ",(0,t.jsx)(n.code,{children:"streamId"})," \u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092 ",(0,t.jsx)(n.em,{children:"subscribe"})," \u3057\u3066\u3044\u307e\u3059\u3002\u30ed\u30f3\u30b0\u30dd\u30fc\u30ea\u30f3\u30b0\u3067\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306f Momento \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u305f\u3068\u304d\u3060\u3051\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8fd4\u3059\u3002\u305d\u306e\u5f8c\u3001\u30d6\u30e9\u30a6\u30b6\u306f\u3059\u3050\u306b\u518d\u5ea6\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u3001\u6b21\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u306e\u3092\u5f85\u3061\u307e\u3059\u3002\u53b3\u5bc6\u306b\u306f\u3001\u3053\u308c\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e ",(0,t.jsx)(n.em,{children:"\u30d7\u30c3\u30b7\u30e5"})," \u3067\u306f\u306a\u304f ",(0,t.jsx)(n.em,{children:"\u30d7\u30eb"})," \u3067\u3059\u304c\u3001Momento \u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u307b\u307c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9577\u3044\u30dd\u30fc\u30ea\u30f3\u30b0\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30cf\u30f3\u30c9\u30e9\u306f\u3001\u53d7\u4fe1\u3057\u305f\u3059\u3079\u3066\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3057\u3001\u53d7\u4fe1\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u304c\u6709\u52b9\u306a\u30ea\u30a2\u30af\u30b7\u30e7\u30f3\u3067\u3042\u308b\u3053\u3068\u3092\u691c\u8a3c\u3057\uff08\u60aa\u610f\u306e\u3042\u308b\u7d75\u6587\u5b57\u3092\u9632\u3050\u305f\u3081\uff09\u3001\u6b21\u306b ",(0,t.jsx)(n.code,{children:"displayEmoji"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u5168\u4f53\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"step-5-\u7d75\u6587\u5b57\u3092\u98db\u3070\u305d\u3046",children:"Step 5: \u7d75\u6587\u5b57\u3092\u98db\u3070\u305d\u3046\uff01"}),"\n",(0,t.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u304c\u66f8\u3051\u305f\u306e\u3067\u3001\u6b21\u306f\u305d\u308c\u3092\u30c6\u30b9\u30c8\u3059\u308b\u756a\u3067\u3059\uff01\u30c6\u30b9\u30c8\u3059\u308b\u4e00\u756a\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001\u3059\u3079\u3066\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3067\u306f\u3001\u3053\u3053\u3067\u672a\u89e3\u6c7a\u306e\u90e8\u5206\u3092\u3044\u304f\u3064\u304b\u89e3\u6c7a\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u521d\u671f\u5316\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u521d\u671f\u5316\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u3001\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u521d\u671f\u5316\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u306a\u3059\u3002\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm init\nnpm install express @gomomento/sdk\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u521d\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u305f\u3081\u306e\u30a6\u30a3\u30b6\u30fc\u30c9\u3092\u6848\u5185\u3057\u3066\u304f\u308c\u307e\u3059\u30022\u756a\u76ee\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3057\u305f\u4f9d\u5b58\u95a2\u4fc2\u3092\u3059\u3079\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"server-side-code",children:"Server-side code"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u30b9\u30c6\u30c3\u30d71"}),"\u306e\u30b3\u30fc\u30c9\u306f ",(0,t.jsx)(n.code,{children:"server.mjs"})," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3057\u307e\u3059\u3002\u74b0\u5883\u5909\u6570 ",(0,t.jsx)(n.code,{children:"MOMENTO_API_KEY"})," \u306b Momento API \u306e\u30ad\u30fc\u3092\u8a2d\u5b9a\u3057\u3066\u3001",(0,t.jsx)(n.code,{children:".env"})," \u30d5\u30a1\u30a4\u30eb\u3092\u69cb\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u3067\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node server.mjs\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u3067\u30b5\u30fc\u30d0\u30fc\u304c\u8d77\u52d5\u3057\u3001\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u304c\u547c\u3073\u51fa\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"client-side-code",children:"Client-side code"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u30b9\u30c6\u30c3\u30d72"}),"\u3067\u4f5c\u6210\u3057\u305fhtml\u306f\u3001",(0,t.jsx)(n.code,{children:"client.html"}),"\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u306b\u3057\u3066\u304a\u304f\u3002",(0,t.jsx)(n.em,{children:"\u30b9\u30c6\u30c3\u30d73\u3068\u30b9\u30c6\u30c3\u30d74"}),"\u3067\u4f5c\u6210\u3057\u305fJavaScript\u306f\u3001html\u306e",(0,t.jsx)(n.code,{children:"<body>"}),"\u8981\u7d20\u5185\u306e",(0,t.jsx)(n.code,{children:"<script>"}),"\u30bf\u30b0\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx serve client.html\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001html\u3092\u30db\u30b9\u30c8\u3059\u308b\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u304c\u30ed\u30fc\u30ab\u30eb\u306b\u8d77\u52d5\u3057\u307e\u3059\u3002\u30bf\u30fc\u30df\u30ca\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308c\u3070\u3001\u30d6\u30e9\u30a6\u30b6\u3067\u30da\u30fc\u30b8\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u3059\u3079\u3066\u304c\u6a5f\u80fd\u3059\u308b\u306e\u3067\u3001\u7d75\u6587\u5b57\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30d3\u30c7\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306b\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\uff01"}),"\n",(0,t.jsx)(n.h2,{id:"\u5b66\u3093\u3060\u6982\u5ff5",children:"\u5b66\u3093\u3060\u6982\u5ff5"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u77ed\u6642\u9593\u3067\u591a\u304f\u306e\u3053\u3068\u3092\u884c\u3046\u65b9\u6cd5\u3068\u3001\u3055\u3089\u306b\u77ed\u3044\u30b3\u30fc\u30c9\u91cf\u3092\u5b66\u3073\u307e\u3057\u305f\uff01\u4ee5\u4e0b\u306f\u3001\u3042\u306a\u305f\u304c\u4eca\u77e5\u3063\u3066\u3044\u308b\u65b9\u6cd5\u3067\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Momento AuthClient \u3092\u4f7f\u3063\u3066\u30c8\u30fc\u30af\u30f3\u306e\u81ea\u52d5\u8ca9\u58f2\u6a5f\u3092\u4f5c\u308b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Momento \u30c8\u30d4\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u305b\u305a\u306b\u3001\u30d6\u30e9\u30a6\u30b6\u9593\u3067\u76f4\u63a5\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["Momento HTTP API\u3067",(0,t.jsx)(n.strong,{children:"\u30ed\u30f3\u30b0\u30dd\u30fc\u30ea\u30f3\u30b0"}),"\u3092\u5b9f\u88c5\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306f\u3001\u3069\u306e\u30ec\u30d9\u30eb\u306e\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u306b\u3068\u3063\u3066\u3082\u57fa\u790e\u7684\u306a\u30c8\u30d4\u30c3\u30af\u3067\u3042\u308a\u3001\u30d3\u30eb\u30c0\u30fc\u306e\u4e2d\u6838\u3068\u306a\u308b\u30b9\u30ad\u30eb\u3067\u3059\u3002\u81ea\u5b85\u3067\u30b5\u30a4\u30c9 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba \u30b0\u30ec\u30fc\u30c9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u8a08\u3059\u308b\u5834\u5408\u3067\u3082\u3001Momento \u306f\u81ea\u52d5\u7684\u306b\u62e1\u5f35\u3055\u308c\u308b\u305f\u3081\u3001\u91cd\u8981\u306a\u3053\u3068\u3001\u3064\u307e\u308a",(0,t.jsx)(n.em,{children:"\u30d3\u30b8\u30cd\u30b9\u4e0a\u306e\u554f\u984c\u306e\u89e3\u6c7a"}),"\u306b\u5c02\u5ff5\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u30cf\u30c3\u30d4\u30fc\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);