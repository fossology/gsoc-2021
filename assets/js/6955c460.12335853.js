"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[2277],{49435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(74848),s=n(28453);const i={title:"Week 4",author:"Abdelrahman Jamal"},l=void 0,r={id:"2023/copyrights/updates/2023-06-21",title:"Week 4",description:"\x3c!--",source:"@site/docs/2023/copyrights/updates/2023-06-21.md",sourceDirName:"2023/copyrights/updates",slug:"/2023/copyrights/updates/2023-06-21",permalink:"/gsoc/docs/2023/copyrights/updates/2023-06-21",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-06-21.md",tags:[],version:"current",frontMatter:{title:"Week 4",author:"Abdelrahman Jamal"},sidebar:"2023",previous:{title:"Week 3",permalink:"/gsoc/docs/2023/copyrights/updates/2023-06-14"},next:{title:"Week 5",permalink:"/gsoc/docs/2023/copyrights/updates/2023-06-28"}},a={},d=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"Copyright Dataset Creation",id:"copyright-dataset-creation",level:3},{value:"Methodology Challenge",id:"methodology-challenge",level:3},{value:"Fossology API",id:"fossology-api",level:3},{value:"LDA Model",id:"lda-model",level:3},{value:"Problems and Solutions:",id:"problems-and-solutions",level:2},{value:"Problem 1",id:"problem-1",level:3},{value:"Solution 1",id:"solution-1",level:3},{value:"Problem 2",id:"problem-2",level:3},{value:"Solution 2",id:"solution-2",level:3},{value:"Conclusion and Further Plans:",id:"conclusion-and-further-plans",level:2},{value:"Dataset Creation",id:"dataset-creation",level:3}];function c(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"(June,21,2023)"})}),"\n",(0,o.jsx)(t.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/ag4ums",children:"Anupam"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"updates",children:"Updates:"}),"\n",(0,o.jsx)(t.h3,{id:"copyright-dataset-creation",children:"Copyright Dataset Creation"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Initiated the process of curating a copyright dataset. Instead of manual procedures via the Fossology UI, automation was explored through the chat-gpt-3.5 API. A series of functions were designed to traverse directories, extract commented content in files, and forward that text along with a specific prompt to the chat-gpt API. This was meant to isolate any copyright content within. Though mostly successful, iterations were required for improvement. The related code is accessible ",(0,o.jsx)(t.a,{href:"https://gist.github.com/Hero2323/bff12400cec5ab54467ea35ba89e976f",children:"here"}),", and my findings are hosted ",(0,o.jsx)(t.a,{href:"https://drive.google.com/drive/folders/10cvdBEWOgr2JSWqR7X7Oz0xl-Nn2VcGU?usp=drive_link",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"methodology-challenge",children:"Methodology Challenge"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The aforementioned approach, albeit innovative, was rendered non-viable for the project due to the necessity of employing Fossology for the dataset creation, ensuring the rectification of its false positives."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"fossology-api",children:"Fossology API"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Acquired information about the existence of a Fossology API capable of extracting Fossology-generated copyright statements. This can be harnessed for dataset formulation."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"lda-model",children:"LDA Model"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Executed a basic LDA (Latent Dirichlet Allocation) model centered around two topics - copyright and non-copyright. The results were promising, indicating pertinent associations. The respective code can be located ",(0,o.jsx)(t.a,{href:"https://gist.github.com/Hero2323/3e22bc0af40323d502de6f26ef2886ab",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"problems-and-solutions",children:"Problems and Solutions:"}),"\n",(0,o.jsx)(t.h3,{id:"problem-1",children:"Problem 1"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The task of manually creating a dataset is monotonous, protracted, and susceptible to errors."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"solution-1",children:"Solution 1"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Automated the task employing chatGPT. However, it necessitated meticulous prompt structuring to derive semi-reliable results."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"problem-2",children:"Problem 2"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Uncertainty about file segments to forward to chatGPT for copyright extraction."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"solution-2",children:"Solution 2"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Developed a function to solely capture commented lines from predominant extensions. In instances of its inadequacy, the entire file was dispatched to chatGPT, a measure which eventually proved counterproductive. Subsequent insights from Gaurav introduced me to ",(0,o.jsx)(t.a,{href:"https://github.com/fossology/Nirjas",children:"Nirjas, a Python library under the Fossology project"}),", already adept at this task."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans:"}),"\n",(0,o.jsx)(t.h3,{id:"dataset-creation",children:"Dataset Creation"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Engage in the formulation of the dataset leveraging the Fossology API."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);