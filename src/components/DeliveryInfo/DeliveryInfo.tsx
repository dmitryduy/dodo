import React, {FC, useRef, useState} from "react";

import {ICity} from "../../types/delivery";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import DeliveryTooltip from "../DeliveryTooltip/DeliveryTooltip";
import Star from "../Star/Star";
import CitiesPopup from "../CitiesPopup/CitiesPopup";
import {City, Info} from "./DeliveryInfo.styles";


const DeliveryInfo: FC = () => {
    const {city, deliveryTime, rating} = useTypedSelector<ICity>(state => state.delivery.currentCity);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setModal] = useState(false);

    const showTooltip = (e: React.MouseEvent<HTMLDivElement>): void => {
        tooltipRef.current?.classList.add('visible');
    }
    const hideTooltip = (e: React.MouseEvent<HTMLDivElement>): void => {
        tooltipRef.current?.classList.remove('visible');
    }

    const openPopup = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        setModal(true);
    }

    return (
        <div>
            <CitiesPopup setModal={setModal} isModalOpen={isModalOpen}/>
            <City>
                <span>Доставка пиццы</span>
                <a onClick={openPopup} href="#">{city}</a>
            </City>
            <Info onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <DeliveryTooltip ref={tooltipRef} rating={rating} deliveryTime={deliveryTime}/>
                <span>{deliveryTime} мин</span>
                <span className='dot'/>
                {rating}
               <Star/>
            </Info>
        </div>
    )
}

export default DeliveryInfo;