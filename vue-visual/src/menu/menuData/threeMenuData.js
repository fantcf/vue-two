import { menuTitleEum } from './baseMenuData';

export const threeMenuItem = {
  key: 'three',
  title: menuTitleEum.Three,
  path: 'three',
  children: [
    {
      fatherKey: 'three',
      key: 'base',
      title: '基础内容',
      path: 'three/base',
      children: [
        {
          fatherKey: 'base',
          key: 'start',
          title: '生成一个立方体（无法转动）',
          path: 'three/base/start',
        },
        {
          fatherKey: 'base',
          key: 'start-modules',
          title: '生成一个立方体（模块化）',
          path: 'three/base/start-modules',
        }
      ]
    },

  ],
};
