<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/homePage'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>Test</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card class="container">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click='addUsers'>添加用户</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-table :data="usersData" style="width: 100%" border highlight-current-row>
                    <el-table-column type="index" width="50" label="#"></el-table-column>
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="email" label="邮箱"></el-table-column>
                    <el-table-column prop="phone" label="电话"></el-table-column>
                    <el-table-column prop="role" label="角色"></el-table-column>
                    <el-table-column label="状态">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.state"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180px">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                            <el-tooltip content="分配角色" placement="top">
                                <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-pagination layout="total, prev, pager, next, sizes" :total="100" :page-size="10" :page-sizes="[100, 200, 300]"></el-pagination>
        </el-card>

        <el-dialog title="修改用户" :visible.sync="editDialogVisible" >
            <el-form :model='addForm' :rules="addFormRules" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                    <el-input v-model="addForm.phone"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="closeDialog">取消</el-button>
                <el-button type="primary" @click="editUser">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {usersData} from '@/models/Test/users.js'
import {checkEmail, checkPhone} from '@/models/common/utils.js' 

export default {
    name: 'users',
    data() {
        return {
            addForm: {
                name: '',
                password: '',
                email: '',
                phone: ''
            },
            addFormRules: {
                name: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 3, max: 10, message: '用户名长度应在3~10个字符之间'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 3, max: 10, message: '密码长度应在3~10个字符之间'}
                ],
                email: [
                    {required: true, message: '请输入邮箱', trigger: 'blur'},
                    {validator: checkEmail, trigger: 'blur'}
                ],
                phone: [
                    {required: true, message: '请输入手机号', trigger: 'blur'},
                    {validator: checkPhone, trigger: 'blur'}
                ]
            },
            userData: [],
            editDialogVisible: false,
            usersData: {}
        }
    },
    created() {
        this.usersData = usersData
    },
    methods: {
        addUsers() {
            this.editDialogVisible = true
        },
        closeDialog() {
            this.editDialogVisible = false
        },
        editUser() {
            this.editDialogVisible = false
        }
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    min-height: 300px;
    margin-top: 20px;
}
</style>