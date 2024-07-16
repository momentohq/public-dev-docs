"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2259],{7681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(4848),i=n(8453),o=(n(2821),n(503));const c={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Getting started with Momento Cache in Elixir",description:"Learn the basic building blocks for writing Elixir code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","elixir","phoenix","erlang","beam"]},s="Elixir\u3067Momento Cache\u3092\u59cb\u3081\u308b",a={id:"sdks/elixir/cache",title:"Getting started with Momento Cache in Elixir",description:"Learn the basic building blocks for writing Elixir code to interact with Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/elixir/cache.mdx",sourceDirName:"sdks/elixir",slug:"/sdks/elixir/cache",permalink:"/ja/sdks/elixir/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/elixir/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Getting started with Momento Cache in Elixir",description:"Learn the basic building blocks for writing Elixir code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","elixir","phoenix","erlang","beam"]}},l={},d=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"CacheClient \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"cacheclient-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elixir\u3067momento-cache\u3092\u59cb\u3081\u308b",children:"Elixir\u3067Momento Cache\u3092\u59cb\u3081\u308b"}),"\n",(0,r.jsxs)(t.p,{children:["Elixir\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5b8c\u5168\u3067\u5b9f\u7528\u7684\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples",children:"Elixir SDK examples"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,r.jsxs)(t.p,{children:["Momento Elixir SDK\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306f",(0,r.jsx)(t.a,{href:"https://hex.pm/packages/gomomento",children:"Hex"}),"\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",children:"API\u30ad\u30fc\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(t.p,{children:["Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002 Momento Web Console](",(0,r.jsx)(t.a,{href:"https://console.gomomento.com/caches)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.gomomento.com/caches)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"cacheclient-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"CacheClient \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,r.jsx)(t.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u4ed6\u306e\u5404\u95a2\u6570\u304c\u5fc5\u8981\u3068\u3059\u308b CacheClient \u69cb\u9020\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(o.F,{language:"elixir",code:'alias Momento.CacheClient\n\nconfig = Momento.Configurations.Laptop.latest()\ncredential_provider = Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")\ndefault_ttl_seconds = 60.0\nclient = CacheClient.create!(config, credential_provider, default_ttl_seconds)\n'}),"\n",(0,r.jsx)(t.h2,{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",children:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(o.F,{language:"elixir",code:'case Momento.CacheClient.create_cache(client, "test-cache") do\n  {:ok, _} ->\n    IO.puts("Cache \'test-cache\' created")\n\n  :already_exists ->\n    :ok\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to create cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend'}),"\n",(0,r.jsx)(t.h2,{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",children:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8\u3002"}),"\n",(0,r.jsx)(o.F,{language:"elixir",code:'case Momento.CacheClient.list_caches(client) do\n  {:ok, result} ->\n    IO.puts("Caches:")\n    IO.inspect(result.caches)\n\n  {:error, error} ->\n    IO.puts("An error occurred while attempting to list caches: #{error.error_code}")\n    raise error\nend'}),"\n",(0,r.jsx)(t.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"}),"\n",(0,r.jsx)(t.p,{children:"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u5358\u7d14\u306a\u4f8b\u3002CacheClient.set() \u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL \u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3053\u308c\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u65e2\u5b9a\u306e TTL \u5024\u304c\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(o.F,{language:"elixir",code:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend'}),"\n",(0,r.jsx)(t.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"}),"\n",(0,r.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3042\u308b\u3002"}),"\n",(0,r.jsx)(o.F,{language:"elixir",code:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend"}),"\n",(0,r.jsx)(t.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples",children:"Elixir SDK GitHub repo examples directory"}),"\u306b\u5b8c\u5168\u306a\u30b5\u30f3\u30d7\u30eb\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(t.a,{href:"/ja/cache/develop/api-reference/",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>o});var r=n(1432),i=(n(6540),n(4848));const o=e=>{let{language:t,code:n}=e;return(0,i.jsx)(r.A,{language:t,children:n})}}}]);