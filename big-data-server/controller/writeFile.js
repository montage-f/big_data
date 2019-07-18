/**
 * Created by MonTage_fz on 2019/7/18
 */
const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, '../text/text_01.txt');
console.log(fileName);

const createWriteStream = (fileName) => {
    const fullFileName = path.join(__dirname, '../', 'text', fileName);
    return fs.createWriteStream(fullFileName, {flags: 'a'});
};

const removeBlock = (text) => {
    // 删掉头部大括号
    let str = text.replace(/^\{/, '');
    // 删掉尾部大括号
    str = str.replace(/\}$/, '');
    return str;
    
};

const writeText = (text, fileName) => {
    const stream = createWriteStream(fileName);
    if (text instanceof Object) {
        text = JSON.stringify(text);
    }
    let str = removeBlock(text);
    stream.write(`${str}\r\n`);
};
module.exports = {
    writeText
};
