import {LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT} from '../constants/loginConstants'

export function loginRequest(){
    return {
        type:LOGIN_REQUEST

    }
}

export function loginSuccess(accessToken){
    console.log('accessToken',accessToken);
    return {
        type:LOGIN_SUCCESS,
        payload:{
            accessToken:accessToken
        }
    }
}

export function loginFail(errorObj){
    console.log('errorObj',errorObj);
    return {
        type:LOGIN_FAILURE,
        payload:{
            status:errorObj.status,
            statusText:errorObj.message
        }
    }

}

export function logout(){
    return {
        type:LOGOUT
    }
}
