"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6067],{1013:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(4848),t=r(8453),s=(r(1441),r(5347));const o={sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento API Key in AWS Secrets Manager."},i="Retrieving a Momento API Key from AWS Secrets Manager",l={id:"cache/integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento API Key in AWS Secrets Manager.",source:"@site/docs/cache/integrations/aws-secrets-manager.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/aws-secrets-manager",permalink:"/cache/integrations/aws-secrets-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento API Key in AWS Secrets Manager."},sidebar:"cacheSidebar",previous:{title:"Laravel",permalink:"/cache/integrations/momento-cache-laravel-php"},next:{title:"Bulk data writing",permalink:"/cache/integrations/bulk-writing-from-redis-json-csv"}},c={},d=[{value:"Entry in AWS Secrets Manager",id:"entry-in-aws-secrets-manager",level:2},{value:"Example Code for AWS Secrets Manager",id:"example-code-for-aws-secrets-manager",level:2},{value:"FAQ",id:"faq",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,t.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"retrieving-a-momento-api-key-from-aws-secrets-manager",children:"Retrieving a Momento API Key from AWS Secrets Manager"})}),"\n",(0,a.jsxs)(n.p,{children:["It's best practice to securely store your Momento API Key. If you are using AWS, you can securely store the auth token in ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"}),". With that, only code running with the correct IAM credentials will be able to fetch the API key and use it to access Momento Cache or Momento Topics."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Just as you should reuse your Momento ",(0,a.jsx)(n.code,{children:"CacheClient"})," and ",(0,a.jsx)(n.code,{children:"TopicClient"})," objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/",children:"AWS blog"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"entry-in-aws-secrets-manager",children:"Entry in AWS Secrets Manager"}),"\n",(0,a.jsx)(n.p,{children:"When inserting the Momento API key into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"AWS Secrets Manager",src:r(5200).A+"",width:"938",height:"254"})}),"\n",(0,a.jsx)(n.h2,{id:"example-code-for-aws-secrets-manager",children:"Example Code for AWS Secrets Manager"}),"\n",(0,a.jsx)(s.r,{js:"",python:"",java:'final Region region = Region.of("us-east-1");\n\n// Create a Secrets Manager client\nfinal SecretsManagerClient client =\n    SecretsManagerClient.builder()\n        .region(region)\n        // make sure to configure aws credentials in order to use the default provider\n        // https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/credentials/DefaultCredentialsProvider.html\n        .credentialsProvider(DefaultCredentialsProvider.create())\n        .build();\n\nfinal GetSecretValueRequest getSecretValueRequest =\n    GetSecretValueRequest.builder().secretId("AUTH_TOKEN_SECRET_NAME").build();\n\nfinal GetSecretValueResponse getSecretValueResponse;\n\ntry {\n  getSecretValueResponse = client.getSecretValue(getSecretValueRequest);\n} catch (Exception e) {\n  // For a list of exceptions thrown, see\n  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n  throw e;\n}\n\nfinal String secret = getSecretValueResponse.secretString();\ntry {\n  // store variable here\n  CredentialProvider.fromString(secret);\n} catch (SdkException e) {\n  throw new RuntimeException(\n      "An error occured while parsing the secrets manager vended" + " authentication token", e);\n}',kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,a.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)("summary",{children:"Do I have to do this?"}),(0,a.jsx)(n.p,{children:"No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager."})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1441:(e,n,r)=>{r(6540)},5347:(e,n,r)=>{r.d(n,{r:()=>j});var a=r(1470),t=r(9365),s=r(1432),o=(r(6540),r(7293)),i=r(4848);const l="https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts",c="https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py",d="https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java",h="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt",m="https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go",p="https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs",u="https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php",g="https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs",x="https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs",b="https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift",f="https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart",j=e=>{let{js:n,python:r,java:j,kotlin:A,go:S,csharp:y,php:v,rust:k,ruby:w,elixir:M,swift:_,dart:W,cli:P}=e;return n||r||j||A||S||y||v||k||w||M||_||W||P?(0,i.jsxs)(a.A,{children:[n&&(0,i.jsxs)(t.A,{value:"js",label:"JavaScript",children:[(0,i.jsx)(s.A,{language:"js",children:n}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),r&&(0,i.jsxs)(t.A,{value:"python",label:"Python",children:[(0,i.jsx)(s.A,{language:"python",children:r}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),j&&(0,i.jsxs)(t.A,{value:"java",label:"Java",children:[(0,i.jsx)(s.A,{language:"java",children:j}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),A&&(0,i.jsxs)(t.A,{value:"kotlin",label:"Kotlin",children:[(0,i.jsx)(s.A,{language:"kotlin",children:A}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),S&&(0,i.jsxs)(t.A,{value:"go",label:"Go",children:[(0,i.jsx)(s.A,{language:"go",children:S}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),y&&(0,i.jsxs)(t.A,{value:"csharp",label:"C#",children:[(0,i.jsx)(s.A,{language:"csharp",children:y}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),v&&(0,i.jsxs)(t.A,{value:"php",label:"PHP",children:[(0,i.jsx)(s.A,{language:"php",children:v}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),k&&(0,i.jsxs)(t.A,{value:"rust",label:"Rust",children:[(0,i.jsx)(s.A,{language:"rust",children:k}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),w&&(0,i.jsx)(t.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(s.A,{language:"ruby",children:w})}),M&&(0,i.jsxs)(t.A,{value:"elixir",label:"Elixir",children:[(0,i.jsx)(s.A,{language:"elixir",children:M}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),_&&(0,i.jsxs)(t.A,{value:"swift",label:"Swift",children:[(0,i.jsx)(s.A,{language:"swift",children:_}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),W&&(0,i.jsxs)(t.A,{value:"dart",label:"Dart",children:[(0,i.jsx)(s.A,{language:"dart",children:W}),(0,i.jsxs)(o.A,{type:"info",children:["Full example code and imports can be found ",(0,i.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"here"})]})]}),P&&(0,i.jsx)(t.A,{value:"cli",label:"CLI",children:(0,i.jsx)(s.A,{language:"cli",children:P})})]}):null}},5200:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);