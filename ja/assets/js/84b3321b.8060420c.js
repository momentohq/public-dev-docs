"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7616],{2663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(4848),s=t(8453);const o={sidebar_position:1,sidebar_label:"Data Types",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each."},r="Momento Cache\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u578b",i={id:"cache/develop/basics/datatypes",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/basics/datatypes.md",sourceDirName:"cache/develop/basics",slug:"/cache/develop/basics/datatypes",permalink:"/ja/cache/develop/basics/datatypes",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/basics/datatypes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Data Types",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each."},sidebar:"cacheSidebar",previous:{title:"Basics"},next:{title:"SDK Configuration Objects",permalink:"/ja/cache/develop/basics/client-configuration-objects"}},c={},d=[{value:"Momento Cache\u306e\u30b3\u30a2\u30fb\u30c7\u30fc\u30bf\u578b",id:"momento-cache\u306e\u30b3\u30a2\u30c7\u30fc\u30bf\u578b",level:2},{value:"Byte arrays",id:"byte-arrays",level:3},{value:"Collection data types (CDTs)",id:"collection-data-types-cdts",level:3},{value:"Lists",id:"lists",level:4},{value:"Dictionaries",id:"dictionaries",level:4},{value:"Sets",id:"sets",level:4},{value:"Sorted sets",id:"sorted-sets",level:4},{value:"FAQs",id:"faqs",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"momento-cache\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u578b",children:"Momento Cache\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u578b"}),"\n",(0,a.jsx)(n.p,{children:"Momento Cache \u306f\u3001\u3055\u307e\u3056\u307e\u306a\u6700\u65b0\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u4e00\u822c\u7684\u306a\u578b\u306b\u5bfe\u5fdc\u3059\u308b\u30b3\u30a2\u30fb\u30c7\u30fc\u30bf\u578b\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u3001\u30b3\u30a2\u30fb\u30c7\u30fc\u30bf\u578b\u306e\u4e00\u89a7\u3068\u3001\u305d\u308c\u305e\u308c\u306e\u30c7\u30fc\u30bf\u578b\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"momento-cache\u306e\u30b3\u30a2\u30c7\u30fc\u30bf\u578b",children:"Momento Cache\u306e\u30b3\u30a2\u30fb\u30c7\u30fc\u30bf\u578b"}),"\n",(0,a.jsx)(n.h3,{id:"byte-arrays",children:"Byte arrays"}),"\n",(0,a.jsx)(n.p,{children:"\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u3059\u3079\u3066\u30d0\u30a4\u30c8\u914d\u5217\u3068\u3057\u3066\u8868\u73fe\u3055\u308c\u307e\u3059\u3002Momento SDK\u306f\u3001\u30c7\u30fc\u30bf\u3092\u751f\u306e\u30d0\u30a4\u30c8\u307e\u305f\u306f\u79fb\u690d\u53ef\u80fd\u306aUTF-8\u6587\u5b57\u5217\u3068\u3057\u3066\u683c\u7d0d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u7c21\u5358\u306a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u6587\u5b57\u5217\u3001\u6587\u5b57\u3001\u6570\u5024\u306a\u3069\u306e\u30b9\u30ab\u30e9\u30fc\u30c7\u30fc\u30bf\u3001\u753b\u50cf\u3084\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u306e\u76f4\u5217\u5316\u914d\u5217\u306a\u3069\u306e\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u306a\u3069\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"collection-data-types-cdts",children:"Collection data types (CDTs)"}),"\n",(0,a.jsx)(n.p,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306f\u3001\u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30921\u3064\u306e\u30a2\u30a4\u30c6\u30e0\u306b\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u3089\u306f\u30d0\u30a4\u30c8\u914d\u5217\u306e\u5024\u3068\u3057\u3066\u683c\u7d0d\u3055\u308c\u3001Momento SDK\u3067\u306f\u305d\u308c\u305e\u308c\u72ec\u81ea\u306eAPI\u30b3\u30fc\u30eb\u30bb\u30c3\u30c8\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001DictionaryFetch\u3001ListFetch\u3001SetFetch\u306a\u3069\u3067\u3059\u3002"}),"\n",(0,a.jsx)("img",{src:"/img/collection_data_types.png",alt:"Collection data types drawing | Momento Cache",width:"80%"}),"\n",(0,a.jsx)(n.h4,{id:"lists",children:"Lists"}),"\n",(0,a.jsx)(n.p,{children:"\u30ea\u30b9\u30c8\u306f\u9806\u756a\u306b\u4e26\u3079\u3089\u308c\u305f\u8981\u7d20\u306e\u96c6\u307e\u308a\u3067\u3001\u5404\u8981\u7d20\u304c\u633f\u5165\u3055\u308c\u305f\u9806\u756a\u306b\u30bd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'"Hoover\u2019s Sour Cream Cookies" = [\n  "1 cup butter (2 sticks), room temperature",\n  "1 cup granulated sugar",\n  "1 cup brown sugar, packed",\n  "3 eggs, room temperature",\n  "1 cup sour cream, room temperature",\n  "1 tsp pure vanilla extract",\n  "3 cups all-purpose flour",\n  "1 tsp baking powder",\n  "1 tsp baking soda",\n  "1 tsp salt"\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["API\u30e1\u30bd\u30c3\u30c9\u3092\u5b66\u3076\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/ja/cache/develop/api-reference/list-collections",children:"\u30ea\u30b9\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h4,{id:"dictionaries",children:"Dictionaries"}),"\n",(0,a.jsx)(n.p,{children:"Dictionary\u306f\u3001\u9806\u5e8f\u4ed8\u3051\u3055\u308c\u3066\u3044\u306a\u3044\u8981\u7d20\u306e\u96c6\u307e\u308a\u3067\u3042\u308a\u3001\u5404\u8981\u7d20\u306f\u30d5\u30a3\u30fc\u30eb\u30c9:\u5024\u306e\u30da\u30a2\u3067\u3042\u308b\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["An example of using a dictionary is when you need to store data together and retrieve field",":value"," pairs by name."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'"truck546" = {\n    "brand" : "Ford",\n    "model": "F-350",\n    "year" : "2020",\n    "engine" : "diesel"\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["API \u30e1\u30bd\u30c3\u30c9\u3092\u5b66\u3076\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/ja/cache/develop/api-reference/dictionary-collections",children:"\u8f9e\u66f8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306e API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h4,{id:"sets",children:"Sets"}),"\n",(0,a.jsx)(n.p,{children:"\u30bb\u30c3\u30c8\u3068\u306f\u3001\u4e00\u610f\u306a\u8981\u7d20\u306e\u4e26\u3073\u9806\u306e\u306a\u3044\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u3053\u3068\u3067\u3001\u305d\u308c\u305e\u308c\u304c\u6587\u5b57\u5217\u5f62\u5f0f\u306b\u306a\u3063\u3066\u3044\u308b\u3002\u305f\u3068\u3048\u3070\u3001\u300csugar\u300d\u3092\u4f55\u5ea6\u30bb\u30c3\u30c8\u306b\u8ffd\u52a0\u3057\u3066\u3082\u3001\u300csugar\u300d\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u306f1\u3064\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'"myIngredients" = {\n    "water",\n    "sugar",\n    "ground cinnamon",\n    "all-purpose flour",\n    "baking soda",\n    "raisins"\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["API\u30e1\u30bd\u30c3\u30c9\u3092\u5b66\u3076\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/ja/cache/develop/api-reference/set-collections",children:"\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h4,{id:"sorted-sets",children:"Sorted sets"}),"\n",(0,a.jsx)(n.p,{children:"Sorted sets\u306f\u3001\u5024\uff08\u6587\u5b57\u5217\uff09\u3068\u30b9\u30b3\u30a2\uff08\u7b26\u53f7\u4ed8\u304d\u30c0\u30d6\u30eb64\u30d3\u30c3\u30c8\u30d5\u30ed\u30fc\u30c8\uff09\u306e\u30da\u30a2\u3092\u6301\u3064\u30e6\u30cb\u30fc\u30af\u306a\u8981\u7d20\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3059\u3002\u9805\u76ee\u306e\u8981\u7d20\u306f\u30b9\u30b3\u30a2\u5024\u9806\u306b\u4e26\u3079\u3089\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'"players" = {\n    "SorataABard" : 32.7,\n    "Juliversal" : 30.45,\n    "DragonNosy" : 26.8,\n    "redbyrd" : 26.8,\n    "SaltyAdjeley" : 23.25,\n    "ZachAttack" : 17.3,\n    "ElyahouBeets" : 5.0,\n    "Smashley" : 3.2"\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u8981\u7d20\u304c\u540c\u3058\u30b9\u30b3\u30a2\u3092\u6301\u3064\u5834\u5408\u3001\u305d\u308c\u3089\u306f",(0,a.jsx)(n.a,{href:"https://www.dictionary.com/browse/lexicographically",children:"\u8f9e\u66f8\u7684\u306b"}),"\u30bd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,a.jsxs)(n.p,{children:["API\u30e1\u30bd\u30c3\u30c9\u3092\u5b66\u3076\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/ja/cache/develop/api-reference/sorted-set-collections",children:"API reference for sorted set collection data types"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("summary",{children:"Dictionary\u9805\u76ee\u304b\u3089\u30c7\u30fc\u30bf\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306bAPI\u30b3\u30fc\u30eb\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u9805\u76ee\u5168\u4f53\u306e\u30b5\u30a4\u30ba\u306fGB\u3042\u305f\u308a\u306e\u8ee2\u9001\u30b3\u30b9\u30c8\u306b\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u304b\uff1f"}),"\n\u3044\u3044\u3048\u3001\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u305b\u3093\u3002\u305f\u3068\u3048\u3070\u3001\u8f9e\u66f8\u9805\u76ee\u5168\u4f53\u304c50\u30ad\u30ed\u30d0\u30a4\u30c8\u3067\u3042\u308b\u8f9e\u66f8\u304b\u3089\u30015\u30ad\u30ed\u30d0\u30a4\u30c8\u306e\u30d5\u30a3\u30fc\u30eb\u30c9:\u5024\u306e\u30da\u30a2\u30921\u3064\u53d6\u5f97\u3059\u308b\u305f\u3081\u306bAPI\u30b3\u30fc\u30ebDictionaryGetField\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001GB\u3042\u305f\u308a\u306e\u8ee2\u9001\u30b3\u30b9\u30c8\u306b\u306f5\u30ad\u30ed\u30d0\u30a4\u30c8\u3057\u304b\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u305b\u3093\u3002"]})}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("summary",{children:"JSON\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092Momento Cache\u306b\u4fdd\u5b58\u3059\u308b\u306b\u306f\uff1f"}),"\n\u304a\u6c17\u306b\u5165\u308a\u306e JSON \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066 JSON \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u30d0\u30a4\u30c8\u914d\u5217\u306b\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3057\u3001\u305d\u306e\u30d0\u30a4\u30c8\u914d\u5217\u3092 Momento Cache \u306b\u633f\u5165\u3057\u307e\u3059\u3002JSON\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u5024\u3092\u8f9e\u66f8\u306b\u683c\u7d0d\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("summary",{children:"Momento Cache\u306f\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306b\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u307e\u3059\u304b\uff1f"}),"\n\u76f4\u63a5\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u30c7\u30fc\u30bf\u3092 JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u4fdd\u5b58\u3057\u3001\u304a\u6c17\u306b\u5165\u308a\u306e JSON \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066 JSON \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u30d0\u30a4\u30c8\u914d\u5217\u306b\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3057\u3001\u305d\u306e\u30d0\u30a4\u30c8\u914d\u5217\u3092 Momento Cache \u306b\u633f\u5165\u3059\u308b\u306e\u304c\u6700\u5584\u306e\u65b9\u6cd5\u3067\u3059\u3002"]})}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("summary",{children:"\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8API\u3092\u4f7f\u7528\u3059\u308b\u969b\u3001\u8981\u7d20\u3092\u3069\u306e\u3088\u3046\u306b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3059\u308c\u3070\u3044\u3044\u3067\u3059\u304b\uff1f"}),"\n\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8API\u30b3\u30fc\u30eb\u3067\u4f7f\u7528\u3055\u308c\u308b\u8981\u7d20\u306f\u3001\u57fa\u657010\u306e\u6574\u6570\u3092\u8868\u3059UTF-8\u6587\u5b57\u5217\u3068\u3057\u3066\u683c\u7d0d\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u8981\u7d20\u304c\u305d\u306e\u5f62\u5f0f\u3067\u306a\u3044\u5834\u5408\u3001API\u30b3\u30fc\u30eb\u306f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30a8\u30e9\u30fc\u3092\u6295\u3052\u307e\u3059\u3002"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);