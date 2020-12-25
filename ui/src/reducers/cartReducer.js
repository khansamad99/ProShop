import {CART_ADD_ITEM} from '../constants/cartConstants';


export const cartReducer = (state={cartItems:[]},action) => {
    switch(action.type){
        case CART_ADD_ITEM:
                const items = action.payload;

                const exist = state.cartItems.find(x => x.product === items.product)

                if(exist){
                    return {
                        ...state,
                        cartItems:state.cartItems.map(x => x.product === exist.product ? item:x)
                    }
                }
                else {
                    return {
                        ...state,
                        cartItems:[...state.cartItems,item]
                    }
                }
        
        default:
            return state;
    }
}