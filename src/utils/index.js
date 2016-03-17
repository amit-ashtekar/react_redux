import React from 'react';
import {pushState} from 'redux-router';


export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}





export function navigateTo(routeName){
    return function(dispatch) {

        dispatch(pushState(null, "/"+routeName));
    }
}

export function parseJSON(response) {
     return response.json()


}
