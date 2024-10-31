"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3535],{20287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const o={sidebar_position:1,sidebar_label:"About",title:"Entitlements",description:"Learn about media entitlements and how to use them with Momento MediaStore",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","metrics","entitlements"]},r="Momento MediaStore\u306e\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8",l={id:"mediastore/entitlements/about",title:"Entitlements",description:"Learn about media entitlements and how to use them with Momento MediaStore",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/mediastore/entitlements/about.md",sourceDirName:"mediastore/entitlements",slug:"/mediastore/entitlements/about",permalink:"/ja/mediastore/entitlements/about",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/entitlements/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"About",title:"Entitlements",description:"Learn about media entitlements and how to use them with Momento MediaStore",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","metrics","entitlements"]},sidebar:"mediastoreSidebar",previous:{title:"Entitlements"},next:{title:"Real-time updates",permalink:"/ja/mediastore/entitlements/real-time-updates"}},a={},d=[{value:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3068\u306f\u4f55\u304b\uff1f",id:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3068\u306f\u4f55\u304b",level:2},{value:"\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u7a2e\u985e",id:"\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u7a2e\u985e",level:2},{value:"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30fb\u30d9\u30fc\u30b9",id:"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30d9\u30fc\u30b9",level:3},{value:"\u5730\u7406\u7684\u5236\u9650",id:"\u5730\u7406\u7684\u5236\u9650",level:3},{value:"\u30c7\u30d0\u30a4\u30b9\u306e\u5236\u9650",id:"\u30c7\u30d0\u30a4\u30b9\u306e\u5236\u9650",level:3},{value:"\u6642\u9593\u6307\u5b9a\u30a2\u30af\u30bb\u30b9",id:"\u6642\u9593\u6307\u5b9a\u30a2\u30af\u30bb\u30b9",level:3},{value:"Momento MediaStore\u3067\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406",id:"momento-mediastore\u3067\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406",level:2},{value:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30fb\u30b9\u30c8\u30ec\u30fc\u30b8\u306bMomento Cache\u3092\u4f7f\u7528\u3059\u308b",id:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306bmomento-cache\u3092\u4f7f\u7528\u3059\u308b",level:2},{value:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f8b",id:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f8b",level:3},{value:"\u30c7\u30fc\u30bf\u3092Dictionary\u578b\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b",id:"\u30c7\u30fc\u30bf\u3092dictionary\u578b\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b",level:3},{value:"\u30c7\u30fc\u30bf\u3092\u30d6\u30ed\u30d6\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b",id:"\u30c7\u30fc\u30bf\u3092\u30d6\u30ed\u30d6\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b",level:3},{value:"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3067\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b",id:"momento-\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3067\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"momento-mediastore\u306e\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8",children:"Momento MediaStore\u306e\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8"})}),"\n",(0,i.jsxs)(n.p,{children:["\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3068\u306f\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3001\u5730\u57df\u3001\u8996\u8074\u6a29\u306b\u57fa\u3065\u3044\u3066\u30e6\u30fc\u30b6\u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5236\u5fa1\u3059\u308b\u8a8d\u53ef\u30e1\u30ab\u30cb\u30ba\u30e0\u3067\u3059\u3002\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u3001",(0,i.jsx)(n.strong,{children:"\u30bb\u30ad\u30e5\u30a2"}),"\u3001",(0,i.jsx)(n.strong,{children:"\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30ba"}),"\u3001",(0,i.jsx)(n.strong,{children:"\u30aa\u30fc\u30bd\u30e9\u30a4\u30ba"}),"\u3055\u308c\u305f**\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002Momento\u306f\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u52d5\u7684\u306b\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u7ba1\u7406\u3001\u914d\u5e03\u3001\u5b9f\u65bd\u3059\u308b\u4f4e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3067\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u306a\u30d1\u30bf\u30fc\u30f3\u3092\u5b9f\u88c5\u3057\u3001\u6a29\u5229\u3068\u30a2\u30af\u30bb\u30b9\u3092\u4fdd\u8b77\u3057\u306a\u304c\u3089\u30b9\u30e0\u30fc\u30ba\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3068\u306f\u4f55\u304b",children:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3068\u306f\u4f55\u304b\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\uff08Entitlements\uff09\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u7279\u5b9a\u306e\u30e1\u30c7\u30a3\u30a2\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u95b2\u89a7\u3059\u308b\u305f\u3081\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3068\u6a29\u5229\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306f\u4ee5\u4e0b\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"** \u8cfc\u8aad\u5c64**\uff08\u30d7\u30ec\u30df\u30a2\u30e0\u3068\u7121\u6599\u306e\u6bd4\u8f03\uff09\n** \u5730\u7406\u7684\u4f4d\u7f6e**\uff08\u5730\u57df\u5236\u9650\uff09\n** \u30e6\u30fc\u30b6\u30fcID**\uff08\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u3068\u533f\u540d\u30e6\u30fc\u30b6\u30fc\uff09\n** \u30c7\u30d0\u30a4\u30b9\u306e\u5236\u9650**\uff08\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306e\u307f\u3067\u306e\u30a2\u30af\u30bb\u30b9\uff09\n** \u671f\u9593\u9650\u5b9a\u30a2\u30af\u30bb\u30b9**\uff08\u7279\u5b9a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3078\u306e\u30ec\u30f3\u30bf\u30eb\u307e\u305f\u306f\u671f\u9593\u9650\u5b9a\u30a2\u30af\u30bb\u30b9\uff09"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u306f\u3001\u91cd\u8981\u306a\u8cea\u554f\u306b\u7b54\u3048\u307e\u3059\uff1a ",(0,i.jsx)(n.em,{children:"\u3053\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u3053\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u3001\u3053\u306e\u6642\u9593\u306b\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u304b\uff1f"})]})}),"\n",(0,i.jsx)(n.h2,{id:"\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u7a2e\u985e",children:"\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u7a2e\u985e"}),"\n",(0,i.jsx)(n.p,{children:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u306f\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u5fdc\u3058\u3066\u69d8\u3005\u306a\u8981\u7d20\u306b\u57fa\u3065\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u4e00\u822c\u7684\u306a\u4f8b\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30d9\u30fc\u30b9",children:"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30fb\u30d9\u30fc\u30b9"}),"\n",(0,i.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u306e\u6d32\u90e8\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30ec\u30d9\u30eb\u306b\u3088\u3063\u3066\u3001\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3067\u304d\u308b\u30d3\u30c7\u30aa\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u7279\u5b9a\u306e\u30bf\u30a4\u30c8\u30eb\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30d7\u30ec\u30df\u30a2\u30e0\u30fb\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c4K\u30b9\u30c8\u30ea\u30fc\u30e0\u3084\u72ec\u5360\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5730\u7406\u7684\u5236\u9650",children:"\u5730\u7406\u7684\u5236\u9650"}),"\n",(0,i.jsx)(n.p,{children:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u5951\u7d04\u306b\u3088\u308a\u3001\u8996\u8074\u8005\u306e\u5730\u57df\u306b\u3088\u3063\u3066\u5236\u9650\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u3042\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u7c73\u56fd\u3067\u306f\u8996\u8074\u53ef\u80fd\u3060\u304c\u3001\u6b27\u5dde\u3067\u306f\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30c7\u30d0\u30a4\u30b9\u306e\u5236\u9650",children:"\u30c7\u30d0\u30a4\u30b9\u306e\u5236\u9650"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3001\u7279\u5b9a\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u3057\u304b\u5229\u7528\u3067\u304d\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u4f8b\u3048\u3070\u3001\u3042\u308b\u30e1\u30c7\u30a3\u30a2\u30fb\u30b5\u30fc\u30d3\u30b9\u304c\u30e2\u30d0\u30a4\u30eb\u9650\u5b9a\u306e\u30aa\u30d5\u30a1\u30fc\u3092\u63d0\u4f9b\u3057\u305f\u308a\u3001VR\u306b\u7279\u5316\u3057\u305f\u4f53\u9a13\u3092\u63d0\u4f9b\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6642\u9593\u6307\u5b9a\u30a2\u30af\u30bb\u30b9",children:"\u6642\u9593\u6307\u5b9a\u30a2\u30af\u30bb\u30b9"}),"\n",(0,i.jsx)(n.p,{children:"\u30e9\u30a4\u30d6\u30a4\u30d9\u30f3\u30c8\u3084\u3001\u8996\u8074\u5f8c\u306b\u8996\u8074\u671f\u9650\u304c\u5207\u308c\u308b\u30da\u30a4\u30fb\u30d1\u30fc\u30fb\u30d3\u30e5\u30fc\u306a\u3069\u3001\u671f\u9593\u9650\u5b9a\u3067\u5229\u7528\u3067\u304d\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3082\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"momento-mediastore\u3067\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406",children:"Momento MediaStore\u3067\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u306b\u3001\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3001\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30c7\u30d0\u30a4\u30b9\u3001\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30f3\u30c4\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u4f9d\u5b58\u3059\u308b\u8907\u96d1\u306a\u30ed\u30b8\u30c3\u30af\u3092\u542b\u3080\u5834\u5408\u3001\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30c1\u30a7\u30c3\u30af\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u30ea\u30bd\u30fc\u30b9\u3092\u6d88\u8cbb\u3057\u307e\u3059\u3002Momento\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u3001\u6700\u5c0f\u9650\u306e\u9045\u5ef6\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u6a29\u9650\u30c1\u30a7\u30c3\u30af\u3092\u51e6\u7406\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u3053\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3092\u5287\u7684\u306b\u524a\u6e1b\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306bmomento-cache\u3092\u4f7f\u7528\u3059\u308b",children:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30fb\u30b9\u30c8\u30ec\u30fc\u30b8\u306bMomento Cache\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"Momento Cache\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u3001\u30e1\u30c7\u30a3\u30a2\u30b5\u30fc\u30d0\u30fc\u3001\u8a8d\u8a3c\u30e1\u30ab\u30cb\u30ba\u30e0\u306a\u3069\u3001\u3069\u3053\u304b\u3089\u3067\u3082\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u8d85\u4f4e\u9045\u5ef6\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u6700\u521d\u306e\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u8a08\u7b97\u304c\u5b9f\u884c\u3055\u308c\u305f\u5f8c\u3001\u305d\u308c\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u3001\u8996\u8074\u8005\u306b\u53ef\u80fd\u306a\u9650\u308a\u6700\u901f\u306e\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Momento Cache\u306f\u975e\u5e38\u306b\u9ad8\u901f\u3067\u3042\u308b\u3060\u3051\u3067\u306a\u304f\u30011\u79d2\u9593\u306b\u6570\u767e\u4e07\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff08TPS\uff09\u307e\u3067\u81ea\u52d5\u7684\u306b\u30b9\u30b1\u30fc\u30eb\u3059\u308b\u305f\u3081\u3001\u30b9\u30c8\u30ec\u30b9\u306e\u591a\u3044\u9ad8\u9700\u8981\u306e\u30a4\u30d9\u30f3\u30c8\u6642\u306b\u30a4\u30f3\u30d5\u30e9\u7ba1\u7406\u306e\u8ca0\u62c5\u304c\u304b\u304b\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u5373\u6642\u306e\u5f3e\u529b\u6027\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30df\u30c3\u30b7\u30e7\u30f3\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u304a\u3051\u308b\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306e\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Momento Cache\u306f\u3001\u8907\u6570\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3092\u81ea\u7531\u306b\u4f7f\u7528\u3067\u304d\u308b\u305f\u3081\u3001\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u7528\u306e\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30fb\u30c7\u30fc\u30bf\u3092\u67d4\u8edf\u306b\u4fdd\u5b58\u304a\u3088\u3073\u30d5\u30a7\u30c3\u30c1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f8b",children:"\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f8b\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "subscription_level": "premium",\n  "region": "US",\n  "device_restriction": "none",\n  "valid_from": "2024-10-01T00:00:00Z",\n  "valid_until": "2024-12-31T23:59:59Z",\n  "allowed_content": ["movie_id_123", "series_id_456"]\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u69d8\u3005\u306a\u65b9\u6cd5\u3067\u30a2\u30af\u30bb\u30b9\u30c1\u30a7\u30c3\u30af\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c7\u30fc\u30bf\u3092\u52b9\u7387\u7684\u306b\u4fdd\u5b58\u3059\u308b\u304b\u3069\u3046\u304b\u306f\u3001\u5b9f\u884c\u6642\u306b\u3069\u306e\u3088\u3046\u306b\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u8a55\u4fa1\u3059\u308b\u304b\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30c7\u30fc\u30bf\u3092dictionary\u578b\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b",children:"\u30c7\u30fc\u30bf\u3092Dictionary\u578b\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cache/develop/basics/datatypes#dictionaries",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u8f9e\u66f8"}),"\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u500b\u3005\u306e\u6587\u5b57\u5217\u3084\u6570\u5024\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u683c\u7d0d\u3057\u3001\u305d\u308c\u3089\u3092\u4e00\u5ea6\u306b\u3001\u307e\u305f\u306f\u30b5\u30d6\u30bb\u30c3\u30c8\u3068\u3057\u3066\u30d5\u30a7\u30c3\u30c1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u7279\u5b9a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u53b3\u5bc6\u306b\u5730\u57df\u30d9\u30fc\u30b9\u3067\u3042\u3063\u305f\u308a\u3001\u968e\u5c64\u5316\u3055\u308c\u3066\u3044\u305f\u308a\u3059\u308b\u5834\u5408\u306b\u3001\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u304d\u3081\u7d30\u304b\u3044\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8f9e\u66f8\u306f\u30011\u3064\u306e\u30b3\u30de\u30f3\u30c9\u3067JSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u8a08\u7b97\u5f8c\u306b\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u8fc5\u901f\u3067\u7c21\u5358\u306a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3092\u8a8d\u8a3c\u30b5\u30fc\u30d0\u30fc\u306b\u4fdd\u5b58\u3057\u3001\u30e1\u30c7\u30a3\u30a2 \u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u968e\u5c64\u306b\u57fa\u3065\u3044\u3066\u30a2\u30af\u30bb\u30b9\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Auth server\nconst entitlements = await calculateEntitlements(userId);\nawait cacheClient.dictionarySetFields(NAMESPACE, userId, entitlements);\n\n// Client side media player\nlet subscriptionLevel = 'free';\nconst subscriptionResponse = await cacheClient.dictionaryGetField(NAMESPACE, userId, 'subscription_level');\nif(subscriptionResponse.type == CacheDictionaryGetFieldResponse.Hit) {\n  subscriptionLevel = subscriptionResponse.value();\n}\n\nconst canView = subscriptionLevel === 'premium';\nreturn canView;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001\u30e1\u30c7\u30a3\u30a2\u30d7\u30ec\u30fc\u30e4\u30fc\u306fentitlements\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u304b\u3089",(0,i.jsx)(n.code,{children:"subscription_level"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u307f\u3092\u30d5\u30a7\u30c3\u30c1\u3057\u3001\u30d7\u30ec\u30fc\u30e4\u30fc\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u30c7\u30fc\u30bf\u91cf\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u306e\u8a55\u4fa1\u304c\u3088\u308a\u8907\u96d1\u3067\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u306f\u3001\u4ee3\u308f\u308a\u306b\u5358\u4e00\u306e",(0,i.jsx)(n.a,{href:"/cache/develop/api-reference/dictionary-collections#dictionaryfetch",children:"\u8f9e\u66f8\u30d5\u30a7\u30c3\u30c1\u30b3\u30de\u30f3\u30c9"}),"\u3067\u30d5\u30a7\u30c3\u30c1\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30c7\u30fc\u30bf\u3092\u30d6\u30ed\u30d6\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b",children:"\u30c7\u30fc\u30bf\u3092\u30d6\u30ed\u30d6\u3068\u3057\u3066\u4fdd\u5b58\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30c7\u30a3\u30af\u30b7\u30e7\u30ca\u30ea\u3068\u3057\u3066\u683c\u7d0d\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u305d\u308c\u3092",(0,i.jsx)(n.em,{children:"\u30b9\u30ab\u30e9"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a2\u30a4\u30c6\u30e0\u306b\u30d6\u30ed\u30d6\u3068\u3057\u3066\u683c\u7d0d\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308b\u3002\u3053\u306e\u57fa\u672c\u7684\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u683c\u7d0d\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30c7\u30fc\u30bf\u3092\u30d0\u30a4\u30ca\u30ea\u30fb\u30c7\u30fc\u30bf\u307e\u305f\u306f\u6587\u5b57\u5217\u3068\u3057\u3066\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Auth server\nconst entitlements = await calculateEntitlements(userId);\nawait cacheClient.set(NAMESPACE, userId, entitlements);\n\n// Client side media player\nlet entitlements;\nconst entitlementsResponse = await cacheClient.get(NAMESPACE, userId);\nif(entitlementsResponse.type == CacheGet.Hit) {\n  entitlements = entitlementsResponse.value():\n}\n\nconst canView = await evaluate(entitlements);\nreturn canView;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089entitlements\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3092\u30d5\u30a7\u30c3\u30c1\u3057\u3001\u7279\u5b9a\u306e\u30d3\u30b8\u30cd\u30b9\u8981\u4ef6\u306b\u57fa\u3065\u3044\u3066\u3001\u3088\u308a\u610f\u5473\u306e\u3042\u308b\u8a08\u7b97\u3067\u8a55\u4fa1\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u30b9\u30ab\u30e9\u30fc\u5024\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3001",(0,i.jsx)(n.a,{href:"/cache/develop/api-reference/http-api",children:"Momento HTTP API"}),"\u307e\u305f\u306f",(0,i.jsx)(n.a,{href:"/platform/sdks",children:"SDK\u306e1\u3064"}),"\u3092\u4ecb\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3059\u3079\u3066\u306e\u3082\u306e\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u8f9e\u66f8\u306b\u306f\u3001Momento SDK\u304b\u3089\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"momento-\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3067\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b",children:"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3067\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u306b\u30a2\u30d7\u30ed\u30fc\u30c1\u3059\u308b\u3082\u3046\u4e00\u3064\u306e\u65b9\u6cd5\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092",(0,i.jsx)(n.a,{href:"/cache/develop/authentication/tokens",children:"session tokens"}),"\u306b\u76f4\u63a5\u57cb\u3081\u8fbc\u3080\u3053\u3068\u3067\u3059\u3002\u30a8\u30f3\u30bf\u30a4\u30c8\u30eb\u30e1\u30f3\u30c8\u306e\u8a08\u7b97\u304c\u5b8c\u4e86\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30e1\u30c7\u30a3\u30a2\u306e\u30ea\u30b9\u30c8\u304c\u308f\u304b\u3063\u305f\u3089\u3001\u77ed\u547d\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3078\u306e\u660e\u793a\u7684\u306a\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Momento MediaStore\u304c",(0,i.jsx)(n.a,{href:"/mediastore/core-concepts/origin",children:"\u30e1\u30c7\u30a3\u30a2\u30aa\u30ea\u30b8\u30f3"}),"\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u8981\u6c42\u306b\u5fdc\u3058\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b\u305f\u3081\u306b\u3001\u304d\u3081\u7d30\u304b\u3044\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u30e1\u30c7\u30a3\u30a2\u3092\u914d\u4fe1\u3059\u308b\u305f\u3081\u306bCDN\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u3001Momento\u304b\u3089\u76f4\u63a5\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u53d6\u5f97\u3059\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306e\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002Momento\u306eIntelligent Gateway\u306f\u3001\u63d0\u4f9b\u3055\u308c\u305f\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u306b\u5bfe\u3057\u3066\u3059\u3079\u3066\u306e\u53d7\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002CDN\u306f\u7279\u5b9a\u306e\u8996\u8074\u8005\u306e\u30c8\u30fc\u30af\u30f3\u3092Momento\u306b\u8ee2\u9001\u3057\u306a\u3044\u305f\u3081\u3001\u3053\u306e\u65b9\u6cd5\u306f\u6709\u52b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u69cb\u9020\u3067Momento MediaStore\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u3068\u3057\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"/{ContentName}/playlist.m3u8\n/{ContentName}/1080p/playlist.m3u8\n/{ContentName}/1080p/segment1.ts\n/{ContentName}/720p/playlist.m3u8\n/{ContentName}/720p/segment1.ts\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u69cb\u9020\u306f\u3001",(0,i.jsx)(n.a,{href:"/mediastore/performance/adaptive-bitrates/hls",children:"HLS"})," \u3067\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u3001\u8907\u6570\u306e\u89e3\u50cf\u5ea6\u3068\u30d3\u30c3\u30c8\u30ec\u30fc\u30c8\u3092\u6301\u3064\u52d5\u753b\u3092\u610f\u5473\u3059\u308b\u3002\u3053\u306e\u7279\u5b9a\u306e\u30e1\u30c7\u30a3\u30a2\u306e\u3059\u3079\u3066\u306e\u30ad\u30fc\u306e\u5148\u982d\u306b\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u8b58\u5225\u5b50\u304c\u4ed8\u304d\u307e\u3059\u3002\u77ed\u547d\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u3001\u305d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u3059\u3079\u3066\u306e\u30ad\u30fc\u3078\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const scope = {\n  permissions: [ {\n    role: 'readonly',\n    cache: 'media',\n    item: {\n      keyPrefix: `/${ContentName}/`\n    }\n  }]\n};\n\nconst token = authClient.generateDisposableToken(scope, ExpiresIn.hours(1), { tokenId: userId }):\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u540d\u3067\u59cb\u307e\u308b\u3059\u3079\u3066\u306e\u30ad\u30fc\u3078\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30b9\u30b3\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u3001\u6697\u9ed9\u7684\u306a\u8b58\u5225\u306e\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u306e ID \u3092\u57cb\u3081\u8fbc\u3093\u3060\u30011 \u6642\u9593\u6709\u52b9\u306a\u30c8\u30fc\u30af\u30f3\u3092 Momento AuthClient \u3067\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u3092\u30e1\u30c7\u30a3\u30a2 \u30d7\u30ec\u30fc\u30e4\u306b\u63d0\u4f9b\u3059\u308b\u3068\u3001\u30aa\u30ea\u30b8\u30f3\u304b\u3089\u76f4\u63a5\u52d5\u753b\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3067\u660e\u793a\u7684\u306b\u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u52d5\u753b\u3092\u8aad\u307f\u8fbc\u3082\u3046\u3068\u3059\u308b\u3068\u3001",(0,i.jsx)(n.code,{children:"Unauthorized"})," \u5fdc\u7b54\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);