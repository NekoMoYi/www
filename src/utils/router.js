import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/home')
const about = () => import('../views/about')
const status = () => import('../views/status')
const error404 = () => import('../views/error404')

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    // status
    {
      path: '/status',
      name: 'status',
      component: status
    },
    // about
    {
      path: '/about',
      name: 'about',
      component: about
    },
    // 404
    {
      path: '*',
      name: 'error404',
      component: error404
    }
  ]
})
