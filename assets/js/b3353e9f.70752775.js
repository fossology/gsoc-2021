"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[8479],{82136:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=s(74848),n=s(28453);const d={title:"Week 3",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc23","rest"]},l=void 0,c={id:"2023/rest/updates/samuel/2023-06-15",title:"Week 3",description:"\x3c!--",source:"@site/docs/2023/rest/updates/samuel/2023-06-15.md",sourceDirName:"2023/rest/updates/samuel",slug:"/2023/rest/updates/samuel/2023-06-15",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-06-15",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/rest/updates/samuel/2023-06-15.md",tags:[{inline:!0,label:"gsoc23",permalink:"/gsoc/docs/tags/gsoc-23"},{inline:!0,label:"rest",permalink:"/gsoc/docs/tags/rest"}],version:"current",frontMatter:{title:"Week 3",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc23","rest"]},sidebar:"2023",previous:{title:"Week 2",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-06-08"},next:{title:"Week 4",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-06-22"}},o={},a=[{value:"Activities",id:"activities",level:2},{value:"Some Screenshots",id:"some-screenshots",level:3},{value:"1. Remove main license API <code>/uploads/{id}/licenses/{licenseId}/main</code>",id:"1-remove-main-license-api-uploadsidlicenseslicenseidmain",level:4},{value:"2. Get main licenses API <code>/uploads/{id}/licenses/main</code>",id:"2-get-main-licenses-api-uploadsidlicensesmain",level:4},{value:"3. Add new license decision API <code>/uploads/{id}/items/{itemId}/licenses</code>",id:"3-add-new-license-decision-api-uploadsiditemsitemidlicenses",level:4},{value:"4. Delete License decision API <code>/uploads/{id}/items/{itemId}/licenses/{licenseId}</code>",id:"4-delete-license-decision-api-uploadsiditemsitemidlicenseslicenseid",level:4},{value:"5. Get all license decisions for an item API <code>/uploads/{id}/items/{itemId}/licenses</code>",id:"5-get-all-license-decisions-for-an-item-api-uploadsiditemsitemidlicenses",level:4},{value:"6. Update the clearing info API <code>/uploads/{id}/items/{itemId}/licenses</code>",id:"6-update-the-clearing-info-api-uploadsiditemsitemidlicenses",level:4},{value:"7. Get clearing history API <code>/uploads/{id}/items/{itemId}/clearing_history</code>",id:"7-get-clearing-history-api-uploadsiditemsitemidclearing_history",level:4},{value:"Next week&#39;s expectations",id:"next-weeks-expectations",level:2}];function r(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"activities",children:"Activities"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Added the REST API to remove a particular main license from the upload: ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2463",children:"#2463"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the REST API to retrieve all the main licenses assigned on a particular upload: ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2465",children:"#2465"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the REST API to add new license decision for an item: ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2466",children:"#2466"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the REST API to delete a specific license decision assigned on an item:  ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2469",children:"#2469"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the REST API to list the license decisions for a specific item:  ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2470",children:"#2470"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the REST API to update the clearing info (",(0,t.jsx)(i.strong,{children:"License text"}),", ",(0,t.jsx)(i.strong,{children:"acknowledgement"})," & ",(0,t.jsx)(i.strong,{children:"Comment"}),") for a specific license decision on the item:  ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2471",children:"#2471"})]}),"\n",(0,t.jsxs)(i.li,{children:["Added the REST API to retrieve the clearing history for a specific item: ",(0,t.jsx)(i.a,{href:"https://github.com/fossology/fossology/pull/2477",children:"#2477"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"some-screenshots",children:"Some Screenshots"}),"\n",(0,t.jsxs)(i.h4,{id:"1-remove-main-license-api-uploadsidlicenseslicenseidmain",children:["1. Remove main license API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/licenses/{licenseId}/main"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"delete-main-license",src:s(3491).A+"",width:"1464",height:"621"})}),"\n",(0,t.jsxs)(i.h4,{id:"2-get-main-licenses-api-uploadsidlicensesmain",children:["2. Get main licenses API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/licenses/main"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"get-main-licenses",src:s(44679).A+"",width:"1438",height:"591"})}),"\n",(0,t.jsxs)(i.h4,{id:"3-add-new-license-decision-api-uploadsiditemsitemidlicenses",children:["3. Add new license decision API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/items/{itemId}/licenses"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"add-license-decision",src:s(60781).A+"",width:"1441",height:"579"})}),"\n",(0,t.jsxs)(i.h4,{id:"4-delete-license-decision-api-uploadsiditemsitemidlicenseslicenseid",children:["4. Delete License decision API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/items/{itemId}/licenses/{licenseId}"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"delete-license-decision",src:s(38082).A+"",width:"1456",height:"472"})}),"\n",(0,t.jsxs)(i.h4,{id:"5-get-all-license-decisions-for-an-item-api-uploadsiditemsitemidlicenses",children:["5. Get all license decisions for an item API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/items/{itemId}/licenses"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"get-license-decisions",src:s(76156).A+"",width:"1837",height:"771"})}),"\n",(0,t.jsxs)(i.h4,{id:"6-update-the-clearing-info-api-uploadsiditemsitemidlicenses",children:["6. Update the clearing info API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/items/{itemId}/licenses"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"update-license-decision",src:s(6509).A+"",width:"891",height:"483"})}),"\n",(0,t.jsxs)(i.h4,{id:"7-get-clearing-history-api-uploadsiditemsitemidclearing_history",children:["7. Get clearing history API ",(0,t.jsx)(i.code,{children:"/uploads/{id}/items/{itemId}/clearing_history"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"get-clearing-history",src:s(95737).A+"",width:"1876",height:"772"})}),"\n",(0,t.jsx)(i.h2,{id:"next-weeks-expectations",children:"Next week's expectations"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Add the PR for the REST API to schedule the bulk scan."}),"\n",(0,t.jsx)(i.li,{children:"Add the PR for the REST API to handle the three-pointers functionality."}),"\n",(0,t.jsx)(i.li,{children:"Add the REST API to retrieve the positions for the highlighting the content of the file."}),"\n",(0,t.jsx)(i.li,{children:"Add the REST API for the Tree view: Reuse Summary, Scanner Details (GET & for filter)."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},60781:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/add_new_license_decision-5930bde8b96ef8cd02bb38e6bd06da3b.png"},38082:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/delete_license_decision-641e822431bba899f2455cb80d135851.png"},3491:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/delete_main_license-536ab202b0fe42a27fe361e3d30901ad.png"},76156:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/get_all_license_decisions-f4808072942acbd465ce1a500e9121f2.png"},95737:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/get_clearing_history-7cc330fbefe29e25a978e7bffabcd0d0.png"},44679:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/get_main_licenses-1437c07a62affeb3f918e6dd81c438ee.png"},6509:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/set_clearing_info-63fa0fd9e6b56057a9293161c305f163.png"},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>c});var t=s(96540);const n={},d=t.createContext(n);function l(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);