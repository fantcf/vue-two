<template>
  <div style="width: 1000px;height: 800px;">
    <h1>生成一个立方体（无法转动）</h1>
<!--    <el-button @click="onCreateCube">生成一个立方体（无法转动）</el-button>-->
    <div id="scene-container"></div>
  </div>
</template>

<script>
import { BoxGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export default {
  name: 'threeStart',
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.container = document.getElementById('scene-container');
      this.initScene();
      this.initCamera();
      this.onCreateCube();
      this.initRenderer();
    },
    initScene() {
      this.scene = new Scene();
      this.scene.background = new Color('pink');
    },
    initCamera() {
      const fov = 35;
      const aspect = this.container.clientWidth / this.container.clientWidth;
      const near = 0.1;
      const far = 100;
      this.camera = new PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.set(0, 0, 10);
    },
    initRenderer() {
      this.renderer = new WebGLRenderer();
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(this.renderer.domElement);
      this.renderer.render(this.scene, this.camera);
    },
    onCreateCube() {
      const geometry = new BoxGeometry(2, 2, 2);
      const material = new MeshBasicMaterial();
      const cube = new Mesh(geometry, material);
      this.scene.add(cube);
    }
  }
};
</script>
<style scoped lang="less">
#scene-container {
  width: 100%;
  height: 100%;
}
</style>