"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5639],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),c=a(6550),o=a(1980),u=a(7392),s=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=k({queryString:a,groupId:n}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var h=a(2389);const N="tabList__CuJ",g="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:c,selectValue:o,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),n=u[a].value;n!==c&&(d(t),o(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":c===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function S(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>c});var n=a(4866),r=a(5162),l=a(614),i=a(7294);const c=e=>{let{js:t,python:a,java:c,kotlin:o,go:u,csharp:s,php:d,rust:p,ruby:m,elixir:k,swift:y,dart:h,cli:N}=e;return t||a||c||o||u||s||d||p||m||k||y||h||N?i.createElement(n.Z,null,t&&i.createElement(r.Z,{value:"js",label:"JavaScript"},i.createElement(l.Z,{language:"js"},t)),a&&i.createElement(r.Z,{value:"python",label:"Python"},i.createElement(l.Z,{language:"python"},a)),c&&i.createElement(r.Z,{value:"java",label:"Java"},i.createElement(l.Z,{language:"java"},c)),o&&i.createElement(r.Z,{value:"kotlin",label:"Kotlin"},i.createElement(l.Z,{language:"kotlin"},o)),u&&i.createElement(r.Z,{value:"go",label:"Go"},i.createElement(l.Z,{language:"go"},u)),s&&i.createElement(r.Z,{value:"csharp",label:"C#"},i.createElement(l.Z,{language:"csharp"},s)),d&&i.createElement(r.Z,{value:"php",label:"PHP"},i.createElement(l.Z,{language:"php"},d)),p&&i.createElement(r.Z,{value:"rust",label:"Rust"},i.createElement(l.Z,{language:"rust"},p)),m&&i.createElement(r.Z,{value:"ruby",label:"Ruby"},i.createElement(l.Z,{language:"ruby"},m)),k&&i.createElement(r.Z,{value:"elixir",label:"Elixir"},i.createElement(l.Z,{language:"elixir"},k)),y&&i.createElement(r.Z,{value:"swift",label:"Swift"},i.createElement(l.Z,{language:"swift"},y)),h&&i.createElement(r.Z,{value:"dart",label:"Dart"},i.createElement(l.Z,{language:"dart"},h)),N&&i.createElement(r.Z,{value:"cli",label:"CLI"},i.createElement(l.Z,{language:"cli"},N))):null}},9375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),l=(a(3404),a(9720));const i={sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache."},c="Momento Cache \u7528 Dictionary API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",o={unversionedId:"cache/develop/api-reference/dictionary-collections",id:"cache/develop/api-reference/dictionary-collections",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/api-reference/dictionary-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/dictionary-collections",permalink:"/ja/cache/develop/api-reference/dictionary-collections",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/dictionary-collections.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache."},sidebar:"tutorialSidebar",previous:{title:"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",permalink:"/ja/cache/develop/api-reference/"},next:{title:"Lists",permalink:"/ja/cache/develop/api-reference/list-collections"}},u={},s=[{value:"Dictionary \u30e1\u30bd\u30c3\u30c9",id:"dictionary-\u30e1\u30bd\u30c3\u30c9",level:2},{value:"DictionaryFetch",id:"dictionaryfetch",level:3},{value:"DictionaryGetField",id:"dictionarygetfield",level:3},{value:"DictionaryGetFields",id:"dictionarygetfields",level:3},{value:"DictionaryIncrement",id:"dictionaryincrement",level:3},{value:"DictionaryRemoveField",id:"dictionaryremovefield",level:3},{value:"DictionaryRemoveFields",id:"dictionaryremovefields",level:3},{value:"DictionarySetField",id:"dictionarysetfield",level:3},{value:"DictionarySetFields",id:"dictionarysetfields",level:3},{value:"DictionaryLength",id:"dictionarylength",level:3}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-cache-\u7528-dictionary-api-\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},"Momento Cache \u7528 Dictionary API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),(0,r.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/basics/datatypes#dictionary-collections"},"\u8f9e\u66f8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b")," \u306e Momento API \u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Momento\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL"),'\u3092\u4f7f\u7528\u3057\u3066TTL\u52d5\u4f5c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e "write" \u64cd\u4f5c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u5f15\u6570\u3067\u3059\u3002')),(0,r.kt)("h2",{id:"dictionary-\u30e1\u30bd\u30c3\u30c9"},"Dictionary \u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("h3",{id:"dictionaryfetch"},"DictionaryFetch"),(0,r.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089Dictionary\u9805\u76ee\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u540d\u524d")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("p",null,"DictionaryFetch\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryBytesBytes()"),": Map<Bytes, Bytes>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryStringString()"),": Map<String, String>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryStringBytes()"),": Map<String, Bytes>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryBytesString()"),": Map<Bytes, String>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()"),": String - displays the field/value pairs, truncated."))),(0,r.kt)("li",{parentName:"ul"},"Cache miss"),(0,r.kt)("li",{parentName:"ul"},"Cache error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)(l.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', 'test-value');\nconst result = await cacheClient.dictionaryFetch('test-cache', 'test-dictionary');\nif (result instanceof CacheDictionaryFetch.Hit) {\n  console.log('Dictionary fetched successfully- ');\n  result.valueMapStringString().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheDictionaryFetch.Miss) {\n  console.log(\"Dictionary 'test-dictionary' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheDictionaryFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryFetch on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarygetfield"},"DictionaryGetField"),(0,r.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306eDictionary\u9805\u76ee\u304b\u3089 1 \u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache hit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fieldString()"),": String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fieldBytes()"),": Bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"valueString()"),": String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"valueBytes()"),": Bytes"),(0,r.kt)("p",{parentName:"li"},"  \u3053\u308c\u3089\u306f\u3001\u8f9e\u66f8\u304b\u3089\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u305d\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache miss"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldString()"),": String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldBytes()"),": Bytes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache error"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldString()"),": String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldBytes()"),": Bytes")))),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', 'test-value');\nconst result = await cacheClient.dictionaryGetField('test-cache', 'test-dictionary', 'test-field');\nif (result instanceof CacheDictionaryGetField.Hit) {\n  console.log(\n    `Field ${result.fieldString()} fetched successfully from cache 'test-cache' with value: ${result.valueString()}`\n  );\n} else if (result instanceof CacheDictionaryGetField.Miss) {\n  console.log(\"Dictionary 'test-dictionary' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheDictionaryGetField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryGetField on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarygetfields"},"DictionaryGetFields"),(0,r.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u8f9e\u66f8\u304b\u3089 1 \u3064\u4ee5\u4e0a\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3000\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3000\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valueDictionaryBytesBytes(): Map<Bytes, Bytes>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryStringString(): Map<String, String>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryStringBytes(): Map<String, Bytes>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryBytesString(): Map<Bytes, String>"),(0,r.kt)("li",{parentName:"ul"},"toString(): String - displays truncated valueDictionaryStringString()"))),(0,r.kt)("li",{parentName:"ul"},"Cache miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"await cacheClient.dictionarySetFields(\n  'test-cache',\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nconst result = await cacheClient.dictionaryGetFields('test-cache', 'test-dictionary', ['key1', 'key2']);\nif (result instanceof CacheDictionaryGetFields.Hit) {\n  console.log('Values fetched successfully- ');\n  result.valueMapStringString().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheDictionaryGetFields.Miss) {\n  console.log(\"Dictionary 'test-dictionary' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheDictionaryGetFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryGetFields on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionaryincrement"},"DictionaryIncrement"),(0,r.kt)("p",null,"\u65e2\u5b58\u306e\u5024\u304c\u57fa\u6570 10 \u306e\u6574\u6570\u3092\u8868\u3059 UTF-8 \u6587\u5b57\u5217\u3067\u3042\u308b\u5834\u5408\u306b\u306e\u307f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8f9e\u66f8\u306b\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u91cf\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7d50\u679c\u3068\u3057\u3066\u5f97\u3089\u308c\u308b\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u5024\u306f\u3001-9223372036854775808 \u304b\u3089 9223372036854775807 \u306e\u9593\u3001\u3064\u307e\u308a\u7b26\u53f7\u4ed8\u304d 64 \u30d3\u30c3\u30c8\u6574\u6570\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u308a\u307e\u305b\u3093\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u30a8\u30e9\u30fc\u5fdc\u7b54\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaryIncrement(cache, dict, field, 10)")," \u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u3092 10 \u306b\u8a2d\u5b9a\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u304c 5 \u306e\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaryIncrement(cache, dict, field, 10)")," \u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u3092 15 \u306b\u8a2d\u5b9a\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"field = 'five' \u306e\u3068\u304d\u3001FailedPreconditionException \u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u308b\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5024\u306b\u52a0\u3048\u308b\u91cf\u3002\u6b63\u306e\u5024\u3001\u8ca0\u306e\u5024\u3001\u307e\u305f\u306f\u30bc\u30ed\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3053\u308c\u306fTTL\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30c8\u3068\u3057\u3066\u623b\u3063\u3066\u304d\u307e\u3059")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value()"),": integer - the new value after incrementing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()"),": String - displays the value()"))),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', '10');\nconst result = await cacheClient.dictionaryIncrement('test-cache', 'test-dictionary', 'test-field', 1);\nif (result instanceof CacheDictionaryIncrement.Success) {\n  console.log(`Field value incremented by 1. Result - ${result.valueNumber()}`);\n} else if (result instanceof CacheDictionaryIncrement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryIncrement on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionaryremovefield"},"DictionaryRemoveField"),(0,r.kt)("p",null,"Dictionary\u9805\u76ee\u304b\u3089\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u524a\u9664\u3059\u308b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', '10');\nconst result = await cacheClient.dictionaryRemoveField('test-cache', 'test-dictionary', 'test-field');\nif (result instanceof CacheDictionaryRemoveField.Success) {\n  console.log(\"Field removed successfully from dictionary 'test-dictionary'\");\n} else if (result instanceof CacheDictionaryRemoveField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryRemoveField on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionaryremovefields"},"DictionaryRemoveFields"),(0,r.kt)("p",null,"Dictionary\u9805\u76ee\u304b\u3089\u8907\u6570\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308bDictionary\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"await cacheClient.dictionarySetFields(\n  'test-cache',\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nconst result = await cacheClient.dictionaryRemoveFields('test-cache', 'test-dictionary', ['key1', 'key2']);\nif (result instanceof CacheDictionaryRemoveFields.Success) {\n  console.log(\"Fields removed successfully from dictionary 'test-dictionary'\");\n} else if (result instanceof CacheDictionaryRemoveFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryRemoveFields on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarysetfield"},"DictionarySetField"),(0,r.kt)("p",null,"\u65e2\u5b58\u306eDictionary\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9:\u5024\u306e\u30da\u30a2\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u8f9e\u66f8\u9805\u76ee\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u65b0\u3057\u3044\u30d5\u30a3\u30fc\u30eb\u30c9:\u5024\u306e\u30da\u30a2\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u3059\u308bDictionary\u9805\u76ee\u540d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u3059\u308b\u8f9e\u66f8\u9805\u76ee\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306eDictionary\u9805\u76ee\u306e TTL\u3002\u3053\u306eTTL\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u521d\u671f\u5316\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3055\u308c\u308bTTL\u3088\u308a\u3082\u512a\u5148\u3055\u308c\u307e\u3059\u3002")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"const result = await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', 'test-value');\nif (result instanceof CacheDictionarySetField.Success) {\n  console.log(\"Field set successfully into cache 'test-cache'\");\n} else if (result instanceof CacheDictionarySetField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionarySetField on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarysetfields"},"DictionarySetFields"),(0,r.kt)("p",null,"Dictionary\u9805\u76ee\u306b\u8907\u6570\u306e\u30d5\u30a3\u30fc\u30eb\u30c9:\u5024\u306e\u30da\u30a2\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u8f9e\u66f8\u9805\u76ee\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u65b0\u3057\u3044\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u3059\u308bDictionary\u9805\u76ee\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306b\u3088\u3063\u3066Dictionary\u9805\u76ee\u306b\u8ffd\u52a0\u3055\u308c\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\uff1a\u5024\u306e\u30da\u30a2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306eDictionary\u9805\u76ee\u306e TTL\u3002\u3053\u306eTTL\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u521d\u671f\u5316\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3055\u308c\u308bTTL\u3088\u308a\u3082\u512a\u5148\u3055\u308c\u307e\u3059\u3002")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"const result = await cacheClient.dictionarySetFields(\n  'test-cache',\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nif (result instanceof CacheDictionarySetFields.Success) {\n  console.log(\"Fields set successfully into cache 'test-cache'\");\n} else if (result instanceof CacheDictionarySetFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionarySetFields on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarylength"},"DictionaryLength"),(0,r.kt)("p",null,"\u65e2\u5b58\u306eDictionary\u9805\u76ee\u306e\u9577\u3055\u3092\u53d6\u5f97\u3057\u307e\u3059"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c1\u30a7\u30c3\u30af\u3059\u308bDictionary\u9805\u76ee\u540d")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3002")),(0,r.kt)(l.X,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}p.isMDXComponent=!0}}]);