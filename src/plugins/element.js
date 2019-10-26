import Vue from 'vue'
import { Button,MessageBox } from 'element-ui'

MessageBox.install = function (Vue,options){
    Vue.prototype.$alertt =MessageBox
}

Vue.use(Button)
Vue.use(MessageBox)
