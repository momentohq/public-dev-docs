"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2175],{7630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(4848),a=t(8453),l=(t(1441),t(5347));const o={sidebar_position:4,sidebar_label:"Read Concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs"},i="Read Concern \u3068\u306f\u4f55\u3067\u3059\u304b?",s={id:"cache/learn/how-it-works/read-concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/learn/how-it-works/read-concern.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/read-concern",permalink:"/ja/cache/learn/how-it-works/read-concern",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/read-concern.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Read Concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs"},sidebar:"cacheSidebar",previous:{title:"Cache eviction vs expiration",permalink:"/ja/cache/learn/how-it-works/cache-eviction-vs-expiration"},next:{title:"Security"}},c={},u=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"read-concern-\u3068\u306f\u4f55\u3067\u3059\u304b",children:"Read Concern \u3068\u306f\u4f55\u3067\u3059\u304b?"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u6700\u7d42\u4e00\u8cab\u6027\u30e2\u30c7\u30eb\u306b\u5f93\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u5024\u3092\u66f8\u304d\u8fbc\u3093\u3060\u5f8c\u3001\u308f\u305a\u304b\u306a\u79d2\u6570\u3067\u305d\u308c\u3092\u8aad\u307f\u8fd4\u3057\u305f\u5834\u5408\u3001 \u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u76f4\u8fd1\u306b\u66f4\u65b0\u3055\u308c\u305f\u5024\u304c\u53cd\u6620\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u306f ",(0,r.jsx)(n.code,{children:"ReadConcern"})," \u3068\u3044\u3046\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3053\u306e\u52d5\u4f5c\u3092\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,r.jsx)(n.code,{children:"ReadConcern"})," \u8a2d\u5b9a\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u304c\u5fc5\u8981\u3068\u3059\u308b\u4e00\u8cab\u6027\u3068\u5fdc\u7b54\u6027\u306e\u30ec\u30d9\u30eb\u3092\u8abf\u6574\u3059\u308b\u305f\u3081\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u9069\u5b9c\u5909\u66f4\u3057\u3066\u6d3b\u7528\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Read Concern"}),(0,r.jsx)(n.th,{children:"\u52d5\u4f5c\u56de\u6570\u306e\u4fc2\u6570"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Balanced"}),(0,r.jsx)(n.td,{children:"1x"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Consistent"}),(0,r.jsx)(n.td,{children:"6x"}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u3053\u306e\u8a2d\u5b9a\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ec\u30d9\u30eb\u3067\u6307\u5b9a\u3055\u308c\u308b\u306e\u3067\u3001\u305d\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u3059\u3079\u3066\u306eapi\u30b3\u30fc\u30eb\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u8aad\u307f\u8fbc\u307f\u306e\u4e00\u8cab\u6027\u304c\u5fc5\u8981\u306a api \u547c\u3073\u51fa\u3057\u304c\u6570\u4ef6\u3057\u304b\u306a\u3044\u5834\u5408\u306f\u30012 \u3064\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306e\u304c\u6700\u5584\u3067\u3059\u30021 \u3064\u306f ",(0,r.jsx)(n.code,{children:"Consistent"})," ",(0,r.jsx)(n.code,{children:"ReadConcern"})," \u7528\u3001\u3082\u3046 1 \u3064\u306f ",(0,r.jsx)(n.code,{children:"Balanced"})," ",(0,r.jsx)(n.code,{children:"ReadConcern"})," \u7528\u3067\u3059\u3002\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u4e00\u8cab\u6027\u306e\u3042\u308b\u8aad\u307f\u53d6\u308a\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306e\u307f 6 \u500d\u306e\u64cd\u4f5c\u56de\u6570\u4e57\u6570\u304c\u767a\u751f\u3057\u307e\u3059\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f ",(0,r.jsx)(n.code,{children:"Consistent"})," ",(0,r.jsx)(n.code,{children:"ReadConcern"})," \u3092\u6301\u3064\u65b0\u3057\u3044\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,r.jsx)(l.r,{js:"return await CacheClient.create({\n  configuration: Configurations.Laptop.v1().withReadConcern(ReadConcern.CONSISTENT),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});",python:"",java:"",kotlin:"",go:'context := context.Background()\ncredentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := time.Duration(9999)\neagerConnectTimeout := 30 * time.Second\n\nclient, err := momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest().WithReadConcern(config.CONSISTENT),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)',csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(6540),a=t(4164),l=t(3104),o=t(6347),i=t(205),s=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=b({queryString:t,groupId:a}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),j=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&s(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function m(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,v.jsx)(m,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function C(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},1441:(e,n,t)=>{t(6540)},5347:(e,n,t)=>{t.d(n,{r:()=>i});var r=t(1470),a=t(9365),l=t(1432),o=(t(6540),t(4848));const i=e=>{let{js:n,python:t,java:i,kotlin:s,go:c,csharp:u,php:d,rust:h,ruby:p,elixir:b,swift:x,dart:f,cli:j}=e;return n||t||i||s||c||u||d||h||p||b||x||f||j?(0,o.jsxs)(r.A,{children:[n&&(0,o.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(l.A,{language:"js",children:n})}),t&&(0,o.jsx)(a.A,{value:"python",label:"Python",children:(0,o.jsx)(l.A,{language:"python",children:t})}),i&&(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(l.A,{language:"java",children:i})}),s&&(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(l.A,{language:"kotlin",children:s})}),c&&(0,o.jsx)(a.A,{value:"go",label:"Go",children:(0,o.jsx)(l.A,{language:"go",children:c})}),u&&(0,o.jsx)(a.A,{value:"csharp",label:"C#",children:(0,o.jsx)(l.A,{language:"csharp",children:u})}),d&&(0,o.jsx)(a.A,{value:"php",label:"PHP",children:(0,o.jsx)(l.A,{language:"php",children:d})}),h&&(0,o.jsx)(a.A,{value:"rust",label:"Rust",children:(0,o.jsx)(l.A,{language:"rust",children:h})}),p&&(0,o.jsx)(a.A,{value:"ruby",label:"Ruby",children:(0,o.jsx)(l.A,{language:"ruby",children:p})}),b&&(0,o.jsx)(a.A,{value:"elixir",label:"Elixir",children:(0,o.jsx)(l.A,{language:"elixir",children:b})}),x&&(0,o.jsx)(a.A,{value:"swift",label:"Swift",children:(0,o.jsx)(l.A,{language:"swift",children:x})}),f&&(0,o.jsx)(a.A,{value:"dart",label:"Dart",children:(0,o.jsx)(l.A,{language:"dart",children:f})}),j&&(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(l.A,{language:"cli",children:j})})]}):null}}}]);