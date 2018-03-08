import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import product from '@/pages/product/product'
import spreadcenter from '@/pages/spreadcenter/spreadcenter'
import planlist from '@/pages/spreadcenter/commonvue/planlist'
import myspread from '@/pages/myspread/myspread'
import task from '@/pages/task/task'
import finance from '@/pages/finance/finance'
import recharge from '@/pages/finance/childrenPage/recharge'
import personal from '@/pages/personal/personal'
import signin from '@/pages/sign/signin'
import register from '@/pages/sign/register'
import forgetPwd from '@/pages/sign/forgetPwd'
import resetPwd from '@/pages/sign/resetPwd'

// import FinanceIndex from '@/pages/finance/FinanceIndex'
// import FinanOverview from '@/pages/finance/FinanOverview'
// import AccountConfig from '@/pages/finance/AccountConfig'
// import TransactRecord from '@/pages/finance/TransactRecord'
//
import ManageMessage from '@/pages/message/ManageMessage'
//
import ManageLog from '@/pages/log/ManageLog'
//
import UserIndex from '@/pages/usercenter/UserIndex'
import BasicInfo from '@/pages/usercenter/BasicInfo'
import ManageRole from '@/pages/usercenter/ManageRole'
import ManageStaff from '@/pages/usercenter/ManageStaff'
import withdrawals from '@/pages/finance/childrenPage/withdrawals'
// import onlineAlipay from '@/pages/finance/childrenPage/online-alipay'
//
// import changeIndex from '@/pages/others/changeIndex'
// import ChangePassword from '@/pages/others/ChangePassword'
// import Login from '@/pages/others/Login'
// import Register from '@/pages/others/Register'
// import ReSetPassword from '@/pages/others/ReSetPassword'


Vue.use(Router)

var route =  new Router({
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
      component: spreadcenter,
      children: [{
          path: '/spreadcenter/planlist',
          name: 'planlist',
          component: planlist
      }]
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
      children:[
        {
          path: '/finance/recharge',
          name: 'recharge',
          component: recharge,
        },
        {
          path: '/finance/withdrawals',
          name: 'withdrawals',
          component: withdrawals
        }
      ]
    },
    {
      path: '/ManageMessage',
      name: 'ManageMessage',
      component: ManageMessage
    },
    {
      path: '/user',
      name: 'user',
      component: UserIndex,
      children: [
        {
          path: 'basicinfo',
          name: 'basicinfo',
          component: BasicInfo
        },
        {
          path: 'managerole',
          name: 'managerole',
          component: ManageRole
        },
        {
          path: 'managestaff',
          name: 'managestaff',
          component: ManageStaff
        }
      ]
    },
    {
      path: '/ManageLog',
      name: 'ManageLog',
      component: ManageLog
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      // 登录系统
      path: '/signin',
      name: 'signin',
      component: signin,
      beforeEnter (to, from, next) {
        // console.log(to)
        signin.created()
        next(vm => {
          // console.log('1111111111111111111')
        })
      }
    },
    {
      // 注册系统
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: forgetPwd
    },
    {
      path: '/resetPwd',
      name: 'resetPwd',
      component: resetPwd
    }
  ]
})


// route.beforeEach(function (to, from, next) {
//     var token =localStorage.getItem("access_token");
//     //已登录的情况再去登录页，跳转至首页
//     // console.log(token);
//     if (to.name != "signin" && to.name != "register" && to.name != "forgetPwd") {
//         if (token) {
//             next ();
//         }else{
//           next({name:"signin"});
//         }
//     }else{
//       if(token){
//         next({name:"Home"})
//       }else{
//         next();
//       }
//     }
// });

export default route
