"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),c=n(6550),s=n(1980),i=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,i]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==c&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":c===t})}),n??t)})))}function C(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(C,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const c={sidebar_position:3,sidebar_label:"\u306f\u3058\u3081\u3066\u307f\u308b",title:"\u306f\u3058\u3081\u3066\u307f\u308b",pagination_prev:null,pagination_next:null,description:"SDK \u3092\u9078\u3093\u3067\u3001Momento Cache \u3068 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"},s="Momento Cache \u3092\u306f\u3058\u3081\u3066\u307f\u308b",i={unversionedId:"cache/getting-started",id:"cache/getting-started",title:"\u306f\u3058\u3081\u3066\u307f\u308b",description:"SDK \u3092\u9078\u3093\u3067\u3001Momento Cache \u3068 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/getting-started.md",sourceDirName:"cache",slug:"/cache/getting-started",permalink:"/ja/cache/getting-started",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/getting-started.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u306f\u3058\u3081\u3066\u307f\u308b",title:"\u306f\u3058\u3081\u3066\u307f\u308b",pagination_prev:null,pagination_next:null,description:"SDK \u3092\u9078\u3093\u3067\u3001Momento Cache \u3068 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"},sidebar:"tutorialSidebar"},u={},p=[{value:"\u30b9\u30c6\u30c3\u30d7 1: API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-1-api\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 2: \u4fdd\u5b58\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-2-\u4fdd\u5b58\u3059\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 3: SDK\u3092\u53d6\u5f97\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b\u3002",id:"\u30b9\u30c6\u30c3\u30d7-3-sdk\u3092\u53d6\u5f97\u3057\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b",level:2},{value:"Momento CLI \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"momento-cli-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u5168\u3066\u306e Momento SDKs",id:"\u5168\u3066\u306e-momento-sdks",level:2},{value:"FAQ",id:"faq",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-cache-\u3092\u306f\u3058\u3081\u3066\u307f\u308b"},"Momento Cache \u3092\u306f\u3058\u3081\u3066\u307f\u308b"),(0,r.kt)("p",null,"\u3082\u3057 Momento Cache \u3092 SDK \u304b\u3089\u4f7f\u3063\u3066\u307f\u308b\u65b9\u6cd5\u3092\u304a\u63a2\u3057\u3067\u3057\u305f\u3089\u3001\u3053\u3053\u306f\u3042\u306a\u305f\u306b\u3046\u3063\u3066\u3064\u3051\u306e\u5834\u6240\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3082\u3057\u4f55\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u306b Momento Cache \u306e\u4f53\u9a13\u3092\u624b\u65e9\u304f\u3057\u3066\u307f\u305f\u3044\u5834\u5408\u306b\u306f\u3001\u3053\u3061\u3089\u304b\u3089",(0,r.kt)("a",{parentName:"p",href:"#cli-%E3%81%A8-sdk-%E3%82%92%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%A7%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B"},"\u30d6\u30e9\u30a6\u30b6\u5185\u3067"),"\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-1-api\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 1: API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/cache/develop/authentication/api-keys"},"\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u306e\u624b\u9806"),"\u306b\u5f93\u3063\u3066\u3001",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089API\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ad\u30fc\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u3053\u3053\u306b\u623b\u3063\u3066\u304d\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-2-\u4fdd\u5b58\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 2: \u4fdd\u5b58\u3059\u308b"),(0,r.kt)("p",null,"\u4f5c\u6210\u3057\u305fAPI\u30ad\u30fc\u3092\u4fdd\u5b58\u3067\u304d\u308b\u5834\u6240\u306f\u8907\u6570\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5358\u7d14\u306a\u4f8b\u3067\u306f\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3059\u308b\u304c\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306fAWS Secrets Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-3-sdk\u3092\u53d6\u5f97\u3057\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 3: SDK\u3092\u53d6\u5f97\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306bMomento SDK\u3068dotenv\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\nnpm install dotenv\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".env file \u306e\u4f5c\u6210")),(0,r.kt)("p",null,"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b.env\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001Momento API\u30ad\u30fc\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4f7f\u7528\u3059\u308bTTL\uff08\u79d2\uff09\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"export MOMENTO_API_KEY=<your key here>\nexport MOMENTO_TTL_SECONDS=300\n")),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3092test.js\u306b\u30b3\u30d4\u30fc\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Declare the Momento SDK library\nconst { CacheGet, CacheSet, Configurations, ListCaches, CreateCache,\n  CacheClient, CredentialProvider } = require('@gomomento/sdk');\n\n// Declate the dotenv library\nconst dotenv = require('dotenv');\n\n// Defines name of cache to use.\nconst CACHE_NAME = 'demo-cache';\n\n// Run the config function to bring in the .env file\ndotenv.config();\n\n// Creates the Momento cache client object\nasync function createCacheClient() {\n  return CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 600,\n  });\n}\n\n// Create a new cache\nasync function createCache(client) {\n  const createCacheResponse = await client.createCache(CACHE_NAME);\n  if (createCacheResponse instanceof CreateCache.Success) {\n    console.log('Cache created.');\n  } else if (createCacheResponse instanceof CreateCache.AlreadyExists) {\n    console.log('Cache already exists');\n  } else if (createCacheResponse instanceof CreateCache.Error) {\n    throw createCacheResponse.innerException();\n  }\n}\n\n// List all caches in Momento for this account.\nasync function listCaches(client) {\n  const listResponse = await client.listCaches(client);\n  if (listResponse instanceof ListCaches.Error) {\n    console.log('Error listing caches: ', listResponse.message());\n  } else if (listResponse instanceof ListCaches.Success) {\n    console.log('Found caches:');\n    listResponse.getCaches().forEach(cacheInfo => {\n      console.log(' -',cacheInfo.getName());\n    });\n  } else {\n    throw new Error('Unrecognized response: ', listResponse.toString());\n  }\n}\n\n// A function to write to the cache\nasync function writeToCache(client, cacheName, key, data) {\n  const setResponse = await client.set(cacheName, key, data);\n  if (setResponse instanceof CacheSet.Success) {\n    console.log('Key stored successfully!');\n  } else if (setResponse instanceof CacheSet.Error) {\n    console.log('Error setting key: ', setResponse.toString());\n  } else {\n    console.log('Some other error: ', setResponse.toString());\n  }\n}\n\n// A function to read scalar items from the cache\nasync function readFromCache(client, cacheName, key) {\n  const readResponse = await client.get(cacheName, key);\n  if (readResponse instanceof CacheGet.Hit) {\n    console.log('Cache hit: ', readResponse.valueString());\n  } else if (readResponse instanceof CacheGet.Miss) {\n    console.log('Cache miss');\n  } else if (readResponse instanceof CacheGet.Error) {\n    console.log('Error: ', readResponse.message());\n  }\n}\n\n// A simple function that calls all functions in order. You probably want more error handling.\nasync function run() {\n  const cacheClient = await createCacheClient();\n\n  await createCache(cacheClient);\n\n  await listCaches(cacheClient);\n\n  await writeToCache(cacheClient, CACHE_NAME, \"code\", \"12345\");\n  await readFromCache(cacheClient, CACHE_NAME, \"code\");\n}\n\nrun();\n")),(0,r.kt)("p",null,"Run code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"node test.js\n")),(0,r.kt)("p",null,"\u51fa\u529b\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3067\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient\n[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo-cache\nCache created.\nFound caches:\n - demo-cache\nKey stored successfully!\nCache hit:  12345\n")))),(0,r.kt)("h2",{id:"momento-cli-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Momento CLI \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"\u5fc5\u8981\u3067\u3042\u308c\u3070\u3001Momento CLI\u3092\u30ed\u30fc\u30ab\u30eb\uff08Linux\u3001Windows\u3001Mac\uff09\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\nCLI \u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3001\u4f7f\u3044\u65b9\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-cli"},"\u3053\u306e\u30ea\u30dd\u30b8\u30c8\u30ea")," \u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u5168\u3066\u306e-momento-sdks"},"\u5168\u3066\u306e Momento SDKs"),(0,r.kt)("p",null,"\u73fe\u5728\u3001\u4ee5\u4e0b\u306eSDK\u8a00\u8a9e\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/nodejs"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/web"},"JavaScript Web SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/python"},"Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/dotnet"},".NET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/go"},"Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/php"},"PHP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/java"},"Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/rust"},"Rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/ruby"},"Ruby")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/elixir"},"Elixir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/swift"},"Swift")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/dart"},"Dart"))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Momento\u306f\u79c1\u306e\u30af\u30e9\u30a6\u30c9\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ea\u30bd\u30fc\u30b9\u3092\u5c55\u958b\u3057\u307e\u3059\u304b\uff1f"),"\u3044\u3044\u3048\u3001\u305d\u3093\u306a\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002Momento Cache\u306f\u5b8c\u5168\u306b\u7ba1\u7406\u3055\u308c\u305fAPI\u30d9\u30fc\u30b9\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u5185\u304b\u3089\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}h.isMDXComponent=!0}}]);