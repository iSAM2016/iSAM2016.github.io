webpackJsonp([5,36],{228:function(t,n,o){o(229);var e=o(12)(o(231),o(242),null,null);t.exports=e.exports},229:function(t,n,o){var e=o(230);"string"==typeof e&&(e=[[t.id,e,""]]);o(11)(e,{});e.locals&&(t.exports=e.locals)},230:function(t,n,o){n=t.exports=o(6)(!0),n.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"showButton.vue",sourceRoot:""}])},231:function(t,n,o){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(37),i=o(232),r=e(i),a=o(237),s=e(a);n.default={components:{olButton:l.olButton,olButtonGroup:l.olButtonGroup,showMark:r.default,document:s.default}}},232:function(t,n,o){o(233);var e=o(12)(o(235),o(236),null,null);t.exports=e.exports},233:function(t,n,o){var e=o(234);"string"==typeof e&&(e=[[t.id,e,""]]);o(11)(e,{});e.locals&&(t.exports=e.locals)},234:function(t,n,o){n=t.exports=o(6)(!0),n.push([t.id,".ol-mark-text{display:none}.ol-contents{position:relative;width:100%;padding:0 3.2px;padding:0 .2rem;border:1px solid #ccc;border-radius:4px;font-size:0}.ol-content-UI{vertical-align:top;width:100%;font-size:16px;font-size:1rem}.ol-content-code{border-left:1px dashed #ccc;overflow:hidden;height:10px;font-size:16px;font-size:1rem;line-height:1.2;transition:all 1s;-webkit-transition:all 1s ease}.ol-content-code .ol-drop{position:absolute;bottom:0;left:7px;width:100%;height:20px;text-align:center;vertical-align:middle;line-height:20px;background-color:rgba(0,0,0,.02)}.halfHeight{height:220px}.allHeight{height:auto}","",{version:3,sources:["D:/UI/src/components/showMark.vue"],names:[],mappings:"AACA,cACE,YAAc,CACf,AACD,aACE,kBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,gBAAkB,AAClB,sBAAuB,AACvB,kBAAmB,AACnB,WAAa,CACd,AACD,eACE,mBAAoB,AACpB,WAAY,AACZ,eAAgB,AAChB,cAAgB,CACjB,AACD,iBACE,4BAA6B,AAC7B,gBAAiB,AACjB,YAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,8BAAgC,CACjC,AACD,0BACE,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,sBAAuB,AACvB,iBAAkB,AAClB,gCAAmC,CACpC,AACD,YACE,YAAc,CACf,AACD,WACE,WAAa,CACd",file:"showMark.vue",sourcesContent:["\n.ol-mark-text {\n  display: none;\n}\n.ol-contents {\n  position: relative;\n  width: 100%;\n  padding: 0 3.2px;\n  padding: 0 0.2rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 0;\n}\n.ol-content-UI {\n  vertical-align: top;\n  width: 100%;\n  font-size: 16px;\n  font-size: 1rem;\n}\n.ol-content-code {\n  border-left: 1px dashed #ccc;\n  overflow: hidden;\n  height: 10px;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.2;\n  transition: all 1s;\n  -webkit-transition: all 1s ease;\n}\n.ol-content-code .ol-drop {\n  position: absolute;\n  bottom: 0;\n  left: 7px;\n  width: 100%;\n  height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 20px;\n  background-color: rgba(0,0,0,0.02);\n}\n.halfHeight {\n  height: 220px;\n}\n.allHeight {\n  height: auto;\n}"],sourceRoot:""}])},235:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){var n=document.createElement("div");return n.innerHTML=t,n.innerText||n.textContent};n.default={props:{str:{type:String}},data:function(){return{rawHtml:"",height:"0px"}},methods:{openitem:function(){if(this.$el.getElementsByClassName("ol-code-content")[0].offsetHeight<0)return!1;if("0px"===this.height){var t=Number(this.$el.getElementsByClassName("ol-code-content")[0].offsetHeight);this.height=t+0+"px"}else this.height="0px"}},mounted:function(){this.rawHtml=window.marked(o(this.$el.getElementsByClassName("ol-mark-text")[0].innerHTML))}}},236:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"ol-contents"},[o("div",{staticClass:"ol-content-UI"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"ol-content-code",style:{height:t.height}},[o("div",{staticClass:"ol-code-content",domProps:{innerHTML:t._s(t.rawHtml)}}),t._v(" "),o("div",{staticClass:"ol-drop",on:{click:function(n){t.openitem()}}},[t._v("↑")])])])},staticRenderFns:[]}},237:function(t,n,o){o(238);var e=o(12)(o(240),o(241),null,null);t.exports=e.exports},238:function(t,n,o){var e=o(239);"string"==typeof e&&(e=[[t.id,e,""]]);o(11)(e,{});e.locals&&(t.exports=e.locals)},239:function(t,n,o){n=t.exports=o(6)(!0),n.push([t.id,".ol-mark-document{display:none}.ol-file table{border-collapse:collapse;width:100%;background-color:#fff;color:#5e6d82;font-size:14px;margin-bottom:45px;line-height:1.5em}.ol-file table tr{background-color:#fff;border-top:1px solid #ccc;line-height:3;text-align:center}.ol-file thead{display:table-header-group}.ol-file tbody,.ol-file thead{vertical-align:middle;border-color:inherit}.ol-file tbody{display:table-row-group}.ol-file table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body table td,.ol-file table th{padding:6px 13px}","",{version:3,sources:["D:/UI/src/components/document.vue"],names:[],mappings:"AACA,kBACE,YAAc,CACf,AACD,eACE,yBAA0B,AAC1B,WAAY,AACZ,sBAAuB,AACvB,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,kBACE,sBAAuB,AACvB,0BAA2B,AAC3B,cAAe,AACf,iBAAmB,CACpB,AACD,eACE,0BAA4B,CAG7B,AACD,8BAHE,sBAAuB,AACvB,oBAAsB,CAMvB,AAJD,eACE,uBAAyB,CAG1B,AACD,gCACE,wBAA0B,CAC3B,AACD,0CACE,gBAAkB,CACnB",file:"document.vue",sourcesContent:["\n.ol-mark-document {\n  display: none;\n}\n.ol-file table {\n  border-collapse: collapse;\n  width: 100%;\n  background-color: #fff;\n  color: #5e6d82;\n  font-size: 14px;\n  margin-bottom: 45px;\n  line-height: 1.5em;\n}\n.ol-file table tr {\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  line-height: 3;\n  text-align: center;\n}\n.ol-file thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.ol-file tbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.ol-file table tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n.ol-file table th, .markdown-body table td {\n  padding: 6px 13px;\n}"],sourceRoot:""}])},240:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){var n=document.createElement("div");return n.innerHTML=t,n.innerText||n.textContent};n.default={props:{str:{type:String}},data:function(){return{rawHtml:"",height:"220px"}},methods:{openitem:function(){}},mounted:function(){this.rawHtml=window.marked(o(this.$el.getElementsByClassName("ol-mark-document")[0].innerHTML))}}},241:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"ol-file"},[t._t("default"),t._v(" "),o("div",{staticClass:"ol-code-content",domProps:{innerHTML:t._s(t.rawHtml)}})],2)},staticRenderFns:[]}},242:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",[o("h3",[t._v("按钮")]),t._v(" "),o("showMark",[o("textarea",{staticClass:"ol-mark-text"},[t._v('\n```html  \n<ol-button>默认按钮</ol-button>\n<ol-button type="primary">推荐</ol-button>\n<ol-button type="success">success</ol-button>\n<ol-button type="info">information</ol-button>\n<ol-button type="danger">danger</ol-button>\n<ol-button type="warning">waring</ol-button>\n<ol-button type="warning">\n  <i class="icon ion-alert"></i>waring</ol-button>\n<ol-button :disabled =\'true\'>disabled</ol-button>\n```\n')]),t._v(" "),o("ol-button",[t._v("默认按钮")]),t._v(" "),o("ol-button",{attrs:{type:"primary"}},[t._v("推荐")]),t._v(" "),o("ol-button",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),o("ol-button",{attrs:{type:"info"}},[t._v("information")]),t._v(" "),o("ol-button",{attrs:{type:"danger"}},[t._v("danger")]),t._v(" "),o("ol-button",{attrs:{type:"warning"}},[t._v("waring")]),t._v(" "),o("ol-button",{attrs:{type:"warning"}},[o("i",{staticClass:"icon ion-alert"}),t._v("waring")]),t._v(" "),o("ol-button",{attrs:{disabled:!0}},[t._v("disabled")])],1),t._v(" "),o("h3",[t._v("按钮尺寸")]),t._v(" "),o("showMark",[o("textarea",{staticClass:"ol-mark-text"},[t._v('\n```html\n<ol-button   type="primary">推荐</ol-button>\n<ol-button  size="small" type="primary">推荐</ol-button>\n```\n')]),t._v(" "),o("ol-button",{attrs:{type:"primary"}},[t._v("推荐")]),t._v(" "),o("ol-button",{attrs:{size:"small",type:"primary"}},[t._v("推荐")])],1),t._v(" "),o("h3",[t._v("图标")]),t._v(" "),o("showMark",[o("textarea",{staticClass:"ol-mark-text"},[t._v('\n```html\n<ol-button  icon="ion-android-add " type="primary"></ol-button>\n<ol-button   type="primary"> <i class="ion-android-locate"></i>\n  推荐\n</ol-button>\n```\n')]),t._v(" "),o("ol-button",{attrs:{icon:"ion-android-add ",type:"primary"}}),t._v(" "),o("ol-button",{attrs:{type:"primary"}},[o("i",{staticClass:"ion-android-locate"}),t._v("\n推荐\n")])],1),t._v(" "),o("h3",[t._v("组合按钮")]),t._v(" "),o("showMark",[o("textarea",{staticClass:"ol-mark-text"},[t._v("\n```html\n<ol-button-group>\n<ol-button>common</ol-button>\n<ol-button>common</ol-button>\n<ol-button>common</ol-button>\n<ol-button>common</ol-button>\n</ol-button-group>\n```\n")]),t._v(" "),o("ol-button-group",[o("ol-button",[t._v("common")]),t._v(" "),o("ol-button",[t._v("common")]),t._v(" "),o("ol-button",[t._v("common")]),t._v(" "),o("ol-button",[t._v("common")])],1)],1),t._v(" "),o("h3",[t._v("说明文档")]),t._v(" "),o("document",[o("textarea",{staticClass:"ol-mark-document"},[t._v("\n| 参数          | 说明          | 类型    |  可选值                                        | 默认值|\n| ------------- | ------------- | ------- | ---------------------------------------------- | ----- |\n| type          | 按钮类型      | string  |   default success primary danger info warning  |default|\n| size          | 按钮尺寸      | string  |   small   large  default                       |default|\n| disabled      | 按钮禁用      | Boolean |   false true                                   |  false|\n| icon          | icon          | string  |                                                |       |\n| loading       | 下载          | Boolean |   false true                                   |  false|\n")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.bff24fa.js.map