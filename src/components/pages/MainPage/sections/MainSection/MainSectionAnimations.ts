import { MutableRefObject, useRef } from "react"

export const useMainSectionRefs = () => {
    return{
        mainImgRef: useRef(null),
        mainLogoRef: useRef(null),
        titleBoxRef: useRef(null),
    }
}

export const animationsConfig  = (refs : {[key: string] : MutableRefObject<HTMLElement | null>}) =>
    [
        {
          element: refs.mainLogoRef.current,
          config: {
            scale: 0.8,
            x: '-10%',
            scrollTrigger: {
              trigger: refs.mainLogoRef.current,
              start: '-80px',
              end: 'bottom top',
              scrub: true,
            },
          },
        },
        {
          element: refs.mainImgRef.current,
          config: {
            scale: 1.2,
            scrollTrigger: {
              trigger: refs.mainImgRef.current,
              start: '-76px',
              end: 'bottom top',
              scrub: true,
            },
          },
        },
        {
            element: refs.mainImgRef.current,
            config: {
                y: '-10%',
              scrollTrigger: {
                trigger: refs.mainImgRef.current,
                start: '180px',
                end: 'bottom top',
                scrub: true,
              },
            },
          },
        {
          element: refs.titleBoxRef.current,
          config: {
            scale: 0.8,
            y: '60px',
            gap: '10px',
            scrollTrigger: {
              trigger: refs.titleBoxRef.current,
              start: '-160px',
              end: 'bottom top',
              scrub: true,
            },
          },
        },
      ]
