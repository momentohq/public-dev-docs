"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4124],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var r=i.createContext({}),k=function(t){var e=i.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=k(t.components);return i.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,r=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=k(n),c=o,u=m["".concat(r,".").concat(c)]||m[c]||p[c]||s;return n?i.createElement(u,a(a({ref:e},d),{},{components:n})):i.createElement(u,a({ref:e},d))}));function c(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,a=new Array(s);a[0]=m;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var k=2;k<s;k++)a[k]=n[k];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3643:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>k,metadata:()=>p,toc:()=>c});var i=n(7462),o=n(7294),s=n(3905);const a={card:"card_WUDs",cardLink:"cardLink_rYck",cardContent:"cardContent_UCXZ",imageCardContent:"imageCardContent_E5wX",cardDescription:"cardDescription_S2tZ",cardImage:"cardImage_zjC4",navigationIcon:"navigationIcon_mUHh",alphaTag:"alphaTag_yL43"};var l=n(4497);const r=t=>{let{text:e,link:n,imgSrc:i,altText:s,openInNewTab:r=!1,isAlpha:k=!1}=t;return i&&s?o.createElement("div",{className:a.card},o.createElement("a",{href:n,target:r?"_blank":"_self",className:a.cardLink},o.createElement("div",{className:a.imageCardContent},o.createElement("img",{src:i,alt:s,className:a.image}),k&&o.createElement("span",{className:a.alphaTag},"Alpha")))):o.createElement("div",{className:a.card},o.createElement("a",{href:n,target:r?"_blank":"_self",className:a.cardLink},o.createElement("div",{className:a.cardContent},o.createElement("div",{className:a.cardDescription},e),r?o.createElement(l.xXr,{className:a.navigationIcon}):o.createElement(l.SZ3,{className:a.navigationIcon}))))},k={displayed_sidebar:"topLevelSidebar",title:"Find the right Momento SDK for your language and use case",description:"Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","python","go","php","java","kotlin","android","jvm","rust","ruby","elixir","swift","ios","dart","flutter","dotnet",".net","c#","csharp","c-sharp"]},d="Momento SDKs",p={unversionedId:"sdks/index",id:"sdks/index",title:"Find the right Momento SDK for your language and use case",description:"Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!",source:"@site/docs/sdks/index.md",sourceDirName:"sdks",slug:"/sdks/",permalink:"/sdks/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/index.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"topLevelSidebar",title:"Find the right Momento SDK for your language and use case",description:"Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","python","go","php","java","kotlin","android","jvm","rust","ruby","elixir","swift","ios","dart","flutter","dotnet",".net","c#","csharp","c-sharp"]},sidebar:"topLevelSidebar"},m={},c=[{value:"Client-Side SDKs",id:"client-side-sdks",level:2},{value:"Web SDK (Browser)",id:"web-sdk-browser",level:3},{value:"Swift SDK (iOS)",id:"swift-sdk-ios",level:3},{value:"Kotlin SDK (Android)",id:"kotlin-sdk-android",level:3},{value:"Dart SDK (Flutter)",id:"dart-sdk-flutter",level:3},{value:"Unity (C#)",id:"unity-c",level:3},{value:"Unreal (C++)",id:"unreal-c",level:3},{value:"Server-Side SDKs",id:"server-side-sdks",level:2},{value:"Node.js SDK",id:"nodejs-sdk",level:3},{value:".NET SDK (C#)",id:"net-sdk-c",level:3},{value:"Python SDK",id:"python-sdk",level:3},{value:"Java SDK",id:"java-sdk",level:3},{value:"Kotlin SDK (JVM)",id:"kotlin-sdk-jvm",level:3},{value:"Go SDK",id:"go-sdk",level:3},{value:"PHP SDK",id:"php-sdk",level:3},{value:"Elixir SDK",id:"elixir-sdk",level:3},{value:"Rust SDK",id:"rust-sdk",level:3},{value:"Ruby SDK",id:"ruby-sdk",level:3}],u={toc:c};function x(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"momento-sdks"},"Momento SDKs"),(0,s.kt)("p",null,"Write code to interact with Momento Cache and Momento Topics in your favorite programming language, regardless of whether you are building a web, mobile, or server application!"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Node.js",link:"/sdks/nodejs",imgSrc:"/img/momento-sdk-icons/nodejs.svg",altText:"Node.js Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:".NET",link:"/sdks/dotnet",imgSrc:"/img/momento-sdk-icons/dotnet.svg",altText:".NET Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Python",link:"/sdks/python",imgSrc:"/img/momento-sdk-icons/python.svg",altText:"Python Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Java",link:"/sdks/java",imgSrc:"/img/momento-sdk-icons/java.svg",altText:"Java Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Kotlin",link:"/sdks/kotlin",imgSrc:"/img/momento-sdk-icons/kotlin.svg",altText:"Kotlin Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Go",link:"/sdks/go",imgSrc:"/img/momento-sdk-icons/go.svg",altText:"Go Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"PHP",link:"/sdks/php",imgSrc:"/img/momento-sdk-icons/php.svg",altText:"PHP Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Elixir",link:"/sdks/elixir",imgSrc:"/img/momento-sdk-icons/elixer.svg",altText:"Elixir Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Rust",link:"/sdks/rust",imgSrc:"/img/momento-sdk-icons/rust.svg",altText:"Rust Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Ruby",link:"/sdks/ruby",imgSrc:"/img/momento-sdk-icons/ruby.svg",altText:"Ruby Icon",mdxType:"LinkButton"})),(0,s.kt)("h2",{id:"client-side-sdks"},"Client-Side SDKs"),(0,s.kt)("p",null,"Momento client-side SDKs allow you to interact with Momento Cache and Momento Topics directly from your web or mobile application; no server-side infrastructure required! Create chat applications and other messaging features that allow your clients to communicate with one another with only a few lines of code!"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Unity SDK",link:"/sdks/unity",imgSrc:"/img/momento-sdk-icons/unity-sdk.svg",altText:"Unity",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Unreal",link:"/sdks/unreal",imgSrc:"/img/momento-sdk-icons/unreal.svg",altText:"Unreal",isAlpha:!0,mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Web SDK",link:"/sdks/web",imgSrc:"/img/momento-sdk-icons/web-sdk.svg",altText:"Web Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Swift SDK",link:"/sdks/swift",imgSrc:"/img/momento-sdk-icons/ios.svg",altText:"iOS Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Kotlin SDK",link:"/sdks/kotlin",imgSrc:"/img/momento-sdk-icons/android.svg",altText:"Android Icon",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Dart SDK",link:"/sdks/dart",imgSrc:"/img/momento-sdk-icons/flutter-dart.svg",altText:"Flutter Icon",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"web-sdk-browser"},"Web SDK (Browser)"),(0,s.kt)("p",null,"The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript."),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/web",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Style Guide",link:"/sdks/nodejs/style-guide.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/nodejs/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/nodejs/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"API Tokens",link:"/sdks/web#credentials-for-browsers",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://www.npmjs.com/package/@gomomento/sdk-web",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-javascript",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"swift-sdk-ios"},"Swift SDK (iOS)"),(0,s.kt)("p",null,"Build native iOS applications using the Momento Swift SDK."),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/swift",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/swift/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/swift/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://github.com/momentohq/client-sdk-swift/releases",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-swift",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"kotlin-sdk-android"},"Kotlin SDK (Android)"),(0,s.kt)("p",null,"Build native Android applications using the Momento Kotlin SDK."),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/kotlin",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/kotlin/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/kotlin/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-kotlin",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"dart-sdk-flutter"},"Dart SDK (Flutter)"),(0,s.kt)("p",null,"Use Momento Cache and Topics in your Flutter applications, allowing you to target browser, iOS, and Android with a single code base."),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/dart",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/dart/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/dart/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-dart/tree/main/example",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://pub.dev/packages/momento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-dart",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"unity-c"},"Unity (C#)"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/unity",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"unreal-c"},"Unreal (C++)"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/unreal",mdxType:"LinkButton"})),(0,s.kt)("h2",{id:"server-side-sdks"},"Server-Side SDKs"),(0,s.kt)("p",null,"Momento server-side SDKs allow you to take advantage of Momento's low-latency Cache and Topics services from your back-end application. The Momento clients are tuned to provide the best possible performance and throughput while requiring far fewer TCP connections than many other cache client libraries."),(0,s.kt)("h3",{id:"nodejs-sdk"},"Node.js SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/nodejs",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Style Guide",link:"/sdks/nodejs/style-guide.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/nodejs/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/nodejs/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Compression",link:"/sdks/nodejs/compression.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-nodejs/tree/main/examples/nodejs",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://www.npmjs.com/package/@gomomento/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-javascript",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"net-sdk-c"},".NET SDK (C#)"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/dotnet",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/dotnet/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/dotnet/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://www.nuget.org/packages/Momento.Sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-dotnet",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"python-sdk"},"Python SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/python",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/python/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/python/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-python/tree/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://pypi.org/project/momento/",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-python",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"java-sdk"},"Java SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/java",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/java/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/java/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-java/tree/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-java",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"kotlin-sdk-jvm"},"Kotlin SDK (JVM)"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/kotlin",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/kotlin/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/kotlin/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-kotlin",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"go-sdk"},"Go SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/go",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/go/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Topics",link:"/sdks/go/topics.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://github.com/momentohq/client-sdk-go/releases",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-go",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"php-sdk"},"PHP SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/php",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/php/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-php/blob/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://packagist.org/packages/momentohq/client-sdk-php",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-php",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"elixir-sdk"},"Elixir SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/elixir",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Cache",link:"/sdks/elixir/cache.html",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-elixir/blob/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://hex.pm/packages/gomomento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-elixir",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"rust-sdk"},"Rust SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/rust",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-rust/blob/main/example",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://crates.io/crates/momento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-rust",openInNewTab:"true",mdxType:"LinkButton"})),(0,s.kt)("h3",{id:"ruby-sdk"},"Ruby SDK"),(0,s.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px"}},(0,s.kt)(r,{text:"Overview",link:"/sdks/ruby",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Examples",link:"https://github.com/momentohq/client-sdk-ruby/blob/main/examples",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Packages",link:"https://rubygems.org/gems/momento",openInNewTab:"true",mdxType:"LinkButton"}),(0,s.kt)(r,{text:"Source Code",link:"https://github.com/momentohq/client-sdk-ruby",openInNewTab:"true",mdxType:"LinkButton"})))}x.isMDXComponent=!0}}]);