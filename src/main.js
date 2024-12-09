import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';


Vue.use(ElementUI, { locale });
Vue.prototype.$axios = axios;


new Vue({
  router,
  ElementUI,
  render: h => h(App),
}).$mount('#app')
