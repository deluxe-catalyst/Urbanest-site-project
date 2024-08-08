import { NavLink } from "react-router-dom";
import MainTitle from "../../../../elements/MainTitle/MainTitle";
import classes from "./ArrivalSection.module.css"
import ArrowImg from '../../../../../assets/images/svg/next-btn.svg'
import MainImg from '../../../../../assets/images/png/arrival-chair.png'

const ViewMoreLink = () => {
    return(
        <NavLink to='/catalog/armchairs/jerell-designer-chair' className={classes['link']}>
            View More
            <img src={ArrowImg} className={classes['link__img']}/>
        </NavLink>
    )
}
export default function ArrivalSection() {
    return (
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainTitle>/new arrival</MainTitle>
                <div className={classes['info-block']}>
                    <div className={classes['info-block__text']}>
                        <div className={classes['text-1']}>
                            We are pleased to present you our latest novelties, which are sure to attract your attention. 
                            This season we offer a wide selection of furniture that combines modern design and high quality.
                        </div>
                        <div className={classes['text-2']}>
                            <div className={classes['text-2__title']}>
                                Jerell designer chair
                            </div>
                            <div className={classes['text-2__description']}>
                            JERELL is a comfortable upholstered armchair with a wooden frame and pleasant linen upholstery. 
                            The product has a conceptual design, high-quality workmanship made of modern materials in trendy colors.
                            </div>
                        </div>
                        <div className={classes['link-box']}>
                            <ViewMoreLink/>
                        </div>
                    </div>
                    <div className={classes['info-block__img-box']}>
                        <img className={classes['img']} src={MainImg} alt='Jerell Designer Chair'/>
                    </div>
                </div>
            </div>
        </div>
    )
}