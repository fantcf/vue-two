<template>
    <div id="MyFooter">
        <div class="countBox">
            <el-checkbox v-model="isAll"/>
            已完成{{ done }} / 全部{{ all }}
        </div>
        <el-button class="clearBtn" type="danger" size="mini" @click="handleClear">清空与完成任务</el-button>
    </div>
</template>

<script>
export default {
    props: ['todoList'],
    data() {
        return {
            // isAll: true
        }
    },
    computed: {
        done() {
            return this.todoList.filter(item => item.done).length;
        },
        all() {
            return this.todoList.length;
        },
        isAll: {
            get() {
                return (this.done === this.all) && this.all > 0;
            },
            set(value) {
                this.$emit('checkAll', value)
            }
        }
   },
   methods: {
    handleClear() {
        if (confirm('请确认删除所有选中的todo项')) {
            this.$emit('handleClear')
        }
    }
   }
}
</script>

<style lang="less" scoped>
#MyFooter {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .countBox {
     height: 45px;
     line-height: 45px;
     padding-left: 10px;
     .el-checkbox {
        margin-right: 10px;
     }
    }
    .clearBtn {
        height: 35px;
        margin: auto 20px;
    }
}
</style>