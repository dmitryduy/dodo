import {combineReducers} from "redux";
import deliveryReducer from "./deliveryReducer";

export const rootReducer = combineReducers({
    delivery: deliveryReducer,
})




export type rootState = ReturnType<typeof rootReducer>;