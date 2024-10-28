"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9893],{50050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(74848),t=i(28453);const a={sidebar_position:11,sidebar_label:"Amazon EventBridge",title:"Momento + Amazon EventBridge",description:"Trigger async events in Momento directly with Amazon EventBridge!"},c=void 0,r={id:"cache/integrations/amazon-eventbridge",title:"Momento + Amazon EventBridge",description:"Trigger async events in Momento directly with Amazon EventBridge!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/integrations/amazon-eventbridge.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/amazon-eventbridge",permalink:"/ja/cache/integrations/amazon-eventbridge",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/amazon-eventbridge.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Amazon EventBridge",title:"Momento + Amazon EventBridge",description:"Trigger async events in Momento directly with Amazon EventBridge!"},sidebar:"cacheSidebar",previous:{title:"Deno",permalink:"/ja/cache/integrations/deno"},next:{title:"Drupal",permalink:"/ja/cache/integrations/drupal-integration"}},o={},l=[{value:"Tl;dr",id:"tldr",level:2},{value:"AWS\u3078\u30c7\u30d7\u30ed\u30a4",id:"aws\u3078\u30c7\u30d7\u30ed\u30a4",level:2},{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:3},{value:"API\u30b3\u30fc\u30eb\u306e\u30c8\u30ea\u30ac\u30fc",id:"api\u30b3\u30fc\u30eb\u306e\u30c8\u30ea\u30ac\u30fc",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u9805\u76ee\u306e\u8a2d\u5b9a",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u9805\u76ee\u306e\u8a2d\u5b9a",level:3},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u524a\u9664",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u524a\u9664",level:3},{value:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5",id:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5",level:3},{value:"\u60f3\u5b9a\u3055\u308c\u308b\u4f7f\u7528\u4f8b",id:"\u60f3\u5b9a\u3055\u308c\u308b\u4f7f\u7528\u4f8b",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u8a66\u3057\u3066\u307f\u3088\u3046\uff01",id:"\u8a66\u3057\u3066\u307f\u3088\u3046",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["AWS\u3067\u30a4\u30d9\u30f3\u30c8\u30c9\u30ea\u30d6\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u65b9\u306a\u3089\u3001",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/eventbridge/",children:"Amazon EventBridge"}),"\u3092\u77e5\u3063\u3066\u3044\u308b\u3067\u3057\u3087\u3046\u3002\u3053\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u5909\u63db\u3001\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3001\u914d\u4fe1\u3092\u5805\u7262\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u9ad8\u53ef\u7528\u6027\u3067\u652f\u63f4\u3057\u307e\u3059\u3002\u3053\u308c\u3092Momento\u3067\u76f4\u63a5\u4f7f\u3048\u305f\u3089\u6700\u9ad8\u3060\u3068\u601d\u3044\u307e\u305b\u3093\u304b\uff1f"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001EventBridge\u3068Momento\u3092\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u6c4e\u7528\u30d1\u30bf\u30fc\u30f3\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),(0,s.jsxs)(n.p,{children:["\u3088\u308a\u5177\u4f53\u7684\u306a\u4f8b\u3068\u3057\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/aws/eventbridge",children:"DynamoDB-Momento EventBridge Demo"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff01\n\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001DynamoDB Streams\u3068AWS EventBridge\u3092\u4f7f\u3063\u3066Momento\u306b\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\n\u3053\u306e\u30a2\u30d7\u30ea\u3092\u4f7f\u3046\u3068\u3001DynamoDB\u30c6\u30fc\u30d6\u30eb\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3057\u3001\u305d\u306e\u5909\u66f4\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u30ad\u30e3\u30c3\u30b7\u30e5/\u30c8\u30d4\u30c3\u30af\u306b\u53cd\u6620\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Momento\u306e",(0,s.jsx)(n.a,{href:"/ja/cache/develop/api-reference/http-api",children:"HTTP API"}),"\u3068",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",children:"Amazon EventBridge API Destinations"}),"\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067",(0,s.jsx)(n.code,{children:"PutEvents"}),"\u3092\u547c\u3073\u51fa\u3059\u3060\u3051\u3067\u975e\u540c\u671f\u30a4\u30d9\u30f3\u30c8\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram of compute resources triggering an event that calls Momento",src:i(20936).A+"",width:"800",height:"443"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u30b5\u30fc\u30d3\u30b9\u304c EventBridge \u306e ",(0,s.jsx)(n.code,{children:"PutEvents"})," API \u3092\u547c\u3073\u51fa\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["EventBridge\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u306e\u5185\u5bb9\u306b\u57fa\u3065\u3044\u3066\u3001\u30a4\u30d9\u30f3\u30c8\u3092",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html",children:"\u30eb\u30fc\u30eb"}),"\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"Qualifying \u30eb\u30fc\u30eb\u306f API\u3092\u547c\u3073\u51fa\u3059\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["API\u306f",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secrets Manager"}),"\u304b\u3089\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u691c\u7d22\u3059\u308b\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u30a4\u30d9\u30f3\u30c8\u30da\u30a4\u30ed\u30fc\u30c9\u306f\u5909\u63db\u3055\u308c\u3001Momento HTTP API\u3092\u547c\u3073\u51fa\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u30a4\u30d9\u30f3\u30c8\u30d9\u30fc\u30b9\u306e\u6027\u8cea\u3092\u8003\u3048\u308b\u3068\u3001",(0,s.jsx)(n.em,{children:"\u305d\u308c\u306f\u975e\u540c\u671f\u51e6\u7406"}),"\u3067\u3042\u308a\u3001\u3042\u306a\u305f\u306e\u30b3\u30fc\u30c9\u306f\u7d9a\u884c\u3059\u308b\u524d\u306b\u5b8c\u4e86\u3092\u5f85\u3064\u3053\u3068\u306f\u306a\u3044\u3067\u3059\u3002\u4f55\u304b\u304c\u3046\u307e\u304f\u3044\u304b\u306a\u304b\u3063\u305f\u308a\u3001API\u304c\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u308a\u3057\u305f\u5834\u5408\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u306f",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/what-is/dead-letter-queue/",children:"dead letter queue"}),"\u306b\u914d\u9001\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"tldr",children:"Tl;dr"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30dc\u30bf\u30f3[",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(92326).A+"",children:"\u30b9\u30bf\u30c3\u30af\u8d77\u52d5\u30dc\u30bf\u30f3"}),"](",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml)%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81EventBridge%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%92%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AB%E7%9B%B4%E6%8E%A5%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml)\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001EventBridge\u30ea\u30bd\u30fc\u30b9\u3092\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u76f4\u63a5\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002"})]}),"\n",(0,s.jsx)(n.h2,{id:"aws\u3078\u30c7\u30d7\u30ed\u30a4",children:"AWS\u3078\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e",(0,s.jsx)(n.em,{children:"Launch stack"}),"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001AWS\u306eCloudFormation\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u30bf\u30d6\u304c\u958b\u304d\u307e\u3059\u3002",(0,s.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"Momento Console"}),"\u304b\u3089\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30b9\u30bf\u30c3\u30af\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3044\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u30b9\u30fc\u30d1\u30fc\u30e6\u30fc\u30b6\u30fc\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u305f\u3089\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u623b\u3063\u3066\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3042\u306a\u305f\u306b\u4ee3\u308f\u3063\u3066 Secrets Manager \u306b\u5b89\u5168\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3001\u30eb\u30fc\u30eb\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308bEventBridge\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u540d\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u304c\u81ea\u52d5\u7684\u306b\u5165\u529b\u3055\u308c\u307e\u3059\u304c\u3001\u65e2\u5b58\u306e\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u6709\u52b9\u306a\u30d0\u30b9\u540d\u3092\u6307\u5b9a\u3057\u306a\u3044\u3068\u3001\u30c7\u30d7\u30ed\u30a4\u306f\u5931\u6557\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CloudFormation UI with deployment parameters configured",src:i(21548).A+"",width:"800",height:"415"})}),"\n",(0,s.jsxs)(n.p,{children:["2\u3064\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5165\u529b\u3057\u3001",(0,s.jsx)(n.em,{children:"Create stack"}),"\u3092\u62bc\u3059\u3068\u3001\u30ea\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u7684\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002*Momento\u306fAWS\u306e\u3088\u3046\u306b\u30ea\u30fc\u30b8\u30e7\u30f3\u30d9\u30fc\u30b9\u3067\u3042\u308a\u3001\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u306f\u7279\u5b9a\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u3066\u3044\u307e\u3059\u3002HTTP API \u306e\u5834\u5408\u3001\u4f7f\u7528\u3057\u305f\u3044\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u5fdc\u3058\u3066 ",(0,s.jsx)(n.a,{href:"/ja/cache/develop/api-reference/http-api#regions",children:"\u7570\u306a\u308b\u30d9\u30fc\u30b9 URL"})," \u3092\u30d2\u30c3\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u79c1\u305f\u3061\u304c\u63d0\u4f9b\u3059\u308b\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u306f\u3001\u30c7\u30d7\u30ed\u30a4\u6642\u306b\u9069\u5207\u306a\u30d9\u30fc\u30b9URL\u3092\u6c7a\u5b9a\u3059\u308b\u306e\u3067\u3001\u8003\u3048\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\ud83d\udc4d"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001Momento\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bAWS\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u306e\u307f\u6a5f\u80fd\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"us-east-1"}),"\n",(0,s.jsx)(n.li,{children:"us-west-2"}),"\n",(0,s.jsx)(n.li,{children:"ap-northeast-1"}),"\n",(0,s.jsx)(n.li,{children:"ap-south-1"}),"\n",(0,s.jsx)(n.li,{children:"eu-west-1"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30ea\u30bd\u30fc\u30b9",children:"\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,s.jsx)(n.p,{children:"\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30b9\u30bf\u30c3\u30af\u306f\u3001AWS\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4ee5\u4e0b\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["1x ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_Connection.html",children:"EventBridge Connection"})," - Momento \u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["3x EventBridge API Destinations - ",(0,s.jsx)(n.em,{children:"Cache Item Set"}),"\u3001",(0,s.jsx)(n.em,{children:"Cache Item Delete"}),"\u3001",(0,s.jsx)(n.em,{children:"Topic Publish"})," \u3002"]}),"\n",(0,s.jsx)(n.li,{children:"3x EventBridge Rules - API\u30b3\u30fc\u30eb\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u305f\u3081\u306e\u30eb\u30fc\u30eb\u3002"}),"\n",(0,s.jsx)(n.li,{children:"1x IAM Role - \u30eb\u30fc\u30eb\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u305f\u3068\u304d\u306b\u3001EventBridge\u304c\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"1x SQS \u30ad\u30e5\u30fc - \u914d\u4fe1\u5931\u6557\u6642\u306e\u30c7\u30c3\u30c9\u30ec\u30bf\u30fc\u30ad\u30e5\u30fc\u7528"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u751f\u306eCloudFormation\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u898b\u305f\u3044\u5834\u5408\u306f\u3001",(0,s.jsx)(n.a,{href:"https://momento-developers.s3.amazonaws.com/api-destinations.yaml",children:"\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"api\u30b3\u30fc\u30eb\u306e\u30c8\u30ea\u30ac\u30fc",children:"API\u30b3\u30fc\u30eb\u306e\u30c8\u30ea\u30ac\u30fc"}),"\n",(0,s.jsxs)(n.p,{children:["\u73fe\u5728\u3001\u3053\u306e\u7d71\u5408\u3067\u306f\u3001",(0,s.jsx)(n.em,{children:"Cache Item Set"}),"\u3001",(0,s.jsx)(n.em,{children:"Cache Item Delete"}),"\u3001",(0,s.jsx)(n.em,{children:"Topic Publish"}),"\u306e 3 \u3064\u306e API \u547c\u3073\u51fa\u3057\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30eb\u30fc\u30eb\u3092\u547c\u3073\u51fa\u3059\u306b\u306f\u3001\u69cb\u6210\u3055\u308c\u305f\u30a4\u30d9\u30f3\u30c8\u30fb\u30d0\u30b9\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u9805\u76ee\u306e\u8a2d\u5b9a",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u9805\u76ee\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u542b\u3080\u30a4\u30d9\u30f3\u30c8\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Detail Type"}),": ",(0,s.jsx)(n.em,{children:"cacheSet"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Payload"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsonc",children:'{\n  "cacheName": "<your cache name>",\n  "key": "<cache item key>",\n  "key_base64": "<cache item key base-64 encoded>",\n  "message": "<value to save to the cache item>",\n  "ttl": 60 // time to live in seconds \n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3059\u3079\u3066\u306e\u5024\u306f\u5fc5\u9808\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306f\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306a\u6709\u52b9\u306a\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,s.jsx)(n.a,{href:"https://console.gomomento.com",children:"\u3053\u3053\u3067\u4f5c\u6210"})," \u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u6ce8\u610f -"})," ",(0,s.jsx)(n.code,{children:"key"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3068 ",(0,s.jsx)(n.code,{children:"key_base64"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4e92\u3044\u306b\u6392\u4ed6\u7684\u3067\u3059\u3002\u4e21\u65b9\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408 (\u307e\u305f\u306f\u3069\u3061\u3089\u3082\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u5834\u5408)\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306f\u8a2d\u5b9a\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u524a\u9664",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u524a\u9664"}),"\n",(0,s.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306f\u81ea\u52d5\u7684\u306b\u671f\u9650\u5207\u308c\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Detail Type"}),": ",(0,s.jsx)(n.em,{children:"cacheDelete"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Payload"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsonc",children:'{\n  "cacheName": "<your cache name>",\n  "key": "<cache item key>",\n  "key_base64": "<cache item key base-64 encoded>"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7e70\u308a\u8fd4\u3057\u307e\u3059\u304c\u3001",(0,s.jsx)(n.code,{children:"key"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3068 ",(0,s.jsx)(n.code,{children:"key_base64"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4e92\u3044\u306b\u6392\u4ed6\u7684\u3067\u3059\u3002\u4e21\u65b9\u3092\u6307\u5b9a\u3059\u308b\u3068\u30a8\u30e9\u30fc\u3068\u306a\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306f\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5",children:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u3048\u3070\u3001\uff08Auth\u30c8\u30fc\u30af\u30f3\u3067\u5236\u9650\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\uff09\u3069\u306e\u30c8\u30d4\u30c3\u30af\u306b\u3082\u516c\u958b\u3067\u304d\u308b\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Detail Type"}),": ",(0,s.jsx)(n.em,{children:"topicPublish"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Payload"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsonc",children:'{\n  "cacheName": "<your cache name>",\n  "topicName": "<your topic name>",\n  "message": "<value to publish to the topic>"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u60f3\u5b9a\u3055\u308c\u308b\u4f7f\u7528\u4f8b",children:"\u60f3\u5b9a\u3055\u308c\u308b\u4f7f\u7528\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"EventBridge\u7d4c\u7531\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u66f4\u65b0\u3084\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u3001\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u304c\u8003\u3048\u3089\u308c\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EventBridge\u30d1\u30a4\u30d7\u3092\u4f7f\u7528\u3057\u3066\u3001DynamoDB\u30b9\u30c8\u30ea\u30fc\u30e0\u304b\u3089\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a2\u30a4\u30c6\u30e0\u3092\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u307e\u305f\u306f\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u30b9\u30c6\u30c3\u30d7\u95a2\u6570\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u30a8\u30f3\u30c9\u30fb\u30e6\u30fc\u30b6\u306b\u30b9\u30c6\u30fc\u30bf\u30b9\u306e\u66f4\u65b0\u3092\u76f4\u63a5\u9001\u4fe1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u3059\u3067\u306bEventBridge\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30d5\u30a1\u30f3\u30a2\u30a6\u30c8\u64cd\u4f5c\u304b\u3089\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u66f4\u65b0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001AWS SDK v3 for JavaScript \u3092\u4f7f\u7528\u3057\u3066\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u4e0a\u306e EventBridge \u30a4\u30d9\u30f3\u30c8\u3092\u7d4c\u7531\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u4fdd\u5b58\u3059\u308b\u4f8b\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const events = new EventBridgeClient(config);\nawait events.send(new PutEventsCommand({\n  Entries: [\n    {\n      Source: 'demo',\n      DetailType: 'cacheSet',\n      Detail: JSON.stringify({\n        cacheName: 'my-cache',\n        key: 'test-key',\n        message: 'hello world!',\n        ttl: 300\n      })\n    }\n  ]\n}));\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30d9\u30f3\u30c8\u30d0\u30b9\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u3001",(0,s.jsx)(n.em,{children:"Cache Item Set"}),"\u30eb\u30fc\u30eb\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u3066API\u3092\u547c\u3073\u51fa\u3057\u3001",(0,s.jsx)(n.code,{children:"my-cache"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b5\u5206\u9593\uff08300\u79d2\u9593\uff09*hello world!*\u3068\u3044\u3046\u5024\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u3092\u30bb\u30c3\u30c8\u3059\u308b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8a66\u3057\u3066\u307f\u3088\u3046",children:"\u8a66\u3057\u3066\u307f\u3088\u3046\uff01"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u79c1\u305f\u3061\u306eHTTP API\u304c\u3088\u308a\u591a\u304f\u306e\u6a5f\u80fd\u3092\u5f97\u308b\u306b\u3064\u308c\u3066\u6210\u9577\u3057\u7d9a\u3051\u307e\u3059\u3002\u3044\u3064\u3067\u3082\u3053\u3053\u306b\u623b\u3063\u3066\u304d\u3066\u3001",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml",children:"\u30b9\u30bf\u30c3\u30af\u3092 AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30c7\u30d7\u30ed\u30a4"})," \u3057\u3066\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u81ea\u52d5\u7684\u306b\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30b9\u30bf\u30c3\u30af\u3092\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u3084\u3001\u4ed6\u306e\u5730\u57df\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001\u304a\u6c17\u8efd\u306b",(0,s.jsx)(n.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"Discord"}),"\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},92326:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/cloudformation-launch-stack-e03b48bd0294cf8b2fbfffd8f321c632.png"},21548:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/eb-destination-ui-34c37ddb3c254d19440e076344015696.png"},20936:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/eventbridge_destinations-580b59cc390bb7ec90d3a04b3aceb187.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);