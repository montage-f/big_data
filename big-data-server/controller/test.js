/**
 * Created by montage_fz on 2019-07-22
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    await page.screenshot({
        path:'test.jpg'
    });
    await browser.close()
})();
