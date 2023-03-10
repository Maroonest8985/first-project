import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale });

new Vue({
  router,
  ElementUI,
  render: h => h(App),
}).$mount('#app')
