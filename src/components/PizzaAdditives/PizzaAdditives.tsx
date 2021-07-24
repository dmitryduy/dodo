import React, { FC } from 'react';

import { PizzaAdditivesContainer, Title } from './PizzaAdditives.style';
import AdditiveCard from "../AdditiveCard/AdditiveCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PizzaAdditives: FC<{id: number}> = ({id}) => {
    const {additives} = useTypedSelector(state => state.products.pizzas.find(pizza => pizza.cardInfo.id === id))!;
    return (
        <>
            <Title>Добавить в пиццу</Title>
            <PizzaAdditivesContainer>
                {additives.map((additive, index) => <AdditiveCard key={index} {...additive}/>)}
            </PizzaAdditivesContainer>
        </>
    );
};

export default PizzaAdditives;
