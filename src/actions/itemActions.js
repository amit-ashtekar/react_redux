/**
 * Created by amita on 3/18/2016.
 */
import { ADD_TO_CART,CHECKOUT_REQUEST,CHECKOUT_SUCCESS,CHECKOUT_FAILURE,RECEIVE_PRODUCTS,RECEIVE_PRODUCTSFAIL,GET_ADDED_CART_ITEMS,REMOVE_FROM_CART} from '../constants/checkoutConstants'


export function receiveProducts(items) {
    return {
         type:RECEIVE_PRODUCTS,
        products: items
    }
}
export function receiveProductsFail(err){
    return {
        type:RECEIVE_PRODUCTSFAIL,
        productError:err
    }
}
export function addItemToCart(itemId){
    return {
        type:ADD_TO_CART,
        itemid:itemId
    }
}

export function getAddedCartItem(itemArr,items){
    return{
        type:GET_ADDED_CART_ITEMS,
        itemArr:itemArr,
        items:items
    }
}

export function removeItemFromCart(itemId){
    return {
        type:REMOVE_FROM_CART,
        itemid:itemId
    }
}

