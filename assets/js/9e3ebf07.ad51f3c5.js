"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4220],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(614),a=n(7294);const i=e=>{let{language:t,code:n}=e;return a.createElement(o.Z,{language:t},n)}},7638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),i=(n(3043),n(7235));const c={sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-go",title:"Cheat Sheet for Go",description:"Get started really quickly coding using Go with Momento Cache",pagination_next:null},r="Cheat Sheet for Go with Momento Cache",l={unversionedId:"cache/develop/sdks/go/cheat-sheet",id:"cache/develop/sdks/go/cheat-sheet",title:"Cheat Sheet for Go",description:"Get started really quickly coding using Go with Momento Cache",source:"@site/docs/cache/develop/sdks/go/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/go",slug:"/cache/develop/sdks/go/cheat-sheet",permalink:"/cache/develop/sdks/go/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/go/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-go",title:"Cheat Sheet for Go",description:"Get started really quickly coding using Go with Momento Cache",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/cache/develop/sdks/go/"}},s={},m=[{value:"Install the Momento client library",id:"install-the-momento-client-library",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a CacheClient object",id:"import-libraries-and-create-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],h={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cheat-sheet-for-go-with-momento-cache"},"Cheat Sheet for Go with Momento Cache"),(0,a.kt)("p",null,"If you need to get going quickly with Go and Momento Cache, this page contains the basic API calls you'll need. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-go/tree/main/examples"},"Check the Go SDK examples")," for additional complete, working examples."),(0,a.kt)("h2",{id:"install-the-momento-client-library"},"Install the Momento client library"),(0,a.kt)("p",null,"After you have ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/doc/code#Command"},"created your Go project"),", install the Momento Go SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"go get github.com/momentohq/client-sdk-go\n")),(0,a.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,a.kt)("p",null,"You'll need a ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"Momento API key")," to authenticate with Momento.  You can get one from the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,a.kt)("h2",{id:"import-libraries-and-create-a-cacheclient-object"},"Import libraries and create a CacheClient object"),(0,a.kt)("p",null,"First, pull in the necessary imports and set up the main function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "errors"\n    "log"\n    "time"\n\n    "github.com/google/uuid"\n    "github.com/momentohq/client-sdk-go/auth"\n    "github.com/momentohq/client-sdk-go/config"\n    "github.com/momentohq/client-sdk-go/config/logger"\n    "github.com/momentohq/client-sdk-go/momento"\n    "github.com/momentohq/client-sdk-go/responses"\n)\n\nfunc main() {\n    fmt.Println("Hello, world.")\n}\n')),(0,a.kt)("p",null,"Then instantiate the CacheClient object that will be used to interact with Momento Cache."),(0,a.kt)(i.Z,{language:"go",code:'context := context.Background()\ncredentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := time.Duration(9999)\neagerConnectTimeout := 30 * time.Second\n\nclient, err := momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest(),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,a.kt)("p",null,"Use this function to create a new cache in your account."),(0,a.kt)(i.Z,{language:"go",code:'_, err := client.CreateCache(ctx, &momento.CreateCacheRequest{\n\tCacheName: "cache-name",\n})\nif err != nil {\n\tpanic(err)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,a.kt)("p",null,"A simple list of the names of caches for the account."),(0,a.kt)(i.Z,{language:"go",code:'resp, err := client.ListCaches(ctx, &momento.ListCachesRequest{})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.ListCachesSuccess:\n\tlog.Printf("Found caches %+v", r.Caches())\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,a.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,a.kt)(i.Z,{language:"go",code:'key := uuid.NewString()\nvalue := uuid.NewString()\nlog.Printf("Setting key: %s, value: %s\\n", key, value)\n_, err := client.Set(ctx, &momento.SetRequest{\n\tCacheName: "cache-name",\n\tKey:       momento.String(key),\n\tValue:     momento.String(value),\n\tTtl:       time.Duration(9999),\n})\nif err != nil {\n\tvar momentoErr momento.MomentoError\n\tif errors.As(err, &momentoErr) {\n\t\tif momentoErr.Code() != momento.TimeoutError {\n\t\t\t// this would represent a client-side timeout, and you could fall back to your original data source\n\t\t} else {\n\t\t\tpanic(err)\n\t\t}\n\t}\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,a.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,a.kt)(i.Z,{language:"go",code:'key := uuid.NewString()\nresp, err := client.Get(ctx, &momento.GetRequest{\n\tCacheName: "cache-name",\n\tKey:       momento.String(key),\n})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.GetHit:\n\tlog.Printf("Lookup resulted in cache HIT. value=%s\\n", r.ValueString())\ncase *responses.GetMiss:\n\tlog.Printf("Look up did not find a value key=%s", key)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"running-the-code"},"Running the code"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"go run")," command to execute the code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"go run main.go\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more code examples, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-go/tree/main/examples"},"Momento Go SDK repo"),"."),(0,a.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")))}u.isMDXComponent=!0}}]);