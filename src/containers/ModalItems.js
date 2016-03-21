/**
 * Created by amita on 3/21/2016.
 */
/**
 * Created by amita on 3/18/2016.
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
        this.props.itemactions.getItems();
    }
    componentWillReceiveProps(nextProps){
if(!nextProps.addedItems.length>0)
       nextProps.itemAddActionCreators.getAddedCartItem(this.props.addeditemsId,this.props.products)
    }
    render() {
        const { addedItems } = this.props
        return (

            <ModalItemList >
            {addedItems.map(product =>
            <ModalItem
        key={product.id}
    product={product}

/>
)}
</ModalItemList>

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
