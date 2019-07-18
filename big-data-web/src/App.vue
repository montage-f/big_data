<template>
    <div id="App">
        <header>
            <div class="logo">
                我是登录图形
            </div>
            <ul>
                <li v-for="(item, index) of routes" :key="index">
                    <router-link :to="item.path">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </header>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {},
    watch: {},
    methods: {},
    computed: {
        routes() {
            return this.$router.options.routes.filter((v) => !v.isHide);
        }
    },
    mounted() {}
};
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    height: 100%;
}
a {
    text-decoration: none;
    color: black;
}
li {
    list-style: none;
}

#App {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
</style>
<style scoped lang="less">
@import './App.less';
</style>
