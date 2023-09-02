<template>
    <el-tabs type="border-card" v-model="currentTab"  @tab-click="changeRoute">
        <el-tab-pane v-for="tab in tabList" :key="tab.pathRoute" :name="tab.pathRoute">
            <span slot="label" ><i :class="tab.className"></i>{{ tab.tabLabel }}</span>
            <slot name="main"></slot>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: 'headTabs',
    props: ['tabList'],
    data() {
        return {
            currentTab: 'users'
        }
    },
    created() {
    },
    methods: {
        changeRoute() {
            this.$router.push('/'+ this.currentTab)
        }
    }
}
</script>

<style>
.el-tabs {
    height: 100%;
}
</style>