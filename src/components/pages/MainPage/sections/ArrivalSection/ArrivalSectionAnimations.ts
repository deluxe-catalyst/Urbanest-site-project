import { MutableRefObject } from "react";


const animationsConfig = (refs : {[key: string] : MutableRefObject<HTMLElement | null>}) => [
    {
        element: refs.mainImgRef.current,
        config: {
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: refs.mainImgRef.current,
                start: 'top 100%',
                end: 'top 40%',
                scrub: true,
            }
        }
    },
    {
        element: refs.subImgRef.current,
        config: {
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: refs.subImgRef.current,
                start: 'top 100%',
                end: 'top 20%',
                scrub: true,
            }
        }
    },
]

export default animationsConfig;