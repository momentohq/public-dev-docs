"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","python","asyncio"]},i="Getting Started with Momento Cache in Python",c={unversionedId:"sdks/python/cache",id:"sdks/python/cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",source:"@site/docs/sdks/python/cache.md",sourceDirName:"sdks/python",slug:"/sdks/python/cache",permalink:"/sdks/python/cache",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/python/cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","python","asyncio"]}},s={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and connect to return a CacheClient object",id:"import-libraries-and-connect-to-return-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"Get list of existing caches in your account",id:"get-list-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Increment the value of an item in a cache",id:"increment-the-value-of-an-item-in-a-cache",level:2},{value:"Notes of usage",id:"notes-of-usage",level:2}],h={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-momento-cache-in-python"},"Getting Started with Momento Cache in Python"),(0,o.kt)("p",null,"If you need to get going quickly with Python and Momento Cache, this page contains the basic API calls you'll need."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you combine all of the functions on this page into one python file, you'd have a central collection of functions you can import and call from other python code. In addition, if you are using this code in production you might look to replace the print() calls with ones using the logging library (",(0,o.kt)("inlineCode",{parentName:"p"},"import logging"),") in python. ",(0,o.kt)("a",{target:"_blank",href:n(670).Z},"Click here")," to see the class file with all definitions in it.")),(0,o.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,o.kt)("p",null,"The Momento Python SDK is available on ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/momento/"},"pypi as ",(0,o.kt)("inlineCode",{parentName:"a"},"momento")),"."),(0,o.kt)("p",null,"To install in your Python application via pip, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install momento\n")),(0,o.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,o.kt)("p",null,"You'll need a ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"Momento API key")," to authenticate with Momento. You can get one, preferably a fine-grained token, from the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have a token, store it in an environment variable so that the Momento client can consume it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento token here>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,o.kt)("h2",{id:"import-libraries-and-connect-to-return-a-cacheclient-object"},"Import libraries and connect to return a CacheClient object"),(0,o.kt)("p",null,"This code sets up the class with the necessary imports, the class definition, and the CacheClient instantiation that each of the other functions will need to call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import timedelta\nfrom momento import CacheClient, Configurations, CredentialProvider\nfrom momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement\n\nimport os\n\ndef create_client():\n  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')\n  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))\n  config = {\n    'configuration': Configurations.Laptop.v1(),\n    'credential_provider': momento_auth_token,\n    'default_ttl':  ttl\n  }\n  return CacheClient.create(**config)\n")),(0,o.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,o.kt)("p",null,"Use this function to create a new cache in your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def create_cache(client, cache_name: str) -> None:\n  resp = client.create_cache(cache_name)\n  match resp:\n    case CreateCache.Success():\n        print("Cache created.")\n    case CreateCache.Error() as error:\n        print(f"Error creating cache: {error.message}")\n    case _ as error:\n        print(f"Unreachable with {error.message}")\n')),(0,o.kt)("h2",{id:"get-list-of-existing-caches-in-your-account"},"Get list of existing caches in your account"),(0,o.kt)("p",null,"In this example, we use the client function above to get a client object and then use it to list all of the caches for this account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def list_caches(client) -> None:\n    print("Listing caches:")\n    list_caches_response = client.list_caches()\n    match list_caches_response:\n        case ListCaches.Success() as success:\n            for cache_info in success.caches:\n                print(f"- {cache_info.name!r}")\n        case ListCaches.Error() as error:\n            print(f"Error listing caches: {error.message}")\n        case _:\n            print("Unreachable")\n    print("")\n')),(0,o.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,o.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def set(client, cache_name, key, value, ttl=None):\n  resp = client.set(cache_name, key, value, ttl)\n  match resp:\n    case CacheSet.Success():\n        pass\n    case CacheSet.Error() as error:\n        print(f"Error setting value: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,o.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,o.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def get(client, cache_name, key):\n  resp = client.get(cache_name, key)\n  match resp:\n    case CacheGet.Hit():\n        print("value is " + resp.value_string)\n    case CacheGet.Miss() as error:\n        print(f"Error getting key: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,o.kt)("h2",{id:"increment-the-value-of-an-item-in-a-cache"},"Increment the value of an item in a cache"),(0,o.kt)("p",null,"An example of incrementing a value in a key. You can pass in a positive or negative integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def incr(client, cache_name, key, value:int = 1):\n  resp = client.increment(cache_name, key, value)\n  match resp:\n    case CacheIncrement.Success():\n        pass\n    case CacheIncrement.Error() as error:\n        print(f"Error incrementing value: {error.message}")\n    case _:\n        print("Unreachable")\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")),(0,o.kt)("h2",{id:"notes-of-usage"},"Notes of usage"),(0,o.kt)("p",null,"For any of these functions, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_client()")," function which returns a CacheClient object. Then pass that object into subsequent functions. This way, calls are more efficient as they reuse the CacheClient for multiple calls to Momento. ",(0,o.kt)("a",{target:"_blank",href:n(670).Z},"Click here")," to see a file with all definitions in it."))}m.isMDXComponent=!0},670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/MomentoBasics-e45a5a4f32b6f056b3f6568cabbe07b8.py"}}]);