import { authorize } from './authority/index';

export default [
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
        path: '/article/:articleId',
        name: 'article',
        props: true,
        component: () => import('@app/modules/article/index.vue'),
        beforeEnter: (to, from, next) => authorize(to, from, next)
    }
];
