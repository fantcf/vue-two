<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avater_box">
                <img src="../assets/logo.png">
            </div>
            <el-form ref="loginRef" :rules="loginFormRules" :model="loginForm" class="login_form">
                <el-form-item prop="username">
                    <el-input type="text" placeholder="请输入账户名" v-model="loginForm.username" prefix-icon="iconfont icon-user"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="text" placeholder="请输入密码" v-model="loginForm.password" show-password prefix-icon="iconfont icon-3702mima"/>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            loginFormRules: {
                'username': [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 3, max: 10, message: '请输入3-10位的用户名', trigger: 'blur'}
                ],
                'password': [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 3, max: 10, message: '请输入3-10位的密码', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        resetForm() {
            this.$refs.loginRef.resetFields();
        },
        login() {
            this.$refs.loginRef.validate(valid => {
                if (!valid) return;
                this.$message.success('登录成功！');
                this.$router.push('/home')
            })
        }
    }
}
</script>

<style lang="less">
.login_container {
    height: 100%;
    background-color: #005eb8;
}
.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
}
.avater_box {
    width: 120px;
    height: 120px;
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 10px #fff;
    img {
        width: 100%;
        background-color: #eeeeee;
        border-radius: 50%;
    }
}
.login_form {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    padding: 0 20px;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>