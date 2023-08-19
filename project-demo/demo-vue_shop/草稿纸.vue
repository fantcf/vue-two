<template>
    <el-container>
        <el-header>
            <div>
                <img>
                <span>电商后台管理系统</span>
            </div>
            <el-button></el-button>
        </el-header>
        <el-container>
            <el-aside>
                <div>|||</div>
                <el-menu
                  background-color="white"
                  text-color="black"
                  active-text-color="skyblue"
                  :collapse="true"
                  :collpase-transition="false"
                  router
                  unique-opened
                  :default-active="activePath"
                >
                    <el-submenu v-for="item in menulist" :index="item.id + ''"  :key="item.id">
                        <template slot="title">
                            <i></i>
                            <span>一级菜单名</span>
                        </template>
                        <el-menu-item>
                            <i></i>
                            <span>二级菜单名</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
.home-container {
    height: 100%:
}
.el-header {
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
    padding-left: 0;
    > div {
        display: flex;
        align-items: center;
        img {
            width: 12%;
            margin-left: 10px;
        }
        span {
            margin-left: 15px;
        }
    }
}
.el-aside {
    background-color: white;
    .toggle-button {
        background-color: antiquewhite;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
    }
}
</style>