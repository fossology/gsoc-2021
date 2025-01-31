"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[3135],{80554:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=i(74848),s=i(28453);const l={title:"Week 9",author:"Omar AbdelSamea"},a="Coding Week 9",d={id:"2021/microservice/updates/2021-08-03",title:"Week 9",description:"\x3c!--",source:"@site/docs/2021/microservice/updates/2021-08-03.md",sourceDirName:"2021/microservice/updates",slug:"/2021/microservice/updates/2021-08-03",permalink:"/gsoc/docs/2021/microservice/updates/2021-08-03",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-08-03.md",tags:[],version:"current",frontMatter:{title:"Week 9",author:"Omar AbdelSamea"},sidebar:"2021",previous:{title:"Week 8",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-27"},next:{title:"Week 10",permalink:"/gsoc/docs/2021/microservice/updates/2021-08-17"}},r={},o=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Available agents in UI",id:"available-agents-in-ui",level:2},{value:"Migrating configuration to etcd",id:"migrating-configuration-to-etcd",level:2},{value:"End of the week results",id:"end-of-the-week-results",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"coding-week-9",children:"Coding Week 9"})}),"\n",(0,t.jsx)(n.h2,{id:"meeting-0",children:"Meeting 0"}),"\n",(0,t.jsx)(n.h3,{id:"organizer",children:"Organizer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Anupam Ghosh"}),"\n",(0,t.jsx)(n.li,{children:"Vasudev"}),"\n",(0,t.jsx)(n.li,{children:"Ayush Bharadwaj"}),"\n",(0,t.jsx)(n.li,{children:"Shreya Singh"}),"\n",(0,t.jsx)(n.li,{children:"Kaushlendra Pratap Singh"}),"\n",(0,t.jsx)(n.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"outcomes",children:"Outcomes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Presented agent configuration migrated to etcd and working inside the cluster."}),"\n",(0,t.jsx)(n.li,{children:"made a small demo showing applying agent deployment dynamically and the list of available agents in UI is changing accordingly."}),"\n",(0,t.jsx)(n.li,{children:"Discussed agent deployment deletion method by creating a shell script that takes the agent name then deletes the deployment, removing the configuration from etcd and reload scheduler configuration."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"available-agents-in-ui",children:"Available agents in UI"}),"\n",(0,t.jsxs)(n.p,{children:["in ",(0,t.jsx)(n.a,{href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/src/lib/php/common-plugin.php#L89",children:"agent_disable"})," function in common-plugin the list of available is hosts is requested from etcd and if the agent isn't present in this list it'll be disabled."]}),"\n",(0,t.jsx)(n.h2,{id:"migrating-configuration-to-etcd",children:"Migrating configuration to etcd"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Finalized migrating agent configuration and tested inside the cluster."}),"\n",(0,t.jsx)(n.li,{children:"Added rest of fossology.conf to etcd"}),"\n",(0,t.jsx)(n.li,{children:"started working on db.conf to etcd"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"end-of-the-week-results",children:"End of the week results"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"modified UI to show only available agents during upload."}),"\n",(0,t.jsx)(n.li,{children:"created fo_delete.sh to handle deployment deletion and scheduler config reload."}),"\n",(0,t.jsx)(n.li,{children:"finalized migrating fossology.conf and <agent_name>.conf to etcd and tested inside the cluster."}),"\n",(0,t.jsx)(n.li,{children:"started working on db conf to etcd."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);