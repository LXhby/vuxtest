// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import router from './router'
import {AjaxPlugin,dateFormat} from 'vux'
Vue.use(AjaxPlugin)
Vue.http.defaults.baseURL = 'http://localhost:3003/';

// 全局过滤器
Vue.filter('convertTime',function (data,formartstr) {
  return dateFormat(data,formartstr)
})


//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import './assets/css/index.less'



FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
