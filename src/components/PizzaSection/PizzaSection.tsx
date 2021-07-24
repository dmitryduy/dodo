import React, { FC } from 'react';
import Item from '../MenuSection/Item/Item';
import MenuSection from "../MenuSection/MenuSection";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PizzaSection: FC = () => {
    const {pizzas} = useTypedSelector(state => state.products);
    return (
        <MenuSection title='Пицца'>
            {pizzas.map(pizza => <Item key={pizza.cardInfo.id} product={pizza.cardInfo}/>)}
        </MenuSection>
    );
};

export default PizzaSection;
