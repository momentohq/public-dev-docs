"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,k=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"Vector Index",title:"Getting started with Momento Vector Index in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.",keywords:["momento","cache","caching","vector index","llm","large language model","vector search","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},i="JavaScript\u3067Momento Vector Index\u3092\u59cb\u3081\u308b",s={unversionedId:"sdks/nodejs/vector-index",id:"sdks/nodejs/vector-index",title:"Getting started with Momento Vector Index in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/nodejs/vector-index.md",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/vector-index",permalink:"/ja/sdks/nodejs/vector-index",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/vector-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Vector Index",title:"Getting started with Momento Vector Index in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.",keywords:["momento","cache","caching","vector index","llm","large language model","vector search","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]}},c={},l=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001\u30d9\u30af\u30c8\u30eb\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u3002",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u30d9\u30af\u30c8\u30eb\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",level:2},{value:"Momento Vector Index\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3002",id:"momento-vector-index\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b",id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u9805\u76ee\u3092\u4e00\u62ec\u3057\u3066\u66f8\u304d\u8fbc\u3080",id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u9805\u76ee\u3092\u4e00\u62ec\u3057\u3066\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u691c\u7d22",id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u691c\u7d22",level:2},{value:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b",id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b",level:2},{value:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u524a\u9664",id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u524a\u9664",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript\u3067momento-vector-index\u3092\u59cb\u3081\u308b"},"JavaScript\u3067Momento Vector Index\u3092\u59cb\u3081\u308b"),(0,r.kt)("p",null,"Momento\u306f2\u3064\u306eJavaScript SDK\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("a",{parentName:"p",href:"/sdks/nodejs"},"1\u3064\u306fNode.js\u7528"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"/sdks/web"},"1\u3064\u306f\u30d6\u30e9\u30a6\u30b6\u305d\u306e\u4ed6\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528"),"\u3067\u3059\u30022\u3064\u306eSDK\u306f\u540c\u3058API\u3092\u6301\u3063\u3066\u3044\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"\u6587\u4ee5\u5916\u306f\u540c\u3058\u30b3\u30fc\u30c9\u306b\u898b\u3048\u307e\u3059\u304c\u3001\u7570\u306a\u308bJavaScript\u5b9f\u884c\u74b0\u5883\u306b\u304a\u3044\u3066\u6700\u9069\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u4e92\u63db\u6027\u3092\u4fdd\u3064\u3088\u3046\u306b\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u3001Momento Vector Index\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306a\u60c5\u5831\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u3084\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u4e0a\u8a18\u306eSDK\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,r.kt)("p",null,"\u65e2\u5b58\u306eNode.js\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bMomento Node.js SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,r.kt)("p",null,"\u307e\u305f\u306f\u3001\u65e2\u5b58\u306e\u30d6\u30e9\u30a6\u30b6 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b Momento Web SDK \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk-web\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"gomento/sdk"),"\u307e\u305f\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"@gomento/sdk-web"),"\u306e\u3069\u3061\u3089\u304b\u7247\u65b9\u3060\u3051\u304c\u5fc5\u8981\u3067\u3059\u3002\u4e21\u65b9\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("h2",{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a"},"API\u30ad\u30fc\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"Momento API key"),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u3067\u304d\u308c\u3070\u3001",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console")," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u305d\u308c\u3092\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u305d\u308c\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento token here>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001\u30c8\u30fc\u30af\u30f3\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u683c\u7d0d\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u30d9\u30af\u30c8\u30eb\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001\u30d9\u30af\u30c8\u30eb\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u30af\u30e9\u30b9\u5b9a\u7fa9\u3001\u305d\u3057\u3066\u4ed6\u306e\u5404\u95a2\u6570\u304c\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306e\u3042\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {CredentialProvider, PreviewVectorIndexClient, VectorIndexConfigurations} from \"@gomomento/sdk\";\n\n\nconst client = new PreviewVectorIndexClient({\n    configuration: VectorIndexConfigurations.Laptop.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n        environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n});\n\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u3059\u3067\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," \u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u3066\u3044\u308b\u3082\u306e\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"momento-vector-index\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3059\u308b"},"Momento Vector Index\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002similarityMetric",(0,r.kt)("inlineCode",{parentName:"p"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f "),"VectorSimilarityMetric.COSINE_SIMILARITY` \u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\n// The number of dimensions in your vectors\nconst numDimensions = 2;\nconst similarityMetric = VectorSimilarityMetric.COSINE_SIMILARITY;\n\nconst createResponse = await client.createIndex(indexName, numDimensions, similarityMetric);\nif (createResponse instanceof CreateVectorIndex.Success) {\n    console.log('Index created successfully!');\n} else {\n    console.log(`Error creating index: ${createResponse.toString()}`);\n}\n")),(0,r.kt)("h2",{id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u30ea\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const listResponse = await client.listIndexes();\nif (listResponse instanceof ListVectorIndexes.Success) {\n    console.log(listResponse.getIndexNames().join('\\n'));\n} else {\n    console.log(`Error listing indexes: ${listResponse.toString()}`);\n}\n")),(0,r.kt)("h2",{id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u9805\u76ee\u3092\u4e00\u62ec\u3057\u3066\u66f8\u304d\u8fbc\u3080"},"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u9805\u76ee\u3092\u4e00\u62ec\u3057\u3066\u66f8\u304d\u8fbc\u3080"),(0,r.kt)("p",null,"upsertItemBatch`\u64cd\u4f5c\u3092\u884c\u3046\u7c21\u5358\u306a\u4f8b\u3067\u3059\u3002\u3053\u306e\u64cd\u4f5c\u306f\u30a2\u30a4\u30c6\u30e0\u304c\u5b58\u5728\u3057\u306a\u3051\u308c\u3070\u633f\u5165\u3057\u3001\u5b58\u5728\u3059\u308c\u3070\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\nconst upsertResponse = await client.upsertItemBatch(indexName, [\n    {\n        id: 'example_item_1',\n        vector: [1.0, 2.0],\n        metadata: {key1: 'value1'},\n    },\n    {\n        id: 'example_item_2',\n        vector: [3.0, 4.0],\n        metadata: {key2: 'value2'},\n    },\n]);\nif (upsertResponse instanceof VectorUpsertItemBatch.Success) {\n    console.log('Successfully upserted items');\n} else {\n    console.log(`Error adding items: ${upsertResponse.toString()}`);\n}\n")),(0,r.kt)("h2",{id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u691c\u7d22"},"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u691c\u7d22"),(0,r.kt)("p",null,"\u3053\u308c\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"queryVector")," \u306b\u30de\u30c3\u30c1\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304b\u3089\u4e0a\u4f4d k \u500b\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u53d6\u5f97\u3059\u308b\u691c\u7d22\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"metadataFields")," \u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3042\u308a\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u3067\u8fd4\u3059\u30e1\u30bf\u30c7\u30fc\u30bf\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"[1.0, 2.0]")," \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"queryVector")," \u3092\u4f7f\u3044\u3001\u4e0a\u4f4d2\u3064\u306e\u7d50\u679c\u3092\u6c42\u3081\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexName = "my-index";\nconst queryVector = [1.0, 2.0];\nconst searchResponse = await client.search(indexName, queryVector, {\n    topK: 2,\n    metadataFields: ALL_VECTOR_METADATA,\n});\nif (searchResponse instanceof VectorSearch.Success) {\n    console.log(`Search succeeded with ${searchResponse.hits().length} results`);\n} else {\n    console.log(`Error searching items: ${searchResponse.toString()}`);\n}\n')),(0,r.kt)("h2",{id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b"},"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b"),(0,r.kt)("p",null,"deleteItemBatch` \u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u304b\u3089\u9805\u76ee\u3092\u524a\u9664\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\nconst itemsToDelete = [\n    'example_item_1',\n    'example_item_2',\n];\n\nconst deleteResponse = await client.deleteItemBatch(indexName, itemsToDelete);\nif (deleteResponse instanceof VectorDeleteItemBatch.Success) {\n    console.log('Successfully deleted items');\n} else {\n    console.log(`Error deleting items: ${deleteResponse.toString()}`);\n}\n")),(0,r.kt)("h2",{id:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u524a\u9664"},"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u524a\u9664"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deleteIndex"),"\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u524a\u9664\u3059\u308b\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexName = "my-index";\nconst deleteIndexResponse = await client.deleteIndex(indexName);\nif (deleteIndexResponse instanceof DeleteVectorIndex.Success) {\n    console.log("Index \'test-index\' deleted");\n} else {\n    console.log(`Error deleting index: ${deleteIndexResponse.toString()}`);\n}\n')))}m.isMDXComponent=!0}}]);