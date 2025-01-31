"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[2650],{38675:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=i(74848),t=i(28453);const o={title:"Week 5",author:"Sarita"},d=void 0,r={id:"2021/scancode/updates/2021-07-06",title:"Week 5",description:"\x3c!--",source:"@site/docs/2021/scancode/updates/2021-07-06.md",sourceDirName:"2021/scancode/updates",slug:"/2021/scancode/updates/2021-07-06",permalink:"/gsoc/docs/2021/scancode/updates/2021-07-06",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/scancode/updates/2021-07-06.md",tags:[],version:"current",frontMatter:{title:"Week 5",author:"Sarita"},sidebar:"2021",previous:{title:"Week 4",permalink:"/gsoc/docs/2021/scancode/updates/2021-06-29"},next:{title:"Week 6",permalink:"/gsoc/docs/2021/scancode/updates/2021-07-13"}},c={},a=[{value:"Coding Week 5 Meeting 1",id:"coding-week-5-meeting-1",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Week 4 Progress",id:"week-4-progress",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3},{value:"Coding Week 5 Meeting 2",id:"coding-week-5-meeting-2",level:2},{value:"Attendees",id:"attendees-1",level:3},{value:"Discussions",id:"discussions-1",level:3},{value:"Integrating scancode UI with copyright UI",id:"integrating-scancode-ui-with-copyright-ui",level:3},{value:"Discussion regarding Documentation",id:"discussion-regarding-documentation",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans-1",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"coding-week-5-meeting-1",children:"Coding Week 5 Meeting 1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Date:2021-07-06"})}),"\n",(0,s.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra "})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar "})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh "})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"week-4-progress",children:"Week 4 Progress"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Created ",(0,s.jsx)(n.code,{children:"scancode_copyright"})," and ",(0,s.jsx)(n.code,{children:"scancode_author"})," table in the FOSSology database."]}),"\n",(0,s.jsx)(n.li,{children:"Copyright and author information coming from scancode scan result is inserted in these newly created tables."}),"\n",(0,s.jsxs)(n.li,{children:["Improved license data insertion in the ",(0,s.jsx)(n.code,{children:"license_file"})," and ",(0,s.jsx)(n.code,{children:"highlight"})," tables by inserting only unique entries based upon ",(0,s.jsx)(n.code,{children:"rf_fk"}),", ",(0,s.jsx)(n.code,{children:"agent_fk"}),", and ",(0,s.jsx)(n.code,{children:"pfile_fk"}),". It solved UI glitch in license relevant text highlighting for scancode."]}),"\n",(0,s.jsxs)(n.li,{children:["Latest ",(0,s.jsx)(n.a,{href:"https://github.com/itssingh/fossology/commit/c823ecf7a5d59fbfe243281c41598ea161e04435",children:"commit"})," having code to create tables."]}),"\n",(0,s.jsxs)(n.li,{children:["Created ",(0,s.jsx)(n.code,{children:"UI Wireframes"})," with ",(0,s.jsx)(n.code,{children:"Figma"})," for ScanCode copyright and author."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"discussions",children:"Discussions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The first idea is to have a ",(0,s.jsx)(n.code,{children:"separate browser"})," for ScanCode agent ",(0,s.jsx)(n.a,{href:"https://www.figma.com/file/Kj3DQlhNXkZkq6DgpdfXFt/Untitled?node-id=0%3A1",children:"link"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Michael suggested not to use these as ",(0,s.jsx)(n.em,{children:"ScanCode-Toolkit project is recognized mainly for it's license scanning"})," now keeping only Copyright and Author information in this section whereas licenses in another section will be confusing for users."]}),"\n",(0,s.jsx)(n.li,{children:"Gaurav also didn't approve this idea."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The second idea is to ",(0,s.jsx)(n.em,{children:"reuse existing Copyright and Email/URL/Author browser"})," ",(0,s.jsx)(n.a,{href:"https://www.figma.com/file/Kj3DQlhNXkZkq6DgpdfXFt/Untitled?node-id=12%3A8",children:"link"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Reusing copyright and Email/URL/Author browser section seems to be nice idea"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Michael didn't find navigation between ScanCode agent and FOSSology Copyright agent using drop-down a good options. It seems to be lost. So instead of drop-down using tabs would looks nice."}),"\n",(0,s.jsx)(n.li,{children:"No need to repeat users finding for ScanCode agent as user is not interested in providing decision for a particular agent but instead they do for a file."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Michael proposed following idea instead"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"image",src:i(66940).A+"",width:"1920",height:"1080"}),"\n",(0,s.jsx)(n.img,{alt:"image",src:i(56276).A+"",width:"1920",height:"1080"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It reuses Copyright and Author browser space."}),"\n",(0,s.jsx)(n.li,{children:"There is no redundant user decision for copyright agent."}),"\n",(0,s.jsx)(n.li,{children:"Looks nice to all the attendees."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Discussion regarding how to display scanner findings in the Copyright/Email/Url/Author clearing section for a file."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Michael, Avinal and Sarita disused to add a column named source in the scanner finding table like license table in the clearing section."}),"\n",(0,s.jsxs)(n.li,{children:["Under this source column two keyword could be use one ",(0,s.jsx)(n.code,{children:"S"})," for ScanCode findings and ",(0,s.jsx)(n.code,{children:"F"})," for FOSSology Copyright agent findings."]}),"\n",(0,s.jsx)(n.li,{children:"Gaurav suggested not to use this idea because for the same copyright statement, Fossology and ScanCode can have different scan result."}),"\n",(0,s.jsxs)(n.li,{children:["In case of license, there is ",(0,s.jsx)(n.code,{children:"License_ref table"})," which provides same license name for all the different agents for a license do no mismatching is there."]}),"\n",(0,s.jsx)(n.li,{children:"Doing same for Copyright will require lot of time."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Gaurav Suggested two ideas for the same"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There can be two tabs to switch between ScanCode Findings and FOSSology Copyright Findings."}),"\n",(0,s.jsx)(n.li,{children:"Second idea is to ask user about a default agent out of FOSSology copyright and ScanCode for an upload and display copyright/email/url/author result by the default agent."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Gaurav would like to discuss further in the next meeting."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement Micheal's proposed idea for copyright browser and Email/URL/Author Browser."}),"\n",(0,s.jsx)(n.li,{children:"Take feedback from other mentors too."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"coding-week-5-meeting-2",children:"Coding Week 5 Meeting 2"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Date:2021-07-09"})}),"\n",(0,s.jsx)(n.h3,{id:"attendees-1",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra "})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar "})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh "})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"discussions-1",children:"Discussions"}),"\n",(0,s.jsx)(n.h3,{id:"integrating-scancode-ui-with-copyright-ui",children:"Integrating scancode UI with copyright UI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Copyright UI could be modified to integrate Scancode_Copyright and Scancode_Author UI."}),"\n",(0,s.jsx)(n.li,{children:"CopyrightDao could be modified to include scancode copyright and author data too, no need to create a separate file for scancodeDao."}),"\n",(0,s.jsx)(n.li,{children:"Users Findings are independent of any agent so no agentID has to be update in the copyright UI code for scancode but we have to take care for the type."}),"\n",(0,s.jsxs)(n.li,{children:["Gaurav suggested to use different type for copyright statement from what is used by copyright agent. Scancode will be using ",(0,s.jsx)(n.code,{children:"scancode_statement"}),"  for copyright type and ",(0,s.jsx)(n.code,{children:"statement"})," is used by copyright agent."]}),"\n",(0,s.jsxs)(n.li,{children:["Two new tables named ",(0,s.jsx)(n.code,{children:"scancode_copyright_event"})," , and ",(0,s.jsx)(n.code,{children:"scancode_author_event"}),"  are required to store Deactivated ScanCode findings statements and Deactivated Author statements respectively."]}),"\n",(0,s.jsx)(n.li,{children:"To generate report copyright agent is hard coded at several places, figure out some way to add scancode data also."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"discussion-regarding-documentation",children:"Discussion regarding Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Gaurav gave ",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/2040/files#diff-8e7c89ac20d0fcd6aa91a097accabecfdebf47343da0d71fbb4edc8527309c00",children:"this"})," as a reference to add copyright in the project code files."]}),"\n",(0,s.jsxs)(n.li,{children:["Michael suggested to look into ",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/wiki/Coding-Style#default-license-and-file-headers",children:"coding guidelines"})," for default license for the project code files."]}),"\n",(0,s.jsx)(n.li,{children:"Micheal suggested prepare a document for fossology wiki section like other agents have."}),"\n",(0,s.jsx)(n.li,{children:"Gaurav in the last GSoC meeting suggested to document the working of scancode agent for first evaluation and adding comments to the code written till now."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion-and-further-plans-1",children:"Conclusion and Further Plans"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Documentation for scancode project in my project ",(0,s.jsx)(n.a,{href:"https://github.com/itssingh/fossology/wiki",children:"wiki"})," ."]}),"\n",(0,s.jsx)(n.li,{children:"Refactor code written till now."}),"\n",(0,s.jsx)(n.li,{children:"Populating scancode copyright UI table."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},56276:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/author_browser-88616f53e7ecbd87ebd096c8c11e186a.png"},66940:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/copyright_browser-aa3473abef1d74b6b45e8176064843bd.png"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(96540);const t={},o=s.createContext(t);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);