import React, { FC, useEffect, useState } from 'react';
import {
    CloseButton,
    Image,
    ProductContainer,
    ProductContent,
    ProductName,
    ProductDescription,
    ProductInfo,
    AddToCartButton,
    LeftSidebarContainer
} from "./ProcuctCard.styles";
import PizzaCard from "../PizzaCard/PizzaCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";


const ProductCard: FC<{ id: number }> = ({id}) => {
    const [pizzaSize, setPizzaSize] = useState<'small' | 'medium' | 'big' | null>(null);
    const [doughType, setDoughType] = useState<'traditional' | 'thin' | null>(null);
    const {
        doughs,
        sizes
    } = useTypedSelector(state => state.products.pizzas.find(pizza => pizza.cardInfo.id === id))!;

    useEffect(() => {
        for (let i = 0; i < 2; i++) {
            if (sizes[i]) {
                setPizzaSize(sizes[i]!)
            }
        }
        if (!doughs[0])
            setDoughType('thin');
        else
            setDoughType('traditional');

    }, []);

    const handleTraditionalDough = (e: React.MouseEvent<HTMLSpanElement>): void => {
        if (doughType === 'traditional' || !doughs[0]) {
            return;
        }
        setDoughType('traditional');
    }
    const handleThinDough = (e: React.MouseEvent<HTMLSpanElement>): void => {
        if (doughType === 'thin' || !doughs[1]) {
            return;
        }
        setDoughType('thin');
    }

    const handleSmallPizza = (e: React.MouseEvent<HTMLSpanElement>): void => {
        if (pizzaSize === 'small' || !sizes[0]) {
            return;
        }
        setPizzaSize('small');
    }
    const handleMediumPizza = (e: React.MouseEvent<HTMLSpanElement>): void => {
        if (pizzaSize === 'medium' || !sizes[1]) {
            return;
        }
        setPizzaSize('medium');
    }
    const handleBigPizza = (e: React.MouseEvent<HTMLSpanElement>): void => {
        if (pizzaSize === 'big' || !sizes[2]) {
            return;
        }
        setPizzaSize('big');
    }

    return (
        <ProductContainer>
            <ProductContent>
                <Image size={pizzaSize}>
                    <img
                        src="https://dodopizza-a.akamaihd.net/static/Img/Products/8ded98610a684516974bf460eb328885_760x760.jpeg"
                        alt=""/>
                </Image>
                <LeftSidebarContainer>
                    <ProductInfo>
                        <ProductName>Фристайло</ProductName>
                        <ProductDescription>
                            <span>{pizzaSize === 'small' ? '25см' : pizzaSize === 'medium' ? '30см' : '35см'}</span>,
                            <span>{doughType === 'traditional' ? ' традиционное' : ' тонкое'}</span>,
                            <span>{pizzaSize === 'small' ? ' 400г' : pizzaSize === 'medium' ? ' 590г' : ' 780г'}</span>
                        </ProductDescription>
                        <PizzaCard
                            handleSmallPizza={handleSmallPizza}
                            handleBigPizza={handleBigPizza}
                            handleMediumPizza={handleMediumPizza}
                            pizzaSize={pizzaSize}
                            handleTraditionalDough={handleTraditionalDough}
                            handleThinDough={handleThinDough}
                            doughType={doughType}
                            id={id}/>
                    </ProductInfo>
                    <AddToCartButton>Добавить в корзину</AddToCartButton>
                </LeftSidebarContainer>
                <CloseButton width="25" height="25" viewBox="0 0 25 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
                          fill="white"/>
                </CloseButton>
            </ProductContent>
        </ProductContainer>
    );
};

export default ProductCard;
