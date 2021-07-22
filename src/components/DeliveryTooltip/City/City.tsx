import React, {FC} from "react";

import {CityContainer} from "./City.styles";
import {useDispatch} from "react-redux";
import {setCurrentCity} from "../../../redux/Actions/deliveryAction";

interface CityProps {
    children: string;
    newLetter?: string;
}

const City: FC<CityProps> = ({children, newLetter}) => {
    const dispatch = useDispatch();

    const changeCity = (e: React.MouseEvent<HTMLLIElement>): void => {
        dispatch(setCurrentCity((e.target as HTMLElement).textContent!));
    }

    if (newLetter) {
        return <CityContainer onClick={changeCity} letter={newLetter || ''}>{children}</CityContainer>
    }
    return <li onClick={changeCity}>{children}</li>;
}

export default City;