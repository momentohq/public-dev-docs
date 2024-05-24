"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[929],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),c=n(1980),u=n(7392),s=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=v({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=c??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function _(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==i&&(d(t),c(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function C(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(_,(0,a.Z)({},e,t)),r.createElement(C,(0,a.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>i});var a=n(4866),r=n(5162),o=n(614),l=n(7294);const i=e=>{let{js:t,python:n,java:i,kotlin:c,go:u,csharp:s,php:d,rust:m,ruby:p,elixir:v,swift:h,dart:f,cli:g}=e;return t||n||i||c||u||s||d||m||p||v||h||f||g?l.createElement(a.Z,null,t&&l.createElement(r.Z,{value:"js",label:"JavaScript"},l.createElement(o.Z,{language:"js"},t)),n&&l.createElement(r.Z,{value:"python",label:"Python"},l.createElement(o.Z,{language:"python"},n)),i&&l.createElement(r.Z,{value:"java",label:"Java"},l.createElement(o.Z,{language:"java"},i)),c&&l.createElement(r.Z,{value:"kotlin",label:"Kotlin"},l.createElement(o.Z,{language:"kotlin"},c)),u&&l.createElement(r.Z,{value:"go",label:"Go"},l.createElement(o.Z,{language:"go"},u)),s&&l.createElement(r.Z,{value:"csharp",label:"C#"},l.createElement(o.Z,{language:"csharp"},s)),d&&l.createElement(r.Z,{value:"php",label:"PHP"},l.createElement(o.Z,{language:"php"},d)),m&&l.createElement(r.Z,{value:"rust",label:"Rust"},l.createElement(o.Z,{language:"rust"},m)),p&&l.createElement(r.Z,{value:"ruby",label:"Ruby"},l.createElement(o.Z,{language:"ruby"},p)),v&&l.createElement(r.Z,{value:"elixir",label:"Elixir"},l.createElement(o.Z,{language:"elixir"},v)),h&&l.createElement(r.Z,{value:"swift",label:"Swift"},l.createElement(o.Z,{language:"swift"},h)),f&&l.createElement(r.Z,{value:"dart",label:"Dart"},l.createElement(o.Z,{language:"dart"},f)),g&&l.createElement(r.Z,{value:"cli",label:"CLI"},l.createElement(o.Z,{language:"cli"},g))):null}},2626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),o=(n(3404),n(9720));const l={sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},i="Momento SDK\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a",c={unversionedId:"cache/develop/index",id:"cache/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/index.md",sourceDirName:"cache/develop",slug:"/cache/develop/",permalink:"/ja/cache/develop/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"tutorialSidebar",previous:{title:"API Caching",permalink:"/ja/cache/patterns/api-caching"},next:{title:"Authentication",permalink:"/ja/cache/develop/authentication/"}},u={},s=[{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",level:2},{value:"Momento API \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",id:"momento-api-\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-sdk\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a"},"Momento SDK\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a"),(0,r.kt)("p",null,"\u3088\u3046\u3053\u305d \u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u3059\u3079\u3066\u306eSDK\u3067Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a2\u30bb\u30f3\u30d6\u30eb\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u4e00\u822c\u7684\u306a\u69cb\u6210\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento \u306e\u8a8d\u8a3c\u60c5\u5831 (API \u30ad\u30fc\u3068\u547c\u3070\u308c\u308b) \u306e\u63d0\u4f9b\u65b9\u6cd5\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u672c\u756a\u74b0\u5883\u3078\u306e\u5bfe\u5fdc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u60c5\u5831\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," \u306f\u3001Momento \u30b5\u30fc\u30d3\u30b9\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30e1\u30a4\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u3001\u305d\u3057\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL (time to live) \u5024\u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL \u306f\u3001\u305d\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a2\u30a4\u30c6\u30e0\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u524a\u9664\u3055\u308c\u308b\u307e\u3067\u306e\u4fdd\u5b58\u671f\u9593\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002Set` \u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u305d\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e TTL \u5024\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,r.kt)("a",{parentName:"p",href:"./learn/how-it-works/expire-data-with-ttl"},"Momento Cache \u306b\u304a\u3051\u308b Time-to-Live (TTL) \u306b\u3088\u308b\u30c7\u30fc\u30bf\u306e\u6709\u52b9\u671f\u9650")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," \u306e\u4f5c\u6210\u4f8b\u3092\u793a\u3057\u307e\u3059\uff1a"),(0,r.kt)(o.X,{js:"return await CacheClient.create({\n  configuration: Configurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n  defaultTtlSeconds: 60,\n});",python:'await CacheClientAsync.create(\n    Configurations.Laptop.latest(),\n    CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),\n    timedelta(seconds=60),\n)\n\n',java:'try (CacheClient cacheClient =\n    CacheClient.create(\n        CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n        Configurations.Laptop.v1(),\n        Duration.ofSeconds(60))) {\n  // ...\n}',kotlin:'CacheClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), Configurations.Laptop.latest, 60.seconds\n).use { cacheClient ->\n    //...\n}',go:'context := context.Background()\ncredentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := time.Duration(9999)\neagerConnectTimeout := 30 * time.Second\n\nclient, err := momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest(),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)',csharp:"",php:'\nnew CacheClient(\n    Laptop::latest(),\n    CredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN"),\n    60\n);',rust:'  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',ruby:"",elixir:'config = Momento.Configurations.Laptop.latest()\n\ncredential_provider = Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")\ndefault_ttl_seconds = 60.0\nMomento.CacheClient.create!(config, credential_provider, default_ttl_seconds)',swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let cacheClient = CacheClient(\n        configuration: CacheClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider,\n        defaultTtlSeconds: 10\n    )\n} catch {\n    print("Unable to create cache client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final cacheClient = CacheClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      CacheClientConfigurations.latest(),\n      Duration(seconds: 30));\n} catch (e) {\n  print("Unable to create cache client: $e");\n  exit(1);\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"momento-api-\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"},"Momento API \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"),(0,r.kt)("p",null,"Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u969b\u306b\u3001Momento API\u30ad\u30fc\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u3060\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console")," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b Momento SDK \u306b\u30c8\u30fc\u30af\u30f3\u3092\u6e21\u3059\u3002\u74b0\u5883\u5909\u6570\u307e\u305f\u306f\u6587\u5b57\u5217\u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30d5\u30a1\u30af\u30c8\u30ea\u30e1\u30bd\u30c3\u30c9\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u74b0\u5883\u5909\u6570\u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059\uff1a"),(0,r.kt)(o.X,{js:"CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'});",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:"",csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",ruby:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,"Momento\u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secret Manager"),"\u3084",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),"\u306a\u3069\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u3084\u30ed\u30fc\u30ab\u30eb\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u307e\u305a\u305d\u3053\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u6b21\u306e\u3088\u3046\u306b\u6587\u5b57\u5217\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),"\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,r.kt)(o.X,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:"",csharp:"",php:"",rust:'  let _credential_provider = CredentialProvider::from_string("my-api-key".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',ruby:"",elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,"AWS Secrets Manager \u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"./develop/integrations/aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"Momento \u8a8d\u8a3c\u306b\u95a2\u3059\u308b\u4e00\u822c\u7684\u306a\u60c5\u5831\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"./develop/authentication"},"\u8a8d\u8a3c\u306e\u30da\u30fc\u30b8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"./develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u306e\u30da\u30fc\u30b8\u3084\u3001\u4f7f\u7528\u3057\u3066\u3044\u308bSDK\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8(\u5de6\u30ca\u30d3\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"SDKs")," \u306e\u4e0b)\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);