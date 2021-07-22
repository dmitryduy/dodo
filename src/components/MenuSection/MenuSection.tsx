import React, {FC} from 'react';
import {MenuSectionContainer, Title } from './MenuSection.stiles';
import Container from "../containers/Container";

interface MenuSectionProps {
    title: string;
}

const MenuSection:FC<MenuSectionProps> = ({title, children}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <MenuSectionContainer>
                {children}
            </MenuSectionContainer>
        </Container>
    );
};

export default MenuSection;
