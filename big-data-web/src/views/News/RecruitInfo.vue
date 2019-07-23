/**Created by MonTage_fz on 2019/7/22**/
<template>
    <div class="Recruit">
        <!--        智联 前端 招聘信息-->
        <Bar :data="payRate" :styleInfo="styleInfo" :title="title"></Bar>
    </div>
</template>

<script>
import Bar from '../../components/echarts/Bar';
export default {
    name: 'Recruit',
    components: {
        Bar
    },
    data() {
        return {
            sou: {
                list: [],
                title: ''
            }
        };
    },
    created() {
        this.getSou();
    },
    computed: {
        // 薪资占比
        payRate() {
            const pay = Array.from(
                new Set(this.sou.list.map((item) => item.pay))
            ).map((v) => ({ name: v }));

            pay.forEach((k) => {
                let i = 1;
                this.sou.list.forEach((p) => {
                    if (k.name === p.pay) {
                        k.value = i++;
                    }
                });
            });
            pay.sort((a, b) => {
                a = parseFloat(a.name.split('-')[0]);
                b = parseFloat(b.name.split('-')[0]);
                if (isNaN(a)) {
                    a = 99999;
                }
                if (isNaN(b)) {
                    b = 99999;
                }
                return a - b;
            });
            return pay;
        },
        styleInfo() {
            return {
                width: '100%',
                height: '500px'
            };
        },
        title() {
            return {
                text: '智联招聘web工资信息'
            };
        }
    },
    methods: {
        // 获取 智联web 信息
        async getSou() {
            // let { info, status } = await this.$axios.get(
            //     '/api/RecruitInfo/sou'
            // );

            let { data, status } = {
                data: {
                    title: '智联招聘信息',
                    info: [
                        {
                            title: 'Web前端初级开发师',
                            company: '广东中威国祥休闲文化发展有限公司',
                            pay: '3.5K-5.5K',
                            demand: '广州-天河区经验不限中专'
                        },
                        {
                            title: 'Web前端开发工程师（周末双休+五险一金）',
                            company: '广州市新娱加娱乐传媒文化有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '上海贝锐信息科技股份有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东群宇互动科技有限公司',
                            pay: '8K-16K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广东创委科技有限公司',
                            pay: '5.5K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师助理',
                            company: '广州广移广告传媒有限公司',
                            pay: '5.5K-7.5K',
                            demand: '广州-天河区经验不限中专'
                        },
                        {
                            title: '高级Web前端开发工程师',
                            company: '广州杰之良软件有限公司',
                            pay: '10K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州盈都体育服务有限公司',
                            pay: '8K-10K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '凯豪信息科技股份有限公司',
                            pay: '12K-16K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州建众文化传播有限公司',
                            pay: '15K-20K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '澳门极易付股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广东快乐种子科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广东宜教通教育有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端开发实习待遇优',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '2K-4K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '广州数字桥网络技术有限公司',
                            pay: '3K-4.5K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: 'Web前端开发工程师（可在家办公）',
                            company: '广州比比知教育咨询有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师-广州',
                            company: '广州劲联智能科技有限公司',
                            pay: '4.5K-7.5K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市拓声电子科技有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州泓展网络科技有限公司',
                            pay: '12K-18K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东亿荣电子商务有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端工程师（高薪）',
                            company: '广州今准网络科技有限公司',
                            pay: '12K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广东宜教通教育有限公司',
                            pay: '5K-8K',
                            demand: '广州-天河区无经验本科'
                        },
                        {
                            title: 'Web前端工程师（双休、五险一金）',
                            company: '广东正力通用电气有限公司',
                            pay: '6K-12K',
                            demand: '广州-番禺区经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州南天电脑系统有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（考虑优秀应届生）',
                            company: '广州未名中智教育科技有限公司',
                            pay: '10K-16K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发工程师（双休，地铁口）',
                            company: '广州迈得豪电子科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'web/HTML5前端工程师',
                            company: '广州市优伟家居用品有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州朗晟信息科技有限公司',
                            pay: '5K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州慧睿思通信息科技有限公司',
                            pay: '8K-16K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'Web前端开发【驻场UC】',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端/ SEO 推广',
                            company: '广州先领品牌策划有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发工程师 JT',
                            company: 'Esri中国',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发实习待遇优',
                            company: '广州数字桥网络技术有限公司',
                            pay: '4K-6K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: '【驻点UC】Web前端开发（React）',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端设计员',
                            company: '群进(广州)跨境电商有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发【驻场阿里】',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端工程师（初级）',
                            company: '广州新米网络科技有限公司',
                            pay: '3K-5K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: '信息服务部Web前端开发工程师',
                            company: '广州增城低碳总部园发展有限公司',
                            pay: '8K-10K',
                            demand: '广州-增城区3-5年本科'
                        },
                        {
                            title: '前端web开发工程师',
                            company: '广州数字桥网络技术有限公司',
                            pay: '6.5K-9K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级Web前端工程师',
                            company: '亿达信息技术有限公司深圳分公司',
                            pay: '14K-18K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师（广州市海珠区）',
                            company: '纬创软件 (武汉)',
                            pay: '10K-15K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'IT培训讲师（Web前端）',
                            company: '中公教育广东分公司',
                            pay: '10K-15K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '深圳市长亮科技股份有限公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州嘉为科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州万普软件技术有限公司',
                            pay: '6K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '上海屹通信息科技发展有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州六一信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师（广州天河区）',
                            company: '纬创软件 (武汉)',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州青鹿教育科技有限公司',
                            pay: '9K-13K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: 'HQ-Web前端开发工程师',
                            company: '广州视源电子科技股份有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级Web前端开发工程师',
                            company: '广州六一信息科技有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '亿达信息技术有限公司深圳分公司',
                            pay: '14K-18K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'ES-Web前端工程师（MAXHUB）(J10694)',
                            company: '广州视源电子科技股份有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '上海华钦信息科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'Java Web前端开发工程师',
                            company: '联通(广东)产业互联网有限公司',
                            pay: '13K-16K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title:
                                '[ATG](欧美/对日/国内) Web前端/开发/架构工程师',
                            company: '埃森哲(中国)有限公司',
                            pay: '薪资面议',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳联友科技有限公司广州分公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'ES-Web前端工程师（MAXHUB）',
                            company: '广州视源电子科技股份有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发（周末双休）',
                            company: '索菲亚家居股份有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州鼎盛互动网络科技有限公司',
                            pay: '16K-25K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东好又贷互联网信息服务有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京联创智融信息技术有限公司上海分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州细刻网络科技有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师（直播）',
                            company: '广东世纪晓教育科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '上海易宝软件有限公司深圳分公司',
                            pay: '12K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳天源迪科信息技术股份有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '九元航空有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州万孚生物技术股份有限公司',
                            pay: '15K-20K',
                            demand: '广州-萝岗区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东快乐种子科技有限公司',
                            pay: '8K-13K',
                            demand: '广州1-3年中专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市微柏软件有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师 5年以上工作经验',
                            company: '深圳市睿服科技有限公司',
                            pay: '15K-24K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: 'Android+Web前端开发工程师 ',
                            company: '广州市驴迹科技有限责任公司',
                            pay: '15K-25K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: '急招Web前端开发助理',
                            company: '新东方信用管理有限公司',
                            pay: '3.5K-5.5K',
                            demand: '广州-天河区1-3年中专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州1-3年本科'
                        },
                        {
                            title:
                                '【40万顶薪】Web前端开发工程师 Topgames互联网游戏公司',
                            company: '广州尊游软件科技有限公司',
                            pay: '14K-28K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发（网站）',
                            company: '广州鼎盛互动网络科技有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '重庆软维科技有限公司',
                            pay: '8K-10K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（办公自动化）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东卓志跨境电商供应链服务有限公司',
                            pay: '5K-9K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company:
                                '中国电子产品可靠性与环境试验研究所(工业和信息化部电子第五研究所)(中国赛宝实验室)',
                            pay: '6K-8K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '中智广州经济技术合作有限公司',
                            pay: '10K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端/小程序开发（助理）',
                            company: '新东方信用管理有限公司',
                            pay: '5K-7K',
                            demand: '广州-天河区经验不限中技'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '上海汉得信息技术股份有限公司',
                            pay: '15K-20K',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: 'Web前端助理',
                            company: '新东方信用管理有限公司',
                            pay: '3.5K-5.5K',
                            demand: '广州-番禺区经验不限中专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州油菜花信息科技有限公司',
                            pay: '9K-13K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级Web前端工程师',
                            company: '广东颖卡广告有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师(C端)',
                            company: '广东世纪晓教育科技有限公司',
                            pay: '10K-17K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '山东鲁花集团有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师-000891',
                            company: '万方数据股份有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳市蓝杏树科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '同方鼎欣科技股份有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '北京奥鹏远程教育中心有限公司',
                            pay: '15K-20K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（数媒）',
                            company: '广州凡科互联网科技股份有限公司',
                            pay: '8K-11K',
                            demand: '广州1年以下本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东德律信用管理股份有限公司',
                            pay: '13K-18K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '杭州海康威视数字技术股份有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师[广州-天河区]',
                            company: '中水三立数据技术股份有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师（中级）',
                            company: '广州亚美信息科技有限公司',
                            pay: '10K-17K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端（双休不加班）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '6.5K-7.5K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '诚迈科技(南京)股份有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '北京信联互动科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师(B端)',
                            company: '广东世纪晓教育科技有限公司',
                            pay: '10K-17K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '广州锋泽网络科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市雄山科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端后端php开发java工程师Ui',
                            company: '三亚星海岸文化传播有限公司',
                            pay: '12K-24K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端工程师（互联网政务）',
                            company: '广州华资软件技术有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东世纪晓教育科技有限公司',
                            pay: '10K-17K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '七天四季酒店(广州)有限公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师实习生',
                            company: '深圳天源迪科信息技术股份有限公司',
                            pay: '2K-4K',
                            demand: '广州1年以下本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '软通动力信息技术(集团)有限公司',
                            pay: '10K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端设计师',
                            company: '广州星唯信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳今日智链数字科技合伙企业(有限合伙)',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '中高级Web前端工程师',
                            company: '广州中国科学院软件应用技术研究所',
                            pay: '8K-15K',
                            demand: '广州-南沙区3-5年本科'
                        },
                        {
                            title: 'ZBBU-Web前端开发工程师',
                            company: '广州酷狗计算机科技有限公司',
                            pay: '18K-35K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师 中级',
                            company: '大连东软睿道教育信息服务有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'web高级前端研发工程师（广州网优）',
                            company: '东信北邮信息技术有限公司',
                            pay: '8K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州传宇信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-增城区1-3年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '软通动力信息技术(集团)有限公司',
                            pay: '10K-20K',
                            demand: '广州-番禺区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '江苏润和软件股份有限公司',
                            pay: '15K-20K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州碧软信息科技有限公司',
                            pay: '9K-12K',
                            demand: '广州-越秀区3-5年本科'
                        },
                        {
                            title: '超高薪聘请H5_Web前端开发工程师',
                            company: '广州峰玉网络科技有限公司',
                            pay: '15K-30K',
                            demand: '广州-花都区3-5年学历不限'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州市奥威亚电子科技有限公司',
                            pay: '8K-16K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端开发（vue框架）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师[广州]',
                            company: '大圣科技股份有限公司',
                            pay: '12K-22K',
                            demand: '广州-荔湾区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（校招）',
                            company: '广州凡科互联网科技股份有限公司',
                            pay: '8K-10K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '浙江臻善科技股份有限公司广东分公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发（VueJS）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级Web前端开发',
                            company: '广东智慧青少年宫教育发展有限公司',
                            pay: '13K-18K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州安正软件股份有限公司',
                            pay: '9K-13K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市申迪计算机系统有限公司',
                            pay: '6K-12K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: '高级Web前端开发/前端主程',
                            company: '成都太能蜗客人力资源管理有限公司',
                            pay: '25K-40K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州领客信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '北京尚博信科技有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州广电运通信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州南方卫星导航仪器有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州华工邦元信息技术有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company:
                                '北京航天长峰科技工业集团有限公司广东分公司',
                            pay: '8K-15K',
                            demand: '广州-越秀区3-5年本科'
                        },
                        {
                            title: 'Web前端高级工程师',
                            company: '广州超越通信科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '云润大数据服务有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州市新娱加娱乐传媒文化有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '北京图盟科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（智能机器人）',
                            company: '广东乐源数字技术有限公司',
                            pay: '8K-12K',
                            demand: '广州-萝岗区3-5年大专'
                        },
                        {
                            title: 'Web前端高级工程师',
                            company: '广东美电贝尔科技集团股份有限公司',
                            pay: '10K-15K',
                            demand: '广州5-10年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州多益网络股份有限公司',
                            pay: '8K-16K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: '（NB-IoT产品中心）Web前端研发工程师',
                            company: '广州畅驿智能科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广东南方数码科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州仲昌一科信息科技有限公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州合立正通信息科技有限公司',
                            pay: '5K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '赞同科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州恩吉技术顾问有限公司',
                            pay: '15K-20K',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '武汉软帝联合科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-花都区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师-金融',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '9K-12K',
                            demand: '广州-海珠区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州城市信息研究所有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州道然信息科技有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '天宇正清科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '珠海和佳医疗设备股份有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '迅天软件有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东科慧信息服务股份有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '金蝶医疗软件科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '珠海和佳医疗设备股份有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广州市恒兴烧坊酒业有限公司',
                            pay: '7K-12K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师-集客（广州）',
                            company: '北京合力亿捷科技股份有限公司',
                            pay: '7K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师（广州）',
                            company: '深圳市源极光科技有限公司',
                            pay: '9K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '北京海量数据技术股份有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师(广州)',
                            company: '中科金审(北京)科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '上海慧逊科技有限公司',
                            pay: '13K-23K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: 'Web前端工程师（广州）',
                            company: '南京麦思伦信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端高级开发工程师',
                            company: '深圳市名图信息技术有限公司',
                            pay: '9K-12K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师（广州）',
                            company: '深圳市源极光科技有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '合景泰富地产控股有限公司-集团总部',
                            pay: '14K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师 [广州]',
                            company: '深圳市八斗才数据有限公司',
                            pay: '8K-12K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '深圳市前海谷雨网络科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端工程师（广州）',
                            company: '深圳市八斗才数据有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '合景泰富地产控股有限公司-集团总部',
                            pay: '14K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师（广州）',
                            company: '南京麦思伦信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市欧恩德技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '深圳市八斗才数据有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '深圳市芒柠科技有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（白云区）',
                            company: '广州盛华信息有限公司',
                            pay: '6K-8K',
                            demand: '广州-白云区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师（智能交通）',
                            company: '广州中国科学院软件应用技术研究所',
                            pay: '5K-8K',
                            demand: '广州-南沙区1-3年大专'
                        },
                        {
                            title: 'Web前端（周末双休 六险一金 包吃）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发专员',
                            company: '广州广移广告传媒有限公司',
                            pay: '5K-7K',
                            demand: '广州-越秀区经验不限中专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '北京宏成运达咨询有限公司',
                            pay: '15K-20K',
                            demand: '广州-黄埔区1-3年学历不限'
                        },
                        {
                            title: 'Web前端开发工程师/五险一金/周末双休',
                            company: '广东绘宇智能勘测科技有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '南京擎盾信息科技有限公司',
                            pay: '7K-13K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '北京腾信卓越信息技术有限公司',
                            pay: '10K-13K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市芒柠科技有限公司',
                            pay: '8K-14K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: 'Web前端开发师（广州）',
                            company: '南京麦思伦信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '武汉兆图科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广州润和颐能软件技术有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端高中级开发工程师',
                            company: '深圳市华云中盛科技有限公司',
                            pay: '10K-18K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市星宇残疾人信息服务中心',
                            pay: '15K-20K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州卖家宝信息技术咨询有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市欧恩德技术有限公司',
                            pay: '6K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '北京中科建友科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区3-5年本科'
                        },
                        {
                            title: '主管 / 资深Web前端开发',
                            company: '广州城市信息研究所有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '海南大圣娱乐有限公司广州分公司',
                            pay: '15K-30K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端(Angular)',
                            company: '信必优(深圳)信息技术有限公司',
                            pay: '6K-8K',
                            demand: '广州-海珠区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州英荔教育科技有限公司',
                            pay: '7K-14K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师（包三餐）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '（浪潮集团）浪潮世科信息技术有限公司LCW',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市讯码通讯科技有限公司',
                            pay: '9K-12K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市科传计算机科技有限公司',
                            pay: '4K-7K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师实习生',
                            company: '东莞市程皓电子科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限中专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东省重工建筑设计院有限公司',
                            pay: '8K-10K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市金马国际旅行社有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '北京腾信软创科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: '高级Web前端',
                            company: '深圳市协卓软件有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '小程序/Web前端开发工程师',
                            company: '金蝶软件（中国）有限公司',
                            pay: '10K-20K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师（高级）',
                            company: '广州西派斯科技有限公司',
                            pay: '14K-20K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州盛华信息有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '广州牛牛豆信息科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端',
                            company: '厦门至恒融兴信息技术有限公司上海分公司',
                            pay: '9K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发（微信及B端方向）',
                            company: '广东世纪晓教育科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端开发人员',
                            company: '深圳市博瑞得科技有限公司重庆分公司',
                            pay: '6K-12K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州博征科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '信必优(深圳)信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '深圳市源极光科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（Vue）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '北京直信创邺数码科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州超越通信科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州多益网络股份有限公司',
                            pay: '8K-10K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州广电计量检测股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州芦苇信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '深圳市新猎场咨询服务有限公司',
                            pay: '15K-20K',
                            demand: '广州-海珠区经验不限学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州乐牛软件科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '（广州）高级Web前端开发',
                            company: '深圳市工源人才派遣有限公司中山分公司',
                            pay: '12K-20K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '宜通世纪科技股份有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州结儿信息科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州流辰信息技术有限公司',
                            pay: '6K-10K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师（番禺区）',
                            company: '南京麦思伦信息科技有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师（vue)',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发(周末双休 六险一金 包吃 )',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师(web·双休·包餐·六险一金)',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州红海云计算股份有限公司',
                            pay: '6K-10K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳微知科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '北京普元智慧数据技术有限公司',
                            pay: '3K-6K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东大比特网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州-天河区1年以下大专'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '广州芦苇信息科技有限公司',
                            pay: '2K-4K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州优谷信息技术有限公司',
                            pay: '9K-13K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'react开发Web前端开发',
                            company: '深圳极联信息技术股份有限公司',
                            pay: '15K-30K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '三盟科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '武汉软帝联合科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-花都区3-5年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '上海埃摩森企业管理咨询有限公司',
                            pay: '10K-20K',
                            demand: '广州-番禺区5-10年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '湖南云飞网络科技股份有限公司',
                            pay: '6K-12K',
                            demand: '广州-花都区3-5年大专'
                        },
                        {
                            title: 'Web前端开发助理（双休+五险一金）',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州守护科技有限公司',
                            pay: '6K-8K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州对庄企业管理中心(有限合伙)',
                            pay: '10K-20K',
                            demand: '广州-荔湾区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '飞救医疗科技(北京)有限公司',
                            pay: '8K-10K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端开发（东莞松山湖）',
                            company: '拓维信息系统股份有限公司',
                            pay: '12K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发技术工程师',
                            company: '广州道然信息科技有限公司',
                            pay: '13K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级Web前端开发工程师',
                            company: '佛山市博纳德信息科技有限公司',
                            pay: '20K-30K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州飞硕信息科技股份有限公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市时尚商业城有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州市贺氏办公设备有限公司',
                            pay: '7K-12K',
                            demand: '广州-天河区经验不限大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州市康诚信息科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '佰聆数据股份有限公司',
                            pay: '2K-4K',
                            demand: '广州-萝岗区无经验本科'
                        },
                        {
                            title: 'Web前端开发工程师 [广州]',
                            company: '深圳市芒柠科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'Web前端初级工程师',
                            company: '南京麦思伦信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '苏州瑞泰信息技术有限公司',
                            pay: '8K-16K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发/网页前端工程师',
                            company: '广州喜玩国际旅行社有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '（广州）高级Web前端开发',
                            company: '深圳市工源人才派遣有限公司中山分公司',
                            pay: '12K-20K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '广州米烁贸易有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '临汾恒天智诚网络科技有限公司',
                            pay: '20K-30K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '信必优(深圳)信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端（包吃包住+年终奖）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '9K-14K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '（物联网+产品中心）Web前端研发工程师',
                            company: '广州畅驿智能科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'H5前端开发工程师/web开发工程师（双休）',
                            company: '广州永恒情书教育咨询有限公司',
                            pay: '6K-9K',
                            demand: '广州-白云区1-3年学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '联奕科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '龙湾科技(北京)有限公司',
                            pay: '10K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州市贺氏办公设备有限公司',
                            pay: '7K-12K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（急聘）',
                            company: '广州天选网络科技有限公司',
                            pay: '9K-18K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳市鼎盛动力发展有限公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师（广州）',
                            company: '深圳市华云中盛科技有限公司',
                            pay: '13K-18K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端+应届生、实习生',
                            company: '广州易哲网络科技有限公司',
                            pay: '4K-5K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市音桥电子科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州嘉检医学检测有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州众盟信息科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '南京绛门信息科技股份有限公司',
                            pay: '8K-16K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '南京中企动力人力资源服务有限公司',
                            pay: '9K-16K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州多点信息科技有限责任公司',
                            pay: '5K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-11K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '泉州慧霁科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '9K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '赛特斯信息科技股份有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '中级Web前端开发工程师',
                            company: '广州道然信息科技有限公司',
                            pay: '13K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '（应用软件产品中心）Web前端研发工程师',
                            company: '广州畅驿智能科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: '高级Web前端工程师',
                            company: '佛山市博纳德信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东新岸线计算机系统芯片有限公司',
                            pay: '6K-12K',
                            demand: '广州-番禺区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州无界互动网络科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州中工水务信息科技有限公司',
                            pay: '10K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东益泰达科技发展有限公司',
                            pay: '5K-7K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州维朗网络科技有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州安春贸易商行',
                            pay: '15K-20K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州众拓计算机科技有限公司',
                            pay: '7K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东壹贸网电子商务有限公司',
                            pay: '4K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广东微谱网络科技有限公司',
                            pay: '9K-18K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '中级Web前端工程师',
                            company: '广州佰锐网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '中级Web前端开发工程师',
                            company: '广州佰锐网络科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端',
                            company: '广州万国汽车技术有限公司',
                            pay: '8K-13K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发小组长',
                            company: '广州信友牛牛互联网科技有限公司',
                            pay: '13K-16K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州灯光社照明设计有限公司',
                            pay: '8K-15K',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '郑州大咖信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级Web前端开发工程师',
                            company: '广州亦云信息技术股份有限公司',
                            pay: '13K-15K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州智能科技发展有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州中浩控制技术有限公司',
                            pay: '8K-15K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师（中级）',
                            company: '金税信息技术服务股份有限公司',
                            pay: '8K-10K',
                            demand: '广州-花都区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '郑州大咖信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '中级Web前端开发工程师',
                            company: '广州佰锐网络科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发组长',
                            company: '广州中工水务信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '移动Web前端开发工程师',
                            company: '广州华邦文化传播有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '深圳市闻迅数码科技有限公司',
                            pay: '12K-16K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州佰锐网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端设计师 /HTML5',
                            company: '广州透真生物科技有限公司',
                            pay: '6K-8K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: '高级Web前端工程师',
                            company: '广州市苏瑞计算机科技有限公司',
                            pay: '13K-25K',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州越际知鸿教育科技有限公司',
                            pay: '9K-12K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市房企网络科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州思孵信息科技有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东星辉天拓互动娱乐有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: 'Web前端高级工程师',
                            company: '广州灯光社照明设计有限公司',
                            pay: '15K-25K',
                            demand: '广州-番禺区5-10年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州慧更思通信科技有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州德毅维才软件技术有限公司',
                            pay: '7K-14K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州慧更思通信科技有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发讲师',
                            company: '广州中软职业技能培训有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '惠州市一匠科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-荔湾区3-5年学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东长荣科技有限公司',
                            pay: '5K-7K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州景翰文化策划有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州创致信息科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州尊斌计算机科技有限公司',
                            pay: '5K-7K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广东广贸天下网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '上饶市宏亿房地产营销策划有限公司',
                            pay: '8K-15K',
                            demand: '广州-花都区经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州荷德曼农业科技有限公司',
                            pay: '10K-18K',
                            demand: '广州-萝岗区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '码云(广州)智能科技有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（五险一金）[广州]',
                            company: '广州名科计算机网络有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端主管',
                            company: '广州市恒生国际旅行社有限公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州冠众电子科技股份有限公司',
                            pay: '8K-10K',
                            demand: '广州-萝岗区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州扬盛计算机软件有限公司',
                            pay: '6K-10K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '美肌化妆品有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市九重天信息科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州微易软件有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州智在云天文化科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州元峰智略科技有限公司',
                            pay: '3.5K-6.5K',
                            demand: '广州-越秀区1-3年学历不限'
                        },
                        {
                            title: 'Web前端',
                            company: '广州市蜂擎信息科技有限公司',
                            pay: '4K-8K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '上海创文信息技术有限公司广州分公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师 10K—15K',
                            company: 'Gworld(平潭)互联网科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州创致信息科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '重庆锐云科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-海珠区经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州鹰瞰信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师/高级数据可视化（高级）',
                            company: '广州锦行网络科技有限公司',
                            pay: '12K-18K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州市链中链科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端架构师/高级Web前端',
                            company: '广州丽晶软件科技股份有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州简乐网络科技有限公司',
                            pay: '9K-15K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: 'Web前端设计师/网页设计',
                            company: '广东富闰酒业集团有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州仪速安电子科技有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州智在云天文化科技有限公司',
                            pay: '7K-14K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州联图电子科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市微达安计算机有限公司',
                            pay: '6K-10K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州豪希睿国际贸易有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州济达信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（中级）',
                            company: '广州锦行网络科技有限公司',
                            pay: '8K-12K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发工程师 ',
                            company: '广州化工交易中心有限公司',
                            pay: '8K-13K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州市小犬吠吠健康科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市东信达计算机技术开发有限公司',
                            pay: '5K-8K',
                            demand: '广州-荔湾区1-3年本科'
                        },
                        {
                            title: 'Web/H5前端开发高级工程师',
                            company: '广东网顺计算机有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级Web前端工程师（双休+五险一金）',
                            company: '广州锐新软件科技有限公司',
                            pay: '9K-18K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端/HTML5开发工程师',
                            company: '广州创思云网络科技有限公司',
                            pay: '8K-16K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州市毕酉成信息技术有限公司',
                            pay: '10K-14K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州保祺贸易有限公司',
                            pay: '15K-25K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '移动前端H5开发工程师',
                            company: '大圣科技股份有限公司',
                            pay: '15K-25K',
                            demand: '广州-荔湾区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东团博科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广州维朗网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '京望教育科技(广州)有限公司',
                            pay: '5K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端主管',
                            company: '广州云作科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州惜情服饰有限公司',
                            pay: '10K-15K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端、小程序开发工程师',
                            company: '万众智联(广州)科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '讯汇科技(广州)有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市开利网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年学历不限'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州北鱼网络科技有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东渔易水产科技有限责任公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师-广州-00025',
                            company: '北软互联(北京)科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州汉光电气股份有限公司',
                            pay: '8K-15K',
                            demand: '广州-荔湾区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东致学信息科技有限责任公司',
                            pay: '8K-10K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州卓腾科技有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（熟悉JS，CSS）',
                            company: '深圳市茗格科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-越秀区3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师（高级）',
                            company: '金税信息技术服务股份有限公司',
                            pay: '10K-13K',
                            demand: '广州-花都区3-5年本科'
                        },
                        {
                            title: 'Web前端工程师 (区块链）',
                            company: '区块链新科技(广州)有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '京望教育科技(广州)有限公司',
                            pay: '5K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东绍林科技开发有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市康软信息科技有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端设计师/HTML5/网页前端设计师',
                            company: '广州市盈泽信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东博维创远科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州熊清科技有限公司',
                            pay: '12K-24K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州市万齐网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '北京博迅尼科科技有限公司',
                            pay: '1K-2K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端网页设计师',
                            company: '广州讯度网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州市拓比信息科技有限公司',
                            pay: '4K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东乐从钢铁世界有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师（初级）',
                            company: '广州荷德曼农业科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-萝岗区1-3年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳市希仑科技有限公司广州分公司',
                            pay: '8K-10K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端工程师（编号H-3）',
                            company: '广州煜晨信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '桂林零与壹软件有限公司',
                            pay: '3K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州妙游网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州汇柏软件科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州汇智通信技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州有好戏网络科技有限公司',
                            pay: '12K-16K',
                            demand: '广州-越秀区3-5年本科'
                        },
                        {
                            title: 'Web前端及IT网络管理',
                            company: '广州伊丝娃儿时装有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州景翰文化策划有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '广州市孔雀文化传播有限公司',
                            pay: '4K-6K',
                            demand: '广州-越秀区经验不限学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东迪奥技术有限公司',
                            pay: '6K-10K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '济南浪潮方智信息技术有限公司深圳分公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师（初级）',
                            company: '广州锦行网络科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳新河通创科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'HTML5前端研发工程师',
                            company: '广州犇牛网络科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web前端（驻外企）',
                            company: '深圳市卓越方达科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '中高级Web前端开发工程师',
                            company: '航天精一(广东)信息科技有限公司湖北分公司',
                            pay: '100K-150K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州美途物联网技术有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端架构',
                            company: '广东力通网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州5-10年大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州保祺贸易有限公司',
                            pay: '15K-25K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州拓胜计算机技术服务有限公司',
                            pay: '70K-100K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端工程师-中级',
                            company: '深圳市汉昌信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '优采(深圳)供应链有限责任公司',
                            pay: '15K-20K',
                            demand: '广州-番禺区5-10年本科'
                        },
                        {
                            title: 'Web前端主程（急聘）',
                            company: '广州天选网络科技有限公司',
                            pay: '10K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '东风海博新能源科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-番禺区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '清华珠三角研究院',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '高级Web前端工程师',
                            company: '广州丽晶软件科技股份有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师20至30K包食宿',
                            company: '广州拓简信息科技有限公司',
                            pay: '20K-30K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端及UI软件工程师',
                            company: '文华投资集团有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '苏州米牛电子商务有限公司',
                            pay: '11K-16K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '北京知达客信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '深圳市易泽真空科技有限公司',
                            pay: '25K-50K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: 'OrangeTree Consultancy',
                            pay: '15K-20K',
                            demand: '广州-天河区经验不限大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '厦门至恒融兴信息技术有限公司北京分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州达美智能科技有限公司',
                            pay: '6K-11K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '前端开发工程师（广州）',
                            company: '深圳市云间网络科技有限公司',
                            pay: '12K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州众由通信技术有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州思林杰网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'webgis前端开发工程师',
                            company: '广州智能科技发展有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师web',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '6.5K-9K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '游戏前端开发',
                            company: '广州大思教育科技发展有限公司',
                            pay: '14K-18K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州市盈泽信息科技有限公司',
                            pay: '10K-12K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市蓝凌软件股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高薪HTML5前端开发实习生',
                            company: '广州数字桥网络技术有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'HTML5前端开发实习',
                            company: '广州数字桥网络技术有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端',
                            company: '世展和新展联合展览(广州)有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州中长康达信息技术有限公司',
                            pay: '8K-9K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'H5前端开发实习生',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '2K-4K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: 'H5前端开发工程师（跑合网）',
                            company: '广州立白企业集团有限公司',
                            pay: '10K-15K',
                            demand: '广州-荔湾区3-5年大专'
                        },
                        {
                            title: '前端开发助理',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '2K-4K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州法信云科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州无界互动网络科技有限公司',
                            pay: '13K-17K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广东联结电子商务有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东涌浪网络技术有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '广州爬山去软件科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端开发实习生工作职责：',
                            company: '广州泛喜可为餐饮管理有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端工程师 ',
                            company: '深圳市天上昀视觉科技有限公司',
                            pay: '13K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'UI前端开发工程师',
                            company: '广州红海人力资源集团股份有限公司',
                            pay: '8K-12K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州飞瑞敖电子科技股份有限公司',
                            pay: '5K-10K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: 'Web前端开发实习生',
                            company: '广州龙科信息科技有限公司',
                            pay: '2K-4K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州宜赚网络科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'web开发工程师',
                            company: '深圳市联软科技股份有限公司',
                            pay: '8K-13K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州市捍御者信息科技有限公司',
                            pay: '7.5K-15K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广州市乐商软件科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '中高级前端开发工程师',
                            company: '广东铭太信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州君和信息技术有限公司',
                            pay: '13K-26K',
                            demand: '广州-越秀区5-10年本科'
                        },
                        {
                            title: '前端开发工程师（白云区）',
                            company: '彩讯科技股份有限公司',
                            pay: '8K-13K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州双梧信息科技有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州中国科学院计算机网络信息中心',
                            pay: '8K-10K',
                            demand: '广州-南沙区3-5年本科'
                        },
                        {
                            title: 'Web前端开发',
                            company: '星河科技文化发展(广州)有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '天讯瑞达通信技术有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州信友牛牛互联网科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'VUE.JS前端开发工程师',
                            company: '广东舍卫工程技术咨询有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'java前端开发工程师',
                            company: '北京赛晶电力电子科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '前海港亨信息科技(深圳)有限公司广州分公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州创必承信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州乐庚信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师（实习）',
                            company: '广州南天电脑系统有限公司',
                            pay: '2K-4K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: '前端开发',
                            company: '京北方信息技术股份有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州修远信息科技有限公司',
                            pay: '4.5K-8K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州国联智慧信息技术有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师(000550)',
                            company: '海南元游信息技术有限公司广州分公司',
                            pay: '8K-13K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '深圳鼎游无限科技有限公司广州办事处',
                            pay: '6K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端专家',
                            company: '广东三维家信息科技有限公司',
                            pay: '20K-35K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州摩保网络科技有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '上海汉堂实业有限公司',
                            pay: '8K-14K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州启量信息科技有限公司',
                            pay: '12K-18K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市联大信息科技有限公司',
                            pay: '6K-9K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端',
                            company: '广州爱旅拍文化传播有限公司',
                            pay: '8K-10K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州铭峻电子科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州深声科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端中级工程师',
                            company: '广州英虎网络股份有限公司',
                            pay: '8K-10K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '上海汉堂实业有限公司',
                            pay: '8K-13K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '顺便信息科技(广东)有限公司',
                            pay: '8K-16K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '飞虎科技(广东)有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市合鼎通讯科技有限公司',
                            pay: '13K-25K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州得一物联科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '深圳市平方科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: '微信小程序/Web前端开发工程师',
                            company: '广州市华谊通用科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东三维家信息科技有限公司',
                            pay: '13K-20K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广东麦贝科技有限公司',
                            pay: '4K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广西东呈酒店管理有限公司',
                            pay: '15K-25K',
                            demand: '广州-白云区3-5年本科'
                        },
                        {
                            title: 'Web前端',
                            company: '广州市莱麦互联网科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市微游网络有限公司',
                            pay: '12K-15K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '汇丰环球客户服务(广东)有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端研发工程师08-10-06',
                            company: '杭州大搜车汽车服务有限公司',
                            pay: '10K-16K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端架构师',
                            company: '广西东呈酒店管理有限公司',
                            pay: '20K-30K',
                            demand: '广州-白云区5-10年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州栗梦网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区经验不限学历不限'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州凯软信息科技有限公司',
                            pay: '5K-7K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端技术专家（急招）',
                            company: '广东三维家信息科技有限公司',
                            pay: '25K-40K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州思软信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端实习生',
                            company: '广州新米网络科技有限公司',
                            pay: '3K-5K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州群友信息科技有限公司',
                            pay: '8K-13K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web前端开发',
                            company: '广州大衍互联信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州传悦网络科技有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端研发工程师（中高级）',
                            company: '广州丰石科技有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web前端工程师(中高级)(南沙)',
                            company: '中航(广州)信息科技有限公司',
                            pay: '11K-17K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州市海约互联网信息服务有限公司',
                            pay: '7K-13K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广东润弘科技有限公司',
                            pay: '15K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '广州帕克西软件开发有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区3-5年学历不限'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '广州亿联百汇科技有限公司',
                            pay: '7K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'IT培训讲师（Web前端）',
                            company: '中公教育',
                            pay: '薪资面议',
                            demand: '广州本科'
                        },
                        {
                            title: 'Web前端',
                            company: '广州点米立德企业管理有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web前端开发工程师',
                            company: '绝代双骄(广州)品牌服务有限公司',
                            pay: '8K-13K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师（广州）',
                            company: '厦门市美亚柏科信息股份有限公司',
                            pay: '15K-20K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州博控自动化技术有限公司',
                            pay: '7K-10K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师(Angular/React)',
                            company: '上海华钦信息科技股份有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州博控自动化技术有限公司',
                            pay: '7K-10K',
                            demand: '广州-南沙区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '数字广东网络建设有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'H5前端开发工程师',
                            company: '中科软科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州-越秀区经验不限本科'
                        },
                        {
                            title: '前端研发工程师08-10-06',
                            company: '杭州大搜车汽车服务有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广东美的制冷设备有限公司',
                            pay: '薪资面议',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海华钦信息科技股份有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '大连斯锐信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '前端开发工程师(Angular/React)',
                            company: '上海华钦信息科技股份有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州博控自动化技术有限公司',
                            pay: '7K-10K',
                            demand: '广州-南沙区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '数字广东网络建设有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'H5前端开发工程师',
                            company: '中科软科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州-越秀区经验不限本科'
                        },
                        {
                            title: '前端研发工程师08-10-06',
                            company: '杭州大搜车汽车服务有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广东美的制冷设备有限公司',
                            pay: '薪资面议',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海华钦信息科技股份有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '大连斯锐信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '大数据可视化前端工程师',
                            company: '数字广东网络建设有限公司',
                            pay: '15K-25K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '网易--web后端开发',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '朗新科技股份有限公司',
                            pay: '10K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '武汉佰钧成技术有限责任公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '网易-前端开发工程师（办公自动化）',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'web开发/前端开发（外包）',
                            company: '上海汉堂实业有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师（驻场唯品会）',
                            company: '深圳市法本信息技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'web开发/前端开发（外包）',
                            company: '上海汉堂实业有限公司',
                            pay: '15K-30K',
                            demand: '广州-黄埔区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市网新新思软件有限公司',
                            pay: '13K-16K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '福禄仓(广州)电子商务有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师（东风日产）',
                            company: '深圳市法本信息技术股份有限公司',
                            pay: '6K-9K',
                            demand: '广州-花都区1-3年本科'
                        },
                        {
                            title: '前端',
                            company:
                                '文思海辉技术有限公司 Pactera Technology International Limited',
                            pay: '薪资面议',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市法本信息技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '亿达信息技术有限公司深圳分公司',
                            pay: '13K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'ui前端工程师',
                            company: '碧桂园控股',
                            pay: '薪资面议',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'java开发工程师助理(web方向)',
                            company: '新东方信用管理有限公司',
                            pay: '4.5K-6.5K',
                            demand: '广州-白云区经验不限中专'
                        },
                        {
                            title: 'H5高级前端开发工程师',
                            company: '广州鼎盛互动网络科技有限公司',
                            pay: '16K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '碧桂园控股',
                            pay: '薪资面议',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '爱奇艺（www.iqiyi.com）',
                            pay: '8K-15K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '大数据前端开发工程师',
                            company: '联想云领(成都)科技有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '25K-50K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发实习生（可转正）',
                            company: '北京字节跳动科技有限公司',
                            pay: '5K-10K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: 'java开发工程师助理(web方向)',
                            company: '新东方信用管理有限公司',
                            pay: '4.5K-6.5K',
                            demand: '广州-天河区经验不限中技'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州金十信息科技有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'js工程师',
                            company: '广州任事通网络科技有限公司',
                            pay: '7K-9K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广东好又贷互联网信息服务有限公司',
                            pay: '12K-18K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '25K-50K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发岗',
                            company: '富利建设集团有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'JAVA 前端工程师',
                            company: '广东美的制冷设备有限公司',
                            pay: '薪资面议',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '20K-40K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发（包三餐）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-9K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '20K-40K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发（双休）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '11K-13K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: '前端高级工程师',
                            company: '广东中车检汽车服务咨询有限公司',
                            pay: '12K-18K',
                            demand: '广州-萝岗区3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '25K-50K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级前端研发工程师',
                            company: '北京修齐治平科技有限公司',
                            pay: '12K-16K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发',
                            company: '亿达信息技术有限公司深圳分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '亚信科技(中国)有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师（初/中/高/资深）',
                            company: '北京字节跳动科技有限公司',
                            pay: '20K-40K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '15K-30K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发实习生（可转正）',
                            company: '北京字节跳动科技有限公司',
                            pay: '5K-10K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '武汉佰钧成技术有限责任公司',
                            pay: '15K-23K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '开发工程师(前端开发）(003339)',
                            company: '中移在线服务有限公司',
                            pay: '薪资面议',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'web中级研发工程师（广州网优）',
                            company: '东信北邮信息技术有限公司',
                            pay: '8K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-海珠区5-10年大专'
                        },
                        {
                            title: '高级前端工程师 (MJ000282)',
                            company: '锦江信息技术(广州)有限公司',
                            pay: '13K-18K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端中高级工程师（QZ-PDB0002-SHB）',
                            company: '北明软件有限公司北京分公司',
                            pay: '8K-16K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市法本信息技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'WEB小程序开发助理',
                            company: '广东中威国祥休闲文化发展有限公司',
                            pay: '5K-7K',
                            demand: '广州-荔湾区经验不限中专'
                        },
                        {
                            title: '前端工程师',
                            company: '北明软件有限公司北京分公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'Web开发工程师（JR29bp）',
                            company: '北京东方国信科技股份有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '大连东软睿道教育信息服务有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师（广州）',
                            company: '北京拓尔思信息技术股份有限公司',
                            pay: '7K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '西安澳鹏网络科技有限公司广州分公司',
                            pay: '10K-20K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '彩讯科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发leader',
                            company: '北京字节跳动科技有限公司',
                            pay: '45K-90K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市法本信息技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-荔湾区3-5年本科'
                        },
                        {
                            title: '中级前端',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '中级前端工程师',
                            company: '广西东呈酒店管理有限公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年本科'
                        },
                        {
                            title: '前端开发工程师（唯品会项目）',
                            company: '深圳市法本信息技术股份有限公司',
                            pay: '10K-12K',
                            demand: '广州-荔湾区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京宇信科技集团股份有限公司',
                            pay: '9K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端VUE开发',
                            company: '中软国际科技服务有限公司深圳分公司',
                            pay: '薪资面议',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '北京字节跳动科技有限公司',
                            pay: '25K-50K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师(J10022)',
                            company: '广州中海达卫星导航技术股份有限公司',
                            pay: '14K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '北京新时空科技股份有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '中级前端开发工程师/尚德机构/待遇从优',
                            company: '北京尚德在线教育科技有限公司2',
                            pay: '20K-30K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州太平洋电脑信息咨询有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '东信北邮信息技术有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东中车检汽车服务咨询有限公司',
                            pay: '6K-10K',
                            demand: '广州-萝岗区1-3年大专'
                        },
                        {
                            title: '前端工程师（QZ-KARD07-FLY）',
                            company: '北明软件有限公司北京分公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端工程师（中华广场）',
                            company: '恒拓开源信息科技股份有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州棒谷科技股份有限公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师（广州）--智能硬件技术中心',
                            company: '中移物联网有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端高级开发工程师',
                            company: '广州多融信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州5-10年学历不限'
                        },
                        {
                            title: '前端开发助理',
                            company: '广州微咚互动科技有限公司',
                            pay: '3K-5K',
                            demand: '广州无经验学历不限'
                        },
                        {
                            title: '前端工程师-广州番禺-敏捷',
                            company: '深圳市凹凸微科科技有限公司',
                            pay: '15K-18K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '前端开发实习生（2020届实习生）',
                            company: '恒拓开源信息科技股份有限公司广州分公司',
                            pay: '2K-4K',
                            demand: '广州-白云区无经验本科'
                        },
                        {
                            title: '研发类-前端开发工程师',
                            company: '广州棒谷科技股份有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: '前端UI开发工程师',
                            company: '广东美的制冷设备有限公司',
                            pay: '薪资面议',
                            demand: '广州-番禺区3-5年本科'
                        },
                        {
                            title: 'php工程师',
                            company: '巨枫互动信息科技(广州)有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'webgl工程师',
                            company: '广州金十信息科技有限公司',
                            pay: '14K-28K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端工程师 (MJ000513)',
                            company: '南京领添信息技术有限公司',
                            pay: '13K-26K',
                            demand: '广州-番禺区经验不限本科'
                        },
                        {
                            title: '前端混合开发工程师',
                            company: '广东中车检汽车服务咨询有限公司',
                            pay: '8K-15K',
                            demand: '广州-萝岗区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '雪松控股集团有限公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '亿达信息技术有限公司深圳分公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州君思网络科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-花都区3-5年大专'
                        },
                        {
                            title: '前端实习生（2020届）',
                            company: '广州华资软件技术有限公司',
                            pay: '2K-4K',
                            demand: '广州-天河区无经验本科'
                        },
                        {
                            title: '主任前端开发工程师(J10404)',
                            company: '欧派家居集团股份有限公司',
                            pay: '20K-30K',
                            demand: '广州-白云区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京联创智融信息技术有限公司',
                            pay: '9K-14K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东美捷威通生物科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-萝岗区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州中国科学院软件应用技术研究所',
                            pay: '8K-15K',
                            demand: '广州-南沙区1-3年本科'
                        },
                        {
                            title: 'WebGIS开发工程师(J10023)',
                            company: '广州中海达卫星导航技术股份有限公司',
                            pay: '13K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发-广州',
                            company: '上海慧逊科技有限公司',
                            pay: '10K-13K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '软件测试工程师（Web端和移动端）',
                            company: '广东好又贷互联网信息服务有限公司',
                            pay: '8K-13K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州华资软件技术有限公司',
                            pay: '8K-15K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '舜飞-高级前端开发',
                            company: '广州传宇信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州瓷肌化妆品有限公司从化分公司',
                            pay: '16K-22K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州枫车电子商务有限公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '名创优品股份有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师（实习）',
                            company: '浩鲸云计算科技股份有限公司',
                            pay: '3K-4K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: '前端开发工程师（广州）',
                            company: '广州锋泽网络科技有限公司',
                            pay: '9K-13K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '前端工程师-商旅 (MJ000271)',
                            company: '锦江信息技术(广州)有限公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端开发实习生',
                            company: '高新兴科技集团股份有限公司',
                            pay: '2K-4K',
                            demand: '广州无经验学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东快乐种子科技有限公司',
                            pay: '13K-18K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'HTML5开发助理',
                            company: '广州铭天网络科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'H5前端工程师-珠海知名游戏公司',
                            company: '上海仲望企业管理咨询有限公司',
                            pay: '18K-35K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'web后端开发工程师',
                            company:
                                '中国电子产品可靠性与环境试验研究所(工业和信息化部电子第五研究所)(中国赛宝实验室)',
                            pay: '6K-8K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '全栈\\前端开发工程师（中级、高级）',
                            company: '北京天盛京享科技有限公司',
                            pay: '20K-40K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市微柏软件有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市香港科大霍英东研究院',
                            pay: '6K-12K',
                            demand: '广州-南沙区1-3年大专'
                        },
                        {
                            title: '前端开发-外包（番禺钟村）',
                            company: '大连斯锐信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'web开发工程师',
                            company: '同方鼎欣科技股份有限公司',
                            pay: '10K-13K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Vue前端开发',
                            company: '北京腾信卓越信息技术有限公司',
                            pay: '11K-13K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州天源信息科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '理赔（日本项目）- 前端 SA',
                            company: '上海韬源信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端测试工程师',
                            company: '睿乔电缆(广州)有限公司',
                            pay: '5K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'Web',
                            company: '软通动力信息技术(集团)有限公司',
                            pay: '16.5K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '浩鲸云计算科技股份有限公司',
                            pay: '13K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'Web',
                            company: '软通动力信息技术(集团)有限公司',
                            pay: '13K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端研发工程师',
                            company: '北京修齐治平科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师（广州）',
                            company: '东华软件股份公司',
                            pay: '薪资面议',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '亚信科技(中国)有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '软件开发岗（Web前端开发方向）',
                            company: '中邮消费金融',
                            pay: '薪资面议',
                            demand: '广州本科'
                        },
                        {
                            title: 'Web前端工程师',
                            company: '上海音智达',
                            pay: '薪资面议',
                            demand: '广州本科'
                        },
                        {
                            title: 'Vue前端',
                            company: '北京腾信卓越信息技术有限公司',
                            pay: '11K-13K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: 'H5前端开发',
                            company: '广东省电信规划设计院有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州碧软信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: 'Java开发工程师（广州）',
                            company: '北京北大软件工程股份有限公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州车快链科技发展有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: '中高级前端开发工程师',
                            company: '凯通科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州-萝岗区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州赛宝认证中心服务有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'java-web全栈开发工程师（广州）',
                            company: '武汉兆图科技有限公司',
                            pay: '6K-11K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '重庆气盖世网络科技有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区3-5年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东学达城教育科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Andriod前端开发工程师',
                            company: '广州易和医疗技术开发有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州易和医疗技术开发有限公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: 'web开发工程师',
                            company: '南京南游网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '赞同科技股份有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '深圳市凹凸微科科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-黄埔区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '越亮传奇科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年学历不限'
                        },
                        {
                            title: 'Java中级工程师（广州）',
                            company: '深圳市云间网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京宝润兴业科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'Web开发工程师',
                            company: '超视堺国际科技(广州)有限公司',
                            pay: '6K-8K',
                            demand: '广州-增城区1-3年大专'
                        },
                        {
                            title: '前端开发工程师（双休+五险一金）',
                            company: '广州市达生市场推广有限公司',
                            pay: '8K-10K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'web开发（双休·包吃·五险）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '广东林安物流发展有限公司',
                            pay: '8K-13K',
                            demand: '广州-白云区1-3年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '北京融易通信息技术有限公司',
                            pay: '15K-20K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '三盟科技股份有限公司',
                            pay: '13K-20K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发组长',
                            company: '深圳市协卓软件有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: '前端工程师--急聘',
                            company: '广州润和颐能软件技术有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市汉斯达五金有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'web前段开发工程师',
                            company: '广州卓越教育培训中心',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广东道一信息技术股份有限公司',
                            pay: '13K-18K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州广电运通金融电子股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-萝岗区1-3年本科'
                        },
                        {
                            title: '（应用软件产品中心）java web开发工程师',
                            company: '广州畅驿智能科技有限公司',
                            pay: '6K-8K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'java开发工程师web方向',
                            company: '广州广移广告传媒有限公司',
                            pay: '5.5K-7.5K',
                            demand: '广州-天河区经验不限中专'
                        },
                        {
                            title: '前端开发工程师（移动端+angular）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '云宏信息科技股份有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端',
                            company: '广州云系信息科技有限公司',
                            pay: '12K-17K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州美品苏打网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师 （中级）',
                            company: '绿瘦健康产业集团有限公司',
                            pay: '10K-15K',
                            demand: '广州-荔湾区3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州三人行壹佰教育科技有限公司北京分公司',
                            pay: '15K-25K',
                            demand: '广州-番禺区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '佰聆数据股份有限公司',
                            pay: '9K-15K',
                            demand: '广州-萝岗区3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '金蝶医疗软件科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '急聘  前端',
                            company: '广州润和颐能软件技术有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '深圳市协卓软件有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海复深蓝软件股份有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端研发工程师',
                            company: '广州道然信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '恒拓开源信息科技股份有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '恒拓开源信息科技股份有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州酷旅旅行社有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州广电运通信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '龙湾科技(北京)有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端界面工程师',
                            company: '广州餐道信息科技有限公司',
                            pay: '10K-18K',
                            demand: '广州3-5年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '凯通科技股份有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市东恒尚科信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州永融科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '前端开发储备工程师3K包食宿',
                            company: '广州牛牛豆信息科技有限公司',
                            pay: '3K-5K',
                            demand: '广州-番禺区经验不限学历不限'
                        },
                        {
                            title: '前端开发工程师（中科易德）',
                            company: '广州中国科学院软件应用技术研究所',
                            pay: '8K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端工程师（好莱客）',
                            company: '恒拓开源信息科技股份有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广东宏太智慧谷科技企业孵化器有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州盈尚信息科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州永融科技股份有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师（分公司）',
                            company: '蓝盾信息安全技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端技术工程师',
                            company: '广州道然信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区3-5年学历不限'
                        },
                        {
                            title: '前端工程师',
                            company: '广州加丁企业管理咨询有限公司',
                            pay: '10K-15K',
                            demand: '广州-萝岗区3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州广电运通金融电子股份有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '中级前端工程师',
                            company: '大连东软睿道教育信息服务有限公司',
                            pay: '8K-10K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: '初级web研发工程师（广州）',
                            company: '北京中德福林软件科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '13K-18K',
                            demand: '广州-白云区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州合洲投资发展有限公司',
                            pay: '14K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '佰聆数据股份有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州四三九九信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '大数据java前端开发工程师',
                            company: '北京万维信达科技有限公司',
                            pay: '5K-9K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师（1）',
                            company: '广州君思网络科技有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'ZNXT-前端开发工程师',
                            company: '广州酷狗计算机科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州美亚电子商务国际旅行社有限公司',
                            pay: '7K-12K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: 'web开发工程师（中级）',
                            company: '广州永融科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州市颜肌生物科技有限公司',
                            pay: '5K-7K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海羿海信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '汕头市阿米巴网络科技有限公司',
                            pay: '20K-30K',
                            demand: '广州-越秀区3-5年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东南方数码科技股份有限公司',
                            pay: '7K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级web服务器开发',
                            company: '广州博征科技有限公司',
                            pay: '15K-30K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'H5前端开发工程师（双休+加班少+国企项目）',
                            company: '广州纳诺科技股份有限公司',
                            pay: '7K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端设计讲师',
                            company: '广州市百库电子科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州市驴迹科技有限责任公司',
                            pay: '12K-18K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'app前端开发',
                            company: '广东省电信规划设计院有限公司',
                            pay: '7K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州博征科技有限公司',
                            pay: '15K-30K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州市新娱加娱乐传媒文化有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东德恒信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '中达安股份有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州广电运通金融电子股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-萝岗区1-3年本科'
                        },
                        {
                            title: '高级前端开发工程师（南航）',
                            company: '四川达森企业管理咨询有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区5-10年大专'
                        },
                        {
                            title: '小程序前端',
                            company: '广州朗锐数字传媒科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区1-3年本科'
                        },
                        {
                            title: '软件开发工程师web方向',
                            company: '深圳市洲明科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州美亚电子商务国际旅行社有限公司',
                            pay: '12K-18K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '汕头市阿米巴网络科技有限公司',
                            pay: '9K-11K',
                            demand: '广州-越秀区经验不限大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广东科慧信息服务股份有限公司',
                            pay: '7K-11K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州初妆网络科技有限公司',
                            pay: '12K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '小程序前端开发',
                            company: '广州市社区名片电子商务有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年中专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州龙腾出行网络科技股份有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端',
                            company: '广州招商帮传媒有限公司',
                            pay: '5K-10K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州市两棵树网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: '前端架构师',
                            company: '泉后(广州)生物科技有限公司',
                            pay: '20K-30K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端开发工程师（佛山包吃住）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'java开发工程师',
                            company: '广州华微明天软件技术有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Web开发工程师',
                            company: '广州市爱递思电子科技有限公司',
                            pay: '8K-13K',
                            demand: '广州-番禺区经验不限大专'
                        },
                        {
                            title: '前端开发工程师（双休·包吃）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州米烁贸易有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '中级前端工程师',
                            company: '广东道一信息技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州卓动信息科技有限公司',
                            pay: '12K-24K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发（天河 双休 急聘）',
                            company: '广州市晴川高新技术开发有限公司',
                            pay: '9K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州图匠数据科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-海珠区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市鼎盛动力发展有限公司',
                            pay: '8K-16K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '新余高新区金泰亚盛咨询有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端架构师',
                            company: '北京普元智慧数据技术有限公司',
                            pay: '15K-25K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: '前端开发工程师 五险一金+双休',
                            company: '广州玖富网络科技有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州富锐智能科技有限公司',
                            pay: '5K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发实习工程师',
                            company: '广州中国科学院软件应用技术研究所',
                            pay: '1.5K-2.5K',
                            demand: '广州-南沙区经验不限本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '安徽济云科技有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区5-10年大专'
                        },
                        {
                            title: '前端HTML5',
                            company: '国安较真(广东)科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '弗睿网络科技(广州)有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州南晋信息科技有限公司',
                            pay: '7K-9K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '云润大数据服务有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广东省建筑科学研究院集团股份有限公司',
                            pay: '5K-6K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '前端开发工程师（包吃住）',
                            company: '广州市贺氏办公设备有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端',
                            company: '广州招商帮传媒有限公司',
                            pay: '5K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '恒银金融科技股份有限公司',
                            pay: '8K-16K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'h5前端高级开发工程师包食宿20至30K',
                            company: '汇办网(深圳)科技有限公司',
                            pay: '20K-30K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州易达建信科技开发有限公司',
                            pay: '12K-18K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '汕头市佳创信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-增城区1-3年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州三人行壹佰教育科技有限公司北京分公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州广电运通金融电子股份有限公司',
                            pay: '13K-26K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端开发工程师（包吃）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端工程师 ',
                            company: '深圳市凹凸微科科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '中通服建设有限公司',
                            pay: '10K-20K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '前端开发工程师 （实习）',
                            company: '广州易达建信科技开发有限公司',
                            pay: '6K-10K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: '平台前端开发',
                            company: '广州秀才信息科技有限公司',
                            pay: '20K-40K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端',
                            company: '广东宏太智慧谷科技企业孵化器有限公司',
                            pay: '6K-8K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市中南民航空管通信网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '广州军信软件有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '三七互娱',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发（本科毕业）',
                            company: '广东聚源管业实业有限公司',
                            pay: '6K-8K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'PTBU-前端开发工程师（公共）',
                            company: '广州酷狗计算机科技有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'H5小游戏开发',
                            company: '广东快乐种子科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州天鹏计算机科技有限公司',
                            pay: '15K-20K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端开发工程师-广州-00560',
                            company: '中信网络科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端软件开发工程师',
                            company: '广州诺特软件开发有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州汇软信息科技有限公司',
                            pay: '5K-10K',
                            demand: '广州3-5年学历不限'
                        },
                        {
                            title: '前端实习生',
                            company: '广州尊斌计算机科技有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'webgis开发工程师',
                            company: '浙江臻善科技股份有限公司广东分公司',
                            pay: '10K-15K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '前端工程师 ',
                            company: '上海羿海信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '高薪HTML5前端开发实习生',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '3K-5K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: 'h5高级前端开发工程师',
                            company: '广州博征科技有限公司',
                            pay: '15K-30K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '微信商城开发工程师(前端)',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州无经验中专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '重庆气盖世网络科技有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京腾信卓越信息技术有限公司',
                            pay: '11K-13K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: '前端实习生',
                            company: '广东道一信息技术股份有限公司',
                            pay: '2K-4K',
                            demand: '广州-天河区1年以下本科'
                        },
                        {
                            title: '前端开发工程师实习生',
                            company: '广州传宇信息科技有限公司',
                            pay: '3K-4K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: '前端研发工程师',
                            company: '广州道然信息科技有限公司',
                            pay: '12K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '北明软件有限公司北京分公司',
                            pay: '13K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师(熟悉vue.js）-佛山-00397',
                            company: '中信网络科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '实习生（前端开发工程师）',
                            company: '广州诺特软件开发有限公司',
                            pay: '1.6K-2.1K',
                            demand: '广州无经验本科'
                        },
                        {
                            title: 'web开发工程师（广州-海珠区）',
                            company: '深圳市芒柠科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-海珠区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州昱康健康科技有限公司',
                            pay: '8K-10K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'java工程师',
                            company: '深圳市天上昀视觉科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'php前端开发',
                            company: '广州汛芯网络技术有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '中级前端工程师',
                            company: '北明软件有限公司北京分公司',
                            pay: '10K-13K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳兔展智能科技有限公司',
                            pay: '7K-13K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州地铁设计研究院股份有限公司',
                            pay: '12K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州创块科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端开发工程师（互联网教育，上市进行中）',
                            company: '广东德诚科教有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端中级工程师 - 驻点微信总部',
                            company: '广东道一信息技术股份有限公司',
                            pay: '9K-14K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东省电信规划设计院有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高薪招聘java实习生 ',
                            company: '广州市靖凯网络科技有限公司',
                            pay: '4.5K-6.5K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: '前端高级研发工程师',
                            company: '广州广大通电子科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '安徽济云科技有限公司',
                            pay: '13K-18K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '北明软件有限公司北京分公司',
                            pay: '10K-13K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州傲海计算机科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '北京金之盾信息技术有限公司',
                            pay: '8K-16K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东尚源信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区经验不限学历不限'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '三盟科技股份有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师（产品研发）',
                            company: '广东道一信息技术股份有限公司',
                            pay: '9K-17K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'H5前端助教',
                            company: '北京千锋互联科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: 'Python开发高级/资深工程师/专家',
                            company: '广州小鹏汽车科技有限公司',
                            pay: '20K-40K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'PHP工程师',
                            company: '深圳市云间网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发主管',
                            company: '广州传宇信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '比亦特网络科技(天津)有限公司',
                            pay: '5.5K-11K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广东南方数码科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '舜飞-高级前端开发',
                            company: '广州传宇信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东国地规划科技股份有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州易达建信科技开发有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师-周末双休',
                            company: '广东道一信息技术股份有限公司',
                            pay: '8K-13K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '佳都新太科技股份有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '开普云信息科技股份有限公司',
                            pay: '7K-12K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '棋牌前端工程师',
                            company: '广州网荐信息科技有限公司',
                            pay: '30K-50K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州百伦供应链科技有限公司',
                            pay: '8K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州易达建信科技开发有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'H5前端工程师',
                            company: '东讯(广州)信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '佳都新太科技股份有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '金蝶医疗软件科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: 'web开发（包吃 双休）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '资深前端工程师',
                            company: '上海锦江国际电子商务有限公司',
                            pay: '20K-40K',
                            demand: '广州-海珠区5-10年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京联合永道软件股份有限公司',
                            pay: '10K-18K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '前端开发工程师（20届实习生）',
                            company: '中信网络科技股份有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区无经验本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '中通服建设有限公司',
                            pay: '10K-15K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '资深前端开发工程师',
                            company: '树根互联技术有限公司',
                            pay: '20K-30K',
                            demand: '广州-海珠区5-10年本科'
                        },
                        {
                            title: '前端开发工程师（20届实习生）',
                            company: '中信网络科技股份有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区无经验本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海易立德信息技术股份有限公司深圳分公司',
                            pay: '10K-15K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: 'UC事业部-全栈技术专家（偏前端）',
                            company: '阿里巴巴集团',
                            pay: '薪资面议',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '名创优品股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'web后端开发工程师(双休 六险一金）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '8K-13K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州易初莲花连锁超市有限公司',
                            pay: '8K-10K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: 'H5前端开发工程师',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '10K-14K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'PTBU-前端开发工程师（短视频）',
                            company: '广州酷狗计算机科技有限公司',
                            pay: '15K-30K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'JS前端开发工程师',
                            company: '蓝盾信息安全技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '上海锦江国际电子商务有限公司',
                            pay: '18K-36K',
                            demand: '广州-海珠区3-5年本科'
                        },
                        {
                            title: 'HRIS前端工程师（H5）',
                            company: '深圳市德科信息技术有限公司广州分公司',
                            pay: '13K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京太比雅科技股份有限公司',
                            pay: '8K-13K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发经理',
                            company: '深圳市协卓软件有限公司',
                            pay: '20K-30K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广州仕邦人力资源有限公司',
                            pay: '10K-20K',
                            demand: '广州-黄埔区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海慧逊科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区经验不限大专'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广州市原象信息科技有限公司北京分公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发',
                            company: '广州市鸿亿防伪产品有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Php开发工程师',
                            company: '广州昭阳和牧场广告有限公司',
                            pay: '8K-10K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'java开发工程师',
                            company: '通联支付网络服务股份有限公司广东分公司',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title:
                                '软件开发实习生2-3人-待入職（全職，按月薪$4000-$6000計算） ',
                            company: '群进(广州)跨境电商有限公司',
                            pay: '4K-6K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: 'php前端开发',
                            company: '广州汛芯网络技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上海慧逊科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区经验不限大专'
                        },
                        {
                            title: '前端开发经理',
                            company: '深圳市协卓软件有限公司',
                            pay: '20K-30K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广州市原象信息科技有限公司北京分公司',
                            pay: '8K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发',
                            company: '广州市鸿亿防伪产品有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'Php开发工程师',
                            company: '广州昭阳和牧场广告有限公司',
                            pay: '8K-10K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'java开发工程师',
                            company: '通联支付网络服务股份有限公司广东分公司',
                            pay: '8K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title:
                                '软件开发实习生2-3人-待入職（全職，按月薪$4000-$6000計算） ',
                            company: '群进(广州)跨境电商有限公司',
                            pay: '4K-6K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: 'php前端开发',
                            company: '广州汛芯网络技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: '网上商城前端',
                            company: '广州贝斯町网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'WEB手机开发工程师番禺区',
                            company: '广州汇软信息科技有限公司',
                            pay: '5K-10K',
                            demand: '广州3-5年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州首信软件科技有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'HTML5开发工程师',
                            company: '广州创必承信息科技有限公司',
                            pay: '7K-9K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'java前端开发工程师',
                            company: '智标科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师(六险+双休）',
                            company: '广州铂威信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '广州博征科技有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广州数智网络科技有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州仪速安电子科技有限公司',
                            pay: '15K-25K',
                            demand: '广州5-10年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市天宇鸿通网络科技有限公司',
                            pay: '20K-40K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师番禺区',
                            company: '广州汇软信息科技有限公司',
                            pay: '8K-15K',
                            demand: '广州5-10年学历不限'
                        },
                        {
                            title: '前端工程师',
                            company: '深圳友德医科技有限公司',
                            pay: '12K-17K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '前端开发工程师（中级）',
                            company: '广州致讯信息科技有限责任公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: 'GIS开发工程师（广州）',
                            company: 'Esri中国',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州途优网络科技有限公司',
                            pay: '8K-16K',
                            demand: '广州-荔湾区1-3年大专'
                        },
                        {
                            title: '数字广东-中级前端工程师',
                            company: '腾云悦智科技(深圳)有限责任公司',
                            pay: '12K-18K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州致讯信息科技有限责任公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州宝露智能科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师（路桥所）',
                            company: '广东省建筑科学研究院集团股份有限公司',
                            pay: '10K-15K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市中通生化制品有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市昌松老年旅游服务有限公司',
                            pay: '5K-7K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师（three.js）',
                            company: '中山市创网达信息技术有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: 'php前端开发',
                            company: '广州汛芯网络技术有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '高级前端工程师',
                            company: '一一通用积分管理(深圳)有限公司',
                            pay: '10K-20K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州数园网络有限公司',
                            pay: '8K-12K',
                            demand: '广州-白云区1-3年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广州麦酥网络科技有限公司',
                            pay: '15K-25K',
                            demand: '广州5-10年大专'
                        },
                        {
                            title: 'GIS前端开发工程师',
                            company: '广州致讯信息科技有限责任公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: '前端开发工程师-广州',
                            company: '北京韦尔科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳达普信科技有限公司',
                            pay: '6.5K-11K',
                            demand: '广州-花都区1-3年大专'
                        },
                        {
                            title: '前端开发工程师（技术部）',
                            company: '广州亦云信息技术股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广州乾恒投资管理有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东南方网络电视传媒有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州云印信息科技有限公司',
                            pay: '6K-7.5K',
                            demand: '广州-黄埔区经验不限大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '北京科云互联科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州南合信息技术有限公司',
                            pay: '6K-8K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州龙兴通科技有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: 'java开发工程师',
                            company: '广州微声技术有限公司',
                            pay: '8K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '广州阳光耐特电子有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区3-5年大专'
                        },
                        {
                            title: '网站前端',
                            company: '广东中大职业培训学院',
                            pay: '6K-8K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '软件开发工程师（前端）',
                            company: '广州市中通生化制品有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东团博科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年学历不限'
                        },
                        {
                            title: '前端工程师开发',
                            company: '广州吉科电气设备有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州迅易科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州吉科电气设备有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州至拓网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市万齐网络科技有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端中级工程师（双休）',
                            company: '广州智数信息技术有限公司',
                            pay: '9K-13K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师[广州-白云区]',
                            company: '广东卓商网络科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: '前端工程师（7-10k+五险一金）',
                            company: '广州友效达网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州思可企业管理咨询有限公司',
                            pay: '15K-20K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '杭州荣鼎科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州万物道文化发展有限公司',
                            pay: '8K-16K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州中大凯旋电子科技有限公司',
                            pay: '10K-20K',
                            demand: '广州5-10年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州逗号科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '中级前端开发工程师',
                            company: '北京科云互联科技有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市博咖网络科技有限责任公司',
                            pay: '6K-10K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州冰鸟网络科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端工程师',
                            company: '北京易帕克科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东致学信息科技有限责任公司',
                            pay: '8K-10K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: 'react前端开发',
                            company: '广州龙兴通科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市九安智能技术股份有限公司',
                            pay: '6K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市森锐科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州汛芯网络技术有限公司',
                            pay: '6K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端架构师',
                            company: '广州致讯信息科技有限责任公司',
                            pay: '15K-20K',
                            demand: '广州-黄埔区3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州雪汉信息科技有限公司',
                            pay: '4.5K-6.5K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '赛业(苏州)生物科技有限公司',
                            pay: '7K-9K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: '行啊网络科技公司招聘前端工程师',
                            company: '广州方行教育投资控股集团有限公司 ',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东黑猫信息科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-白云区3-5年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广东鸿正软件技术有限公司',
                            pay: '4K-7K',
                            demand: '广州经验不限中专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州里格信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '海南腾鼎科技有限公司',
                            pay: '6K-12K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '南宁智诚顺人力资源有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区1-3年中专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州丽晶软件科技股份有限公司',
                            pay: '9K-13K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '海闻科技有限公司',
                            pay: '15K-20K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '南京华苏科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州济达信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州-越秀区1-3年大专'
                        },
                        {
                            title: '高级程序员(营运产品)',
                            company: '广东东方思维科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: '包住WEB手机开发程序员',
                            company: '广州汇软信息科技有限公司',
                            pay: '3K-6K',
                            demand: '广州1-3年学历不限'
                        },
                        {
                            title: '前端',
                            company: '广州掌昆网络科技有限公司',
                            pay: '5K-6K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'java前端开发工程师',
                            company: '广州莫昆信息科技有限公司',
                            pay: '4K-8K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端软件工程师',
                            company: '广东浩迪创新科技有限公司',
                            pay: '8K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '中高级Java开发工程师 ',
                            company: '广东铭太信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: 'java软件开发工程师（中级）',
                            company: '广州南天电脑系统有限公司',
                            pay: '10K-16K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '网页前端开发工程师',
                            company: '广东经纬天地科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东启动子信息科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '海闻科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-天河区1年以下本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州同盟天一科技有限公司',
                            pay: '8K-12K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端设计工程师',
                            company: '广州市上超医疗器械有限公司',
                            pay: '6K-9K',
                            demand: '广州-天河区经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州永瑞控股集团有限公司',
                            pay: '6K-10K',
                            demand: '广州-越秀区经验不限学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '东莞时谛智能科技有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳北纬三十度信息科技有限公司',
                            pay: '20K-40K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: 'Web开发工程师',
                            company: '广州亿力咨询服务有限公司',
                            pay: '8K-15K',
                            demand: '广州-天河区1年以下本科'
                        },
                        {
                            title: '前端开发工程',
                            company: '广东采联采购科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东精标科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州欢拓网络科技有限公司',
                            pay: '7K-13K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端工程师（微信/小程序）',
                            company: '广州市立秋电子科技有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '网页前端（五险一金+双休+午餐）',
                            company: '广州卓绝智能科技有限公司',
                            pay: '4.5K-9K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州大医精诚生物技术有限公司',
                            pay: '10K-15K',
                            demand: '广州5-10年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州极有汇科技有限公司',
                            pay: '6K-12K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广东云创宏扬科技发展有限公司',
                            pay: '8K-13K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市品高软件股份有限公司',
                            pay: '7K-14K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '南京烽火星空通信发展有限公司',
                            pay: '8K-16K',
                            demand: '广州-越秀区1-3年本科'
                        },
                        {
                            title: '前端开发工程师（校园招聘）',
                            company: '招商华软信息有限公司',
                            pay: '5K-10K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: 'web工程师（App&小程序开发）',
                            company: '广州颜膜生物科技有限公司',
                            pay: '6K-10K',
                            demand: '广州-白云区1-3年本科'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '广州德汇贸易有限公司',
                            pay: '4K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州易洁家电清洗有限公司',
                            pay: '10K-20K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'h5前端开发工程师',
                            company: '广州市中芯动漫电子设备有限责任公司',
                            pay: '4K-7K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '上饶市聚微星科技有限公司',
                            pay: '20K-40K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州美泰海外医疗服务有限公司',
                            pay: '6K-10K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '江西久翔工程机械有限公司',
                            pay: '8K-10K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: 'wed前端',
                            company: '广州市鸿圣科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: 'JTRWEBLIMITED',
                            pay: '6K-9K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '网页前端工程师',
                            company: '广州益贝儿信息科技有限公司',
                            pay: '4K-6K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州麟克软件有限公司',
                            pay: '7.5K-9K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发实习生',
                            company: '广东南方网络电视传媒有限公司',
                            pay: '2.9K-3K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州爱拍网络科技有限公司',
                            pay: '7K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'Java开发工程师',
                            company: '广州和普乐健康科技有限公司',
                            pay: '10K-16K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师（懂美工）',
                            company: '广州济达信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发',
                            company: '广州致仪计算机软件科技有限公司',
                            pay: '4K-6K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市世加网软件开发有限责任公司',
                            pay: '6K-8K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东智慧电子信息产业股份有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: 'HTML5前端工程师',
                            company: '动网先锋网络科技有限公司',
                            pay: '5K-7K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '小程序前端开发工程师',
                            company: 'Gworld(平潭)互联网科技有限公司',
                            pay: '10K-15K',
                            demand: '广州-番禺区3-5年大专'
                        },
                        {
                            title: 'JAVA软件工程师',
                            company: '广州朗晟信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端H5实习生',
                            company: '广州卓腾科技有限公司',
                            pay: '3.5K-4.5K',
                            demand: '广州-天河区无经验本科'
                        },
                        {
                            title: 'Web开发主管（管理岗）',
                            company: '广州锦行网络科技有限公司',
                            pay: '9K-18K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市傲骏网络科技有限公司',
                            pay: '4K-8K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州博瑞信息技术股份有限公司湖北分公司',
                            pay: '8K-12K',
                            demand: '广州-白云区1-3年本科'
                        },
                        {
                            title: 'web后端开发工程师',
                            company: '广东团博科技有限公司',
                            pay: '5K-10K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端主管',
                            company: '广州颜膜生物科技有限公司',
                            pay: '8K-12K',
                            demand: '广州-白云区5-10年本科'
                        },
                        {
                            title: '前端软件工程师',
                            company: '广州麦酥网络科技有限公司',
                            pay: '8K-10K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州迅易科技有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '诚聘小程序前端开发工程师',
                            company: '广州米枫网络有限公司',
                            pay: '4K-8K',
                            demand: '广州-番禺区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市景丰网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'Web开发工程师',
                            company: '广州誉宸信息科技有限公司',
                            pay: '7K-12K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '莲藕健康药业(广州)有限公司',
                            pay: '9K-12K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师中高级',
                            company: '广州铭医在线健康管理有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州市九安智能技术股份有限公司',
                            pay: '10K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市元源华高科技有限公司',
                            pay: '20K-40K',
                            demand: '广州-黄埔区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州八百方信息技术有限公司',
                            pay: '8K-11K',
                            demand: '广州1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东卓商网络科技有限公司',
                            pay: '2K-4K',
                            demand: '广州-天河区经验不限大专'
                        },
                        {
                            title: '小程序前端开发',
                            company: '广州市景丰网络科技有限公司',
                            pay: '4K-6K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广州伍易科技有限公司',
                            pay: '8K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州群智企业管理咨询有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '佛山宗峰网络科技有限公司',
                            pay: '6K-8K',
                            demand: '广州-天河区1-3年学历不限'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州格灵信息科技有限公司',
                            pay: '6K-8K',
                            demand: '广州1年以下大专'
                        },
                        {
                            title: '前端系统架构师',
                            company: '上海携银信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区5-10年本科'
                        },
                        {
                            title: '前端开发工程师（vue/react）',
                            company: '广州盛道贸易有限公司',
                            pay: '10K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端工程师',
                            company: '广州众通网络科技有限公司',
                            pay: '15K-25K',
                            demand: '广州经验不限本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州蓝景信息技术有限公司',
                            pay: '2K-4K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: 'GIS前端开发工程师',
                            company: '广州数鹏通科技有限公司',
                            pay: '15K-18K',
                            demand: '广州-天河区3-5年本科'
                        },
                        {
                            title: 'Web APP开发工程师',
                            company: '云易网络科技(广州)有限公司',
                            pay: '10K-15K',
                            demand: '广州1-3年大专'
                        },
                        {
                            title: '前端工程师',
                            company: '广州市长远软件开发有限公司',
                            pay: '4K-8K',
                            demand: '广州经验不限学历不限'
                        },
                        {
                            title: 'Vue前端工程师',
                            company: '广州天儒供应链管理有限公司',
                            pay: '8K-10K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东阅云科技有限公司',
                            pay: '8K-10K',
                            demand: '广州3-5年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广州亦云信息技术股份有限公司',
                            pay: '15K-20K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东华三行工程机械有限公司',
                            pay: '8K-15K',
                            demand: '广州-黄埔区1-3年本科'
                        },
                        {
                            title: '前端高级开发工程师',
                            company: '乐行(广州)汽车贸易有限公司',
                            pay: '15K-25K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '浩沅志海(广东)云科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '深圳市润科网络技术有限公司',
                            pay: '20K-40K',
                            demand: '广州-白云区1-3年大专'
                        },
                        {
                            title: '前端开发工程师',
                            company: '郑州大咖信息科技有限公司',
                            pay: '10K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '网页前端设计师',
                            company: '广州银速电子科技有限公司',
                            pay: '4K-6K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东知一数据有限公司',
                            pay: '9K-11K',
                            demand: '广州-海珠区3-5年大专'
                        },
                        {
                            title: '前端开发（高级）',
                            company: '广州越维信息科技有限公司',
                            pay: '15K-20K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '急招HTML5开发实习生+项目提成',
                            company: '广州数字桥网络技术有限公司',
                            pay: '4K-6K',
                            demand: '广州经验不限大专'
                        },
                        {
                            title: '高薪招聘java实习生',
                            company: '广州数字桥网络技术有限公司',
                            pay: '3.5K-5.5K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: 'h5开发助理+双休+五险一金',
                            company: '广州数字桥网络技术有限公司',
                            pay: '3K-5K',
                            demand: '广州无经验大专'
                        },
                        {
                            title: '高级前端工程师',
                            company: '广州若羽臣科技股份有限公司',
                            pay: '10K-15K',
                            demand: '广州-天河区1-3年大专'
                        },
                        {
                            title: 'java开发工程师',
                            company: '深圳市凹凸微科科技有限公司',
                            pay: '13K-18K',
                            demand: '广州-天河区3-5年大专'
                        },
                        {
                            title: '高级前端工程师（双休）',
                            company: '广州商脉网络科技有限公司',
                            pay: '12K-15K',
                            demand: '广州3-5年本科'
                        },
                        {
                            title: '高级前端开发工程师',
                            company: '广州健新科技股份有限公司',
                            pay: '10K-20K',
                            demand: '广州-天河区1-3年本科'
                        },
                        {
                            title: '前端开发工程师',
                            company: '广东众望通科技股份有限公司',
                            pay: '8K-10K',
                            demand: '广州1-3年大专'
                        }
                    ]
                },
                status: 200
            };
            if (status === 200) {
                const { title, info } = data;
                this.sou.list = info;
                this.sou.title = title;
            }
        }
    }
};
</script>

<style scoped lang="less">
.Recruit {
    width: 100%;
    height: 100%;
}
</style>
