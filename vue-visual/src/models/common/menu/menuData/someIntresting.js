import { menuTitleEum } from './baseMenuData';
const baseKey = menuTitleEum.SomeIntresting;

export const someIntrestingItem = {
  key: baseKey,
  title: baseKey,
  path: 'someIntresting',
  children: [
    // {
    //   fatherKey: baseKey,
    //   key: 'home',
    //   title: '首页',
    //   path: 'someIntresting/home',
    // },
    {
      fatherKey: baseKey,
      key: 'calculator',
      title: '模拟计算器',
      path: 'someIntresting/calculator',
    },
  ],
};
