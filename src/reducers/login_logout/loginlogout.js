/**
 * Created by amita on 3/15/2016.
 */

import {LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT} from '../../constants/loginConstants'

export function login(state={ isAuthenticated: false, token: null,message:''},action){

    switch(action.type){
        case "LOGIN_REQUEST": return Object.assign({},state,{
            isAuthenticating: true,
            message: null
        })
        case LOGIN_FAILURE: return Object.assign({},state,{
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
            message: action.payload.status+': '+action.payload.statusText
        })
        case LOGIN_SUCCESS: return Object.assign({},state,{
            isAuthenticating: false,
            isAuthenticated: true,
            token: action.payload.accessToken,
            message: 'Login Successful'
        })
        case LOGOUT: return Object.assign({},state,{
            isAuthenticated: false,
            token: null,
            message: 'Logout Successful'
        })
        default: return state;
    }
}
