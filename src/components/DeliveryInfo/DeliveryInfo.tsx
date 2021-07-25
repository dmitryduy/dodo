import React, { FC, useState } from "react";

import { ICity } from "../../types/delivery";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import DeliveryTooltip from "../DeliveryTooltip/DeliveryTooltip";
import Star from "../Star/Star";
import CitiesPopup from "../CitiesPopup/CitiesPopup";
import { City, Info } from "./DeliveryInfo.styles";


const DeliveryInfo: FC = () => {
    const {city, deliveryTime, rating} = useTypedSelector<ICity>(state => state.delivery.currentCity);
    const [isModalOpen, setModal] = useState(false);
    const [visibilityTooltip, setVisibilityTooltip] = useState(false);

    const showTooltip = (e: React.MouseEvent<HTMLDivElement>): void => {
        setVisibilityTooltip(true);
    }
    const hideTooltip = (e: React.MouseEvent<HTMLDivElement>): void => {
        setVisibilityTooltip(false);
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
                <DeliveryTooltip visible={visibilityTooltip} rating={rating} deliveryTime={deliveryTime}/>
                <span>{deliveryTime} мин</span>
                <span className='dot'/>
                {rating}
                <Star/>
            </Info>
        </div>
    )
}

export default DeliveryInfo;