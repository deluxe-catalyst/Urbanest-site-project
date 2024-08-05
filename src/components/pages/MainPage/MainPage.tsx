import classes from './MainPage.module.css'
import MainSection from './sections/MainSection/MainSection'
import SpanSection from './sections/SpanSection/SpanSection'

export default function MainPage() {
    return(
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainSection/>
                <SpanSection/>
            </div>
        </div>
    )
}