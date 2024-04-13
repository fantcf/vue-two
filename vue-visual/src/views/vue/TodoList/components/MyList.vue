<template>
    <div id="MyList">
        <MyItem
            v-for="item in todoList"
            :key="item.id"
            :todo="item"
        />
    </div>
</template>

<script>
import MyItem from '@/views/vue/TodoList/components/MyItem'
export default {
    components: {MyItem},
    props: ['todoList']
}
</script>

<style lang="less" scoped>
#MyList {
    width: 97%;
    min-height: 100px;
    margin-bottom: 20px;
}
</style>