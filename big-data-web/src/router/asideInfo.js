/**
 * Created by MonTage_fz on 2019/7/19
 */
export default [
    {
        path: '/',
        isHide: true, // 是否隐藏该路由
        redirect: '/news'
    },
    {
        path: '/news',
        redirect: '/news/baiDu',
        name: '新闻',
        children: [
            {
                path: 'baiDu',
                name: '百度'
            },
            {
                path: 'netEase',
                name: '网易'
            },
            {
                path: 'tenCent',
                name: '腾讯'
            },
            {
                path: 'sinA',
                name: '新浪'
            },
            {
                path: 'thirtySixKr',
                name: '36氪'
            }
        ]
    },
    {
        path: '/story',
        name: '小说'
    },
    {
        path: '/movie',
        name: '电影'
    }
];
