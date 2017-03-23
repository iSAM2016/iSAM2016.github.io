/**
 * Created by iSAM 
 */
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Env from './config/env';
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'

import App from 'components/app.vue';
import index from './components/index.vue'
import show from './components/show.vue'

import login from './components/userAction/login.vue'

//css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './styles/Font-Awesome/css/font-awesome.min.css'; 
import 'element-ui/lib/theme-default/index.css'
import './styles/main.scss';


import store from './vuex/store.js'
import 'bootstrap/dist/js/bootstrap.js'
import  './mock/mock.js'
import '../node_modules/element-ui/lib/index.js';
import './js/common.js';
//import './js/panel.js';
import 'babel-polyfill'
 

import  auth from './utils/auth.js'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLazyload)
Vue.use(ElementUI)

// with options
Vue.use(VueLazyload, {
  preLoad: 1,
  error: './img/loading/loading.gif',
  loading: './img/loading/loading.gif',
  attempt: 1
})
//Vue.use(RadonInstall)


const routes = [

  
  {path: '/',  name: 'show',component: index},
  {path: '/login', name: "login", component: login},

  { path: '/index',name: "index" ,component: index ,
      children: [
        {
          path: '',
          component: function (resolve) {
              require(['./components/cloudDisk/pages/index.vue'], resolve);
           } 
        },
        {

           path: '/rubbishbox', component: function (resolve) {
              require(['./components/rubbish/pages/index.vue'], resolve);
           } 
       },

        { path: '/personalshow', component: function (resolve) {
                  require(['./components/personal/index.vue'], resolve);
              } },

        { path: '/personalchange', component: function (resolve) {
                  require(['./components/personal/personalChange.vue'], resolve);
              } },
        { path: '/application', component: function (resolve) {
                  require(['./components/application/pages/index.vue'], resolve);
              }
          },
        { path: '/allapplication', component: function (resolve) {
                  require(['./components/allApplication/pages/index.vue'], resolve);
              }
          },
        { path: '/toolscontent', component: function (resolve) {
                  require(['./components/allApplication/pages/content.vue'], resolve);
              }
          },
        { path: '/myproject', component: function (resolve) {
                  require(['./components/project/pages/index.vue'], resolve);
              }
          },
        { path: '/task', component: function (resolve) {
                  require(['./components/task/pages/index.vue'], resolve);
              }
          }, 
        { path: '/mydata', component: function (resolve) {
                  require(['./components/mydata/pages/index.vue'], resolve);
              }
          },
        { path: '/shopping', component: function (resolve) {
                  require(['./components/shopping/pages/index.vue'], resolve);
              }
          },
        { path: '/changeword', component: function (resolve) {
                  require(['./components/userAction/changePassword.vue'], resolve);
              }
          },  
 /*       { path: '/toolsdataDetail', component: function (resolve) {
                  require(['./components/toolsdataDetail.vue'], resolve);
              }
          },*/ 

          { path: '/dataStatistics', component: function (resolve) {
                  require(['./components/dataDetail/index.vue'], resolve);
              }
          },

            ] 
         },
  
          { path: '*', redirect: '/' },

]




// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes,

 
})

router.afterEach((to, from, next) => { 
//console.log(to.path)
});

router.beforeEach((to, from, next) => { 
 window.scrollTo(0, 0);
     if (true) {
       next()
    } else {
        next();
    }
});


const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
