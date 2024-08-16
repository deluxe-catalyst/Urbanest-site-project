import classes from './Footer.module.css';
import emailIcon from '../../../assets/images/svg/entypo_email.svg'
import UrbanestLogo from '../../../assets/images/svg/urbanest-white-logo.svg'
import { BorderButton } from '../Header/Button/Button';
import { NavLink } from 'react-router-dom';

import whatsappIcon from '../../../assets/images/svg/whatsapp-icon.svg'
import telegramIcon from '../../../assets/images/svg/tg-icon.svg'
import pinterestIcon from '../../../assets/images/svg/pinterest-icon.svg'
import vkIcon from '../../../assets/images/svg/vk-icon.svg'

import visaLogo from '../../../assets/images/svg/visa-logo.svg'
import mastercardLogo from '../../../assets/images/svg/mastercard-logo.svg'

interface StringChildren {
    media: string;
}

const AddressBlock = () => {
    return (
        <div className={classes['footer__contacts']}>
            <div className={classes['contacts__title']}>Contact</div>
            <address className={classes['contacts__address']}>
                Moscow, st. Nizhnyaya Syromyatnicheskaya, 12, building 2
            </address>
            <div className={classes['contacts__number']}>
                +7 (495) 150-45-85
            </div>
            <div className={classes['contacts__email']}>
                <img src={emailIcon} alt='Email Icon' />
                <a className={classes['email__link']} href='mailto:hello@urbanest.ru'>hello@urbanest.ru</a>
            </div>
            <SocialsBlock media={'--desktop'} />
        </div>
    )
}

const SocialsBlock = ({ media }: StringChildren) => {
    return (
        <div className={classes['footer__socials' + media]}>
            <img src={whatsappIcon} alt='Whatsapp' />
            <img src={telegramIcon} alt='Telegram' />
            <img src={pinterestIcon} alt='Pinterest' />
            <img src={vkIcon} alt='Vk' />
        </div>
    )
}

const PaymentsBlock = (props : StringChildren) => {
    return (
        <div className={classes['footer__payments' + props.media]}>
            <img src={visaLogo} alt='Visa' />
            <img src={mastercardLogo} alt='Mastercard' />
        </div>
    )
}

export default function Footer() {

    const footerMenuList = [
        {
            id: 1,
            title: 'Catalog',
            link: '/catalog'
        },
        {
            id: 2,
            title: 'About',
            link: '/about'
        },
        {
            id: 3,
            title: 'Customers',
            link: '/customers'
        },
        {
            id: 4,
            title: 'Designers',
            link: '/designers'
        }
    ]

    return (
        <footer className={classes['container']}>
            <div className={classes['title-block']}>
                <div className={classes['title-block__wrapper']}>
                    <img src={UrbanestLogo} alt='Urbanest Logo' />
                </div>
            </div>
            <div className={classes['container__wrapper']}>

                <div className={classes['container__footer']}>
                    <div className={classes['footer__subscriber']}>
                        <div className={classes['subscriber-text']}>
                            Subscribe to our newsletter
                        </div>
                        <input className={classes['subscriber__input']} placeholder='e-mail' type='email' />
                        <div className={classes['subscriber__btn']}>
                            <BorderButton>subscribe</BorderButton>
                        </div>
                        <PaymentsBlock media={'--desktop'}/>
                    </div>
                    <div className={classes['footer__nav']}>
                        <div className={classes['footer__nav-box']}>
                            {footerMenuList.map(item =>
                            (
                                <NavLink key={item.id} className={classes['footer__nav-item']} to={item.link}>{item.title}</NavLink>
                            ))
                            }
                        </div>
                        <AddressBlock />
                    </div>
                </div>
                <div className={classes['footer__end']}>
                    <PaymentsBlock media={'--mobile'} />
                    <SocialsBlock media={'--mobile'} />
                </div>
            </div>
        </footer>
    );
}