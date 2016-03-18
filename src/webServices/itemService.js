/**
 * Created by amita on 3/18/2016.
 */
import {receiveProducts,receiveProductsFail} from '../actions/itemActions';

export function getItems(){
    return function (dispatch) {
        let config={
            method: 'GET',
            headers: {  'Content-Type': 'application/json', 'Accept': 'application/json','authorization':'151561vdfvdbdbdb1561fdbdf' }
        };
      
        return fetch('http://localhost:3000/getItems/',config)
                .then(res=> res.json())
                .then(resJson=> {
                    console.log("getItems: ",resJson)
                    dispatch(receiveProducts(resJson))


                }).catch(err=>{
        debugger;
                    dispatch(receiveProductsFail(err));
})

}
}
