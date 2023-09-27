"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,title:"Momento Vector Index",sidebar_label:"Momento Vector Index",description:"<TBD>"},i="What is Momento Vector Index?",s={unversionedId:"vector-index/index",id:"vector-index/index",title:"Momento Vector Index",description:"<TBD>",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/vector-index/index.md",sourceDirName:"vector-index",slug:"/vector-index/",permalink:"/ja/vector-index/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Momento Vector Index",sidebar_label:"Momento Vector Index",description:"<TBD>"},sidebar:"vectorSidebar",next:{title:"Develop",permalink:"/ja/vector-index/develop/"}},c={},l=[{value:"What is MVI\u2019s role in your application?",id:"what-is-mvis-role-in-your-application",level:2},{value:"Why is it called a vector index, not a vector database?",id:"why-is-it-called-a-vector-index-not-a-vector-database",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-momento-vector-index"},"What is Momento Vector Index?"),(0,o.kt)("p",null,"Momento Vector Index (MVI) is a scalable, developer-friendly vector index service designed for real-time storage and retrieval of vector data for use in AI-powered applications."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Main image about vector index service.",src:n(1055).Z,width:"1000",height:"203"})),(0,o.kt)("p",null,"MVI's serverless and API-driven approach to vector indexes aligns with modern development needs, providing compute resources as required without the burden of infrastructure or maintenance. The combination of simple self-service and consumption-based pricing reflects an intentional design that considers both initial development and future scaling. It's a solution that offers flexibility and convenience for developers at various stages of the development lifecycle."),(0,o.kt)("h2",{id:"what-is-mvis-role-in-your-application"},"What is MVI\u2019s role in your application?"),(0,o.kt)("p",null,"Build with Momento Vector Indexes with use cases such as:"),(0,o.kt)("p",null,"MVI can be leveraged for semantic searches, which enhance search capabilities by understanding context and meaning. By employing vector indexing, your app can interpret relationships between words and concepts, allowing for more relevant results. This technology supports applications like personalized recommendations, fraud detection, and Natural Language Processing (NLP), providing a more nuanced search experience than simple text-based search. MVI's potential to bridge language barriers and understand user intent makes it a valuable tool for delivering a more intelligent and satisfying search experience."),(0,o.kt)("p",null,"For sentiment analysis applications, you can use MVI to map data into a multidimensional space, where patterns correlating to positive, negative, or neutral emotions can be discerned. This allows for efficient comparison across large datasets, helping gauge opinions on products or trends. With real-time processing and adaptability, vector indexes become increasingly valuable for understanding and responding to user sentiments."),(0,o.kt)("h2",{id:"why-is-it-called-a-vector-index-not-a-vector-database"},"Why is it called a vector index, not a vector database?"),(0,o.kt)("p",null,"A vector index is just that, the index. It stores metadata about the data (images, text, etm.), in this case, vectors, but doesn\u2019t keep the data like a database does. The vector index only has the data necessary to utilize the index, the vectors, and their embeddings. This makes an index super lean, super performant, and something that can easily accompany your existing data platform. For example, a vector index would store all of the vector embeddings for images and text but not the image or text themselves."))}u.isMDXComponent=!0},1055:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mvi-261bb153da8e52bb2447c521b32d3d80.jpg"}}]);