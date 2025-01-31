"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[3787],{71463:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(74848),s=i(28453);const r={title:"Week 12",author:"Abdelrahman Jamal"},o=void 0,l={id:"2023/copyrights/updates/2023-08-16",title:"Week 12",description:"\x3c!--",source:"@site/docs/2023/copyrights/updates/2023-08-16.md",sourceDirName:"2023/copyrights/updates",slug:"/2023/copyrights/updates/2023-08-16",permalink:"/gsoc/docs/2023/copyrights/updates/2023-08-16",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-08-16.md",tags:[],version:"current",frontMatter:{title:"Week 12",author:"Abdelrahman Jamal"},sidebar:"2023",previous:{title:"Week 11",permalink:"/gsoc/docs/2023/copyrights/updates/2023-08-09"},next:{title:"Week 13",permalink:"/gsoc/docs/2023/copyrights/updates/2023-08-23"}},d={},a=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"1. Embedding Methods Testing:",id:"1-embedding-methods-testing",level:3},{value:"2. GloVe Embedding Analysis:",id:"2-glove-embedding-analysis",level:3},{value:"3. FastText Experiments:",id:"3-fasttext-experiments",level:3},{value:"4. Performance Benchmarks:",id:"4-performance-benchmarks",level:3},{value:"5. Exploratory Testing of NER Models:",id:"5-exploratory-testing-of-ner-models",level:3},{value:"6. Trials with Compact spaCy Model:",id:"6-trials-with-compact-spacy-model",level:3},{value:"Conclusion and Future Plans:",id:"conclusion-and-future-plans",level:2},{value:"NER Model Exploration",id:"ner-model-exploration",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(August,16,2023)"})}),"\n",(0,t.jsx)(n.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/hastagAB",children:"Ayush"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updates",children:"Updates:"}),"\n",(0,t.jsx)(n.h3,{id:"1-embedding-methods-testing",children:"1. Embedding Methods Testing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Started the week by testing the performance of different embedding methods in conjunction with my new preprocessing function."}),"\n",(0,t.jsx)(n.li,{children:"Using GloVe, achieved an accuracy with around 1.24% misclassified copyrights and 1.95% misclassified false positives."}),"\n",(0,t.jsx)(n.li,{children:"Despite variations in preprocessing parameters, GloVe's performance lagged considerably behind the best model I've developed using TF-IDF \u2014 almost a tenfold difference."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-glove-embedding-analysis",children:"2. GloVe Embedding Analysis:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Conducted an analysis to determine the proportion of words in the datasets recognized by GloVe:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Embeddings found for 60.68% of vocab"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Embeddings found for 91.12% of all text"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Given that copyrights predominantly contain elements like names, dates, and organizations, the subpar performance of GloVe \u2014 not specifically trained on this data \u2014 in comparison to TF-IDF became clearer."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-fasttext-experiments",children:"3. FastText Experiments:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Experimental trials with FastText embeddings did not lead to significant performance improvements, even with different preprocessing."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-performance-benchmarks",children:"4. Performance Benchmarks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Current best performance indicates 0.16% misclassifications for copyrights and 0.48% for false positive misclassifications."}),"\n",(0,t.jsx)(n.li,{children:"These numbers can be reduced further to 0.04% and 3.17%, respectively, by applying a stricter confidence threshold of 0.99."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-exploratory-testing-of-ner-models",children:"5. Exploratory Testing of NER Models:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Initiated testing of Named Entity Recognition (NER) models to potentially replace the copyright holder entity."}),"\n",(0,t.jsx)(n.li,{children:"Due to recurring mentions of numerous copyright holders across different files and dataset rows, there's a concern about the model's generalization capability. The idea is to use NER to replace these mentions with generic tags for persons and organizations."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-trials-with-compact-spacy-model",children:"6. Trials with Compact spaCy Model:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Conducted initial tests with the compact spaCy English model due to space limitations."}),"\n",(0,t.jsxs)(n.li,{children:["Preliminary results were not very promising:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"] ] copyrightsymbol ] date [siemens (ORG) ag"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"] ] copyrightsymbol ] date [siemens (ORG) ag ] author [gaurav (PERSON) mishra ] email"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"] copyright ] copyrightsymbol ] date ] date [free (ORG) software foundation inc franklin street [fifth (ORDINAL) ] floor [boston (ORG) ma date date ] usa"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The model could recognize some entities, but significant refinement is needed to improve its reliability in detecting PERSON and ORG entities."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion-and-future-plans",children:"Conclusion and Future Plans:"}),"\n",(0,t.jsx)(n.h3,{id:"ner-model-exploration",children:"NER Model Exploration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Plan to explore other pretrained NER models that might be suitable for the task at hand."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);