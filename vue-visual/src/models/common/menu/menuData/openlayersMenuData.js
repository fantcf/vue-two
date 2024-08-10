import { menuTitleEum } from './baseMenuData';

export const openlayersMenuItem = {
  key: 'openlayers',
  title: menuTitleEum.Openlayers,
  path: 'openlayers',
  children: [
    {
      fatherKey: 'openlayers',
      key: 'map',
      title: 'MAP',
      path: 'openlayers/map',
    },
  ],
};
