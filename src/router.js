import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Intro from './views/Introduction.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    // {
    //   path: '/',
    //   name: 'register',
    //   component: Register
    // }
  ]
})
