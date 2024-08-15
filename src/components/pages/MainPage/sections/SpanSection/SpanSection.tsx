import { useLayoutEffect, useRef } from 'react'
import classes from './SpanSection.module.css'
import Paragraph from '../../../../elements/Paragraph/Paragraph';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SpanSection() {

    const textRef = useRef(null)

    useLayoutEffect(() => {
        const split = new SplitText(textRef.current, { type: "words,chars" });
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 90%",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 0.7,
            rotateY: '-180deg',
            stagger: 0.1,
            duration: 1,
        });

        return () => {
            split.revert();
        };
    }, []);


    return (
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <div ref={textRef} className={classes['main-title']}>
                    each <span className={classes['roman-font']}>piece</span> of designer furniture is unique and <span className={classes['roman-font']}>inimitable</span>
                </div>
                <div className={classes['textbox']}>
                        <div className={classes["textbox__description"]}>
                            <Paragraph>
                                We offer a wide range of furniture in various styles and directions so that each client can choose the perfect solution for their home.
                                <br />
                                <br />
                                Here you will find exclusive models of armchairs, sofas, tables, chairs and other pieces of furniture that are distinguished by high quality materials and workmanship. All our products are made from environmentally friendly materials, which makes them safe for health and the environment.
                            </Paragraph>
                        </div>
                </div>
            </div>
        </div>
    )
}