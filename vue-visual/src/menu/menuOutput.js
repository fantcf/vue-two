import { MenuList } from '../models/class/MenuList';
import { baseMenu } from './menuData/baseMenuData';
import { testMenuItem } from './menuData/testMenuData';
import { elementMenuItem } from './menuData/elementMenuData';
import { echartsMenuItem } from './menuData/echartsMenuData';
import { vueMenuItem } from './menuData/vueMenuData';
import { openlayersMenuItem } from './menuData/openlayersMenuData';
import { threeMenuItem } from './menuData/threeMenuData';
import { someIntrestingItem } from './menuData/someIntresting';

const expandMenu = [
  vueMenuItem,
  openlayersMenuItem,
  threeMenuItem,
  elementMenuItem,
  echartsMenuItem,
  someIntrestingItem,
  testMenuItem,
];
const menulist = new MenuList(baseMenu, expandMenu).list;

export { menulist };
