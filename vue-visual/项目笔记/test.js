const menuTitleEum = {
  Test: 'Test',
  ElementUI: 'ElementUI',
  Echarts: 'Echarts',
  Vue: 'Vue',
  Openlayers: 'Openlayers',
  Three: 'Three',
};

const menuList = [
  {
    id: 0,
    title: '首页',
    path: 'homePage',
  },
];

const testList1 = {
  id: '',
  key: 'a',
  title: 'a',
  path: '/a',
  children: [
    {
      id: '',
      fatherKey: 'a',
      key: 'a-b',
      title: 'a-b',
      path: '/a-b',
      children: [
        {
          id: '',
          fatherKey: 'a-b',
          key: 'a-b-c',
          title: 'a-b-c',
          path: '/a-b-c',
          children: [],
        },
      ],
    },
  ],
};

const testList2 = {
  id: '',
  key: 'e',
  title: 'e',
  path: '/e',
  children: [
    {
      id: '',
      fatherKey: 'e',
      title: 'e-f',
      key: 'e-f',
      path: '/e-f',
      children: [
        {
          id: '',
          fatherKey: 'e-f',
          title: 'e-f-g',
          key: 'e-f-g',
          path: '/e-f-g',
          children: [],
        },
      ],
    },
  ],
};

function getFatherItem(fatherKey, list) {
  for (const item of list) {
    if (item.key === fatherKey) {
      return item;
    } else if (item.children && item.children.length > 0) {
      const res = getFatherItem(fatherKey, item.children); // 这里尤其要注意，如果递归有返回值，则内部递归的时候，也要有返回值
      if (res) {
        return res;
      }
    }
  }
}

function getSonId(fId, len) {
  const subId = len > 9 ? len : '0' + len;
  return Number(fId + subId);
}

function constructMenuData(list) {
  for (const item of list) {
    const newItem = JSON.parse(JSON.stringify(item));
    newItem.children = [];
    if (!newItem.fatherKey) {
      newItem.id = menuList.length;
      menuList.push(newItem);
    } else {
      const fatherItem = getFatherItem(item.fatherKey, menuList);
      newItem.id = getSonId(fatherItem.id, fatherItem.children.length + 1);
      fatherItem.children.push(newItem);
    }
    if (item.children && item.children.length > 0) {
      constructMenuData(item.children);
    }
  }
}
// constructMenuData([testList1, testList2]);
import { MenuList } from '@/models/Home/MenuList';
const list = new MenuList([testList1, testList2]);
console.log(list);
