import MainTitle from "../../../../elements/MainTitle/MainTitle";
import classes from "./ArrivalSection.module.css"
import ArrowImg from '../../../../../assets/images/svg/next-btn.svg'
import MainImg from '../../../../../assets/images/png/arrival-chair.png'
import SubImg from '../../../../../assets/images/png/arrival-chair-sub.png'
import { useLayoutEffect, useRef } from "react";
import useGsapTo from "../../../../../hooks/useGsapTo";
import animationsConfig from "./ArrivalSectionAnimations";


import { LinkButton } from "../../../../elements/Header/Button/Button";
import Paragraph, { ParagraphItalic } from "../../../../elements/Paragraph/Paragraph";
import ParagraphTitle from "../../../../elements/ParagraphTitle/ParagraphTitle";
import SliderData from "./ArrivalSliderList";
import { PriceNameTitle } from "../../../../elements/PriceNameTitle/PriceNameTitle";

const ProductsSlider = () => {


    return (
        <div className={classes['slider-box']}>
            <div className={classes['slider']}>
                <div className={classes['slider__content']}>
                    {SliderData.map(sliderItem =>
                        <div key={sliderItem.id} className={classes['slider__item']}>
                            <div className={classes['slider__counter']}>/0{sliderItem.id}</div>

                            <img className={classes['slider__img']} src={sliderItem.img} />
                            <PriceNameTitle title={sliderItem.title} price={sliderItem.price}/>
                        </div>
                    )}
                    <img src={ArrowImg} className={classes['slider__link-img']} />
                </div>
            </div>
        </div>
    )
}

export default function ArrivalSection() {
    const refs = {
        mainImgRef: useRef(null),
        subImgRef: useRef(null),
        linkRef: useRef(null),
    }

    useLayoutEffect(() => {
        useGsapTo(animationsConfig(refs));
    }, [])

    return (
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainTitle>/new arrival</MainTitle>
                <div className={classes['info-block']}>
                    <div className={classes['info-block__text']}>
                        <div className={classes['text-1']}>
                            <ParagraphItalic>
                                We are pleased to present you our latest novelties, which are sure to attract your attention.
                                This season we offer a wide selection of furniture that combines modern design and high quality.
                            </ParagraphItalic>

                        </div>
                        <div className={classes['text-2']}>
                            <ParagraphTitle>
                                Jerell designer chair
                            </ParagraphTitle>
                            <div className={classes['text-2__description']}>
                                <Paragraph>
                                    JERELL is a comfortable upholstered armchair with a wooden frame and pleasant linen upholstery.
                                    The product has a conceptual design, high-quality workmanship made of modern materials in trendy colors.
                                </Paragraph>
                            </div>
                        </div>
                        <div ref={refs.linkRef} className={classes['link-box']}>
                            <LinkButton link={'/catalog/armchairs/jerell-designer-chair'}>View More</LinkButton>
                        </div>
                    </div>
                    <div className={classes['info-block__img-box']}>
                        <div className={classes['img-box__container']}>
                            <img ref={refs.mainImgRef} className={classes['img']} src={MainImg} alt='Jerell Designer Chair' />
                        </div>
                        <img ref={refs.subImgRef} className={classes['sub-img']} src={SubImg} alt='Jerell Designer Chair Material' />
                    </div>
                </div>
            </div>
            <ProductsSlider />

        </div>
    )
}