"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[7913],{96141:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(74848),o=s(28453);const i={title:"Week 11",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc23","rest"]},l=void 0,c={id:"2023/rest/updates/samuel/2023-08-10",title:"Week 11",description:"\x3c!--",source:"@site/docs/2023/rest/updates/samuel/2023-08-10.md",sourceDirName:"2023/rest/updates/samuel",slug:"/2023/rest/updates/samuel/2023-08-10",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-08-10",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/rest/updates/samuel/2023-08-10.md",tags:[{inline:!0,label:"gsoc23",permalink:"/gsoc/docs/tags/gsoc-23"},{inline:!0,label:"rest",permalink:"/gsoc/docs/tags/rest"}],version:"current",frontMatter:{title:"Week 11",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc23","rest"]},sidebar:"2023",previous:{title:"Week 10",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-08-03"},next:{title:"Week 12",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-08-17"}},r={},d=[{value:"Activities",id:"activities",level:2},{value:"Some Screenshots",id:"some-screenshots",level:3},{value:"1. Unlink the folder contents API <code>/folders/contents/{contentId}/unlink</code>",id:"1-unlink-the-folder-contents-api-folderscontentscontentidunlink",level:4},{value:"2. Get all contents of a specific folder API <code>/folders/{folderId}/contents</code>",id:"2-get-all-contents-of-a-specific-folder-api-foldersfolderidcontents",level:4},{value:"3. Export licenses-list as CSV <code>/license/export</code>",id:"3-export-licenses-list-as-csv-licenseexport",level:4},{value:"Next week&#39;s expectations",id:"next-weeks-expectations",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"activities",children:"Activities"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added the REST API to unlink the folder contents: ",(0,n.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2552",children:"#2552"})]}),"\n",(0,n.jsxs)(t.li,{children:["Added the REST API to get all contents of a specific folder: ",(0,n.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2555",children:"#2555"})]}),"\n",(0,n.jsxs)(t.li,{children:["Added the REST API to export licenses-list as CSV: ",(0,n.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2562",children:"#2562"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"some-screenshots",children:"Some Screenshots"}),"\n",(0,n.jsxs)(t.h4,{id:"1-unlink-the-folder-contents-api-folderscontentscontentidunlink",children:["1. Unlink the folder contents API ",(0,n.jsx)(t.code,{children:"/folders/contents/{contentId}/unlink"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"unlink-folder-contents",src:s(44222).A+"",width:"1495",height:"348"})}),"\n",(0,n.jsxs)(t.h4,{id:"2-get-all-contents-of-a-specific-folder-api-foldersfolderidcontents",children:["2. Get all contents of a specific folder API ",(0,n.jsx)(t.code,{children:"/folders/{folderId}/contents"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"get-folder-contents",src:s(2299).A+"",width:"1509",height:"784"})}),"\n",(0,n.jsxs)(t.h4,{id:"3-export-licenses-list-as-csv-licenseexport",children:["3. Export licenses-list as CSV ",(0,n.jsx)(t.code,{children:"/license/export"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"export-licenses-list",src:s(21330).A+"",width:"1531",height:"714"})}),"\n",(0,n.jsx)(t.h2,{id:"next-weeks-expectations",children:"Next week's expectations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add the REST API to import obligation list from CSV."}),"\n",(0,n.jsx)(t.li,{children:"Add the REST API to export obligation list as CSV."}),"\n",(0,n.jsx)(t.li,{children:"Enhance the FOSSology API to support Multiple versions (V1 & V2)."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},2299:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/get_folder_contents-170b3375cea8e6629e64180a04e04738.png"},44222:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/unlink_folder_contents-1381c0cc64180172340037845f652b44.png"},21330:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/export_licenses_list-bd524bfc94f2bf765cc569ea7a85362c.png"},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(96540);const o={},i=n.createContext(o);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);