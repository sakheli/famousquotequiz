import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { CSSProperties } from 'react';


export interface IScrollAnimationData {
    from: gsap.TweenVars,
    to: gsap.TweenVars,
    markers: boolean,
    when: string,
    parentOverflow?: string;
    customStyle?: CSSProperties;
}




export const initScrollTrigger = (scrollEl: string = '[data-scrollanim]') => {
    if (document.querySelectorAll(scrollEl).length < 1) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(scrollEl).forEach((el, _) => {
        const animatedEl = el as HTMLElement;
        const parent = animatedEl.parentElement!;
        const { from, to, when, markers, parentOverflow, customStyle } =
            JSON.parse(animatedEl.dataset.scrollanim!) as IScrollAnimationData;

        parent.style.overflow = `${parentOverflow && parentOverflow}`;

        if (customStyle) {
            Object.assign(animatedEl.style, customStyle);
        }

        gsap.fromTo(animatedEl,
            {
                ...from
            },
            {
                scrollTrigger: {
                    trigger: animatedEl,
                    start: () => when || 'top center',
                    toggleActions: "play reverse play reverse",
                    markers: markers || false,
                },
                ...to
            });
    });
};

