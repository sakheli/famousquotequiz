import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { WebGLRenderer } from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";


export const ktxLoader = (renderer: WebGLRenderer) => {
    const ktx2Loader = new KTX2Loader()
        .setTranscoderPath('/third_party/basis/')
        .detectSupport(renderer)

    return ktx2Loader
}


export const customGLTFLoader = (): GLTFLoader => {
    const loader: GLTFLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/third_party/draco/');
    loader.setDRACOLoader(dracoLoader);

    return loader;
}