import React, { Dispatch, FC, SetStateAction } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Title, TitleText, Search, MainCities } from "./CitiesPopup.styles";

import DodoIcon from "../containers/DodoIcon";
import City from "../DeliveryTooltip/City/City";
import FlexContainer from "../containers/FlexContainer";
import { ICity } from "../../types/delivery";
import cities from "../../cities";
import Column from "./Column/Column";
import Modal from "../Modal/Modal";


const sortedArray: Array<ICity> = cities.sort((a, b) => a.city > b.city ? 1 : -1)
    .filter(city => city.city !== 'Оспаривается');
const arraySize: number = sortedArray.length;

interface CitiesPopupProps {
    setModal: Dispatch<SetStateAction<boolean>>;
    isModalOpen: boolean;
}


const CitiesPopup: FC<CitiesPopupProps> = ({setModal, isModalOpen}) => {
    const {countPizzeria, countCountries} = useTypedSelector(state => state.delivery);
    const citiesPurColumn = Math.ceil(arraySize / 3);

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
                <Column cities={sortedArray.slice(0, citiesPurColumn)}/>
                <Column cities={sortedArray.slice(citiesPurColumn, 2 * citiesPurColumn)}/>
                <Column cities={sortedArray.slice(2 * citiesPurColumn)}/>
            </FlexContainer>
        </Modal>
    )
}

export default CitiesPopup;