"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},8527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:3,sidebar_label:"Getting Started",title:"Getting Started",pagination_prev:null,pagination_next:null,description:"Jump in and get started quickly using Momento Cache with your SDK of choice."},s="Getting started with Momento Cache",c={unversionedId:"cache/getting-started",id:"cache/getting-started",title:"Getting Started",description:"Jump in and get started quickly using Momento Cache with your SDK of choice.",source:"@site/docs/cache/getting-started.mdx",sourceDirName:"cache",slug:"/cache/getting-started",permalink:"/ja/cache/getting-started",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/getting-started.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Getting Started",title:"Getting Started",pagination_prev:null,pagination_next:null,description:"Jump in and get started quickly using Momento Cache with your SDK of choice."},sidebar:"tutorialSidebar"},u={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Using the Momento console",id:"using-the-momento-console",level:2},{value:"Using the Momento CLI",id:"using-the-momento-cli",level:2},{value:"Using the Momento SDKs",id:"using-the-momento-sdks",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-momento-cache"},"Getting started with Momento Cache"),(0,r.kt)("p",null,"If you're looking to jump in and get started with Momento Cache, you've come to the right place."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"Follow our ",(0,r.kt)("a",{parentName:"p",href:"./develop/authentication/api-keys"},"step-by-step instructions")," to create an API key via the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". Come back here when you have your key."),(0,r.kt)("h2",{id:"using-the-momento-console"},"Using the ",(0,r.kt)("a",{parentName:"h2",href:"https://console.gomomento.com"},"Momento console")),(0,r.kt)("div",null,(0,r.kt)("video",{width:"100%",height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,r.kt)("source",{src:"/console-demo.mp4",type:"video/mp4"}))),(0,r.kt)("h2",{id:"using-the-momento-cli"},"Using the Momento CLI"),(0,r.kt)("p",null,"You can also install the Momento CLI locally (Linux, Windows, Mac) if desired. The latest version of the CLI and instructions for installation and usage is available in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-cli"},"this repo"),"."),(0,r.kt)("div",null,(0,r.kt)("video",{width:"100%",height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,r.kt)("source",{src:"/Momento_getting_started.mp4",type:"video/mp4"}))),(0,r.kt)("h2",{id:"using-the-momento-sdks"},"Using the ",(0,r.kt)("a",{parentName:"h2",href:"../sdks"},"Momento SDKs")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"SDK Installation and Example"),"There are multiple places you can store the API key you created. For this simple example, we'll store it in an environment variable, but the best practice is to store it in a secure location like AWS Secrets Manager.",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Install the Momento SDK in your project directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,r.kt)("p",null,"Copy this code to a file ",(0,r.kt)("inlineCode",{parentName:"p"},"test.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { CacheGet, CacheSet, Configurations, CacheClient, CredentialProvider } = require('@gomomento/sdk');\n\nconst CACHE_NAME = 'demo';\n\n// A simple function that calls all functions in order. You probably want more error handling.\nasync function run() {\n  const cacheClient = await CacheClient.create({\n       configuration: Configurations.Laptop.v1(),\n       credentialProvider: CredentialProvider.fromEnvironmentVariable({\n           environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n       defaultTtlSeconds: 600,\n   });\n  await client.createCache(CACHE_NAME);\n  // set cache key\n  const key = \"key\";\n  const data = 12345;\n  const setResponse = await client.set(cacheName, key, data);\n  if (setResponse instanceof CacheSet.Success) {\n      console.log('Key stored successfully!');\n  }\n  const readResponse = await client.get(cacheName, key);\n  if (readResponse instanceof CacheGet.Hit) {\n      console.log('Cache hit: ', readResponse.valueString());\n  } else if (readResponse instanceof CacheGet.Miss) {\n      console.log('Cache miss');\n  }\n}\n\nrun();\n")),(0,r.kt)("p",null,"Run code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"MOMENTO_API_KEY='your_key_here' node test.js\n")),(0,r.kt)("p",null,"The output should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient\n[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo\nCache created.\nKey stored successfully!\nCache hit:  12345\n"))))))}m.isMDXComponent=!0}}]);