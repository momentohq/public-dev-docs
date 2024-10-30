"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1959],{19866:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(74848),i=n(28453),r=(n(51441),n(35347));const o={sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache."},c="CollectionTTL object API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",s={id:"cache/develop/api-reference/collection-ttl",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/api-reference/collection-ttl.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/collection-ttl",permalink:"/ja/cache/develop/api-reference/collection-ttl",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/collection-ttl.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"CollectionTTL object",title:"CollectionTTL API reference",description:"Learn how to interact with the CollectionTTL object in Momento Cache."},sidebar:"cacheSidebar",previous:{title:"HTTP API",permalink:"/ja/cache/develop/api-reference/http-api"},next:{title:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",permalink:"/ja/cache/develop/api-reference/response-objects"}},a={},d=[{value:"Compatible data types",id:"compatible-data-types",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30d1\u30e9\u30e1\u30fc\u30bf",level:2},{value:"\u8ffd\u52a0\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc",id:"\u8ffd\u52a0\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc",level:2},{value:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30e1\u30bd\u30c3\u30c9",id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30e1\u30bd\u30c3\u30c9",level:2}];function h(e){const l={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.header,{children:(0,t.jsx)(l.h1,{id:"collectionttl-object-api-\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",children:"CollectionTTL object API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})}),"\n",(0,t.jsx)(l.p,{children:"CollectionTtl\u578b\u306f\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3092\u884c\u3046\u3068\u304d\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(l.p,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u66f4\u65b0\u3059\u308b\u3068\u304d\u306b\u3001TTL\u3092\u66f4\u65b0\u3057\u305f\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001TTL\u3092\u305d\u306e\u307e\u307e\u306b\u3057\u305f\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\n\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u3053\u306e\u52d5\u4f5c\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(l.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u306f\u3001\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u304c\u767a\u751f\u3059\u308b\u305f\u3073\u306b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3TTL\u304c\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u308b\u3053\u3068\u3067\u3059\u3002",(0,t.jsx)(l.code,{children:"dictionaryFetch"}),"\u3084",(0,t.jsx)(l.code,{children:"listLength"}),"\u306e\u3088\u3046\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u3092\u884c\u3046\u5834\u5408\u306f\u3001CollectionTTL\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(l.p,{children:["Momento Cache \u3067\u306e TTL \u306e\u52d5\u4f5c\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(l.a,{href:"/ja/cache/learn/how-it-works/expire-data-with-ttl",children:"Expire Data with TTL"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(l.admonition,{type:"caution",children:(0,t.jsx)(l.p,{children:"CollectionTTL\u306f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5168\u4f53\u306eTTL\u3092\u6307\u5b9a\u3059\u308b\u3082\u306e\u3067\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u500b\u3005\u306e\u8981\u7d20\u306eTTL\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u671f\u9650\u5207\u308c\u306b\u306a\u3089\u306a\u3051\u308c\u3070\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u306f\u671f\u9650\u5207\u308c\u306b\u306a\u308a\u307e\u305b\u3093\u3002"})}),"\n",(0,t.jsx)(l.h2,{id:"compatible-data-types",children:"Compatible data types"}),"\n",(0,t.jsxs)(l.p,{children:["CollectionTTL \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u4ee5\u4e0b\u306e ",(0,t.jsx)(l.a,{href:"/cache/develop/basics/datatypes#collection-data-types-cdts",children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30c7\u30fc\u30bf\u578b"})," \u3068\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.a,{href:"/ja/cache/develop/api-reference/dictionary-collections",children:"Dictionary"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.a,{href:"/ja/cache/develop/api-reference/list-collections",children:"List"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.a,{href:"/ja/cache/develop/api-reference/set-collections",children:"Set"})}),"\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.a,{href:"/ja/cache/develop/api-reference/sorted-set-collections",children:"Sorted Set"})}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["\u4e0b\u306e\u56f3\u304c\u793a\u3059\u3088\u3046\u306b\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306f",(0,t.jsx)(l.code,{children:"elements"}),"\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u308b",(0,t.jsx)(l.code,{children:"items"}),"\u3068\u307f\u306a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)("img",{src:"/img/collection_data_types.png",alt:"Collection data types drawing | Momento Cache",width:"80%"}),"\n",(0,t.jsx)(l.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3078\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3067\u306f\u3001 ",(0,t.jsx)(l.code,{children:"CollectionTtl"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:["\u30b3\u30ec\u30af\u30b7\u30e7\u30f3TTL\u304c\u6307\u5b9a\u3055\u308c\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,t.jsx)(l.code,{children:"CollectionTtl.fromCacheTtl()"})," \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u5024\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(l.li,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306eTTL\u306f\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,t.jsx)(l.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306e\u52d5\u4f5c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306bCollectionTtl\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(l.p,{children:["\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u6642\u306b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3059\u308bTTL\u3092\u660e\u793a\u7684\u306b\u6307\u5b9a\u3059\u308b\u306b\u306f\u3001 ",(0,t.jsx)(l.code,{children:"CollectionTtl.of()"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(r.r,{js:"CollectionTtl.of(20 * 60); // 20 minutes",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(l.p,{children:"\u3053\u308c\u306f\u3001\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u76f4\u63a5\u547c\u3073\u51fa\u3059\u306e\u3068\u540c\u7b49\u306e\u4fbf\u5229\u306a\u30e1\u30bd\u30c3\u30c9\u3067\u3059\uff1a"}),"\n",(0,t.jsx)(r.r,{js:"const ttlSeconds = 20 * 60; // 20 minutes\nconst refreshTtl = true;\nnew CollectionTtl(ttlSeconds, refreshTtl);",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsxs)(l.p,{children:["\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u305f\u3068\u304d\u3060\u3051TTL\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u308c\u4ee5\u964d\u306e\u66f8\u304d\u8fbc\u307f\u3067\u306f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(l.code,{children:"withNoRefreshTtlOnUpdates()"}),"\u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(r.r,{js:"CollectionTtl.of(20 * 60).withNoRefreshTtlOnUpdates(); // 20 minutes, only when collection is created",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(l.p,{children:"\u3053\u308c\u3082\u307e\u305f\u3001\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u3092\u76f4\u63a5\u547c\u3073\u51fa\u3059\u306e\u3068\u540c\u7b49\u306e\u4fbf\u5229\u306a\u30e1\u30bd\u30c3\u30c9\u3067\u3059\uff1a"}),"\n",(0,t.jsx)(r.r,{js:"const ttlSeconds = 20 * 60; // 20 minutes\nconst refreshTtl = false;\nnew CollectionTtl(ttlSeconds, refreshTtl);",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(l.h2,{id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"ttl"}),": duration - (\u30aa\u30d7\u30b7\u30e7\u30f3)","\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"TTL \u304c\u4e0e\u3048\u3089\u308c\u306a\u3044\u5834\u5408\u3001\u73fe\u5728\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b TTL \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"refreshTtl"}),": boolean = true - (\u30aa\u30d7\u30b7\u30e7\u30f3) * true \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e TTL \u306f\u6307\u5b9a\u3057\u305f\u5024\u306b\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002","\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"true\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306eTTL\u306f\u6307\u5b9a\u3055\u308c\u305f\u5024\u306b\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(l.li,{children:"false\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u65e2\u5b58\u306eTTL\u304c\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"\u8ffd\u52a0\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc",children:"\u8ffd\u52a0\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"fromCacheTtl()"}),"\uff1a CollectionTtl - \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e TTL \u3092\u4f7f\u3044\u307e\u3059\u3002 ",(0,t.jsx)(l.code,{children:"CollectionTtl(null, true)"})," \u3068\u540c\u3058\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"of(ttl: duration)"}),"\uff1a CollectionTtl - ",(0,t.jsx)(l.code,{children:"CollectionTtl(ttl, true)"}),"\u3068\u540c\u3058\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"refreshTtlIfProvided(ttl?: duration)"}),"\uff1a CollectionTtl - \u5024\u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306eTTL\u3092\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3059\u308b\u3002\u5024\u304c\u63d0\u4f9b\u3055\u308c\u306a\u3044\u5834\u5408\u3001TTL\u306f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30e1\u30bd\u30c3\u30c9",children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"ttlSeconds()"}),": duration - TTL \u3092\u79d2\u3067\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"ttlMilliseconds()"}),": duration - TTL \u3092\u30df\u30ea\u79d2\u3067\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"refreshTtl()"}),": boolean - \u30a2\u30a4\u30c6\u30e0\u304c\u5909\u66f4\u3055\u308c\u305f\u969b\u306b TTL \u3092\u66f4\u65b0\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"withRefreshTtlOnUpdates()"}),"\uff1a CollectionTtl - \u30b3\u30d4\u30fc\u3067\u3001\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u306f true \u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"withNoRefreshTtlOnUpdates()"}),"\uff1a CollectionTtl - \u30b3\u30d4\u30fc\u3067\u3001\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u306f false \u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"toString()"}),": TTL (\u79d2) \u3068 refreshTtl \u306e\u8a2d\u5b9a\u3092\u8868\u793a\u3059\u308b\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},51441:(e,l,n)=>{n(96540)},35347:(e,l,n)=>{n.d(l,{r:()=>b});var t=n(11470),i=n(19365),r=n(21432),o=(n(96540),n(27293)),c=n(74848);const s="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",a="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",d="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",h="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",p="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",x="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",j="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",m="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",u="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",f="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",T="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",b=e=>{let{js:l,python:n,java:b,kotlin:g,go:v,csharp:A,php:C,rust:L,ruby:k,elixir:y,swift:w,dart:_,cli:P}=e;return l||n||b||g||v||A||C||L||k||y||w||_||P?(0,c.jsxs)(t.A,{children:[l&&(0,c.jsxs)(i.A,{value:"js",label:"JavaScript",children:[(0,c.jsx)(r.A,{language:"js",children:l}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),n&&(0,c.jsxs)(i.A,{value:"python",label:"Python",children:[(0,c.jsx)(r.A,{language:"python",children:n}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),b&&(0,c.jsxs)(i.A,{value:"java",label:"Java",children:[(0,c.jsx)(r.A,{language:"java",children:b}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),g&&(0,c.jsxs)(i.A,{value:"kotlin",label:"Kotlin",children:[(0,c.jsx)(r.A,{language:"kotlin",children:g}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,c.jsxs)(i.A,{value:"go",label:"Go",children:[(0,c.jsx)(r.A,{language:"go",children:v}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,c.jsxs)(i.A,{value:"csharp",label:"C#",children:[(0,c.jsx)(r.A,{language:"csharp",children:A}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),C&&(0,c.jsxs)(i.A,{value:"php",label:"PHP",children:[(0,c.jsx)(r.A,{language:"php",children:C}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),L&&(0,c.jsxs)(i.A,{value:"rust",label:"Rust",children:[(0,c.jsx)(r.A,{language:"rust",children:L}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),k&&(0,c.jsx)(i.A,{value:"ruby",label:"Ruby",children:(0,c.jsx)(r.A,{language:"ruby",children:k})}),y&&(0,c.jsxs)(i.A,{value:"elixir",label:"Elixir",children:[(0,c.jsx)(r.A,{language:"elixir",children:y}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,c.jsxs)(i.A,{value:"swift",label:"Swift",children:[(0,c.jsx)(r.A,{language:"swift",children:w}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),_&&(0,c.jsxs)(i.A,{value:"dart",label:"Dart",children:[(0,c.jsx)(r.A,{language:"dart",children:_}),(0,c.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,c.jsx)("a",{href:T,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),P&&(0,c.jsx)(i.A,{value:"cli",label:"CLI",children:(0,c.jsx)(r.A,{language:"cli",children:P})})]}):null}}}]);