import {combineReducers} from "redux";
import deliveryReducer from "./deliveryReducer";
import productsReducer from "./products";

export const rootReducer = combineReducers({
    delivery: deliveryReducer,
    products: productsReducer
})




export type rootState = ReturnType<typeof rootReducer>;