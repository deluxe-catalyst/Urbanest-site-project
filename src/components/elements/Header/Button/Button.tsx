import { NavLink } from 'react-router-dom';
import classes from './Button.module.css';
import ArrowNextForButton from '@/assets/images/svg/next-arrow-light.svg'
import ArrowImg from '../../../../assets/images/svg/next-btn.svg'

interface propsInterface {
    children: React.ReactNode;
    theme: string;
    onClick?: () => void;
}

interface LinkButtonProps {
    children: React.ReactNode;
    link: string;
}

export default function Button(props: propsInterface) {
    return (
        <button className={classes[props.theme]} onClick={props.onClick}>
            {props.children}
            {props.theme === 'arrow-btn' && <img className={classes['inner-btn-arrow']} src={ArrowNextForButton} />}
        </button>
    )
}

export function LinkButton(props: LinkButtonProps) {
    return (
        <NavLink to={props.link} className={classes['link']}>
            {props.children}
            <img src={ArrowImg} className={classes['link__img']} />
        </NavLink>
    )
}