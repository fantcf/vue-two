import { WebGLRenderer } from 'three';

export const createRenderer = () => {
  const renderer = new WebGLRenderer();
  return renderer;
}