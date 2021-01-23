import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGIN_FAIL} from '../constants/userConstants';
import axios from "axios";
export const login = (email,password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        console.log(email);
        const {data} = await axios.post(`/api/users/login`,{email,password},config)
        console.log(data)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL,payload:error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}