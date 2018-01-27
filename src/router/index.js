import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import product from '@/pages/product/product'
import spreadcenter from '@/pages/spreadcenter/spreadcenter'
import myspread from '@/pages/myspread/myspread'
import task from '@/pages/task/task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/spreadcenter',
      name: 'spreadcenter',
      component: spreadcenter
    },
    {
      path: '/myspread',
      name: 'myspread',
      component: myspread
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
  ]
})
