/**
 * Created by MonTage_fz on 2019/7/24
 */
// 拉钩 web 前端招聘
const {nightmare} = require('../../controller');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');


let apiList = [];
let i = 1;
while (i <= 10) {
    apiList.push(`https://www.zhipin.com/c101280100-p100901/?page=${i}&ka=page-${i}`);
    i++;
}

let text = (url) => new Promise((resolve) => {
    nightmare.goto(url)
    .wait('#main')
    .evaluate(() => document.querySelector('#main').innerHTML)
    .then((res) => {
        resolve(res);
    });
});

const infoItem = async (url) => {
    let t = await text(url);
    let $ = cheerio.load(t);
    let arr = [];
    $('.job-primary').each(function () {
        let company = $(this).find('.info-company .name').text();
        arr.push({
            many: $(this).find('.red').text(),
            company: company.replace(/\n+|\s+/g, ''),
        });
    });
    return arr;
};

const infoList = async () => {
    let arr = [];
    for (let i of apiList) {
        let data = await infoItem(i);
        arr.push(...data);
    }
    return arr;
};

let log = async () => {
    const fileName = path.resolve(__dirname, '../../text', '拉钩web薪资.json');
    let stream = fs.createWriteStream(fileName);
    let data = await infoList();
    stream.write(JSON.stringify(data));
    stream.on('finish', () => {
        console.log('写入完成');
    });
};
log();
// module.exports = infoList;
