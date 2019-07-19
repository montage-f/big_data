<template>
    <div class="News">
        <div class="left">
            <el-menu :default-active="$route.path">
                <SubMenu :routes="routes" :parentPath="path"></SubMenu>
            </el-menu>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SubMenu from '../components/SubMenu';
import asideInfo from '../router/asideInfo';

export default {
    name: 'News',
    components: {
        SubMenu
    },
    computed: {
        routes() {
            return asideInfo.find((v) => v.path === this.path).children;
        },
        path() {
            return this.$route.matched[0].path;
        }
    },
    methods: {}
};
</script>
<style scoped lang="less">
.News {
    display: flex;
    width: 100%;
    height: 100%;

    .left {
        overflow: hidden;
        width: 180px;
        height: 100%;
        font-size: 12px;
        border-right: 1px solid #ccc;
        box-sizing: border-box;

        .el-menu {
            border-right: none;
        }
    }

    .right {
        flex: 1;
    }
}
</style>
