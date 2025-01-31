"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[6477],{74931:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(74848),r=s(28453);const t={title:"week-04",author:"Aaditya Singh"},h="Meeting 6",c={id:"2024/scheduler/updates/Discussion/2024-05-31",title:"week-04",description:"\x3c!--",source:"@site/docs/2024/scheduler/updates/Discussion/2024-05-31.md",sourceDirName:"2024/scheduler/updates/Discussion",slug:"/2024/scheduler/updates/Discussion/2024-05-31",permalink:"/gsoc/docs/2024/scheduler/updates/Discussion/2024-05-31",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2024/scheduler/updates/Discussion/2024-05-31.md",tags:[],version:"current",frontMatter:{title:"week-04",author:"Aaditya Singh"},sidebar:"2024",previous:{title:"week-10",permalink:"/gsoc/docs/2024/scheduler/updates/General/2024-07-11"},next:{title:"week-06",permalink:"/gsoc/docs/2024/scheduler/updates/Discussion/2024-06-14"}},l={},d=[{value:"Attendees",id:"attendees",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Contributor",id:"contributor",level:3},{value:"Current Scheduler Design",id:"current-scheduler-design",level:4},{value:"Alignment with Documentation",id:"alignment-with-documentation",level:3},{value:"New Scheduler Design",id:"new-scheduler-design",level:4},{value:"Trade-offs",id:"trade-offs",level:4},{value:"Effectiveness of New Design",id:"effectiveness-of-new-design",level:3},{value:"Addressing FOSSology Issue",id:"addressing-fossology-issue",level:3},{value:"Wfx Project Approach",id:"wfx-project-approach",level:3},{value:"Goals for the Week",id:"goals-for-the-week",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"meeting-6",children:"Meeting 6"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(May 31, 2024)"})}),"\n",(0,i.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.h3,{id:"contributor",children:"Contributor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"}),": Focused on framing the current scheduler by studying the Job Scheduler ",(0,i.jsx)(n.code,{children:"wiki"})," ",(0,i.jsx)(n.a,{href:"https://github.com/fossology/fossology/wiki/Job-Scheduler",children:"Documentation"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"current-scheduler-design",children:"Current Scheduler Design"}),"\n",(0,i.jsx)(n.p,{children:"The schematic from the documentation provides an architectural overview of the current Job Scheduler:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CurrentDesign",src:s(11588).A+"",width:"765",height:"288"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Architectural Overview:"})}),"\n",(0,i.jsx)(n.p,{children:"The design is based on a client-server model, featuring:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scheduler Port"}),": Serves as the communication hub between clients and the scheduler."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Main Thread"}),": Responsible for job queuing, allocation, and event management."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Worker Threads"}),": Implement specific tasks asynchronously, enhancing throughput and response times."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Components:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scheduler"}),": Manages all job scheduling operations and acts as the primary interface for job requests."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asynchronous Workers"}),": Improve processing time by handling tasks in parallel."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Logging and Monitoring"}),": Provides integrated systems for real-time monitoring and issue troubleshooting."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"alignment-with-documentation",children:"Alignment with Documentation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mentor:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"}),": Confirmed alignment with the current architecture of the job scheduler."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"new-scheduler-design",children:"New Scheduler Design"}),"\n",(0,i.jsx)(n.p,{children:"The revised design focuses on a more efficient multithreaded approach:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"NewDesign",src:s(34089).A+"",width:"607",height:"585"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Architectural Overview:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Main Thread"}),": Coordinates with various components and manages task execution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Worker Thread"}),": Manages interactions between different services to prevent conflicts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Event Queue"}),": Ensures proper handling of system-level events and error logging."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Components:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scheduler"}),": Uses a round-robin technique to manage tasks, ensuring efficient CPU time distribution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Queue Storage"}),": Manages tasks dynamically to adapt to workload changes."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"trade-offs",children:"Trade-offs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feature"}),(0,i.jsx)(n.th,{children:"Old Job Scheduler"}),(0,i.jsx)(n.th,{children:"New Job Scheduler"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Maintainability"}),(0,i.jsx)(n.td,{children:"Easier"}),(0,i.jsx)(n.td,{children:"More challenging"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Monitoring"}),(0,i.jsx)(n.td,{children:"Centralized"}),(0,i.jsx)(n.td,{children:"Decentralized"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resource Management"}),(0,i.jsx)(n.td,{children:"Static"}),(0,i.jsx)(n.td,{children:"Dynamic"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"effectiveness-of-new-design",children:"Effectiveness of New Design"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mentor:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"}),": Suggests a finite state machine architecture might be more suitable given the complexity, as it facilitates easier tracking and management."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"addressing-fossology-issue",children:"Addressing FOSSology Issue"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/fossology/fossology/issues/2742",children:"#2742"})}),": Problem with incorrect MIME type recognition for text files."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mentor:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"}),': Error found due to the "Ignore SCM files" option affecting MIME type recognition.']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"wfx-project-approach",children:"Wfx Project Approach"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mentor:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"}),": Expressed interest in holding an internal discussion about the ",(0,i.jsx)(n.a,{href:"https://github.com/siemens/wfx",children:"wfx"})," project approach."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"goals-for-the-week",children:"Goals for the Week"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Contributor:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"}),": Goals include rewriting the existing C code to Go and implementing a queue in Golang."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},34089:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/arch_ver.01-8c8c978ac3068d7508a4cecce69fea8b.jpg"},11588:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/c_arch-d1ca92e8b9c2cad3d510dabc21986f63.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>h,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function h(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:h(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);