import { useEffect } from "react";
import { gsap } from "gsap";



const Loading = () => {
    useEffect(() => {
        (window as any).isLoaded = false;
        const tl = gsap.timeline();
        tl.to('body', {
            overflow: 'hidden'
        });

        const interval = setInterval(() => {

            if ((window as any).isLoaded === true) {
                tl.fromTo(".loading > .loading_container",
                    {
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    },
                    {
                        clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)',
                        ease: "Expo.easeOut",
                        duration: 2.5,
                    })
                    .to(".loading", {
                        visibility: 'hidden',
                    });
                clearInterval(interval);
            }
        }, 500);
    }, []);




    return (
        <>
            <div className="loading">
                <div className="loading_container" />
            </div>
        </>
    );
};

export default Loading;