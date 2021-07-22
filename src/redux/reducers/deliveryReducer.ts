import {DeliveryAction, DeliveryActionTypes, DeliveryState} from "../../types/delivery";
import cities from "../../cities";

const initialState: DeliveryState = {
    cities: cities,
    currentCity: {
        city: "Санкт-Петербург",
        rating: 5,
        deliveryTime: 43
    },
    countCountries: 15,
    countPizzeria: 452
}

const deliveryReducer = (state = initialState, action: DeliveryAction): DeliveryState => {
    switch (action.type) {
        case DeliveryActionTypes.SET_CURRENT_CITY:
            return {
                ...state,
                currentCity: state.cities.find(city => city.city === action.payload)!
            };
        default:
            return state;
    }

}

export default deliveryReducer;