webpackJsonp([1],{

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(437)
	
	/* script */
	__vue_exports__ = __webpack_require__(438)
	
	/* template */
	var __vue_template__ = __webpack_require__(481)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c185bb8e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c185bb8e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 437:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _personalInforTitle = __webpack_require__(439);
	
	var _personalInforTitle2 = _interopRequireDefault(_personalInforTitle);
	
	var _data = __webpack_require__(443);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	
	
	exports.default = {
	  components: {
	    personalInfor: _personalInforTitle2.default,
	    myData: _data2.default
	  },
	
	  data: function data() {
	    return {};
	  },
	
	
	  events: {}
	};

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(440)
	
	/* script */
	__vue_exports__ = __webpack_require__(441)
	
	/* template */
	var __vue_template__ = __webpack_require__(442)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\common\\personalInforTitle.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a785b1e4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a785b1e4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] personalInforTitle.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 440:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _auth = __webpack_require__(101);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function data() {
	        return {};
	    },
	
	    beforeDestroy: function beforeDestroy() {},
	    methods: {
	        logout: function logout() {
	            _auth2.default.logout();
	            this.$router.push({ path: '/' });
	        }
	    }
	
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    staticClass: "nav nav-tabs clearfix",
	    attrs: {
	      "id": "presonalBox"
	    }
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/shopping",
	      "tag": "li"
	    }
	  }, [_m(0)]), " ", _h('router-link', {
	    attrs: {
	      "to": "/shopping",
	      "tag": "li"
	    }
	  }, [_m(1)]), " ", _h('li', {
	    staticClass: "dropdown"
	  }, [_m(2), " ", _h('ul', {
	    staticClass: "dropdown-menu"
	  }, [_m(3), " ", _h('router-link', {
	    attrs: {
	      "to": "/personalshow",
	      "tag": "li"
	    }
	  }, [_m(4)]), " ", _h('router-link', {
	    attrs: {
	      "to": "/personalchange",
	      "tag": "li"
	    }
	  }, [_m(5)]), " ", _h('router-link', {
	    attrs: {
	      "to": "/changeword",
	      "tag": "li"
	    }
	  }, [_m(6)]), " ", _h('li', {
	    on: {
	      "click": logout
	    }
	  }, [_m(7)])])]), " ", _m(8), " ", _h('router-link', {
	    attrs: {
	      "to": "/",
	      "tag": "li"
	    }
	  }, [_m(9)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["个人中心"])
	}},function (){with(this) {
	  return _h('span', ["购物车"])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "dropdown-toggle",
	    attrs: {
	      "data-toggle": "dropdown",
	      "href": "#"
	    }
	  }, ["\n            信息\n            ", _h('span', {
	    staticClass: "caret"
	  })])
	}},function (){with(this) {
	  return _h('li', [_h('span', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["会员信息"])])
	}},function (){with(this) {
	  return _h('span', ["个人信息"])
	}},function (){with(this) {
	  return _h('span', ["编辑资料"])
	}},function (){with(this) {
	  return _h('span', ["修改密码"])
	}},function (){with(this) {
	  return _h('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["退出"])
	}},function (){with(this) {
	  return _h('li', {}, [_h('span', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["通知"])])
	}},function (){with(this) {
	  return _h('span', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["首页"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a785b1e4", module.exports)
	  }
	}

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(444)
	
	/* script */
	__vue_exports__ = __webpack_require__(445)
	
	/* template */
	var __vue_template__ = __webpack_require__(480)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\data.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-db69f0da", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-db69f0da", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] data.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 444:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _choseDate = __webpack_require__(446);
	
	var _choseDate2 = _interopRequireDefault(_choseDate);
	
	var _choseCrumbs = __webpack_require__(463);
	
	var _choseCrumbs2 = _interopRequireDefault(_choseCrumbs);
	
	var _choseTitle = __webpack_require__(467);
	
	var _choseTitle2 = _interopRequireDefault(_choseTitle);
	
	var _dataList = __webpack_require__(471);
	
	var _dataList2 = _interopRequireDefault(_dataList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	
	exports.default = {
	  components: {
	    choseDate: _choseDate2.default,
	    choseCrumbs: _choseCrumbs2.default,
	    choseTitle: _choseTitle2.default,
	    dataLists: _dataList2.default
	  },
	
	  ready: function ready() {},
	  data: function data() {
	    return {
	
	      isoperation: false,
	      mydatecreatnewfolder: false
	    };
	  },
	
	  events: {
	    choseButtonClik: function choseButtonClik(value) {
	      this.$broadcast("choseButtonClik", value);
	    },
	    titleRename: function titleRename() {
	
	      this.$broadcast("titleRename");
	    },
	    creatOneFolder: function creatOneFolder() {
	
	      this.$broadcast("creatOneFolder");
	    },
	    exchangeforderfn: function exchangeforderfn() {
	      this.$broadcast("exchangeforderfn");
	    }
	  },
	  methods: {
	    add: function add() {
	      this.incrementCounter(1);
	    }
	  }
	
	};

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(447)
	
	/* script */
	__vue_exports__ = __webpack_require__(448)
	
	/* template */
	var __vue_template__ = __webpack_require__(462)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\choseDate.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2b5fd031", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2b5fd031", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] choseDate.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 447:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(18);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _tree = __webpack_require__(449);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _showUploadinfo = __webpack_require__(455);
	
	var _showUploadinfo2 = _interopRequireDefault(_showUploadinfo);
	
	__webpack_require__(459);
	
	var _actions = __webpack_require__(460);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var eventHub = new _vue2.default(); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  vuex: {
	    getters: {
	      selctDataLength: function selctDataLength(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.addDatas.length;
	      }
	    },
	    actions: {
	      delData: _actions.delData, //删除多个数据 
	      newNames: _actions.newNames, //命名文件（只能一次命名一个文件）
	      createNewfolder: _actions.createNewfolder //新建文件夹  
	    }
	  },
	  components: {
	    showUpload: _showUploadinfo2.default,
	    treeGrid: _tree2.default
	  },
	
	  props: ["iscreatnewfolder"],
	
	  created: function created() {
	    eventHub.$emit('changekey', { changekey: this.changekey });
	  },
	  mounted: function mounted() {},
	  data: function data() {
	    return {
	      mymsg: "",
	      istreeshow: false
	    };
	  },
	
	
	  watch: {},
	  methods: {
	    changekey: function changekey() {
	      this.mymsg = true;
	    },
	    rename: function rename() {
	      if (this.selctDataLength === 1) {
	        this.newNames();
	      } else {
	        this.open();
	      }
	    },
	    mydelData: function mydelData() {
	      if (this.selctDataLength) {
	        this.delData();
	      } else {
	        this.opendel();
	      }
	    },
	    creatOneFolder: function creatOneFolder() {
	      if (true) {
	        this.createNewfolder();
	      } else {
	        return false;
	      }
	    },
	    exchange: function exchange() {
	      if (this.selctDataLength) {
	        this.closeTree();
	      } else {
	        this.open();
	      }
	    },
	    closeTree: function closeTree() {
	      //显示tree
	      this.istreeshow = !this.istreeshow;
	    },
	    open: function open() {
	      var _this = this;
	
	      this.$alert('请您选择一个文件', '注意', {
	        confirmButtonText: '确定',
	        callback: function callback(action) {
	          _this.$message({
	            type: 'info',
	            message: '请您选择一个文件'
	          });
	        }
	      });
	    },
	    opendel: function opendel() {
	      var _this2 = this;
	
	      this.$alert('请您选择文件', '注意', {
	        confirmButtonText: '确定',
	        callback: function callback(action) {
	          _this2.$message({
	            type: 'info',
	            message: '请您选择文件'
	          });
	        }
	      });
	    }
	  }
	
	};

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(450)
	
	/* script */
	__vue_exports__ = __webpack_require__(451)
	
	/* template */
	var __vue_template__ = __webpack_require__(454)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\common\\tree.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-38ba5398", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-38ba5398", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tree.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 450:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(452);
	
	__webpack_require__(453);
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	// define the item component
	exports.default = {
	  components: {},
	  ready: function ready() {
	    $('.tree-folder-content').slimscroll({
	      height: 'auto',
	      width: 'auto', //可滚动区域宽度
	      size: '4px', //组件宽度
	      opacity: .3, //滚动条透明度
	      distance: '14px', //组件与侧边之间的距离
	      railColor: '#333', //轨道颜色
	      railOpacity: .2, //轨道透明度
	      railDraggable: true });
	
	    $(".tree-content-main").draggabilly();
	  },
	
	  props: {},
	  data: function data() {
	    return {
	      data: [{
	        label: '一级 1',
	        children: [{
	          label: '二级 1-1'
	        }]
	      }, {
	        label: '一级 2',
	        children: [{
	          label: '二级 2-1'
	        }, {
	          label: '二级 2-2'
	        }]
	      }, {
	        label: '一级 3',
	        children: [{
	          label: '二级 3-1'
	        }, {
	          label: '二级 3-2'
	        }]
	      }],
	      defaultProps: {
	        children: 'children',
	        label: 'label'
	      }
	    };
	  },
	  computed: {},
	  methods: {
	    closeTree: function closeTree() {
	      this.$emit("closeTree");
	    },
	    handleNodeClick: function handleNodeClick(data) {
	      console.log(data);
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
	 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	 *
	 * Version: 1.3.8
	 *
	 */
	(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
	var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
	l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
	!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
	h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
	width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
	WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
	function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
	x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _vue = __webpack_require__(18);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.directive('select', {
	  twoWay: true,
	  priority: 1000,
	
	  params: [],
	
	  bind: function bind(el) {
	
	    var self = this;
	    $(el).find("ul").each(function (index, item) {
	
	      //console.log(index)
	      $(item).find("li").find("div").css("paddingLeft", 42 * index);
	      $(item).find("li").find(".bold").css("paddingLeft", 26 * index);
	    });
	
	    $(el).on("mousedown", function (ev) {
	      var self = $(el);
	      var _x = ev.pageX - parseInt(self.css("left"));
	      var _y = ev.pageY - parseInt(self.css("top"));
	
	      $(document).on("mousemove", function (ev) {
	        var x = ev.pageX - _x;
	        var y = ev.pageY - _y;
	
	        self.css("left", x);
	        self.css("top", y);
	      });
	
	      $(document).on("mouseup", function (ev) {
	
	        $(document).unbind("mousemove");
	        $(document).unbind("mouseup");
	      });
	
	      return false;
	    });
	  },
	  update: function update(value) {
	    // $(this.el).val(value).trigger('change')
	  },
	  unbind: function unbind() {
	    //$(this.el).off().select2('destroy')
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "tree-content "
	  }, [_h('div', {
	    directives: [{
	      name: "select",
	      rawName: "v-select"
	    }],
	    staticClass: "tree-content-main"
	  }, [_h('div', {
	    staticClass: "title"
	  }, [_m(0), " ", _h('span', {
	    staticClass: "close_tree",
	    on: {
	      "click": closeTree
	    }
	  }, ["X"])]), " ", _h('div', {
	    staticClass: "tree-folder-content"
	  }, [_h('el-tree', {
	    attrs: {
	      "data": data,
	      "props": defaultProps
	    },
	    on: {
	      "node-click": handleNodeClick
	    }
	  })]), " ", _m(1)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["移动到"])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "tree-folder-buttons"
	  }, [_h('button', {
	    staticClass: "btn btn-default ",
	    attrs: {
	      "type": "button"
	    }
	  }, ["确定"]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    }
	  }, ["取消"])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-38ba5398", module.exports)
	  }
	}

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(456)
	
	/* script */
	__vue_exports__ = __webpack_require__(457)
	
	/* template */
	var __vue_template__ = __webpack_require__(458)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\showUploadinfo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1d750eb5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1d750eb5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] showUploadinfo.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 456:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(18);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var eventHub = new _vue2.default();
	
	var CONFIRM_TEXT = '确定';
	var CANCEL_TEXT = '取消';
	
	exports.default = {
	  mixins: [],
	
	  props: ['mymsg'],
	
	  computed: {},
	
	  methods: {
	    panelHeadingClose: function panelHeadingClose() {
	      $(".fix-main-panel").css("bottom", "0");
	    },
	    panelHeadingOpen: function panelHeadingOpen() {
	      $(".fix-main-panel").css("bottom", "-329px");
	    },
	    changekey: function changekey(key) {
	      this.key = key;
	    }
	  },
	
	  watch: {
	    inputValue: function inputValue() {
	      if (this.$type === 'prompt') {
	        this.validate();
	      }
	    }
	  },
	
	  data: function data() {
	    return {
	      key: false
	
	    };
	  },
	
	  events: {
	    /*changekey: function(key){
	      this.key = key
	    }*/
	  },
	  created: function created() {
	    eventHub.$on('changekey', this.changekey);
	  }
	
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('section', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (key),
	      expression: "key"
	    }],
	    staticClass: "fix-main-panel"
	  }, [_h('div', {
	    staticClass: "panel panel-default"
	  }, [_h('div', {
	    staticClass: "panel-heading clearfix"
	  }, [_m(0), " ", _h('i', {
	    staticClass: "icon-minus",
	    attrs: {
	      "id": "panelHeadingClose"
	    },
	    on: {
	      "click": panelHeadingClose
	    }
	  }), " ", _h('i', {
	    staticClass: "icon-check-empty",
	    attrs: {
	      "id": "panelHeadingOpen"
	    },
	    on: {
	      "click": panelHeadingOpen
	    }
	  })]), " ", _m(1)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["上传进度"])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "panel-body"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1d750eb5", module.exports)
	  }
	}

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, jQuery) {"use strict";
	
	var _vue = __webpack_require__(18);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.directive('startuploader', {
	  twoWay: true,
	  priority: 1000,
	
	  params: [],
	
	  bind: function bind(el, binding, vnode) {
	
	    var self = this;
	    $(el).click(function () {
	      // showupbox()
	
	      var MyProgress = function (box, obj) {
	        //obj ===uploader
	        function MyProgress(box, obj) {
	          this.obj = obj;
	          this.box = box;
	          this.filesNumArr = [];
	          this.showProgess();
	        }
	        MyProgress.prototype = {
	          //开始上传文件 触发uploader.upload()
	          begin: function begin() {
	            var _myself = this;
	            _myself.obj.upload();
	
	            //必须设置uploadFolderId
	
	            $("#myfolderId").val($.getLocalStorage('myfolderId', 1000000));
	
	            var formData = $('#propertyForm').serializeJson(),
	                files = _myself.obj.getFiles(),
	                fileIds = [];
	
	            console.log(formData);
	
	            // close tag 
	            $('.cd-user-modal').click();
	
	            for (var i = 0; i < files.length; i++) {
	
	              fileIds.push(files[i].fileId);
	            }
	
	            formData.fileIds = fileIds;
	
	            $.post("./FileInFolderAction!SubmitFiles", formData, function (result) {
	              $('.ready-to-show').empty();
	              _myself.obj.getFiles().length = 0;
	            });
	
	            // 触发相应事件
	            //点击上传按钮之后
	            _myself.obj.on("uploadStart", function (file) {});
	
	            //进度条
	            _myself.obj.on("uploadProgress", function (file, percentage) {
	              var myprogress = $("#" + file.id + 'progress').find('.progress-bar'),
	                  n = percentage * 100;
	              myprogress.css("width", n + '%');
	            });
	
	            _myself.obj.on("uploadSuccess", function (file) {
	              $("#" + file.id + 'progress').find('.progress-all-buttons').empty();
	              $("#" + file.id + 'progress').find('.progress-all-buttons').text('上传成功');
	            });
	
	            //出栈
	            _myself.obj.on("fileDequeued", function (file) {
	              if (file.uploadState == 'uploaded') {
	                console.log('文件已上传');
	              } else {
	                console.log('文件已上传');
	              }
	            });
	
	            /**上传完成**/
	            _myself.obj.on("uploadFinished", function () {});
	
	            /**上出现错误**/
	            _myself.obj.on("uploadError", function (file) {
	              $("#" + file.id).find("p").text("上传出错");
	              uploader.cancelFile(file);
	              uploader.removeFile(file, true);
	              uploader.reset();
	            });
	          },
	
	          /*** 创建进度****/
	          showProgess: function showProgess() {
	            var _myself = this;
	
	            //进度条数量
	            var files = _myself.obj.getFiles(),
	                str = "";
	
	            for (var i = 0; i < files.length; i++) {
	              if (files[i].uploadState == 'deleted') {} else {
	
	                str += '<div class =" progress-all-box" id="' + files[i].id + 'progress" for="786">' + '<div class="progress progress-striped active myprogress">' + '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"  for="7867" >' + '<span class="sr-only">0% 完成</span>' + '</div>' + '</div>' + '<div class="all-buttons main-navs progress-all-buttons " >' + '<span>"' + files[i].name + '"</span>' + '<span>3kb</span>' + '<span>' + '<i class="icon-play-circle">暂停</i>' + '</span>' + '<span>' + '<i class="icon-trash"></i>' + '</span>' + '</div>' + '</div>';
	              }
	            }
	
	            _myself.box.find(".panel-body").append(str);
	            _myself.begin();
	          }
	
	        };
	
	        return MyProgress;
	      }();
	
	      $.fn.MyProgress = function (option) {
	        var _this = this;
	        return this.each(function () {
	          if (!this.progress) {
	            new MyProgress(_this, option);
	          }
	        });
	      };
	
	      jQuery(document).ready(function ($) {
	        var $form_modal = $('.cd-user-modal'),
	            $form_login = $form_modal.find('#cd-login'),
	            $form_signup = $form_modal.find('#cd-signup'),
	            $form_forgot_password = $form_modal.find('#cd-reset-password'),
	            $form_modal_tab = $('.cd-switcher'),
	            $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
	            $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
	            $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
	            $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
	            $main_nav = $('.main-navs'),
	            $login = $main_nav.find(".cd-signin"),
	            $registe = $main_nav.find(".cd-signup"),
	            $userRegister = $form_modal.find(".user-register"),
	            $userLogin = $form_modal.find(".user-login"),
	
	        /*$list = $("#thelist");*/
	        $list = $(".ready-to-show"),
	            $filesUploadBox = $("#cd-login"),
	            $filesUploadInfoInputs = $filesUploadBox.find('input');
	        var uploader,
	            fileMd5 = '',
	            uploadId = ''; // 实例化   
	
	        //open modal 
	
	        showupbox();
	        function showupbox() {
	          $form_modal.addClass('is-visible');
	          login_selected();
	
	          uploader = WebUploader.create({
	            auto: false, //是否自动上传
	            pick: {
	              id: '#attach',
	              name: "file", //这个地方 name 没什么用，虽然打开调试器，input的名字确实改过来了。但是提交到后台取不到文件。如果想自定义file的name属性，还是要和fileVal 配合使用。
	              label: '点击选择图片',
	              multiple: false //默认为true，true表示可以多选文件，HTML5的属性
	            },
	            swf: '../webUploader/Uploader.swf', //在这里必需要引入swf文件，webuploader初始化要用
	
	            server: "./FileUploadAction",
	            duplicate: false, //是否可重复选择同一文件
	            resize: false,
	            compress: null, //图片不压缩
	            chunked: true, //分片处理
	            chunkSize: 5 * 1024 * 1024, //每片5M  
	            chunkRetry: false, //如果失败，则不重试
	            threads: 1 //上传并发数。允许同/上传并发数。允许同时最大上传进程数。
	          });
	
	          // 开始上传
	          uploader.on("fileQueued", function (file) {
	            $list.append("<div class='row ready-to-upload' id='" + file.id + "'>" + "<div class=' col-md-5 col-sm-5 col-xs-5'>" + file.name + "</div>" + "<div class=' col-md-5 col-sm-5 col-xs-5  trash'>" + "<p class=''>等待上传...</p>" + "</div><div class=' col-md-2 col-sm-2 col-xs-2'><button class=\"cancle\">删除</button></div></div>");
	
	            //取消文件上传
	            $(".cancle").on('click', function () {
	              var fileId = $(this).parents('.ready-to-upload').attr('id');
	              var files = uploader.getFiles();
	              var file;
	              for (var i = 0; i < files.length; i++) {
	                if (files[i].id == fileId) {
	                  file = files[i];
	                  break;
	                }
	              }
	              file.uploadState = 'deleted';
	              uploader.cancelFile(file);
	              $('#' + fileId).remove();
	            });
	
	            file.fileId = Guid.NewGuid().ToString();
	            file.fileInFolderId = Guid.NewGuid().ToString();
	
	            uploader.option('formData', {
	              'fileId': file.fileId
	            });
	          });
	
	          $('#submitFiles').click(function () {
	            var files = uploader.getFiles();
	            if (!files.length) {
	              alert("您还没有选择文件");
	              return false;
	            } else {
	              // close tag 
	              $('.cd-user-modal').click();
	              $(".fix-main-panel").css("bottom", "0");
	              $(".fix-main-panel").MyProgress(uploader);
	            }
	          });
	        };
	
	        //close modal
	        $('.cd-user-modal').on('click', function (event) {
	
	          if ($(event.target).is($form_modal) || $(event.target).is('.cd-close-form') && $(event.target).is('.cd-switcher')) {
	            $form_modal.removeClass('is-visible');
	          }
	        });
	
	        //back to login from the forgot-password form
	        $back_to_login_link.on('click', function (event) {
	          event.preventDefault();
	          login_selected();
	        });
	
	        function login_selected() {
	
	          $form_login.addClass('is-selected');
	          $form_signup.removeClass('is-selected');
	          $form_login.show(); ///////////////////////////
	          $userLogin.show();
	          $form_signup.hide(); ///////////////////////
	          $userRegister.hide(); /////////////////////////////
	          $form_forgot_password.removeClass('is-selected');
	          $tab_login.addClass('selected');
	          $tab_signup.removeClass('selected');
	        }
	
	        function signup_selected() {
	
	          $form_login.removeClass('is-selected');
	          $form_signup.addClass('is-selected');
	          $form_signup.show(); //////////
	          $userRegister.show();
	          $form_login.hide(); ///////////////////////
	          $userLogin.hide(); /////////////////////////////
	          $form_forgot_password.removeClass('is-selected');
	          $tab_login.removeClass('selected');
	          $tab_signup.addClass('selected');
	        }
	
	        //REMOVE THIS - it's just to show error messages 
	        $form_login.find('input[type="submit"]').on('click', function (event) {
	          //////////////////////////////////////////////////////////////////////////////////////////////
	
	          event.preventDefault();
	          var val = $("#signin-username").val();
	          var passwordVal = $("#signin-password").val();
	
	          if (checkMobile(val) || checkEmail(val)) {
	            $form_login.find('input[type="text"]').removeClass('has-error').next('span').removeClass('is-visible');
	          } else {
	            $form_login.find('input[type="text"]').addClass('has-error').next('span').addClass('is-visible');
	          }
	
	          if (checkPassword(passwordVal)) {
	            $form_login.find('input[type="password"]').removeClass('has-error').siblings('span').removeClass('is-visible');
	          } else {
	            $form_login.find('input[type="password"]').addClass('has-error').siblings('span').addClass('is-visible');
	          }
	        });
	
	        $form_signup.find('input[type="submit"]').on('click', function (event) {
	          event.preventDefault();
	          $form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	        });
	
	        //IE9 placeholder fallback
	        //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	
	      });
	
	      //credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
	      jQuery.fn.putCursorAtEnd = function () {
	        return this.each(function () {
	          // If this function exists...
	          if (this.setSelectionRange) {
	            // ... then use it (Doesn't work in IE)
	            // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
	            var len = $(this).val().length * 2;
	            this.setSelectionRange(len, len);
	          } else {
	            // ... otherwise replace the contents with itself
	            // (Doesn't work in Google Chrome)
	            $(this).val($(this).val());
	          }
	        });
	      };
	    });
	  },
	  update: function update(value) {},
	  unbind: function unbind() {}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112), __webpack_require__(112)))

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createNewfolder = exports.isNewNameShowIconn = exports.newNames = exports.newName = exports.delData = exports.choseAllfile = exports.chosefile = exports.getResource = undefined;
	
	var _resource = __webpack_require__(461);
	
	var _resource2 = _interopRequireDefault(_resource);
	
	var _ActionTypes = __webpack_require__(82);
	
	var types = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//绞带
	
	//获取元数据
	var getResource = exports.getResource = function getResource(_ref, vm, userId, name) {
	    var dispatch = _ref.dispatch;
	
	    _resource2.default.getResource(function (datas) {
	        dispatch(types.RECEIVE_DATAS, datas, userId, name);
	    }, vm, userId);
	};
	
	//单选选中文件
	//resource元数据
	var chosefile = exports.chosefile = function chosefile(_ref2, data) {
	    var dispatch = _ref2.dispatch;
	
	    dispatch(types.ADD_CHOSEFILE, data);
	};
	
	//全选文件
	var choseAllfile = exports.choseAllfile = function choseAllfile(_ref3, chosekey) {
	    var dispatch = _ref3.dispatch;
	
	    dispatch(types.ADD_CHOSEALLFILE, chosekey);
	};
	
	//删除单个数据
	var delData = exports.delData = function delData(_ref4, data) {
	    var dispatch = _ref4.dispatch;
	
	    dispatch(types.DEL_CHOSE, data);
	};
	
	//命名文件
	var newName = exports.newName = function newName(_ref5, data, name) {
	    var dispatch = _ref5.dispatch;
	
	    dispatch(types.NEW_NAME, data, name);
	};
	
	//命名文件(从标题发起)
	var newNames = exports.newNames = function newNames(_ref6, data, name) {
	    var dispatch = _ref6.dispatch;
	
	    dispatch(types.NEW_NAMES);
	};
	
	//命名文件(从标题发起)
	var isNewNameShowIconn = exports.isNewNameShowIconn = function isNewNameShowIconn(_ref7, key) {
	    var dispatch = _ref7.dispatch;
	
	    dispatch(types.NEW_NAMES_ISSHOW_ICON, key);
	};
	
	//新增文件夹
	
	var createNewfolder = exports.createNewfolder = function createNewfolder(_ref8) {
	    var dispatch = _ref8.dispatch;
	
	    dispatch(types.NEW_FOLDER);
	};

/***/ },

/***/ 461:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 
	 */
	
	var _products = [{ "fileId": "6300f737-f66c-4312-a846-ae19183eb191", "createTime": "2016-08-22 15:04:18", "testProperty": "", "fileName": "FileZilla_3.20.1_win64-setup.exe", "folderId": "ae7e24b3-dbff-44ed-b6ea-458b15a8782d" }, { "fileId": "283f0ffa-b4b4-4506-b6c2-2edbec692ae1", "createTime": "2016-08-19 12:52:56", "testProperty": "", "folderId": "ae7e24b3-dbff-44ed-b6ea-458b15a8782d" }, { "createTime": "2016-08-17 14:52:49", "testProperty": "2323", "name": "text6735", "folderId": "3593da5d-ba23-47c6-bfa4-45a9b8c9a1ab" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }, { "createTime": "2016-08-23 16:52:25", "testProperty": " ", "name": "lklklklk", "folderId": "25f31704-fe04-465d-b25b-f121eb087d15" }];
	var datasAll = null,
	    myuserId = null,
	    myvm = null;
	
	exports.default = {
	
	  /* getResource(fn, folderId){
	      ajaxGetReource(fn, folderId)
	     
	   },*/
	
	  getResource: function getResource(fn, vm, userId) {
	    myuserId = userId;
	    myvm = vm;
	
	    /***************************发布的时候改动****************************/
	    //ajaxGetReource(myvm)
	    setTimeout(function () {
	      return fn(_products);
	    }, 100);
	  }
	};
	
	
	var ajaxGetReource = function ajaxGetReource(myvm) {
	
	  myvm.$http.get('./FolderAction!GetFolderCotent?curFolderId=' + 123).then(function (ret) {
	    datasAll = JSON.parse(ret.data).files.concat(JSON.parse(ret.data).childFolders);
	    setTimeout(function () {
	      return fn(datasAll);
	    }, 100);
	  }).then(function (err) {});
	};

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    attrs: {
	      "id": "titlebox"
	    }
	  }, [_h('div', {
	    staticClass: "all-buttons main-navs  my-data-select",
	    attrs: {
	      "style": "background: #fff"
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "startuploader",
	      rawName: "v-startuploader"
	    }],
	    staticClass: "btn  btn-primary cd-signin",
	    attrs: {
	      "type": "button",
	      "value": "上传文件+"
	    },
	    on: {
	      "click": changekey
	    }
	  }), " ", _m(0), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button",
	      "disabled": selctDataLength > 1 ? true : false
	    },
	    on: {
	      "click": exchange
	    }
	  }, ["移动"]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": mydelData
	    }
	  }, ["删除"]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button",
	      "disabled": selctDataLength > 1 ? true : false
	    },
	    on: {
	      "click": rename
	    }
	  }, ["重命名"]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    class: {
	      mydisabled: iscreatnewfolder
	    },
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": creatOneFolder
	    }
	  }, ["新建文件夹"]), " ", _m(1)]), " ", _h('showUpload', {
	    attrs: {
	      "mymsg": false
	    }
	  }), " ", _h('tree-grid', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (istreeshow),
	      expression: "istreeshow"
	    }],
	    on: {
	      "closeTree": closeTree
	    }
	  })])
	}},staticRenderFns: [function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    }
	  }, ["下载"])
	}},function (){with(this) {
	  return _h('form', {
	    staticClass: "bs-example bs-example-form",
	    attrs: {
	      "id": "search-top",
	      "role": "form"
	    }
	  }, [_h('div', {
	    staticClass: "input-group clearfix"
	  }, [_h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "输入关键字"
	    }
	  }), " ", _h('span', {
	    staticClass: "input-group-btn"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    }
	  }, ["搜索"])])]), " "])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2b5fd031", module.exports)
	  }
	}

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(464)
	
	/* script */
	__vue_exports__ = __webpack_require__(465)
	
	/* template */
	var __vue_template__ = __webpack_require__(466)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\choseCrumbs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1e733e9b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1e733e9b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] choseCrumbs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 464:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(460);
	
	//进入新的窗口
	
	exports.default = {
	  vuex: {
	    getters: {
	      userId: function userId(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.userId;
	      }
	
	    },
	    actions: {
	      getResource: _actions.getResource
	    }
	  },
	  components: {},
	
	  data: function data() {
	    return {};
	  },
	
	
	  methods: {
	    openNewfolder: function openNewfolder(folderId, name) {
	      this.getResource(this, folderId, name);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('ol', {
	    staticClass: "breadcrumb",
	    attrs: {
	      "id": "changeBred"
	    }
	  }, [_l((userId), function(data, index) {
	    return _h('li', {
	      class: {
	        'active': index + 1 == userId.length
	      }
	    }, [(index + 1 !== userId.length) ? _h('a', {
	      attrs: {
	        "href": "javescript:void(0)"
	      },
	      on: {
	        "click": function($event) {
	          openNewfolder(data.userId, data.name)
	        }
	      }
	    }, ["\r\n        " + _s(data.name) + "\r\n    "]) : _e(), " ", (index + 1 == userId.length) ? _h('span', [_s(data.name)]) : _e()])
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1e733e9b", module.exports)
	  }
	}

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(468)
	
	/* script */
	__vue_exports__ = __webpack_require__(469)
	
	/* template */
	var __vue_template__ = __webpack_require__(470)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\choseTitle.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a7a5d36", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a7a5d36", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] choseTitle.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 468:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(460);
	
	exports.default = {
	  vuex: {
	    getters: {
	      isChoseAll: function isChoseAll(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.addDatas.length === mResorce.datas.length;
	      }
	    },
	    actions: {
	      choseAllfile: _actions.choseAllfile
	
	    }
	  },
	  components: {},
	  props: [],
	
	  data: function data() {
	    return {
	      isChoseAllkey: false
	    };
	  },
	
	
	  methods: {
	    mychosefn: function mychosefn() {
	
	      this.choseAllfile(this.isChoseAllkey);
	    },
	    changkey: function changkey(value) {
	      this.isChoseAllkey = value;
	    }
	  },
	
	  watch: {
	    isChoseAll: function isChoseAll(value) {
	      this.changkey(value);
	    }
	
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "row  main-resource-title",
	    attrs: {
	      "id": "changeRow"
	    }
	  }, [_h('div', {
	    staticClass: " col-md-1 col-sm-1 col-xs-1"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (isChoseAllkey),
	      expression: "isChoseAllkey"
	    }],
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": Array.isArray(isChoseAllkey) ? _i(isChoseAllkey, null) > -1 : _q(isChoseAllkey, true)
	    },
	    on: {
	      "click": mychosefn,
	      "change": function($event) {
	        var $$a = isChoseAllkey,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (isChoseAllkey = $$a.concat($$v))
	          } else {
	            $$i > -1 && (isChoseAllkey = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          isChoseAllkey = $$c
	        }
	      }
	    }
	  }), " ", _m(0)]), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["全选"])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: " col-md-4 col-sm-4 col-xs-4"
	  }, [_h('span', ["文件名"])])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: " col-md-2 col-sm-2 col-xs-2"
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: " col-md-3 col-sm-3 col-xs-3"
	  }, [_h('span', ["上传时间"])])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: " col-md-2 col-sm-2 col-xs-2"
	  }, [_h('span', ["大小"])])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5a7a5d36", module.exports)
	  }
	}

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(472)
	
	/* script */
	__vue_exports__ = __webpack_require__(473)
	
	/* template */
	var __vue_template__ = __webpack_require__(479)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\dataList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59b9a7d1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-59b9a7d1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dataList.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 472:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _itemList = __webpack_require__(474);
	
	var _itemList2 = _interopRequireDefault(_itemList);
	
	var _actions = __webpack_require__(460);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  vuex: {
	    getters: {
	      datas: function datas(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.datas;
	      }
	    },
	
	    actions: {
	      getResource: _actions.getResource }
	  },
	
	  components: {
	    item: _itemList2.default
	  },
	
	  data: function data() {
	    return {};
	  },
	
	
	  props: [],
	
	  mounted: function mounted() {},
	  created: function created() {
	    //主动触发需要提供vm，这是第一次触发
	    this.getResource(this, localStorage.userId);
	  },
	
	
	  methods: {}
	
	};

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(475)
	
	/* script */
	__vue_exports__ = __webpack_require__(476)
	
	/* template */
	var __vue_template__ = __webpack_require__(478)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\cloud-vue\\src\\components\\cloudDisk\\pages\\itemList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3012ba3a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3012ba3a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] itemList.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 475:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(477);
	
	var _tree = __webpack_require__(449);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _actions = __webpack_require__(460);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  vuex: {
	    getters: {
	      isChoseAllfile: function isChoseAllfile(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.isChoseAllfile;
	      },
	      reNameItem: function reNameItem(_ref2) {
	        var mResorce = _ref2.mResorce;
	        return mResorce.reNameItem;
	      },
	      newNameIsShowIcon: function newNameIsShowIcon(_ref3) {
	        var mResorce = _ref3.mResorce;
	        return mResorce.newNameIsShowIcon;
	      }
	    },
	    actions: {
	      delData: _actions.delData, //删除单个数据 
	      newName: _actions.newName, //命名文件  
	      chosefile: _actions.chosefile, //单选文件
	      isNewNameShowIconn: _actions.isNewNameShowIconn, //当重命名的时，关闭其他的ＩＣＯ
	      getResource: _actions.getResource
	    }
	  },
	
	  components: {
	    treeGrid: _tree2.default
	  },
	
	  props: {
	    mydata: {
	      type: Object,
	      require: true
	    },
	
	    index: {
	      type: Number,
	      require: true
	    }
	  },
	
	  data: function data() {
	    return {
	      list: ['./src/img/icon-me.jpg', './src/img/img_tubiao.png'],
	      keynum: 0,
	      childFolders: [], //文件夹
	      myinputValue: null, //修改name 的value
	      isshowicon: true, //显示ICON
	      isdisabledIcon: false, //禁止使用重命名
	      istreeshow: false, //文件树显示
	      isChoseAllkey: false,
	      isNewNameIsShowIcon: false
	    };
	  },
	  mounted: function mounted() {
	    var height = $(window).height() - $('#presonalBox').outerHeight(true) - $("#changeBred").outerHeight(true) - $("#changeRow").outerHeight(true) - $("#titlebox").outerHeight(true);
	    $('.main-resource-data').slimscroll({
	      height: height,
	      width: 'auto', //可滚动区域宽度
	      size: '8px', //组件宽度
	      opacity: .3, //滚动条透明度
	      distance: '0px', //组件与侧边之间的距离
	      railColor: '#333', //轨道颜色
	      railOpacity: .2, //轨道透明度
	      railDraggable: true });
	  },
	  created: function created() {},
	  beforeUpdate: function beforeUpdate() {
	    if (this.mydata.iscreatNewfolder && this.keynum < 1) {
	      this.keynum += 1;
	      //是否是新建文件夹
	      this.renameFolder();
	    }
	  },
	
	
	  methods: {
	    //删除文件
	    trashFiled: function trashFiled() {
	      var _this2 = this;
	
	      var that = this;
	      this.$confirm('是否久删除该文件, 是否继续?', '提示', {
	        confirmButtonText: '确定',
	        cancelButtonText: '取消',
	        type: 'warning'
	      }).then(function () {
	        //api
	        /*that.$http.get('./FileInFolderAction!DeleteFile?id='+fileId)
	        .then(function(ret) {
	          console.log(ret) 
	          that.files.splice(index,1)
	        })
	        .then(function(err) {
	          console.log(err);
	        })
	        */
	
	        _this2.delData(_this2.mydata);
	      }).catch(function () {});
	    },
	
	
	    //文件夹重命名
	    renameFolder: function renameFolder() {
	      this.isshowicon = false; //隐藏图标
	      this.isNewNameShowIconn(false); // 通知其他组件关闭iCON
	    },
	
	
	    //确认重命名文件夹名称 
	    oktrenameFolder: function oktrenameFolder() {
	      // 重命名文件夹
	      if (!this.mydata.iscreatNewfolder) {
	        var _this = this,
	            _newName = _this.myinputValue;
	
	        //API 
	        /*this.$http.get('./FolderAction!RenameFolder?id='+folderId+'&name='+name)
	          .then(function(ret) {
	            console.log(ret) 
	             _this.newName( this.mydata, newName )
	            _this.myinputValue = null;
	            _this.isshowicon = true;//隐藏图标
	                 
	          })
	          .then(function(err) {
	            console.log(err);
	          })*/
	
	        _this.newName(this.mydata, _newName);
	        _this.myinputValue = null;
	        _this.isshowicon = true; //图标show
	        this.isNewNameShowIconn(true); // 通知其他组件开启iCON
	      } else {
	        // 命名新建文件夹
	        console.log(this.folderId);
	        var _newName2 = this.myinputValue,
	            folderId = this.folderId,
	            _this3 = this;
	
	        /*this.$http.get('./FolderAction!NewFolder?parentFolderId='+folderId+'&name='+name+'&testProperty='+" ")
	        .then(function(ret) {
	        console.log(ret) 
	        alert('成功')
	         _this.newName( this.mydata, newName )
	        _this.myinputValue = null;
	        _this.isshowicon = true;//隐藏图标
	        })
	        .then(function(err) {
	        console.log(err);
	        })
	        */
	        _this3.newName(this.mydata, _newName2);
	        _this3.myinputValue = null;
	        _this3.isshowicon = true; //隐藏图标
	      }
	    },
	
	
	    //不重命名文件夹名称 
	    notrenameFolder: function notrenameFolder() {
	      this.myinputValue = null;
	      this.isshowicon = true;
	      this.isNewNameShowIconn(true); // 通知其他组件开启iCON
	    },
	
	
	    //进入新的窗口
	    openNewfolder: function openNewfolder(mydata) {
	      if (mydata.fileId) {
	        return false;
	      } else {
	        //主动触发需要提供vm，这是第一次触发
	        this.getResource(this, mydata.folderId, mydata.name);
	      }
	    },
	    showTree: function showTree() {
	      this.istreeshow = !this.istreeshow;
	    },
	    closeTree: function closeTree() {
	      //显示tree
	      this.istreeshow = !this.istreeshow;
	    }
	  },
	
	  computed: {
	    ChoseAllkey: function ChoseAllkey(value) {
	      return this.isChoseAllfile;
	    }
	
	  },
	  watch: {
	    reNameItem: function reNameItem(value) {
	      if (value === this.mydata) {
	        this.renameFolder();
	      }
	    },
	
	    newNameIsShowIcon: function newNameIsShowIcon(value) {
	      if (value) {
	        this.isNewNameIsShowIcon = false;
	      } else {
	        this.isNewNameIsShowIcon = true;
	      }
	    }
	  }
	
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	__webpack_require__(453);
	
	$(window).resize(function () {
	
	    var height = $(window).height() - $('#presonalBox').outerHeight(true) - $("#changeBred").outerHeight(true) - $("#changeRow").outerHeight(true) - $("#titlebox").outerHeight(true);
	    $('.main-resource-data').slimscroll({
	        height: height,
	        width: 'auto', //可滚动区域宽度
	        size: '8px', //组件宽度
	        opacity: .3, //滚动条透明度
	        distance: '0px', //组件与侧边之间的距离
	        railColor: '#333', //轨道颜色
	        railOpacity: .2, //轨道透明度
	        railDraggable: true });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('div', {
	    staticClass: "row main-resource-row-data"
	  }, [_h('div', {
	    staticClass: " col-md-1 col-sm-1 col-xs-1"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (ChoseAllkey),
	      expression: "ChoseAllkey"
	    }],
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "value": index,
	      "checked": Array.isArray(ChoseAllkey) ? _i(ChoseAllkey, index) > -1 : _q(ChoseAllkey, true)
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        chosefile(mydata)
	      },
	      "change": function($event) {
	        var $$a = ChoseAllkey,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = index,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (ChoseAllkey = $$a.concat($$v))
	          } else {
	            $$i > -1 && (ChoseAllkey = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          ChoseAllkey = $$c
	        }
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: " col-md-3 col-sm-3 col-xs-3"
	  }, [_h('p', [_h('strong', {
	    class: {
	      'fileIcon': !mydata.fileId
	    },
	    attrs: {
	      "alt": ""
	    },
	    on: {
	      "click": function($event) {
	        openNewfolder(mydata)
	      }
	    }
	  }), " ", _h('span', [_h('b', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (isshowicon),
	      expression: "isshowicon"
	    }],
	    on: {
	      "click": function($event) {
	        openNewfolder(mydata)
	      }
	    }
	  }, ["\n              " + _s(mydata.name) + "\n              "]), " ", _h('em', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!isshowicon),
	      expression: "!isshowicon"
	    }]
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (myinputValue),
	      expression: "myinputValue"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _s(myinputValue)
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      },
	      "input": function($event) {
	        if ($event.target.composing) return;
	        myinputValue = $event.target.value
	      }
	    }
	  }), " ", _h('button', {
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        oktrenameFolder($event)
	      }
	    }
	  }, ["✔"]), " ", _h('button', {
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        notrenameFolder($event)
	      }
	    }
	  }, ["X"])])])])]), " ", _h('div', {
	    staticClass: " col-md-3 col-sm-3 col-xs-3"
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (isshowicon),
	      expression: "isshowicon"
	    }],
	    staticClass: "contral-icons",
	    class: {
	      'IsShowIcon': isNewNameIsShowIcon
	    }
	  }, [_m(0), " ", _h('i', {
	    staticClass: "icon-exchange",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        showTree($event)
	      }
	    }
	  }), " ", _h('i', {
	    staticClass: "icon-edit",
	    class: {
	      disabledIcon: isdisabledIcon
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        renameFolder()
	      }
	    }
	  }), " ", _h('i', {
	    staticClass: "icon-trash",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        trashFiled($event)
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: " col-md-3 col-sm-3 col-xs-3"
	  }, [_h('p', [_s(mydata.createTime)])]), " ", _m(1), " ", _m(2)]), " ", " ", _h('tree-grid', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (istreeshow),
	      expression: "istreeshow"
	    }],
	    on: {
	      "closeTree": closeTree
	    }
	  })])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "icon-download-alt"
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: " col-md-2 col-sm-2 col-xs-2"
	  }, [_h('p', ["---"])])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "clearfix visible-xs"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3012ba3a", module.exports)
	  }
	}

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "main-resource-data clearfix"
	  }, [_l((datas), function(datas, index) {
	    return _h('item', {
	      attrs: {
	        "transition": "item",
	        "stagger": "100",
	        "mydata": datas,
	        "index": index
	      }
	    })
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-59b9a7d1", module.exports)
	  }
	}

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('chose-date'), " ", _h('chose-crumbs'), " ", _h('chose-title'), " ", _h('data-lists')])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-db69f0da", module.exports)
	  }
	}

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('section', {
	    staticClass: "main-contant"
	  }, [_h('personal-infor'), " ", _h('my-data')])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c185bb8e", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=1.chunk.js.map