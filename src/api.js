import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/'
// axios设置请求拦截器,设置响应头token
axios.interceptors.request.use(
  config => {
    config.headers.token = window.sessionStorage.getItem('token') //每次发送请求之前自动将在session中的token提取出来当做响应头header
    return config
  },
  err => {
    console.log(err)
  }
)
//把axios注册到Vue
Vue.prototype.$http = axios
//关闭vue在console中的默认提示
Vue.config.productionTip = false