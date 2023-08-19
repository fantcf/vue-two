import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: 'login'},
  {path: '/login', component: Login},
  {
    path: '/home',
    component: Home,
    children: [
      {path: '/users', component: Welcome},
      {path: '/roles', component: Welcome},
      {path: '/rights', component: Welcome},
      {path: '/basic', component: Welcome},
      {path: '/echarts', component: Welcome},
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
