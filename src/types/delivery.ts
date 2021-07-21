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