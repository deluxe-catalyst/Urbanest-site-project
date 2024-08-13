import MainTitle from '../../../../elements/MainTitle/MainTitle'
import classes from './BestsellersSection.module.css'

export default function BestsellersSection() {
    return(
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainTitle>/bestsellers</MainTitle>
            </div>
        </div>
    )
}