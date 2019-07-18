<template>
    <div id="app">
        <header>
            {{ routes }}
        </header>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    components: {},
    watch: {
        $route(a) {
            console.log(a);
        }
    },
    methods: {},
    computed: {
        routes() {
            const routes = this.$router.options.routes;
            return routes;
        }
    },
    mounted() {
        console.log(this.$router);
    }
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

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
</style>
<style scoped lang="less">
#app {
    display: flex;
    flex-direction: column;

    header {
        border-bottom: 1px solid #ccc;
        height: 60px;
    }

    .content {
        flex: 1;
    }
}
</style>
