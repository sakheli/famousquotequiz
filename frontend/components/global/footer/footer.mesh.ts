import { gsap } from 'gsap';
import { ICreateMesh } from 'components/lib/3d/types/controller';
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { customGLTFLoader } from "components/lib/3d/loaders";








export const footerScene = ({ scene, renderer, canvas, gltfModelPaths, hdrPath, meshModifier }: ICreateMesh) => {
    let mouse = {
        x: 1,
        y: 1,
        z: 1
    };

    canvas!.parentElement!.addEventListener('mousemove', (e: MouseEvent) => {
        gsap.to(mouse, {
            x: e.clientX * 0.003,
            y: e.clientY * 0.001,
            duration: 1,
            ease: 'power1.In',
        });
    });
    //============================ ENV
    let envmapLoader = new THREE.PMREMGenerator(renderer);
    new RGBELoader().load(hdrPath, (hdrmap: any) => {

        hdrmap.mapping = THREE.EquirectangularReflectionMapping;

        scene.environment = hdrmap;
        let envmap = envmapLoader.fromCubemap(hdrmap);



        const gltfMaterial = new THREE.MeshStandardMaterial({
            color: 0x000000,
            roughness: .2,
            metalness: .8,
            envMap: window.innerWidth > 750 ? envmap.texture : null,
            envMapIntensity: 5.5,
            flatShading: false,
        });




        //============================ MESH AND GEOMETRY
        customGLTFLoader().load(
            gltfModelPaths[0],
            (gltf) => {
                scene.add(gltf.scene);
                const shoe = gltf.scene.children.find(child => child.name === 'shoe');
                (window as any).isLoaded = true;

                gltf.scene.traverse((child: THREE.Object3D) => {
                    if ((child as THREE.Mesh).isMesh) {
                        (child as THREE.Mesh).material = gltfMaterial;
                        (child as THREE.Mesh).castShadow = false;
                        (child as THREE.Mesh).receiveShadow = false;
                    }
                });



                // gsap.to(shoe!.rotation, {
                //     y: THREE.MathUtils.degToRad(360),
                //     z: THREE.MathUtils.degToRad(360),
                //     repeat: -1,
                //     duration: 8,
                //     ease: 'none'
                // });

                
                const animate = () => {
                    requestAnimationFrame(animate);
                    if (shoe) {
                        if (window.innerWidth < 750) {
                            shoe.rotation.y += 0.01;
                            shoe.rotation.z += 0.001;
                        } else {
                            shoe?.rotation.set(mouse.y, mouse.x, 0);
                        }
                    }
                };
                animate();


                meshModifier && meshModifier({ gltf, scene });
            },
        );


    });
};