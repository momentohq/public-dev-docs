"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1545],{3955:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var o=s(4848),i=s(8453);const t={sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},c="Permissions and access control",r={id:"cache/develop/authentication/permissions",title:"Permissions and access control",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",source:"@site/docs/cache/develop/authentication/permissions.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/permissions",permalink:"/cache/develop/authentication/permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/permissions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},sidebar:"cacheSidebar",previous:{title:"Tokens",permalink:"/cache/develop/authentication/tokens"}},a={},l=[{value:"Scope",id:"scope",level:2},{value:"Roles",id:"roles",level:3},{value:"Cache roles",id:"cache-roles",level:4},{value:"Topic roles",id:"topic-roles",level:4},{value:"Cache",id:"cache",level:3},{value:"Cache Examples",id:"cache-examples",level:4},{value:"Topic examples",id:"topic-examples",level:4},{value:"Item-level restriction",id:"item-level-restriction",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"permissions-and-access-control",children:"Permissions and access control"}),"\n",(0,o.jsxs)(n.p,{children:["It's all fun and games until you can't access your resources. Speaking of accessing your resources, that's exactly what we're here to talk about - ",(0,o.jsx)(n.em,{children:"stopping people from accessing things they shouldn't."})]}),"\n",(0,o.jsx)(n.p,{children:"As a reminder, there are two primary forms of authentication in Momento:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"API keys"}),": long-lived, durable values for programmatic usage"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/cache/develop/authentication/tokens",children:"Tokens"}),": short-lived, limited-scope values for temporary usage by individuals (users or devices)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can create API keys directly in the ",(0,o.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"}),", but you are required to create tokens programmatically. Let's talk about the options you have when limiting the permission set for an API key or token using access control."]}),"\n",(0,o.jsx)(n.h2,{id:"scope",children:"Scope"}),"\n",(0,o.jsxs)(n.p,{children:["When creating an API key, you build a ",(0,o.jsx)(n.code,{children:"PermissionScope"})," object. When creating a token, you create a ",(0,o.jsx)(n.code,{children:"TokenScope"})," object. These objects are mostly the same but with one big difference. First, the similarities."]}),"\n",(0,o.jsx)(n.h3,{id:"roles",children:"Roles"}),"\n",(0,o.jsx)(n.p,{children:"Momento provides pre-built roles to use when creating your scope objects. \ud83d\udc47"}),"\n",(0,o.jsx)(n.h4,{id:"cache-roles",children:"Cache roles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"readwrite"})," - Provides full access to cache data"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"writeonly"})," - Provides access to only write operations (",(0,o.jsx)(n.code,{children:"set"}),", ",(0,o.jsx)(n.code,{children:"sortedSetIncrementScore"}),", ",(0,o.jsx)(n.code,{children:"listPopFront"}),", etc...)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"readonly"})," - Provides access to only read operations (",(0,o.jsx)(n.code,{children:"get"}),", ",(0,o.jsx)(n.code,{children:"dictionaryFetch"}),", ",(0,o.jsx)(n.code,{children:"setFetch"}),", etc...). These are non-destructive operations"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"topic-roles",children:"Topic roles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"publishsubscribe"})," - Provides full access to topic data"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"publishonly"})," - Provides access to only write operations (",(0,o.jsx)(n.code,{children:"publish"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"subscribeonly"})," - Provides access to only read operations (",(0,o.jsx)(n.code,{children:"subscribe"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,o.jsxs)(n.p,{children:["Believe it or not, you must provide a cache name when creating permissions for caches ",(0,o.jsx)(n.em,{children:"and"})," topics. Topics don't technically use the cache itself but utilize them as a namespace of sorts. So when building your scope, you must provide the cache name no matter what."]}),"\n",(0,o.jsx)(n.p,{children:"You can provide the name of the cache as a string or use a value imported from the SDK. The same goes for the topic name."}),"\n",(0,o.jsx)(n.h4,{id:"cache-examples",children:"Cache Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"import { AllCaches } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches\n    }\n  ]\n};\n"})}),"\n",(0,o.jsx)(n.h4,{id:"topic-examples",children:"Topic examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "topic": "test"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"import { AllCaches, AllTopics } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches,\n      topic: AllTopics\n    }\n  ]\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"item-level-restriction",children:"Item-level restriction"}),"\n",(0,o.jsxs)(n.p,{children:["Everything we've discussed so far applies to both API keys and tokens. But now we need to talk about a token-specific restriction you can use: ",(0,o.jsx)(n.strong,{children:"item-level restrictions"})," to control access."]}),"\n",(0,o.jsx)(n.p,{children:"When you give access to a cache, you can limit access down to individual keys or keys that begin with a certain prefix. Let's take an example of a permission set that limits the user to two specific keys in a cache."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "key": "mappings"\n      }\n    },\n    {\n      "role": "readwrite",\n      "cache": "demo",\n      "item": {\n        "key": "hits"\n      }\n    },\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This will explicitly grant ",(0,o.jsx)(n.em,{children:"read-only"})," access to the ",(0,o.jsx)(n.code,{children:"mappings"})," key and ",(0,o.jsx)(n.em,{children:"read and write"})," access to the ",(0,o.jsx)(n.code,{children:"hits"})," key in the ",(0,o.jsx)(n.em,{children:"demo"})," cache. If you wanted to grand the same role for multiple keys, you would construct the permission set similar to above but providing the desired role. You cannot pass multiple keys to a single permission."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to grant access to a range of keys, you also have the option to use a prefix - meaning all keys starting with a specific string will be granted access. Imagine you had your cache keys in a format that included the tenant id in a multi-tenanted system: ",(0,o.jsx)(n.code,{children:"{tenantId}-{key}"}),". To create a permission set that allows read access to all keys for a specific tenant, you can build out the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "keyPrefix": "MYTENANTID-"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Consumers of the token generated with this permission set would be allowed to read from any key that started with ",(0,o.jsx)(n.code,{children:"MYTENANTID-"}),". Attempting to read from a key starting with a different tenant id would result in an authorization error being returned."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var o=s(6540);const i={},t=o.createContext(i);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);