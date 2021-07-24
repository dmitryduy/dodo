import React, { FC } from 'react';
import { Filling, PizzaDough, PizzaSizes } from "./PizzaCard.styles";
import PizzaAdditives from '../PizzaAdditives/PizzaAdditives';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FillingItem from '../FillingItem/FillingItem';

interface PizzaCardProps {
    handleSmallPizza: (e: React.MouseEvent<HTMLSpanElement>) => void;
    handleMediumPizza: (e: React.MouseEvent<HTMLSpanElement>) => void;
    handleBigPizza: (e: React.MouseEvent<HTMLSpanElement>) => void;
    handleTraditionalDough: (e: React.MouseEvent<HTMLSpanElement>) => void;
    handleThinDough: (e: React.MouseEvent<HTMLSpanElement>) => void;
    doughType: 'traditional' | 'thin' | null;
    pizzaSize: 'small' | 'medium' | 'big' | null;
    id: number
}

const PizzaCard: FC<PizzaCardProps> = (
    {
        pizzaSize,
        handleMediumPizza,
        handleSmallPizza,
        handleBigPizza,
        handleThinDough,
        handleTraditionalDough,
        doughType,
        id
    }) => {
    const {sizes, doughs, filling} = useTypedSelector(state => state.products.pizzas.find(pizza => pizza.cardInfo.id === id))!;

    return (
        <>
            <Filling>
                {filling.map((item, index) => <FillingItem name={item} key={index}/>)}
            </Filling>
            <PizzaSizes size={pizzaSize}>
                <button onClick={handleSmallPizza} disabled={!sizes[0]}>Маленькая</button>
                <button onClick={handleMediumPizza} disabled={!sizes[1]}>Средняя</button>
                <button onClick={handleBigPizza} disabled={!sizes[2]}>Большая</button>
            </PizzaSizes>
            <PizzaDough doughType={doughType}>
                <button onClick={handleTraditionalDough} disabled={!doughs[0]}>Традиционное</button>
                <button onClick={handleThinDough} disabled={!doughs[1]}>Тонкое</button>
            </PizzaDough>
            <PizzaAdditives id={id}/>
        </>


    );
};

export default PizzaCard;
