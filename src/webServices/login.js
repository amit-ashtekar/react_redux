/**
 * Created by amita on 3/15/2016.
 */

import {loginRequest,loginFail,loginSuccess,logout} from '../actions';
import { pushState } from 'redux-router';

export function login(username,password){
    return function (dispatch) {
        let config={
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {  'Content-Type': 'application/json', 'Accept': 'application/json' }
        };
        dispatch(loginRequest());
        return fetch('http://localhost:3000/auth/getToken',config)
                .then(res=>
            res.json()
        )
        .then(resJson=> {
            if(!resJson["access_token"])
        {
            dispatch(loginFail(resJson.message))
        }
        else{
            console.log("resppnse: ",resJson)
            localStorage.setItem("access_token",resJson.access_token)
            //localStorage.setItem("token_type",resJson.token_type)
            //localStorage.setItem("refresh_token",resJson.refresh_token)
            //localStorage.setItem("scope",resJson.scope)

            dispatch(loginSuccess(resJson))
            dispatch(pushState(null, '/search'));
        }
    }).catch(err=>{
        dispatch(loginFail({status:"403",message:err}));
                   })

}
}
