import classes from './Button.module.css';
import ArrowNextForButton from '@/assets/images/svg/next-arrow-light.svg'

interface propsInterface{
    children: React.ReactNode;
    theme: string;
}

export default function Button(props: propsInterface){
    return( 
        <button className={classes[props.theme]}>
            {props.children}
            {props.theme === 'arrow-btn' && <img className={classes['inner-btn-arrow']} src={ArrowNextForButton}/>}
        </button>
    )
}