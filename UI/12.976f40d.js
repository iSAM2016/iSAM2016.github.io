webpackJsonp([12,34],{251:function(e,n,t){t(252);var a=t(12)(t(254),t(255),null,null);e.exports=a.exports},252:function(e,n,t){var a=t(253);"string"==typeof a&&(a=[[e.id,a,""]]);t(11)(a,{});a.locals&&(e.exports=a.locals)},253:function(e,n,t){n=e.exports=t(6)(!0),n.push([e.id,".item{margin-top:10px}","",{version:3,sources:["/Users/isam2016/Desktop/UI-master/src/components/show/showInput.vue"],names:[],mappings:"AACA,MACE,eAAiB,CAClB",file:"showInput.vue",sourcesContent:["\n.item {\n  margin-top: 10px;\n}"],sourceRoot:""}])},254:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(37);n.default={data:function(){return{form1:{name:"123"},limits:{length:{type:"Length",min:6,max:12},email:{type:"Email"},phone:{type:"Phone"},number:{type:"Number"}}}},components:{olInput:a.olInput},methods:{inputing:function(e){console.log(e)}},computed:{}}},255:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("div",[t("h4",[e._v("#标签 改动较大")]),e._v(" "),t("ol-input",{attrs:{placeHolder:"请输入内容"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",tip:"我是提示语",disabled:!0},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"primary"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"danger"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"success"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"warning"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1),e._v(" "),t("div",[t("h4",[e._v("#密码")]),e._v(" "),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",type:"password"},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1),e._v(" "),t("div",[t("h4",[e._v("#验证")]),e._v("\n   长度"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.length},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v("\n   手机"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.phone},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" \n   email"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.email},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" \n   number"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.number},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=12.976f40d.js.map