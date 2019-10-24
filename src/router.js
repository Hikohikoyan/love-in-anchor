import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Intro from './views/Introduction.vue'
import Register from './views/Register.vue'
import Final from './views/final.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/success',
      name: 'success',
      component: Final
    }
  ]
})
