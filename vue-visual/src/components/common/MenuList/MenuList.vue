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
          <i class="el-icon-menu"></i>
          <span>{{ item.title }}</span>
        </template>
        <MenuList :menulist="item.children"></MenuList>
      </el-submenu>
      <el-menu-item
        v-else
        :index="'/' + item.path"
        :key="item.id"
        @click="saveNavState(item.path)"
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ item.title }}</span>
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
    saveNavState(path) {
      this.activePath = `/${path}`;
      this.$emit('changePath', path);
    },
    toggle() {
      this.isCollpase = !this.isCollpase;
    },
  },
};
</script>
