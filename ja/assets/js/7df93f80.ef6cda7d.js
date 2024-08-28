"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[806],{818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var i=t(4848),o=t(8453),r=t(1470),a=t(9365);const c={sidebar_position:1,sidebar_label:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",pagination_prev:null,title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",description:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"},s="Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5",l={id:"cache/integrations/redis-client-compatibility",title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",description:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/integrations/redis-client-compatibility.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/redis-client-compatibility",permalink:"/ja/cache/integrations/redis-client-compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/redis-client-compatibility.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",pagination_prev:null,title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",description:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"},sidebar:"cacheSidebar",next:{title:"Laravel",permalink:"/ja/cache/integrations/momento-cache-laravel-php"}},d={},m=[{value:"\u59cb\u3081\u3088\u3046",id:"\u59cb\u3081\u3088\u3046",level:2},{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066momento-cachemomento-topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5",children:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"})}),"\n",(0,i.jsx)(n.p,{children:"Redis\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u65e2\u5b58\u306e\u30a2\u30d7\u30ea\u3092\u3001Momento\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u308b\u3082\u306e\u306b\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3092\u691c\u8a0e\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1fRedis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308c\u3070\u3001\u30b3\u30fc\u30c9\u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u65e2\u5b58\u306eRedis\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u306b\u3088\u3063\u3066\u4e92\u63db\u6027\u306e\u3042\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b3\u30fc\u30c9\u306e\u4e2d\u6838\u90e8\u5206\u3092\u5909\u3048\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u5909\u66f4\u3057\u3001\u63a5\u7d9a\u60c5\u5831\u3092\u5909\u66f4\u3059\u308b\u3060\u3051\u3067\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u59cb\u3081\u3088\u3046",children:"\u59cb\u3081\u3088\u3046"}),"\n",(0,i.jsx)(n.p,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u3060\u3051\u3067\u3001\u65e2\u5b58\u306e\u30a2\u30d7\u30ea\u3092Momento Cache\u306b\u3088\u308b\u3082\u306e\u306b\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"noderedis",label:"NodeRedis",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Import the Momento redis compatibility client.\nimport {createClient, momento} from 'momento-redis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Initialize Momento's client.\nconst redisClient = createClient(\n    new momento.CacheClient.create({\n        configuration: momento.Configurations.Laptop.v1(),\n        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n        defaultTtlSeconds: 60,\n    }),\n    'cache_name',\n);\n"})}),(0,i.jsxs)(n.p,{children:["\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client",children:"Github\u306eMomento Node.js Redis compatibility client"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),(0,i.jsxs)(a.A,{value:"ioredis",label:"IORedis",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Import the Momento redis compatibility client.\nimport {MomentoRedisAdapter} from '@gomomento-poc/node-ioredis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Instantiate Momento Adapter Directly\nconst Redis = new MomentoRedisAdapter(\n    await CacheClient.create({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n        defaultTtlSeconds: config.defaultTTLSeconds,\n    }),\n    'cache_name',\n);\n"})}),(0,i.jsxs)(n.p,{children:["\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-node-ioredis-client",children:"Github\u306eMomento IORedis compatibility client"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),(0,i.jsxs)(a.A,{value:"stackexchange",label:"StackExchange",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using System;\nusing Momento.Auth;\nusing Momento.Config;\nusing Momento.Sdk;\nusing Momento.StackExchange.Redis;\n\n// Create a Momento-backed Redis client\nvar db = MomentoRedisDatabase(\n  new CacheClient(\n    config: Configurations.Laptop.v1(),\n    authProvider: new EnvMomentoTokenProvider("MOMENTO_API_KEY"),\n    defaultTtl: TimeSpan.FromSeconds(60),\n  }),\n  "cache_name"\n);\n'})}),(0,i.jsxs)(n.p,{children:["\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis",children:"Github\u306eMomento StackExchange compatibility client"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),(0,i.jsxs)(a.A,{value:"go",label:"Go",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package redis\n\nimport (\n\t"context"\n\t"github.com/momentohq/client-sdk-go/auth"\n\t"github.com/momentohq/client-sdk-go/config"\n\t"github.com/momentohq/client-sdk-go/momento"\n\tmomentoredis "github.com/momentohq/momento-go-redis-client/momento-redis"\n\t"github.com/redis/go-redis/v9"\n\t"time"\n)\n\nfunc initRedisClient() redis.Cmdable {\n\tcredential, eErr := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\n\tif eErr != nil {\n\t\tpanic("Failed to initialize credentials through API key " + eErr.Error())\n\t}\n\tcacheClient, cErr := momento.NewCacheClient(config.LaptopLatest(), credential, 60*time.Second)\n\tif cErr != nil {\n\t\tpanic("Failed to initialize Momento cache client " + cErr.Error())\n\t}\n\t// create cache; it resumes execution normally incase the cache already exists\n\t_, createErr := cacheClient.CreateCache(context.Background(),\n\t\t&momento.CreateCacheRequest{CacheName: "default_cache"})\n\tif createErr != nil {\n\t\tpanic("Failed to create cache with cache name default cache \\n" + createErr.Error())\n\t}\n\tredisClient := momentoredis.NewMomentoRedisClient(cacheClient, "default_cache")\n\treturn redisClient\n}\n'})}),(0,i.jsxs)(n.p,{children:["\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-go-redis-client",children:"Go-redis compatibility client"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),(0,i.jsxs)(a.A,{value:"redis-py",label:"redis-py",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import datetime\n# Import the Momento redis compatibility client.\nimport momento\nfrom momento_redis import MomentoRedis\n\n# Initialize Momento client.\nredis_client = MomentoRedis(\n    momento.CacheClient.create(\n        momento.Configurations.Laptop.latest(),\n        momento.CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),\n        datetime.timedelta(seconds=60)\n    ),\n    "cache_name"\n)\n'})}),(0,i.jsxs)(n.p,{children:["\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-python-redis-client",children:"Momento Python Redis compatibility client"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"}),"\n",(0,i.jsx)(n.p,{children:"\u3059\u3079\u3066\u306eRedis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-node-redis-client",children:"node-redis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-node-ioredis-client",children:"ioredis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis",children:"StackExchange.Redis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-go-redis-client",children:"go-redis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/momentohq/momento-python-redis-client",children:"redis-py"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(6540),o=t(4164),r=t(3104),a=t(6347),c=t(205),s=t(7485),l=t(1682),d=t(679);function m(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[a,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,m]=p({queryString:t,groupId:o}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),g=(()=>{const e=l??b;return h({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{g&&s(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),f(e)}),[m,f,r]),tabValues:r}}var f=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),o=c[t].value;o!==i&&(l(n),a(o))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:m,onClick:d,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function C(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(C,{...e,children:m(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);