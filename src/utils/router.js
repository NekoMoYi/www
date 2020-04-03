import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import error404 from '../views/error404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 404
    {
      path: '*',
      name: 'error404',
      component: error404
    }
  ]
})
