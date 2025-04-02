"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1841],{47053:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=s(74848),i=s(28453);const t={sidebar_position:11,sidebar_label:"Response objects",title:"Momento Topics\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento API \u306b\u304a\u3051\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},r="Momento API\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",c={id:"topics/api-reference/response-objects",title:"Momento Topics\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento API \u306b\u304a\u3051\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/api-reference/response-objects.md",sourceDirName:"topics/api-reference",slug:"/topics/api-reference/response-objects",permalink:"/ja/topics/api-reference/response-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Momento Topics\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento API \u306b\u304a\u3051\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},sidebar:"topicsSidebar",previous:{title:"HTTP API",permalink:"/ja/topics/api-reference/http-api"},next:{title:"Integrations"}},d={},l=[{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9",id:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9",level:3},{value:"Success",id:"success",level:2},{value:"Subscription",id:"subscription",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"momento-api\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",children:"Momento API\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})}),"\n",(0,o.jsxs)(n.p,{children:["Momento \u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u89aa\u30af\u30e9\u30b9\u304b\u3089\u62e1\u5f35\u3055\u308c\u3001",(0,o.jsx)(n.code,{children:"Success"})," \u3084 ",(0,o.jsx)(n.code,{children:"Error"})," \u3068\u3044\u3063\u305f\u5b50\u578b\u3092\u6301\u3061\u3001\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u306b\u3088\u3063\u3066\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u308b\u3002(\u3042\u308b\u8a00\u8a9e\u3067\u306f\u3053\u306e\u6982\u5ff5\u3092\u300c\u30b7\u30fc\u30eb\u30c9\u30af\u30e9\u30b9\u300d\u3068\u547c\u3073\u3001\u5225\u306e\u8a00\u8a9e\u3067\u306f\u300c\u4ee3\u6570\u7684\u30c7\u30fc\u30bf\u578b\u300d\u3068\u547c\u3076\u3002\u30dd\u30ea\u30e2\u30fc\u30d5\u30a3\u30ba\u30e0\u306e\u4e00\u7a2e\u3067\u3042\u308b)\u3002\u30b3\u30fc\u30c9\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u304c ",(0,o.jsx)(n.code,{children:"Success"})," \u304b ",(0,o.jsx)(n.code,{children:"Error"})," \u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u5206\u5c90\u3059\u308b\u3002\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u3046\u3068\u3001\u578b\u5b89\u5168\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u305d\u308c\u3092\u4f7f\u3063\u3066\u3055\u3089\u306b\u60c5\u5831\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,o.jsxs)(n.p,{children:["Momento Leaderboards \u30b5\u30fc\u30d3\u30b9\u306e\u547c\u3073\u51fa\u3057\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306f\u3001\u4f8b\u5916\u306e\u30b9\u30ed\u30fc\u3067\u306f\u306a\u304f\u3001\u547c\u3073\u51fa\u3057\u306e\u623b\u308a\u5024\u306e\u4e00\u90e8\u3068\u3057\u3066\u958b\u767a\u8005\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u3068\u304d\u306b\u30a8\u30e9\u30fc\u3092\u3088\u308a\u898b\u3084\u3059\u304f\u3057\u3001\u6c17\u306b\u306a\u308b\u30a8\u30e9\u30fc\u3092\u78ba\u5b9f\u306b\u51e6\u7406\u3059\u308b\u305f\u3081\u306b IDE \u304c\u3088\u308a\u5f79\u7acb\u3064\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u70b9\u306b\u95a2\u3059\u308b\u79c1\u305f\u3061\u306e\u8003\u3048\u65b9\u306b\u3064\u3044\u3066\u306f\u3001\u30d6\u30ed\u30b0\u8a18\u4e8b\u300c\u306a\u305c[\u4f8b\u5916\u306f\u30d0\u30b0]\u306a\u306e\u304b\u300d(",(0,o.jsx)(n.a,{href:"https://www.gomomento.com/blog/exceptions-are-bugs)%E3%82%92%E3%81%94%E8%A6%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E3%81%94%E6%84%8F%E8%A6%8B%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E3%81%8A%E5%AF%84%E3%81%9B%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%EF%BC%81",children:"https://www.gomomento.com/blog/exceptions-are-bugs)\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001\u3054\u610f\u898b\u304c\u3042\u308c\u3070\u304a\u5bc4\u305b\u304f\u3060\u3055\u3044\uff01"})]}),"\n",(0,o.jsx)(n.h3,{id:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9",children:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"message(): String - \u8aad\u307f\u3084\u3059\u3044\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"}),"\n",(0,o.jsx)(n.li,{children:"innerException(): Exception - \u5143\u306e\u4f8b\u5916"}),"\n",(0,o.jsxs)(n.li,{children:["errorCode(): MomentoErrorCode - Momento \u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u30ab\u30c6\u30b4\u30ea\uff08\u4f8b\uff1aInvalidArgument \u3084 BadRequest \uff09\u3092\u6307\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md",children:"Standards And Practices - Error Handling"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"toString(): String - message() \u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3067\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"success",children:"Success"}),"\n",(0,o.jsx)(n.p,{children:"\u8ffd\u52a0\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u305f\u306a\u3044\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6210\u529f\u3092\u793a\u3059\u6c4e\u7528\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u6210\u529f\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(n.h3,{id:"subscription",children:"Subscription"}),"\n",(0,o.jsx)(n.p,{children:"Momento \u30c8\u30d4\u30c3\u30af\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306b\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"unsubscribe()"}),": void - \u30c8\u30d4\u30c3\u30af\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u7d42\u4e86\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u8a00\u8a9e\u306b\u3088\u3063\u3066\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u3001\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8\u3001\u4e0d\u9023\u7d9a\u306a\u3069\u306e\u65b0\u3057\u3044\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306b\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3084\u30a4\u30c6\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u30a2\u30a4\u30c6\u30e0\u306f\u6587\u5b57\u5217\u307e\u305f\u306f\u30d0\u30a4\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3001\u30c8\u30d4\u30c3\u30af\u30b7\u30fc\u30b1\u30f3\u30b9\u756a\u53f7\u3001\u4e00\u610f\u306a\u30c8\u30fc\u30af\u30f3\u8b58\u5225\u5b50\u304c\u3042\u308c\u3070\u305d\u308c\u3092\u542b\u307f\u307e\u3059(",(0,o.jsx)(n.a,{href:"https://www.gomomento.com/blog/momento-topics-just-got-more-secure-introducing-embedded-token-identifiers",children:"learn more"}),")\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8\u306f\u3001\u63a5\u7d9a\u304c\u307e\u3060\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u4e0d\u9023\u7d9a\u306f\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306b\u4e2d\u65ad\u304c\u3042\u308a\u3001\u3044\u304f\u3064\u304b\u306e\u30e1\u30c3\u30bb\u30fc \u30b8\u304c\u30b9\u30ad\u30c3\u30d7\u3055\u308c\u305f\u304b\u3082\u3057\u308c\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var o=s(96540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);