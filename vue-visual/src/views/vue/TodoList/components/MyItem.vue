<template>
    <div id="MyItem">
        <div class="checkItem">
            <el-checkbox v-show="!todo.isEdit" :value="todo.done" @change="handleChangeStatus">{{ todo.title }}</el-checkbox>
            <el-input ref="inputTitle" type="text" v-show="todo.isEdit" v-model.trim="editVal" size="mini" @blur="handelBlur(todo)"/>
        </div>
        <div class="btns">
            <el-button type="primary" size="mini" v-show="!todo.isEdit" @click="handleEdit(todo)">修改</el-button>
            <el-button type="danger" size="mini" @click="handleDelete">删除</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo'],
    data() {
        return {
            editVal: ''
        }
    },
    methods: {
        handleChangeStatus() {
            this.$bus.$emit('checkTodo', this.todo.id)
        },
        handleEdit(todo) {
            // 重点
            // this.todo.isEdit = !this.todo.isEdit; 不要直接修改props里的值；
            if (todo.isEdit === undefined) {
                this.$set(todo, 'isEdit', true)
            } else {
                todo.isEdit = true;
            }
            this.$nextTick(() => {
                this.$refs.inputTitle.focus();
            })
        },
        handelBlur(todo) {
            // this.todo.title = this.editVal; 不要直接在组件里修改props的值；
            todo.isEdit = false
            this.$bus.$emit('updateTodo', todo.id, this.editVal)
        },
        handleDelete() {
            if (confirm('确认是否删除' + this.todo.id)) {
                this.$bus.$emit('deleteTodo', this.todo.id)
            }
        }
    }
}
</script>

<style lang="less" scoped>
#MyItem {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .checkItem {
        height: 45px;
        line-height: 45px;
        margin-left: 10px;
        ::v-deep .el-checkbox__label {
            font-size: 16px;
        }
    }
    .btns {
        height: 45px;
        line-height: 45px;
        ::v-deep .el-button {
            height: 30px;
            margin: auto 5px;
        }
    }
}

</style>