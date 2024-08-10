import { menuTitleEum } from './baseMenuData';

export const vueMenuItem = {
  key: 'vue',
  title: menuTitleEum.Vue,
  children: [
    {
      key: 'vuex',
      fatherKey: 'vue',
      title: 'Vuex',
      children: [
        {
          key: 'vuexA',
          fatherKey: 'vuex',
          title: 'VuexA',
          path: 'vuexA',
        },
        {
          key: 'vuexB',
          fatherKey: 'vuex',
          title: 'VuexB',
          path: 'vuexB',
        },
      ],
    },
    {
      key: 'todoList',
      fatherKey: 'vue',
      title: 'todoList',
      path: 'todoList',
    },
  ],
};
