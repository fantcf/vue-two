<template>
    <el-container class="home-container">
        <el-header>
            <div class="home-title">
                <img src="../assets/logo.png">
                <span>前端可视化平台</span>
            </div>
            <el-button @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <el-aside :width="isCollapse ? '64px' : '250px'">
                <div class="toggle-button" @click="isCollapse = !isCollapse">|||</div>
                <MenuList
                  :menulist="menulist"
                  :is-collapse="isCollapse"
                  :bg-color="bgColor"
                  :tx-color="txColor"
                  :active-text-color="activeTextColor"
                  :collapse-transition="collapseTransition"
                  @changePath="chanagePath($event)" />
            </el-aside>
            <el-main>
                <template v-for="tab in tabList">
                    <head-tabs :tab-list="tab.tabItem" v-if="tab.pathRoute === currentPath">
                        <div slot="main">
                            <router-view/>
                        </div>
                    </head-tabs>
                    <div v-else>
                        <router-view/>
                    </div>
                </template>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="js">
import MenuList from '@/components/common/MenuList/MenuList.vue'
import {menulist} from '@/models/Home/menulist'
import headTabs from '@/components/common/HeadTabs/HeadTabs.vue'
import { tabList } from '@/models/Home/tabList'
export default {
    name: 'home',
    components: {
        MenuList,
        headTabs
    },
    data() {
        return {
            isCollapse: false,
            menulist: '',
            bgColor: 'white', 
            txColor: 'black', 
            activeTextColor: '#409EFF',
            collapseTransition: false,
            tabList: '',
            currentPath: ''
        }
    },
    created() {
        this.menulist = menulist
        this.tabList = tabList
    },
    methods: {
        logout() {
            this.$router.push('/')
        },
        chanagePath(path) {
            this.currentPath = path;
            console.log(path);
        }
    },
    computed: {
        getPath() {
            return menuItem => menuItem.path ? `/${menuItem.path}` : `${menuItem.id} `
        },
        // getBtnContents() {
        //     return 
        // }
    }
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
}
.el-header {
    background-color: #1e90ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .home-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: white;
        img {
        width: 50px;
        }
        span {
            margin-left: 10px;
        }
    }
}
.el-aside {
    background-color: white;
    .toggle-button {
        background-color: #c3c4c9;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 16px;
        color: white;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
}
</style>