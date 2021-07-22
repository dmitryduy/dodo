export interface ICity {
    city: string;
    deliveryTime: number;
    rating: number;
}

export interface DeliveryState {
    cities: Array<ICity>;
    currentCity: ICity;
    countCountries: number;
    countPizzeria: number;
}

export enum DeliveryActionTypes {
    SET_CURRENT_CITY='delivery/SET_CURRENT_CITY',
}

export interface ISetCurrentCity {
    type: DeliveryActionTypes.SET_CURRENT_CITY;
    payload: string;
}

export type DeliveryAction = ISetCurrentCity;