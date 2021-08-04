import * as THREE from 'https://lib.webaverse.com/three.js';
import {GLTFLoader} from 'https://lib.webaverse.com/three.js';
import {BufferGeometryUtils} from 'https://lib.webaverse.com/three.js';

globalThis._setupCanvas = async ({canvas, width, height}) => {
  canvas.width = width;
	canvas.height = height;
	
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
	});
	renderer.setClearColor(0x000000, 0);
	
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(60, canvas.width/canvas.height, 0.1, 1000);

  renderer.setAnimationLoop(() => {
	});
};