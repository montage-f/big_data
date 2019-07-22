const router = require('koa-router')();
const {superagent, cheerio, nightmare, file: {writeText}} = require('../controller');
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
    ctx.body = new SuccessInfo({
        title: '百度热点新闻',
        info: arr
    });
});

// 网易新闻 https://www.163.com/
router.get('/netEase', async (ctx, next) => {
    let {text} = await superagent('https://www.163.com/', 'gbk');
    let arr = [
        cheerio('.yaowen_news .news_default_yw ul li a', text, (dom) => {
            return {
                title: dom.text(),
                href: dom.attr('href')
            };
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

// 腾讯新闻 https://news.qq.com/
router.get('/tenCent', async (ctx, next) => {
    // let {text} = await superagent('https://news.qq.com/', 'GB2312');
    let data = () => new Promise((resolve) => {
        nightmare.goto('https://news.qq.com/')
        .wait('div#List .channel_mod')
        .evaluate(() => document.querySelector('div#List .channel_mod').innerHTML)
        .then((res) => {
            resolve(res);
        });
    });
    let text = await data();
    let arr = [
        cheerio('ul li div h3 a', text, (dom) => {
            return {
                title: dom.text(),
                href: dom.attr('href')
            };
        }),
    ].reduce((p, item) => {
        p.push(...item);
        return p;
    }, []);
    ctx.body = new SuccessInfo({
        title: '腾讯热点新闻',
        info: arr
    });
    
});

// 新浪新闻 https://www.sina.com.cn/
router.get('/sina', async (ctx, next) => {
    let {text} = await superagent('https://www.sina.com.cn/');
    let arr = [
        cheerio('#xy-impcon .newslist .top_newslist .list-a li a', text, (dom) => {
            return {
                title: dom.text(),
                href: dom.attr('href')
            };
        })
    ].reduce((p, item) => {
        p.push(...item);
        return p;
    }, []);
    ctx.body = new SuccessInfo({
        title: '新浪热点新闻',
        info: arr
    });
});

// 36氪新闻 https://36kr.com/newsflashes
router.get('/36kr', async (ctx, next) => {
    let {text} = await superagent('https://36kr.com/newsflashes');
    let title = cheerio('.kr-layout-content .item-main .newsflash-item a.item-title', text, (dom) => {
        return {
            title: dom.text()
        };
    });
    let href = cheerio('.kr-layout-content .item-main .newsflash-item div.item-desc', text, (dom) => {
        return {
            href: dom.children('a').attr('href'),
        };
    });
    let arr = [];
    title.forEach((item, i) => {
        href.forEach((d, j) => {
            if (i === j) {
                arr.push({
                    ...item,
                    ...d
                });
            }
        });
    });
    ctx.body = new SuccessInfo({
        title: '36氪热点新闻',
        info: arr
    });
});
module.exports = router;
