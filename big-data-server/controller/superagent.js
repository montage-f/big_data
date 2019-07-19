/**
 * Created by MonTage_fz on 2019/7/16
 */
const superagent = require('superagent');
const superagentCharset = require('superagent-charset')(superagent);
module.exports = (url, charset = 'utf-8', method = 'get') => new Promise((resolve, reject) => {
    superagentCharset[method](url).charset(charset).end((err, res) => {
        if (err) {
            resolve(`抓取失败`, err);
        }
        resolve(res);
    });
});
