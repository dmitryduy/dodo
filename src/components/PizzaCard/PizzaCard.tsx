import React, { FC, useContext } from 'react';
import { Filling, PizzaDough, PizzaSizes } from "./PizzaCard.styles";
import PizzaAdditives from '../PizzaAdditives/PizzaAdditives';
import FillingItem from '../FillingItem/FillingItem';
import { ProductContext } from '../../hooks/useHandlePizza';


const PizzaCard: FC = () => {

    const {pizzaSize, handlePizza, doughType, pizzaCard} = useContext(ProductContext)!;
    return (
        <>
            <Filling>
                {pizzaCard.filling.map((item, index) => <FillingItem name={item} key={index}/>)}
            </Filling>
            <PizzaSizes size={pizzaSize}>
                <button onClick={e => handlePizza(e, 'small')} disabled={!pizzaCard.sizes[0]}>Маленькая</button>
                <button onClick={e => handlePizza(e, 'medium')} disabled={!pizzaCard.sizes[1]}>Средняя</button>
                <button onClick={e => handlePizza(e, 'big')} disabled={!pizzaCard.sizes[2]}>Большая</button>
            </PizzaSizes>
            <PizzaDough doughType={doughType}>
                <button onClick={e => handlePizza(e, 'traditional')} disabled={!pizzaCard.doughs[0]}>Традиционное</button>
                <button onClick={e => handlePizza(e, 'thin')} disabled={!pizzaCard.doughs[1]}>Тонкое</button>
            </PizzaDough>
            <PizzaAdditives/>
        </>


    );
};

export default PizzaCard;
