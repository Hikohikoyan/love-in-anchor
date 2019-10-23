import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

// //把axios注册到Vue
Vue.prototype.axios = axios

// //默认提示
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')