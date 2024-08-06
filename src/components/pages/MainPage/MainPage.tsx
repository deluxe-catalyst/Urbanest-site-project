import classes from './MainPage.module.css'
import CategoriesSection from './sections/CategoriesSection/CategroiesSection'
import MainSection from './sections/MainSection/MainSection'
import SpanSection from './sections/SpanSection/SpanSection'

export default function MainPage() {
    return(
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainSection/>
                <SpanSection/>
                <CategoriesSection/>
            </div>
        </div>
    )
}