"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3039],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=p({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??m;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function S(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(m(t),i(n))},g=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(S,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>s});var n=a(4866),r=a(5162),o=a(614),l=a(7294);const s=e=>{let{js:t,python:a,java:s,kotlin:i,go:u,csharp:c,php:m,rust:d,ruby:g,elixir:p,swift:h,dart:b,cli:f}=e;return t||a||s||i||u||c||m||d||g||p||h||b||f?l.createElement(n.Z,null,t&&l.createElement(r.Z,{value:"js",label:"JavaScript"},l.createElement(o.Z,{language:"js"},t)),a&&l.createElement(r.Z,{value:"python",label:"Python"},l.createElement(o.Z,{language:"python"},a)),s&&l.createElement(r.Z,{value:"java",label:"Java"},l.createElement(o.Z,{language:"java"},s)),i&&l.createElement(r.Z,{value:"kotlin",label:"Kotlin"},l.createElement(o.Z,{language:"kotlin"},i)),u&&l.createElement(r.Z,{value:"go",label:"Go"},l.createElement(o.Z,{language:"go"},u)),c&&l.createElement(r.Z,{value:"csharp",label:"C#"},l.createElement(o.Z,{language:"csharp"},c)),m&&l.createElement(r.Z,{value:"php",label:"PHP"},l.createElement(o.Z,{language:"php"},m)),d&&l.createElement(r.Z,{value:"rust",label:"Rust"},l.createElement(o.Z,{language:"rust"},d)),g&&l.createElement(r.Z,{value:"ruby",label:"Ruby"},l.createElement(o.Z,{language:"ruby"},g)),p&&l.createElement(r.Z,{value:"elixir",label:"Elixir"},l.createElement(o.Z,{language:"elixir"},p)),h&&l.createElement(r.Z,{value:"swift",label:"Swift"},l.createElement(o.Z,{language:"swift"},h)),b&&l.createElement(r.Z,{value:"dart",label:"Dart"},l.createElement(o.Z,{language:"dart"},b)),f&&l.createElement(r.Z,{value:"cli",label:"CLI"},l.createElement(o.Z,{language:"cli"},f))):null}},3230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=(a(3404),a(9720));const l={sidebar_position:2,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager."},s="Retrieving a Momento auth token from AWS Secrets Manager",i={unversionedId:"topics/integrations/aws-secrets-manager",id:"topics/integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager.",source:"@site/docs/topics/integrations/aws-secrets-manager.md",sourceDirName:"topics/integrations",slug:"/topics/integrations/aws-secrets-manager",permalink:"/topics/integrations/aws-secrets-manager",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager."},sidebar:"topicsSidebar",previous:{title:"Amazon EventBridge",permalink:"/topics/integrations/lambda-handler"},next:{title:"Patterns"}},u={},c=[{value:"Entry in AWS Secrets Manager",id:"entry-in-aws-secrets-manager",level:2},{value:"Example Code for AWS Secrets Manager",id:"example-code-for-aws-secrets-manager",level:2},{value:"FAQ",id:"faq",level:2}],m={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"retrieving-a-momento-auth-token-from-aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager"),(0,r.kt)("p",null,"It's best practice to securely store your Momento authentication token. If you are using AWS, you can securely store the auth token in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),". With that, only code running with the correct IAM credentials will be able to fetch the auth token and use it to access Momento Cache or Momento Topics."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Just as you should reuse your Momento ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TopicClient")," objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/"},"AWS blog"),".")),(0,r.kt)("h2",{id:"entry-in-aws-secrets-manager"},"Entry in AWS Secrets Manager"),(0,r.kt)("p",null,"When inserting the Momento auth token into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS Secrets Manager",src:a(174).Z,width:"938",height:"254"})),(0,r.kt)("h2",{id:"example-code-for-aws-secrets-manager"},"Example Code for AWS Secrets Manager"),(0,r.kt)(o.X,{js:"",python:"",java:'final Region region = Region.of("us-east-1");\n\n// Create a Secrets Manager client\nfinal SecretsManagerClient client =\n    SecretsManagerClient.builder()\n        .region(region)\n        // make sure to configure aws credentials in order to use the default provider\n        // https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/credentials/DefaultCredentialsProvider.html\n        .credentialsProvider(DefaultCredentialsProvider.create())\n        .build();\n\nfinal GetSecretValueRequest getSecretValueRequest =\n    GetSecretValueRequest.builder().secretId("AUTH_TOKEN_SECRET_NAME").build();\n\nfinal GetSecretValueResponse getSecretValueResponse;\n\ntry {\n  getSecretValueResponse = client.getSecretValue(getSecretValueRequest);\n} catch (Exception e) {\n  // For a list of exceptions thrown, see\n  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n  throw e;\n}\n\nfinal String secret = getSecretValueResponse.secretString();\ntry {\n  // store variable here\n  CredentialProvider.fromString(secret);\n} catch (SdkException e) {\n  throw new RuntimeException(\n      "An error occured while parsing the secrets manager vended" + " authentication token", e);\n}',kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do I have to do this?"),"No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager."))}d.isMDXComponent=!0},174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);