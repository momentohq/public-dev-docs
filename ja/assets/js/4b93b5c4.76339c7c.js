"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:10,title:"API Keys",sidebar_label:"API Keys",description:"Momento API \u30ad\u30fc\u3068\u306f\u4f55\u304b\u3001\u3069\u306e\u3088\u3046\u306b\u4f5c\u6210\u3057\u3001\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u3092\u5b66\u3073\u307e\u3059\u3002"},l="Momento API keys",i={unversionedId:"cache/develop/authentication/api-keys",id:"cache/develop/authentication/api-keys",title:"API Keys",description:"Momento API \u30ad\u30fc\u3068\u306f\u4f55\u304b\u3001\u3069\u306e\u3088\u3046\u306b\u4f5c\u6210\u3057\u3001\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u3092\u5b66\u3073\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/authentication/api-keys.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/api-keys",permalink:"/ja/cache/develop/authentication/api-keys",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/api-keys.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"API Keys",sidebar_label:"API Keys",description:"Momento API \u30ad\u30fc\u3068\u306f\u4f55\u304b\u3001\u3069\u306e\u3088\u3046\u306b\u4f5c\u6210\u3057\u3001\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u3092\u5b66\u3073\u307e\u3059\u3002"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/ja/cache/develop/authentication/"},next:{title:"Tokens",permalink:"/ja/cache/develop/authentication/tokens"}},p={},c=[{value:"API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"api\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 1: \u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u304b\u3001Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-1-\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u304bmomento-\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b",level:3},{value:"\u30b9\u30c6\u30c3\u30d7 2: API \u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-2-api-\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30b9\u30c6\u30c3\u30d7 3: \u30bb\u30ad\u30e5\u30a2\u306b!",id:"\u30b9\u30c6\u30c3\u30d7-3-\u30bb\u30ad\u30e5\u30a2\u306b",level:3},{value:"\u6709\u52b9\u671f\u9650",id:"\u6709\u52b9\u671f\u9650",level:2},{value:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",id:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-api-keys"},"Momento API keys"),(0,a.kt)("p",null,"API\u30ad\u30fc\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u7684\u306a\u4f7f\u7528\u3092\u76ee\u7684\u3068\u3057\u305f\u3001\u9577\u671f\u9593\u306e\u5229\u7528\u3067\u304d\u308b\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30ad\u30fc\u306f\u3001\u7d71\u5408\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3084\u30c8\u30d4\u30c3\u30af\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002API \u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u969b\u3001",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb")," \u304b\u3089 2 \u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'"super-user"\u30ad\u30fc\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u3068\u524a\u9664\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u9805\u76ee\u306e\u8a2d\u5b9a\u3068\u53d6\u5f97\u3001\u30c8\u30d4\u30c3\u30af\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u306a\u3069\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u3059\u3079\u3066\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30ad\u30fc\u3067\u3059\u3002'),(0,a.kt)("li",{parentName:"ol"},'"A fine-grained access control (FGAC)"\u30ad\u30fc\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u306e\u8a2d\u5b9a\u3068\u53d6\u5f97\u3001\u30c8\u30d4\u30c3\u30af\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u306a\u3069\u3001\u30c7\u30fc\u30bf\u64cd\u4f5c\u306e\u307f\u306b\u5236\u9650\u304c\u3067\u304d\u308b\u30ad\u30fc\u3067\u3059\u3002')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Momento SDK\u3092\u4f7f\u7528\u3057\u3066"super-user" API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001"A fine-grained access control (FGAC)"\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\uff01\n\u8a73\u3057\u304f\u306f',(0,a.kt)("a",{parentName:"p",href:"/ja/cache/develop/authentication/"},"Auth API reference page"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h2",{id:"api\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("p",null,"SDK\u3092\u4f7f\u7528\u3057\u3066API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u4e00\u822c\u7684\u306b\u306f",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u3053\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u9577\u671f\u9593\u4f7f\u7528\u3059\u308b\u30ad\u30fc\u3092\u8996\u899a\u7684\u306b\u76e3\u8996\u30fb\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u8aa4\u3063\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30db\u30fc\u30eb\u3092\u958b\u3051\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30b9\u30c6\u30c3\u30d7-1-\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u304bmomento-\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 1: \u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u304b\u3001Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u6307\u793a\u306b\u5f93\u3063\u3066\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001Google\u30a2\u30ab\u30a6\u30f3\u30c8\u3001\u307e\u305f\u306fGitHub\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Momento console landing page",src:n(5176).Z,width:"700",height:"337"})),(0,a.kt)("h3",{id:"\u30b9\u30c6\u30c3\u30d7-2-api-\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 2: API \u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("p",null,"\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u3001",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"API Keys"),"\u306e\u30e1\u30cb\u30e5\u30fc\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"API\u30ad\u30fc\u306e\u30da\u30fc\u30b8\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5b58\u5728\u3059\u308b\u5834\u6240\u306b\u4e00\u81f4\u3059\u308b\u60c5\u5831\u3092\u9078\u629e\u3057\u307e\u3059\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc"),(0,a.kt)("li",{parentName:"ol"},"\u30ea\u30fc\u30b8\u30e7\u30f3"),(0,a.kt)("li",{parentName:"ol"},"Key Type"),(0,a.kt)("li",{parentName:"ol"},"(\u30aa\u30d7\u30b7\u30e7\u30f3) Expiration date")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image showing the fields to create a new API key",src:n(8500).Z,width:"1100",height:"409"})),(0,a.kt)("p",null,"\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001",(0,a.kt)("strong",{parentName:"p"},"Generate"),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066API\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\uff01"),(0,a.kt)("p",null,"\u30ad\u30fc\u306e\u5024\u3092\u76f4\u63a5\u30b3\u30d4\u30fc\u3057\u3066\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3059\u308b\u304b\u3001",(0,a.kt)("strong",{parentName:"p"},"Download JSON")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ad\u30fc\u3068\u6709\u52b9\u671f\u9650\u3092\u304a\u4f7f\u3044\u306ePC\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30b9\u30c6\u30c3\u30d7-3-\u30bb\u30ad\u30e5\u30a2\u306b"},"\u30b9\u30c6\u30c3\u30d7 3: \u30bb\u30ad\u30e5\u30a2\u306b!"),(0,a.kt)("p",null,"API\u30ad\u30fc\u306f\u9577\u671f\u9593\u6709\u52b9\u3067\u3042\u308a\u3001\u901a\u5e38\u3001\u9ad8\u30ec\u30d9\u30eb\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002\u3053\u306e\u3053\u3068\u3092\u5ff5\u982d\u306b\u7f6e\u304d\u3001API\u30ad\u30fc\u306f\u5024\u3092\u6697\u53f7\u5316\u3057\u3001\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u95b2\u89a7\u3092\u9632\u3050\u5834\u6240\u306b\u5b89\u5168\u306b\u4fdd\u7ba1\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30a6\u30c9\u3067\u30db\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secrets Manager"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/key-vault/general/overview"},"Azure Key Vault"),"\u3001\u307e\u305f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),"\u306e\u3088\u3046\u306a\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"API\u30ad\u30fc\u306e\u4fdd\u7ba1\u306f\u3001\u3042\u306a\u305f\u306e\u5b9f\u88c5\u3068\u6a19\u6e96\u7684\u306a\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4e00\u8cab\u3057\u3066\u3044\u308b\u3053\u3068\u304c1\u3064\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5b89\u5168\u306b\u4fdd\u7ba1\u3057\u3066\u304f\u3060\u3055\u3044\uff01")),(0,a.kt)("h2",{id:"\u6709\u52b9\u671f\u9650"},"\u6709\u52b9\u671f\u9650"),(0,a.kt)("p",null,"API\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u969b\u3001\u6709\u52b9\u671f\u9650\u306e\u306a\u3044\u3082\u306e\u3068\u3001\u4e00\u5b9a\u671f\u9593\u5f8c\u306b\u5931\u52b9\u3059\u308b\u3082\u306e\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("strong",{parentName:"p"},"\u6709\u52b9\u671f\u9650\u306e\u306a\u3044\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u304a\u52e7\u3081\u3057\u307e\u305b\u3093\u3002"),"\n\u3053\u308c\u306f\u3001\u30ad\u30fc\u304c\u6f0f\u6d29\u3057\u305f\u5834\u5408\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u306f\u3001\u6709\u52b9\u671f\u9650\u306e\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3044\u304f\u3064\u304b\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u308b\u524d\u306b\u65b0\u3057\u3044 API \u30ad\u30fc\u3092\u4f5c\u6210\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30ed\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01"),(0,a.kt)("h2",{id:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"},"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"),(0,a.kt)("p",null,"\u8a8d\u8a3c\u306bAPI\u30ad\u30fc\u3092",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u308f\u306a\u3044"),"\u7406\u7531\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u304c\u3001\u4f7f\u3046\u3079\u304d\u7406\u7531\u3082\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u3059\u3079\u3066\u306e\u4f7f\u3044\u65b9\u304c\u30d7\u30ed\u30b0\u30e9\u30e0\u7684\u3067\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6708/\u5e74\u5358\u4f4d\u3067\u30ed\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u3055\u308c\u308b\u3001\u3088\u308a\u9577\u5bff\u547d\u306aAPI \u30ad\u30fc\u3067\u3082\u69cb\u308f\u306a\u3044\u3002"),(0,a.kt)("li",{parentName:"ul"},'\u30bb\u30c3\u30b7\u30e7\u30f3\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002("super-user"\u3092\u5229\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408)')),(0,a.kt)("p",null,"\u4f53\u9a13\u3057\u3066\u307f\u308b\u6e96\u5099\u306f\u3067\u304d\u3066\u3044\u307e\u3059\u304b\uff1f",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001API\u30ad\u30fc\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\uff01"))}u.isMDXComponent=!0},5176:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},8500:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-provider-region-be65f042e7452917eb912b64e847d47b.png"}}]);