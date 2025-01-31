"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[460],{52924:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=t(74848),i=t(28453);const a={title:"Week 10",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc22","react"]},l=void 0,c={id:"2022/ui/updates/samuel/2022-08-25",title:"Week 10",description:"\x3c!--",source:"@site/docs/2022/ui/updates/samuel/2022-08-25.md",sourceDirName:"2022/ui/updates/samuel",slug:"/2022/ui/updates/samuel/2022-08-25",permalink:"/gsoc/docs/2022/ui/updates/samuel/2022-08-25",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/samuel/2022-08-25.md",tags:[{inline:!0,label:"gsoc22",permalink:"/gsoc/docs/tags/gsoc-22"},{inline:!0,label:"react",permalink:"/gsoc/docs/tags/react"}],version:"current",frontMatter:{title:"Week 10",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc22","react"]},sidebar:"2022",previous:{title:"Week 9",permalink:"/gsoc/docs/2022/ui/updates/samuel/2022-08-18"},next:{title:"Week 12",permalink:"/gsoc/docs/2022/ui/updates/samuel/2022-09-08"}},d={},o=[{value:"THIS WEEK&#39;S CONTRIBUTIONS",id:"this-weeks-contributions",level:2},{value:"FRONTEND",id:"frontend",level:3},{value:"BACKEND",id:"backend",level:3},{value:"FIRST CASE",id:"first-case",level:4},{value:"SECOND CASE",id:"second-case",level:4},{value:"THIRD CASE",id:"third-case",level:4},{value:"NEXT WEEK&#39;S EXPECTATIONS",id:"next-weeks-expectations",level:3}];function r(e){const s={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"this-weeks-contributions",children:"THIS WEEK'S CONTRIBUTIONS"}),"\n",(0,n.jsx)(s.h3,{id:"frontend",children:"FRONTEND"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Made the improvements on the FOSSOlogy Maintenance page:\nI fixed the issue with the existing test cases that were causing the CI/CDs for the fossology maintenance page to fail deploying."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"backend",children:"BACKEND"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Added an API to delete ",(0,n.jsx)(s.strong,{children:"Admin License Candidate"}),":\nWith the given Id of the license Candidate in the request parameters, i can delete the  license."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"How it works:"})}),"\n",(0,n.jsx)(s.h4,{id:"first-case",children:"FIRST CASE"}),"\n",(0,n.jsxs)(s.p,{children:["In this case, the Admin-license-candidate exists, and the license-candidate will be deleted successfully.\n",(0,n.jsx)(s.img,{alt:"delete-license-candidate-case-1",src:t(8808).A+"",width:"1861",height:"589"})]}),"\n",(0,n.jsx)(s.h4,{id:"second-case",children:"SECOND CASE"}),"\n",(0,n.jsx)(s.p,{children:"In this case, the Admin-license-candidate doesn't exist, so 404 error will be returned instead."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"delete-license-candidate-case-2",src:t(62019).A+"",width:"1830",height:"565"})}),"\n",(0,n.jsx)(s.h4,{id:"third-case",children:"THIRD CASE"}),"\n",(0,n.jsx)(s.p,{children:"The request is not coming from the Admin.\nThis request can only be run by the admin , else the request will fail returning 400 ERROR."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"delete-license-candidate-case-3",src:t(40442).A+"",width:"1814",height:"551"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Pull request:"})," ",(0,n.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2298",children:"feat(API): delete admin-license candidate"})]}),"\n",(0,n.jsx)(s.h3,{id:"next-weeks-expectations",children:"NEXT WEEK'S EXPECTATIONS"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"I will continue working on the APIs that are not available on the license module."}),"\n",(0,n.jsx)(s.li,{children:"I will also work on the UI of the license module."}),"\n",(0,n.jsx)(s.li,{children:"I will also continue to improve the UI of the FOSSOlogy maintenance page."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},8808:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/delete_license_case_1-39b3301efaa0e43e9ca2a25e49050888.png"},62019:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/delete_license_case_2-4066cd83afbe500bb264ba298ed999c7.png"},40442:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/delete_license_case_3-d8dc9ee65b5cf7e12ae7af985ad91572.png"},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>c});var n=t(96540);const i={},a=n.createContext(i);function l(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);