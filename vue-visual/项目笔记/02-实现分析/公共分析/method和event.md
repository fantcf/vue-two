1. 区别
  1.1 method：即方法，可以由父组件使用，如：this.$refs.myInput.focus();
  1.2 event：即事件，由子组件触发，如：<input @input='add' />

2. 举例
<template>
    <el-input v-model='input' ref='myInput' @input='add'/>
    <p>{{message}}</p>
    <el-button @click='here'>focus</el-button>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        here() {
            this.$refs.myInput.focus();
        },
        add() {
            this.message += 1
        }
    }
}
</script>

3. 示例说明
  3.1 methods：如上methods中的"here"函数中，当前组件可以触发<el-input>组件中的focus方法；
  3.2 events：如上<el-input @input='add'>中的“@input”，这<el-input>自身的事件，经由触发<el-input>自身触发；
  3.3 总结：methods（不经由自身触发）；events（经由自身触发）