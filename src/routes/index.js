import { authorize } from './authority/index';

export default [
    {
        path: '/',
        component: () => import('@app/modules/home/index.vue'),
        beforeEnter: (to, from, next) => authorize(to, from, next)
    }
];
