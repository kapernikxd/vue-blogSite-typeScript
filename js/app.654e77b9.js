(function(e){function t(t){for(var a,n,o=t[0],l=t[1],u=t[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=n(n.s=i[0]))}return e}var a={},s={app:0},r=[];function n(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-blogSite-typeScript/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},"118b":function(e,t,i){"use strict";i("22ba")},"1b2f":function(e,t,i){},2168:function(e,t,i){"use strict";i("2763")},"22ba":function(e,t,i){},2763:function(e,t,i){},"2d3f":function(e,t,i){},3810:function(e,t,i){},"46af":function(e,t,i){"use strict";i("1b2f")},"49f8":function(e,t,i){var a={"./en.json":"edd4","./ru.json":"7704"};function s(e){var t=r(e);return i(t)}function r(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="49f8"},7704:function(e){e.exports=JSON.parse('{"empty-page":"Пока здесь пусто","menu":{"home":"Главная","info":"Инфо","about":"О нас"},"buttons":{"button-logout":"Выход"},"footer-text":"Freebie разработано Kishore для Project365.Design","article":{"destination-title":"Место","added-title":"Автор","view-more-button":"Узнать больше","back-button":"Назад к главной"}}')},"7f0a":function(e,t,i){e.exports=i.p+"img/header-logo.8ef67cf6.svg"},b9a4:function(e,t,i){"use strict";i("db71")},bb56:function(e,t,i){"use strict";i("e60b")},cd49:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},["Login"!=e.$route.name&&"404"!=e.$route.name?i("HeaderComponent"):e._e(),i("el-main",[i("router-view")],1),"Login"!=e.$route.name&&"404"!=e.$route.name?i("FooterComponent"):e._e()],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-header",{attrs:{height:"auto"}},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{staticClass:"header-logo",attrs:{span:12}},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:i("7f0a"),alt:"logo"}})])]),a("el-col",{staticClass:"header-menu",attrs:{span:12}},[a("el-button",{staticClass:"mobile-nav",attrs:{plain:"",size:"mini"},on:{click:e.menuNav}},[e.menuIsActive?a("i",{staticClass:"el-icon-close"}):a("i",{staticClass:"el-icon-menu"})]),a("el-menu",{class:{"":!e.menuIsActive,isOpen:e.menuIsActive},attrs:{"default-active":e.activeIndex,mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{"data-test":"home",to:"/"}},[e._v(e._s(e.$t("menu.home")))])],1),a("el-menu-item",{attrs:{index:"2",disabled:""}},[e._v(e._s(e.$t("menu.info")))]),a("el-menu-item",{attrs:{index:"3"}},[a("router-link",{attrs:{"data-test":"about",to:"/about"}},[e._v(e._s(e.$t("menu.about")))])],1)],1),a("el-radio-group",{attrs:{change:e.switchLang(),size:"mini"},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},[a("el-radio-button",{attrs:{"data-test":"ru",label:"ru"}},[e._v("Ru")]),a("el-radio-button",{attrs:{"data-test":"en",label:"en"}},[e._v("En")])],1),a("el-button",{staticClass:"logout-btn",attrs:{"data-test":"logout",size:"mini",type:"info"},on:{click:e.logout}},[a("i",{staticClass:"el-icon-toilet-paper"}),a("span",{staticClass:"text-block"},[e._v(e._s(e.$t("buttons.button-logout")))])])],1)],1)],1)},o=[],l=i("d4ec"),u=i("bee2"),c=i("262e"),m=i("2caf"),d=i("9ab4"),p=i("60a3"),f=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.activeIndex="1",e.menuIsActive=!1,e.lang="en",e}return Object(u["a"])(i,[{key:"logout",value:function(){window.localStorage.clear(),this.$router.push("Login")}},{key:"menuNav",value:function(){this.menuIsActive=!this.menuIsActive}},{key:"switchLang",value:function(){this.$i18n.locale=this.lang}}]),i}(p["c"]);f=Object(d["a"])([Object(p["a"])({})],f);var v=f,b=v,h=(i("fee0"),i("2877")),g=Object(h["a"])(b,n,o,!1,null,"52359034",null),y=g.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-footer",{attrs:{height:"auto"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("a",{staticClass:"footer-logo",attrs:{href:"/"}},[a("img",{attrs:{src:i("dd8c"),alt:"logo"}})])])],1),a("el-row",[a("el-col",{staticClass:"footer-text",attrs:{span:24}},[e._v(" "+e._s(e.$t("footer-text"))+" ")])],1)],1)},w=[],_=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return i}(p["c"]),q=_,O=(i("118b"),Object(h["a"])(q,j,w,!1,null,"1ee0e535",null)),x=O.exports,A=(i("2d3f"),{name:"app",components:{HeaderComponent:y,FooterComponent:x}}),S=A,k=Object(h["a"])(S,s,r,!1,null,null,null),M=k.exports,I=i("8c4f"),$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"articles-control",attrs:{span:12}},[i("el-input",{attrs:{placeholder:e.$t("search")},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),i("el-tooltip",{attrs:{effect:"dark",content:e.$t("tooltip"),placement:"top-start"}},[i("el-button",{attrs:{type:"primary",icon:e.viewMode?"el-icon-edit":"el-icon-star-off",circle:""},on:{click:e.changeView}})],1)],1)],1),e.articles?i("div",{class:e.viewMode?"":"block-view"},e._l(e.articles,(function(t){return i("ArticleView",{key:t.id,attrs:{item:t,search:e.searchValue,viewMode:e.viewMode}})})),1):i("div",[e._v(" "+e._s(e.$t("empty-page"))+" ")])],1)},L=[],C=i("4bb5"),F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{class:e.viewMode?"":"block-el-row",attrs:{type:"flex",justify:"center"}},[e.item.title===e.search||0===e.search.length?i("el-col",{staticClass:"post-view",attrs:{xs:23,sm:22,md:20,lg:e.viewMode?18:22,xl:e.viewMode?18:22}},[i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:e.viewMode?12:24}},[i("h3",[e._v(" "+e._s(e.item.title)+" ")])])],1),i("el-row",{class:e.viewMode?"post-sub-title":"post-sub-title-block",attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:e.viewMode?5:24}},[e._v(" "+e._s(e.$t("article.destination-title"))+" "),i("strong",[e._v(e._s(e.item.destination))])]),i("el-col",{attrs:{span:e.viewMode?5:24}},[e._v(" "+e._s(e.$t("article.added-title"))+" "),i("strong",[e._v(e._s(e.item.autor))])]),i("el-col",{attrs:{span:e.viewMode?5:24}},[e._v(" "+e._s(e.item.postTime)+" ")])],1),i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:e.viewMode?16:24}},[i("img",{attrs:{src:e.item.image,alt:"post picture"}})])],1),i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:e.viewMode?12:22}},[i("p",[e._v(" "+e._s(e.truncate(e.item.text,200))+" ")])])],1),i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"post-control",attrs:{span:12}},[i("el-button",{on:{click:function(t){return e.viewMore(e.item.id,e.item)}}},[e._v(" "+e._s(e.$t("article.view-more-button"))+" ")])],1)],1)],1):e._e()],1)},N=[],E=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return Object(u["a"])(i,[{key:"truncate",value:function(e,t){return e.length>t?"".concat(e.substr(0,t-1)," ..."):e}},{key:"viewMore",value:function(e,t){this.$router.push({name:"Article",params:{id:e,item:t}})}}]),i}(p["c"]);Object(d["a"])([Object(p["b"])()],E.prototype,"item",void 0),Object(d["a"])([Object(p["b"])({default:""})],E.prototype,"search",void 0),Object(d["a"])([Object(p["b"])({required:!0,default:!0})],E.prototype,"viewMode",void 0),E=Object(d["a"])([p["a"]],E);var P=E,T=P,D=(i("d0f4"),Object(h["a"])(T,F,N,!1,null,"14827c0f",null)),B=D.exports,J=Object(C["a"])("Articles"),V=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.searchValue="",e.viewMode=!0,e}return Object(u["a"])(i,[{key:"changeView",value:function(){this.viewMode=!this.viewMode}}]),i}(p["c"]);Object(d["a"])([J.State],V.prototype,"articles",void 0),V=Object(d["a"])([Object(p["a"])({components:{ArticleView:B}})],V);var z=V,H=z,R=(i("2168"),Object(h["a"])(H,$,L,!1,null,"67c6b1a6",null)),U=R.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v("This is an about page")])])}],K={},G=Object(h["a"])(K,W,Z,!1,null,null,null),Q=G.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:6}},[i("div",[i("h1",[e._v("Login")]),i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"Email",prop:"email"}},[i("el-input",{attrs:{"data-test":"email",type:"text",autocomplete:"off"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),i("el-form-item",{attrs:{label:"Password",prop:"password"}},[i("el-input",{attrs:{"data-test":"password",type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),i("el-form-item",[i("el-button",{attrs:{"data-test":"submit",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("Submit")]),i("el-button",{attrs:{"data-test":"reset"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("Reset")])],1)],1)],1)])],1)},Y=[],ee=i("bc3a"),te=i.n(ee),ie=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.validateEmail=function(e,t,i){var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;a.test(t)?i():i(new Error("Please input corect email"))},e.ruleForm={email:"",password:""},e}return Object(u["a"])(i,[{key:"submitForm",value:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;te.a.post("http://localhost:8080/login",{email:t.ruleForm.email,password:t.ruleForm.password}).then((function(e){var i=e.data;localStorage.setItem("currentUser",JSON.stringify(i)),console.log(t.$router),t.$router.push({name:"Home"})})).catch((function(e){console.log(e)}))}))}},{key:"resetForm",value:function(e){var t=this.$refs[e];t.resetFields()}},{key:"rules",get:function(){var e={email:[{required:!0,message:"Please input Email",trigger:"blur"},{validator:this.validateEmail,trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"},{min:3,max:50,message:"Length should be 3 to 50",trigger:"blur"}]};return e}}]),i}(p["c"]);ie=Object(d["a"])([Object(p["a"])({})],ie);var ae=ie,se=ae,re=(i("b9a4"),Object(h["a"])(se,X,Y,!1,null,"4ce20537",null)),ne=re.exports,oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"inner"},[i("h1",[e._v(" 404 ")]),i("p",[e._v("Page not found back to home page")]),i("p",[i("el-button",{attrs:{type:"primary"}},[i("router-link",{attrs:{to:"/"}},[e._v("Bac to home")])],1)],1)])])},le=[],ue=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return i}(p["c"]);ue=Object(d["a"])([Object(p["a"])({})],ue);var ce=ue,me=ce,de=(i("46af"),Object(h["a"])(me,oe,le,!1,null,"22745a9e",null)),pe=de.exports,fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{staticClass:"article-page",attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{xs:23,sm:22,md:20,lg:16,xl:16}},[i("div",[e._v(" "+e._s(e.fromApi)+" ")]),i("h1",[e._v(" "+e._s(e.articleById.title)+" ")]),i("img",{attrs:{src:e.articleById.image,alt:"post picture"}}),i("p",[e._v(" "+e._s(e.articleById.text)+" ")]),i("el-divider"),i("el-row",{attrs:{type:"flex",justify:"space-between"}},[i("el-col",{staticClass:"article-information text-left",attrs:{span:12}},[e._v(" "+e._s(e.articleById.autor)+" ")]),i("el-col",{staticClass:"article-information text-right",attrs:{span:12}},[e._v(" "+e._s(e.articleById.postTime)+" ")])],1),i("el-row",{staticClass:"article-control",attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:12}},[i("el-button",{attrs:{type:"primary"},on:{click:e.backToArticles}},[e._v(e._s(e.$t("article.back-button")))])],1)],1)],1)],1)},ve=[],be=Object(C["a"])("Articles"),he=function(e){Object(c["a"])(i,e);var t=Object(m["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return Object(u["a"])(i,[{key:"backToArticles",value:function(){this.$router.go(-1)}},{key:"created",value:function(){this.fetchApi()}},{key:"articleById",get:function(){return this.getById(this.$route.params.id)}}]),i}(p["c"]);Object(d["a"])([be.Getter],he.prototype,"getById",void 0),Object(d["a"])([be.State],he.prototype,"fromApi",void 0),Object(d["a"])([be.Action],he.prototype,"fetchApi",void 0),he=Object(d["a"])([Object(p["a"])({name:"ArticlePage"})],he);var ge=he,ye=ge,je=(i("bb56"),Object(h["a"])(ye,fe,ve,!1,null,"3cab697e",null)),we=je.exports;a["default"].use(I["a"]);var _e=[{path:"/login",name:"Login",component:ne},{path:"/",name:"Home",component:U,meta:{requiresAuth:!0}},{path:"/post/:id",name:"Article",component:we,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:Q,meta:{requiresAuth:!0}},{path:"*",name:"404",component:pe}],qe=new I["a"]({mode:"history",routes:_e}),Oe=qe,xe=i("2f62"),Ae=(i("7db0"),i("96cf"),i("1da1")),Se={articles:[{id:1,title:"Test",destination:"Destination Europe",autor:"Added by John Williams Doe",postTime:"January 01, 2018",image:"https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."},{id:2,title:"Test2",destination:"Destination Europe",autor:"Added by John Williams Doe",postTime:"January 01, 2018",image:"https://www.yosemitehikes.com/images/wallpaper/yosemitehikes.com-olmsted-pt-tenaya-lake-1200x800.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."},{id:3,title:"Test3",destination:"Destination Europe",autor:"Added by John Williams Doe",postTime:"January 01, 2018",image:"https://all4desktop.com/data_images/original/4236023-pictures-of-nature.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."}],fromApi:[]},ke={setData:function(e,t){e.fromApi=t}},Me={getById:function(e,t){return function(t){return e.articles.find((function(e){return e.id===parseInt(t)}))}}},Ie={fetchApi:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.next=3,te.a.get("https://jsonplaceholder.typicode.com/posts/1");case 3:a=t.sent,i("setData",a.data);case 5:case"end":return t.stop()}}),t)})))()}},$e={namespaced:!0,state:Se,getters:Me,mutations:ke,actions:Ie};a["default"].use(xe["a"]);var Le=new xe["a"].Store({modules:{Articles:$e}}),Ce=i("5c96"),Fe=i.n(Ce);i("0fae");a["default"].use(Fe.a);i("f5df1"),i("4160"),i("d3b7"),i("ac1f"),i("466d"),i("159b"),i("ddb0");var Ne=i("a925");function Ee(){var e=i("49f8"),t={};return e.keys().forEach((function(i){var a=i.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var s=a[1];t[s]=e(i)}})),t}a["default"].use(Ne["a"]);var Pe={en:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}}},Te={en:{currency:{style:"currency",currency:"EUR"}}},De=new Ne["a"]({locale:"en",fallbackLocale:"en",messages:Ee(),numberFormats:Te,dateTimeFormats:Pe});a["default"].config.productionTip=!1,new a["default"]({router:Oe,store:Le,i18n:De,render:function(e){return e(M)}}).$mount("#app")},d0f4:function(e,t,i){"use strict";i("3810")},db71:function(e,t,i){},dd8c:function(e,t,i){e.exports=i.p+"img/footer-logo.ba7e6ac8.svg"},e60b:function(e,t,i){},edd4:function(e){e.exports=JSON.parse('{"empty-page":"Page empty","menu":{"home":"Home","info":"Info","about":"About"},"buttons":{"button-logout":"Logout"},"footer-text":"Freebie Designed By Kishore for Project365.Design","article":{"destination-title":"Destination","added-title":"Added","view-more-button":"More","back-button":"Back to atricles"}}')},f0d1:function(e,t,i){},fee0:function(e,t,i){"use strict";i("f0d1")}});
//# sourceMappingURL=app.654e77b9.js.map