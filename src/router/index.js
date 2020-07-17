import Vue from 'vue';
import VueRouter from 'vue-router';
import { authorize } from './authority/index';

// 使用VueRouter统一管理应用路由
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@app/modules/home/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        },
        {
            path: '/paper/:paperId',
            name: 'paper',
            props: true,
            component: () => import('@app/modules/paper/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        }
    ]
});
