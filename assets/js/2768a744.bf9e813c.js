"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1444],{28810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const d={sidebar_position:5,title:"Final Evaluation"},l=void 0,r={id:"2021/buildsystem/final-evaluation",title:"Final Evaluation",description:"\x3c!--",source:"@site/docs/2021/buildsystem/final-evaluation.md",sourceDirName:"2021/buildsystem",slug:"/2021/buildsystem/final-evaluation",permalink:"/gsoc/docs/2021/buildsystem/final-evaluation",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/final-evaluation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Final Evaluation"},sidebar:"2021",previous:{title:"First Evaluation",permalink:"/gsoc/docs/2021/buildsystem/first-evaluation"},next:{title:"Introduction",permalink:"/gsoc/docs/2021/copyrights/"}},o={},c=[{value:"The CMake Build system",id:"the-cmake-build-system",level:2},{value:"GitHub Actions CI/CD",id:"github-actions-cicd",level:2},{value:"Improvements over previous build system and CI",id:"improvements-over-previous-build-system-and-ci",level:3},{value:"Deliverables",id:"deliverables",level:3},{value:"How it works and how to use it?",id:"how-it-works-and-how-to-use-it",level:2},{value:"Known Issues and Drawbacks",id:"known-issues-and-drawbacks",level:3},{value:"Challenges Faced",id:"challenges-faced",level:3},{value:"Related Resources and Links",id:"related-resources-and-links",level:3},{value:"Future Development Plans",id:"future-development-plans",level:2},{value:"What did I learn from this project?",id:"what-did-i-learn-from-this-project",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"the-cmake-build-system",children:"The CMake Build system"}),"\n",(0,s.jsxs)(n.p,{children:["FOSSology is quite an old and mature project. The project has been using\nbare metal ",(0,s.jsx)(n.strong,{children:"Makefiles"}),". As the project is growing with new agents and\nmodernization it was required to have a modern build system."]}),"\n",(0,s.jsx)(n.p,{children:"The FOSSology is a suite of well-integrated and synchronized subprojects\n(called agents) written in C, C++, and PHP. Most of the major agents are\nin C, C++ and that made CMake an obvious choice for a new build system\nfor FOSSology. CMake is a versatile set of build, test, and packaging\ntools and is the most popular choice of C/C++ developers. CMake can be\nextended to create a build system for other languages too via custom\nscripts."}),"\n",(0,s.jsx)(n.h2,{id:"github-actions-cicd",children:"GitHub Actions CI/CD"}),"\n",(0,s.jsx)(n.p,{children:"Since the FOSSology project moved on Github, it has used only the free\nTravis CI service for OSS projects. At the time of writing the Travis CI\nhas reduced its free tier CI services. GitHub Actions provides faster\nbuilds. Since GitHub Actions is a fully managed service by GitHub, we\ndon't need to know how to scale and operate the infrastructure to run\nit."}),"\n",(0,s.jsx)(n.p,{children:"It is straightforward to use with GitHub because when we fork a\nrepository, the actions automatically get forked. This allows you to\ntest and build projects very efficiently and even run them closer to the\ndeveloper. Also, you have readily available access to the GitHub API,\nmaking it more popular among developers."}),"\n",(0,s.jsx)(n.h3,{id:"improvements-over-previous-build-system-and-ci",children:"Improvements over previous build system and CI"}),"\n",(0,s.jsx)(n.p,{children:"The new build system and CI brings a lot of improvements and features.\nThe list below describes them."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CMake enforces out-of-source builds. This was already possible with\nthe previous build system but not a strict requirement. This feature\nkeeps the source code clean and makes cleaning the build artifacts\neasy. (Just remove the build folder :)"}),"\n",(0,s.jsx)(n.li,{children:"One of the major improvements over the previous build system is\nfaster build times. CMake generates parallel build-enabled\nconfigurations for all generators. In our tests, the new build\nsystem is at least twice as fast as the previous one. With further\nimprovement in configuration, we will be able to further cut the\nbuild times."}),"\n",(0,s.jsxs)(n.li,{children:["Previously FOSSology can only be built using ",(0,s.jsx)(n.em,{children:"Unix Makefiles"}),". With\nCMake, we can now use many other popular generators such as ",(0,s.jsx)(n.em,{children:"Ninja"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Now it is also very flexible to choose different compilers. This\nwill help support more platforms and architecture in the future. As\nof now, we are experimenting with Clang compilers."}),"\n",(0,s.jsx)(n.li,{children:"FOSSology is quite an old project and a lot of agent testing code\nwas written in the last decade. Initially, none of them were\ncompatible with the new build system, but we were able to hack most\nof the test code using better-improved methods. Test times have also\nimproved."}),"\n",(0,s.jsx)(n.li,{children:"Migrating from Travis CI to GitHub Actions was another big move and\nfor the most part, it removes the dependency on a third-party CI\nservice. Along with that GitHub Actions provides better build times,\ntons of new features, and better integration with other GitHub\nservices."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deliverables",children:"Deliverables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Final Pull Request  - ",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/2075",children:"#2075"})]}),"\n",(0,s.jsxs)(n.li,{children:["Pull Request Branch  - ",(0,s.jsx)(n.a,{href:"https://github.com/avinal/fossology/tree/avinal/feat/buildsystem",children:"avinal/feat/buildsystem"})]}),"\n",(0,s.jsxs)(n.li,{children:["Working Branch (individual commits)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avinal/fossology/tree/avinal/feat/cmake-buildsystem%22",children:"avinal/feat/cmake-buildsystem"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avinal/fossology/tree/avinal/feat/testing%22",children:"avinal/feat/testing"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Project Issue  - ",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/issues/1913",children:"#1913"})]}),"\n",(0,s.jsxs)(n.li,{children:["Project Discussion  - ",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/discussions/1931",children:"#1931"})]}),"\n",(0,s.jsxs)(n.li,{children:["Weekly Reports","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://gsoc.avinal.space%22",children:"Personal Blog"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fossology.github.io/gsoc/docs/2021/buildsystem/%22",children:"FOSSology Official Blog"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CMake Build System Tasks"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"Agents"}),(0,s.jsx)(n.th,{children:"Build"}),(0,s.jsx)(n.th,{children:"Install"}),(0,s.jsx)(n.th,{children:"Testing"}),(0,s.jsx)(n.th,{children:"Packaging"}),(0,s.jsx)(n.th,{children:"Remarks"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"adj2nest"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"buckets"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"cli"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"copyright"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"debug"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"decider"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"deciderjob"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"delagent"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"9"}),(0,s.jsx)(n.td,{children:"demomod"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"(Not Used)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"example_wc_agent"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"(Not Used)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"clib"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"12"}),(0,s.jsx)(n.td,{children:"cpplib"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"13"}),(0,s.jsx)(n.td,{children:"phplib"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"1 functional test needs fix"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"maintagent"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"15"}),(0,s.jsx)(n.td,{children:"mimetype"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"monk"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17"}),(0,s.jsx)(n.td,{children:"ninka"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"(Deprecated)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"nomos"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"ojo"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"1 functional test needs fix"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"pkgagent"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"21"}),(0,s.jsx)(n.td,{children:"readmeoss"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"regexscan"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"(Deprecated)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"23"}),(0,s.jsx)(n.td,{children:"reportImport"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{children:"reuser"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"25"}),(0,s.jsx)(n.td,{children:"reso"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"26"}),(0,s.jsx)(n.td,{children:"scheduler"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Tests needs fix"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"27"}),(0,s.jsx)(n.td,{children:"softwareHeritage"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"28"}),(0,s.jsx)(n.td,{children:"spasht"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"29"}),(0,s.jsx)(n.td,{children:"spdx2"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"1 Test failing in CI"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"30"}),(0,s.jsx)(n.td,{children:"unifiedreport"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"31"}),(0,s.jsx)(n.td,{children:"ununpack"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Unit tests needs fix"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"32"}),(0,s.jsx)(n.td,{children:"wget_agent"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"Functional, Unit"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"32"}),(0,s.jsx)(n.td,{children:"www"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"NO"}),(0,s.jsx)(n.td,{children:"YES"}),(0,s.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"GitHub Actions CI Tasks"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"#"}),(0,s.jsx)(n.th,{children:"CI Tasks"}),(0,s.jsx)(n.th,{children:"Status"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"build"}),(0,s.jsx)(n.td,{children:"Added Ubuntu 20.04 GCC 8, 9 and Clang, GCC 7 not working"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"c/cpp unit test"}),(0,s.jsx)(n.td,{children:"Added, delagent, scheduler and ununpack test not working"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"phpunit tests"}),(0,s.jsx)(n.td,{children:"Added, delagent and scheduler test not working"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"workflow cahching"}),(0,s.jsx)(n.td,{children:"Not implemented"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"source install"}),(0,s.jsx)(n.td,{children:"Not implemented"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works-and-how-to-use-it",children:"How it works and how to use it?"}),"\n",(0,s.jsxs)(n.p,{children:["The new build system retains the modular and hierarchical structure of\nthe previous build system. On the other hand, the new build system\nprovides several new flags to control the build. The new build system\nforces out-of-source build instead of the previous in-source builds.\nThis keeps the source clutter-free and reduces the chance of\naccidentally deleting source files. ",(0,s.jsx)(n.em,{children:"Testing still needs some in-source\nartifacts, this will be solved once all the tests are fixed according to\nthe new build system."})]}),"\n",(0,s.jsx)(n.p,{children:"Each agent is a complete CMake sub-project with its independent\nconfiguration for building, installing, and testing. That means a single\nagent can be built and installed separately and even removed from the\ndefault build without breaking other builds. The directory structure is\nas below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 build                           # temporary directory for build artifacts\n\u251c\u2500\u2500 cmake                           # CMake modules for FOSSology\n\u2502   \u251c\u2500\u2500 FoPackaging.cmake           # CMake Packaging configurations\n\u2502   \u251c\u2500\u2500 FoUtilities.cmake           # Custom CMake utilities\n\u2502   \u251c\u2500\u2500 FoVersionFile.cmake         # VERSION version.php CMake template file\n\u2502   \u251c\u2500\u2500 SetDefaults.cmake           # CMake defaults for this project\n\u2502   \u251c\u2500\u2500 TestInstall.make.in         # Template makefile for install during tests\n\u2502   \u2514\u2500\u2500 VERSION.in                  # VERSION file template\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 agent-1                     # Agent sub-project\n\u2502   \u2502   \u251c\u2500\u2500 agent                   # Agent's source code directory\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 agent-source-code\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 CMakeLists.txt\n\u2502   \u2502   \u251c\u2500\u2500 agent_tests             # Agent's test directory\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Unit\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Functional\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 CMakeLists.txt\n\u2502   \u2502   \u251c\u2500\u2500 ui                      # Agent's UI source code\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 templates\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 agent-ui-code\n\u2502   \u2502   \u2514\u2500\u2500 CMakeLists.txt          # Agent's top-level CMake configuration\n:   :\n\u2502   \u251c\u2500\u2500 other agents\n:   :\n\u2502   \u2514\u2500\u2500 CMakeLists.txt              # Source intermediate CMake configuration\n:\n\u251c\u2500\u2500 other directories and files\n:\n\u2514\u2500\u2500 CMakeLists.txt                  # FOSSology Top-level CMake configuration\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"cmake"})," directory contains customized CMake modules and\ntemplates for FOSSology. This directory is required for all the\noperations. The general workflow of the new build system as well as how\nto use it as described below."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Since the new build system is still in review. You must fork\nFOSSology and pull the\n",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/2075",children:"#2075"})," pull\nrequest branch. Once you are in FOSSology root, run these commands."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git fetch https://github.com/avinal/fossology avinal/feat/buildsystem:buildsystem\ngit checkout buildsystem\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The first step towards building is to create a temporary directory\nfor storing intermediate files and build artifacts. By convention we\nuse a directory named ",(0,s.jsx)(n.code,{children:"build"}),", but you can use any\nname. (",(0,s.jsx)(n.strong,{children:"NOTE: For testing do not use other names"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir build\ncd build\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the next steps, we will configure the CMake project and generate\nthe required configurations. You can use several flags to control\nthe build. Given below are the flags available for this project."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"CMake Flags"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"-DCMAKE_INSTALL_PREFIX=<path>"})}),(0,s.jsx)(n.td,{children:"Sets the install prefix."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/usr/local"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:'-DAGENTS="agent1;agent2..."'})}),(0,s.jsx)(n.td,{children:"Only configure these agents."}),(0,s.jsx)(n.td,{children:"ALL AGENTS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"-DOFFLINE=<ON/OFF>"})}),(0,s.jsx)(n.td,{children:"Controls vendor generation, ON=NO"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"OFF"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"-DCMAKE_BUILD_TYPE=<type>"})}),(0,s.jsxs)(n.td,{children:["-   ",(0,s.jsx)(n.code,{children:"Debug"}),", ",(0,s.jsx)(n.code,{children:"Release"}),", ",(0,s.jsx)(n.code,{children:"RelWithDebInfo"}),",",(0,s.jsx)(n.code,{children:"MinSizeRel"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Debug"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"-DTESTING=<ON/OFF>"})}),(0,s.jsx)(n.td,{children:"Controls testing config generation"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"OFF"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"-DMONOPACK=<ON/OFF>"})}),(0,s.jsx)(n.td,{children:"Package adj2nest and ununpack seperately"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"OFF"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"-GNinja"})}),(0,s.jsx)(n.td,{children:"Use Ninja instead of Unix Makefiles"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Unix MakeFiles"})})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["There are lots of inbuilt CMake command-line options you can see them in the official ",(0,s.jsx)(n.a,{href:"https://cmake.org/cmake/help/v3.10/manual/cmake.1.html",children:"documentation"}),". Once you have chosen your flags we can now configure the project using the following commands."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# From build folder\ncd <name-of-build-directory>\ncmake <flags> ..\n"})}),"\n",(0,s.jsxs)(n.p,{children:["4 .  The next step is to build the project. You can use parallel jobs to build faster. For more options you can type ",(0,s.jsx)(n.code,{children:"cmake --help"})," or ",(0,s.jsx)(n.code,{children:"make --help"})," or ",(0,s.jsx)(n.code,{children:"ninja --help"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Common build command for all generators,\n# Default number of parallel builds depends on generator used\ncmake --build . --parallel <no-of-processes>\n\n# For Unix Makefiles, no parallel build by default\nmake -j <no-of-processes>\n\n# For Ninja, 8+ parallel build by default (depends on system)\nninja -j <no-of-processes>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Installing is also as easy as building. You can choose to install\nonly certain components even if you have built the whole project. If\nyou directly invoke the install command without building the\nproject, it will automatically build the project first."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# For Unix Makefiles\nmake install\n\n# For Ninja\nninja install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["While testing has some issues, but most of the testing is working\nfine. For now, you must build and run any test from the FOSSology\nroot directory only. You can choose to configure a single agent if\nyou want to test one agent only. See ",(0,s.jsx)(n.code,{children:"ctest --help"})," for\ncontrolling test runs."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Common testing command\nctest --parallel <no-of-processes>\n\n# For Unix Makefiles\nmake test\n\n# For Ninja\nninja test\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can package FOSSology, the packaging currently lacks copyright\nand conf files. But for testing purposes, you can use the following\ncommands. Similar to installing, if you run the package command\nwithout building the project, it will automatically build the\nproject first. See ",(0,s.jsx)(n.code,{children:"cpack --help"})," for more packaging\noptions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Common testing command\ncpack\n\n# For Unix Makefiles\nmake package\n\n# For Ninja\nninja package\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"known-issues-and-drawbacks",children:"Known Issues and Drawbacks"}),"\n",(0,s.jsx)(n.p,{children:"Although the transition from Makefiles to CMake and Travis CI to GitHub\nActions is almost complete and working as expected. But it is not free\nof drawbacks and issues. This section outlines the known issues at the\ntime of writing."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Coverage builds may fail with linking errors."}),"\n",(0,s.jsx)(n.li,{children:"Packaging prefix is the same as the install prefix. This requires\nthe developer to set the install prefix manually before packaging to\nproduce packages with the correct directory structure."}),"\n",(0,s.jsx)(n.li,{children:"Testing and packaging must be used from the FOSSology root\ndirectory. Not doing so may or may not configure the project as\nintended."}),"\n",(0,s.jsx)(n.li,{children:"Previously tests were written hardcoded for the Makefiles. But new\nbuild system requires all artifacts to be generated in a separate\ndirectory. This required me to add symbolic links wherever a\ngenerated script or file is expected. Tests can still leave some\nartifacts inside source folders."}),"\n",(0,s.jsx)(n.li,{children:"There is no easy way to install a particular agent from the\nFOSSology root directory."}),"\n",(0,s.jsxs)(n.li,{children:["Packages don't contain copyright, readme, and license files. CMake\ndoesn't provide a way to include these files. This is being tracked\nby issue\n",(0,s.jsx)(n.a,{href:"https://gitlab.kitware.com/cmake/cmake/-/issues/21832",children:"#21832"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"While packaging the symbolic links may or may not be dereferenced\nand hence results in copying the folder too in the target directory."}),"\n",(0,s.jsxs)(n.li,{children:["Running tests locally may require switching to ",(0,s.jsx)(n.code,{children:"fossy"}),"\nuser."]}),"\n",(0,s.jsx)(n.li,{children:"While configured for testing, it may give permission errors."}),"\n",(0,s.jsxs)(n.li,{children:["Scheduler, Ununpack, and Delagent unit and functional tests are not\nworking. I have added an issue\n",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/issues/2084",children:"#2084"})," to\ntrack the progress on fixing these tests."]}),"\n",(0,s.jsxs)(n.li,{children:["CMake doesn't generates uninstall targets. The closest thing to\nuninstall is ",(0,s.jsx)(n.a,{href:"https://gitlab.kitware.com/cmake/community/-/wikis/FAQ#can-i-do-make-uninstall-with-cmake",children:"this\nsnippet"}),".\nThis will be later added to the FOSSology."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"challenges-faced",children:"Challenges Faced"}),"\n",(0,s.jsx)(n.p,{children:"While this whole project was challenging, some aspects of it were\nunforeseen and more challenging. When I decided to go on with this\nproject I just had enough CMake knowledge to write a configuration for a\nvery small project. I had never used CMake on this big scale. On the\nother side, the FOSSology community is largely unknown to CMake so for\nall of us it was learn, practice, and implement. With support from\nmentors, I was able to overcome this challenge with flying colors."}),"\n",(0,s.jsx)(n.p,{children:"The other challenge was to understand the old build system, how they are\nall connected and what is the flow. The complexity can be imagined by\nthe fact that the most of code and configurations were written in the\ndecade before the last decade and haven't changed much since then."}),"\n",(0,s.jsx)(n.p,{children:"The most challenging task was to make tests work with the new build\nsystem. Since tests were mostly hardcoded and the new build system\nrefactored many of the files and directory, the tests were failing\ninitially. The testing part took me the most time. All thanks to my\nmentor Gaurav and my friend Sarita I was able to hack them to suit the\nnew build system."}),"\n",(0,s.jsx)(n.h3,{id:"related-resources-and-links",children:"Related Resources and Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fix FOSSology agent tests issue\n",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/issues/2084",children:"#2084"})]}),"\n",(0,s.jsxs)(n.li,{children:["feat(CI): Migrate API docs generation and deployment to GitHub\nActions pull request\n",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/1917",children:"#1917"})]}),"\n",(0,s.jsxs)(n.li,{children:["feat(CI): Migrate Static Checks and Analysis to GitHub Actions from\nTravis CI ",(0,s.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/1919",children:"#1919"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"future-development-plans",children:"Future Development Plans"}),"\n",(0,s.jsx)(n.p,{children:"There is a lot to do with the new build system and CI and it will\nprobably take a year or to reach a maturity point. I was able to meet\nmost of the goals but some of them are remaining."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix the tests, probably renovate them from the ground up."}),"\n",(0,s.jsx)(n.li,{children:"Find a hack for packaging problems."}),"\n",(0,s.jsx)(n.li,{children:"Improve and optimize the build."}),"\n",(0,s.jsx)(n.li,{children:"Modernise the source code, remove old, bloated code and replace them\naccording to new standards."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-did-i-learn-from-this-project",children:"What did I learn from this project?"}),"\n",(0,s.jsx)(n.p,{children:"This Google Summer of Code was the busiest time of my life for all good\nreasons. I learned a lot about license compliance and how it all works\nin the software industry. The next big thing is CMake. As I mentioned I\nwas just a novice user of CMake. Now I am confident that given any other\nlarge project I will be able to migrate it/improve it. I got to learn\nPHP, of which I did not know a single word before GSoC. And finally, I\nlearned about packing and testing. I had these courses but implementing\nthem myself and fixing them was a wholesome experience."}),"\n",(0,s.jsx)(n.p,{children:"Other than that I improved on my communication and presentation skills.\nCollaborating with fellow participants was one of the great things that\nhappened during GSoC."}),"\n",(0,s.jsx)(n.h2,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,s.jsx)(n.p,{children:"Google Summer of Code is the best thing that has happened to me this\nyear so far. Although there are numerous people to say thanks to, I want\nto mention key people who were my motivation and support during this\nperiod."}),"\n",(0,s.jsxs)(n.p,{children:["First of all, I want to thank and appreciate my mentors ",(0,s.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"}),", and ",(0,s.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"}),". Without the help and support from them, all this would not have been possible. They are very polite, knowledgeable, and helpful."]}),"\n",(0,s.jsxs)(n.p,{children:["I want to thank my friend and fellow participant ",(0,s.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita"}),". Thank you for being a collaborator, support, and motivation for attempting GSoC."]}),"\n",(0,s.jsx)(n.p,{children:"Finally, I want to thanks, my family and friends. I got to meet many awesome developers as my fellow participants from around the world, I wish we will do more collaboration in the future."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const i={},d=s.createContext(i);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);