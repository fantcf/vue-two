import { menuTitleEum } from './baseMenuData';

export const vueMenuItem = {
  key: 'vue',
  title: menuTitleEum.Vue,
  children: [
    {
      key: 'axios',
      fatherKey: 'vue',
      title: 'axios',
      path: 'vue/axios',
      children: [
        {
          key: 'express',
          fatherKey: 'axios',
          title: 'express',
          path: 'vue/axios/express',
          children: [
            {
              key: 'baseExpress',
              fatherKey: 'express',
              title: 'baseExpress',
              path: 'vue/axios/express/baseExpress',
            },
          ],
        },
      ],
    },
    {
      key: 'vuex',
      fatherKey: 'vue',
      title: 'Vuex',
      path: 'vue/Vuex',
      children: [
        {
          key: 'vuexA',
          fatherKey: 'vuex',
          title: 'VuexA',
          path: 'vue/Vuex/vuexA',
        },
        {
          key: 'vuexB',
          fatherKey: 'vuex',
          title: 'VuexB',
          path: 'vue/Vuex/vuexB',
        },
      ],
    },
    {
      key: 'todoList',
      fatherKey: 'vue',
      title: 'todoList',
      path: 'vue/todoList',
    },
  ],
};
