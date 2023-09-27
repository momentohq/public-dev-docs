"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4465:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6,title:"Momento Java SDK",pagination_prev:null,sidebar_label:"Java",description:"Information about the Momento Java SDK"},i="Momento Java SDK",l={unversionedId:"cache/develop/sdks/java/index",id:"cache/develop/sdks/java/index",title:"Momento Java SDK",description:"Information about the Momento Java SDK",source:"@site/docs/cache/develop/sdks/java/index.md",sourceDirName:"cache/develop/sdks/java",slug:"/cache/develop/sdks/java/",permalink:"/cache/develop/sdks/java/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/java/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Momento Java SDK",pagination_prev:null,sidebar_label:"Java",description:"Information about the Momento Java SDK"},sidebar:"tutorialSidebar",next:{title:"Cheat Sheet",permalink:"/cache/develop/sdks/java/cheat-sheet"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-java-sdk"},"Momento Java SDK"),(0,r.kt)("img",{src:"/img/java.png",width:"90%",alt:"a picture of abstract shapes with a coffee mug for java."}),(0,r.kt)("p",null,"Welcome to the Momento Java SDK documentation!"),(0,r.kt)("p",null,"The Momento Java SDK is available via Maven Central: ",(0,r.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.java/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"software.momento.java:sdk")),"."),(0,r.kt)("p",null,"The source code can be found on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-java"},"momentohq/client-sdk-java"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"."),(0,r.kt)("li",{parentName:"ul"},"At least the java 8 run time installed"),(0,r.kt)("li",{parentName:"ul"},"mvn or gradle for downloading the sdk")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cache/develop/sdks/java/cheat-sheet"},"Java SDK Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-java/blob/main/examples/README.md"},"Java SDK Examples"),": working example projects that illustrate how to use the Java SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Java SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Java SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("p",null,"COMING SOON"))}u.isMDXComponent=!0}}]);