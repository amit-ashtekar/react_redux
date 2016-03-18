/**
 * Created by amita on 3/18/2016.
 */
import { ADD_TO_CART,CHECKOUT_REQUEST,CHECKOUT_SUCCESS,CHECKOUT_FAILURE,RECEIVE_PRODUCTS,RECEIVE_PRODUCTSFAIL} from '../../constants/checkoutConstants'
import {createConstants} from '../../utils';
const InitialState={
    items:[],
    addedItems:{
        item:[]
    }
}
export function Items(state = InitialState.items, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return[
                ...state,
                action.products
            ]
        default:

            return[
                ...state
            ]
    }
}

export function AddedItemsCount(state = InitialState.addedItems.item, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return[
                ...state,
                action.itemid
                 ]
        default:

            return[
                ...state
                 ]
    }
}
