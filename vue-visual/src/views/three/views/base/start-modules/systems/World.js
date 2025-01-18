import { createScene } from '@/views/three/views/base/start-modules/utils/createScene';
import { createCamera } from '@/views/three/views/base/start-modules/utils/createCamera';
import { createRenderer } from '@/views/three/views/base/start-modules/systems/createRenderer';
import { createCube } from '@/views/three/views/base/start-modules/utils/createCube';
import { Resizer } from '@/views/three/views/base/start-modules/systems/Resizer';

let scene;
let camera;
let renderer
export class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    scene.add(cube);

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera);
  }
}