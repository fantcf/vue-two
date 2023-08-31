import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Welcome from '@/pages/Welcome'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: 'login'},
  {path: '/login', component: Login},
  {
    path: '/home',
    component: Home,
    children: [
      {path: '/users', component: Welcome, children: [
        {path: '/users/a', component: Welcome},
        {path: '/users/b', component: Welcome}
      ]},
      {path: '/roles', component: Welcome},
      {path: '/rights', component: Welcome},
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
