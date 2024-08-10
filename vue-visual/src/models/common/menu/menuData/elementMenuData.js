import { menuTitleEum } from './baseMenuData';

export const elementMenuItem = {
  key: 'element',
  title: menuTitleEum.ElementUI,
  children: [
    {
      key: 'form',
      fatherKey: 'element',
      title: 'Form',
      children: [
        {
          key: 'radio',
          fatherKey: 'form',
          title: 'Radio 多选框',
          path: 'el-radio',
        },
      ],
    },
  ],
};
