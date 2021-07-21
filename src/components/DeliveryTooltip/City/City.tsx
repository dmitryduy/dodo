import {FC} from "react";

import {CityContainer} from "./City.styles";

interface CityProps {
    children: string;
    newLetter?: string;
}

const City: FC<CityProps> = ({children, newLetter}) => {
    if (newLetter) {
        return <CityContainer letter={newLetter || ''}>{children}</CityContainer>
    }
    return <li>{children}</li>;
}

export default City;