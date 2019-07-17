/**
 * Created by MonTage_fz on 2019/7/16
 */
const cheerio = require('cheerio');
/**
 *@method cheerio
 *@param {dom, text, callback} 获取的节点 爬虫抓取到的页面节点 callback(dom)  dom 为返回的找到的节点信息
 *@return {arr} 返回回调函数里面的信息值
 */
module.exports = (dom, text, callback) => {
    let infoList = [];
    const $ = cheerio.load(text);
    
    $(dom).each((i, ele) => {
        let info = callback($(ele));
        infoList.push(info);
    });
    return infoList;
};


// (dom, text, format) => {
//     const $ = cheerio.load(text);
//     format($)
//     $(dom).each((i, ele) => {
//         let news = {
//             title: $(ele).text(),
//             href: $(ele).attr('href')
//         };
//         arr.push(news);
//     });
//     return arr;
// };
