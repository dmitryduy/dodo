import {DeliveryActionTypes, ISetCurrentCity} from "../../types/delivery";


export const setCurrentCity = (cityName: string): ISetCurrentCity => ({
    type: DeliveryActionTypes.SET_CURRENT_CITY,
    payload: cityName
})