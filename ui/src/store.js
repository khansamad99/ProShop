import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productReducers,productDetailsReducers} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
import {userLoginReducer,userRegisterReducer} from './reducers/userReducers';

const cartItemStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null

const reducer = combineReducers({
    productList:productReducers,
    productDetails:productDetailsReducers,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
});

const initState = {
    cart:{cartItems:cartItemStorage},
    userLogin:{userInfo:userInfoFromStorage},
};

const middleware = [thunk];
const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;