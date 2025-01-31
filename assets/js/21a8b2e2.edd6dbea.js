"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1786],{15035:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=n(74848),i=n(28453);const r={title:"Week 0",author:"Shreya Singh"},o="Coding Week-0 Meeting",a={id:"2021/minerva/updates/2021-06-07",title:"Week 0",description:"\x3c!--",source:"@site/docs/2021/minerva/updates/2021-06-07.md",sourceDirName:"2021/minerva/updates",slug:"/2021/minerva/updates/2021-06-07",permalink:"/gsoc/docs/2021/minerva/updates/2021-06-07",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/minerva/updates/2021-06-07.md",tags:[],version:"current",frontMatter:{title:"Week 0",author:"Shreya Singh"},sidebar:"2021",previous:{title:"Introduction",permalink:"/gsoc/docs/2021/minerva/"},next:{title:"Week 1",permalink:"/gsoc/docs/2021/minerva/updates/2021-06-15"}},l={},h=[{value:"Attendees",id:"attendees",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Week 0 Progress",id:"week-0-progress",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"coding-week-0-meeting",children:"Coding Week-0 Meeting"})}),"\n",(0,t.jsx)(s.h3,{id:"attendees",children:"Attendees"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/hastagAB",children:"Ayush Bhardwaj "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/vasudevmaduri",children:"Vasudev Maduri "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/OmarAbdelSamea",children:"Omar Mohamed "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap "})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/SinghShreya05",children:"Shreya Singh "})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"discussions",children:"Discussions"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Brainstormed on various ways through which dataset can be generated, and broke it down into different parts."}),"\n",(0,t.jsx)(s.li,{children:"Python library to be used in text generation using regex - Xeger/Intxeger"}),"\n",(0,t.jsxs)(s.li,{children:["To reuse ",(0,t.jsx)(s.a,{href:"https://github.com/hastagAB/SPDX-OSS-Dataset/blob/master/script.py",children:"Script"})," to n-gram the paragraphs of license texts and to generate different permutations and combinations of them."]}),"\n",(0,t.jsxs)(s.li,{children:["Regex of different licenses can be extracted from ",(0,t.jsx)(s.a,{href:"https://spdx.org/licenses/licenses.json",children:"licenses.json"}),", ",(0,t.jsx)(s.a,{href:"https://spdx.org/licenses/exceptions.json",children:"exceptions.json"}),", or ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/blob/master/src/nomos/agent/STRINGS.in",children:"STRINGS.in"})]}),"\n",(0,t.jsx)(s.li,{children:"Shifting the codebase of Atarashi to dask/vaex will boost the runtime. This to be done in parallel with the contribution. Results from few python files showed a significant boost to runtime."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"week-0-progress",children:"Week 0 Progress"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["I reused the ",(0,t.jsx)(s.a,{href:"https://github.com/hastagAB/SPDX-OSS-Dataset/blob/master/script.py",children:"script.py"})," file to split the files in different combinations of paras that will create its combinations: like para1+para3, para2+para4 after each traversal."]}),"\n",(0,t.jsx)(s.li,{children:"Different org licenses are 60-70% and the ones with different versions are 90% similar. So to the split files, keywords and regex of the specific license_header can be added."}),"\n",(0,t.jsxs)(s.li,{children:['Tested Intxeger performance on the regex from STRINGS.in file. We are able to generate "Nsamples", and add them to all the paras, the randomness could be minimized.\n',(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:'x = intxeger.build(r"motosoto open source licen[cs]e =FEW= (v|version )0\\.?9\\.?1")'}),"\n",(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:"print(x.sample(N=5))"}),"\n",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Output"})})," : ['motosoto open source license =FEW= version 0.9.1', 'motosoto open source licence =FEW= version 0.9.1', 'motosoto open source licence =FEW= v0.91', 'motosoto open source license =FEW= v0.91', 'motosoto open source license =FEW= v0.9.1']"]}),"\n",(0,t.jsx)(s.li,{children:"Generated statements in Nsamples were unique which will automatically make the generated text files unique."}),"\n",(0,t.jsx)(s.li,{children:"The number of datasets generated will depend on the number of paras + Nsamples."}),"\n",(0,t.jsxs)(s.li,{children:["Regex from SPDX released ",(0,t.jsx)(s.a,{href:"https://spdx.org/licenses/licenses.json",children:"licenses.json"})," and ",(0,t.jsx)(s.a,{href:"https://spdx.org/licenses/exceptions.json",children:"exceptions.json"})," can be extracted by redirecting to detailsUrl of JSON file -> standardLicenseTemplate (regex) -> licenseText (complete text)."]}),"\n",(0,t.jsxs)(s.li,{children:["Work Samples : ",(0,t.jsx)(s.a,{href:"https://colab.research.google.com/drive/1Q49H5RhZ8Z6aG6EYQJlxbo4JOvAg8K0v?usp=sharing",children:"Texts-Intxeger.ipynb"}),", ",(0,t.jsx)(s.a,{href:"https://colab.research.google.com/drive/1z6X27pGzDIO2dHdfwYnpWZy1kYhEK4Th?usp=sharing",children:"Texts-difflibraries.ipynb"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,t.jsx)(s.p,{children:"Implementation of Intxeger on one of the licenses and generating files using it."})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);