import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Welcome from '@/pages/Welcome';
import Users from '@/views/Test/Users/Users';
import Test from '@/pages/Test';
import VueView from '@/pages/VueView';
import TodoList from '@/views/vue/TodoList/TodoList';
import calculator from '@/views/someIntresting/calculator/index.vue';
import SomeIntresting from '@/pages/SomeIntresting.vue';
import Vuex from '@/views/vue/Vuex/index';
import axiosView from '@/views/vue/axios/index';
import expressView from '@/views/vue/axios/express/index';
import BaseExpress from '@/views/vue/axios/express/BaseExpress';
import baseThree from '@/views/three/views/base/index.vue'
import startThree from '@/views/three/views/base/start/index.vue'
import startModules from '@/views/three/views/base/start-modules/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/homePage', component: Welcome },
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
          { path: '/test/roles', component: Welcome },
          { path: '/test/rights', component: Welcome },
          { path: '/test/categories', component: Welcome },
          { path: '/test/goods', component: Welcome },
          { path: '/test/params', component: Welcome },
          { path: '/test/orders', component: Welcome },
        ],
      },
      {
        path: '/vue',
        component: VueView,
        redirect: '/vue/axios/express/baseExpress',
        children: [
          {
            path: '/vue/Vuex',
            component: Vuex,
            redirect: '/vue/Vuex/vuexA',
            children: [
              { path: '/vue/Vuex/vuexA', component: Welcome },
              { path: '/vue/Vuex/vuexB', component: Welcome },
            ],
          },
          { path: '/vue/todoList', component: TodoList },
          {
            path: '/vue/axios',
            component: axiosView,
            children: [
              {
                path: '/vue/axios/express',
                component: expressView,
                redirect: '/vue/axios/express/baseExpress',
                children: [
                  {
                    path: '/vue/axios/express/baseExpress',
                    component: BaseExpress,
                  },
                ],
              },
            ],
          },
        ],
      },
      { path: '/basic', component: Welcome },
      { path: '/echarts', component: Welcome },
      { path: '/el-radio', component: Welcome },
      {
        path: '/openlayers',
        component: Welcome,
        children: [{ path: '/openlayers/map', component: Welcome }],
      },
      {
        path: '/three',
        component: baseThree,
        redirect: '/three/base/start',
        children: [
          { path: '/three/map', component: Welcome },
          { path: '/three/base', component: baseThree, children: [
              { path: '/three/base/start', component: startThree },
              { path: '/three/base/start-modules', component: startModules },
            ]
          }
        ],
      },
      {
        path: '/someIntresting',
        component: SomeIntresting,
        redirect: '/someIntresting/calculator',
        children: [
          { path: '/someIntresting/home', component: Welcome },
          { path: '/someIntresting/calculator', component: calculator },
        ],
      },
    ],
  },
];

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {},
    );
  }
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
