<template>
    <el-container class="home_container">
        <el-header>
            <div>
                <img src="../assets/logo.png">
                <span>vue2自测平台</span>
            </div>
            <el-button type="info" plain @click="logout">退出</el-button>
        </el-header>

        <el-container>
            <el-aside>
                <div class="toggle_btn">|||</div>
                <el-menu
                  :collpase="collpase"
                  background-color="#fff"
                  text-color="#ccc"
                  active-text-color="#1e90ff"
                >
                </el-menu>
            </el-aside>
            <el-main></el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            collpase: false
        }
    },
    methods: {
        logout() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="less">
.home_container {
    height: 100%;
    background-color: #eaedf1;
}
.el-header {
    width: 100%;
    background-color: #1e90ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    color: white;
    font-size: 18px;
    div {
        display: flex;
        align-items: center;
        img {
            width: 40px;
            margin-left: 10px;
        }
        span {
            margin-left: 10px;
        }
    }
}
.el-aside {
    background-color: white;
    width: 270px !important;
    .toggle_btn {
        width: 100%;
        height: 20px;
        font-size: 14px;
        background-color: #c3c4c9;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
}
</style>