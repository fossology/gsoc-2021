"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[7593],{61307:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(74848),t=n(28453);const r={title:"Week 11",author:"Abdelrahman Jamal"},l=void 0,a={id:"2023/copyrights/updates/2023-08-09",title:"Week 11",description:"\x3c!--",source:"@site/docs/2023/copyrights/updates/2023-08-09.md",sourceDirName:"2023/copyrights/updates",slug:"/2023/copyrights/updates/2023-08-09",permalink:"/gsoc/docs/2023/copyrights/updates/2023-08-09",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-08-09.md",tags:[],version:"current",frontMatter:{title:"Week 11",author:"Abdelrahman Jamal"},sidebar:"2023",previous:{title:"Week 10",permalink:"/gsoc/docs/2023/copyrights/updates/2023-08-02"},next:{title:"Week 12",permalink:"/gsoc/docs/2023/copyrights/updates/2023-08-16"}},o={},c=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"Datasets &amp; Findings:",id:"datasets--findings",level:4},{value:"Model Performance:",id:"model-performance",level:4},{value:"External Datasets Testing:",id:"external-datasets-testing",level:4},{value:"Feature Extraction &amp; LDA:",id:"feature-extraction--lda",level:4},{value:"Language Detection:",id:"language-detection",level:4},{value:"GitHub Repository:",id:"github-repository",level:4},{value:"Conclusion &amp; Future Plans:",id:"conclusion--future-plans",level:2},{value:"Language Detection",id:"language-detection-1",level:3},{value:"Preprocessing Improvements",id:"preprocessing-improvements",level:3},{value:"Feature Extraction",id:"feature-extraction",level:3},{value:"Documentation",id:"documentation",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"(August,09,2023)"})}),"\n",(0,i.jsx)(s.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/hastagAB",children:"Ayush"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/ag4ums",children:"Anupam"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"updates",children:"Updates:"}),"\n",(0,i.jsx)(s.h4,{id:"datasets--findings",children:"Datasets & Findings:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Dataset Corrections"}),": This week commenced with a detailed inspection of datasets which led to the rectification of various errors. The corrected datasets and predictions from the current model have been updated in ",(0,i.jsx)(s.a,{href:"https://docs.google.com/spreadsheets/d/132NnbJT4nqb-hxPX-XRFvUWTUg9SW0-ueW2YkpykgSk/edit?usp=sharing",children:"this spreadsheet"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Inconsistencies Addressed"}),": I found that the treatment of separate language rows varied across datasets. To maintain consistency, all such records have been treated as copyrights, requiring manual intervention later."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Annotating Mistakes"}),": Through model predictions, I detected errors in dataset annotations. These errors have been fixed and the updates can be found in the aforementioned spreadsheet."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Dataset Merging"}),": Given the presence of different languages across datasets, I decided to consolidate all datasets for training, setting aside 20% for testing. The new dataset comprises:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Class 0 (copyrights)"}),": 75.22% (16377 rows)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Class 1"}),": 24.77% (5393 rows)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Total rows"}),": 21770"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Additional Dataset"}),": Gaurav has provided an additional dataset comprising 26188 unique rows. I've yet to label this dataset."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"model-performance",children:"Model Performance:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"TF-IDF Vectorizer"}),": The model achieved significant results using the TF-IDF vectorizer, without additional preprocessing:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.32%"})," (52 out of 16377)"]}),"\n",(0,i.jsxs)(s.li,{children:["Class 1 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.61%"})," (33 out of 5393)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Preprocessing Enhancements"}),": I devised a preprocessing function which improved the model's performance. These enhancements include replacing digits, copyright symbols, emails, and more. This approach reduced the misclassifications:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0: ",(0,i.jsx)(s.strong,{children:"0.26%"})," (43 out of 16377)"]}),"\n",(0,i.jsxs)(s.li,{children:["Class 1: ",(0,i.jsx)(s.strong,{children:"0.82%"})," (44 out of 5393)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"TF-IDF Parameter Tweaking"}),": Further fine-tuning of TF-IDF parameters allowed the model to achieve:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.16%"})," (27 out of 16377)"]}),"\n",(0,i.jsxs)(s.li,{children:["Class 1 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.54%"})," (29 out of 5393)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Thresholding at 0.99"}),": Applying a threshold of 0.99 rendered impressive results:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.03%"})," (5 out of 16377)"]}),"\n",(0,i.jsxs)(s.li,{children:["Class 1 misclassifications: ",(0,i.jsx)(s.strong,{children:"4.6%"})," (248 out of 5393)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"external-datasets-testing",children:"External Datasets Testing:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Fossology-provided-2 dataset"}),": Initial results on this dataset indicated:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.46%"})," (27 out of 5808)"]}),"\n",(0,i.jsx)(s.li,{children:"However, after manual inspection, only 12 were genuine misclassifications."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Dataset from Paper"}),": I tested the model on the dataset from ",(0,i.jsx)(s.a,{href:"https://doi.org/10.1587/transinf.2020EDL8089",children:"this paper"}),". The results were:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0 misclassifications: ",(0,i.jsx)(s.strong,{children:"0.09%"})," (2 out of 2146)"]}),"\n",(0,i.jsxs)(s.li,{children:["Class 1 misclassifications: ",(0,i.jsx)(s.strong,{children:"1.32%"})," (2 out of 151)"]}),"\n",(0,i.jsx)(s.li,{children:"Notably, the two misclassifications in class 1 were found to be correctly predicted by our model."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"feature-extraction--lda",children:"Feature Extraction & LDA:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Feature Extraction from Paper"}),": Implementing the paper's feature extraction method yielded the following results:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Class 0 misclassifications: ",(0,i.jsx)(s.strong,{children:"2.91%"})," (477 out of 16377)"]}),"\n",(0,i.jsxs)(s.li,{children:["Class 1 misclassifications: ",(0,i.jsx)(s.strong,{children:"6.93%"})," (374 out of 5393)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"LDA Analysis"}),": Leveraging LDA, I identified the 20 most frequent words in each class, offering insights for potential feature extraction enhancements."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"language-detection",children:"Language Detection:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"cld3 Limitation"}),": Although ",(0,i.jsx)(s.code,{children:"cld3"})," proved efficient, its ",(0,i.jsx)(s.code,{children:"Apache License 2.0"})," is incompatible with Fossology's ",(0,i.jsx)(s.code,{children:"GNU General Public License v2.0"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"spaCy's Model"}),": Despite utilizing spaCy's language detection model, many English rows were misclassified as non-English and vice versa."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"github-repository",children:"GitHub Repository:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["I've established a ",(0,i.jsx)(s.a,{href:"https://github.com/Hero2323/Fossology-Reducing-Copyrights",children:"GitHub repository"})," to store all project files."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"conclusion--future-plans",children:"Conclusion & Future Plans:"}),"\n",(0,i.jsx)(s.h3,{id:"language-detection-1",children:"Language Detection"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Investigate more efficient language detection methods."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"preprocessing-improvements",children:"Preprocessing Improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Enhance preprocessing by using NER for name and organization replacements."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"feature-extraction",children:"Feature Extraction"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Delve deeper into feature extraction techniques."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Cleanup my documentation"}),"\n",(0,i.jsx)(s.li,{children:"Cleanup and update my GitHub repository."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(96540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);