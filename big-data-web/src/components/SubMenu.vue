/**Created by MonTage_fz on 2019/7/19**/
<template>
    <div class="SubMenu">
        <template v-for="item of router">
            <el-submenu
                v-if="item.children"
                :key="item.path"
                :index="index(item.path)"
            >
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <router-link tag="span" :to="toPath(item.path)">
                        {{ item.name }}
                    </router-link>
                </template>
                <SubMenu :routes="item.children" />
            </el-submenu>
            <el-menu-item v-else :key="item.path" :index="index(item.path)">
                <i class="el-icon-menu"></i>
                <router-link tag="span" slot="title" :to="toPath(item.path)">
                    {{ item.name }}
                </router-link>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
    name: 'SubMenu',
    props: {
        routes: {
            type: Array,
            required: true
        },
        parentPath: {
            type: String
        }
    },
    components: {},
    data() {
        return {};
    },
    created() {},
    computed: {
        router() {
            return this.filterRouter(this.routes);
        }
    },
    methods: {
        filterRouter(arr) {
            return arr.filter((item) => {
                if (item.children) {
                    item.children = this.filterRouter(item.children);
                }
                return !item.isHide;
            });
        },
        toPath(path) {
            return path;
        },
        index(path) {
            return `${this.parentPath}/${path}`;
        }
    }
};
</script>

<style scoped lang="less">
.SubMenu {
    .el-submenu {
        .el-menu-item {
            span {
                display: inline-block;
                width: 100%;
            }
        }
    }

    .el-menu-item {
        span {
            display: inline-block;
            width: 100%;
        }
    }
}
</style>
