/**Created by montage_fz on 2019-07-18**/
<template>
    <div class="BaiDu">
        <header></header>
        <div class="content">
            <NewsTable
                :loading="loading"
                :newsList="newsList"
                :newTitle="newTitle"
            ></NewsTable>
        </div>
    </div>
</template>

<script>
import NewsTable from '../../components/NewsTable';

export default {
    name: 'BaiDu',
    components: {
        NewsTable
    },
    data() {
        return {
            newsList: [],
            newTitle: '',
            loading: false
        };
    },
    async created() {
        this.loading = true;
        let {
            data: { info, title },
            status
        } = await this.$axios.get('/api/news/baiDu');
        if (status === 200) {
            this.newsList = info;
            this.newTitle = title;
        }
        this.loading = false;
    },
    computed: {},
    methods: {}
};
</script>

<style scoped lang="less">
.BaiDu {
    box-sizing: border-box;
}
</style>
