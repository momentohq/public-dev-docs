"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4381],{48550:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=o(74848),i=o(28453);const t={sidebar_position:20,sidebar_label:"Configuration",title:"Building Momento Proxy",description:"Discover how to build, deploy, and run Momento Proxy in your environment."},c="Configure Momento Proxy for your environment",s={id:"cache/proxy/configuration/index",title:"Building Momento Proxy",description:"Discover how to build, deploy, and run Momento Proxy in your environment.",source:"@site/docs/cache/proxy/configuration/index.md",sourceDirName:"cache/proxy/configuration",slug:"/cache/proxy/configuration/",permalink:"/ja/cache/proxy/configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/proxy/configuration/index.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Configuration",title:"Building Momento Proxy",description:"Discover how to build, deploy, and run Momento Proxy in your environment."},sidebar:"cacheSidebar",previous:{title:"Momento Proxy",permalink:"/ja/cache/proxy/"},next:{title:"Example",permalink:"/ja/cache/proxy/configuration/example"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running with Docker",id:"running-with-docker",level:2},{value:"Verifying the Proxy is Working",id:"verifying-the-proxy-is-working",level:2},{value:"Memcached Protocol (via telnet)",id:"memcached-protocol-via-telnet",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configure-momento-proxy-for-your-environment",children:"Configure Momento Proxy for your environment"})}),"\n",(0,r.jsxs)(n.p,{children:["Getting started with Momento Proxy is fast and straightforward. You can either run it using ",(0,r.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," or build it from source using ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/",children:"Cargo"}),". All you need is a ",(0,r.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"})," and a configuration file."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A valid ",(0,r.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["At least ",(0,r.jsx)(n.a,{href:"https://console.gomomento.com/caches/create",children:"one cache created"})," in your Momento account."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust toolchain"})," if building from source."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-with-docker",children:"Running with Docker"}),"\n",(0,r.jsxs)(n.p,{children:["You can pull and run the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/gomomento/momento-proxy",children:"Momento Proxy container"})," from Docker Hub:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker pull gomomento/momento-proxy\n\ndocker run -d \\\n  -p 11211:11211 \\\n  -p 6379:6379 \\\n  -p 9999:9999 \\\n  -e MOMENTO_AUTHENTICATION=<YOUR_MOMENTO_API_KEY> \\\n  gomomento/momento-proxy\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This starts the proxy with a ",(0,r.jsx)(n.a,{href:"/cache/proxy/configuration/example",children:"default configuration file"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To use a custom config, configure the ",(0,r.jsx)(n.code,{children:"CONFIG"})," environment variable and the directory where your config file is located:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"docker run -d \\\n  -p 11211:11211 \\\n  -p 6379:6379 \\\n  -p 9999:9999 \\\n  -e MOMENTO_AUTHENTICATION=<YOUR_MOMENTO_API_KEY> \\\n  -e CONFIG=my_custom_config.toml \\\n  -v /your/path/to/config:/app/config \\\n  gomomento/momento-proxy\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Ports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"11211"})," for Memcached protocol"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"6379"})," for Redis protocol"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9999"})," for admin/stats commands"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verifying-the-proxy-is-working",children:"Verifying the Proxy is Working"}),"\n",(0,r.jsx)(n.p,{children:"Once the proxy is running, you can verify connectivity and functionality by testing the Memcached interface. Successful responses confirm that your application can communicate with Momento through the proxy."}),"\n",(0,r.jsx)(n.h3,{id:"memcached-protocol-via-telnet",children:"Memcached Protocol (via telnet)"}),"\n",(0,r.jsx)(n.p,{children:"Use telnet to test Memcached behavior:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"telnet localhost 11211\nset foo 0 0 3\nbar\nget foo\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see responses like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"STORED\nVALUE foo 0 3\nbar\nEND\n"})}),"\n",(0,r.jsx)(n.p,{children:"This confirms that your set and get operations are being processed by Momento through the proxy. You should see successful responses from Momento now!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var r=o(96540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);