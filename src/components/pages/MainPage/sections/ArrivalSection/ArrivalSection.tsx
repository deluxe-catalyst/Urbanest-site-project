import MainTitle from "../../../../elements/MainTitle/MainTitle";
import classes from "./ArrivalSection.module.css"
import ArrowImg from '../../../../../assets/images/svg/next-btn.svg'
import MainImg from '../../../../../assets/images/png/arrival-chair.png'
import SubImg from '../../../../../assets/images/png/arrival-chair-sub.png'
import { useLayoutEffect, useRef } from "react";
import useGsapTo from "../../../../../hooks/useGsapTo";
import animationsConfig from "./ArrivalSectionAnimations";

import imageSlider1 from '../../../../../assets/images/png/arrival-sale-item01.png'
import imageSlider2 from '../../../../../assets/images/png/arrival-sale-item02.png'
import imageSlider3 from '../../../../../assets/images/png/arrival-sale-item03.png'
import { LinkButton } from "../../../../elements/Header/Button/Button";
import Paragraph, { ParagraphItalic } from "../../../../elements/Paragraph/Paragraph";
import ParagraphTitle from "../../../../elements/ParagraphTitle/ParagraphTitle";

const ProductsSlider = () => {

    const SliderData = [
        {
            id: 1,
            img: imageSlider1,
            title: 'Lussole Loft & Mid-Century Sofa',
            price: '1224$',
        },
        {
            id: 2,
            img: imageSlider2,
            title: 'VEIRO chair',
            price: '1024$',
        },
        {
            id: 3,
            img: imageSlider3,
            title: 'EGG chair',
            price: '998$',
        }
    ]

    return (
        <div className={classes['slider-box']}>
            <div className={classes['slider']}>
                <div className={classes['slider__content']}>
                    {SliderData.map(sliderItem =>
                        <div key={sliderItem.id} className={classes['slider__item']}>
                            <div className={classes['slider__counter']}>/0{sliderItem.id}</div>

                            <img className={classes['slider__img']} src={sliderItem.img} />

                            <div className={classes['item__info']}>
                                <div className={classes['item__title']}>
                                    {sliderItem.title}
                                </div>
                                <div className={classes['item__price']}>
                                    {sliderItem.price}
                                </div>
                            </div>
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