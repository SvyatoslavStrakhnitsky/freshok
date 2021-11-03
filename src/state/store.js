import {combineReducers, createStore} from "redux";
import {productsReducer} from "./products-reducer";
import {cartReducer} from "./cart-reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})

export const store = createStore(rootReducer)

window.store = store