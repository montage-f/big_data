/**Created by MonTage_fz on 2019/7/23**/
<!--柱状图-->
<template>
    <div class="Bar" ref="Bar" :style="styleInfo"></div>
</template>

<script>
import Pie from './Pie';

export default {
    name: 'Bar',
    extends: Pie,
    components: {},
    data() {
        return {};
    },
    mounted() {
        this.init();
    },
    computed: {
    },
    methods: {
        init() {
            let Bar = this.$refs.Bar;
            let myChart = this.$echarts.init(Bar);
            const option = {
                title: {
                    ...this.title
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.data.map((v) => v.name),
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '岗位个数',
                        type: 'bar',
                        barWidth: '60%',
                        data: this.data.map((v) => v.value)
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
};
</script>

<style scoped lang="less">
.Bar {
}
</style>
