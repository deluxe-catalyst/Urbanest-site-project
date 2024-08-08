import { NavLink } from 'react-router-dom'
import classes from './CategoriesSection.module.css'
import categoriesList from './categoriesList'
import MainTitle from '../../../../elements/MainTitle/MainTitle'
import { useLayoutEffect } from 'react'
import useGsapTo from '../../../../../hooks/useGsapTo'
import animationsConfig  from './CategoriesSectionAnimations'



export default function CategoriesSection() {
    useLayoutEffect(() => {
        const elements = document.querySelectorAll(`.${classes['menu__wrapper']}`);
        if (elements.length > 0) {
            elements.forEach((element) => {
                if (element instanceof HTMLElement) {
                    useGsapTo(animationsConfig(element));
                }
            });
        } 
    }, []);


    return (
        <div className={classes['container']}>
            <div className={classes['container__wrapper']}>
                <MainTitle>/categories</MainTitle>
                <div className={classes['categories-menu']}>
                    {categoriesList.map(category =>
                        <div data-lag='0' key={category.id} className={classes['menu__wrapper']}>
                            <NavLink to={'catalog/' + category.name} className={classes['categories-menu__item']}>
                                {category.name}
                                <p className={classes['item__count']}>
                                    ({category.count})
                                </p>
                            </NavLink>
                            <p className={classes['item__meter']}>
                                /0{category.id}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}