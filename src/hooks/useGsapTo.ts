gsap.registerPlugin(ScrollTrigger);

const useGsapTo = (animations) => {
    animations.forEach(({ element, config }) => {
        if (element) {
            gsap.to(element, config);
        }
    });
};

export default useGsapTo;