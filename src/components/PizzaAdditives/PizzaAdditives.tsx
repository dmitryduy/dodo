import React, { FC, useContext } from 'react';

import { PizzaAdditivesContainer, Title } from './PizzaAdditives.style';
import AdditiveCard from "../AdditiveCard/AdditiveCard";
import { ProductContext } from "../../hooks/useHandlePizza";


const PizzaAdditives: FC = () => {

    const {pizzaCard: {additives}, pizzaSize} = useContext(ProductContext)!;

    return (
        <>
            <Title>Добавить в пиццу</Title>
            <PizzaAdditivesContainer>
                {additives.map((additive, index) => {
                    let price: number = additive.price[0];
                   if (pizzaSize === 'small') {
                       price = additive.price[0];
                   }
                    if (pizzaSize === 'medium') {
                        price = additive.price[1];
                    }
                    if (pizzaSize === 'big') {
                        price = additive.price[2];
                    }

                    return <AdditiveCard key={index} {...additive} currentPrice={price}/>
                }
                )}
            </PizzaAdditivesContainer>
        </>
    );
};

export default PizzaAdditives;
