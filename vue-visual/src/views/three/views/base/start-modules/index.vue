<template>
  <div style="width: 1000px;height: 800px;">
    <h1>生成一个立方体（模块化）</h1>
    <div id="scene-container"></div>
  </div>
</template>

<script>
import { World } from '@/views/three/views/base/start-modules/systems/World';

export default {
  name: 'start-modules',
  mounted() {
    const container = document.getElementById('scene-container');
    const world = new World(container);
    world.render();
  }
}
</script>

<style scoped lang="less">
#scene-container {
  width: 100%;
  height: 100%;
}
</style>