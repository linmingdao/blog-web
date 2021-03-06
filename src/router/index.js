import Vue from 'vue';
import VueRouter from 'vue-router';
import { authorize } from './authority/index';

// 使用VueRouter统一管理应用路由
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/tech'
        },
        {
            path: '/tech',
            name: 'tech',
            component: () => import('@app/modules/tech/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('@app/modules/privacy/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        },
        {
            path: '/all',
            name: 'all',
            component: () => import('@app/modules/all/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        },
        {
            path: '/paper/:paperId',
            name: 'paper',
            props: true,
            component: () => import('@app/modules/paper/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@app/modules/about/index.vue'),
            beforeEnter: (to, from, next) => authorize(to, from, next)
        }
    ]
});
