import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import product from '@/pages/product/product'
import spreadcenter from '@/pages/spreadcenter/spreadcenter'
import myspread from '@/pages/myspread/myspread'
import task from '@/pages/task/task'
import finance from '@/pages/finance/finance'
import recharge from '@/pages/finance/children/recharge'
import personal from '@/pages/personal/personal'
import signin from '@/pages/sign/signin'
import register from '@/pages/sign/register'
import forgetPwd from '@/pages/sign/forgetPwd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/mbs' : '/',
  routes: [
	{
      path: '/index.html',
      redirect: '/'
    },
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
    {
      path: '/finance',
      name: 'finance',
      component: finance,
      children:[{
          path: '/finance/recharge',
          name: 'recharge',
          component: recharge,
      }]
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: forgetPwd
    },
  ]
})
