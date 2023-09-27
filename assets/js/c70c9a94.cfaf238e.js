"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},r="Permissions and access control",s={unversionedId:"topics/develop/authentication/permissions",id:"topics/develop/authentication/permissions",title:"Permissions and access control",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",source:"@site/docs/topics/develop/authentication/permissions.md",sourceDirName:"topics/develop/authentication",slug:"/topics/develop/authentication/permissions",permalink:"/topics/develop/authentication/permissions",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/authentication/permissions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},sidebar:"topicsSidebar",previous:{title:"Tokens",permalink:"/topics/develop/authentication/tokens"}},l={},c=[{value:"Scope",id:"scope",level:2},{value:"Roles",id:"roles",level:3},{value:"Cache roles",id:"cache-roles",level:4},{value:"Topic roles",id:"topic-roles",level:4},{value:"Cache",id:"cache",level:3},{value:"Cache Examples",id:"cache-examples",level:4},{value:"Topic examples",id:"topic-examples",level:4},{value:"Item-level restriction",id:"item-level-restriction",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions-and-access-control"},"Permissions and access control"),(0,a.kt)("img",{src:"/img/permissions-page.jpg",width:"95%",alt:"a technical illustration of Momento permissions and access control."}),(0,a.kt)("p",null,"It's all fun and games until you can't access your resources. Speaking of accessing your resources, that's exactly what we're here to talk about - ",(0,a.kt)("em",{parentName:"p"},"stopping people from accessing things they shouldn't.")),(0,a.kt)("p",null,"As a reminder, there are two primary forms of authentication in Momento:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/develop/authentication/api-keys"},"API keys"),": long-lived, durable values for programmatic usage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/develop/authentication/tokens"},"Tokens"),": short-lived, limited-scope values for temporary usage by individuals (users or devices)")),(0,a.kt)("p",null,"You can create API keys directly in the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console"),", but you are required to create tokens programmatically. Let's talk about the options you have when limiting the permission set for an API key or token using access control."),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"When creating an API key, you build a ",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionScope")," object. When creating a token, you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenScope")," object. These objects are mostly the same but with one big difference. First, the similarities."),(0,a.kt)("h3",{id:"roles"},"Roles"),(0,a.kt)("p",null,"Momento provides pre-built roles to use when creating your scope objects. \ud83d\udc47"),(0,a.kt)("h4",{id:"cache-roles"},"Cache roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"readwrite")," - Provides full access to cache data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"writeonly")," - Provides access to only write operations (",(0,a.kt)("inlineCode",{parentName:"li"},"set"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"sortedSetIncrementScore"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"listPopFront"),", etc...)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"readonly")," - Provides access to only read operations (",(0,a.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dictionaryFetch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"setFetch"),", etc...). These are non-destructive operations")),(0,a.kt)("h4",{id:"topic-roles"},"Topic roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"publishsubscribe")," - Provides full access to topic data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"publishonly")," - Provides access to only write operations (",(0,a.kt)("inlineCode",{parentName:"li"},"publish"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"subscribeonly")," - Provides access to only read operations (",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe"),")")),(0,a.kt)("h3",{id:"cache"},"Cache"),(0,a.kt)("p",null,"Believe it or not, you must provide a cache name when creating permissions for caches ",(0,a.kt)("em",{parentName:"p"},"and")," topics. Topics don't technically use the cache itself but utilize them as a namespace of sorts. So when building your scope, you must provide the cache name no matter what."),(0,a.kt)("p",null,"You can provide the name of the cache as a string or use a value imported from the SDK. The same goes for the topic name."),(0,a.kt)("h4",{id:"cache-examples"},"Cache Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { AllCaches } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches\n    }\n  ]\n};\n")),(0,a.kt)("h4",{id:"topic-examples"},"Topic examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "topic": "test"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { AllCaches, AllTopics } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches,\n      topic: AllTopics\n    }\n  ]\n};\n")),(0,a.kt)("h3",{id:"item-level-restriction"},"Item-level restriction"),(0,a.kt)("p",null,"Everything we've discussed so far applies to both API keys and tokens. But now we need to talk about a token-specific restriction you can use: ",(0,a.kt)("strong",{parentName:"p"},"item-level restrictions")," to control access."),(0,a.kt)("p",null,"When you give access to a cache, you can limit access down to individual keys or keys that begin with a certain prefix. Let's take an example of a permission set that limits the user to two specific keys in a cache."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "key": "mappings"\n      }\n    },\n    {\n      "role": "readwrite",\n      "cache": "demo",\n      "item": {\n        "key": "hits"\n      }\n    },\n  ]\n}\n')),(0,a.kt)("p",null,"This will explicitly grant ",(0,a.kt)("em",{parentName:"p"},"read-only")," access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mappings")," key and ",(0,a.kt)("em",{parentName:"p"},"read and write")," access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hits")," key in the ",(0,a.kt)("em",{parentName:"p"},"demo")," cache. If you wanted to grand the same role for multiple keys, you would construct the permission set similar to above but providing the desired role. You cannot pass multiple keys to a single permission."),(0,a.kt)("p",null,"If you want to grant access to a range of keys, you also have the option to use a prefix - meaning all keys starting with a specific string will be granted access. Imagine you had your cache keys in a format that included the tenant id in a multi-tenanted system: ",(0,a.kt)("inlineCode",{parentName:"p"},"{tenantId}-{key}"),". To create a permission set that allows read access to all keys for a specific tenant, you can build out the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "keyPrefix": "MYTENANTID-"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Consumers of the token generated with this permission set would be allowed to read from any key that started with ",(0,a.kt)("inlineCode",{parentName:"p"},"MYTENANTID-"),". Attempting to read from a key starting with a different tenant id would result in an authorization error being returned."))}u.isMDXComponent=!0}}]);