/**Created by MonTage_fz on 2019/7/23**/
<!--饼形图-->
<template>
    <div class="Pie" ref="Pie" :style="styleInfo"></div>
</template>

<script>
export default {
    name: 'Pie',
    props: {
        styleInfo: {
            type: Object,
            default: () => ({
                width: '600px',
                height: '600px'
            })
        },
        data: {
            type: Array,
            default: () => []
        },
        title: {
            type: Object,
            default: () => ({})
        },
        grid: {
            type: Object,
            default: () => ({})
        }
    },
    components: {},
    data() {
        return {};
    },
    mounted() {
        this.init();
    },
    computed: {},
    watch: {
        data() {
            this.init();
        }
    },
    methods: {
        init() {
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
        }
    }
};
</script>

<style scoped lang="less">
.Pie {
    width: 100px;
    height: 100px;
}
</style>
