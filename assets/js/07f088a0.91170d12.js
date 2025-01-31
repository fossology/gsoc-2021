"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1173],{29730:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=s(74848),t=s(28453);const l={title:"Community Bonding",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},r=void 0,a={id:"2021/buildsystem/updates/2021-05-28",title:"Community Bonding",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-05-28.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-05-28",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-05-28",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-05-28.md",tags:[{inline:!0,label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{inline:!0,label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{inline:!0,label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{inline:!0,label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Community Bonding",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Introduction",permalink:"/gsoc/docs/2021/buildsystem/"},next:{title:"Week 1",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-11"}},o={},d=[{value:"Meeting 1",id:"meeting-1",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3},{value:"Meeting 2",id:"meeting-2",level:2},{value:"Attendees",id:"attendees-1",level:3},{value:"Discussions",id:"discussions-1",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans-1",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"meeting-1",children:"Meeting 1"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(May 28th, 2021)"})}),"\n",(0,i.jsx)(n.p,{children:"This meeting is the first of the recurring weekly GSoC project meetings. In this meeting the current status of progress according to the proposal was discussed and some topics related to current build system based on Make and the new build system based on CMake."}),"\n",(0,i.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/hastagAB",children:"Ayush Bhardwaj"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"discussions",children:"Discussions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The current progress according to schedule"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The blog on CMake is on the way."}),"\n",(0,i.jsx)(n.li,{children:"I have gone through the Makefiles to get a rough estimate of the work."}),"\n",(0,i.jsx)(n.li,{children:"Published the GSoC project blog"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How are agents related to each other in terms of compilation?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Each agent is independently compiled and generally use the source code in ",(0,i.jsx)(n.code,{children:"lib"})," folder. If any agent needs other agent then it uses the library files instead."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Does every agent have a executable and library?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not necessarily, there are agents written in C, C++ and PHP, depending on what is the use the configuration can be different."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It would be better if I get started by creating CMake configuration for any of the agent."}),"\n",(0,i.jsx)(n.li,{children:"Fork and create a branch for development and mention the same in blog or wiki."}),"\n",(0,i.jsx)(n.li,{children:"Add a timeline section in blog or wiki as provided in the project proposal."}),"\n",(0,i.jsx)(n.li,{children:"Publish the CMake introductory blog."}),"\n",(0,i.jsx)(n.li,{children:"Prepare a prototype/plan for next week."}),"\n",(0,i.jsx)(n.li,{children:"Find out the best alternative for handling the global variables."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"meeting-2",children:"Meeting 2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(June 4th, 2021)"})}),"\n",(0,i.jsx)(n.p,{children:"In this second meeting points over default Makefiles were discussed. Ninja can be used as an alternative for Makefiles."}),"\n",(0,i.jsx)(n.h3,{id:"attendees-1",children:"Attendees"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"discussions-1",children:"Discussions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"What is the use of"})," ",(0,i.jsx)(n.code,{children:"Makefile.deps"})," ",(0,i.jsx)(n.strong,{children:"and"})," ",(0,i.jsx)(n.code,{children:"Makefile.process"})," ",(0,i.jsx)(n.strong,{children:"files?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Makefile.deps"})," consists of many used and unused snippets. These snippets help setup the build and test environment for fossology. Since there are many directories that are hardcoded, special care is required while replacing this file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Makefile.process"})," generates a master variable from list of variables. It assists the script in ",(0,i.jsx)(n.code,{children:"Makefile.conf"})," file. These files together generate a list of variables that can be used throughout the build process."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The build can be made faster using ",(0,i.jsx)(n.strong,{children:"Ninja"})," instead of ",(0,i.jsx)(n.strong,{children:"Make"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Ninja supports parallel builds by default."}),"\n",(0,i.jsx)(n.li,{children:"Print the flags used once the CMake configuration is working. That will help us debug the process."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion-and-further-plans-1",children:"Conclusion and Further Plans"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Write a ",(0,i.jsx)(n.em,{children:"CMakeLists.txt"})," for ",(0,i.jsx)(n.strong,{children:"lib"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Push the working branch and update the link either on wiki or blog."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);