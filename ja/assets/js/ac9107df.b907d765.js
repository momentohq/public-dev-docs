"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4768],{4991:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(4848),t=o(8453),r=(o(2821),o(503));const i={sidebar_position:6,sidebar_label:"Compression",displayed_sidebar:"platformSidebar",title:"Using compression in your Momento Node.js code",description:"Learn how to compress your data when using the Momento Node.js SDK",keywords:["momento","cache","configuration","sdk","production ready","typescript","node.js","nodejs","javascript","compression","gzip","zstd"]},a="Using Compression in the Momento Node.js SDK",c={id:"platform/sdks/nodejs/compression",title:"Using compression in your Momento Node.js code",description:"Learn how to compress your data when using the Momento Node.js SDK",source:"@site/docs/platform/sdks/nodejs/compression.mdx",sourceDirName:"platform/sdks/nodejs",slug:"/platform/sdks/nodejs/compression",permalink:"/ja/platform/sdks/nodejs/compression",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/nodejs/compression.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Compression",displayed_sidebar:"platformSidebar",title:"Using compression in your Momento Node.js code",description:"Learn how to compress your data when using the Momento Node.js SDK",keywords:["momento","cache","configuration","sdk","production ready","typescript","node.js","nodejs","javascript","compression","gzip","zstd"]},sidebar:"platformSidebar",previous:{title:"Storage",permalink:"/ja/platform/sdks/nodejs/storage"},next:{title:"Observability",permalink:"/ja/platform/sdks/nodejs/observability"}},d={},l=[{value:"Why Compression?",id:"why-compression",level:2},{value:"Enabling Compression",id:"enabling-compression",level:2},{value:"Compressing your data",id:"compressing-your-data",level:2},{value:"Automatic Decompression",id:"automatic-decompression",level:2},{value:"More Examples",id:"more-examples",level:2}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"using-compression-in-the-momento-nodejs-sdk",children:"Using Compression in the Momento Node.js SDK"})}),"\n",(0,n.jsx)(s.h2,{id:"why-compression",children:"Why Compression?"}),"\n",(0,n.jsx)(s.p,{children:"If your cache data consists of large string values, especially those that can be repetitive like JSON, enabling client-side\ncompression may reduce the size of the data that you are transferring to and from Momento by as much as 90%. This can\nresult in significant cost savings due to reduced network traffic and storage costs."}),"\n",(0,n.jsx)(s.h2,{id:"enabling-compression",children:"Enabling Compression"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"get"}),"/",(0,n.jsx)(s.code,{children:"set"})," and ",(0,n.jsx)(s.code,{children:"getBatch"}),"/",(0,n.jsx)(s.code,{children:"setBatch"})," cache methods in the Momento Node.js SDK support compression. To avoid requiring\nadditional dependencies in the main SDK, compression support is provided by installing an extension package. We provide\ntwo different extension packages that you can choose from, both available on npmjs.com:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@gomomento/sdk-nodejs-compression",children:"@gomomento/sdk-nodejs-compression"})," - the default, recommended compression extension, which is based on ",(0,n.jsx)(s.code,{children:"gzip"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@gomomento/sdk-nodejs-compression-zstd",children:"@gomomento/sdk-nodejs-compression-zstd"})," - an alternative compression extension, based on ",(0,n.jsx)(s.code,{children:"zstd"}),", for advanced users who\nare willing to tackle a slightly more difficult packaging configuration in exchange for improved performance."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Because ",(0,n.jsx)(s.code,{children:"gzip"})," is available in the node.js standard library, there are no additional dependencies required, so packaging\nyour app will be the same as any other Momento node.js app. The ",(0,n.jsx)(s.code,{children:"zstd"})," extension requires an additional native dependency\nthat is specific to your target platform, so you will need to make sure that your builds are configured to include the\ncorrect dependency for the target architecture."]}),"\n",(0,n.jsxs)(s.p,{children:["In our testing we found that, for typical JSON data being stored in a Momento cache, the compression ratio is very similar\nbetween the ",(0,n.jsx)(s.code,{children:"gzip"})," and ",(0,n.jsx)(s.code,{children:"zstd"})," compression extensions. However, for very large values (100kb or larger), ",(0,n.jsx)(s.code,{children:"zstd"})," can provide\nup to a 20% performance improvement in the time that it takes to compress and decompress the data."]}),"\n",(0,n.jsxs)(s.p,{children:["If you're not sure which extension is right for you, we recommend starting with the default\n",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@gomomento/sdk-nodejs-compression",children:"@gomomento/sdk-nodejs-compression"})," package. You can\nswitch to ",(0,n.jsx)(s.code,{children:"zstd"})," later if you find that you need the additional performance."]}),"\n",(0,n.jsx)(s.p,{children:"To get started with compression, first add the compression extension package to your project:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cli",children:"npm install @gomomento/sdk-nodejs-compression\n"})}),"\n",(0,n.jsx)(s.p,{children:"Once that is installed, you can enable compression by adding a compression strategy to the cache client configuration:"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"Configurations.InRegion.Default.latest().withCompressionStrategy({\n  compressorFactory: CompressorFactory.default(),\n  compressionLevel: CompressionLevel.Balanced,\n});"}),"\n",(0,n.jsx)(s.h2,{id:"compressing-your-data",children:"Compressing your data"}),"\n",(0,n.jsxs)(s.p,{children:["With the dependency installed and the client configured, you can specify ",(0,n.jsx)(s.code,{children:"compress: true"})," when calling set or setBatch to compress that value:"]}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"const result = await cacheClient.set(cacheName, 'test-key', 'test-value', {compress: true});\nswitch (result.type) {\n  case CacheSetResponse.Success:\n    console.log(\"Key 'test-key' stored successfully\");\n    break;\n  case CacheSetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to store key 'test-key' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,n.jsx)(s.h2,{id:"automatic-decompression",children:"Automatic Decompression"}),"\n",(0,n.jsxs)(s.p,{children:["By default, when you enable compression, the SDK also enables automatic decompression. This means that any cache value that\nthe SDK reads via ",(0,n.jsx)(s.code,{children:"get"})," or ",(0,n.jsx)(s.code,{children:"getBatch"})," will be automatically decompressed if it was compressed when it was written. Therefore,\nyou don't need to change any of your existing calls to ",(0,n.jsx)(s.code,{children:"get"})," or ",(0,n.jsx)(s.code,{children:"getBatch"})," to handle compressed data."]}),"\n",(0,n.jsx)(s.p,{children:"If you want to be able to compress data, but don't want the SDK to automatically decompress it, you can also configure that:"}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"Configurations.InRegion.Default.latest().withCompressionStrategy({\n  compressorFactory: CompressorFactory.default(),\n  compressionLevel: CompressionLevel.Balanced,\n  automaticDecompression: AutomaticDecompression.Disabled,\n});"}),"\n",(0,n.jsxs)(s.p,{children:["If automatic decompression is disabled, you can specify ",(0,n.jsx)(s.code,{children:"decompress: true"})," when calling ",(0,n.jsx)(s.code,{children:"get"})," or ",(0,n.jsx)(s.code,{children:"getBatch"})," to tell the\nSDK to decompress that particular value:"]}),"\n",(0,n.jsx)(r.F,{language:"javascript",code:"const result = await cacheClient.get(cacheName, 'test-key', {decompress: true});\nswitch (result.type) {\n  case CacheGetResponse.Miss:\n    console.log(`Key 'test-key' was not found in cache '${cacheName}'`);\n    break;\n  case CacheGetResponse.Hit:\n    console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n    break;\n  case CacheGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,n.jsx)(s.p,{children:"Uncompressed data will be unaffected by the compression configuration."}),"\n",(0,n.jsx)(s.h2,{id:"more-examples",children:"More Examples"}),"\n",(0,n.jsx)(s.p,{children:"Here are some additional examples available in the SDK github repository:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/compression",children:"Working example of using the default compression extension"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsxs)(s.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/compression-zstd",children:["Working example of using the advanced ",(0,n.jsx)(s.code,{children:"zstd"})," compression extension"]})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsxs)(s.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/aws/lambda-examples/advanced-compression",children:["An AWS Lambda example that demonstrates how to package the ",(0,n.jsx)(s.code,{children:"zstd"})," binary for your specific target architecture"]})}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2821:(e,s,o)=>{o(6540)},503:(e,s,o)=>{o.d(s,{F:()=>r});var n=o(1432),t=(o(6540),o(4848));const r=e=>{let{language:s,code:o}=e;return(0,t.jsx)(n.A,{language:s,children:o})}}}]);