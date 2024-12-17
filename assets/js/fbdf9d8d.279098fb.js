"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2734],{28447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(74848),r=t(28453),i=(t(11470),t(19365),t(42821),t(70503));const s={sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples."},o="Add and retrieve a file with Momento Cache",c={id:"cache/develop/guides/working-with-files-cache",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples.",source:"@site/docs/cache/develop/guides/working-with-files-cache.md",sourceDirName:"cache/develop/guides",slug:"/cache/develop/guides/working-with-files-cache",permalink:"/cache/develop/guides/working-with-files-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/guides/working-with-files-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples."},sidebar:"cacheSidebar",previous:{title:"Guides"},next:{title:"Working with Time Series Data",permalink:"/cache/develop/guides/working-with-time-series-data"}},l={},u=[];function d(e){const n={a:"a",h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"add-and-retrieve-a-file-with-momento-cache",children:"Add and retrieve a file with Momento Cache"})}),"\n",(0,a.jsxs)(n.p,{children:["An item in Momento Cache is a byte array, so a cache can easily store most any file you want to create, as long as it is under the ",(0,a.jsx)(n.a,{href:"/cache/limits",children:"per item limit of 1MB"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of reading a file from the filesystem, saving the file to an item in a cache, reading it from the cache, and then writing it to the filesystem."}),"\n",(0,a.jsx)(i.F,{language:"javascript",code:"import * as fs from 'node:fs';\nimport {CacheClient, CacheGetResponse, CacheSetResponse, Configurations, CredentialProvider} from '@gomomento/sdk';\n\nconst filePath = './myfile.json';\nconst fileName = 'myfile';\nconst CACHE_NAME = 'test-cache';\n\n// Read a file from the filesystem\nfunction readFile(filePath: string) {\n  try {\n    const data = fs.readFileSync(filePath);\n    return new Uint8Array(data);\n  } catch (error) {\n    console.error('Error reading file:', error);\n    return null;\n  }\n}\n\n// Creates the Momento cache client object\nfunction createCacheClient(): Promise<CacheClient> {\n  return CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 600,\n  });\n}\n\nasync function writeToCache(client: CacheClient, cacheName: string, key: string, data: Uint8Array) {\n  const setResponse = await client.set(cacheName, key, data);\n  switch (setResponse.type) {\n    case CacheSetResponse.Success:\n      console.log('Key stored successfully!');\n      break;\n    case CacheSetResponse.Error:\n      console.log(`Error setting key: ${setResponse.toString()}`);\n      break;\n  }\n}\n\nasync function readFromCache(client: CacheClient, cacheName: string, key: string) {\n  const fileResponse = await client.get(cacheName, key);\n  switch (fileResponse.type) {\n    case CacheGetResponse.Miss:\n      console.log('cache miss');\n      break;\n    case CacheGetResponse.Hit: {\n      console.log(`cache hit: ${fileResponse.valueString()}`);\n      const contents = fileResponse.valueUint8Array();\n      const buffer = Buffer.from(contents);\n      fs.writeFileSync('./myfile2.json', buffer);\n      break;\n    }\n    case CacheGetResponse.Error:\n      console.log(`Error: ${fileResponse.message()}`);\n      break;\n  }\n}\n\nasync function run() {\n  const byteArray = readFile(filePath);\n  if (byteArray === null) {\n    return;\n  }\n\n  const cacheClient = await createCacheClient();\n\n  await writeToCache(cacheClient, CACHE_NAME, fileName, byteArray);\n  await readFromCache(cacheClient, CACHE_NAME, fileName);\n}\n\nrun().catch(e => {\n  console.error('Uncaught exception!', e);\n  throw e;\n});\n"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),r=t(34164),i=t(23104),s=t(56347),o=t(205),c=t(57485),l=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,d]=m({queryString:t,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=l??p;return f({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==a&&(l(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function C(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,v.jsx)(C,{...e,children:d(e.children)},String(n))}},42821:(e,n,t)=>{t(96540)},70503:(e,n,t)=>{t.d(n,{F:()=>i});var a=t(21432),r=(t(96540),t(74848));const i=e=>{let{language:n,code:t}=e;return(0,r.jsx)(a.A,{language:n,children:t})}}}]);