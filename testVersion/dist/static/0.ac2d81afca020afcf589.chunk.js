webpackJsonp([0],{149:function(t,a,i){"use strict";function e(t){o||i(506)}Object.defineProperty(a,"__esModule",{value:!0});var s=i(462),n=i(507),o=!1,c=i(141),r=e,l=c(s.a,n.a,!1,r,"data-v-5f2b7e8e",null);l.options.__file="src/views/index1.vue",a.default=l.exports},395:function(t,a,i){t.exports=i.p+"eccdf8a8dc660c4babce20759ca6e794.png"},400:function(t,a,i){"use strict";a.a={data:function(){return{}},components:{},created:function(){},methods:{goIndex:function(){"/homeEN"===this.$route.fullPath?$(document).scrollTop(0):this.$router.push({path:"/homeEN"})},change1:function(t){var a="home";return 1==t&&(a="homeEN"),void this.$router.push({path:a});var a}}}},401:function(t,a,i){"use strict";a.a={data:function(){return{lang:"zh-CN",mobileShow:!1,sqActive:!1}},created:function(){this.lang=localStorage.lang||"zh-CN",this.fetchDate(),$(".app-container").css({position:"inherit"})},watch:{$route:"fetchDate"},methods:{fetchDate:function(){this.mobileShow=!1,$(".app-container").css({position:"inherit"}),"/joinEN"===this.$route.fullPath?this.sqActive=!0:this.sqActive=!1},goSq:function(){if("/joinEN"===this.$route.fullPath){var t=$(document).height()-$(window).height();$(document).scrollTop(t)}else this.$router.push({path:"/joinEN"})},handleSwitch:function(t){this.lang=t,localStorage.lang=t,this.$store.commit("switchLang",t)},showMobileNav:function(){this.mobileShow=!this.mobileShow,this.mobileShow?$(".app-container").css({position:"fixed"}):$(".app-container").css({position:"inherit"})},change1:function(t){var a="/home";return 1==t&&(a="/homeEN"),void this.$router.push({path:a});var a}},mounted:function(){}}},409:function(t,a,i){"use strict";function e(t){o||i(410)}var s=i(400),n=i(411),o=!1,c=i(141),r=e,l=c(s.a,n.a,!1,r,"data-v-6979c1cc",null);l.options.__file="src/views/footer1.vue",a.a=l.exports},410:function(t,a){},411:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("footer",{staticClass:"bottom-footer"},[t._m(0),t._v(" "),i("ul",{staticClass:"nav"},[i("li",[i("a",{on:{click:function(a){t.goIndex()}}},[t._v("HOME")])]),t._v(" "),i("li",[i("router-link",{attrs:{to:"/documentsEN","active-class":"active"}},[t._v("DOCUMENTS")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/joinEN","active-class":"active"}},[t._v("COMMUNITY")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/newsEN","active-class":"active"}},[t._v("NEWS")])],1),t._v(" "),i("li",[i("a",{on:{click:function(a){t.change1(0)}}},[t._v("中文")]),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[t._v("丨")]),t._v(" "),i("a",{staticClass:"active",on:{click:function(a){t.change1(1)}}},[t._v("EN")])])]),t._v(" "),t._m(1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footLogo"},[e("img",{attrs:{src:i(395),alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"right-footer"},[i("p",{staticClass:"copyright"},[t._v("Copyright © 2018 FusionBlock.io  |  all rights reserved")])])}];e._withStripped=!0;var n={render:e,staticRenderFns:s};a.a=n},412:function(t,a,i){"use strict";function e(t){o||i(413)}var s=i(401),n=i(414),o=!1,c=i(141),r=e,l=c(s.a,n.a,!1,r,"data-v-6e93dc1a",null);l.options.__file="src/views/header1.vue",a.a=l.exports},413:function(t,a){},414:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",[t._m(0),t._v(" "),i("div",{staticClass:"mobileNav",on:{click:t.showMobileNav}},[i("Icon",{attrs:{size:"28",type:"navicon"}})],1),t._v(" "),i("ul",{staticClass:"nav",class:{active:t.mobileShow}},[i("li",[i("router-link",{attrs:{to:"/homeEN","active-class":"active"}},[t._v("HOME")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/documentsEN","active-class":"active"}},[t._v("DOCUMENTS")])],1),t._v(" "),i("li",[i("a",{class:{active:t.sqActive},on:{click:function(a){t.goSq()}}},[t._v("COMMUNITY")])]),t._v(" "),i("li",[i("router-link",{attrs:{to:"/newsEN","active-class":"active"}},[t._v("NEWS")])],1),t._v(" "),i("li",{staticClass:"lang"},[i("a",{on:{click:function(a){t.change1(0)}}},[t._v("中文")]),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[t._v("丨")]),t._v(" "),i("a",{staticClass:"active",on:{click:function(a){t.change1(1)}}},[t._v("EN")])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:i(395),alt:"logo"}})])}];e._withStripped=!0;var n={render:e,staticRenderFns:s};a.a=n},427:function(t,a,i){"use strict";(function(t){var a=i(143);i.n(a)}).call(a,i(47))},428:function(t,a,i){t.exports=i.p+"10b380d29fd76fa5c1679987e2504014.png"},429:function(t,a,i){t.exports=i.p+"ac8326600061261b3574bfbb4874dd10.gif"},430:function(t,a,i){t.exports=i.p+"6980a8cfbd61c47c14d1c3375fc4c856.png"},431:function(t,a,i){t.exports=i.p+"3710bd68c4f7e475650e4d9e4223ef2b.png"},432:function(t,a,i){t.exports=i.p+"a762c6ab5193a7da9d45af7825348400.png"},433:function(t,a,i){t.exports=i.p+"e9a217ebdd21c03cd089bbb5d66c2513.gif"},434:function(t,a,i){t.exports=i.p+"838a84a4addde864db049413688b6d7c.gif"},435:function(t,a,i){t.exports=i.p+"58f4480f516b0f6b761d097d18a8a859.gif"},436:function(t,a,i){t.exports=i.p+"d0874264caa896c7e8bbaea2fd023c78.gif"},437:function(t,a,i){t.exports=i.p+"29a99e11e6a9e1f833d593d0d3a3e22c.gif"},438:function(t,a,i){t.exports=i.p+"5e2d05a4abb646ddd8fb0cecc76c8c28.png"},439:function(t,a,i){t.exports=i.p+"d7a979004db25690d5aa972d5c6988c4.png"},440:function(t,a,i){t.exports=i.p+"9cea30fbbe7e7654d09fd6fda62d858e.png"},441:function(t,a,i){t.exports=i.p+"1a9ee9beb544c2e05d64451550df9615.png"},442:function(t,a,i){t.exports=i.p+"be9e5cde66ff9f3d4f1cf3d0e0478e18.png"},443:function(t,a,i){t.exports=i.p+"17607ba32ada36d9899031b267396e1c.png"},444:function(t,a,i){t.exports=i.p+"922e175ca2285ec1707f988b238e7a1f.png"},445:function(t,a,i){t.exports=i.p+"7a47b8e90b8b78e3280b19f585a7901a.png"},446:function(t,a,i){t.exports=i.p+"1b6a2fd82ad13dfd2d4c2617ed304fe9.png"},447:function(t,a,i){t.exports=i.p+"8926743dc8900cc37d97050e437f448a.png"},448:function(t,a,i){t.exports=i.p+"a942c5c471e2bbe32366a013c8692fb7.png"},449:function(t,a,i){t.exports=i.p+"0846eb2e4fb340aca139af66f1837010.png"},450:function(t,a,i){t.exports=i.p+"817715dcad8e93c787de5aa49f7d1e35.png"},462:function(t,a,i){"use strict";var e=(i(427),i(409)),s=i(412),n=i(142);a.a={data:function(){return{lang:"zh-CN",aaa:!1}},components:{"my-footer":e.a,"my-header":s.a},methods:{goDoc:function(){if(!this.pdfUrl||!this.pdfUrl.id)return void this.$Message.error("no data");window.open("#/whitePaper/"+this.pdfUrl.id+"/"+this.pdfUrl.dataUrl)},getDoc:function(){var t=this;n.a.ajax.post("/v1/data/list/1/10",{state:1,type:101,languageType:202}).then(function(a){var i=a.data,e=(i.errorCode,i.data),s=void 0;e.pageData.forEach(function(t){-1==t.name.indexOf(".pdf")||s||(s=t)}),t.pdfUrl=s}).catch(function(t){})},setRemUnit:function(){var t=document.getElementById("circleBox"),a=t.clientWidth/1909;if(t.clientWidth<=800){var i=$(".fka"),e=i.find(".desc"),s=i.find(".bo1");i.find(".bo1").remove(),e.before(s);var n=$(".fkb"),o=n.find(".desc"),c=n.find(".bo1");n.find(".bo1").remove(),o.before(c)}t.style.transform="scale("+a+")",t.style.left=-(t.clientWidth-t.clientWidth*a)/2+"px",t.style.bottom=-(t.clientHeight-t.clientHeight*a)/2+"px"},scrollToEnd:function(){var t=$(document).height()-$(window).height();$(document).scrollTop(t)},scrollToTop:function(){$(document).scrollTop(0)}},watch:{$route:function(t,a){var i=this;this.aaa=!1,"/joinEN"==t.fullPath?this.scrollToEnd():this.scrollToTop(),setTimeout(function(){i.aaa=!0},1e3)}},created:function(){var t=this;this.lang=localStorage.lang||"zh-CN",this.getDoc(),setTimeout(function(){t.aaa=!0},1e3)},mounted:function(){this.setRemUnit(),window.addEventListener("resize",this.setRemUnit),"/joinEN"==this.$route.path?this.scrollToEnd():this.scrollToTop()}}},506:function(t,a){},507:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"section firstPage"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("my-header"),t._v(" "),i("div",{staticClass:"slogan"},[i("h1",[t._v("Gridded multidimensional data value exchange ecosystem")]),t._v(" "),i("div",{staticClass:"btns"},[i("a",{class:{aaa:t.aaa},attrs:{"active-class":"active"},on:{click:function(a){t.goDoc()}}},[t._v("White Paper")]),t._v(" "),i("a",{class:{aaa:t.aaa},attrs:{href:"https://github.com/fusionchain",target:"_blank"}},[t._v("GITHUB")])])]),t._v(" "),t._m(2)],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),i("div",{staticClass:"section fp-auto-height join"},[i("div",{staticClass:"section5-container"},[t._m(8),t._v(" "),t._m(9),t._v(" "),i("my-footer")],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bgImg"},[e("img",{staticClass:"img2",attrs:{src:i(428),alt:""}}),t._v(" "),e("img",{attrs:{src:i(429),alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"bg-top"},[i("div",{staticClass:"corner lu"}),t._v(" "),i("div",{staticClass:"corner ld"}),t._v(" "),i("div",{staticClass:"corner ru"}),t._v(" "),i("div",{staticClass:"corner rd"})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"circleBox"}},[i("canvas",{staticClass:"canvasCircle",attrs:{id:"circle"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section description"},[e("div",{staticClass:"slogan"},[e("h2",[t._v("What is Fusionblock: Fusionblock provides unified, efficient data analysis services and complex processing support for big data ecosystems through original grid smart workflows. Individuals, enterprises, and government agencies can not only obtain data through the platform, but also use the platform’s computing capability to analyze data; thereby accomplishing data value exchange and supporting data application and service ecosystem throughout the industry chain.")])]),t._v(" "),e("div",{staticClass:"feature"},[e("div",{staticClass:"item"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:i(430),alt:""}})]),t._v(" "),e("div",{staticClass:"title"},[t._v("Layered Architecture")]),t._v(" "),e("div",{staticClass:"bm-line"})]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:i(431),alt:""}})]),t._v(" "),e("div",{staticClass:"title"},[t._v("Multidimensional Value Grid")]),t._v(" "),e("div",{staticClass:"bm-line"})]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:i(432),alt:""}})]),t._v(" "),e("div",{staticClass:"title"},[t._v("Data Business Ecosystem")]),t._v(" "),e("div",{staticClass:"bm-line"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section functions"},[e("div",{staticClass:"func"},[e("div",{staticClass:"item fk2"},[e("img",{staticClass:"bo1",attrs:{src:i(433),alt:""}}),t._v(" "),e("div",{staticClass:"desc"},[e("h3",[t._v(" FusionGrid Smart Workflow")]),t._v(" "),e("p",{staticStyle:{width:"7.33rem"}},[t._v("Fusionblock’s data grid workflow organizes one or more sets of grid smart contracts to accomplish a goal: defining the order and conditions of the data grid workflow. Every data grid workflow can be composed of one or more grid smart contracts, or with one or multiple parties ,or with one or more people collaborating with smart grid contracts.\n\n          ")])])]),t._v(" "),e("div",{staticClass:"item fk2 fkb"},[e("div",{staticClass:"desc"},[e("h3",[t._v("MLCC Layered Architecture Design")]),t._v(" "),e("p",{staticStyle:{width:"8.9rem"}},[t._v("Fusionblock uses big data architecture as a reference for layered design of accounting, data processing, data computing, and data storage. The FBSL settlement Layer takes charge of accounting issues, and the FBCL computing layer provides distributed computing power.\n\n          ")])]),t._v(" "),e("img",{staticClass:"bo1",attrs:{src:i(434),alt:""}})]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"bo1",attrs:{src:i(435),alt:""}}),t._v(" "),e("div",{staticClass:"desc"},[e("h3",[t._v("Data Exchange Security System BDOSA")]),t._v(" "),e("p",{staticStyle:{width:"8.8rem"}},[t._v("Fusionblock’s BDOSA (BlockChain-based Data-Oriented Security Architecture) is a updated DOSA that aims to fully supplement the data security system via blockchain technology, including data management and application. It constructs a complete set of mechanisms from data protection to application authorization. Thanks to the decentralized and immutable features of blockchain technology, it guarantees the authenticity of data authorization and the traceability of data exchange. \n\n          ")])])]),t._v(" "),e("div",{staticClass:"item fk2 fka"},[e("div",{staticClass:"desc"},[e("h3",[t._v("Data Lineage")]),t._v(" "),e("p",{staticStyle:{width:"8.9rem"}},[t._v("To prevent a large amount of invalid analytical data from appearing on the platform, we have added lineage taxing rules to the exchange process, which means any data lineage contributed to the current data will receive corresponding benefit. We analyze the invocation history in the blockchain, trace the entire chain of data change and then we analyze the complexity of the smart contracts to determine the contribution of the smart contracts to data processing, thereby adjusting the profit share of data in the process according to their contribution value.\n\n          ")])]),t._v(" "),e("img",{staticClass:"bo1",attrs:{src:i(436),alt:""}})]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"bo1",attrs:{src:i(437),alt:""}}),t._v(" "),e("div",{staticClass:"desc"},[e("h3",[t._v("Data Security Computing")]),t._v(" "),e("p",{staticStyle:{width:"8.8rem"}},[t._v("by using a secure data grid workflow, it computes and requests the data in a distributed way. Data is randomly dispersed into multiple computing units that share computing responsibilities, and there is no need to worry about data leaking to other computing units. It should be emphasized that no single computing unit can access the full set of data. They only have a part of the data and algorithms.\n          ")])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"section vision"},[i("div",{staticClass:"title"},[t._v("OUR VISION")]),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"vision-contain hide"},[i("div",{staticClass:"vision-item"},[i("div",{staticClass:"blink"}),t._v(" "),i("div",{staticClass:"desc"},[t._v("\n          Providing a benchmarking platform for the data services industry. Each data service provider can conduct work division and cooperation on the platform.\n        ")])]),t._v(" "),i("div",{staticClass:"vision-item"},[i("div",{staticClass:"blink"}),t._v(" "),i("div",{staticClass:"desc"},[t._v("\n          Providing a value exchange platform for individual users, and realizes a clear, personally controlled value conversion ecosystem under blockchain technology.\n        ")])]),t._v(" "),i("div",{staticClass:"vision-item"},[i("div",{staticClass:"blink"}),t._v(" "),i("div",{staticClass:"desc"},[t._v("\n          Providing an open, trustworthy, reliable channel for organizations and governments. All parties can rely on a trust system to efficiently complete assistance and information exchange.\n        ")])])]),t._v(" "),i("div",{staticClass:"vision-contain postb"},[i("div",{staticClass:"vision-item"},[i("div",{staticClass:"blink"}),t._v(" "),i("div",{staticClass:"desc"},[t._v("\n          Providing a benchmarking platform for the data services industry. Each data service provider can conduct work division and cooperation on the platform.\n        ")])]),t._v(" "),i("div",{staticClass:"vision-item"},[i("div",{staticClass:"blink"}),t._v(" "),i("div",{staticClass:"desc"},[t._v("\n          Providing a value exchange platform for individual users, and realizes a clear, personally controlled value conversion ecosystem under blockchain technology.\n        ")])]),t._v(" "),i("div",{staticClass:"vision-item"},[i("div",{staticClass:"blink"}),t._v(" "),i("div",{staticClass:"desc"},[t._v("\n          Providing an open, trustworthy, reliable channel for organizations and governments. All parties can rely on a trust system to efficiently complete assistance and information exchange.\n        ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section video"},[e("div",{staticClass:"slogan"}),t._v(" "),e("div",{staticClass:"video"},[e("img",{staticStyle:{width:"100%"},attrs:{src:i(438)}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section teams"},[e("div",{staticClass:"title"},[t._v("OUR TEAM")]),t._v(" "),e("div",{staticClass:"team"},[e("div",{staticClass:"item"},[e("img",{staticClass:"avatar",attrs:{src:i(439),alt:"Dr. Ioan Raicu "}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v("Dr. Ioan Raicu ")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n            Dr. Ioan Raicu is an associate professor in the Department of Computer Science (CS) at Illinois Institute of Technology (IIT), as well as a guest research faculty in the Math and Computer Science Division (MCS) at Argonne National Laboratory (ANL). He is also the founder and director of the Data-Intensive Distributed Systems Laboratory (DataSys) at IIT. His research work and interests are in the general area of distributed systems. His work has been primarly funded by the NSF and the DOE .\n          ")])])]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"avatar",attrs:{src:i(440),alt:"赵勇"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v("Yong Zhao")]),t._v(" "),e("div",{staticClass:"desc"},[t._v('Founder of FusionBlock, Master of the Tsinghua University, Ph.D. of the University of Chicago, USA under the guidance of Prof. Ian Foster who is the father of World Grid. Successively worked for IBM Global R&D Center, Argonne National Laboratory, and Microsoft Corporation. Obtained the Microsoft Outstanding Staff Award. Inducted into the United States “Who\'s Who”. He has published more than ten books on cloud computing and big data, had more than forty patents and software patents. He is the author of thirteen books including "Architecture Big Data"， "The Big Data Revolution"， and "Big Data, Data Management, and Data Engineering".\n          ')])])]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"avatar",attrs:{src:i(441),alt:"苗 放"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v("Fang Miao")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("Director of the Institute of Space Information Technology in Chengdu University of Science and Technology, Dean of the Big Data Research Institue of Chengdu University. He published 7 books and more than 200 papers. He has 6 DOA patents in Encryption-based data verification method and system,Rights-based data authorization method and system, Ownership-based data security transaction method and system,Term-based data encryption protection and Authorized authorization decryption application method and system.\n          ")])])]),t._v(" "),e("div",{staticClass:"item"},[e("img",{staticClass:"avatar",attrs:{src:i(442),alt:"盛 晔"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v("Ye Sheng")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("BSc and MSc in Tsinghua University, Ph.D. in Berkeley, University of California. 18 papers and 7 authorized patents. Senior Engineer in Polaris Wireless Inc and Accuray Inc. Co-founder and COO of Longpan communications technology company.  Co-founder and COO of Jingsu Ruier Medical Science and Technology Co., Ltd.\n          ")])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"joinUs"},[i("label",[t._v("JOIN THE COMMUNITY")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"socialList"},[e("div",{staticClass:"item"},[e("a",{attrs:{href:"https://twitter.com/fusionchain",target:"_blank"}},[e("img",{attrs:{src:i(443),alt:""}})])]),t._v(" "),e("div",{staticClass:"item"},[e("a",{attrs:{href:"javascript:;"}},[e("img",{attrs:{src:i(444),alt:""}})]),t._v(" "),e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:i(445),alt:"微信公众号"}})])]),t._v(" "),e("div",{staticClass:"item"},[e("a",{attrs:{href:"javascript:;"}},[e("img",{attrs:{src:i(446),alt:""}})]),t._v(" "),e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:i(447),alt:"微信客服"}})])]),t._v(" "),e("div",{staticClass:"item"},[e("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100024296560422",target:"_blank"}},[e("img",{attrs:{src:i(448),alt:""}})])]),t._v(" "),e("div",{staticClass:"item"},[e("a",{attrs:{href:"https://weibo.com/6479205648/profile?topnav=1&wvr=6",target:"_blank"}},[e("img",{attrs:{src:i(449),alt:""}})])]),t._v(" "),e("div",{staticClass:"item"},[e("a",{attrs:{href:"https://t.me/joinchat/FREYVA8GGZz5PM-EYiMB1g",target:"_blank"}},[e("img",{attrs:{src:i(450),alt:""}})])])])}];e._withStripped=!0;var n={render:e,staticRenderFns:s};a.a=n}});