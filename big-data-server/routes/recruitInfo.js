/**
 * Created by MonTage_fz on 2019/7/22
 */
const router = require('koa-router')();
const {nightmare, cheerio} = require('../controller');


router.prefix('/api/RecruitInfo');
// 智联 招聘信息 https://sou.zhaopin.com/?jl=763&sf=0&st=0&kw=Web%E5%89%8D%E7%AB%AF&kt=3
router.get('/sou', async (ctx, next) => {
    let data = () => new Promise((resolve) => {
        // https://sou.zhaopin.com/?jl=763&sf=0&st=0&kw=Web%E5%89%8D%E7%AB%AF&kt=3
        nightmare.goto('https://sou.zhaopin.com/?jl=763&sf=0&st=0&kw=Web%E5%89%8D%E7%AB%AF&kt=3')
        .wait('#listContent')
        .evaluate(() => document.querySelector('#listContent').innerHTML)
        .then((res) => {
            resolve(res);
        });
    });
    const text = await data();
    let title = cheerio('div a div', text, (dom) => {
        return {
            title: dom.find('.jobName').text()
        };
    });
    console.log(title);
    ctx.body = title;
});
module.exports = router;
