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
Vue.component('PrismEditor', PrismEditor);
Vue.prototype.$highlight = highlight;
Vue.prototype.$languages = languages.js;
Vue.use(ElementUI);
Vue.use(Prism);

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
