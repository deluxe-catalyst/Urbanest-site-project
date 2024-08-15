import MainTitle from '../../../../elements/MainTitle/MainTitle'
import classes from './BestsellersSection.module.css'
import BoConceptImg from '../../../../../assets/images/jpg/boconcept.jpg'
import Paragraph, { ParagraphItalic } from '../../../../elements/Paragraph/Paragraph'
import ParagraphTitle from '../../../../elements/ParagraphTitle/ParagraphTitle'
import { LinkButton } from '../../../../elements/Header/Button/Button'
import ProductsData from './BestsellersProductsList'
import { PriceNameTitle } from '../../../../elements/PriceNameTitle/PriceNameTitle'

const MainBox = () => {
    return (
        <>
            <div className={classes.paragraph}>
                <ParagraphItalic>
                    There are many unique products in our online designer furniture store.
                    Some of them have gained particularly high appreciation and popularity among our customers.
                </ParagraphItalic>
            </div>
            <div className={classes['main-box']}>
                <div className={classes['image__wrapper']}>
                    <div className={classes['img-mask']}>
                        <img className={classes['main-box__img']} src={BoConceptImg} alt='BoConceptArt' />
                    </div>
                </div>
                <div className={classes['main-box__content']}>

                    <div className={classes['main-box__textbox']}>
                        <ParagraphTitle>Boconcept Chair</ParagraphTitle>
                        <div className={classes['textbox__content']}>
                            <Paragraph>
                                BoConcept is a Danish brand specializing in the production of modern furniture and home accessories. The BoConcept armchair is a high-quality product that combines functionality, comfort and stylish design.
                                <br />
                                <br />
                                The special feature of the BoConcept chair is its ergonomic shape, which provides maximum comfort when sitting.
                            </Paragraph>
                        </div>
                        <LinkButton link='/catalog/boconcept-chair'>Learn More</LinkButton>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProductsBox = () => {

    return (
        <div className={classes['products-box']}>
            <div className={classes['products-box__wrapper']}>
                <div className={classes['products-box__tier']}>
                    <div className={classes['tier__width-config']}>
                        <ProductCard image={ProductsData[0].image} title={ProductsData[0].title} price={ProductsData[0].price} />
                    </div>
                    <div className={classes['tier__width-config']}>
                        <ProductCard image={ProductsData[1].image} title={ProductsData[1].title} price={ProductsData[1].price} />
                    </div>
                </div>
                <div className={classes['products-box__tier']}>
                    <div className={classes['tier__width-config']}>
                        <ProductCard image={ProductsData[2].image} title={ProductsData[2].title} price={ProductsData[2].price} />
                    </div>
                    <div className={classes['tier__bundle']}>
                        <div className={classes['catalog-btn']}>
                            <LinkButton link={'/catalog'}>View All</LinkButton>
                        </div>
                        <div className={classes['tier__width-config']}>
                            <ProductCard image={ProductsData[3].image} title={ProductsData[3].title} price={ProductsData[3].price} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Product {
    image: string;
    title: string;
    price: string;
}

const ProductCard = (props: Product) => {
    return (
        <div className={classes['product-card']}>
            <img className={classes['product-card__image']} src={props.image} alt={props.title} />
            <PriceNameTitle title={props.title} price={props.price} />
        </div>
    )
}

export default function BestsellersSection() {
    return (
        <div className={classes['container']}>
            <MainTitle>/bestsellers</MainTitle>
            <div className={classes['container__wrapper']}>
                <MainBox />
                <ProductsBox />
            </div>
        </div>
    )
}