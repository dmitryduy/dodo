import React, { FC } from "react";


import FlexContainer from "../containers/FlexContainer";
import Star from "../Star/Star";
import { Tooltip, Rating, DeliveryTime } from "./DeliveryTooltip.styles";

interface DeliveryTooltipProps {
    rating: number;
    deliveryTime: number;
    visible: boolean;
}


const DeliveryTooltip: FC<DeliveryTooltipProps> = ({deliveryTime, rating, visible}) => {
    return (
        <Tooltip className={visible ? 'visible' : ''}>
            <FlexContainer justify='space-between'>
                <DeliveryTime>
                    <span className='time'>{deliveryTime} минут</span>
                    <span className='approximately-time'>Среднее время доставки</span>
                    <span className='note'>Если не успеем за 60 минут, вы получите сертификат на большую пиццу</span>
                </DeliveryTime>
                <Rating>
                    <span className='rate'>
                        {rating}
                        {Array(rating).fill(0).map((_, index) => <Star key={index}/>)}
                    </span>
                    <span className='marks'>3017 оценок</span>
                    <span className='note'>Отменить заказ можно в мобильном приложении</span>
                </Rating>
            </FlexContainer>
            <span className='info'>Данный за последние 7 дней в вашем городе</span>
        </Tooltip>
    )
}

export default DeliveryTooltip;