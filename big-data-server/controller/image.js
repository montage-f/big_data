/**
 * Created by montage_fz on 2019-07-22
 */
const puppeteer = require('puppeteer');
const path = require('path');

let fileName = path.resolve(__dirname, '../img');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://image.baidu.com/');
    console.log(`go to http://image.baidu.com/`);
    
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
    
    // 3. 模拟鼠标点击事件
    await page.evaluate(()=>document.querySelector('.s_btn').click())
    // await page.click('.s_btn');
    
    // 4. 进入到搜索也之后, 需要等待页面加载完成,
    page.on('load', async () => {
        console.log('page load');

        let srcList = await page.$$eval('#imgid .imgitem img', (dom) => dom.src);
        console.log(srcList);
        // 遍历保存图片
        srcList.forEach(src => {
            console.log(src);
        });
    });
    page.on('error', (err) =>{
        console.log(err);
    })
    console.log(333);
})();
