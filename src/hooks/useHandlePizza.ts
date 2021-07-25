import React, { createContext, useState } from "react";
import { useTypedSelector } from "./useTypedSelector";
import { IPizzaCard } from "../products";


export interface IProductContext {
    handlePizza: (e: React.MouseEvent<HTMLSpanElement>, type: string) => void;
    pizzaSize: 'small' | 'medium' | 'big' | null;
    doughType: 'traditional' | 'thin' | null;
    pizzaCard: IPizzaCard;
    totalPrice: number,
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductContext = createContext<IProductContext | null>(null);

const useHandlePizza = (id: number): IProductContext => {
    const [pizzaSize, setPizzaSize] = useState<'small' | 'medium' | 'big' | null>(null);
    const [doughType, setDoughType] = useState<'traditional' | 'thin' | null>(null);
    const pizzaCard = useTypedSelector(state => state.products.pizzas.find(pizza => pizza.cardInfo.id === id))!;
    const [totalPrice, setTotalPrice] = useState<number>(pizzaCard.cardInfo.lowestPrice);

    const handlePizza = (e: React.MouseEvent<HTMLSpanElement>, type: string): void => {
        switch (type) {
            case 'traditional':
                if (!pizzaCard.doughs[0]) {
                    return;
                }
                setDoughType('traditional');
                break;
            case 'thin':
                if (!pizzaCard.doughs[1]) {
                    return;
                }
                setDoughType('thin');
                break;
            case 'small':
                if (!pizzaCard.sizes[0]) {
                    return;
                }
                setPizzaSize('small');
                break;
            case 'medium':
                if (!pizzaCard.sizes[1]) {
                    return;
                }
                setPizzaSize('medium');
                break;
            case 'big':
                if (!pizzaCard.sizes[2]) {
                    return;
                }
                setPizzaSize('big');
                break;
        }

    }

    return {
        handlePizza,
        pizzaSize,
        doughType,
        pizzaCard,
        totalPrice,
        setTotalPrice
    }

}

export default useHandlePizza;