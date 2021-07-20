import {DeliveryState} from "../../types/delivery";
import cities from "../../cities";

const initialState: DeliveryState = {
    cities: cities,
    currentCity: {
        city: "Санкт-Петербург",
        rating: 5,
        deliveryTime: 43
    }
}

const deliveryReducer = (state = initialState, action: any): DeliveryState => {
    return state;
}

export default deliveryReducer;