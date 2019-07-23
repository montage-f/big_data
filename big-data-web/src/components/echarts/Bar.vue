/**Created by MonTage_fz on 2019/7/23**/
<!--柱状图-->
<template>
    <div class="Bar"></div>
</template>

<script>
import Pie from './Pie';

export default {
    name: 'Bar',
    extends:Pie,
    components: {},
    data() {
        return {};
    },
    mounted() {
        let pie = this.$refs.Pie;
        let myChart = this.$echarts.init(pie);
        const option = {
            title: {
                text: '同名数量统计',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: this.data.map((v) => v.name)
            },
            series: [
                {
                    name: '薪资范围',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: this.data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    computed: {},
    methods: {}
};
</script>

<style scoped lang="less">
.Bar {
}
</style>
