import React, { FC, useState } from 'react';
import {
    Image,
    ProductName,
    ProductDescription,
    ProductInfo,
    AddToCartButton,
    LeftSidebarContainer
} from "./ProcuctCard.styles";
import PizzaCard from "../PizzaCard/PizzaCard";
import useHandlePizza, { ProductContext } from "../../hooks/useHandlePizza";
import Modal from "../Modal/Modal";

interface ProductCardProps {
    id: number;
    setProductCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
    productCardOpen: boolean;
}

const ProductCard: FC<ProductCardProps> = ({id, setProductCardOpen, productCardOpen}) => {
    const {doughType, handlePizza, pizzaSize, pizzaCard, totalPrice, setTotalPrice} = useHandlePizza(id);

    return (
        <ProductContext.Provider value={{doughType, handlePizza, pizzaSize, pizzaCard, totalPrice, setTotalPrice}}>
            <Modal padding='0' direction='row' cb={setProductCardOpen} value={productCardOpen}>
                <Image size={pizzaSize}>
                    <img src={pizzaCard.cardInfo.imageUrl} alt={pizzaCard.cardInfo.title}/>
                </Image>
                <LeftSidebarContainer>
                    <ProductInfo>
                        <ProductName>{pizzaCard.cardInfo.title}</ProductName>
                        <ProductDescription>
                            <span>{pizzaSize === 'small' ? '25см' : pizzaSize === 'medium' ? '30см' : '35см'}</span>,
                            <span>{doughType === 'traditional' ? ' традиционное' : ' тонкое'}</span>,
                            <span>{pizzaSize === 'small' ? ' 400г' : pizzaSize === 'medium' ? ' 590г' : ' 780г'}</span>
                        </ProductDescription>
                        <PizzaCard/>
                    </ProductInfo>
                    <AddToCartButton>Добавить в корзину за {totalPrice}₽</AddToCartButton>
                </LeftSidebarContainer>
            </Modal>
        </ProductContext.Provider>
    );
};

export default ProductCard;
