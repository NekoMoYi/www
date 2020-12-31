import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import status from '../views/status.vue'
import error404 from '../views/error404.vue'
//import study from '../views/study.vue' 

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
    /*{
      path: '/study',
      name: 'study',
      component: study
    },*/
    {
      path: '*',
      name: 'error404',
      component: error404
    }
  ]
})
