import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import QS from 'qs'


Vue.config.productionTip = false

// //把axios注册到Vue
Vue.prototype.axios = axios
Vue.prototype.QS = QS
axios.defaults.timeout = 10000*3;
if (process.env.NODE_ENV == 'development') {    
  axios.defaults.baseURL = 'http://182.254.161.213/love-in-anchor/';
} 
// else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = 'https://www.ceshi.com';
// } 
// else if (process.env.NODE_ENV == 'production') {    
//   axios.defaults.baseURL = 'https://www.production.com';
// }

// //默认提示
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')