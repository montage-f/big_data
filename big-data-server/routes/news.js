const router = require('koa-router')();
const {superagent, cheerio, file: {writeText}} = require('../controller');
const {responseInfo: {SuccessInfo, ErrorInfo}} = require('../module');

router.prefix('/api/news');

// 百度新闻
router.get('/baiDu', async (ctx, next) => {
    let {text} = await superagent('https://news.baidu.com/');
    
    let arr = [
        cheerio('#pane-news .hotnews ul li strong a', text, (dom) => {
            return {
                title: dom.text(),
                href: dom.attr('href')
            };
        }),
        cheerio('#pane-news .ulist li a', text, (dom) => {
            return {
                title: dom.text(),
                href: dom.attr('href')
            };
        })
    ].reduce((p, item) => {
        p.push(...item);
        return p;
    }, []);
    arr.forEach(item => {
        const {title, href} = item;
        let str = `${title}-${href}`;
        writeText(str, 'text_01.txt');
    });
    ctx.body = new SuccessInfo({
        title: '百度热点新闻',
        info: arr
    });
});

// 网易新闻 https://www.163.com/
router.get('/netEase', async (ctx, next) => {
    let {text} = await superagent('https://www.163.com/','gbk');
    let arr = [
        cheerio('.yaowen_news .news_default_yw ul li a',text, (dom) =>{
            return {
                title: dom.text(),
                href: dom.attr('href')
            }
        })
    ].reduce((p, item) => {
        p.push(...item);
        return p;
    }, []);
    ctx.body = new SuccessInfo({
        title: '网易热点新闻',
        info: arr
    });
});


router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    };
});

module.exports = router;
