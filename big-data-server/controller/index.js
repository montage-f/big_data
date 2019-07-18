/**
 * Created by MonTage_fz on 2019/7/16
 */
const superagent = require('./superagent');
const cheerio = require('./cheerio');
const nightmare = require('./nightmare');
const file = require('./writeFile');

module.exports = {
    superagent,
    cheerio,
    nightmare,
    file
};
