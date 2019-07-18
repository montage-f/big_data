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
            isHide: true, // 是否隐藏该路由
            redirect: '/news'
        },
        {
            path: '/news',
            name: '新闻',
            component: News,
            children: [
                {
                    path: 'baiDu',
                    name: '百度',
                    component: () => import('../views/News/BaiDu')
                },
                {
                    path: 'NetEase',
                    name: '网易',
                    component: () => import('../views/News/NetEase')
                },
                {
                    path: 'TenCent',
                    name: '腾讯',
                    component: () => import('../views/News/TenCent')
                },
                {
                    path: 'SinA',
                    name: '新浪',
                    component: () => import('../views/News/SinA')
                },
                {
                    path: 'ThirtySixKr',
                    name: '36氪',
                    component: () => import('../views/News/ThirtySixKr')
                }
            ]
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
