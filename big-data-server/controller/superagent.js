/**
 * Created by MonTage_fz on 2019/7/16
 */
const superagent = require('superagent');

module.exports = (url, method = 'get') => new Promise((resolve, reject) => {
    superagent[method](url).end((err, res) => {
        if (err) {
            resolve(`抓取失败`, err);
        }
        resolve(res);
    });
});
