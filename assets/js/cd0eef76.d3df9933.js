"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3859],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>i});var a=o(614),n=o(7294);const i=e=>{let{language:t,code:o}=e;return n.createElement(a.Z,{language:t},o)}},2180:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=o(7462),n=(o(7294),o(3905)),i=(o(3043),o(7235));const r={sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-elixir",title:"Cheat Sheet for Elixir",description:"Get started really quickly coding using Elixir with Momento Cache"},c="Cheat Sheet for Elixir with Momento Cache",l={unversionedId:"cache/develop/sdks/elixir/cheat-sheet",id:"cache/develop/sdks/elixir/cheat-sheet",title:"Cheat Sheet for Elixir",description:"Get started really quickly coding using Elixir with Momento Cache",source:"@site/docs/cache/develop/sdks/elixir/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/elixir",slug:"/cache/develop/sdks/elixir/cheat-sheet",permalink:"/cache/develop/sdks/elixir/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/elixir/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-elixir",title:"Cheat Sheet for Elixir",description:"Get started really quickly coding using Elixir with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Elixir",permalink:"/cache/develop/sdks/elixir/"},next:{title:"PHP",permalink:"/cache/develop/sdks/php/"}},s={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your auth token",id:"set-up-your-auth-token",level:2},{value:"Set up a CacheClient",id:"set-up-a-cacheclient",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:h},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cheat-sheet-for-elixir-with-momento-cache"},"Cheat Sheet for Elixir with Momento Cache"),(0,n.kt)("p",null,"If you need to get going quickly with Elixir and Momento Cache, this page contains the basic API calls you'll need. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples"},"Check the Elixir SDK examples")," for complete, working examples."),(0,n.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,n.kt)("p",null,"The latest version of the Momento Elixir SDK is available on ",(0,n.kt)("a",{parentName:"p",href:"https://hex.pm/packages/gomomento"},"Hex"),"."),(0,n.kt)("h2",{id:"set-up-your-auth-token"},"Set up your auth token"),(0,n.kt)("p",null,"You'll need a Momento auth token to authenticate with Momento.  You can get one from the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n")),(0,n.kt)("h2",{id:"set-up-a-cacheclient"},"Set up a CacheClient"),(0,n.kt)("p",null,"This code creates the CacheClient struct that each of the other functions requires."),(0,n.kt)(i.Z,{language:"elixir",code:'alias Momento.CacheClient\n\nconfig = Momento.Configurations.Laptop.latest()\ncredential_provider = Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")\ndefault_ttl_seconds = 60.0\nclient = CacheClient.create!(config, credential_provider, default_ttl_seconds)\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,n.kt)("p",null,"Use this function to create a new cache in your account."),(0,n.kt)(i.Z,{language:"elixir",code:'case Momento.CacheClient.create_cache(client, "test-cache") do\n  {:ok, _} ->\n    IO.puts("Cache \'test-cache\' created")\n\n  :already_exists ->\n    :ok\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to create cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,n.kt)("p",null,"A simple list of the names of caches for the account."),(0,n.kt)(i.Z,{language:"elixir",code:'case Momento.CacheClient.list_caches(client) do\n  {:ok, result} ->\n    IO.puts("Caches:")\n    IO.inspect(result.caches)\n\n  {:error, error} ->\n    IO.puts("An error occurred while attempting to list caches: #{error.error_code}")\n    raise error\nend',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,n.kt)("p",null,"A simple example of doing a set operation. In the CacheClient.set() call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,n.kt)(i.Z,{language:"elixir",code:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,n.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,n.kt)(i.Z,{language:"elixir",code:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend",mdxType:"SdkExampleCodeBlockImpl"}),(0,n.kt)("h2",{id:"running-the-code"},"Running the code"),(0,n.kt)("p",null,"You can find complete, working examples in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples"},"Elixir SDK GitHub repo examples directory"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,n.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")))}u.isMDXComponent=!0}}]);