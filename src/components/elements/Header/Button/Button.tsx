import { NavLink } from 'react-router-dom';
import classes from './Button.module.css';
import ArrowNextForButton from '@/assets/images/svg/next-arrow-light.svg'
import ArrowImg from '../../../../assets/images/svg/next-btn.svg'

interface btnInterface {
    children: React.ReactNode;
    onClick?: () => void;
}

interface themedBtnUnteface extends btnInterface {
    theme: string;
}

interface LinkBtnInterface extends btnInterface {
    link: string;
}

export default function Button(props: themedBtnUnteface) {
    return (
        <button className={classes[props.theme]} onClick={props.onClick}>
            {props.children}
            {props.theme === 'arrow-btn' && <img className={classes['inner-btn-arrow']} src={ArrowNextForButton} />}
        </button>
    )
}

export function LinkButton(props: LinkBtnInterface) {
    return (
        <NavLink to={props.link} className={classes['link']}>
            {props.children}
            <img src={ArrowImg} className={classes['link__img']} />
        </NavLink>
    )
}

export function BorderButton(props: btnInterface) {
    return (
        <button className={classes['border-btn']} onClick={props.onClick}>
            {props.children}
        </button>
    )
}