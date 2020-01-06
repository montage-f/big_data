/**
 * Created by MonTage_fz on 2019/7/22
 */
const router = require('koa-router')();
const {responseInfo: {SuccessInfo}} = require('../module');

const laGou = require('../text/拉钩web薪资');
const zhiLian = require('../text/智联web薪资');
router.prefix('/api/RecruitInfo');

// 智联 前端信息
router.get('/sou', async (ctx, next) => {
    ctx.body = new SuccessInfo({
        title: '智联招聘web薪资信息',
        info: zhiLian
    });
});

// 拉钩 前端信息
router.get('/laGou', async (ctx, next) => {
    ctx.body = new SuccessInfo({
        title: '拉钩招聘web薪资信息',
        info: laGou
    });
});
module.exports = router;
