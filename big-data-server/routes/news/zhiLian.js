/**
 * Created by MonTage_fz on 2019/7/23
 */
const path = require('path');
const fs = require('fs');


const {nightmare} = require('../../controller');
const cheerio = require('cheerio');

let zhiLianUrls = ['https://sou.zhaopin.com/?jl=%E5%B9%BF%E5%B7%9E&kw=Web%E5%89%8D%E7%AB%AF&kt=3&sf=0&st=0'];
let i = 2;
while (i <= 12) {
    zhiLianUrls.push(`https://sou.zhaopin.com/?p=${i}&jl=%E5%B9%BF%E5%B7%9E&kw=Web%E5%89%8D%E7%AB%AF&kt=3&sf=0&st=0`);
    i++;
}

let zhiLianInfoItem = async (url) => {
    let data = () => new Promise((resolve) => {
        nightmare.goto(url)
        .wait('#listContent')
        .evaluate(() => document.querySelector('#listContent').innerHTML)
        .then((res) => {
            resolve(res);
        });
    });
    const text = await data();
    const $ = cheerio.load(text);
    let domList = $('.contentpile__content__wrapper');
    let arr = [];
    domList.each(function () {
        let title = $(this).find('.contentpile__content__wrapper__item__info__box__jobname__title').text();
        let company = $(this).find('.contentpile__content__wrapper__item__info__box__cname__title').text();
        let pay = $(this).find('.contentpile__content__wrapper__item__info__box__job__saray').text();
        let demand = $(this).find('.contentpile__content__wrapper__item__info__box__job__demand').text();
        // 去掉空格和换行
        demand = demand.replace(/\n+|\s+/g, '');
        arr.push({
            title,
            company,
            pay,
            demand
        });
    });
    return arr;
};

let zhiLianInfoList = async () => {
    let arr = [];
    for (let i of zhiLianUrls) {
        let data = await zhiLianInfoItem(i);
        arr.push(...data);
    }
    return arr;
};

let log = async () => {
    const fileName = path.resolve(__dirname, '../../text', '智联web薪资.json');
    const stream = fs.createWriteStream(fileName);
    let data = await zhiLianInfoList();
    stream.write(JSON.stringify(data));
    stream.on('finish', () => {
        console.log('写入完成');
    });
};
log()
