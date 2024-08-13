import MainTitle from "../../../../elements/MainTitle/MainTitle";
import classes from "./ServisesSection.module.css";

import servisesList from "./ServisesList";

export default function ServisesSection() {
    console.log(servisesList);
    

    return (
        <div className={classes['container']}>
            <MainTitle>/servises</MainTitle>
            <div className={classes['container__wrapper']}>
                <div className={classes['servises-box']}>
                    {servisesList.map(element =>    
                        <div className={classes['item']} key={element.id}>
                            <div className={classes['image-container']}>
                                <img className={classes['item__image']} src={element.image} alt={element.title}/>
                            </div>
                            <div className={classes['item__textbox']}>
                                <img src={element.icon} alt={element.title} className={classes['item__icon']}/>
                                <div className={classes['item__title']}>
                                    {element.title}
                                </div>
                                <div className={classes['item__description']}>{element.description}</div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}