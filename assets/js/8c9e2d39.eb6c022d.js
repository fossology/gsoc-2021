"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[6448],{4240:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(74848),s=i(28453);const o={sidebar_position:1,title:"Introduction",slug:"/2021/copyrights/"},a=void 0,r={id:"2021/copyrights/index",title:"Introduction",description:"\x3c!--",source:"@site/docs/2021/copyrights/index.md",sourceDirName:"2021/copyrights",slug:"/2021/copyrights/",permalink:"/gsoc/docs/2021/copyrights/",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/copyrights/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/2021/copyrights/"},sidebar:"2021",previous:{title:"Final Evaluation",permalink:"/gsoc/docs/2021/buildsystem/final-evaluation"},next:{title:"Week 1",permalink:"/gsoc/docs/2021/copyrights/updates/2021-06-07"}},l={},c=[{value:"Author",id:"author",level:2},{value:"Contact info",id:"contact-info",level:2},{value:"What&#39;s the project about?",id:"whats-the-project-about",level:2},{value:"What should be done?",id:"what-should-be-done",level:2},{value:"What is that I am doing right now?",id:"what-is-that-i-am-doing-right-now",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"author",children:"Author"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"})}),"\n",(0,n.jsx)(t.h2,{id:"contact-info",children:"Contact info"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"mailto:kaushlendrapratap.9837@gmail.com",children:"Email"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://linkedin.com/in/kaushl2208",children:"LinkedIn"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"whats-the-project-about",children:"What's the project about?"}),"\n",(0,n.jsx)(t.p,{children:"Fossology's copyright detection agent uses a rule-based approach to detect copyright statements but like all the rule based approaches the edge cases in the stock of copyrights statements are increasing day by day thus the agent is showing a lot of False Positives result."}),"\n",(0,n.jsx)(t.p,{children:"Eg:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['"copyright (c) 2021, Kaushlendra Pratap < ',(0,n.jsx)(t.a,{href:"mailto:kaushlendrapratap.9837@gmail.com",children:"kaushlendrapratap.9837@gmail.com"}),' >"   # ',(0,n.jsx)(t.em,{children:"Seems like a valid copyright statement."}),"\nBut,"]}),"\n",(0,n.jsxs)(t.li,{children:['"copyright is something which should be present in the code/software provided by Kaushlendra."    #  ',(0,n.jsx)(t.em,{children:"Has been tagged as copyright by current agent but it is a False Positive"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-should-be-done",children:"What should be done?"}),"\n",(0,n.jsx)(t.p,{children:"Just like any other detection technique, we need to build a complete process/pipeline through which the copyright statements will go and the detector will classify it as True Positive or a False Positive."}),"\n",(0,n.jsx)(t.p,{children:"Interesting? Let's discuss about the ways we can do it:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Developing NLP drived rule based multi-layered checks"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Introducing a Machine learning based classifier which will train on existing manually classified copyright statements"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-that-i-am-doing-right-now",children:"What is that I am doing right now?"}),"\n",(0,n.jsxs)(t.p,{children:["Copyrights are more of a specifically structured statements which can be understood by the entities and Positions of each word. I am implementing  ",(0,n.jsx)(t.strong,{children:"NER Model"})," and ",(0,n.jsx)(t.strong,{children:"POS Tagging"})," and through the results of each of it, I will be postulating a multilayered checking which will give good accuracy over detection.Applying checks on multiple levels and limiting it down to only the part where only the copyright statement is present will definitely help in detection of False Positives."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);