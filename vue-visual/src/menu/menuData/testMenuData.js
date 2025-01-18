import { menuTitleEum } from './baseMenuData';

export const testMenuItem = {
  key: 'test',
  title: menuTitleEum.Test,
  children: [
    {
      key: 'users',
      fatherKey: 'test',
      title: '用户管理',
      path: 'test/users',
    },
    {
      key: 'roleManage',
      fatherKey: 'test',
      title: '权限管理',
      children: [
        {
          key: 'roles',
          fatherKey: 'roleManage',
          title: '角色列表',
          path: 'test/roles',
        },
        {
          key: 'rights',
          fatherKey: 'roleManage',
          title: '权限列表',
          path: 'test/rights',
        },
      ],
    },
    {
      key: 'goodsManage',
      fatherKey: 'test',
      title: '商品管理',
      children: [
        {
          key: 'categories',
          fatherKey: 'goodsManage',
          title: '商品分类',
          path: 'test/categories',
        },
        {
          key: 'goods',
          fatherKey: 'goodsManage',
          title: '商品列表',
          path: 'test/goods',
        },
        {
          key: 'params',
          fatherKey: 'goodsManage',
          title: '商品参数',
          path: 'test/params',
        },
      ],
    },
    {
      key: 'orders',
      fatherKey: 'test',
      title: '订单管理',
      path: 'test/orders',
    },
  ],
};
