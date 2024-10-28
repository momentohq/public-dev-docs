"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1956],{7414:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(74848),t=n(28453);const a={sidebar_position:13,sidebar_label:"Terraform",title:"Use Terraform to Create Momento Caches",description:"Integrate Momento into your Terraform projects",pagination_next:null},i="Manage Momento Caches with Terraform",s={id:"cache/integrations/terraform",title:"Use Terraform to Create Momento Caches",description:"Integrate Momento into your Terraform projects",source:"@site/docs/cache/integrations/terraform.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/terraform",permalink:"/cache/integrations/terraform",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/terraform.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Terraform",title:"Use Terraform to Create Momento Caches",description:"Integrate Momento into your Terraform projects",pagination_next:null},sidebar:"cacheSidebar",previous:{title:"Drupal",permalink:"/cache/integrations/drupal-integration"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example Terraform Project",id:"example-terraform-project",level:2}];function m(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"manage-momento-caches-with-terraform",children:"Manage Momento Caches with Terraform"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://www.terraform.io/",children:"Terraform"})," is an infrastructure-as-code tool for building, changing, and versioning infrastructure safely and efficiently."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.a,{href:"https://registry.terraform.io/providers/momentohq/momento/latest",children:"Momento Terraform Provider"})," allows you to create and delete Momento Caches in your Terraform project."]}),"\n",(0,o.jsx)(r.p,{children:'In this tutorial, we will walk through a basic Terraform project that creates and deletes a cache called "example".'}),"\n",(0,o.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/install",children:"Terraform"})," is installed."]}),"\n",(0,o.jsxs)(r.li,{children:["You'll need a Momento API key, which you can create in the ",(0,o.jsx)(r.a,{href:"https://console.gomomento.com",children:"Momento Console"})]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"example-terraform-project",children:"Example Terraform Project"}),"\n",(0,o.jsxs)(r.p,{children:["Create a ",(0,o.jsx)(r.code,{children:"main.tf"})," file with the following contents:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-hcl",children:'terraform {\n  required_providers {\n    momento = {\n      source = "momentohq/momento"\n    }\n  }\n}\n\nprovider "momento" {}\n\nresource "momento_cache" "example" {\n  name = "example"\n}\n'})}),"\n",(0,o.jsxs)(r.p,{children:["To provide your Momento API key, you can include it in the ",(0,o.jsx)(r.code,{children:"provider"})," block like so:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-hcl",children:'provider "momento" {\n  api_key = "your-api-key"\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Or you can set an environment variable:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'export MOMENTO_API_KEY="your-api-key"\n'})}),"\n",(0,o.jsx)(r.p,{children:'Run the following commands to create and delete a Momento Cache named "example":'}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# Install the Momento provider from the Terraform Registry\nterraform init\n\n# Create the cache\nterraform apply\n\n# Delete the cache\nterraform destroy\n"})})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var o=n(96540);const t={},a=o.createContext(t);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);