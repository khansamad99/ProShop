import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productReducers,productDetailsReducers} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const cartItemStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];

const reducer = combineReducers({
    productList:productReducers,
    productDetails:productDetailsReducers,
    cart:cartReducer
});

const initState = {
    cart:{cartItems:cartItemStorage}
};
const middleware = [thunk];
const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;