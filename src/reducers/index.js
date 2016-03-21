

import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import {login} from '../reducers/login_logout/loginlogout';
import {Items,AddedItemsCount,GetCartAddedItems} from '../reducers/items/items'

export default combineReducers({
 login,
 Items,
 AddedItemsCount,
 GetCartAddedItems,
 router:routerStateReducer
})


