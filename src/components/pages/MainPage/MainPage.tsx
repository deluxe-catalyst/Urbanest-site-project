import classes from './MainPage.module.css'
import AboutUsSection from './sections/AboutUsSection/AboutUsSection'
import ArrivalSection from './sections/ArrivalSection/ArrivalSection'
import BestsellersSection from './sections/BestsellersSection/BestsellersSection'
import BlogSection from './sections/BlogSection/BlogSection'
import CategoriesSection from './sections/CategoriesSection/CategroiesSection'
import MainSection from './sections/MainSection/MainSection'
import ServisesSection from './sections/ServisesSection/ServisesSection'
import SpanSection from './sections/SpanSection/SpanSection'

export default function MainPage() {
    return (
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainSection />
                <SpanSection />
                <CategoriesSection />
                <ArrivalSection />
                <ServisesSection />
                <BestsellersSection />
                <AboutUsSection />
                <BlogSection />
            </div>
        </div>
    )
}