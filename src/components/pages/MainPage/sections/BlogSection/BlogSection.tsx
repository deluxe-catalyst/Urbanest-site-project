import MainTitle from '../../../../elements/MainTitle/MainTitle';
import classes from './BlogSection.module.css';

import Paragraph from '../../../../elements/Paragraph/Paragraph';
import cardsList from './BlogContentList';
import { LinkButton } from '../../../../elements/Header/Button/Button';
import { NavLink } from 'react-router-dom';
import arrowIcon from '../../../../../assets/images/svg/next-btn.svg'

interface BlogCardInterface {
    title: string,
    description: string,
    image: string,
    link: string,
}



const BlogCard = (props : BlogCardInterface) => {
    return(
        <div className={classes['card']}>
            <img className={classes['card__image']} src={props.image} alt="blog-image" />
            <NavLink className={classes['card__link']} to={props.link}>
                <h1 className={classes['card__title']}>{props.title}</h1>
                <img src={arrowIcon} alt='arrow Icon'/>
            </NavLink>
            <div className={classes['card__description']}>
                <Paragraph>{props.description}</Paragraph>
            </div>
        </div>
    )
}

export default function BlogSection() {

    

    return( 
        <div className={classes['container']}>
            <MainTitle>/blog</MainTitle>
            <div className={classes['container__wrapper']}>
                <div className={classes['cards-box']}>
                    {cardsList.map((card) => 
                            <BlogCard
                                key={card.id}
                                image={card.image}
                                title={card.title}
                                description={card.desription}
                                link={card.link}
                            />
                    )}
                </div>
                <LinkButton link={'/blog'}>Read More</LinkButton>
            </div>
        </div>
 );

}