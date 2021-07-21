import React, {Dispatch, FC, SetStateAction, useRef} from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Popup, PopupContent, CloseButton, Title, TitleText, Search, MainCities} from "./CitiesPopup.styles";

import DodoIcon from "../containers/DodoIcon";
import City from "../DeliveryTooltip/City/City";
import FlexContainer from "../containers/FlexContainer";
import {ICity} from "../../types/delivery";
import cities from "../../cities";
import Column from "./Column/Column";


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
    const closeButtonRef = useRef<SVGSVGElement | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const closePopup = (e: React.MouseEvent<HTMLDivElement>): void => {
        console.log((e.nativeEvent as MouseEvent).composedPath())
        if ((e.nativeEvent as MouseEvent).composedPath().includes(closeButtonRef.current as EventTarget)
            || ((e.nativeEvent as MouseEvent).composedPath().includes(popupRef.current as EventTarget)) && !(e.nativeEvent as MouseEvent).composedPath().includes(contentRef.current as EventTarget)) {
            setModal(false);
        }
    }

    return (
        <Popup ref={popupRef} onClick={closePopup} className={isModalOpen ? 'open' : 'close'}>
            <PopupContent ref={contentRef}>
                <CloseButton ref={closeButtonRef} width="25" height="25" viewBox="0 0 25 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
                          fill="white"/>
                </CloseButton>
                <Title>
                    <DodoIcon width={50} height={50}/>
                    <TitleText>{countPizzeria} пиццерии в {countCountries} странах</TitleText>
                </Title>
                <Search placeholder='Поиск...'/>
                <MainCities>
                    <City>Москва</City>
                    <City>Санкт-Петербург</City>
                </MainCities>
                <FlexContainer width='100%' height='65%' justify='space-between' overflowY>
                    <Column cities={sortedArray.slice(0, citiesPurColumn)}/>
                    <Column cities={sortedArray.slice(citiesPurColumn, 2 * citiesPurColumn)}/>
                    <Column cities={sortedArray.slice(2 * citiesPurColumn)}/>
                </FlexContainer>
            </PopupContent>
        </Popup>
    )
}

export default CitiesPopup;