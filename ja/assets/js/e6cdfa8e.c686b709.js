"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||a;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(7462),r=n(7294),a=n(6010),i=n(2466),l=n(6550),c=n(1980),s=n(7392),m=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,s]=h({queryString:n,groupId:o}),[u,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,m.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),f=(()=>{const e=c??u;return p({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,a]),tabValues:a}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),o=s[n].value;o!==l&&(u(t),c(o))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:d},i,{className:(0,a.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},r.createElement(v,(0,o.Z)({},e,t)),r.createElement(y,(0,o.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(k,(0,o.Z)({key:String(t)},e))}},424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905)),a=n(4866),i=n(5162);const l={sidebar_position:1,sidebar_class_name:"sidebar-item-redis",sidebar_label:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",pagination_prev:null,title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",description:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"},c="Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5",s={unversionedId:"cache/develop/integrations/redis-client-compatibility",id:"cache/develop/integrations/redis-client-compatibility",title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",description:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/redis-client-compatibility.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/redis-client-compatibility",permalink:"/ja/cache/develop/integrations/redis-client-compatibility",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/redis-client-compatibility.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item-redis",sidebar_label:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",pagination_prev:null,title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",description:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"},sidebar:"tutorialSidebar",next:{title:"Laravel",permalink:"/ja/cache/develop/integrations/momento-cache-laravel-php"}},m={},u=[{value:"\u59cb\u3081\u3088\u3046",id:"\u59cb\u3081\u3088\u3046",level:2},{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:2}],d={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066momento-cachemomento-topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"},"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066Momento Cache\u3001Momento Topics\u306b\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"),(0,r.kt)("p",null,"Redis\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u65e2\u5b58\u306e\u30a2\u30d7\u30ea\u3092\u3001Momento\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u308b\u3082\u306e\u306b\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3092\u691c\u8a0e\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1fRedis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308c\u3070\u3001\u30b3\u30fc\u30c9\u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u65e2\u5b58\u306eRedis\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u306b\u3088\u3063\u3066\u4e92\u63db\u6027\u306e\u3042\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b3\u30fc\u30c9\u306e\u4e2d\u6838\u90e8\u5206\u3092\u5909\u3048\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u5909\u66f4\u3057\u3001\u63a5\u7d9a\u60c5\u5831\u3092\u5909\u66f4\u3059\u308b\u3060\u3051\u3067\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u59cb\u3081\u3088\u3046"},"\u59cb\u3081\u3088\u3046"),(0,r.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u3060\u3051\u3067\u3001\u65e2\u5b58\u306e\u30a2\u30d7\u30ea\u3092Momento Cache\u306b\u3088\u308b\u3082\u306e\u306b\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"noderedis",label:"NodeRedis",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the Momento redis compatibility client.\nimport {createClient, momento} from 'momento-redis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Initialize Momento's client.\nconst redisClient = createClient(\n    new momento.CacheClient.create({\n        configuration: momento.Configurations.Laptop.v1(),\n        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n        }),\n        defaultTtlSeconds: 60,\n    }),\n    'cache_name',\n);\n")),(0,r.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client"},"Github\u306eMomento Node.js Redis compatibility client")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)(i.Z,{value:"ioredis",label:"IORedis",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the Momento redis compatibility client.\nimport {MomentoRedisAdapter} from '@gomomento-poc/node-ioredis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Instantiate Momento Adapter Directly\nconst Redis = new MomentoRedisAdapter(\n    await CacheClient.create({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: authTokenEnvVarName,\n        }),\n        defaultTtlSeconds: config.defaultTTLSeconds,\n    }),\n    'cache_name',\n);\n")),(0,r.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Github\u306eMomento IORedis compatibility client")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)(i.Z,{value:"stackexchange",label:"StackExchange",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing Momento.Auth;\nusing Momento.Config;\nusing Momento.Sdk;\nusing Momento.StackExchange.Redis;\n\n// Create a Momento-backed Redis client\nvar db = MomentoRedisDatabase(\n  new CacheClient(\n    config: Configurations.Laptop.v1(),\n    authProvider: new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN"),\n    defaultTtl: TimeSpan.FromSeconds(60),\n  }),\n  "cache_name"\n);\n')),(0,r.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis"},"Github\u306eMomento StackExchange compatibility client")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)(i.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package redis\n\nimport (\n    "context"\n    "github.com/momentohq/client-sdk-go/auth"\n    "github.com/momentohq/client-sdk-go/config"\n    "github.com/momentohq/client-sdk-go/momento"\n    momentoredis "github.com/momentohq/momento-go-redis-client/momento-redis"\n    "github.com/redis/go-redis/v9"\n    "time"\n)\n\nfunc initRedisClient() redis.Cmdable {\n    credential, eErr := auth.NewEnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")\n    if eErr != nil {\n        panic("Failed to initialize credentials through auth token " + eErr.Error())\n    }\n    cacheClient, cErr := momento.NewCacheClient(config.LaptopLatest(), credential, 60*time.Second)\n    if cErr != nil {\n        panic("Failed to initialize Momento cache client " + cErr.Error())\n    }\n    // create cache; it resumes execution normally incase the cache already exists\n    _, createErr := cacheClient.CreateCache(context.Background(),\n        &momento.CreateCacheRequest{CacheName: "default_cache"})\n    if createErr != nil {\n        panic("Failed to create cache with cache name default cache \\n" + createErr.Error())\n    }\n    redisClient := momentoredis.NewMomentoRedisClient(cacheClient, "default_cache")\n    return redisClient\n}\n')),(0,r.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-go-redis-client"},"Go-redis compatibility client")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)(i.Z,{value:"redis-py",label:"redis-py",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n# Import the Momento redis compatibility client.\nimport momento\nfrom momento_redis import MomentoRedis\n\n# Initialize Momento client.\nredis_client = MomentoRedis(\n    momento.CacheClient.create(\n        momento.Configurations.Laptop.latest(),\n        momento.CredentialProvider.from_environment_variable("MOMENTO_AUTH_TOKEN"),\n        datetime.timedelta(seconds=60)\n    ),\n    "cache_name"\n)\n')),(0,r.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u542b\u3080\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-python-redis-client"},"Momento Python Redis compatibility client")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("h2",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306eRedis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},"node-redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},"ioredis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis"},"StackExchange.Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-go-redis-client"},"go-redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-python-redis-client"},"redis-py"))))}h.isMDXComponent=!0}}]);