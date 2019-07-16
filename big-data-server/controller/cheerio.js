/**
 * Created by MonTage_fz on 2019/7/16
 */
const cheerio = require('cheerio');

module.exports = (dom, text, format) => {
    const $ = cheerio.load(text);
    format($)
    $(dom).each((i, ele) => {
        let news = {
            title: $(ele).text(),
            href: $(ele).attr('href')
        };
        arr.push(news);
    });
    return arr;
};
