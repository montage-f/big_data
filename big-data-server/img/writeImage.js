/**
 * Created by MonTage_fz on 2019/7/23
 */
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
const fileName = path.resolve(__dirname, './');
const {promisify} = require('util');

const writeFile = promisify(fs.writeFile);
// url => image

const urlToImage = (url) => new Promise((resolve) => {
    let mo = /^http:/.test(url) ? http : https;
    // 获取文件类型
    const ext = path.extname(url);
    let file = path.join(fileName, `${Date.now()}${ext}`);
    mo.get(url, (res) => {
        res.pipe(fs.createWriteStream(file));
    })
    .on('finish', () => {
        resolve();
        console.log(url);
    });
});

// base64 => image

const base64ToImage = async (base64Str) => {
    // data:image/jpeg;base64,/...
    const matches = base64Str.match(/^data:(.+?);base64,(.+)$/);
    try {
        const ext = matches[1].split('/')[1].replace('jpeg', 'jpg');
        const file = path.join(fileName, `${Date.now()}.${ext}`);
        await writeFile(file, matches[2], 'base64');
    } catch (e) {
        console.log('非法base64');
    }
};
module.exports = {
    urlToImage,
    base64ToImage
};
