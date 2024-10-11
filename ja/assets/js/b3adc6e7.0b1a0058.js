"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6150],{4278:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=i(4848),n=i(8453);const c={sidebar_position:6,sidebar_label:"Netlify",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify."},a="Netlify\u30a2\u30d7\u30ea\u3068Momento\u3092Integrate\u3059\u308b",r={id:"cache/integrations/netlify-integration",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/integrations/netlify-integration.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/netlify-integration",permalink:"/ja/cache/integrations/netlify-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/netlify-integration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Netlify",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify."},sidebar:"cacheSidebar",previous:{title:"Bulk data writing",permalink:"/ja/cache/integrations/bulk-writing-from-redis-json-csv"},next:{title:"Sequelize",permalink:"/ja/cache/integrations/sequelize"}},d={},o=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Netlify\u3092\u4f7f\u3063\u305f\u30c7\u30d7\u30ed\u30a4",id:"netlify\u3092\u4f7f\u3063\u305f\u30c7\u30d7\u30ed\u30a4",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"netlify\u30a2\u30d7\u30ea\u3068momento\u3092integrate\u3059\u308b",children:"Netlify\u30a2\u30d7\u30ea\u3068Momento\u3092Integrate\u3059\u308b"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.netlify.com/",children:"Netlify"}),"\u306f\u3001\u30e2\u30c0\u30f3\u306a\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3084\u30a2\u30d7\u30ea\u3092\u69cb\u7bc9\u3001\u30c7\u30d7\u30ed\u30a4\u3001\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u4eba\u6c17\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002\u5148\u9032\u7684\u306a\u30b0\u30ed\u30fc\u30d0\u30ebCDN\u3001Git\u306b\u7d71\u5408\u3055\u308c\u305fCI/CD\u3001\u7121\u6599\u306e\u81ea\u52d5HTTPS\u30b5\u30dd\u30fc\u30c8\u306a\u3069\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u30c7\u30d7\u30ed\u30a4\u30d7\u30ed\u30bb\u30b9\u306f Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u76f4\u63a5\u7d71\u5408\u3055\u308c\u3066\u304a\u308a\u3001\u6700\u521d\u306e\u30c7\u30d7\u30ed\u30a4\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u9078\u629e\u3068\u540c\u3058\u304f\u3089\u3044\u7c21\u5358\u3067\u3059\u3002\u3044\u3063\u305f\u3093\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u3068\u3001\u30b5\u30a4\u30c8\u3084\u30a2\u30d7\u30ea\u306e\u66f4\u65b0\u306f\u5909\u66f4\u3092 Git \u306b\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u81ea\u52d5\u7684\u306b\u884c\u308f\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001",(0,s.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"Javascript SDK"})," \u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30b5\u30f3\u30d7\u30eb ",(0,s.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat",children:"Next.js \u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," \u3092\u4f7f\u3044\u307e\u3059\u3002\n\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u304c\u7d42\u308f\u308b\u3053\u308d\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u30d9\u30fc\u30b9\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b8c\u6210\u3057\u3001\u305d\u306eURL\u3067\u53cb\u9054\u3092\u30c1\u30e3\u30c3\u30c8\u306b\u62db\u5f85\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/",children:"GitHub"}),"\u3001",(0,s.jsx)(t.a,{href:"https://gitlab.com",children:"GitLab"}),"\u3001",(0,s.jsx)(t.a,{href:"https://bitbucket.org/",children:"Bitbucket"}),"\u306a\u3069\u306eGit\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.netlify.com/",children:"Netlify"}),"\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u500b\u4eba\u30ea\u30dd\u30b8\u30c8\u30ea\u306b",(0,s.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"Momento Javascript SDK"}),"\u306e\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30d5\u30a9\u30fc\u30af\u304c\u3042\u308b\u3053\u3068\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Netlify \u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u3001Git \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b Momento Javascript SDK \u306e\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30d5\u30a9\u30fc\u30af\u304c\u3042\u308c\u3070\u3001",(0,s.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"})," \u3092\u4f7f\u3063\u3066 Momento \u5074\u3092\u8a2d\u5b9a\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e Google \u307e\u305f\u306f GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u30da\u30fc\u30b8\u306e\u53f3\u4e0a\u306b\u3042\u308b ",(0,s.jsx)(t.code,{children:"Create Cache"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Cache button",src:i(2432).A+"",width:"336",height:"258"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"chat"}),"\u3068\u3044\u3046\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306fAWS\u304bGCP\u306e\u597d\u304d\u306a\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b\u3001\u597d\u304d\u306a\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create cache form",src:i(4149).A+"",width:"2990",height:"1350"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Create"}),"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u5229\u7528\u53ef\u80fd\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u65b0\u3057\u3044",(0,s.jsx)(t.code,{children:"chat"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat cache",src:i(8701).A+"",width:"2954",height:"648"})}),"\n",(0,s.jsxs)(t.p,{children:["\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u305f\u30ea\u30fc\u30b8\u30e7\u30f3\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3067Momento API \u30ad\u30fc\u3092\u751f\u6210\u3059\u308b\u969b\u306b\u3001\u540c\u3058\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.jsx)(t.a,{href:"https://console.gomomento.com/api-keys",children:"api-keys"})," \u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3057\u305f\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u3068\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3001",(0,s.jsx)(t.code,{children:"Super User Key"})," \u30c8\u30fc\u30af\u30f3\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u3001",(0,s.jsx)(t.code,{children:"Generate Key"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Generate Key",src:i(5329).A+"",width:"3416",height:"1670"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"API\u30ad\u30fc"}),"\u3092\u30b3\u30d4\u30fc\u3057\u3066\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5f8c\u3067Netlify\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u8a2d\u5b9a\u3059\u308b\u969b\u306b\u3001\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u3059\u308b\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Generated Key",src:i(3761).A+"",width:"2704",height:"416"})}),"\n",(0,s.jsx)(t.h2,{id:"netlify\u3092\u4f7f\u3063\u305f\u30c7\u30d7\u30ed\u30a4",children:"Netlify\u3092\u4f7f\u3063\u305f\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,s.jsxs)(t.p,{children:["\u3044\u3088\u3044\u3088 Netlify \u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a\u3068\u30c7\u30d7\u30ed\u30a4\u3092\u884c\u3044\u307e\u3059\u3002\u524d\u8ff0\u3057\u305f\u3088\u3046\u306b\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u306b Momento Javascript SDK \u306e\u30b3\u30d4\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f\u3001",(0,s.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"\u30aa\u30ea\u30b8\u30ca\u30eb"})," \u304b\u3089\u30d5\u30a9\u30fc\u30af\u3057\u305f GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Fork SDK Repository",src:i(5980).A+"",width:"2478",height:"84"})}),"\n",(0,s.jsxs)(t.p,{children:["Netlify \u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u5f8c\u3001\u30c1\u30fc\u30e0\u306e ",(0,s.jsx)(t.code,{children:"Sites"})," \u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001",(0,s.jsx)(t.code,{children:"Add New Site"})," -> ",(0,s.jsx)(t.code,{children:"Import an Existing Project"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netlify Add Site Button",src:i(8142).A+"",width:"2980",height:"362"})}),"\n",(0,s.jsx)(t.p,{children:"Git\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netlify Git providers",src:i(7292).A+"",width:"1740",height:"422"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5229\u7528\u53ef\u80fd\u306a\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30ea\u30b9\u30c8\u304b\u3089\u3001",(0,s.jsx)(t.code,{children:"client-sdk-javascript"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netlify repository list",src:i(1700).A+"",width:"1742",height:"518"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6b21\u306e\u753b\u9762\u3067\u306f\u3001\u30c7\u30d7\u30ed\u30a4\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002",(0,s.jsx)(t.code,{children:"main"}),"\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002Momento Javascript SDK \u306e\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u306e\u3067\u3001\u30da\u30fc\u30b8\u306e ",(0,s.jsx)(t.code,{children:"Build settings"})," \u30bb\u30af\u30b7\u30e7\u30f3\u3067 ",(0,s.jsx)(t.code,{children:"Base directory"})," \u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c1\u30e3\u30c3\u30c8\u30b5\u30f3\u30d7\u30eb\u306e\u30d1\u30b9\u306f ",(0,s.jsx)(t.code,{children:"/examples/web/nextjs-chat"})," \u306a\u306e\u3067\u3001",(0,s.jsx)(t.code,{children:"Base directory"})," \u306b\u305d\u308c\u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u30d9\u30fc\u30b9\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u6b63\u3057\u304f\u5165\u529b\u3055\u308c\u3066\u3044\u308c\u3070\u3001\u3044\u304f\u3064\u304b\u306e\u30de\u30b8\u30c3\u30af\u304c\u8d77\u3053\u308b\u306f\u305a\u3067\u3059\u3002Netlify\u306f\u30d9\u30fc\u30b9\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e2d\u8eab\u3092\u8abf\u3079\u3001\u79c1\u305f\u3061\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304cNext.js\u3092\u4f7f\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u691c\u51fa\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u3067\u3001\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a9\u30fc\u30e0\u306e\u6b8b\u308a\u306e\u90e8\u5206\u3092\u57cb\u3081\u3066\u304f\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002Netlify\u304c\u9078\u3093\u3060\u5024\u306f\u826f\u3055\u305d\u3046\u306a\u306e\u3067\u3001\u8a2d\u5b9a\u306e\u6700\u7d42\u6bb5\u968e\u3067\u3042\u308b\u74b0\u5883\u5909\u6570\u306b\u9032\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netlify build settings",src:i(7323).A+"",width:"683",height:"1041"})}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u5148\u307b\u3069Momento API\u30ad\u30fc\u3092\u751f\u6210\u3057\u3066\u4fdd\u5b58\u3057\u305f\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d3\u30eb\u30c9\u8a2d\u5b9a\u306e\u4e0b\u306b\u3042\u308b ",(0,s.jsx)(t.code,{children:"Add environment variables"})," \u30dc\u30bf\u30f3\u3092\u4f7f\u3063\u3066\u3001",(0,s.jsx)(t.code,{children:"MOMENTO_API_KEY"})," \u3092\u30ad\u30fc\u3001\u751f\u6210\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3092\u5024\u3068\u3059\u308b\u74b0\u5883\u5909\u6570\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u6b21\u306b\u3001",(0,s.jsx)(t.code,{children:"NEXT_PUBLIC_MOMENTO_CACHE_NAME"}),"\u3092\u30ad\u30fc\u3001",(0,s.jsx)(t.code,{children:"chat"}),"\u3092\u5024\u3068\u3057\u30662\u3064\u76ee\u306e\u74b0\u5883\u5909\u6570\u3092\u8ffd\u52a0\u3057\u3001\u30a2\u30d7\u30ea\u3092\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5411\u3051\u308b\u3002\u4ee5\u4e0a\u3067\u30c7\u30d7\u30ed\u30a4\u306e\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3060\u3002Deploy client-sdk-javascript`\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u30a2\u30d7\u30ea\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u30c7\u30d7\u30ed\u30a4\u4e2d\u3001Netlify\u306f\u3042\u306a\u305f\u306e\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3057\u3001\u516c\u958b\u3059\u308b\u305f\u3081\u306b\u4f55\u3092\u884c\u3063\u3066\u3044\u308b\u304b\u3092\u793a\u3059\u8a73\u7d30\u306a\u30ed\u30b0\u3092\u8868\u793a\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30c7\u30d7\u30ed\u30a4\u306e\u5931\u6557\u3092\u5831\u544a\u3057\u3001\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u3092\u652f\u63f4\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u304c\u8a08\u753b\u901a\u308a\u306b\u9032\u3093\u3067\u3044\u308c\u3070\u3001\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u3092\u8981\u7d04\u3057\u305f\u30da\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netlify site published",src:i(6319).A+"",width:"1344",height:"660"})}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u308c\u3067\u53cb\u9054\u3068\u30c1\u30e3\u30c3\u30c8\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f\uff01\u5de6\u306e\u30ca\u30d3\u306e",(0,s.jsx)(t.code,{children:"Site overview"}),"\u306b\u79fb\u52d5\u3057\u3066\u3001\u3042\u306a\u305f\u306e\u30b5\u30a4\u30c8\u306b\u751f\u6210\u3055\u308c\u305fURL\u3092\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\u3002\u3082\u3061\u308d\u3093\u3001\u672c\u756a\u7528\u306e\u30a2\u30d7\u30ea\u3067\u3042\u308c\u3070\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u3067\u3057\u3087\u3046\u304c\u3001\u751f\u6210\u3055\u308c\u305fnetlify.app\u306eURL\u3067\u5341\u5206\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netlify site overview",src:i(3078).A+"",width:"2968",height:"636"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6982\u8981\u306b\u3042\u308b",(0,s.jsx)(t.code,{children:"https://charming-salmiakki-e07713.netlify.app/"}),"\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\uff08\u3082\u3061\u308d\u3093\u3042\u306a\u305f\u306eURL\u306f\u9055\u3046\u3067\u3057\u3087\u3046\uff09\u3001\u30c1\u30e3\u30c3\u30c8\u30a2\u30d7\u30ea\u306e\u30ed\u30d3\u30fc\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u306e\u540d\u524d\u306f ",(0,s.jsx)(t.code,{children:"chat"})," \u3068\u3057\u307e\u3059\u3002\u3069\u3093\u306a\u540d\u524d\u3067\u3082\u304b\u307e\u3044\u307e\u305b\u3093\u304c\u3001",(0,s.jsx)(t.code,{children:"chat"}),"\u3092\u4f7f\u3046\u3068\u899a\u3048\u3084\u3059\u304f\u3001\u5171\u6709\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat app lobby",src:i(3853).A+"",width:"708",height:"552"})}),"\n",(0,s.jsx)(t.p,{children:"\u6700\u5f8c\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u30c1\u30e3\u30c3\u30c8\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat app username",src:i(8385).A+"",width:"758",height:"542"})}),"\n",(0,s.jsx)(t.p,{children:"\u3042\u3068\u306f\u3001\u30c1\u30e3\u30c3\u30c8\u306b\u62db\u5f85\u3057\u305f\u3044\u4eba\u305f\u3061\u3068URL\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3001\u30eb\u30fc\u30e0\u540d\u3092\u5171\u6709\u3059\u308b\u3060\u3051\u3067\u3059\uff01"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat app chat",src:i(3151).A+"",width:"3024",height:"1794"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u306e\u7c21\u5358\u306a\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u3001Netlify\u3092\u4f7f\u3063\u3066Momento\u3092\u642d\u8f09\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u304c\u3044\u304b\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u7c21\u5358\u3067\u3042\u308b\u304b\u3092\u7406\u89e3\u3057\u3066\u3044\u305f\u3060\u3051\u305f\u3068\u601d\u3044\u307e\u3059\u3002\u3082\u3061\u308d\u3093\u3001",(0,s.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat",children:"\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u30b3\u30fc\u30c9"})," \u306b\u3082\u81ea\u7531\u306b\u98db\u3073\u8fbc\u3093\u3067\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u7279\u306b\u30dd\u30fc\u30ea\u30f3\u30b0\u3084\u30a6\u30a7\u30d6\u30bd\u30b1\u30c3\u30c8\u306a\u3069\u306e\u4ee3\u66ff\u30a2\u30d7\u30ed\u30fc\u30c1\u3068\u6bd4\u8f03\u3057\u305f\u5834\u5408\u3001\u30c1\u30e3\u30c3\u30c8\u3092\u52d5\u304b\u3059Momento\u30c8\u30d4\u30c3\u30af\u6a5f\u80fd\u306e\u30b7\u30f3\u30d7\u30eb\u3055\u3092\u697d\u3057\u3093\u3067\u3044\u305f\u3060\u3051\u308c\u3070\u3068\u601d\u3044\u307e\u3059\u3002\u307e\u305f\u3001Momento \u3092\u4f7f\u7528\u3057\u3066\u304a\u5ba2\u69d8\u304c\u4eca\u5f8c\u3069\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u69cb\u7bc9\u3057\u3001\u5c55\u958b\u3055\u308c\u308b\u304b\u3092\u697d\u3057\u307f\u306b\u3057\u3066\u3044\u307e\u3059\uff01"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3761:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},8701:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/console-caches-chat-ce796d1f23d2d69c009f067727eab408.png"},4149:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},2432:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},5329:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"},5980:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/github-fork-js-sdk-3950285fbebfdc6a75982998d63e70d6.png"},8142:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/netlify-add-site-24baeb27ef3f6f7041b4b926c90c666b.png"},7323:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/netlify-build-settings-5c2a204a079c6a0a3c239bb45da87d79.png"},7292:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/netlify-git-providers-c88441df15cfd9b65c03a46ff3111e4c.png"},6319:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/netlify-published-site-27122792a2a46c654589bfaf801d5d19.png"},1700:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/netlify-repo-list-adddc3ed2798fb9a2749a7eee29acf32.png"},3078:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/netlify-site-overview-96f6971538763e0730c8ff8c54f8c289.png"},3151:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/nextjs-chat-app-chat-6d2b67d875c0be1200e1e583faced55c.png"},3853:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/nextjs-chat-app-lobby-c44d4afaf6ea9f9addfa7ca50f4d754b.png"},8385:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/nextjs-chat-app-username-35a5af269bf50fa8441581c33a673661.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(6540);const n={},c=s.createContext(n);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);