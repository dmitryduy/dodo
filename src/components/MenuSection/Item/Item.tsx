import React, {FC} from 'react';
import { ItemContainer, Image, Title, Description, Footer, Price, Content } from './Item.styles';
import OrderButton from './OrderButton/OrderButton';
import {IProductCard} from "../../../types/product";

interface ItemProps {
    product: IProductCard;
}

const Item:FC<ItemProps> = ({product}) => {
    return (
        <ItemContainer>
            <Content>
                <Image title={product.title} src={product.imageUrl} alt={product.title}/>
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
            </Content>
            <Footer>
                <Price>от {product.lowestPrice}₽</Price>
                <OrderButton disabled={product.disabled}/>
            </Footer>
        </ItemContainer>
    );
};

export default Item;
