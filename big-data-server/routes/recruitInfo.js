/**
 * Created by MonTage_fz on 2019/7/22
 */
const router = require('koa-router')();
const {responseInfo: {SuccessInfo}} = require('../module');
const zhiLianInfoList = require('./news/zhiLian');


router.prefix('/api/RecruitInfo');

// 智联 前端信息
router.get('/sou', async (ctx, next) => {
    ctx.body = new SuccessInfo({
        title: '智联招聘信息',
        info: await zhiLianInfoList()
    });
});
module.exports = router;
