"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[5069],{63113:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453);const n={title:"Week 6",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc23","rest"]},c=void 0,a={id:"2023/rest/updates/soham/2023-07-16",title:"Week 6",description:"\x3c!--",source:"@site/docs/2023/rest/updates/soham/2023-07-16.md",sourceDirName:"2023/rest/updates/soham",slug:"/2023/rest/updates/soham/2023-07-16",permalink:"/gsoc/docs/2023/rest/updates/soham/2023-07-16",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/rest/updates/soham/2023-07-16.md",tags:[{inline:!0,label:"gsoc23",permalink:"/gsoc/docs/tags/gsoc-23"},{inline:!0,label:"rest",permalink:"/gsoc/docs/tags/rest"}],version:"current",frontMatter:{title:"Week 6",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc23","rest"]},sidebar:"2023",previous:{title:"Week 5",permalink:"/gsoc/docs/2023/rest/updates/soham/2023-07-05"},next:{title:"Week 7",permalink:"/gsoc/docs/2023/rest/updates/soham/2023-07-28"}},r={},d=[{value:"Activities",id:"activities",level:2},{value:"Screenshots",id:"screenshots",level:3},{value:"1. Response for total copyrights <code>uploads/{uploadId}/item/{itemid}/totalcopyrights?status=active/inactive</code>",id:"1-response-for-total-copyrights-uploadsuploadiditemitemidtotalcopyrightsstatusactiveinactive",level:4},{value:"2. Conf info response <code>/uploads/{id}/conf</code>",id:"2-conf-info-response-uploadsidconf",level:4},{value:"3. New customise endpoint response <code>/customise</code>",id:"3-new-customise-endpoint-response-customise",level:4},{value:"Next Week&#39;s Expectations",id:"next-weeks-expectations",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"activities",children:"Activities"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Updated Pull Request for getting total copyrights. Included query parameters to get seperate response for active and inactive copyrights. ",(0,o.jsx)(s.code,{children:"GET"})," ",(0,o.jsx)(s.code,{children:"uploads/{uploadId}/item/{itemid}/totalcopyrights?status=active/inactive"}),": ",(0,o.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2488",children:"#2488"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Updated Pull Request to get conf info from the server. ",(0,o.jsx)(s.code,{children:"GET"})," ",(0,o.jsx)(s.code,{children:"/uploads/{id}/conf"}),": ",(0,o.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2505",children:"#2505"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Updated Pull Request to get conf info from the server. ",(0,o.jsx)(s.code,{children:"GET"})," ",(0,o.jsx)(s.code,{children:"/uploads/{id}/conf"}),": ",(0,o.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2505",children:"#2505"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Added reformatted response for the customise page data endpoint. ",(0,o.jsx)(s.code,{children:"GET"})," ",(0,o.jsx)(s.code,{children:"/customise"})]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"screenshots",children:"Screenshots"}),"\n",(0,o.jsxs)(s.h4,{id:"1-response-for-total-copyrights-uploadsuploadiditemitemidtotalcopyrightsstatusactiveinactive",children:["1. Response for total copyrights ",(0,o.jsx)(s.code,{children:"uploads/{uploadId}/item/{itemid}/totalcopyrights?status=active/inactive"})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"total-copyrights-response",src:t(69757).A+"",width:"573",height:"534"})}),"\n",(0,o.jsxs)(s.h4,{id:"2-conf-info-response-uploadsidconf",children:["2. Conf info response ",(0,o.jsx)(s.code,{children:"/uploads/{id}/conf"})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"conf-response",src:t(73288).A+"",width:"1318",height:"666"})}),"\n",(0,o.jsxs)(s.h4,{id:"3-new-customise-endpoint-response-customise",children:["3. New customise endpoint response ",(0,o.jsx)(s.code,{children:"/customise"})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"customise-response",src:t(57409).A+"",width:"545",height:"670"})}),"\n",(0,o.jsx)(s.h2,{id:"next-weeks-expectations",children:"Next Week's Expectations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Modify the existing endpoints according to the suggestions from mentors"}),"\n",(0,o.jsx)(s.li,{children:"Start developing Update endpoints as for the existing GET endpoints"}),"\n",(0,o.jsx)(s.li,{children:"fix existing bugs from some of the endpoints."}),"\n",(0,o.jsx)(s.li,{children:"Discuss with the mentors on the priority of the upcoming endpoints."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},73288:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/confInfo_new-4854ca908333b089e4a02a0a0aac0bb6.png"},69757:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/totalResponse_new-0f9a2b811f4ae03b39da6a11091aa66e.png"},57409:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/customiseData-cf3bf9353a8f64c457ce22af03cd6969.png"},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>a});var o=t(96540);const i={},n=o.createContext(i);function c(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);