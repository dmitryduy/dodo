import React, {FC, useRef} from "react";

import styled from "styled-components";

import {ICity} from "../../types/delivery";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import DeliveryTooltip from "../DeliveryTooltip/DeliveryTooltip";
import Star from "../Star/Star";


const City = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;

  span {
    letter-spacing: 1px;
    margin-right: 10px;
  }

  a {
    opacity: .8;
    color: #ff6900;

    &:hover {
      opacity: 1;
    }
  }
`;

const Info = styled.div`
  font-size: 14px;
  position: relative;
  .dot {
    display: inline-block;
    position: relative;
    width: 3px;
    height: 3px;
    margin: 0 5px;
    transform: translateY(-4px);
    border-radius: 50%;
    background-color: #000;
  }

  svg {
    margin-left: 5px;
    width: 13px;
    height: 13px;
    fill: #ffcc00;
  }
`;


const DeliveryInfo: FC = () => {
    const {city, deliveryTime, rating} = useTypedSelector<ICity>(state => state.delivery.currentCity);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTooltip = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (tooltipRef.current) {
            if (e.nativeEvent.composedPath().includes(tooltipRef.current)) {
                hideTooltip(e);
                return;
            }
            tooltipRef.current?.classList.add('visible');
        }

    }
    const hideTooltip = (e: React.MouseEvent<HTMLDivElement>): void => {
        tooltipRef.current?.classList.remove('visible');
    }
    return (
        <div>
            <City>
                <span>Доставка пиццы</span>
                <a href="#">{city}</a>
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