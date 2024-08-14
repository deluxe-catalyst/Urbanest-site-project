import MainTitle from '../../../../elements/MainTitle/MainTitle'
import classes from './BestsellersSection.module.css'
import BoConceptImg from '../../../../../assets/images/jpg/boconcept.jpg'

const MainBox = () => {
    return(
        <div className={classes['main-box']}>
            <div className={classes['main-box__info']}>
                There are many unique products in our online designer furniture store.
                Some of them have gained particularly high appreciation and popularity among our customers.
            </div>
            <div className={classes['main-box__content']}>
                <div className={classes['img-mask']}>
                    <img className={classes['main-box__img']} src={BoConceptImg} alt='BoConceptArt'/>
                </div>
                <div className={classes['main-box__textbox']}>
                    
                </div>
            </div>
        </div>
    )
}

export default function BestsellersSection() {
    return(
        <div className={classes['container']}>
            <MainTitle>/bestsellers</MainTitle>
            <div className={classes['container__wrapper']}>
                <MainBox/>
            </div>
        </div>
    )
}