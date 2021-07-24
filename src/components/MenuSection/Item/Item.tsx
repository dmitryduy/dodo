import React, { FC, useState } from 'react';
import { ItemContainer, Image, Title, Description, Footer, Price, Content } from './Item.styles';
import OrderButton from './OrderButton/OrderButton';
import { IProductCard } from "../../../types/product";
import ProductCard from "../../ProcuctCard/ProductCard";

interface ItemProps {
    product: IProductCard;
}

const Item: FC<ItemProps> = ({product}) => {
    const [productCardOpen, setProductCardOpen] = useState<boolean>(false);

    const handleProductCard = (e: React.MouseEvent<HTMLButtonElement| HTMLImageElement>): void =>{
        setProductCardOpen(true);
    }

    return (
        <ItemContainer>
            {productCardOpen && <ProductCard id={product.id}/>}
            <Content>
                <Image onClick={handleProductCard} title={product.title} src={product.imageUrl} alt={product.title}/>
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
            </Content>
            <Footer>
                <Price>от {product.lowestPrice}₽</Price>
                <OrderButton onClick={handleProductCard} disabled={product.disabled}/>
            </Footer>
        </ItemContainer>
    );
};

export default Item;
