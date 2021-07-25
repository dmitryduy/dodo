import React, { Dispatch, FC, SetStateAction } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Title, TitleText, Search, MainCities } from "./CitiesPopup.styles";

import DodoIcon from "../containers/DodoIcon";
import City from "../DeliveryTooltip/City/City";

import Modal from "../Modal/Modal";
import Cities from "../Cities/Cities";
import FlexContainer from "../containers/FlexContainer";

interface CitiesPopupProps {
    setModal: Dispatch<SetStateAction<boolean>>;
    isModalOpen: boolean;
}


const CitiesPopup: FC<CitiesPopupProps> = ({setModal, isModalOpen}) => {
    const {countPizzeria, countCountries} = useTypedSelector(state => state.delivery);

    return (
        <Modal padding='20px' direction='column' cb={setModal} value={isModalOpen}>
            <Title>
                <DodoIcon width={50} height={50}/>
                <TitleText>{countPizzeria} пиццерии в {countCountries} странах</TitleText>
            </Title>
            <Search placeholder='Поиск...'/>
            <MainCities>
                <City>Москва</City>
                <City>Санкт-Петербург</City>
            </MainCities>
            <FlexContainer width='100%' height='65%' justify='space-between' overflowX>
                <Cities/>
            </FlexContainer>
        </Modal>
    )
}

export default CitiesPopup;