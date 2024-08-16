import MainTitle from '../../../../elements/MainTitle/MainTitle';
import classes from './AboutUsSection.module.css';
import mainImg from '../../../../../assets/images/jpg/about-us-img.jpg'
import Paragraph from '../../../../elements/Paragraph/Paragraph';
import { LinkButton } from '../../../../elements/Header/Button/Button';
export default function AboutUsSection() {
    return (
        <div className={classes['container']}>
            <MainTitle>/about us</MainTitle>
            <div className={classes['container__wrapper']}>
                <h1 className={classes['title']}>
                    Our <span className={classes['stroke-font']}>company </span>
                    
                    specializes in the <br className={classes['desktop-span-1']}/> sale <br className={classes['mobile-white-space']}/>

                    <span className={classes['mobile-white-space']}><br/><br/><br/></span>
                    of
                    <span className={classes['stroke-font']}> high-</span>

                    <span className={classes['desktop-span-2']}></span>

                    quality <br className={classes['desktop-span']}/> furniture

                    <span className={classes['desktop-span-3']}></span>

                    from the world's leading
                    <span className={classes['stroke-font']}> manufacturers</span>
                </h1>
                <img className={classes['image']} src={mainImg} alt='Chairs Image' />
                <div className={classes['textbox']}>
                    <div className={classes['textbox__wrapper']}>
                        <Paragraph>
                            Philosophy company is style, sophistication  and high quality.
                            <br />
                            <br />
                            We offer our customers only the best products that meet the highest quality
                            standards. Our team of professionals is always ready to help you with your
                            choice and answer all your questions.
                        </Paragraph>
                        <LinkButton link={'/about-us'}>Learn More</LinkButton>
                    </div>
                </div>
            </div>

        </div>
    )
}