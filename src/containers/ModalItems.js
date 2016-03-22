/**
 * Created by amita on 3/21/2016.
 */


import React from 'react';
import {ModalItemList} from '../views'
import {ModalItem} from '../views'
import {bindActionCreators} from 'redux';
import * as itemActionCreators from '../webServices/itemService';
import * as itemAddActionCreators from '../actions/itemActions';
import {connect} from 'react-redux';

export default class ModalItemContainer extends React.Component {
    componentWillMount (){
        this.props.itemactions.ModalItems(this.props.addeditemsId);
    }
    checkArray(arr1,arr2){

            if(arr1.length !== arr2.length)
                return false;
            for(var i = arr1.length; i--;) {
                if(arr1[i] !== arr2[i])
                    return false;
            }

            return true;

    }
    componentWillReceiveProps(nextProps){
//if(this.checkArray(nextProps.addeditemsId,this.props.addeditemsId))
    //   nextProps.itemAddActionCreators.getAddedCartItem(this.props.addeditemsId,this.props.products)
    }
    render() {
        const { addedItems } = this.props
        return (
        <div className="box">
            <ModalItemList >
            {addedItems.map(product =>
            <ModalItem
        key={product.id}
    product={product}
            removeItem={this.props.itemAddActionCreators.removeItemFromCart}

/>
)}
</ModalItemList>
    </div>

)
}
}
const mapStateToProps = (state) => ({
    products   : state.Items[0],
    addeditemsId:state.AddedItemsCount,
    addedItems:state.GetCartAddedItems

});
const mapDispatchToProps = (dispatch) => ({
    itemactions : bindActionCreators(itemActionCreators, dispatch),
    itemAddActionCreators: bindActionCreators(itemAddActionCreators, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ModalItemContainer);
