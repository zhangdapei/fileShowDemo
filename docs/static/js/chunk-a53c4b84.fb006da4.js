(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a53c4b84"],{1:function(e,t){},"1b6b":function(e,t,a){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"93e5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fileShow"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"pdf"},e._l(e.numPages,(function(t){return a("pdf",{key:t,attrs:{src:e.pdfSrc,page:t}})})),1)]),a("el-col",{attrs:{span:12}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"文档修正",name:"first"}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"关键字："}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"修正："}},[a("el-input",{model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}})],1),a("div",{staticClass:"buttonGrunp"},[a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1),a("el-tab-pane",{attrs:{label:"新增规则",name:"second"}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"关键字："}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"业务规则模板："}},[a("el-input",{model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}})],1),a("div",{staticClass:"buttonGrunp"},[a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存测试")])],1)],1)],1)],1)],1)],1)],1)},o=[],s=a("858e"),r={name:"fileShow",components:{pdf:s["a"]},data:function(){return{pdfSrc:"http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",numPages:"",iframePDFSrc:"http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",activeName:"first",form:{name:"",region:""}}},mounted:function(){this.getNumPages(this.pdfSrc)},methods:{getNumPages:function(e){var t=this,a=s["a"].createLoadingTask(e);a.promise.then((function(e){t.pdfSrc=a,t.numPages=e.numPages})).catch((function(e){console.error("pdf加载失败")}))},handleClick:function(e,t){console.log(e,t)},onSubmit:function(){console.log("submit!")},save:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){e.getNumPages("https://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"),t.close()}),2e3)}}},l=r,i=(a("d13c"),a("2877")),c=Object(i["a"])(l,n,o,!1,null,"7b32ff64",null);t["default"]=c.exports},d13c:function(e,t,a){"use strict";a("1b6b")}}]);