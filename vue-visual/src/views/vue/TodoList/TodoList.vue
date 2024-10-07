<template>
  <div id="todoList">
    <MyHeader @addTodo="addTodo" />
    <MyList :todoList="todoList" />
    <MyFooter
      @checkAll="checkAll"
      @handleClear="handleClear"
      :todoList="todoList"
    />
  </div>
</template>

<script>
import MyHeader from '@/views/vue/TodoList/components/MyHeader';
import MyList from '@/views/vue/TodoList/components/MyList';
import MyFooter from '@/views/vue/TodoList/components/MyFooter';
export default {
  name: 'todoList',
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    };
  },
  mounted() {
    this.$bus.$on('deleteTodo', this.deleteTodo);
    this.$bus.$on('checkTodo', this.checkTodo);
    this.$bus.$on('updateTodo', this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off('deleteTodo');
    this.$bus.$off('checkTodo');
    this.$bus.$off('updateTodo');
  },
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem('todoList', JSON.stringify(value));
      },
    },
  },
  methods: {
    addTodo(obj) {
      this.todoList.unshift(obj);
    },
    checkTodo(id) {
      this.todoList.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;
          return;
        }
      });
    },
    updateTodo(todoId, title) {
      this.todoList.forEach((item) => {
        if (item.id === todoId) {
          item.title = title;
          return;
        }
      });
    },
    deleteTodo(id) {
      const index = this.todoList.findIndex((item) => item.id === id);
      this.todoList.splice(index, 1);
    },
    checkAll(done) {
      this.todoList.forEach((item) => {
        item.done = done;
      });
      console.log(this.todoList);
    },
    handleClear() {
      this.todoList = this.todoList.filter((item) => !item.done);
    },
  },
};
</script>

<style lang="less" scoped>
#todoList {
  width: 800px;
  min-height: 200px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  font-size: 16px;
}
</style>
