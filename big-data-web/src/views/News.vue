<template>
    <div class="News">
        <div class="left">
            <ul>
                <li v-for="(item, index) of routes" :key="index">
                    <router-link :to="path + '/' + item.path">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'News',
    computed: {
        routes() {
            let routes = this.$router.options.routes;
            let path = this.$route.matched[0].path;
            return routes.find((item) => item.path === path).children;
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
        width: 180px;
        height: 100%;
    }
    .right {
        flex: 1;
    }
}
</style>
