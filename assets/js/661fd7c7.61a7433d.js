"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6401],{5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),s=r(6550),i=r(1980),d=r(7392),u=r(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,d]=h({queryString:r,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=i??c;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var f=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),a=d[r].value;a!==s&&(c(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},d.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},3404:(e,t,r)=>{r(7294)},9720:(e,t,r)=>{r.d(t,{X:()=>s});var a=r(4866),n=r(5162),l=r(614),o=r(7294);const s=e=>{let{js:t,python:r,java:s,go:i,csharp:d,php:u,rust:c,ruby:m,elixir:p,cli:h}=e;return t||r||s||i||d||u||c||m||p||h?o.createElement(a.Z,null,t&&o.createElement(n.Z,{value:"js",label:"JavaScript"},o.createElement(l.Z,{language:"js"},t)),r&&o.createElement(n.Z,{value:"python",label:"Python"},o.createElement(l.Z,{language:"python"},r)),s&&o.createElement(n.Z,{value:"java",label:"Java"},o.createElement(l.Z,{language:"java"},s)),i&&o.createElement(n.Z,{value:"go",label:"Go"},o.createElement(l.Z,{language:"go"},i)),d&&o.createElement(n.Z,{value:"csharp",label:"C#"},o.createElement(l.Z,{language:"csharp"},d)),u&&o.createElement(n.Z,{value:"php",label:"PHP"},o.createElement(l.Z,{language:"php"},u)),c&&o.createElement(n.Z,{value:"rust",label:"Rust"},o.createElement(l.Z,{language:"rust"},c)),m&&o.createElement(n.Z,{value:"ruby",label:"Ruby"},o.createElement(l.Z,{language:"ruby"},m)),p&&o.createElement(n.Z,{value:"elixir",label:"Elixir"},o.createElement(l.Z,{language:"elixir"},p)),h&&o.createElement(n.Z,{value:"cli",label:"CLI"},o.createElement(l.Z,{language:"cli"},h))):null}},9053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),l=(r(3404),r(9720));const o={sidebar_position:1,sidebar_label:"API Reference",title:"Leaderboards API reference",description:"Learn how to interact programmatically with Momento Leaderboards API."},s=void 0,i={unversionedId:"leaderboards/develop/api-reference/index",id:"leaderboards/develop/api-reference/index",title:"Leaderboards API reference",description:"Learn how to interact programmatically with Momento Leaderboards API.",source:"@site/docs/leaderboards/develop/api-reference/index.md",sourceDirName:"leaderboards/develop/api-reference",slug:"/leaderboards/develop/api-reference/",permalink:"/leaderboards/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API Reference",title:"Leaderboards API reference",description:"Learn how to interact programmatically with Momento Leaderboards API."},sidebar:"leaderboardSidebar",previous:{title:"Develop"},next:{title:"Auth",permalink:"/leaderboards/develop/api-reference/auth"}},d={},u=[{value:"Using the Momento Leaderboards",id:"using-the-momento-leaderboards",level:2},{value:"Leaderboard Client",id:"leaderboard-client",level:2},{value:"Leaderboard Methods",id:"leaderboard-methods",level:2},{value:"Upsert elements",id:"upsert-elements",level:3},{value:"Fetch elements by score",id:"fetch-elements-by-score",level:3},{value:"Fetch elements by rank",id:"fetch-elements-by-rank",level:3},{value:"Fetch elements by ID",id:"fetch-elements-by-id",level:3},{value:"Get leaderboard length",id:"get-leaderboard-length",level:3},{value:"Remove elements",id:"remove-elements",level:3},{value:"Delete leaderboard",id:"delete-leaderboard",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"using-the-momento-leaderboards"},"Using the Momento Leaderboards"),(0,n.kt)("p",null,"Momento Leaderboards is a first-class service with purpose-built APIs that supports leaderboards with tens of millions of items and rapid ingestion/querying/updates."),(0,n.kt)("h2",{id:"leaderboard-client"},"Leaderboard Client"),(0,n.kt)("p",null,"To create and interact with leaderboards, you must first create a LeaderboardClient."),(0,n.kt)(l.X,{js:"const leaderboardClient = new PreviewLeaderboardClient({\n  configuration: LeaderboardConfigurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("p",null,"Then you can create a leaderboard by specifying a cache and leaderboard name."),(0,n.kt)(l.X,{js:"// You can create multiple leaderboards using the same leaderboard client\n// but with different cache and leaderboard names\nconst leaderboard1 = leaderboardClient.leaderboard('test-cache', 'momento-leaderboard');\nconst leaderboard2 = leaderboardClient.leaderboard('test-cache', 'acorns-leaderboard');\n\n// Leaderboard and cache names must be non-empty strings\ntry {\n  const leaderboard3 = leaderboardClient.leaderboard('test-cache', '   ');\n} catch (error) {\n  console.log('Expected error creating a leaderboard with invalid leaderboard name:', error);\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h2",{id:"leaderboard-methods"},"Leaderboard Methods"),(0,n.kt)("h3",{id:"upsert-elements"},"Upsert elements"),(0,n.kt)("p",null,"Inserts elements if they do not already exist in the leaderboard. Updates elements if they do already exist in the leaderboard. There are no partial failures; an upsert call will either succeed or fail."),(0,n.kt)("p",null,"The ID can be a player identifier, session identifier, browser identifier or any other kind of identifier you want to use for this scoreboard. The full unsigned 64 bit range is allowed here, between 0 and 2^63-1 inclusive. An id can only appear in a leaderboard one time, meaning you can't have two scores for one player unless that player has two ids!"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elements"),(0,n.kt)("td",{parentName:"tr",align:null},"Map<number, number>"),(0,n.kt)("td",{parentName:"tr",align:null},"A Map or Record of elements (id,score pairs) to upsert.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"// Upsert a set of elements as a Map\nconst elements1: Map<number, number> = new Map([\n  [123, 100.0],\n  [234, 200.0],\n  [345, 300.0],\n  [456, 400.0],\n]);\nconst result1 = await leaderboard.upsert(elements1);\nif (result1 instanceof LeaderboardUpsert.Success) {\n  console.log('Successfully upserted elements to leaderboard');\n} else if (result1 instanceof LeaderboardUpsert.Error) {\n  console.log('Upsert error:', result1.message());\n  throw new Error(\n    `An error occurred while attempting to call upsert on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result1.errorCode()}: ${result1.message()}`\n  );\n}\n\n// Or upsert a set of elements as a Record\nconst elements2: Record<number, number> = {\n  567: 500,\n  678: 600,\n  789: 700,\n  890: 800,\n};\nconst result2 = await leaderboard.upsert(elements2);\nif (result2 instanceof LeaderboardUpsert.Success) {\n  console.log('Successfully upserted elements to leaderboard');\n} else if (result2 instanceof LeaderboardUpsert.Error) {\n  console.log('Upsert error:', result2.message());\n  throw new Error(\n    `An error occurred while attempting to call upsert on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result2.errorCode()}: ${result2.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("p",null,"Upsert is implemented as a batched operation, so for large leaderboards, you can upsert in batches of up to 8192 elements. "),(0,n.kt)(l.X,{js:"// To upsert a large number of elements, you must upsert\n// in batches of up to 8192 elements at a time.\nconst elements = [...Array(20000).keys()].map(i => {\n  return {id: i + 1, score: i * Math.random()};\n});\nfor (let i = 0; i < 20000; i += 8192) {\n  // Create a Map containing 8192 elements at a time\n  const batch = new Map(elements.slice(i, i + 8192).map(obj => [obj['id'], obj['score']]));\n\n  // Then upsert one batch at a time until all elements have been ingested\n  const result = await leaderboard.upsert(batch);\n  if (result instanceof LeaderboardUpsert.Error) {\n    console.log(`Error upserting batch [${i}, ${i + 8192})`);\n  }\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"fetch-elements-by-score"},"Fetch elements by score"),(0,n.kt)("p",null,"Fetches elements that fall within the specified min and max scores. "),(0,n.kt)("p",null,"Elements with the same score will be returned in alphanumerical order based on their ID (e.g. IDs of elements with the same score would be returned in the order ",(0,n.kt)("inlineCode",{parentName:"p"},"[1, 10, 123, 2, 234, ...]")," rather than ",(0,n.kt)("inlineCode",{parentName:"p"},"[1, 2, 10, 123, 234, ...]"),")."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minScore"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[number]"),(0,n.kt)("td",{parentName:"tr",align:null},"Inclusive lower bound for the score range. Defaults to ",(0,n.kt)("inlineCode",{parentName:"td"},"-inf"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maxScore"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[number]"),(0,n.kt)("td",{parentName:"tr",align:null},"Exclusive upper bound for the score range. Defaults to ",(0,n.kt)("inlineCode",{parentName:"td"},"+inf"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[Ascending / Descending]"),(0,n.kt)("td",{parentName:"tr",align:null},"The order to fetch the elements in. Defaults to ascending, meaning 0 is the lowest-scoring rank.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[number]"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of elements to skip before returning the first element. Defaults to 0. Note: this is not the score of the first element to return, but the number of elements of the result set to skip before returning the first element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[number]"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of elements to return. Defaults to 8192, which is the maximum that can be fetched per request.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"values(): {",(0,n.kt)("inlineCode",{parentName:"li"},"id"),": number, ",(0,n.kt)("inlineCode",{parentName:"li"},"score"),": number, ",(0,n.kt)("inlineCode",{parentName:"li"},"rank"),": number}[]"))),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"// By default, FetchByScore will fetch the elements from the entire score range\n// with zero offset in ascending order. It can return 8192 elements at a time.\nconst result1 = await leaderboard.fetchByScore();\nif (result1 instanceof LeaderboardFetch.Success) {\n  console.log('Successfully fetched elements using open score range:');\n  result1.values().forEach(element => {\n    console.log(`\\tId: ${element.id} | Rank: ${element.rank} | Score: ${element.score}`);\n  });\n} else if (result1 instanceof LeaderboardFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call fetchByScore with no options on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result1.errorCode()}: ${result1.message()}`\n  );\n}\n\n// Example specifying all FetchByScore options. You can provide any subset of these options\n// to modify your FetchByScore request.\nconst result2 = await leaderboard.fetchByScore({\n  minScore: 10,\n  maxScore: 600,\n  order: LeaderboardOrder.Descending,\n  offset: 2,\n  count: 10,\n});\nif (result2 instanceof LeaderboardFetch.Success) {\n  console.log('Successfully fetched elements by score using all options:');\n  result2.values().forEach(element => {\n    console.log(`\\tId: ${element.id} | Rank: ${element.rank} | Score: ${element.score}`);\n  });\n} else if (result2 instanceof LeaderboardFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call fetchByScore with all options on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result2.errorCode()}: ${result2.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("p",null,"FetchByScore is implemented as a batch operation, so for large leaderboards, you can fetch in batches of up to 8192 elements. You can page through multiple elements that fall within the requested score range using the ",(0,n.kt)("inlineCode",{parentName:"p"},"offset")," parameter until you receive an empty list, which indicates the end of the requested elements. "),(0,n.kt)(l.X,{js:"// Use the offset option to paginate through your results if your leaderboard\n// has more than 8192 elements.\nfor (let offset = 0; offset < 20000; offset += 8192) {\n  const result = await leaderboard.fetchByScore({offset});\n  if (result instanceof LeaderboardFetch.Success) {\n    processBatch(result.values());\n  } else if (result instanceof LeaderboardFetch.Error) {\n    console.log(`Error fetching batch [${offset}, ${offset + 8192})`);\n  }\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"fetch-elements-by-rank"},"Fetch elements by rank"),(0,n.kt)("p",null,"Fetches elements that fall within the specified min and max ranks."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startRank"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Inclusive lower bound for the rank range. Defaults to 0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"endRank"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Exclusive upper bound for the rank range. Defaults to ",(0,n.kt)("inlineCode",{parentName:"td"},"startRank")," + 8192.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[Ascending / Descending]"),(0,n.kt)("td",{parentName:"tr",align:null},"The order to fetch the elements in. Defaults to ascending, meaning 0 is the lowest-scoring rank.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"values(): {",(0,n.kt)("inlineCode",{parentName:"li"},"id"),": number, ",(0,n.kt)("inlineCode",{parentName:"li"},"score"),": number, ",(0,n.kt)("inlineCode",{parentName:"li"},"rank"),": number}[]"))),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"// By default, FetchByRank will fetch the elements in the range [startRank, endRank)\n// in ascending order, meaning rank 0 is for the lowest score.\nconst result1 = await leaderboard.fetchByRank(0, 10);\nif (result1 instanceof LeaderboardFetch.Success) {\n  console.log('Successfully fetched elements in rank range [0,10)');\n  result1.values().forEach(element => {\n    console.log(`\\tId: ${element.id} | Rank: ${element.rank} | Score: ${element.score}`);\n  });\n} else if (result1 instanceof LeaderboardFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call fetchByRank with no options on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result1.errorCode()}: ${result1.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("p",null,"For large leaderboards, you will need to fetch in batches of up to 8192 elements."),(0,n.kt)(l.X,{js:"// Use the startRank and endRank options to paginate through your leaderboard\n// if your leaderboard has more than 8192 elements\nfor (let rank = 0; rank < 20000; rank += 8192) {\n  const result = await leaderboard.fetchByRank(rank, rank + 8192, {order: LeaderboardOrder.Descending});\n  if (result instanceof LeaderboardFetch.Success) {\n    processBatch(result.values());\n  } else if (result instanceof LeaderboardFetch.Error) {\n    console.log(`Error fetching batch [${rank}, ${rank + 8192})`);\n  }\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"fetch-elements-by-id"},"Fetch elements by ID"),(0,n.kt)("p",null,"Fetches elements given a list of element IDs. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ids"),(0,n.kt)("td",{parentName:"tr",align:null},"Array<",(0,n.kt)("inlineCode",{parentName:"td"},"number"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"The ids of the elements whose rank we are retrieving.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[Ascending / Descending]"),(0,n.kt)("td",{parentName:"tr",align:null},"The order to fetch the elements in. Defaults to ascending, meaning 0 is the lowest-scoring rank.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"values(): {",(0,n.kt)("inlineCode",{parentName:"li"},"id"),": number, ",(0,n.kt)("inlineCode",{parentName:"li"},"score"),": number, ",(0,n.kt)("inlineCode",{parentName:"li"},"rank"),": number}[]"))),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"// Provide a list of element IDs to get their ranks in ascending or descending order\nconst result = await leaderboard.getRank([123, 456, 789], {\n  order: LeaderboardOrder.Descending,\n});\nif (result instanceof LeaderboardFetch.Success) {\n  console.log('Successfully fetched the rank of 3 elements:');\n  result.values().forEach(element => {\n    console.log(`\\tId: ${element.id} | Rank: ${element.rank} | Score: ${element.score}`);\n  });\n} else if (result instanceof LeaderboardFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call getRank on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result.errorCode()}: ${result.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"get-leaderboard-length"},"Get leaderboard length"),(0,n.kt)("p",null,"Gets the number of entries in the leaderboard. There are no parameters for this method; the leaderboard name is inferred from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Leaderboard")," object."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"length(): number"))),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await leaderboard.length();\nif (result instanceof LeaderboardLength.Success) {\n  console.log('Successfully retrieved leaderboard length:', result.length());\n} else if (result instanceof LeaderboardLength.Error) {\n  throw new Error(\n    `An error occurred while attempting to call length on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result.errorCode()}: ${result.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"remove-elements"},"Remove elements"),(0,n.kt)("p",null,"Removes elements with the specified IDs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ids"),(0,n.kt)("td",{parentName:"tr",align:null},"Array<",(0,n.kt)("inlineCode",{parentName:"td"},"number"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"An Array of element IDs for the elements you want to remove.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"// Provide a list of element IDs to delete those elements\nconst result = await leaderboard.removeElements([123, 456, 789]);\nif (result instanceof LeaderboardRemoveElements.Success) {\n  console.log('Successfully removed elements');\n} else if (result instanceof LeaderboardRemoveElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call removeElements on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result.errorCode()}: ${result.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("p",null,"For large leaderboards, you will need to remove in batches of up to 8192 elements."),(0,n.kt)(l.X,{js:"// You can remove batches of 8192 elements at a time\nconst ids = [...Array(20000).keys()];\nfor (let i = 0; i < 20000; i += 8192) {\n  const result = await leaderboard.removeElements(ids.slice(i, i + 8192));\n  if (result instanceof LeaderboardRemoveElements.Error) {\n    console.log(`Error removing batch [${i}, ${i + 8192})`);\n  }\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"delete-leaderboard"},"Delete leaderboard"),(0,n.kt)("p",null,"Deletes the leaderboard. There are no parameters for this method; the leaderboard name is inferred from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Leaderboard")," object."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/leaderboards/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await leaderboard.delete();\nif (result instanceof LeaderboardDelete.Success) {\n  console.log('Successfully deleted the leaderboard');\n} else if (result instanceof LeaderboardDelete.Error) {\n  throw new Error(\n    `An error occurred while attempting to call delete on leaderboard 'momento-leaderboard' in cache 'test-cache': ${result.errorCode()}: ${result.message()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}p.isMDXComponent=!0}}]);