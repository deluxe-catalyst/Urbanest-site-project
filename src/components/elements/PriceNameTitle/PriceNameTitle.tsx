import classes from './PriceNameTitle.module.css'

interface Props {
    title: string;
    price: string;
}

export const PriceNameTitle = (props: Props) => {
    return (
        <div className={classes['container']}>
            <div className={classes['container__title']}>
                {props.title}
            </div>
            <div className={classes['container__price']}>
                {props.price}
            </div>
        </div>
    )
}