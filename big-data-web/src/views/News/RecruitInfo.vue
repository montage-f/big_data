/**Created by MonTage_fz on 2019/7/22**/
<template>
    <div class="Recruit">
        <!--        智联 前端 招聘信息-->
        <Bar
            :data="payRate(sou.list)"
            :styleInfo="styleInfo"
            :title="title(sou.title)"
        ></Bar>
        <Bar
            :data="payRate(laGou.list)"
            :styleInfo="styleInfo"
            :title="title(laGou.title)"
        ></Bar>
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
            },
            laGou: {
                list: [],
                title: ''
            }
        };
    },
    created() {
        this.getSou();
        this.getLaGou();
    },
    computed: {
        // 薪资占比
        styleInfo() {
            return {
                width: '100%',
                height: '400px'
            };
        }
    },
    methods: {
        // 获取 智联web 信息
        async getSou() {
            let { data, status } = await this.$axios.get(
                '/api/RecruitInfo/sou'
            );
            if (status === 200) {
                const { title, info } = data;
                this.sou.list = info;
                this.sou.title = title;
            }
        },
        async getLaGou() {
            let { data, status } = await this.$axios.get(
                '/api/RecruitInfo/laGou'
            );
            if (status === 200) {
                const { title, info } = data;
                this.laGou.list = info;
                this.laGou.title = title;
            }
        },
        payRate(list) {
            const pay = Array.from(new Set(list.map((item) => item.pay))).map(
                (v) => ({ name: v })
            );

            pay.forEach((k) => {
                let i = 1;
                list.forEach((p) => {
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
        title(title) {
            return {
                text: title
            };
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
