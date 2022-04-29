import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';


export interface IMeshReturnTypes {
    scene?: THREE.Scene;
    gltf?: GLTF,
    mixer?: THREE.AnimationMixer,
    animate?: () => void;
}

export interface ICreateMesh {
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera,
    gltfModelPaths: string[],
    hdrPath: string,
    animationLooped?: boolean,
    canvas?: HTMLCanvasElement,
    meshModifier?: ({ gltf, mixer, scene }: IMeshReturnTypes) => void;
}



export interface ISceneReturnTypes {
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera,
    canvas?: HTMLCanvasElement;
}


export interface ICreateScene {
    (
        scale: { x: number, y: number; },
        elementQueryString: string,
        gltfCamera: boolean,
        checkForPP?: boolean,
        sceneModifier?: ({ scene, renderer, camera, canvas }: ISceneReturnTypes) => void,
    ): ISceneReturnTypes;
}





