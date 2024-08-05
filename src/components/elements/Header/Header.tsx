import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import LogoIMG from '../../../assets/images/svg/urbanest-logo.svg';
import PhoneIMG from '../../../assets/images/svg/phone-icon.svg';

import SearchIcon from '../../../assets/images/svg/search-icon.svg';
import ProfileIcon from '../../../assets/images/svg/profile-icon.svg';
import CartIcon from '../../../assets/images/svg/cart-icon.svg';

// const MobileMenu = () => {
//     return (
//         <>
//         </>
//     )
// }

const Menu = () => {
    return (
        <div className={classes['navbar__menu']}>
            <NavLink className={classes['menu__item']} to="catalog">Catalog</NavLink>
            <NavLink className={classes['menu__item']} to="about">About</NavLink>
            <NavLink className={classes['menu__item']} to="designers">Designers</NavLink>
            <NavLink className={classes['menu__item']} to="customers">Customers</NavLink>
            <NavLink className={classes['menu__item']} to="contacts">Contacts</NavLink>
        </div>
    )
}


export default function Header() {


    return (
        <div className={classes['advanced__container']}>
            <div  className={classes['container']}>
                <div className={classes['container__wrapper']}>
                    <nav className={classes['navbar']}>
                        <NavLink to="/">
                            <img src={LogoIMG} alt='logo' />
                        </NavLink>
                        <Menu />
                        <div className={classes['navbar__contact']}>
                            <img src={PhoneIMG} alt='Contact Phone' />
                            +7 (495) 150-45-85
                        </div>
                        <div className={classes['navbar__fast-menu']}>
                            <img className={classes['fast-menu__item']} src={SearchIcon} alt='Search' />
                            <NavLink className={classes['fast-menu__item']} to="profile">
                                <img src={ProfileIcon} alt='Profile' />
                            </NavLink>
                            <NavLink className={classes['fast-menu__item']} to="cart">
                                <img src={CartIcon} alt='Cart' />
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}