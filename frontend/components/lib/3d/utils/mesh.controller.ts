import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";



export interface IMeshReturnTypes {
    scene?: THREE.Scene
    gltf?: GLTF | GLTF["scene"] | THREE.Group,
    mixer?: THREE.AnimationMixer,
}

interface ICreateMesh {
    (
        scene: THREE.Scene,
        renderer: THREE.WebGLRenderer,
        camera: THREE.PerspectiveCamera,
        gltfModelPath: string,
        hdrPath: string,
        sceneModifier?: ({ gltf, mixer, scene }: IMeshReturnTypes) => void
    )
}




export const addGLFModel: ICreateMesh = (
    scene, renderer, camera, gltfModelPath, hdrPath, sceneModifier) => {

    const clock = new THREE.Clock();


    //============================ ENV
    let envmapLoader = new THREE.PMREMGenerator(renderer)
    new RGBELoader().load(hdrPath, (hdrmap: any) => {

        hdrmap.mapping = THREE.EquirectangularReflectionMapping;

        // scene.background = hdrmap;
        scene.environment = hdrmap;
        let envmap = envmapLoader.fromCubemap(hdrmap)



        const gltfMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x000000,
            roughness: .1,
            metalness: .8,
            // transmission: 1,

            // normalScale: new THREE.Vector2(0.2, 0.2),
            // emissive: 0x3357FA,
            // emissiveIntensity: 0.005,
            envMap: envmap.texture,
            envMapIntensity: 5.5,
            flatShading: false,
        });




        //============================ MESH AND GEOMETRY
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.3.6/');
        loader.setDRACOLoader(dracoLoader);



        loader.load(
            gltfModelPath,
            (gltf) => {
                scene.add(gltf.scene);
                const gltfScene = gltf.scene;
                const sceneCamera = gltf.scene.children.find(obj => obj.name === 'Cameras') as THREE.PerspectiveCamera
                // const sceneObject = gltf.scene.parent?.children.find(obj => obj.type === 'Group') as THREE.Mesh

                if (sceneCamera) {
                    camera.position.copy(sceneCamera!.position);
                    camera.fov = sceneCamera.fov
                }

                const mixer = new THREE.AnimationMixer(gltfScene);
                gltf.animations.forEach((clip) => {
                    const action = mixer.clipAction(clip).play();
                    action.clampWhenFinished = true;
                    action.loop = THREE.LoopOnce;
                    action.play();
                    mixer.addEventListener('finished', () => {
                        mixer.clipAction(clip).stop()
                    })
                });



                gltf.scene.traverse((child: THREE.Object3D) => {
                    if ((child as THREE.Mesh).isMesh) {
                        (child as THREE.Mesh).material = gltfMaterial;
                        (child as THREE.Mesh).castShadow = false;
                        (child as THREE.Mesh).receiveShadow = false;
                    }
                })

                const animate = () => {
                    const delta = clock.getDelta();
                    if (mixer) {
                        if (mixer.time < gltf.animations[0].duration - 0.1) {
                            requestAnimationFrame(animate);
                        }

                        mixer.update(delta);
                    }


                }
                animate()

                sceneModifier && sceneModifier({ gltf, mixer, scene })
            },
            (xhr) => {
                console.log(xhr.loaded);
            },
            (error) => {
                console.error('An error happened');
                console.error(error);
            }
        );

    })
}



