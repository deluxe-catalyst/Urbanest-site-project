const animationsConfig = (element : HTMLElement) => [
    {   
        element: element,
        config: {
            y: '0',
            opacity: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 110%',
                end: 'top 80%',
                scrub: true,
            }
        }

    },
    {
        element: element,
        config: {
            scale: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 100%',
                end: 'top 92%',
                scrub: true
            }
        }

    }
]

export default animationsConfig;