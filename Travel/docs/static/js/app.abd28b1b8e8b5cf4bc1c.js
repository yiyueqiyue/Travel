webpackJsonp([1],{"/G1h":function(t,e){},"0JMs":function(t,e){},"3W6e":function(t,e){},"8HiI":function(t,e){},"8L5y":function(t,e){},"9n10":function(t,e){},"9nsZ":function(t,e){},EVw7:function(t,e){},LaLc:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("IvJb"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},n,!1,function(t){i("sIga")},null,null).exports,r=i("zO6J"),c=i("4YfN"),o=i.n(c),l=i("9rMa"),d={name:"HomeHeader",computed:o()({},Object(l.c)(["city"]))},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var u=i("C7Lr")(d,h,!1,function(t){i("LaLc")},"data-v-63b4dec5",null).exports,m={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0,speed:1e3}}},computed:{showSwiper:function(){return this.list.length}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.list.length?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=i("C7Lr")(m,v,!1,function(t){i("u7rl")},"data-v-1cbafeca",null).exports,p={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoPlay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var _=i("C7Lr")(p,C,!1,function(t){i("EVw7")},"data-v-67c2b175",null).exports,y={name:"HomeRecommend",props:{list:Array}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.decs))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var w=i("C7Lr")(y,g,!1,function(t){i("dPPL")},"data-v-f3c55ef0",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var L=i("C7Lr")(b,k,!1,function(t){i("ZM+Z")},"data-v-1ff49236",null).exports,I=i("aozt"),x=i.n(I),E={name:"Home",components:{HomeHeader:u,HomeSwiper:f,HomeIcons:_,HomeRecommend:w,HomeWeekend:L},data:function(){return{lastCity:[],swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:o()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){x.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var $=i("C7Lr")(E,S,!1,function(t){i("/G1h")},"data-v-8226f466",null).exports,H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var A=i("C7Lr")({name:"CityHeader"},H,!1,function(t){i("sAbu")},"data-v-3afe5db4",null).exports,F=i("yKqG"),G={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:o()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new F.a(this.$refs.search)}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var N=i("C7Lr")(G,R,!1,function(t){i("oYoU")},"data-v-d2c4cd32",null).exports,O={name:"CityList",props:{hot:Array,cities:Object,letter:""},computed:o()({},Object(l.c)({currentCity:"city"})),methods:o()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new F.a(this.$refs.wrapper)}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var D=i("C7Lr")(O,T,!1,function(t){i("S4/g")},"data-v-161cc9fa",null).exports,j={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var P={name:"City",components:{CityHeader:A,CitySearch:N,CityList:D,CityAlphabet:i("C7Lr")(j,M,!1,function(t){i("WTS3")},"data-v-4afc38f5",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){x.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var Y=i("C7Lr")(P,U,!1,function(t){i("0JMs")},"data-v-7d74f0e9",null).exports,z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var W=i("C7Lr")({name:"CommonGallary",props:{imgs:{type:"",default:function(){return[]}}},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction"},observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},z,!1,function(t){i("wvE7")},"data-v-16f1eb11",null).exports,Z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var B=i("C7Lr")({name:"FadeAnimation"},Z,!1,function(t){i("8HiI")},"data-v-cd55c59e",null).exports,J={name:"DetailBanner",props:{sightName:String,bannerImg:"",bannerImgs:""},data:function(){return{showGallary:!1,imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"]}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:W,FadeAnimation:B}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-tittle"},[t._v("\n        "+t._s(this.sightName)+"\n      ")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont arrow-icon"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),t._v(" "),i("FadeAnimation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var V=i("C7Lr")(J,q,!1,function(t){i("rPbE")},"data-v-522551bc",null).exports,K={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var X=i("C7Lr")(K,Q,!1,function(t){i("3W6e")},"data-v-cdacdf6c",null).exports,tt={name:"DetailList",props:{list:Array}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var it={name:"detail",components:{DetailBanner:V,DetailHeader:X,DetailList:i("C7Lr")(tt,et,!1,function(t){i("9nsZ")},"data-v-3fad6c0e",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:"",list:[]}},methods:{getDetailInfo:function(){x.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var nt=i("C7Lr")(it,st,!1,function(t){i("8L5y")},"data-v-40fa2aa2",null).exports;s.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",component:$},{path:"/city",name:"City",component:Y},{path:"/detail/:id",name:"Detail",component:nt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),rt=i("iDdd"),ct=i.n(rt),ot=i("DMPO"),lt=i.n(ot),dt=(i("briU"),"上海");try{localStorage.city&&(dt=localStorage.city)}catch(t){}var ht={city:dt},ut={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var mt=new l.a.Store({state:ht,mutations:ut});i("9n10"),i("M6Sr"),i("TzC8"),i("wiGe");s.a.config.productionTip=!1,ct.a.attach(document.body),s.a.use(lt.a),new s.a({el:"#app",router:at,store:mt,components:{App:a},template:"<App/>"})},"S4/g":function(t,e){},TzC8:function(t,e){},WTS3:function(t,e){},"ZM+Z":function(t,e){},dPPL:function(t,e){},oYoU:function(t,e){},rPbE:function(t,e){},sAbu:function(t,e){},sIga:function(t,e){},u7rl:function(t,e){},wiGe:function(t,e){},wvE7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.abd28b1b8e8b5cf4bc1c.js.map