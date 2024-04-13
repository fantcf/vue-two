<template>
    <el-menu 
          :collapse="isCollapse"
          :collapse-transition="collapseTransition"
          :background-color="bgColor"
          :text-color="txColor"
          :active-text-color="activeTextColor"
          router
          unique-opened
          :default-active="activePath">
            <template v-for="item in menulist">
                <el-submenu v-if="item.children && item.children.length > 0" :index="item.id + ''" :key="item.id">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{ item.title }}</span>
                    </template>
                    <template v-for="subItem in item.children">
                        <el-submenu v-if="subItem.children && subItem.children.length > 0" :index="subItem.id + ''" :key="subItem.id">
                          <template slot="title">
                            <i></i>
                            <span>{{ subItem.title }}</span>
                          </template>
                            <el-menu-item v-for="nextItem in subItem.children" :index="'/' + nextItem.path" :key="nextItem.id" @click="saveNavState(nextItem.path)">
                              <template slot="title">
                                <i></i>
                                <span>{{ nextItem.title }}</span>
                              </template>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="'/' + subItem.path" :key="subItem.id" @click="saveNavState(subItem.path)">
                          <template slot="title">
                            <i></i>
                            <span>{{ subItem.title }}</span>
                        </template>
                </el-menu-item>
                    </template>
                  </el-submenu>
                <el-menu-item v-else :index="'/' + item.path" :key="item.id" @click="saveNavState(item.path)">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{ item.title }}</span>
                    </template>
                </el-menu-item>
            </template>
    </el-menu>
</template>

<script>
export default {
    name: 'MenuList',
    props: [
        'menulist', 
        'bgColor', 
        'txColor', 
        'activeTextColor',
        'collapseTransition',
        'isCollapse'
    ],
    data() {
        return {
            activePath: '',
        }
    },
    methods: {
        saveNavState(path) {
          this.activePath = `/${path}`
          this.$emit('changePath', path)
        },
        toggle() {
            this.isCollpase = !this.isCollpase
        }
    }
}
</script>