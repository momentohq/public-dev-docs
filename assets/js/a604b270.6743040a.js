"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3779],{987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(4848),r=n(8453),s=(n(2821),n(503));const a={sidebar_position:3,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Storage in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Storage.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","examples","resources","getting started","quick start","server-side","java","jvm"]},i="Getting Started with Momento Storage in Java",l={id:"platform/sdks/java/storage",title:"Getting started with Momento Storage in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Storage.",source:"@site/docs/platform/sdks/java/storage.mdx",sourceDirName:"platform/sdks/java",slug:"/platform/sdks/java/storage",permalink:"/platform/sdks/java/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/java/storage.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Storage in Java",description:"Learn the basic building blocks for writing Java code to interact with Momento Storage.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","examples","resources","getting started","quick start","server-side","java","jvm"]},sidebar:"platformSidebar",previous:{title:"Topics",permalink:"/platform/sdks/java/topics"},next:{title:"Kotlin",permalink:"/platform/sdks/kotlin/"}},c={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and connect to return a StorageClient object",id:"import-libraries-and-connect-to-return-a-storageclient-object",level:2},{value:"Create a new store in Momento Storage",id:"create-a-new-store-in-momento-storage",level:2},{value:"List the names of existing stores in your account",id:"list-the-names-of-existing-stores-in-your-account",level:2},{value:"Write an item to a store",id:"write-an-item-to-a-store",level:2},{value:"Read an item from a store",id:"read-an-item-from-a-store",level:2},{value:"Running the code",id:"running-the-code",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getting-started-with-momento-storage-in-java",children:"Getting Started with Momento Storage in Java"})}),"\n",(0,o.jsxs)(t.p,{children:["If you need to get going quickly with Java and Momento Storage, this page contains the basic API calls you'll need. ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-java/tree/main/examples",children:"Check the Java SDK examples"})," for complete, working examples including build configuration files."]}),"\n",(0,o.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,o.jsxs)(t.p,{children:["The Momento SDK is available on Maven Central: ",(0,o.jsx)(t.a,{href:"https://central.sonatype.com/artifact/software.momento.java/sdk",children:"`software.momento.java/sdk"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Visit ",(0,o.jsx)(t.a,{href:"https://central.sonatype.com/artifact/software.momento.java/sdk",children:"Maven Central"})," to find the latest available version of the SDK."]})}),"\n",(0,o.jsx)(t.p,{children:"Install the client library in an existing Java project:"}),"\n",(0,o.jsx)(t.h3,{id:"gradle",children:"Gradle"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'implementation("software.momento.java:sdk:1.x.x")\n'})}),"\n",(0,o.jsx)(t.h3,{id:"maven",children:"Maven"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>software.momento.java</groupId>\n    <artifactId>sdk</artifactId>\n    <version>1.x.x</version>\n</dependency>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/api-keys",children:"Momento Web Console"}),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"import-libraries-and-connect-to-return-a-storageclient-object",children:"Import libraries and connect to return a StorageClient object"}),"\n",(0,o.jsx)(t.p,{children:"This code sets up the main function, the necessary imports,  and the StorageClient instantiation that each of the other functions will need to call."}),"\n",(0,o.jsx)(s.F,{language:"java",code:'package momento.client.example.doc_examples;\n\nimport momento.sdk.PreviewStorageClient;\nimport momento.sdk.auth.CredentialProvider;\nimport momento.sdk.config.StorageConfigurations;\n\npublic class CheatSheet {\n  public static void main(String[] args) {\n    try (final var storageClient =\n        new PreviewStorageClient(\n            CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n            StorageConfigurations.Laptop.latest())) {\n      // ...\n    }\n  }\n}\n'}),"\n",(0,o.jsx)(t.h2,{id:"create-a-new-store-in-momento-storage",children:"Create a new store in Momento Storage"}),"\n",(0,o.jsx)(t.p,{children:"Use this function to create a new store in your account."}),"\n",(0,o.jsx)(s.F,{language:"java",code:'final CreateStoreResponse response = storageClient.createStore("test-store").join();\nif (response instanceof CreateStoreResponse.Success) {\n  System.out.println("Store \'test-store\' created");\n} else if (response instanceof CreateStoreResponse.Error error) {\n  if (error.getCause() instanceof StoreAlreadyExistsException) {\n    System.out.println("Store \'test-store\' already exists");\n  } else {\n    throw new RuntimeException(\n        "An error occurred while attempting to create store \'test-store\': "\n            + error.getErrorCode(),\n        error);\n  }\n}'}),"\n",(0,o.jsx)(t.h2,{id:"list-the-names-of-existing-stores-in-your-account",children:"List the names of existing stores in your account"}),"\n",(0,o.jsx)(t.p,{children:"A simple list of the names of stores for the account."}),"\n",(0,o.jsx)(s.F,{language:"java",code:'final ListStoresResponse response = storageClient.listStores().join();\nif (response instanceof ListStoresResponse.Success success) {\n  final String stores =\n      success.getStores().stream().map(StoreInfo::getName).collect(Collectors.joining("\\n"));\n  System.out.println("Stores:\\n" + stores);\n} else if (response instanceof ListStoresResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to list stores: " + error.getErrorCode(), error);\n}'}),"\n",(0,o.jsx)(t.h2,{id:"write-an-item-to-a-store",children:"Write an item to a store"}),"\n",(0,o.jsx)(t.p,{children:"A simple example of doing a put operation."}),"\n",(0,o.jsx)(s.F,{language:"java",code:'// this example illustrates how to store a String value\nfinal PutResponse response = storageClient.put("test-store", "test-key", "test-value").join();\nif (response instanceof PutResponse.Success) {\n  System.out.println("Key \'test-key\' stored successfully");\n} else if (response instanceof PutResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to store key \'test-key\' in store \'test-store\': "\n          + error.getErrorCode(),\n      error);\n}\n\n// Momento Storage also supports storing values of type byte[], long, and double:\nbyte[] bytesValue = "test-byte-array-value".getBytes(StandardCharsets.UTF_8);\nstorageClient.put("test-store", "test-byte-array-key", bytesValue).join();\nstorageClient.put("test-store", "test-integer-key", 42L).join();\nstorageClient.put("test-store", "test-double-key", 42.0).join();'}),"\n",(0,o.jsx)(t.h2,{id:"read-an-item-from-a-store",children:"Read an item from a store"}),"\n",(0,o.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a store."}),"\n",(0,o.jsx)(s.F,{language:"java",code:'final GetResponse response = storageClient.get("test-store", "test-key").join();\n\n// simplified style to access the value, if you\'re confident the value exists and you know the\n// type.\n// The optionals in this chain will throw exceptions when you call `.get()` if the item did not\n// exist in the store, or is another type besides a String\nfinal String value = response.valueWhenFound().get().getString().get();\n\n// Or, you can use pattern-matching for more production-safe code:\nif (response instanceof GetResponse.Found found) {\n  // if you know the value is a String:\n  String stringValue =\n      found\n          .value()\n          .getString()\n          .orElseThrow(() -> new RuntimeException("Value was not a String!"));\n  // if you don\'t know the type of the value:\n  switch (found.value().getType()) {\n    case STRING -> System.out.println("String value: " + found.value().getString().get());\n    case BYTE_ARRAY -> System.out.println(\n        "Byte array value: " + found.value().getByteArray().get());\n    case LONG -> System.out.println("Long value: " + found.value().getLong().get());\n    case DOUBLE -> System.out.println("Double value: " + found.value().getDouble().get());\n  }\n} else if (response instanceof GetResponse.NotFound) {\n  System.out.println("Key \'test-key\' was not found in store \'test-store\'");\n} else if (response instanceof GetResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to get key \'test-key\' from store \'test-store\': "\n          + error.getErrorCode(),\n      error);\n}'}),"\n",(0,o.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,o.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-java/tree/main/examples",children:"Java SDK github repo examples directory"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,o.jsx)(t.a,{href:"/storage/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var o=n(1432),r=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,r.jsx)(o.A,{language:t,children:n})}}}]);