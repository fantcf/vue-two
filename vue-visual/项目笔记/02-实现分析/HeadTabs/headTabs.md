代码简单示例
<el-tabs>
    <el-tab-pane>
        <span><i></i></span>
    </el-tab-pane>
    <el-tab-pane></el-tab-pane>
</el-tabs>



解析：
1. <el-tabs>：构建标签页必备的一项，是标签页最外层的容器；
    主要参数：
      1.1 value/v-model：绑定值，选中选项卡(el-tab-pane)的name；
      1.2 type：风格类型（card/border-card）；
      1.3 closable：标签是否可关闭；
      1.4 addable：标签是否可增加；
      1.5 eidtable：标签是否同时可增加和可关闭；
      1.6 tab-position：选项卡所在位置（top/right/bottom/left）；
      1.7 stretch：<el-tabs>是否会设置宽度为父盒子的100%；
      1.8 before-leave：（不太懂）；
    主要事件：
      1.1 tab-click：tab被选中时触发；
      1.2 tab-remove：删除tab时触发；
      1.3 tab-add：点击tabs的新增按钮后触发；
      1.4 eidt：新增或删除tab时触发；

2. <el-tab-pane>：构建标签页必备的一项，一项即代表一页；
    主要参数：
      1.1 label：当前选项的标题；
      1.2 disabled：是否禁用；
      1.3 name：与<el-tabs>的value对应，表示当前选项卡的标识符；
      1.4 closable：标签是否可关闭；
      1.5 lazy：是否延迟渲染；