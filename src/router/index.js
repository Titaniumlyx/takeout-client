import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/search'),
      meta: {
        showFoot: true
      }
    },
    {
      path: '/orderForm',
      name: 'orderForm',
      component: () => import('../pages/orderForm'),
      meta: {
        showFoot: true
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../pages/personal'),
      meta: {
        showFoot: true
      }
    }
  ]
})

export default router
