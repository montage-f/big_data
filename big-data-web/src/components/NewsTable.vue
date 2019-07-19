/**Created by MonTage_fz on 2019/7/19**/
<template>
    <div class="NewsTable">
        <el-table
            v-loading="loading"
            style="width: 100%"
            border
            max-height="500"
            :data="newsList"
        >
            <el-table-column :label="newTitle" align="center">
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="href" label="链接">
                    <template scope="scope">
                        <a :href="scope.row.href">{{ scope.row.href }}</a>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'NewsTable',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        newsList: {
            type: Array,
            default: () => []
        },
        newTitle: {
            type: String,
            default: ''
        }
    },
    components: {},
    data() {
        return {};
    },
    created() {},
    computed: {},
    methods: {}
};
</script>

<style scoped lang="less">
.NewsTable {
    a {
        color: #409eff;
    }
}
</style>
