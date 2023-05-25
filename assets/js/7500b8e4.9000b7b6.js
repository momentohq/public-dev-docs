"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=l,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache.",slug:"/develop/api-reference/collections/sets"},i="Set API reference for Momento Cache",o={unversionedId:"develop/api-reference/set-collections",id:"develop/api-reference/set-collections",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache.",source:"@site/docs/develop/api-reference/set-collections.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/collections/sets",permalink:"/develop/api-reference/collections/sets",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/set-collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache.",slug:"/develop/api-reference/collections/sets"},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/develop/api-reference/collections/list"},next:{title:"Sorted sets",permalink:"/develop/api-reference/collections/sortedsets"}},p={},m=[{value:"Set methods",id:"set-methods",level:2},{value:"SetAddElement",id:"setaddelement",level:3},{value:"SetAddElements",id:"setaddelements",level:3},{value:"SetFetch",id:"setfetch",level:3},{value:"SetRemoveElement",id:"setremoveelement",level:3},{value:"SetRemoveElements",id:"setremoveelements",level:3},{value:"SetContainsElement",id:"setcontainselement",level:3},{value:"SetContainsElements",id:"setcontainselements",level:3},{value:"SetLength",id:"setlength",level:3}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-api-reference-for-momento-cache"},"Set API reference for Momento Cache"),(0,l.kt)("p",null,"A set is a collection of elements, but each element can appear only once and order is not guaranteed."),(0,l.kt)("p",null,"Example: if your set contains ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you add 2, the set remains ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3].")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/datatypes#set-collections"},"Sets")," for more information on their usage."),(0,l.kt)("h2",{id:"set-methods"},"Set methods"),(0,l.kt)("h3",{id:"setaddelement"},"SetAddElement"),(0,l.kt)("p",null,"Adds an element to a set. If the set item does not already exist, this method will create one."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Element to be added by this operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setaddelements"},"SetAddElements"),(0,l.kt)("p",null,"Adds multiple elements to a set item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elements"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Elements to be added by this operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setfetch"},"SetFetch"),(0,l.kt)("p",null,"Gets a set item from a cache."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the set item to be retreived.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for SetFetch returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"valueSetBytes(): Bytes[]"),(0,l.kt)("li",{parentName:"ul"},"valueSetString(): String[]"),(0,l.kt)("li",{parentName:"ul"},"toString(): String"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setremoveelement"},"SetRemoveElement"),(0,l.kt)("p",null,"Removes a single element from an existing set item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Element to be removed by this operation.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setremoveelements"},"SetRemoveElements"),(0,l.kt)("p",null,"Removes multiple elements from an existing set item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Element to be removed by this operation.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setcontainselement"},"SetContainsElement"),(0,l.kt)("p",null,"Checks if a provided element is in the given set."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"element"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the element to check existence of.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for SetContainsElement returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containsElement(): bool"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setcontainselements"},"SetContainsElements"),(0,l.kt)("p",null,"Checks if provided elements are in the given set."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elements"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of element names to check existence of.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for SetContainsElements returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containsElements(): bool[]"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)("h3",{id:"setlength"},"SetLength"),(0,l.kt)("p",null,"Get the length of an existing set item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the set item to be checked.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")))}c.isMDXComponent=!0}}]);