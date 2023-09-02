import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Welcome from '@/pages/Welcome'
import Users from '@/views/Test/Users/Users'
import Test from '@/pages/Test'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: 'login'},
  {path: '/login', component: Login},
  {
    path: '/home',
    component: Home,
    children: [
      {path: '/homePage', component: Welcome},
      {
        path: '/test',
        component: Test,
        redirect: '/test/users',
        children: [
          {
            path: '/test/users', 
            component: Users, 
            // redirect: '/test/users/a',
            // children: [
            //   {path: '/test/users/a', component: Welcome},
            //   {path: '/test/users/b', component: Welcome}
            // ]
          },
          {path: '/test/roles', component: Welcome},
          {path: '/test/rights', component: Welcome},
          {path: '/test/categories', component: Welcome},
          {path: '/test/goods', component: Welcome},
          {path: '/test/params', component: Welcome},
          {path: '/test/orders', component: Welcome},
        ]
      },
      {path: '/basic', component: Welcome},
      {path: '/echarts', component: Welcome},
      {path: '/el-radio', component: Welcome},
      {path: '/vuexA', component: Welcome},
      {path: '/vuexB', component: Welcome},
    ]
  },
]

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
