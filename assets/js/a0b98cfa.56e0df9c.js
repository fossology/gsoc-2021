"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1123],{22552:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(74848),i=s(28453);const o={title:"Week 7",author:"Krishna Mahato",author_url:"https://github.com/krishna9304",last_updated:"31st July, 2022",author_image_url:"https://avatars.githubusercontent.com/u/71918441?v=4",tags:["gsoc22","react","Week 7"]},r=void 0,a={id:"2022/ui/updates/krishna/2022-07-31",title:"Week 7",description:"\x3c!--",source:"@site/docs/2022/ui/updates/krishna/2022-07-31.md",sourceDirName:"2022/ui/updates/krishna",slug:"/2022/ui/updates/krishna/2022-07-31",permalink:"/gsoc/docs/2022/ui/updates/krishna/2022-07-31",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/krishna/2022-07-31.md",tags:[{inline:!0,label:"gsoc22",permalink:"/gsoc/docs/tags/gsoc-22"},{inline:!0,label:"react",permalink:"/gsoc/docs/tags/react"},{inline:!0,label:"Week 7",permalink:"/gsoc/docs/tags/week-7"}],version:"current",frontMatter:{title:"Week 7",author:"Krishna Mahato",author_url:"https://github.com/krishna9304",last_updated:"31st July, 2022",author_image_url:"https://avatars.githubusercontent.com/u/71918441?v=4",tags:["gsoc22","react","Week 7"]},sidebar:"2022",previous:{title:"Week 6",permalink:"/gsoc/docs/2022/ui/updates/krishna/2022-07-24"},next:{title:"Week 8",permalink:"/gsoc/docs/2022/ui/updates/krishna/2022-08-07"}},d={},l=[{value:"Goals for the week",id:"goals-for-the-week",level:2},{value:"API Docs (<code>POST /users</code>)",id:"api-docs-post-users",level:2},{value:"Exploring upload-permissions plugin and designing the API",id:"exploring-upload-permissions-plugin-and-designing-the-api",level:2},{value:"Conclusions and further plans",id:"conclusions-and-further-plans",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"goals-for-the-week",children:"Goals for the week"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sl. No."}),(0,t.jsx)(n.th,{children:"Initial Goals"}),(0,t.jsx)(n.th,{children:"Completed"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1."}),(0,t.jsx)(n.td,{children:"Solve requested changes on existing PRs"}),(0,t.jsx)(n.td,{children:"Done"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2."}),(0,t.jsxs)(n.td,{children:["Write the API docs for ",(0,t.jsx)(n.code,{children:"POST /users"})," in openapi.yaml"]}),(0,t.jsx)(n.td,{children:"Done"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3."}),(0,t.jsx)(n.td,{children:"Design the API for changing the upload permissions"}),(0,t.jsx)(n.td,{children:"Done"})]})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"api-docs-post-users",children:["API Docs (",(0,t.jsx)(n.code,{children:"POST /users"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["I completed writing the docs for the ",(0,t.jsx)(n.code,{children:"/users"})," POST route in the swagger ",(0,t.jsx)(n.code,{children:"openapi.yaml"})," file and it looked like mentioned below ---"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/users:\n    post:\n        operationId: createUser\n        tags:\n        - User\n        - Admin\n        summary: Create a new user\n        description: >\n        Create a new user\n        requestBody:\n        required: true\n        content:\n            application/json:\n            schema:\n                allOf:\n                - $ref: '#/components/schemas/User'\n                - type: object\n                    properties:\n                    user_pass:\n                        type: string\n                    defaultVisibility:\n                        type: string\n                        enum:\n                        - public\n                        - protected\n                        - private\n                    required:\n                    - name\n            application/x-www-form-urlencoded:\n            schema:\n                allOf:\n                - $ref: '#/components/schemas/User'\n                - type: object\n                    properties:\n                    user_pass:\n                        type: string\n                    defaultVisibility:\n                        type: string\n                        enum:\n                        - public\n                        - protected\n                        - private\n                    required:\n                    - name\n        responses:\n        '201':\n            description: User created successfully\n            content:\n            application/json:\n                schema:\n                $ref: '#/components/schemas/Info'\n        '409':\n            description: User with the same email or username already exists\n            content:\n            application/json:\n                schema:\n                $ref: '#/components/schemas/Info'\n        '500':\n            description: Internal server error with details\n            content:\n            application/json:\n                schema:\n                $ref: '#/components/schemas/Info'\n        default:\n            $ref: '#/components/responses/defaultResponse'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exploring-upload-permissions-plugin-and-designing-the-api",children:"Exploring upload-permissions plugin and designing the API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["I took some time to understand the functionality of the ",(0,t.jsx)(n.code,{children:"upload-permssions"})," plugin's methods and explored the existing functionalities."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"I realised how the format of the request body should be by monitoring the network logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" mod: upload_permissions\n folder: 1\n upload: 3\n alluploadsperm: 0\n newperm: 0\n newgroup: 5\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["So if we observe the parameters, we see that we need the ",(0,t.jsx)(n.code,{children:"folderId"}),", ",(0,t.jsx)(n.code,{children:"uploadId"}),", ",(0,t.jsx)(n.code,{children:"allUploadsPermission"})," for setting a common permision for every upload in a folder, ",(0,t.jsx)(n.code,{children:"newperm"})," for setting up the new permission for the upload and ",(0,t.jsx)(n.code,{children:"newGroup"})," which is the group Id for which the permissons are being set."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Keeping the above factors in mind, the API design comes out to be something like mentioned below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/uploads/{id}/permissions:\nparameters:\n  - name: id\n    required: true\n    description: Enter any upload id\n    in: path\n    schema:\n      type: integer\nput:\n  operationId: setUploadPermissions\n  tags:\n    - Upload\n  summary: Set permissions for a upload in a folder for different groups\n  description: >\n    Set permissions for a upload in a folder for different groups\n  requestBody:\n    content:\n      application/json:\n        schema:\n          type: object\n          properties:\n            folderId:\n              type: integer\n              description: Enter a folder id\n            allUploadsPermission:\n              type: boolean\n              enum:\n              - true\n              - false\n              description: Apply same permissions to all uploads in this folder\n            groupId:\n              type: integer\n              description: Enter the id of the group you want to add or edit permission for this upload\n            newPermission:\n              type: string\n              enum:\n              - none\n              - read_only\n              - read_write\n              - clearing_admin\n              - admin\n              description: Select the permission for selected group\n            publicPermission:\n              type: string\n              enum:\n              - none\n              - read_only\n              - read_write\n              - clearing_admin\n              - admin\n              description: Select the public permission for this upload\n          required:\n            - allUploadsPermission\n  responses:\n    '202':\n      description: Permissions updated successfully\n      content:\n        application/json:\n          schema:\n            type: array\n            items:\n              $ref: '#/components/schemas/Info'\n    '400':\n      description: Bad Request\n      content:\n        application/json:\n          schema:\n            type: array\n            items:\n              $ref: '#/components/schemas/Info'\n    '404':\n      description: Upload does not exist\n      content:\n        application/json:\n          schema:\n            type: array\n            items:\n              $ref: '#/components/schemas/Info'\n    '503':\n      description: Scheduler is not running\n      content:\n        application/json:\n          schema:\n            type: array\n            items:\n              $ref: '#/components/schemas/Info'\n    default:\n      $ref: '#/components/responses/defaultResponse'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusions-and-further-plans",children:"Conclusions and further plans"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get the API design approved by the mentors and start working on the implementation."}),"\n",(0,t.jsxs)(n.li,{children:["Study the UI behaviour of the ",(0,t.jsx)(n.code,{children:"upload-permissions"})," page and realise the requirements of the UI implementaion in react."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);