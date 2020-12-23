import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productReducers,productDetailsReducers} from './reducers/productReducer';

const reducer = combineReducers({
    productList:productReducers,
    productDetails:productDetailsReducers
});

const initState = {};
const middleware = [thunk];
const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;