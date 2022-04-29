import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import type { ICreateScene } from 'components/lib/3d/types/controller';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';







export const createScene: ICreateScene = (
    scale, elementQueryString, gltfCamera = true, checkforPP, sceneModifier) => {
    console.log(checkforPP);

    // let ppEnabled = checkforPP ?  window.innerWidth > 750 : true
    let ppEnabled = false;
    let composer;
    const postProcessingParams = {
        exposure: 5,
        bloomStrength: 0.5,
        bloomThreshold: 0,
        bloomRadius: 2
    };



    const canvas = document.querySelector(elementQueryString) as HTMLCanvasElement;


    const sizes = {
        width: window.innerWidth * scale.x,
        height: window.innerHeight * scale.y
    };


    //? ============== SCENE ================
    const scene = new THREE.Scene();
    if (ppEnabled)
        scene.background = new THREE.Color('#010003');
    else
        scene.background = new THREE.Color('#010009');



    //? ============== LIGHT ================
    // var lighth = new THREE.HemisphereLight(0xf6e86d, 0x404040, 15);
    // scene.add(lighth);




    //? ============== CAMERA ================
    const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.01, 1000);
    if (!gltfCamera)
        camera.position.set(0, 0, .7);
    scene.add(camera);





    //? ============== RENDERER ================
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setSize(sizes.width, sizes.height);

    let parameters = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: false
    };
    let renderTarget = new THREE.WebGLRenderTarget(sizes.width, sizes.height, parameters);




    //? ============== POSTPROCESSING  ================
    if (ppEnabled) {
        composer = new EffectComposer(renderer, renderTarget);
        const renderPass = new RenderPass(scene, camera);
        renderPass.clear = false;
        renderPass.clearAlpha = 0;
        renderPass.renderToScreen = false;

        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(sizes.width, sizes.height), 4, 1, 0.1);
        bloomPass.threshold = postProcessingParams.bloomThreshold;
        bloomPass.strength = postProcessingParams.bloomStrength;
        bloomPass.radius = postProcessingParams.bloomRadius;

        composer.addPass(renderScene);
        composer.addPass(bloomPass);
    }





    //? ============== RESIZE ================
    if (window.innerWidth > 750) {
        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth * scale.x;
            sizes.height = window.innerHeight * scale.y;


            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            if (ppEnabled) {
                camera.aspect = sizes.width / sizes.height;
                composer.setSize(sizes.width, sizes.height);
                composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }
        });
    }

    // const controls = new OrbitControls(camera, (canvas as HTMLElement));
    // controls.enableDamping = true




    const animate = () => {
        // controls.update();
        
        renderer.clear();
        if (ppEnabled) {
            composer.render();
        } else {
            renderer.render(scene, camera);
        }
        requestAnimationFrame(animate);
    };
    animate();
    renderer.clear();

    sceneModifier && sceneModifier({ scene, renderer, camera, canvas });
    return { scene, renderer, camera, canvas };
};