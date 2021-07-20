import React, {FC, LegacyRef} from "react";

import styled from "styled-components";
import FlexContainer from "../containers/FlexContainer";
import Star from "../Star/Star";

interface DeliveryTooltipProps {
    rating: number;
    deliveryTime: number;
    ref: LegacyRef<HTMLDivElement>;
}

const Tooltip = styled.div`
  position: absolute;
  top: calc(100% + 24px);
  background-color: #373535;
  border-radius: 10px;
  padding: 10px;
  max-width: 500px;
  width: 200%;
  left: -50%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  transition: .3s;
pointer-events: none;
  &.visible {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: inherit;
    top: 0;
    left: calc(50%);
    transform: translateX(-50%) rotateZ(45deg) translateY(-14px);

  }

  .note, .info {
    color: #9e9e9e;
    font-weight: 500;
  }

  .info {
    display: inline-block;
    margin-top: 10px;
  }
`;

const DeliveryTime = styled.div`

  margin-right: 30px;

  span {
    display: block;
    margin-bottom: 5px;
  }

  .time {
    font-size: 25px;
    color: #f3f3f3;
  }

  .approximately-time {
    color: #f3f3f3;
  }
`;

const Rating = styled.div`
  margin-right: 30px;

  span {
    display: block;
    margin-bottom: 5px;
  }

  .rate {
    font-size: 25px;
    color: #ffcc00;
  }

  .marks {
    color: #f3f3f3;
  }
`;

const DeliveryTooltip = React.forwardRef<HTMLDivElement, DeliveryTooltipProps>(({deliveryTime, rating}, ref) => {

    return (
        <Tooltip ref={ref}>
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
})

export default DeliveryTooltip;