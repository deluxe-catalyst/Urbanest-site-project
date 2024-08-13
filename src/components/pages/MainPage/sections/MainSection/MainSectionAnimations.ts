import { MutableRefObject } from "react"

const animationsConfig  = (refs : {[key: string] : MutableRefObject<HTMLElement | null>})=>
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
            y: '54px',
            scrollTrigger: {
              trigger: refs.titleBoxRef.current,
              start: '-116px',
              end: 'bottom top',
              scrub: true,
            },
          },
        },
        {
          element: refs.titleBoxRef.current,
          config: {
            gap: '4px',
            scrollTrigger: {
              trigger: refs.titleBoxRef.current,
              start: '-116pxpx',
              end: '18px',
              scrub: true,
            },
          },
        },
      ]


      export default animationsConfig;