import {FC} from "react";

import {ICity} from "../../../types/delivery";
import City from "../../DeliveryTooltip/City/City";
import {ColumnContainer} from "./Column.styles";

interface ColumnProps {
    cities: Array<ICity>;
}


const Column: FC<ColumnProps> = ({cities}) => {
    let letter: null | string = null;
    return (
        <ColumnContainer>
            {cities.map((city, index) => {
                if (!letter) letter = city.city[0];
                if (city.city[0] !== letter) {
                    letter = city.city[0];
                    return (
                        <City key={index} newLetter={city.city[0]}>{city.city}</City>
                    )
                }
                return <City key={index}>{city.city}</City>
            })}
        </ColumnContainer>
    )
}

export default Column;
