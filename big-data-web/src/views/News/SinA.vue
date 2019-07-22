/**Created by montage_fz on 2019-07-18**/
<template>
    <div class="SinA">
        <NewsTable
            :loading="loading"
            :newsList="newsList"
            :newTitle="newTitle"
        />
    </div>
</template>

<script>
import NewsTable from '../../components/NewsTable';

export default {
    name: 'SinA',
    components: {
        NewsTable
    },
    data() {
        return {
            loading: false,
            newsList: [],
            newTitle: ''
        };
    },
    async created() {
        this.loading = true;
        let {
            data: { info, title },
            status
        } = await this.$axios.get('/api/news/sina');
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
.SinA {
}
</style>
