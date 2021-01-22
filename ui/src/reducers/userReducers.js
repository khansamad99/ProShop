import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from '../constants/userConstants'

export const userLoginReducer = (state={products:[]},action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true,userinfo:[]}
        case USER_LOGIN_SUCCESS:
            return {loading:false,userinfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:    
            return state
    }
}

