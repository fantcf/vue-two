<template>
    <div id="myHeader">
        <el-input placeholder="请输入你的任务名称，按回车键确认" v-model.trim="value" @change="addTodo"/>
    </div>
</template>

<script>
import { nanoid } from "nanoid"
export default {
    name: 'MyHeader',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        addTodo() {
            const obj = {
                id: nanoid(),
                title: this.value,
                done: false
            }
            this.value = ''
            this.$emit('addTodo', obj)
        }
    }
}
</script>

<style lang="less" scoped>
#myHeader {
    width: 80%;
    margin-bottom: 10px;
}
</style>