// 用于创建文章时v-model；
export const dialogBaseModel = {
  title: '',
  description: '',
  subTitle: '',
  code: '',
};

// 用于创建文章时el-form-item循环时用；
export const dialogBaseData = [
  {
    key: 'title',
    label: '文章名',
    type: 'input',
  },
  {
    key: 'description',
    label: '文章简述',
    type: 'textarea',
  },
  {
    key: 'subTitle',
    label: '小标题',
    type: 'input',
  },
  {
    key: 'code',
    label: '代码',
    type: 'prism',
  },
];
