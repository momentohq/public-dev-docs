"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2832],{9209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var r=t(74848),a=t(28453);t(42821),t(70503),t(96540);var i=t(11470),s=t(19365),l=t(21432);const c=e=>{let{js:n,python:t,java:a,kotlin:c,go:o,csharp:u,php:d,rust:h,ruby:m,elixir:p,swift:b,dart:x,cli:g}=e;return n||t||a||c||o||u||d||h||m||p||b||x||g?(0,r.jsxs)(i.A,{children:[n&&(0,r.jsx)(s.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(l.A,{language:"js",children:n})}),t&&(0,r.jsx)(s.A,{value:"python",label:"Python",children:(0,r.jsx)(l.A,{language:"python",children:t})}),a&&(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(l.A,{language:"java",children:a})}),c&&(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(l.A,{language:"kotlin",children:c})}),o&&(0,r.jsx)(s.A,{value:"go",label:"Go",children:(0,r.jsx)(l.A,{language:"go",children:o})}),u&&(0,r.jsx)(s.A,{value:"csharp",label:"C#",children:(0,r.jsx)(l.A,{language:"csharp",children:u})}),d&&(0,r.jsx)(s.A,{value:"php",label:"PHP",children:(0,r.jsx)(l.A,{language:"php",children:d})}),h&&(0,r.jsx)(s.A,{value:"rust",label:"Rust",children:(0,r.jsx)(l.A,{language:"rust",children:h})}),m&&(0,r.jsx)(s.A,{value:"ruby",label:"Ruby",children:(0,r.jsx)(l.A,{language:"ruby",children:m})}),p&&(0,r.jsx)(s.A,{value:"elixir",label:"Elixir",children:(0,r.jsx)(l.A,{language:"elixir",children:p})}),b&&(0,r.jsx)(s.A,{value:"swift",label:"Swift",children:(0,r.jsx)(l.A,{language:"swift",children:b})}),x&&(0,r.jsx)(s.A,{value:"dart",label:"Dart",children:(0,r.jsx)(l.A,{language:"dart",children:x})}),g&&(0,r.jsx)(s.A,{value:"cli",label:"CLI",children:(0,r.jsx)(l.A,{language:"cli",children:g})})]}):null},o={sidebar_position:2,sidebar_label:"Build a Rate-Limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento."},u="Momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u96c6\u4e2d\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9",d={id:"cache/how-to/rate-limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/how-to/rate-limiter.mdx",sourceDirName:"cache/how-to",slug:"/cache/how-to/rate-limiter",permalink:"/ja/cache/how-to/rate-limiter",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/how-to/rate-limiter.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Build a Rate-Limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento."},sidebar:"cacheSidebar",previous:{title:"How To"},next:{title:"Learn"}},h={},m=[{value:"\u30ec\u30fc\u30c8\u5236\u9650\u3068\u306f\u4f55\u304b\uff1f",id:"\u30ec\u30fc\u30c8\u5236\u9650\u3068\u306f\u4f55\u304b",level:2},{value:"\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u7528\u9014\u306f\uff1f",id:"\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u7528\u9014\u306f",level:2},{value:"Momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9",id:"momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9",level:2},{value:"\u79c1\u305f\u3061\u306f\u3082\u3063\u3068\u591a\u304f\u3092\u671b\u3093\u3067\u3044\u307e\u3059\uff01",id:"\u79c1\u305f\u3061\u306f\u3082\u3063\u3068\u591a\u304f\u3092\u671b\u3093\u3067\u3044\u307e\u3059",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u96c6\u4e2d\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9",children:"Momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u96c6\u4e2d\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650\u3068\u306f\u4f55\u304b",children:"\u30ec\u30fc\u30c8\u5236\u9650\u3068\u306f\u4f55\u304b\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30fc\u30c8\u5236\u9650\u3068\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30fb\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u5236\u9650\u3059\u308b\u305f\u3081\u306e\u6226\u7565\u3067\u3059\u3002\u4e00\u5b9a\u306e\u6642\u9593\u67a0\u5185\u3067\u8ab0\u304b\u304c\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u7e70\u308a\u8fd4\u305b\u308b\u56de\u6570\u306b\u4e0a\u9650\u3092\u8a2d\u3051\u307e\u3059\u3002\u3042\u306a\u305f\u304c\u30c4\u30a4\u30c3\u30bf\u30fc\u306e\u30cb\u30e5\u30fc\u30b9\u30d5\u30a3\u30fc\u30c9\u3092\u898b\u3066\u3044\u3088\u3046\u3068\u3001\u30e9\u30a4\u30d6\u30d3\u30c7\u30aa\u3092\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3057\u3066\u3044\u3088\u3046\u3068\u3001\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u3068\u3084\u308a\u3068\u308a\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u306f\u30bc\u30ed\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306f\u3042\u306a\u305f\u3092\u76e3\u8996\u3057\u3001\u3042\u306a\u305f\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u3064\u3044\u3066\u6c7a\u5b9a\u3092\u4e0b\u3057\u3001\u3042\u306a\u305f\u304c\u3042\u307e\u308a\u306b\u9a12\u304e\u59cb\u3081\u308b\u3068\u6b63\u5f53\u306b\u3042\u306a\u305f\u3092\u505c\u6b62\u3055\u305b\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u7528\u9014\u306f",children:"\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u7528\u9014\u306f\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30fc\u30c8\u5236\u9650\u306e\u5fc5\u8981\u6027\u306f\u3001\u3042\u3089\u3086\u308b\u30b5\u30fc\u30d3\u30b9\u306e\u5065\u5168\u6027\u3068\u54c1\u8cea\u3092\u7dad\u6301\u3059\u308b\u3068\u3044\u3046\u57fa\u672c\u7684\u306a\u8981\u4ef6\u306b\u7531\u6765\u3057\u307e\u3059\u3002\u3053\u308c\u304c\u306a\u3051\u308c\u3070\u3001\u30ea\u30bd\u30fc\u30b9\u306f\u7c21\u5358\u306b\u904e\u8ca0\u8377\u306b\u306a\u308a\u3001\u30b5\u30fc\u30d3\u30b9\u306e\u4f4e\u4e0b\u3084\u5b8c\u5168\u306a\u5931\u6557\u306b\u3064\u306a\u304c\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u5206\u6563\u30b7\u30b9\u30c6\u30e0\u3001\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3001\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u91cf\u3084\u983b\u5ea6\u304c\u5927\u304d\u304f\u5909\u5316\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u7279\u306b\u91cd\u8981\u3067\u3059\u3002\u307e\u305f\u3001\u5206\u6563\u578b\u30b5\u30fc\u30d3\u30b9\u62d2\u5426\uff08DDoS\uff09\u653b\u6483\u306a\u3069\u3001\u3042\u308b\u7a2e\u306e\u30b5\u30a4\u30d0\u30fc\u653b\u6483\u3092\u9632\u5fa1\u3059\u308b\u4e0a\u3067\u3082\u91cd\u8981\u306a\u8981\u7d20\u3068\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30fc\u30c8\u5236\u9650\u306e\u4e00\u822c\u7684\u306a\u4f7f\u7528\u4f8b\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"API\u7ba1\u7406\uff1a \u3055\u307e\u3056\u307e\u306aAPI\u3092\u63d0\u4f9b\u3059\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u3001\u5358\u4e00\u306e\u30e6\u30fc\u30b6\u30fc\u3084\u30b5\u30fc\u30d3\u30b9\u304c\u5e2f\u57df\u5e45\u3092\u72ec\u5360\u3059\u308b\u306e\u3092\u9632\u304e\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u516c\u5e73\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30ec\u30fc\u30c8\u5236\u9650\u304c\u6975\u3081\u3066\u91cd\u8981\u3067\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"E\u30b3\u30de\u30fc\u30b9\u30b5\u30a4\u30c8 \u30d6\u30e9\u30c3\u30af\u30d5\u30e9\u30a4\u30c7\u30fc\u30fb\u30bb\u30fc\u30eb\u306e\u3088\u3046\u306a\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306e\u591a\u3044\u30a4\u30d9\u30f3\u30c8\u306e\u969b\u3001\u30ec\u30fc\u30c8\u5236\u9650\u3092\u884c\u3046\u3053\u3068\u3067\u30e6\u30fc\u30b6\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6d41\u5165\u3092\u5236\u5fa1\u3057\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u30af\u30e9\u30c3\u30b7\u30e5\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30aa\u30f3\u30e9\u30a4\u30f3\u30b2\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc \u30ec\u30fc\u30c8\u5236\u9650\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u4e00\u5b9a\u6642\u9593\u5185\u306b\u5b9f\u884c\u3067\u304d\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u6570\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u3067\u3001\u4e0d\u6b63\u884c\u70ba\u3092\u7de9\u548c\u3057\u3001\u516c\u5e73\u306a\u7af6\u6280\u5834\u3092\u78ba\u4fdd\u3057\u3001\u30b2\u30fc\u30e0\u306e\u6574\u5408\u6027\u3092\u7dad\u6301\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9",children:"Momento\u3092\u4f7f\u3063\u305f\u5206\u6563\u578b\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u69cb\u7bc9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5206\u6563\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3057\u3001\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3/\u5206(TPM)\u3092\u52b9\u679c\u7684\u306b\u7ba1\u7406\u3057\u305f\u3044\u3068\u3057\u307e\u3059\u3002\r\n\u79c1\u305f\u3061\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001Momento\u306e",(0,r.jsx)(n.code,{children:"increment"}),"\u3068",(0,r.jsx)(n.code,{children:"updateTTL"})," ",(0,r.jsx)(n.a,{href:"../develop/api-reference",children:"API"}),"\u3092\u5229\u7528\u3059\u3057\u307e\u3059\u3002\u3053\u306e\u65b9\u6cd5\u306f\u52b9\u7387\u7684\u3067\u3042\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u975e\u5e38\u306b\u6b63\u78ba\u3067\u3042\u308b\u3053\u3068\u304c\u8a3c\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u79c1\u305f\u3061\u306e\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u4e2d\u6838\u3092\u306a\u3059\u306e\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u6bce\u5206\u306e\u7c92\u5ea6\u306b\u57fa\u3065\u3044\u3066\u30ec\u30fc\u30c8\u5236\u9650\u3092\u884c\u3046\u3053\u3068\u3092\u53ef\u80fd\u306b\u3059\u308b\u30ad\u30fc\u30e1\u30ab\u30cb\u30ba\u30e0\u3067\u3059\u3002\u30ad\u30fc\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u7d44\u307f\u5408\u308f\u305b\u3068\u73fe\u5728\u306e\u5206\u3092\u4f7f\u7528\u3057\u3066\u69cb\u7bc9\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30ad\u30fc\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c1\u5206\u9593\u306b\u884c\u3048\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u6570\u3092\u8ffd\u8de1\u3057\u3001\u5236\u9650\u3059\u308b\u4e0a\u3067\u6975\u3081\u3066\u91cd\u8981\u306a\u5f79\u5272\u3092\u679c\u305f\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306f\u3001\u5404\u30e6\u30fc\u30b6\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u305f\u3068\u304d\u306b\u3001\u5404\u30e6\u30fc\u30b6\u306e\u30e6\u30cb\u30fc\u30af \u30ad\u30fc\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3057\u30011\u5206\u9593\u306e\u6700\u521d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306eTTL(time-to-live) \u309260\u79d2\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u91cd\u8981\u3067\u3059\u3002\u30ad\u30fc\u306f\u3001\u4e0e\u3048\u3089\u308c\u305f1\u5206\u9593\u306e\u76ee\u7684\u3092 \u679c\u305f\u3057\u305f\u5f8c\u306f\u610f\u5473\u304c\u306a\u3044\u306e\u3067\u3001\u671f\u9650\u5207\u308c\u306b\u3057\u305f\u3044\u304b\u3089\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u6d41\u308c\u306f\u3053\u3046\u3067\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["user_id-current_minute",(0,r.jsx)(n.code,{children:"\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3057\u307e\u3059\u3002\u8fd4\u3055\u308c\u305f\u5024\u304c 1 \u306e\u5834\u5408\u3001\u305d\u306e\u5206\u306b\u304a\u3051\u308b\u305d\u306e\u30e6\u30fc\u30b6\u306e\u6700\u521d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002Momento \u306e "}),"increment",(0,r.jsx)(n.code,{children:" API \u306f\u30a2\u30c8\u30df\u30c3\u30af\u3067\u3042\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u623b\u308a\u5024\u304c 1 \u306e\u5834\u5408\u3001"}),"updateTTL` API \u3092\u4f7f\u7528\u3057\u3066\u305d\u306e\u30ad\u30fc\u306e TTL \u3092 60 \u79d2\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u3082\u3057\u305d\u306e\u5024\u304c\u3001\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u7528\u306b\u8a2d\u5b9a\u3055\u308c\u305fTPM\u306e\u5236\u9650\u5024\u3088\u308a\u5c0f\u3055\u3051\u308c\u3070\u3001 \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3057\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u30b9\u30ed\u30c3\u30c8\u30eb\u3092\u304b\u3051\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u65e9\u901f\u3001\u5b9f\u88c5\u306b\u53d6\u308a\u304b\u304b\u308a\u307e\u3057\u3087\u3046\u3002\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u601d\u8003\u30d7\u30ed\u30bb\u30b9\u3092\u8aac\u660e\u3059\u308b\u30b3\u30e1\u30f3\u30c8\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(c,{js:"import {\n  CacheClient,\n  CacheIncrementResponse,\n  CacheUpdateTtlResponse,\n  Configurations,\n  CreateCacheResponse,\n  CredentialProvider,\n} from '@gomomento/sdk';\n\n// since our rate limiting buckets are per minute, we expire keys every minute\nexport const RATE_LIMITER_TTL_MILLIS = 60000;\n\nexport class MomentoRateLimiter {\n  _client: CacheClient;\n  _limit: number;\n  _cacheName: string;\n\n  constructor(client: CacheClient, limit: number, cacheName: string) {\n    this._client = client;\n    this._limit = limit;\n    this._cacheName = cacheName;\n  }\n\n  /**\n   * Generates a unique key for a user (baseKey) for the current minute. This key will server as the backend\n   * cache key where we will store the amount of calls that have been made by a user for a given minute.\n   * @param baseKey\n   */\n  generateMinuteKey(baseKey: string): string {\n    const currentDate = new Date();\n    const currentMinute = currentDate.getMinutes();\n    return `${baseKey}_${currentMinute}`;\n  }\n\n  public async isLimitExceeded(id: string): Promise<boolean> {\n    const currentMinuteKey = this.generateMinuteKey(id);\n    // we do not pass a TTL to this; we don't know if the key for this user was present or not\n    const resp = await this._client.increment(\n      this._cacheName,\n      currentMinuteKey\n    );\n\n    switch (resp.type) {\n      case CacheIncrementResponse.Success: {\n        if (resp.value() <= this._limit) {\n          // if returned value is 1, we know this was the first request in this minute for the given user. So\n          // we set the TTL for this minute's key to 60 seconds now.\n          if (resp.value() === 1) {\n            const updateTTLResp = await this._client.updateTtl(\n              this._cacheName,\n              currentMinuteKey,\n              RATE_LIMITER_TTL_MILLIS\n            );\n            switch (updateTTLResp.type) {\n              case CacheUpdateTtlResponse.Set:\n                break;\n              case CacheUpdateTtlResponse.Miss:\n              case CacheUpdateTtlResponse.Error: {\n                console.error(\n                  `Failed to update TTL; this minute's user requests might be overcounted, key: ${currentMinuteKey}`\n                );\n                break;\n              }\n            }\n          }\n          return false;\n        }\n        break;\n      }\n\n      case CacheIncrementResponse.Error:\n        throw new Error(resp.message());\n    }\n\n    return true;\n  }\n}\n\nasync function main() {\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider:\n      CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n    defaultTtlSeconds: 60,\n  });\n\n  const tpmLimit = 1;\n  const cacheName = 'rate-limiter';\n\n  const createCacheResp = await cacheClient.createCache(cacheName);\n  switch (createCacheResp.type) {\n    case CreateCacheResponse.AlreadyExists:\n      console.log(`${cacheName} cache already exists`);\n      break;\n    case CreateCacheResponse.Success:\n      console.log(`${cacheName} cache created`);\n      break;\n    case CreateCacheResponse.Error:\n      throw new Error(createCacheResp.message());\n  }\n\n  const momentoRateLimier = new MomentoRateLimiter(\n    cacheClient,\n    tpmLimit,\n    cacheName\n  );\n\n  const limitExceeded = await momentoRateLimier.isLimitExceeded('user-id');\n  if (!limitExceeded) {\n    // do work for user\n    console.log('Successfully called work and request was allowed');\n  } else {\n    console.warn('Request was throttled');\n  }\n}\n\nmain()\n  .then()\n  .catch((err: Error) => console.error(err.message));\n"}),"\n",(0,r.jsx)(n.h2,{id:"\u79c1\u305f\u3061\u306f\u3082\u3063\u3068\u591a\u304f\u3092\u671b\u3093\u3067\u3044\u307e\u3059",children:"\u79c1\u305f\u3061\u306f\u3082\u3063\u3068\u591a\u304f\u3092\u671b\u3093\u3067\u3044\u307e\u3059\uff01"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["SDK\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u4f7f\u3063\u3066Momento\u306e\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u3092\u64cd\u4f5c\u3057\u3001\u7af6\u5408\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3057\u305f\u308a\u3001\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30b9\u30ed\u30c3\u30c8\u30eb\u3055\u305b\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/rate-limiter",children:"Typescript"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.gomomento.com/blog/did-you-say-you-want-a-distributed-rate-limiter",children:"\u30d6\u30ed\u30b0\u3092\u8aad\u3080"}),"\u3067\u306f\u3001\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc\u306e\u3055\u307e\u3056\u307e\u306a\u30d2\u30e5\u30fc\u30ea\u30b9\u30c6\u30a3\u30c3\u30af\u3092\u5206\u6790\u3057\u3001\u4ed6\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3068\u3082\u6bd4\u8f03\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),l=t(205),c=t(57485),o=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,d]=p({queryString:t,groupId:a}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=o??b;return m({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},42821:(e,n,t)=>{t(96540)},70503:(e,n,t)=>{t.d(n,{F:()=>i});var r=t(21432),a=(t(96540),t(74848));const i=e=>{let{language:n,code:t}=e;return(0,a.jsx)(r.A,{language:n,children:t})}}}]);