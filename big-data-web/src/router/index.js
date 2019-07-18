import Vue from 'vue';
import Router from 'vue-router';
import News from '../views/News.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: '新闻',
            component: News
        },
        {
            path: '/story',
            name: '小说',
            component: () => import('../views/Story')
        },
        {
            path: '/movie',
            name: '电影',
            component: () => import('../views/Movie')
        }
    ]
});
