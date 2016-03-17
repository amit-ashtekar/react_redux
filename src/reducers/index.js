

import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import {login} from '../reducers/login_logout/loginlogout';

export default combineReducers({
 login,
 router:routerStateReducer
})


