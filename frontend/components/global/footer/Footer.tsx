import { createScene } from 'components/lib/3d/utils/scene.contoller';
import { useEffect } from 'react';
import { footerScene } from './footer.mesh';


const Footer = () => {
    useEffect(() => {
        if (typeof window === 'object' && window !== undefined)
            init();
    }, []);



    const init = () => {
        const { scene, renderer, camera, canvas } =
            createScene({ x: 1, y: .4 }, `.footer_three`, false, true);


        footerScene({
            scene: scene,
            renderer: renderer,
            camera: camera,
            gltfModelPaths: ['3d_models/Shoe for tweak_v2.glb'],
            hdrPath: `hdr_textures/silver_2.hdr`,
            canvas: canvas,
            meshModifier: ({ gltf }) => {
                const { x, y, z } = gltf!.cameras[0].parent!.position.normalize();
                camera.position.set(x, y, z * 8);
                camera.lookAt(gltf!.scene.children[0].position);
            }
        });
        return [scene, renderer, camera];
    };


    const socialsData = [
        {
            image: "/svg/socials/1.svg",
            url: ""
        },
        {
            image: "/svg/socials/2.svg",
            url: ""
        },
        {
            image: "/svg/socials/3.svg",
            url: ""
        },
    ];


    return (
        <footer className="footer">
            <canvas className="footer_three" />
            <div className="footer_container">
                <div className="contact_us">
                    <h1 className="f-size-h8 f-weight-l">Contact us <br />
                        <a href="mailto:hello@fashion3.io" target="#">
                            <strong className="f-weight-bl">
                                hello@fashion3.io
                            </strong>
                        </a>
                    </h1>
                </div>
                <div className="socials">
                    {socialsData.map((el, i) => (
                        <a rel='noreferrer' href={el.url} target="_blank" key={i}>
                            <div
                                className="social"
                                style={{ backgroundImage: `url(${el.image})` }}>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="shop">
                    <h1 className="f-size-h8 f-weight-l">shop <br />
                        <a href="shop.fashion3.io" target="_blank">
                            <strong className="f-weight-bl">
                                shop.fashion3.io
                            </strong>
                        </a>
                    </h1>
                </div>
            </div>


            <div className="rights">
                <h1 className="f-size-p5 f-weight-l">
                    © {new Date().getFullYear()} Fashion3{".  "} All Rights Reserved
                </h1>
            </div>

        </footer>
    );
};

export default Footer;