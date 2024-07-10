"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2856],{7246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=r(4848),n=r(8453),a=(r(1441),r(5347));const l={sidebar_position:1,title:"API reference information",pagination_prev:null,sidebar_label:"API Reference",description:"Learn the API calls you need to know and how to use them with Momento Storage."},o="API reference for Momento Storage",i={id:"storage/develop/api-reference/index",title:"API reference information",description:"Learn the API calls you need to know and how to use them with Momento Storage.",source:"@site/docs/storage/develop/api-reference/index.mdx",sourceDirName:"storage/develop/api-reference",slug:"/storage/develop/api-reference/",permalink:"/ja/storage/develop/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/storage/develop/api-reference/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"API reference information",pagination_prev:null,sidebar_label:"API Reference",description:"Learn the API calls you need to know and how to use them with Momento Storage."},sidebar:"storageSidebar",next:{title:"Language Support",permalink:"/ja/storage/develop/api-reference/language-support"}},c={},d=[{value:"Control APIs",id:"control-apis",level:2},{value:"Create store",id:"create-store",level:3},{value:"Delete store",id:"delete-store",level:3},{value:"List stores",id:"list-stores",level:3},{value:"Data APIs",id:"data-apis",level:2},{value:"Put",id:"put",level:3},{value:"Get",id:"get",level:3},{value:"Delete",id:"delete",level:3},{value:"Current status of API support in SDKs",id:"current-status-of-api-support-in-sdks",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"api-reference-for-momento-storage",children:"API reference for Momento Storage"}),"\n",(0,s.jsx)(t.h2,{id:"control-apis",children:"Control APIs"}),"\n",(0,s.jsx)(t.p,{children:"These API methods are used to manage and control stores."}),"\n",(0,s.jsx)(t.h3,{id:"create-store",children:"Create store"}),"\n",(0,s.jsx)(t.p,{children:"Creates a store with the provided name"}),"\n",(0,s.jsx)(t.p,{children:"Attributes:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storeName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the store to be created."})]})})]}),"\n",(0,s.jsx)(a.r,{js:"const result = await storageClient.createStore(storeName);\nswitch (result.type) {\n  case CreateStoreResponse.AlreadyExists:\n    console.log(`Store '${storeName}' already exists`);\n    break;\n  case CreateStoreResponse.Success:\n    console.log(`Store '${storeName}' created`);\n    break;\n  case CreateStoreResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to create store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"delete-store",children:"Delete store"}),"\n",(0,s.jsx)(t.p,{children:"Deletes a store"}),"\n",(0,s.jsx)(t.p,{children:"Attributes:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storeName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the store to be deleted."})]})})]}),"\n",(0,s.jsx)(a.r,{js:"const result = await storageClient.deleteStore(storeName);\nswitch (result.type) {\n  case DeleteStoreResponse.Success:\n    console.log(`Store '${storeName}' deleted`);\n    break;\n  case DeleteStoreResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to delete store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"list-stores",children:"List stores"}),"\n",(0,s.jsx)(t.p,{children:"Lists all stores"}),"\n",(0,s.jsx)(a.r,{js:"const result = await storageClient.listStores();\nswitch (result.type) {\n  case ListStoresResponse.Success:\n    console.log(\n      `Stores:\\n${result\n        .stores()\n        .map(c => c.getName())\n        .join('\\n')}\\n\\n`\n    );\n    break;\n  case ListStoresResponse.Error:\n    throw new Error(`An error occurred while attempting to list stores: ${result.errorCode()}: ${result.toString()}`);\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h2,{id:"data-apis",children:"Data APIs"}),"\n",(0,s.jsx)(t.p,{children:"These API methods are used to directly interact with data in a store."}),"\n",(0,s.jsx)(t.h3,{id:"put",children:"Put"}),"\n",(0,s.jsx)(t.p,{children:"Puts a value into the store. If a value for this key is already present it will be replaced by the new value."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storeName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The key under which the value is to be added."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsx)(t.td,{children:"String / Bytes / Integer / Double"}),(0,s.jsx)(t.td,{children:"The value to be stored."})]})]})]}),"\n",(0,s.jsx)(a.r,{js:"// to store a string value:\nconst result = await storageClient.putString(storeName, 'test-key', 'test-value');\nswitch (result.type) {\n  case StoragePutResponse.Success:\n    console.log(\"Key 'test-key' stored successfully\");\n    break;\n  case StoragePutResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to store key 'test-key' in store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}\n\n// Momento storage also supports these other data types:\nawait storageClient.putInt(storeName, 'test-key', 42);\nawait storageClient.putDouble(storeName, 'test-key', 3.14);\nawait storageClient.putBytes(storeName, 'test-key', Buffer.from('test-value'));",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"get",children:"Get"}),"\n",(0,s.jsx)(t.p,{children:"Get the value stored for the given key."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storeName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The key whose value is to be retrieved."})]})]})]}),"\n",(0,s.jsx)(a.r,{js:"const getResponse = await storageClient.get(storeName, 'test-key');\n// simplified style; assume the value was found, and that it was a string\nconsole.log(`string hit: ${getResponse.value()!.string()!}`);\n\n// if the value was an integer:\nconst integerGetResponse = await storageClient.get(storeName, 'test-integer-key');\nconsole.log(`integer hit: ${integerGetResponse.value()!.int()!}`);\n\n// pattern-matching style; safer for production code\nswitch (getResponse.type) {\n  case StorageGetResponse.Found:\n    // if you know the value is a string:\n    console.log(`Retrieved value for key 'test-key': ${getResponse.value().string()!}`);\n    break;\n  case StorageGetResponse.NotFound:\n    console.log(`Key 'test-key' was not found in store '${storeName}'`);\n    break;\n  case StorageGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from store '${storeName}': ${getResponse.errorCode()}: ${getResponse.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(t.p,{children:"Delete the value stored for the given key."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storeName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The key whose value is to be deleted."})]})]})]}),"\n",(0,s.jsx)(a.r,{js:"const result = await storageClient.delete(storeName, 'test-key');\nswitch (result.type) {\n  case StorageDeleteResponse.Success:\n    console.log(\"Key 'test-key' deleted successfully\");\n    break;\n  case StorageDeleteResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to delete key 'test-key' from store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsx)(t.h2,{id:"current-status-of-api-support-in-sdks",children:"Current status of API support in SDKs"}),"\n",(0,s.jsxs)(t.p,{children:["For the current status of API support in various SDK languages, see the ",(0,s.jsx)(t.a,{href:"/ja/storage/develop/api-reference/language-support",children:"language support page"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var s=r(4164);const n={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var s=r(6540),n=r(4164),a=r(3104),l=r(6347),o=r(205),i=r(7485),c=r(1682),d=r(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,u]=g({queryString:r,groupId:n}),[j,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),m=(()=>{const e=c??j;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==s&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},1441:(e,t,r)=>{r(6540)},5347:(e,t,r)=>{r.d(t,{r:()=>o});var s=r(1470),n=r(9365),a=r(1432),l=(r(6540),r(4848));const o=e=>{let{js:t,python:r,java:o,kotlin:i,go:c,csharp:d,php:u,rust:h,ruby:p,elixir:g,swift:j,dart:x,cli:m}=e;return t||r||o||i||c||d||u||h||p||g||j||x||m?(0,l.jsxs)(s.A,{children:[t&&(0,l.jsx)(n.A,{value:"js",label:"JavaScript",children:(0,l.jsx)(a.A,{language:"js",children:t})}),r&&(0,l.jsx)(n.A,{value:"python",label:"Python",children:(0,l.jsx)(a.A,{language:"python",children:r})}),o&&(0,l.jsx)(n.A,{value:"java",label:"Java",children:(0,l.jsx)(a.A,{language:"java",children:o})}),i&&(0,l.jsx)(n.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(a.A,{language:"kotlin",children:i})}),c&&(0,l.jsx)(n.A,{value:"go",label:"Go",children:(0,l.jsx)(a.A,{language:"go",children:c})}),d&&(0,l.jsx)(n.A,{value:"csharp",label:"C#",children:(0,l.jsx)(a.A,{language:"csharp",children:d})}),u&&(0,l.jsx)(n.A,{value:"php",label:"PHP",children:(0,l.jsx)(a.A,{language:"php",children:u})}),h&&(0,l.jsx)(n.A,{value:"rust",label:"Rust",children:(0,l.jsx)(a.A,{language:"rust",children:h})}),p&&(0,l.jsx)(n.A,{value:"ruby",label:"Ruby",children:(0,l.jsx)(a.A,{language:"ruby",children:p})}),g&&(0,l.jsx)(n.A,{value:"elixir",label:"Elixir",children:(0,l.jsx)(a.A,{language:"elixir",children:g})}),j&&(0,l.jsx)(n.A,{value:"swift",label:"Swift",children:(0,l.jsx)(a.A,{language:"swift",children:j})}),x&&(0,l.jsx)(n.A,{value:"dart",label:"Dart",children:(0,l.jsx)(a.A,{language:"dart",children:x})}),m&&(0,l.jsx)(n.A,{value:"cli",label:"CLI",children:(0,l.jsx)(a.A,{language:"cli",children:m})})]}):null}}}]);