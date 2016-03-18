/**
 * Created by amita on 3/18/2016.
 */
import { ADD_TO_CART,CHECKOUT_REQUEST,CHECKOUT_SUCCESS,CHECKOUT_FAILURE,RECEIVE_PRODUCTS,RECEIVE_PRODUCTSFAIL} from '../constants/checkoutConstants'


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