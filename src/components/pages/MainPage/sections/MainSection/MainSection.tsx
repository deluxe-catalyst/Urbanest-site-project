import Button from '../../../../elements/Header/Button/Button';
import classes from './MainSection.module.css';
import PrevButton from '../../../../../assets/images/svg/prev-btn.svg';
import NextButton from '../../../../../assets/images/svg/next-btn.svg';
import MainLogoSVG from '@/assets/images/svg/urbanest-main-logo.svg';
import { useLayoutEffect, useRef, useState } from 'react';
import useGsapTo from '../../../../../hooks/useGsapTo';
import animationsConfig from './MainSectionAnimations';
import sliderList from './SliderList';

export default function MainSection() {
    const refs = {
        mainImgRef: useRef(null),
        mainLogoRef: useRef(null),
        titleBoxRef: useRef(null),
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    useLayoutEffect(() => {
        useGsapTo(animationsConfig(refs));
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderList.length) % sliderList.length);

    };
    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderList.length);
    };

    return (
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <div ref={refs.titleBoxRef} className={classes['title-box']}>
                    <h2 className={classes['main-title']}>Designer furniture for comfort</h2>
                    <div className={classes.btn}>
                        <Button theme='arrow-btn'>Shop now</Button>
                    </div>
                </div>
                <div className={classes['slider-content']}>
                    <img data-lag='0.03' ref={refs.mainLogoRef} className={classes['main-logo-img']} alt='Urbanest Logo' src={MainLogoSVG} />
                    <div className={classes['image-container']}>
                        <img
                            ref={refs.mainImgRef}
                            src={sliderList[currentSlide].image}
                            alt="Main Image"
                            className={classes['main-img']}
                        />
                    </div>
                    <div className={classes['slider__manage-box']}>
                        <div></div>
                        <div className={classes['manage-box__info']}>
                            <div className={classes['manage-box__title']}>{sliderList[currentSlide].id}</div>
                            <div className={classes['manage-box__description']}>{sliderList[currentSlide].title}</div>
                        </div>
                        <div className={classes['manage-box__buttons']}>
                            <Button theme='slide-btn' onClick={handlePrevSlide}>
                                <img src={PrevButton} alt="Prev Button" />
                            </Button>
                            <Button theme='slide-btn' onClick={handleNextSlide}>
                                <img src={NextButton} alt="Next Button" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
