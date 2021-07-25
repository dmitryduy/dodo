import React, { FC, useState } from 'react';
import {Image, Price, Name, AdditiveCardContainer} from "./AdditiveCard.styles";
import selectedImage from "../../assets/images/selectedAdditives.png";
import { IAdditive } from "../../products";

const AdditiveCard: FC<IAdditive & {currentPrice: number}> = ({currentPrice, disabled, imageUrl, price, name}) => {
    const [toggleSelected, setToggleSelected] = useState<boolean>(false);

    const handleSelectCard = (e: React.MouseEvent<HTMLDivElement>): void => {
        setToggleSelected(prev => !prev);
    }
    return (
        <AdditiveCardContainer disabled={disabled} selected={toggleSelected} selectedImg={selectedImage} onClick={handleSelectCard}>
            <div style={{flex: '1 0 auto'}}>
                <Image
                    src={imageUrl} alt={name}/>
                <Name>{name}</Name>
            </div>
            <Price>{currentPrice}Р</Price>
        </AdditiveCardContainer>
    );
};

export default AdditiveCard;
