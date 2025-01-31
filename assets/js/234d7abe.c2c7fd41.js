"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[8277],{47314:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=n(74848),i=n(28453);const r={title:"Week 4",author:"Krishna Mahato",author_url:"https://github.com/krishna9304",last_updated:"17th July, 2022",author_image_url:"https://avatars.githubusercontent.com/u/71918441?v=4",tags:["gsoc22","react","Week 4"]},d=void 0,o={id:"2022/ui/updates/krishna/2022-07-11",title:"Week 4",description:"\x3c!--",source:"@site/docs/2022/ui/updates/krishna/2022-07-11.md",sourceDirName:"2022/ui/updates/krishna",slug:"/2022/ui/updates/krishna/2022-07-11",permalink:"/gsoc/docs/2022/ui/updates/krishna/2022-07-11",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/krishna/2022-07-11.md",tags:[{inline:!0,label:"gsoc22",permalink:"/gsoc/docs/tags/gsoc-22"},{inline:!0,label:"react",permalink:"/gsoc/docs/tags/react"},{inline:!0,label:"Week 4",permalink:"/gsoc/docs/tags/week-4"}],version:"current",frontMatter:{title:"Week 4",author:"Krishna Mahato",author_url:"https://github.com/krishna9304",last_updated:"17th July, 2022",author_image_url:"https://avatars.githubusercontent.com/u/71918441?v=4",tags:["gsoc22","react","Week 4"]},sidebar:"2022",previous:{title:"Week 3",permalink:"/gsoc/docs/2022/ui/updates/krishna/2022-07-04"},next:{title:"Week 5",permalink:"/gsoc/docs/2022/ui/updates/krishna/2022-07-17"}},l={},a=[{value:"Goals for the week",id:"goals-for-the-week",level:2},{value:"Adding a user via REST API",id:"adding-a-user-via-rest-api",level:2},{value:"PR Link : feat(API): <code>users/</code> POST route for adding a new user #2256",id:"pr-link--featapi-users-post-route-for-adding-a-new-user-2256",level:3},{value:"Testing the PR",id:"testing-the-pr",level:2},{value:"Conclusions and further plans",id:"conclusions-and-further-plans",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"goals-for-the-week",children:"Goals for the week"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Sl. No."}),(0,t.jsx)(s.th,{children:"Initial Goals"}),(0,t.jsx)(s.th,{children:"Completed"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1."}),(0,t.jsx)(s.td,{children:"Finish the implementation of REST API for adding a user"}),(0,t.jsx)(s.td,{children:"Done"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2."}),(0,t.jsx)(s.td,{children:"Solve requested changes on existing PRs"}),(0,t.jsx)(s.td,{children:"Partially"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3."}),(0,t.jsx)(s.td,{children:"Start the implementaion of REST API for modifying user Details"}),(0,t.jsx)(s.td,{children:"Not started"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"adding-a-user-via-rest-api",children:"Adding a user via REST API"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The API implementation of the ",(0,t.jsx)(s.code,{children:"/users"})," POST route to create a new user is done."]}),"\n",(0,t.jsxs)(s.li,{children:["This task included","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Creating a new POST route in the ",(0,t.jsx)(s.code,{children:"index.php"})," file inside ",(0,t.jsx)(s.code,{children:"www/ui/api"})," directory."]}),"\n",(0,t.jsxs)(s.li,{children:["Adding a new method ",(0,t.jsx)(s.code,{children:"AddUser"})," in the ",(0,t.jsx)(s.code,{children:"UserController"})," class."]}),"\n",(0,t.jsx)(s.li,{children:"Trying to re-use the methods that are already used in the static UI."}),"\n",(0,t.jsxs)(s.li,{children:["Testing the API via any API platform like ",(0,t.jsx)(s.strong,{children:"postman"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"pr-link--featapi-users-post-route-for-adding-a-new-user-2256",children:["PR Link : ",(0,t.jsxs)(s.a,{href:"https://github.com/fossology/fossology/pull/2256",children:["feat(API): ",(0,t.jsx)(s.code,{children:"users/"})," POST route for adding a new user #2256"]})]}),"\n",(0,t.jsx)(s.h2,{id:"testing-the-pr",children:"Testing the PR"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Pull the changes from the above ",(0,t.jsx)(s.strong,{children:"PR"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Use any API platform like ",(0,t.jsx)(s.strong,{children:"postman"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Provide the request body as following ----\n",(0,t.jsx)(s.img,{alt:"req-body-add-user",src:n(76634).A+"",width:"450",height:"400"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["You can expect a response like this\n",(0,t.jsx)(s.img,{alt:"req-body-add-user",src:n(18584).A+"",width:"450",height:"208"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"conclusions-and-further-plans",children:"Conclusions and further plans"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["After reviewing my PR, ",(0,t.jsx)(s.a,{href:"https://github.com/GMishx",children:(0,t.jsx)(s.strong,{children:"Gaurav"})})," sir pointed out few issues in the current contribution and code changes. Some of these were ----","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["There was duplication of code in the ",(0,t.jsx)(s.code,{children:"AddUser"})," method as there was no way to re-use the existing functions according to me."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Gaurav"})," sir cleared the misconception that I had, and suggested to ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"patch"})})," the existing ",(0,t.jsx)(s.code,{children:"add-user"})," page to adapt the ",(0,t.jsx)(s.code,{children:"DefaultPlugin"})," rather than ",(0,t.jsx)(s.code,{children:"FO_Plugin"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Link to the discussion - ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2256#discussion_r920026585",children:"https://github.com/fossology/fossology/pull/2256#discussion_r920026585"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Since there were errors while migrating the plugin from ",(0,t.jsx)(s.code,{children:"FO_Plugin"})," to ",(0,t.jsx)(s.code,{children:"DefaultPlugin"}),", It was decided in the ",(0,t.jsx)(s.strong,{children:"UI Meeting"})," that any further changes to this PR is paused for now untill we find a ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"patch"})})," for this."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"So, next week I'll be picking up the implementaion of REST API for modifying user Details."}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},76634:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/reqbodyAddUser-6e8feba5b1759a53c9ab66a7ceefbe16.png"},18584:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/resAddUser-5c1a5744f373265bb21bea66332241c7.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(96540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);