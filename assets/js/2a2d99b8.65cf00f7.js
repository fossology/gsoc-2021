"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[3390],{7597:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=i(74848),t=i(28453);const r={sidebar_position:1,title:"Introduction",slug:"/2021/microservice/"},s="Author",c={id:"2021/microservice/index",title:"Introduction",description:"\x3c!--",source:"@site/docs/2021/microservice/index.md",sourceDirName:"2021/microservice",slug:"/2021/microservice/",permalink:"/gsoc/docs/2021/microservice/",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/2021/microservice/"},sidebar:"2021",previous:{title:"Setup",permalink:"/gsoc/docs/2021/copyrights/setup"},next:{title:"Week 1",permalink:"/gsoc/docs/2021/microservice/updates/2021-06-07"}},l={},d=[{value:"Current Draw backs of installing FOSSology in cluster mode",id:"current-draw-backs-of-installing-fossology-in-cluster-mode",level:2},{value:"Project Goal",id:"project-goal",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"author",children:"Author"})}),"\n",(0,o.jsx)(n.p,{children:"Omar AbdelSamea"}),"\n",(0,o.jsx)(n.h1,{id:"contact-info",children:"Contact Info"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"mailto:omarmohamed168@gmail.com",children:"Email"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/omarmohamed1999/",children:"Linked In"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/OmarAbdelSamea",children:"GitHub"})}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"project-description",children:"Project Description"}),"\n",(0,o.jsx)(n.p,{children:"FOSSology is designed in modular fashion but it certainly does not follow micro-service architecture. If there is a change in an agent's logic, the whole source code has to be built again and installed. Whereas in micro-service architecture, only this agent needs to be built and installed/deployed."}),"\n",(0,o.jsx)(n.h2,{id:"current-draw-backs-of-installing-fossology-in-cluster-mode",children:"Current Draw backs of installing FOSSology in cluster mode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"When adding or removing a node, scheduler needs to be restarted."}),"\n",(0,o.jsx)(n.li,{children:"Every node needs to have same set of agents."}),"\n",(0,o.jsx)(n.li,{children:"Because of the current version check mechanism on scheduler, for a single change, the whole code base needs to be redeployed to get new version string."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"project-goal",children:"Project Goal"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ability to add one agent to each node for easier updating and scaling."}),"\n",(0,o.jsx)(n.li,{children:"Dynamically adding new nodes without the need to restart or stop the scheduler"}),"\n",(0,o.jsx)(n.li,{children:"Kubernetes deployment for easy scaling in or out"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var o=i(96540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);