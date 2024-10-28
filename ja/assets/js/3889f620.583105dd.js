"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7817],{51552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=t(74848),i=t(28453);const o={sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","python","asyncio"]},c="Getting Started with Momento Cache in Python",r={id:"platform/sdks/python/cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",source:"@site/docs/platform/sdks/python/cache.md",sourceDirName:"platform/sdks/python",slug:"/platform/sdks/python/cache",permalink:"/ja/platform/sdks/python/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/python/cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","python","asyncio"]},sidebar:"platformSidebar",previous:{title:"Python",permalink:"/ja/platform/sdks/python/"},next:{title:"Topics",permalink:"/ja/platform/sdks/python/topics"}},s={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and connect to return a CacheClient object",id:"import-libraries-and-connect-to-return-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"Get list of existing caches in your account",id:"get-list-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Increment the value of an item in a cache",id:"increment-the-value-of-an-item-in-a-cache",level:2},{value:"Notes of usage",id:"notes-of-usage",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started-with-momento-cache-in-python",children:"Getting Started with Momento Cache in Python"})}),"\n",(0,a.jsx)(n.p,{children:"If you need to get going quickly with Python and Momento Cache, this page contains the basic API calls you'll need."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you combine all of the functions on this page into one python file, you'd have a central collection of functions you can import and call from other python code. In addition, if you are using this code in production you might look to replace the print() calls with ones using the logging library (",(0,a.jsx)(n.code,{children:"import logging"}),") in python. ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(52832).A+"",children:"Click here"})," to see the class file with all definitions in it."]})}),"\n",(0,a.jsx)(n.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,a.jsxs)(n.p,{children:["The Momento Python SDK is available on ",(0,a.jsxs)(n.a,{href:"https://pypi.org/project/momento/",children:["pypi as ",(0,a.jsx)(n.code,{children:"momento"})]}),"."]}),"\n",(0,a.jsx)(n.p,{children:"To install in your Python application via pip, use:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install momento\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,a.jsxs)(n.p,{children:["You'll need a ",(0,a.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"})," to authenticate with Momento. You can get one, preferably a fine-grained token, from the ",(0,a.jsx)(n.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have a token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"export MOMENTO_API_KEY=<your Momento token here>\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,a.jsx)(n.h2,{id:"import-libraries-and-connect-to-return-a-cacheclient-object",children:"Import libraries and connect to return a CacheClient object"}),"\n",(0,a.jsx)(n.p,{children:"This code sets up the class with the necessary imports, the class definition, and the CacheClient instantiation that each of the other functions will need to call."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from datetime import timedelta\nfrom momento import CacheClient, Configurations, CredentialProvider\nfrom momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement\n\nimport os\n\ndef create_client():\n  momento_api_key = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')\n  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))\n  config = {\n    'configuration': Configurations.Laptop.v1(),\n    'credential_provider': momento_api_key,\n    'default_ttl':  ttl\n  }\n  return CacheClient.create(**config)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,a.jsx)(n.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def create_cache(client, cache_name: str) -> None:\n  resp = client.create_cache(cache_name)\n  match resp:\n    case CreateCache.Success():\n        print("Cache created.")\n    case CreateCache.Error() as error:\n        print(f"Error creating cache: {error.message}")\n    case _ as error:\n        print(f"Unreachable with {error.message}")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"get-list-of-existing-caches-in-your-account",children:"Get list of existing caches in your account"}),"\n",(0,a.jsx)(n.p,{children:"In this example, we use the client function above to get a client object and then use it to list all of the caches for this account."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def list_caches(client) -> None:\n    print("Listing caches:")\n    list_caches_response = client.list_caches()\n    match list_caches_response:\n        case ListCaches.Success() as success:\n            for cache_info in success.caches:\n                print(f"- {cache_info.name!r}")\n        case ListCaches.Error() as error:\n            print(f"Error listing caches: {error.message}")\n        case _:\n            print("Unreachable")\n    print("")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,a.jsx)(n.p,{children:"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def set(client, cache_name, key, value, ttl=None):\n  resp = client.set(cache_name, key, value, ttl)\n  match resp:\n    case CacheSet.Success():\n        pass\n    case CacheSet.Error() as error:\n        print(f"Error setting value: {error.message}")\n    case _:\n        print("Unreachable")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,a.jsx)(n.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def get(client, cache_name, key):\n  resp = client.get(cache_name, key)\n  match resp:\n    case CacheGet.Hit():\n        print("value is " + resp.value_string)\n    case CacheGet.Miss() as error:\n        print(f"Error getting key: {error.message}")\n    case _:\n        print("Unreachable")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"increment-the-value-of-an-item-in-a-cache",children:"Increment the value of an item in a cache"}),"\n",(0,a.jsx)(n.p,{children:"An example of incrementing a value in a key. You can pass in a positive or negative integer."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def incr(client, cache_name, key, value:int = 1):\n  resp = client.increment(cache_name, key, value)\n  match resp:\n    case CacheIncrement.Success():\n        pass\n    case CacheIncrement.Error() as error:\n        print(f"Error incrementing value: {error.message}")\n    case _:\n        print("Unreachable")\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Beyond these basic API calls check out the ",(0,a.jsx)(n.a,{href:"/ja/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})}),"\n",(0,a.jsx)(n.h2,{id:"notes-of-usage",children:"Notes of usage"}),"\n",(0,a.jsxs)(n.p,{children:["For any of these functions, call the ",(0,a.jsx)(n.code,{children:"create_client()"})," function which returns a CacheClient object. Then pass that object into subsequent functions. This way, calls are more efficient as they reuse the CacheClient for multiple calls to Momento. ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(52832).A+"",children:"Click here"})," to see a file with all definitions in it."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},52832:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/MomentoBasics-e45a5a4f32b6f056b3f6568cabbe07b8.py"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);