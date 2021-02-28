import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productReducers,productDetailsReducers, productDeleteReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer,userListReducer, userDeleteReducer} from './reducers/userReducers';
import {orderCreateReducer,orderDetailsReducer, orderListMyReducer, orderPayReducer} from './reducers/orderReducer';

const cartItemStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}        

const reducer = combineReducers({
    productList:productReducers,
    productDetails:productDetailsReducers,
    productDelete:productDeleteReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateProfileReducer
});

const initState = {
    cart: {
    cartItems: cartItemStorage,
    shippingAddress: shippingAddressFromStorage,
  },
    userLogin:{userInfo:userInfoFromStorage},
};

const middleware = [thunk];
const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;