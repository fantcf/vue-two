<template>
  <el-menu
    :collapse="isCollapse"
    :collapse-transition="collapseTransition"
    :background-color="bgColor"
    :text-color="txColor"
    :active-text-color="activeTextColor"
    router
    unique-opened
    :default-active="activePath"
  >
    <template v-for="item in menulist">
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :index="item.id + ''"
        :key="item.id"
      >
        <template slot="title">
          <div :style="titleStyles(item.id)">
            <i class="el-icon-menu"></i>
            <span>{{ item.title }}</span>
          </div>
        </template>
        <MenuList :menulist="item.children" @changePath="saveNavState"></MenuList>
      </el-submenu>
      <el-menu-item
        v-else
        :index="'/' + item.path"
        :key="item.id"
        @click="saveNavState(item.path, item.title)"
      >
        <template slot="title">
<!--          <i class="el-icon-menu"></i>-->
          <span :style="titleStyles(item.id)">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import MenuList from '@/components/common/MenuList/MenuList.vue';
export default {
  name: 'MenuList',
  components: { MenuList },
  props: [
    'menulist',
    'bgColor',
    'txColor',
    'activeTextColor',
    'collapseTransition',
    'isCollapse',
  ],
  data() {
    return {
      activePath: '',
    };
  },
  methods: {
    saveNavState(path, title) {
      this.activePath = `/${path}`;
      this.$emit('changePath', path, title);
    },
    toggle() {
      this.isCollpase = !this.isCollpase;
    },
    getFatherKeyCount(item, count) {
      const currentCount = count;
      if (item.fatherKey !== undefined) {
        return currentCount;
      } else {
        return this.getFatherKeyCount(currentCount);
      }
    },
    titleStyles(id) {
      const len = (String(id).length + 1) / 2 - 1;
      const paddingLeft = `${len * 5}px`
      return {
        'padding-left': paddingLeft
      }
      // const count = this.getFatherKeyCount(item, 0);
    },
    titleClass(fatherKey) {
      return {
        'm-l-20': fatherKey
      }
    }
  },
};
</script>

<style scoped>
.m-l-20 {
  margin-left: 20px;
}
</style>
