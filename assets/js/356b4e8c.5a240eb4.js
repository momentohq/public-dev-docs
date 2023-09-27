"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2255],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>l});var a=n(4866),r=n(5162),o=n(614),i=n(7294);const l=e=>{let{js:t,python:n,java:l,go:s,csharp:c,php:u,rust:p,ruby:d,elixir:m,cli:h}=e;return t||n||l||s||c||u||p||d||m||h?i.createElement(a.Z,null,t&&i.createElement(r.Z,{value:"js",label:"JavaScript"},i.createElement(o.Z,{language:"js"},t)),n&&i.createElement(r.Z,{value:"python",label:"Python"},i.createElement(o.Z,{language:"python"},n)),l&&i.createElement(r.Z,{value:"java",label:"Java"},i.createElement(o.Z,{language:"java"},l)),s&&i.createElement(r.Z,{value:"go",label:"Go"},i.createElement(o.Z,{language:"go"},s)),c&&i.createElement(r.Z,{value:"csharp",label:"C#"},i.createElement(o.Z,{language:"csharp"},c)),u&&i.createElement(r.Z,{value:"php",label:"PHP"},i.createElement(o.Z,{language:"php"},u)),p&&i.createElement(r.Z,{value:"rust",label:"Rust"},i.createElement(o.Z,{language:"rust"},p)),d&&i.createElement(r.Z,{value:"ruby",label:"Ruby"},i.createElement(o.Z,{language:"ruby"},d)),m&&i.createElement(r.Z,{value:"elixir",label:"Elixir"},i.createElement(o.Z,{language:"elixir"},m)),h&&i.createElement(r.Z,{value:"cli",label:"CLI"},i.createElement(o.Z,{language:"cli"},h))):null}},9957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=(n(3404),n(9720));const i={sidebar_position:4,sidebar_label:"Develop",sidebar_class_name:"sidebar-item-api-reference",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Developing applications with Momento SDKs",s={unversionedId:"topics/develop/index",id:"topics/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/docs/topics/develop/index.md",sourceDirName:"topics/develop",slug:"/topics/develop/",permalink:"/topics/develop/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Develop",sidebar_class_name:"sidebar-item-api-reference",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"topicsSidebar",previous:{title:"Momento Topics",permalink:"/topics/"},next:{title:"API Reference",permalink:"/topics/develop/api-reference/"}},c={},u=[{value:"Constructing a Topics client",id:"constructing-a-topics-client",level:2},{value:"Instantiating credential providers using Momento auth tokens",id:"instantiating-credential-providers-using-momento-auth-tokens",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developing-applications-with-momento-sdks"},"Developing applications with Momento SDKs"),(0,r.kt)("p",null,"Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called auth tokens), how to configure your client, and some basic information about error handling and production readiness."),(0,r.kt)("img",{src:"/img/city.jpg",width:"90%",alt:"a technical illustration on a white background depicting the intersection of speed, ease of use, and security."}),(0,r.kt)("h2",{id:"constructing-a-topics-client"},"Constructing a Topics client"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TopicClient")," is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),", and a default time to live (TTL) value. The default TTL determines how long items using that ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," will be stored in the cache before the cache deletes them."),(0,r.kt)("p",null,"Here is an example of how to construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"TopicClient"),":"),(0,r.kt)(o.X,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:'topic_client = TopicClientAsync(\n    TopicConfigurations.Default.latest(),\n    CredentialProvider.from_environment_variable("MOMENTO_AUTH_TOKEN")\n)',java:"",go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\n    TopicConfigurations.Laptop.latest(), \n    new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")\n);\n',php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"instantiating-credential-providers-using-momento-auth-tokens"},"Instantiating credential providers using Momento auth tokens"),(0,r.kt)("p",null,"You need to provide a Momento auth token when instantiating a Momento client. If you don't have one yet, you can get one from the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),". Once you have a token, provide it to Momento SDKs when you create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),". There are convenient factory methods provided to construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," object, either from an environment variable or from a String. Below is an example of how to instantiate ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," from an environment variable:"),(0,r.kt)(o.X,{js:"CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'});",python:'CredentialProvider.from_environment_variable("MOMENTO_AUTH_TOKEN")',java:'CredentialProvider.fromEnvVar("MOMENTO_AUTH_TOKEN");',go:"",csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",ruby:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,"If you're storing your Momento auth token in a secret manager such as ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secret Manager"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),", or a local config file, you must first retrieve the credentials from there and then instantiate a ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," from a string, like this:"),(0,r.kt)(o.X,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,"For an example of how to retrieve credentials from AWS Secrets Manager, see ",(0,r.kt)("a",{parentName:"p",href:"./develop/integrations/aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager"),"."),(0,r.kt)("p",null,"For general information on Momento authentication, see ",(0,r.kt)("a",{parentName:"p",href:"./develop/authentication"},"our auth page"),"."),(0,r.kt)("p",null,"For more information, see our ",(0,r.kt)("a",{parentName:"p",href:"./develop/api-reference/response-objects"},"Response Objects")," page, and the docs for the specific SDK that you are using (under ",(0,r.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"SDKs")," in the left nav)."))}m.isMDXComponent=!0}}]);