/**Created by montage_fz on 2019-07-18**/
<template>
    <div class="BaiDu">
        <header>
            <el-button>导出</el-button>
        </header>
        <div class="content">
            <el-table
                v-loading="loading"
                style="width: 100%"
                border
                max-height="500"
                :data="newsList"
            >
                <el-table-column :label="newTitle" align="center">
                    <el-table-column
                        prop="title"
                        label="标题"
                    ></el-table-column>
                    <el-table-column prop="href" label="链接">
                        <template scope="scope">
                            <a :href="scope.row.href">{{ scope.row.href }}</a>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaiDu',
    components: {},
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
    padding: 10px;
    box-sizing: border-box;
    .content {
        a {
            color: #409eff;
        }
    }
}
</style>
