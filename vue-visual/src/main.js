import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/global.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css';
import axios from 'axios'; // 引入封装的 axios 实例
import Prism from 'prismjs';

import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
// import 'vue-prism-editor/dist/prismeditor.min.css';
import { clickOutside } from './directives/clickOutside';
import { autoFocus } from './directives/autoFocus';
// import * as prettier from 'prettier';
// import * as prettierPluginBabel from 'prettier/plugins/babel';

Vue.component('PrismEditor', PrismEditor);
Vue.prototype.$languages = languages.js;
Vue.prototype.$highlight = highlight;
// const myCustomPlugin = {
//   parsers: {
//     "my-custom-parser": {
//       async parse(text) {
//         const ast = await prettierPluginBabel.parsers.babel.parse(text);
//         ast.program.body[0].expression.callee.name = "_";
//         return ast;
//       },
//       astFormat: "estree",
//     },
//   },
// };
// Vue.prototype.$highlight = (code, langs) => {
//   const newCode = prettier.format(code, {
//     parser: 'my-custom-parser',
//     plugins: [myCustomPlugin],
//     semi: true,
//     singleQuote: true,
//     tabWidth: 4,
//   });
//   return highlight(code, langs);
// };
Vue.use(ElementUI);
Vue.use(Prism);

Vue.directive(clickOutside.directiveName, {
  bind: clickOutside.bind,
  unbind: clickOutside.unbind,
});
Vue.directive(autoFocus.directiveName, {
  inserted: autoFocus.inserted,
});

Vue.config.productionTip = false;
Vue.prototype.$axios = axios; // 挂载到 Vue 原型上

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
