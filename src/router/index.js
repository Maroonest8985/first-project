import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home.js';
import login from './login.js'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history', //해쉬값 제거 방식
    routes: [
        ...login,
        ...home,
    ]
});
