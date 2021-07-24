import React, { FC, useState } from 'react';
import deleteFillingImage from "../../assets/images/deleteFilling.svg";
import deleteFillingActive from "../../assets/images/deleteFillingActive.svg";
import { FillingItemContainer } from './FillingItem.styles';

const FillingItem:FC<{name: string}> = ({name}) => {
    const [deleteFilling, setDeleteFilling] = useState<boolean>(false);

    const handleFilling = (e: React.MouseEvent<HTMLImageElement>): void =>{
        setDeleteFilling(prev => !prev);
    }
    return (
        <FillingItemContainer delete={deleteFilling}>
            <span>{name}</span>
            <img src={deleteFilling? deleteFillingActive: deleteFillingImage} onClick={handleFilling} alt="delete"/>
        </FillingItemContainer>
    );
};

export default FillingItem;
