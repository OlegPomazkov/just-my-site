(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},i={app:0},a=[];function s(e){return l.p+"js/"+({resumeformal:"resumeformal"}[e]||e)+"."+{resumeformal:"2414aeb4"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={resumeformal:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({resumeformal:"resumeformal"}[e]||e)+"."+{resumeformal:"f607f370"}[e]+".css",i=l.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],u=c.getAttribute("data-href");if(u===n||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],f.parentNode.removeChild(f),o(a)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=i[e]=[t,o]}));t.push(n[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var h=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var o=i[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,o[1](h)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/just-my-site/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var f=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0f54":function(e,t,o){},"1c67":function(e,t,o){},"1e97":function(e,t,o){"use strict";o("0f54")},"21bb":function(e,t,o){"use strict";o("2dad")},2422:function(e,t,o){},"2dad":function(e,t,o){},"32f0":function(e,t,o){"use strict";o("2422")},"3b93":function(e,t,o){"use strict";o.r(t);var n=o("e017"),r=o.n(n),i=o("21a1"),a=o.n(i),s=new r.a({id:"settings",use:"settings-usage",viewBox:"0 0 64 64",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64" id="settings">\n  <path d="M36.5 11v6.171c1.5.33 2.133.767 3.163 1.346l4.241-4.394 5.94 5.904-4.379 4.311C46.041 25.367 46.5 26 46.83 27.5H53v9h-6.171c-.328 1.5-.77 2.106-1.344 3.141l4.395 4.215-5.906 5.938-4.309-4.377C38.63 45.992 38 46.45 36.5 46.778V53h-9v-6.222c-1.5-.33-2.105-.765-3.138-1.341l-4.216 4.398-5.939-5.898 4.378-4.296C18.008 38.606 17.55 38 17.223 36.5H11v-9h6.222c.328-1.5.765-2.133 1.342-3.162l-4.399-4.244 5.898-5.938 4.299 4.377c1.034-.576 1.638-1.032 3.138-1.362V11h9M32 41a9 9 0 1 0 0-18 9 9 0 0 0 0 18m4.5-33h-9c-1.656 0-3 1.344-3 3v3.393l-2.297-2.338a2.996 2.996 0 0 0-2.131-.899h-.009a3 3 0 0 0-2.128.886l-5.898 5.939a3.003 3.003 0 0 0 .046 4.273l2.328 2.246H11c-1.656 0-3 1.344-3 3v9c0 1.656 1.344 3 3 3h3.445l-2.34 2.295a3.003 3.003 0 0 0-.011 4.27l5.938 5.899a3 3 0 0 0 2.113.871h.037a3.01 3.01 0 0 0 2.128-.922l2.19-2.285V53c0 1.656 1.344 3 3 3h9a3 3 0 0 0 3-3v-3.474l2.337 2.373a2.993 2.993 0 0 0 2.13.895h.008c.797 0 1.564-.317 2.127-.884l5.905-5.939a3 3 0 0 0-.05-4.281l-2.285-2.19H53a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-3.423l2.372-2.337a2.997 2.997 0 0 0 .01-4.263l-5.938-5.904a3 3 0 0 0-2.115-.873h-.032a3.003 3.003 0 0 0-2.127.917L39.5 14.366V11a3 3 0 0 0-3-3M32 38c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6" />\n</symbol>'});a.a.add(s);t["default"]=s},"3d06":function(e,t,o){},"44a3":function(e,t,o){},4596:function(e,t,o){"use strict";o.r(t);var n=o("e017"),r=o.n(n),i=o("21a1"),a=o.n(i),s=new r.a({id:"dots",use:"dots-usage",viewBox:"0 0 64 64",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="dots">\n  <g>\n    <circle cx="33" cy="32" r="6" />\n    <circle cx="33" cy="54" r="6" />\n    <circle cx="33" cy="10" r="6" />\n  </g>\n</symbol>'});a.a.add(s);t["default"]=s},"47a4":function(e,t,o){},"497e":function(e,t,o){},"49f8":function(e,t,o){var n={"./en.json":"edd4","./ru.json":"7704"};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="49f8"},5079:function(e,t,o){"use strict";o("47a4")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("c898"),o("5c1c");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=(o("5c0b"),o("2877")),s={},l=Object(a["a"])(s,r,i,!1,null,null,null),c=l.exports,u=(o("d3b7"),o("8c4f")),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("home-page",{staticClass:"home"})},f=[],d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-page"},[o("home-header",{staticClass:"home-page__header"}),o("move-field",{staticClass:"home-page__main"}),o("home-footer",{staticClass:"home-page__footer"})],1)},m=[],p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-header"},[o("div",{staticClass:"home-header__wrapper"},[o("div",{staticClass:"home-header__wrapper__pages"},e._l(e.navConfig,(function(t,n){return o("custom-button",{key:n+"_"+t.page,attrs:{text:e.$t(t.page),width:"8rem",height:"2rem"},on:{clicked:function(t){return e.handlePageLinkClicked(n)}}})})),1),o("custom-dropdown",{staticClass:"home-header__wrapper__control",attrs:{"button-options":{icon:"settings"}},scopedSlots:e._u([{key:"content",fn:function(){return[o("settings-dialog")]},proxy:!0}])})],1)])},b=[],v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.buttonClass,style:e.buttonStyle,on:{click:e.handleClick}},[e.icon?o("svg",{attrs:{width:"80%",height:"80%"}},[o("use",{attrs:{"xlink:href":"#"+e.icon}})]):e._e(),e.text&&!e.icon?o("span",[e._v(" "+e._s(e.text)+" ")]):e._e()])},g=[],w={name:"CustomButton",props:{icon:{type:String},text:{type:String},color:{type:String,default:function(){return"grey"}},backColor:{type:String,default:function(){return"white"}},width:{type:String,default:function(){return"2.5rem"}},height:{type:String,default:function(){return"2.5rem"}},fontSize:{type:String,default:function(){return"1.2rem"}}},computed:{buttonClass:function(){return this.text&&!this.icon?"custom-button text":"custom-button icon"},buttonStyle:function(){return{width:this.width,height:this.height,"background-color":this.backColor,color:this.color}}},methods:{handleClick:function(){this.$emit("clicked")}}},k=w,_=(o("84cb"),Object(a["a"])(k,v,g,!1,null,null,null)),y=_.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"dropdown",staticClass:"custom-dropdown"},[o("custom-button",{staticClass:"custom-dropdown__control",attrs:{icon:e.buttonOptions.icon,text:e.buttonOptions.text,color:e.buttonOptions.color?e.buttonOptions.color:"grey",backColor:e.buttonOptions.backColor?e.buttonOptions.backColor:"white",width:e.buttonOptions.width?e.buttonOptions.width:"2.5rem",height:e.buttonOptions.height?e.buttonOptions.height:"2.5rem",fontSize:e.buttonOptions.fontSize?e.buttonOptions.fontSize:"1.2rem"},on:{clicked:e.handleClick}}),e.isVisible?o("div",{staticClass:"custom-dropdown__content",style:e.contentStyle,on:{click:e.handleContentClicked}},[e._t("content",[e._v("No content")])],2):e._e()],1)},S=[],C={name:"CustomDropdown",components:{CustomButton:y},props:{buttonOptions:{type:Object,required:!0,default:function(){return{text:"-",color:"grey",backColor:"white",width:"2.5rem",height:"2.5rem",fontSize:"1.2rem"}}}},data:function(){return{isVisible:!1}},computed:{contentStyle:function(){return{top:"".concat(this.$refs.dropdown.offsetHeight,"px")}}},methods:{handleClick:function(){this.isVisible=!this.isVisible},handleContentClicked:function(){this.isVisible=!this.isVisible}}},E=C,B=(o("5079"),Object(a["a"])(E,j,S,!1,null,null,null)),P=B.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header-settings"},[o("settings-section",{attrs:{section:e.localeSection},on:{"item-clicked":e.handleLocaleItemClicked}}),o("settings-section",{attrs:{section:e.paletteSection},on:{"item-clicked":e.handlePaletteItemClicked}})],1)},O=[],A=(o("4160"),o("b0c0"),o("159b"),o("5530")),z=o("2f62"),F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"settings-section"},[o("div",{staticClass:"settings-section__title"},[e._v(" "+e._s(e.$t(e.section.title))+" ")]),e._l(e.section.list,(function(t,n){return o("div",{key:n+"_"+t.value,class:"settings-section__item "+e.isActive(n),on:{click:function(t){return e.handleItemClicked(n)}}},[e._v(" "+e._s(e.$t(t.label))+" ")])}))],2)},$=[],M={props:{section:{type:Object,required:!0}},methods:{isActive:function(e){return this.section.isActive===this.section.list[e].value?"active":""},handleItemClicked:function(e){this.$emit("item-clicked",e)}}},D=M,L=(o("8d5f"),Object(a["a"])(D,F,$,!1,null,null,null)),T=L.exports,N=[{label:"Русский",value:"ru"},{label:"English",value:"en"}],H={colorBlock1:"--c-block-1",colorBlock2:"--c-block-2",colorBlock3:"--c-block-3",colorBlock4:"--c-block-4",colorBlock5:"--c-block-5",colorBlock6:"--c-block-6",colorBlock7:"--c-block-7",colorBack1:"--c-back-1",colorBack2:"--c-back-2",colorBack3:"--c-back-3"},G=[{name:"pastel",label:"pastel",palette:{blocks:[{var:"colorBlock1",value:"#FEC5BB"},{var:"colorBlock2",value:"#FCD5CE"},{var:"colorBlock3",value:"#FAE1DD"},{var:"colorBlock4",value:"#F8EDEB"},{var:"colorBlock5",value:"#E8E8E4"},{var:"colorBlock6",value:"#D8E2DC"},{var:"colorBlock7",value:"#ECE4DB"}],backgrounds:[{var:"colorBack1",value:"#FFE5D9"},{var:"colorBack2",value:"#FFD7BA"},{var:"colorBack3",value:"#FEC89A"}]}},{name:"bright",label:"bright",palette:{blocks:[{var:"colorBlock1",value:"#F94144"},{var:"colorBlock2",value:"#F3722C"},{var:"colorBlock3",value:"#F8961E"},{var:"colorBlock4",value:"#F9844A"},{var:"colorBlock5",value:"#F9C74F"},{var:"colorBlock6",value:"#90BE6D"},{var:"colorBlock7",value:"#43AA8B"}],backgrounds:[{var:"colorBack1",value:"#4D908E"},{var:"colorBack2",value:"#577590"},{var:"colorBack3",value:"#277DA1"}]}},{name:"sepia",label:"sepia",palette:{blocks:[{var:"colorBlock1",value:"#EDC4B3"},{var:"colorBlock2",value:"#E6B8A2"},{var:"colorBlock3",value:"#DEAB90"},{var:"colorBlock4",value:"#D69F7E"},{var:"colorBlock5",value:"#CD9777"},{var:"colorBlock6",value:"#C39E70"},{var:"colorBlock7",value:"#B07D62"}],backgrounds:[{var:"colorBack1",value:"#9D6B53"},{var:"colorBack2",value:"#8A5A44"},{var:"colorBack3",value:"#774936"}]}}],I=(o("7db0"),G),R=H;function V(e){var t=I.find((function(t){return t.name===e})),o=document.getElementsByTagName("html")[0];t.palette.blocks.forEach((function(e){o.style.setProperty(R[e.var],e.value)})),t.palette.backgrounds.forEach((function(e){o.style.setProperty(R[e.var],e.value)}))}var U={components:{SettingsSection:T},data:function(){var e=[];return G.forEach((function(t){e.push({value:t.name,label:t.label})})),{localeSection:{title:"locale_title",list:N,isActive:null},paletteSection:{title:"palette_title",list:e,isActive:null}}},computed:Object(A["a"])({},Object(z["b"])(["currLocale","currPalette"])),mounted:function(){this.localeSection.isActive=this.currLocale},methods:{handleLocaleItemClicked:function(e){this.$i18n.locale=this.localeSection.list[e].value,this.$store.dispatch("updateSetting",{setting:"locale",value:this.localeSection.list[e].value}),this.localeSection.isActive=this.currLocale},handlePaletteItemClicked:function(e){V(this.paletteSection.list[e].value),this.$store.dispatch("updateSetting",{setting:"palette",value:this.paletteSection.list[e].value}),this.paletteSection.isActive=this.currPalette}}},q=U,J=(o("5f4d"),Object(a["a"])(q,x,O,!1,null,null,null)),Y=J.exports,W=[{page:"ResumeFormal"},{page:"Art"},{page:"Freestyle"},{page:"Games"}],K={components:{CustomButton:y,CustomDropdown:P,SettingsDialog:Y},data:function(){return{navConfig:W}},methods:{handlePageLinkClicked:function(e){this.$router.push({name:this.navConfig[e].page})},handleSettingsClicked:function(){console.log("Settings HOME clicked!")}}},Z=K,Q=(o("b095"),Object(a["a"])(Z,p,b,!1,null,null,null)),X=Q.exports,ee=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"field",staticClass:"move-field"},[o("div",{staticClass:"move-field__title"},[e._v(" "+e._s(e.$t("site_title"))+" ")]),e._l(e.objParams,(function(t,n){return o("move-object",{key:n+"_"+e.labels[n],ref:"move-object-"+n,refInFor:!0,attrs:{"obj-props":t,label:e.labels[n]},on:{clicked:function(t){return e.handleMoveObjectClicked(n)}}})}))],2)},te=[],oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"moving-object",staticClass:"moving-object",style:e.objectStyle,on:{click:e.handleObjectClicked}},[e._v(" "+e._s(e.$t(e.label))+" ")])},ne=[],re={props:{objProps:{type:Object,required:!0,default:function(){return{top:140,left:50,w:50,h:50,color:"yellow",direction:"right"}}},label:{type:String,default:function(){return""}}},data:function(){return{fontSize:11}},computed:{objectStyle:function(){return{top:"".concat(this.objProps.top,"px"),left:"".concat(this.objProps.left,"px"),width:"".concat(this.objProps.w,"px"),height:"".concat(this.objProps.h,"px"),"background-color":this.objProps.color,"z-index":"".concat(this.label?10:0),"font-size":"".concat(this.fontSize,"px")}}},mounted:function(){this.updateFontSize(),this.$el.addEventListener("resize",this.updateFontSize)},beforeDestroy:function(){this.$el.addEventListener("resize",this.updateFontSize)},methods:{updateFontSize:function(){var e=.125*+this.$el.offsetWidth,t=.7*+this.$el.offsetheight;this.fontSize=e>t?t:e},handleObjectClicked:function(){this.$emit("clicked")}}},ie=re,ae=(o("857a"),Object(a["a"])(ie,oe,ne,!1,null,null,null)),se=ae.exports,le=["ResumeFormal","Freestyle","Art","Games"],ce=["left","right","up","down"],ue={top:0,left:0,w:0,h:0,color:"lightgrey",direction:"right"},he={numOfObj:8,objStep:1.5,width:1,height:1},fe={components:{MoveObject:se},data:function(){for(var e=[],t=[],o=0;o<he.numOfObj;o++){var n={id:"id_".concat(o)};e.push(Object.assign(n,ue)),t.push("")}return{objStep:he.objStep,objParams:e,fieldSize:{w:0,h:0},labels:t,regularAnimTimer:null,grouthEl:null,routeName:""}},computed:Object(A["a"])({},Object(z["b"])(["currBlocksColors"])),mounted:function(){var e=this,t=4;window.addEventListener("resize",this.setFieldSize),this.setFieldSize(),this.objParams.forEach((function(o,r){var i,a,s=e.fieldSize.w/4.2,l=e.fieldSize.h/4.2,c=ce[t%4];switch(t+=1,c){case"right":i=Math.floor(Math.random()*(e.fieldSize.h-l)),a=-s;break;case"left":i=Math.floor(Math.random()*(e.fieldSize.h-l)),a=e.fieldSize.w;break;case"up":i=e.fieldSize.h,a=Math.floor(Math.random()*(e.fieldSize.w-s));break;case"down":i=-l,a=Math.floor(Math.random()*(e.fieldSize.w-s));break}n["a"].set(e.objParams[r],"direction",c),n["a"].set(e.objParams[r],"top",i),n["a"].set(e.objParams[r],"left",a),n["a"].set(e.objParams[r],"w",s),n["a"].set(e.objParams[r],"h",l),n["a"].set(e.objParams[r],"color",e.currBlocksColors[Math.floor(Math.random()*e.currBlocksColors.length)])})),this.setLabels(),this.calculateStep()},beforeDestroy:function(){window.removeEventListener("resize",this.setFieldSize)},methods:{setLabels:function(){for(var e=0;e<this.labels.length;e++)e in le&&n["a"].set(this.labels,e,le[e])},handleMoveObjectClicked:function(e){if(this.labels[e]){this.routeName=this.labels[e],clearTimeout(this.regularAnimTimer),this.grouthEl=this.$refs["move-object-".concat(e)][0].$el;var t=getComputedStyle(this.grouthEl);document.body.style.setProperty("--curr-top",t.top),document.body.style.setProperty("--curr-left",t.left),document.body.style.setProperty("--curr-width",t.width),document.body.style.setProperty("--curr-height",t.height),this.grouthEl.addEventListener("animationend",this.onGrowthAnimationEnd),this.grouthEl.classList.add("grouth-object")}},onGrowthAnimationEnd:function(){var e=this.routeName;this.routeName="",this.grouthEl.removeEventListener("animationend",this.onGrowthAnimationEnd),this.grouthEl=null,this.$router.push({name:e})},setFieldSize:function(){this.fieldSize={w:this.$refs.field.offsetWidth,h:this.$refs.field.offsetHeight}},calculateStep:function(){var e=this;this.objParams.forEach((function(t,o){var r;switch(t.direction){case"right":r=t.left+e.objStep,e.isCollision(o,r)?n["a"].set(e.objParams[o],"direction","left"):r>=e.fieldSize.w?e.setNewObjParams(o):t.left+=e.objStep;break;case"left":r=t.left-e.objStep,e.isCollision(o,r)?n["a"].set(e.objParams[o],"direction","right"):r+t.w<=0?e.setNewObjParams(o):t.left-=e.objStep;break;case"up":r=t.top-e.objStep,e.isCollision(o,r)?n["a"].set(e.objParams[o],"direction","down"):r+t.h<=0?e.setNewObjParams(o):t.top-=e.objStep;break;case"down":r=t.top+e.objStep,e.isCollision(o,r)?n["a"].set(e.objParams[o],"direction","up"):r>=e.fieldSize.h?e.setNewObjParams(o):t.top+=e.objStep;break}})),this.regularAnimTimer=setTimeout(this.calculateStep,50/3)},isCollision:function(e,t){var o=this,n=!1,r=this.objParams[e].top,i=this.objParams[e].top+this.objParams[e].h,a=this.objParams[e].left,s=this.objParams[e].left+this.objParams[e].w;return this.objParams.forEach((function(l,c){var u,h;if(c!==e)switch(o.objParams[e].direction){case"right":if(u=t+o.objParams[e].w>=l.left,h=t+o.objParams[e].w<=l.left+l.w,u&&h){var f=r>=l.top&&r<=l.top+l.h,d=i>=l.top&&i<=l.top+l.h;(f||d)&&(n=!0)}break;case"left":if(u=t<=l.left+l.w,h=t>=l.left,u&&h){var m=r>=l.top&&r<=l.top+l.h,p=i>=l.top&&i<=l.top+l.h;(m||p)&&(n=!0)}break;case"up":if(u=t<=l.top+l.h,h=t>=l.top,u&&h){var b=a>=l.left&&a<=l.left+l.w,v=s>=l.left&&s<=l.left+l.w;(b||v)&&(n=!0)}break;case"down":if(u=t+o.objParams[e].h>=l.top,h=t+o.objParams[e].h<=l.top+l.h,u&&h){var g=a>=l.left&&a<=l.left+l.w,w=s>=l.left&&s<=l.left+l.w;(g||w)&&(n=!0)}break}})),n},setNewObjParams:function(e){var t,o;switch(this.objParams[e].direction){case"right":t=Math.floor(Math.random()*(this.fieldSize.h-this.objParams[e].h)),o=-this.objParams[e].w;break;case"left":t=Math.floor(Math.random()*(this.fieldSize.h-this.objParams[e].h)),o=this.fieldSize.w;break;case"up":t=this.fieldSize.h,o=Math.floor(Math.random()*(this.fieldSize.w-this.objParams[e].w));break;case"down":t=-this.objParams[e].h,o=Math.floor(Math.random()*(this.fieldSize.w-this.objParams[e].w));break}n["a"].set(this.objParams[e],"top",t),n["a"].set(this.objParams[e],"left",o),n["a"].set(this.objParams[e],"w",this.fieldSize.w/4.2),n["a"].set(this.objParams[e],"h",this.fieldSize.h/4.2),n["a"].set(this.objParams[e],"color",this.currBlocksColors[Math.floor(Math.random()*this.currBlocksColors.length)])}}},de=fe,me=(o("32f0"),Object(a["a"])(de,ee,te,!1,null,null,null)),pe=me.exports,be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ve=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-footer"},[o("div",{staticClass:"home-footer__wrapper"},[o("div",{staticClass:"left-side-block"},[e._v(" JustMySite © ")]),o("div",{staticClass:"right-side-block"},[e._v(" povcode@gmail.com ")])])])}],ge={},we=ge,ke=(o("74a9"),Object(a["a"])(we,be,ve,!1,null,null,null)),_e=ke.exports,ye={name:"HomePage",components:{HomeHeader:X,MoveField:pe,HomeFooter:_e}},je=ye,Se=(o("cf8f"),Object(a["a"])(je,d,m,!1,null,null,null)),Ce=Se.exports,Ee={name:"Home",components:{HomePage:Ce}},Be=Ee,Pe=(o("21bb"),Object(a["a"])(Be,h,f,!1,null,null,null)),xe=Pe.exports,Oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"coming-soon"},[o("div",{staticClass:"coming-soon__content"},[o("div",{staticClass:"coming-soon__content__title"},[e._v(" "+e._s(e.$t("coming_soon_message"))+" ")]),o("div",{staticClass:"coming-soon__content__control",on:{click:e.handleControlClicked}},[e._v(" "+e._s(e.$t("coming_soon_home"))+" ")])])])},Ae=[],ze={methods:{handleControlClicked:function(){this.$router.push({name:"Home"})}}},Fe=ze,$e=(o("1e97"),Object(a["a"])(Fe,Oe,Ae,!1,null,null,null)),Me=$e.exports;n["a"].use(u["a"]);var De=[{path:"/",name:"Home",component:xe},{path:"/resumeformal",name:"ResumeFormal",component:function(){return o.e("resumeformal").then(o.bind(null,"e673"))}},{path:"/freestyle",name:"Freestyle",component:Me},{path:"/art",name:"Art",component:Me},{path:"/games",name:"Games",component:Me}],Le=new u["a"]({mode:"history",base:"/just-my-site/",routes:De}),Te=Le;o("d81d");n["a"].use(z["a"]);var Ne=new z["a"].Store({state:{locale:"ru",palette:"pastel"},getters:{currLocale:function(e){return e.locale},currPalette:function(e){return e.palette},currBlocksColors:function(e){var t=G.find((function(t){return t.name===e.palette}));return t.palette.blocks.map((function(e){return e.value}))}},mutations:{UPDATE_SETTING:function(e,t){var o=t.setting,n=t.value;e[o]=n}},actions:{updateSetting:function(e,t){var o=e.commit,n=t.setting,r=t.value;o("UPDATE_SETTING",{setting:n,value:r})}}}),He=o("9483");Object(He["a"])("".concat("/just-my-site/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("ac1f"),o("466d"),o("ddb0");var Ge=o("a925");function Ie(){var e=o("49f8"),t={};return e.keys().forEach((function(o){var n=o.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];t[r]=e(o)}})),t}n["a"].use(Ge["a"]);var Re=new Ge["a"]({locale:"ru",fallbackLocale:"en",messages:Ie()});n["a"].config.productionTip=!1,new n["a"]({router:Te,store:Ne,i18n:Re,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"5c1c":function(e,t,o){o("ffbb"),o("f7cf"),o("93aa"),o("4596"),o("9240"),o("3b93")},"5f4d":function(e,t,o){"use strict";o("d2eb")},"74a9":function(e,t,o){"use strict";o("a510")},7704:function(e){e.exports=JSON.parse('{"coming_soon_message":"Простите, страница в разработке ...","coming_soon_home":"На главную","ResumeFormal":"РЕЗЮМЕ","Freestyle":"FREESTYLE","Art":"ART","Games":"ИГРЫ","site_title":"ПРОСТО МОЙ САЙТ-ВИЗИТКА","locale_title":"Выбрать язык","palette_title":"Выбрать палитру","pastel":"Пастельная","bright":"Яркая","sepia":"Сепия"}')},"84cb":function(e,t,o){"use strict";o("1c67")},"857a":function(e,t,o){"use strict";o("3d06")},"8d5f":function(e,t,o){"use strict";o("44a3")},9240:function(e,t,o){"use strict";o.r(t);var n=o("e017"),r=o.n(n),i=o("21a1"),a=o.n(i),s=new r.a({id:"plus",use:"plus-usage",viewBox:"0 0 64 64",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64" id="plus">\n  <rect width="46" height="10" x="9" y="27" rx="4" />\n  <rect width="10" height="46" x="27" y="9" rx="4" />\n</symbol>'});a.a.add(s);t["default"]=s},"93aa":function(e,t,o){"use strict";o.r(t);var n=o("e017"),r=o.n(n),i=o("21a1"),a=o.n(i),s=new r.a({id:"cross",use:"cross-usage",viewBox:"0 0 64 64",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="cross">\n  <g fill="currentColor">\n    <rect width="59.561" height="6" x="2.399" y="29.179" rx="3" transform="rotate(135 32.18 32.18)" />\n    <rect width="59.561" height="6" x="2.399" y="29.179" rx="3" transform="rotate(45 32.18 32.18)" />\n  </g>\n</symbol>'});a.a.add(s);t["default"]=s},"974e":function(e,t,o){},"9c0c":function(e,t,o){},a510:function(e,t,o){},b095:function(e,t,o){"use strict";o("974e")},c898:function(e,t,o){},cf8f:function(e,t,o){"use strict";o("497e")},d2eb:function(e,t,o){},edd4:function(e){e.exports=JSON.parse('{"coming_soon_message":"Sorry, coming soon ...","coming_soon_home":"Home page","ResumeFormal":"RESUME","Freestyle":"FREESTYLE","Art":"ART","Games":"GAMES","site_title":"JUST MY PERSONELL SITE","locale_title":"Choose language","palette_title":"Choose palette","pastel":"Pastel","bright":"Bright","sepia":"Sepia"}')},f7cf:function(e,t,o){"use strict";o.r(t);var n=o("e017"),r=o.n(n),i=o("21a1"),a=o.n(i),s=new r.a({id:"arrow-right",use:"arrow-right-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right" id="arrow-right"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></symbol>'});a.a.add(s);t["default"]=s},ffbb:function(e,t,o){"use strict";o.r(t);var n=o("e017"),r=o.n(n),i=o("21a1"),a=o.n(i),s=new r.a({id:"arrow-left",use:"arrow-left-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left" id="arrow-left"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></symbol>'});a.a.add(s);t["default"]=s}});
//# sourceMappingURL=app.cc49b4d2.js.map