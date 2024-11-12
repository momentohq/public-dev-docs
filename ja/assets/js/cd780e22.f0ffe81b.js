"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7094],{88081:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(74848),o=i(28453);const r={title:"AWS PrivateLink Connectivity",sidebar_position:1,sidebar_label:"AWS PrivateLink",description:"Learn how to securely connect to the Momento platform within your Amazon VPC using AWS PrivateLink for optimized security and cost efficiency.",hide_title:!0,keywords:["Momento Cache","Momento Topics","Momento platform","AWS PrivateLink","VPC endpoint","secure connection","compliance","private IP","cloud network cost optimization","private access","Amazon VPC","secure infrastructure","reduce NAT gateway costs","network traffic savings","enterprise security","high-security cloud architecture"]},c="AWS PrivateLink\u3068Momento\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a2\u30af\u30bb\u30b9\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u5b89\u5168\u306b\u63a5\u7d9a",a={id:"platform/connectivity/private-link",title:"AWS PrivateLink Connectivity",description:"Learn how to securely connect to the Momento platform within your Amazon VPC using AWS PrivateLink for optimized security and cost efficiency.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/connectivity/private-link.md",sourceDirName:"platform/connectivity",slug:"/platform/connectivity/private-link",permalink:"/ja/platform/connectivity/private-link",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/connectivity/private-link.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AWS PrivateLink Connectivity",sidebar_position:1,sidebar_label:"AWS PrivateLink",description:"Learn how to securely connect to the Momento platform within your Amazon VPC using AWS PrivateLink for optimized security and cost efficiency.",hide_title:!0,keywords:["Momento Cache","Momento Topics","Momento platform","AWS PrivateLink","VPC endpoint","secure connection","compliance","private IP","cloud network cost optimization","private access","Amazon VPC","secure infrastructure","reduce NAT gateway costs","network traffic savings","enterprise security","high-security cloud architecture"]},sidebar:"platformSidebar",previous:{title:"Ruby",permalink:"/ja/platform/sdks/ruby/"}},s={},l=[{value:"\u306a\u305cMomento\u306eAWS PrivateLink\u3092\u9078\u3076\u306e\u304b\uff1f",id:"\u306a\u305cmomento\u306eaws-privatelink\u3092\u9078\u3076\u306e\u304b",level:3}];function m(e){const t={a:"a",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"aws-privatelink\u3068momento\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a2\u30af\u30bb\u30b9\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u5b89\u5168\u306b\u63a5\u7d9a",children:"AWS PrivateLink\u3068Momento\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a2\u30af\u30bb\u30b9\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u5b89\u5168\u306b\u63a5\u7d9a"})}),"\n",(0,n.jsxs)(t.p,{children:["Momento\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u67d4\u8edf\u6027\u3092\u512a\u5148\u3057\u3001\u6210\u9577\u306b\u5408\u308f\u305b\u3066\u62e1\u5f35\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306b\u5408\u308f\u305b\u3066\u6700\u9069\u5316\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u30cb\u30fc\u30ba\u3092\u6e80\u305f\u3057\u307e\u3059\u3002Momento\u306f\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8VPC\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3044\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30bb\u30ad\u30e5\u30a2\u306a",(0,n.jsx)(t.a,{href:"/platform/regions",children:"\u30d1\u30d6\u30ea\u30c3\u30af\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"}),"\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001VPC*\u5185\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u304c\u5fc5\u8981\u306a\u304a\u5ba2\u69d8\u306b\u306f\u3001",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/privatelink/",children:"AWS PrivateLink"}),"\u3092\u4ecb\u3057\u3066\u30bb\u30ad\u30e5\u30a2\u306b\u63a5\u7d9a\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Amazon VPC\u304b\u3089Momento\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u76f4\u63a5\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"PrivateLink Connectivity Diagram",src:i(40777).A+"",width:"1200",height:"645"})}),"\n",(0,n.jsx)(t.h3,{id:"\u306a\u305cmomento\u306eaws-privatelink\u3092\u9078\u3076\u306e\u304b",children:"\u306a\u305cMomento\u306eAWS PrivateLink\u3092\u9078\u3076\u306e\u304b\uff1f"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Optimized security"})," - \u304a\u5ba2\u69d8\u306e\u30c7\u30fc\u30bf\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8IP\u7a7a\u9593\u5185\u306b\u7559\u307e\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3078\u306e\u516c\u958b\u3092\u6392\u9664\u3059\u308b\u3053\u3068\u3067\u9ad8\u3044\u5b89\u5168\u6027\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cost efficiency"})," - PrivateLink\u3092\u7d4c\u7531\u3057\u3066Momento\u306b\u76f4\u63a5\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u3001NAT\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30b3\u30b9\u30c8\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u304b\u304b\u308b\u30af\u30e9\u30a6\u30c9\u8cbb\u7528\u3092\u524a\u6e1b\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8a73\u7d30\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806\u3001\u30d1\u30bf\u30fc\u30f3\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/connectivity-patterns",children:"\u63a5\u7d9a\u6027\u30d1\u30bf\u30fc\u30f3\u30ea\u30dd\u30b8\u30c8\u30ea"})," \u3092\u53c2\u7167\u3057\u3066\u3001PrivateLink \u3068 Momento \u306e\u7d71\u5408\u3092\u958b\u59cb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},40777:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/vpc-diagram-fa1b1b46e47a93bf9ef41b64eb7f5cda.jpeg"},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);