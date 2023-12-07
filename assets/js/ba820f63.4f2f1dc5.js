"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(7462),r=n(7294),i=n(6010),a=n(2466),l=n(6550),c=n(1980),s=n(7392),m=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=d(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[c,s]=h({queryString:n,groupId:o}),[u,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,m.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),f=(()=>{const e=c??u;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,i]),tabValues:i}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),o=s[n].value;o!==l&&(u(t),c(o))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:d},a,{className:(0,i.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(y,(0,o.Z)({},e,t)),r.createElement(v,(0,o.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(k,(0,o.Z)({key:String(t)},e))}},9452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905)),i=n(4866),a=n(5162);const l={sidebar_position:1,sidebar_class_name:"sidebar-item-redis",sidebar_label:"Redis compatibility clients",pagination_prev:null,title:"Redis compatibility clients",description:"With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache."},c="Redis compatibility clients for Momento Cache and Momento Topics",s={unversionedId:"cache/develop/integrations/redis-client-compatibility",id:"cache/develop/integrations/redis-client-compatibility",title:"Redis compatibility clients",description:"With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache.",source:"@site/docs/cache/develop/integrations/redis-client-compatibility.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/redis-client-compatibility",permalink:"/cache/develop/integrations/redis-client-compatibility",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/redis-client-compatibility.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item-redis",sidebar_label:"Redis compatibility clients",pagination_prev:null,title:"Redis compatibility clients",description:"With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache."},sidebar:"tutorialSidebar",next:{title:"Laravel",permalink:"/cache/develop/integrations/momento-cache-laravel-php"}},m={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Source Code",id:"source-code",level:2}],d={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis-compatibility-clients-for-momento-cache-and-momento-topics"},"Redis compatibility clients for Momento Cache and Momento Topics"),(0,r.kt)("p",null,"Do you have existing apps that use a Redis cache, but now you're trading up to Momento\u2019s services? With Redis compatibility clients, there's no need to refactor your code. Instead, compatibility clients are a drop-in replacement for existing Redis clients. Change your client library to the compatibility client, change the connection information, and the core of your code stays the same."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To switch your existing application to use Momento Cache, you only need to change the code where you construct your client object:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"noderedis",label:"NodeRedis",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the Momento redis compatibility client.\nimport {createClient, momento} from 'momento-redis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Initialize Momento's client.\nconst redisClient = createClient(\n    momento.CacheClient.create({\n        configuration: momento.Configurations.Laptop.v1(),\n        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n        defaultTtlSeconds: 60,\n    }),\n    'cache_name',\n);\n")),(0,r.kt)("p",null,"For more in-depth information, with example code, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client"},"Momento Node.js Redis compatibility client")," on GitHub.")),(0,r.kt)(a.Z,{value:"ioredis",label:"IORedis",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the Momento redis compatibility client.\nimport {MomentoRedisAdapter} from '@gomomento-poc/node-ioredis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Instantiate Momento Adapter Directly\nconst Redis = new MomentoRedisAdapter(\n    await CacheClient.create({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n        defaultTtlSeconds: config.defaultTTLSeconds,\n    }),\n    'cache_name',\n);\n")),(0,r.kt)("p",null,"For more in-depth information, with example code, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Momento IORedis compatibility client")," on GitHub.")),(0,r.kt)(a.Z,{value:"stackexchange",label:"StackExchange",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing Momento.Auth;\nusing Momento.Config;\nusing Momento.Sdk;\nusing Momento.StackExchange.Redis;\n\n// Create a Momento-backed Redis client\nvar db = MomentoRedisDatabase(\n  await CacheClient.create(\n    config: Configurations.Laptop.v1(),\n    authProvider: new EnvMomentoTokenProvider("MOMENTO_API_KEY"),\n    defaultTtl: TimeSpan.FromSeconds(60),\n  }),\n  "cache_name"\n);\n')),(0,r.kt)("p",null,"For more in-depth information, with example code, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis"},"Momento StackExchange compatibility client")," on GitHub.")),(0,r.kt)(a.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package redis\n\nimport (\n    "context"\n    "github.com/momentohq/client-sdk-go/auth"\n    "github.com/momentohq/client-sdk-go/config"\n    "github.com/momentohq/client-sdk-go/momento"\n    momentoredis "github.com/momentohq/momento-go-redis-client/momento-redis"\n    "github.com/redis/go-redis/v9"\n    "time"\n)\n\nfunc initRedisClient() redis.Cmdable {\n    credential, eErr := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\n    if eErr != nil {\n        panic("Failed to initialize credentials through API key " + eErr.Error())\n    }\n    cacheClient, cErr := momento.NewCacheClient(config.LaptopLatest(), credential, 60*time.Second)\n    if cErr != nil {\n        panic("Failed to initialize Momento cache client " + cErr.Error())\n    }\n    // create cache; it resumes execution normally incase the cache already exists\n    _, createErr := cacheClient.CreateCache(context.Background(),\n        &momento.CreateCacheRequest{CacheName: "default_cache"})\n    if createErr != nil {\n        panic("Failed to create cache with cache name default cache \\n" + createErr.Error())\n    }\n    redisClient := momentoredis.NewMomentoRedisClient(cacheClient, "default_cache")\n    return redisClient\n}\n')),(0,r.kt)("p",null,"For more in-depth information, with example code, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-go-redis-client"},"Go-redis compatibility client")," on GitHub.")),(0,r.kt)(a.Z,{value:"redis-py",label:"redis-py",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n# Import the Momento redis compatibility client.\nimport momento\nfrom momento_redis import MomentoRedis\n\n# Initialize Momento client.\nredis_client = MomentoRedis(\n    momento.CacheClient.create(\n        momento.Configurations.Laptop.latest(),\n        momento.CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),\n        datetime.timedelta(seconds=60)\n    ),\n    "cache_name"\n)\n')),(0,r.kt)("p",null,"For more in-depth information, with example code, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-python-redis-client"},"Momento Python Redis compatibility client")," on GitHub."))),(0,r.kt)("h2",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"For source code and examples for all of our Redis compatibility clients, please see the following GitHub repositories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},"node-redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},"ioredis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis"},"StackExchange.Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-go-redis-client"},"go-redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-python-redis-client"},"redis-py"))))}h.isMDXComponent=!0}}]);