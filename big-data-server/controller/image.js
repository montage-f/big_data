/**
 * Created by montage_fz on 2019-07-22
 */
const puppeteer = require('puppeteer');
const {urlToImage, base64ToImage} = require('../img/writeImage');
const getImage = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://image.baidu.com/');
    console.log(`go to https://image.baidu.com/`);
    
    // 设置窗口大小
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    
    // 下面是模拟人的行为
    // 1. 找到输入框
    await page.focus('#kw');
    
    // 2. 模拟键盘输入过程, 输入狗
    await page.keyboard.sendCharacter('狗');
    
    // 3. 模拟鼠标点击事件, 因为该按钮是不可见, 所以需要使此方法去触发, 否则直接page.click('.s_btn')
    await page.evaluate(() => document.querySelector('.s_btn').click());
    // await page.click('.s_btn');
    
    // 4. 进入到搜索也之后, 需要等待页面加载完成,
    page.on('load', async () => {
        // 5. 拿到所有的img的src
        let imgList = await page.$$eval('img.main_img', (list) => list.map(img => img.src));
        for (url of imgList) {
            let reg = /\.(jpg|png|gif)$/;
            await page.waitFor(1000);
            if (reg.test(url)) {
                await urlToImage(url);
            } else {
                await base64ToImage(url);
            }
        }
        
        console.log(`page load, img-count:${imgList.length}`);
        
        // 执行完成, 关闭browser
        browser.close();
        
    });
    page.on('error', (err) => {
        console.log(err);
    });
};
getImage();
