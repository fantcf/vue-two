import { MenuList } from '../../class/MenuList';
import { baseMenu } from './menuData/baseMenuData';
import { testMenuItem } from './menuData/testMenuData';
import { elementMenuItem } from './menuData/elementMenuData';
import { echartsMenuItem } from './menuData/echartsMenuData';
import { vueMenuItem } from './menuData/vueMenuData';
import { openlayersMenuItem } from './menuData/openlayersMenuData';
import { threeMenuItem } from './menuData/threeMenuData';

const expandMenu = [
  vueMenuItem,
  openlayersMenuItem,
  threeMenuItem,
  elementMenuItem,
  echartsMenuItem,
  testMenuItem,
];
const menulist = new MenuList(baseMenu, expandMenu).list;

export { menulist };
