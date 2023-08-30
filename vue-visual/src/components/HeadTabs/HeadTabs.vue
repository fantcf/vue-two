<template>
    <el-tabs>
        <el-tab-pane>
            <span slot="label" :route="{path: 'roles'}" router @click="$router.push('/roles')"><i class="el-icon-date">我的行程</i></span>
            我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: 'headTabs',
    data() {
        return {}
    }
}
</script>