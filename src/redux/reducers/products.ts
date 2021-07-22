import {IProducts, products} from "../../products";

const initialState: IProducts = {
    pizzas: products.pizzas
}

const productsReducer = (state=initialState, action: any): IProducts => {
    return state;
}

export default productsReducer;