
interface AnimationInterface {
    element: HTMLElement | null;
    config: object;
}

const useGsapTo = (animations : AnimationInterface[]) => {
    animations.forEach(({ element, config }) => {
        if (element) {
            gsap.to(element, config);
        }
    });
};

export default useGsapTo;