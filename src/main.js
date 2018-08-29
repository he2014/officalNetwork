
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  fetchPost,
  fetchGet
} from './config/axiosConfig'

import 'babel-polyfill'

import echarts from 'echarts';
import './assets/css/index.scss'
/* eslint-disable no-new */
Vue.config.productionTip = false
Vue.prototype.$post = fetchPost
Vue.prototype.$get = fetchGet
Vue.prototype.$echarts = echarts;

/*定义全局点击函数*/
Vue.prototype.globalClick = function (callback) {
  document.getElementById('app').onclick = function () {
      callback();
  };
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})