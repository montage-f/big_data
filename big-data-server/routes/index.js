const router = require('koa-router')();
const {superagent, cheerio} = require('../controller');

router.get('/', async (ctx, next) => {
    let {text} = await superagent('https://news.baidu.com/');
    ctx.body = cheerio('.hotnews ul li strong a',text);
});

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    };
});

module.exports = router;
