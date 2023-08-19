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
                <div class="toggle-button" @click="toggle">|||</div>
                <MenuList
                  ref="MenuList"
                  :menulist="menulist"
                  :is-collapse="isCollapse"
                  :bg-color="bgColor"
                  :tx-color="txColor"
                  :active-text-color="activeTextColor"
                  :collapse-transition="collapseTransition" />
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="js">
import MenuList from '@/components/MenuList/MenuList.vue'
import {menulist} from '@/models/Home/menulist'
export default {
    name: 'home',
    components: {
        MenuList
    },
    data() {
        return {
            isCollapse: false,
            menulist: menulist,
            bgColor: 'white', 
            txColor: 'black', 
            activeTextColor: '#409EFF',
            collapseTransition: false
        }
    },
    created() {
        this.menulist = menulist
    },
    methods: {
        logout() {
            this.$router.push('/')
        },
        toggle() {
            this.isCollapse = !this.isCollapse
            console.log();
            // this.$refs.MenuList.toggle()
        }
    },
    computed: {
        getPath() {
            return menuItem => menuItem.path ? `/${menuItem.path}` : `${menuItem.id} `
        }
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