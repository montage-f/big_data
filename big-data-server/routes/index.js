const router = require('koa-router')();
const {superagent, cheerio, nightmare, file: {writeText}} = require('../controller');
const {responseInfo: {SuccessInfo, ErrorInfo}} = require('../module');

router.prefix('/api/news');

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
        title: '百度新闻首页 热点新闻 信息',
        info: arr
    });
});
let baiduInternationalNews = (url, dom) => {
    return new Promise((resolve) => {
        nightmare.goto(url)
        .wait('.InternationalNews')
        .evaluate(() => {
            // 这里需要注意, 这个函数内部无法访问外面的变量
            return document.querySelector('.InternationalNews').innerHTML;
        })
        .then(text => {
            let info = cheerio(dom, text, (ele) => {
                return {
                    title: ele.text(),
                    href: ele.attr('href')
                };
            });
            resolve(info);
        })
        .catch((err) => {
            console.log(err);
            console.log('抓取失败');
        });
    });
};
router.get('/string', async (ctx, next) => {
    ctx.body = {
        title: '获取百度新闻首页 国际 信息',
        info: await baiduInternationalNews('https://news.baidu.com/', 'ul.focuslistnews li a')
    };
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    };
});

module.exports = router;
