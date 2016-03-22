/**
 * Created by amita on 3/18/2016.
 */

import React, {PropTypes } from 'react';
import {ItemList} from '../views'
import {Item} from '../views'
import {bindActionCreators} from 'redux';
import * as itemActionCreators from '../webServices/itemService';
import * as itemAddActionCreators from '../actions/itemActions';
import {connect} from 'react-redux';

export default class ItemContainer extends React.Component {
    componentWillMount (){
      this.props.itemactions.getItems();
    }
    render() {
        const { products,addeditemsId } = this.props
        return (
            <ItemList >
        {products.map(product =>
        <Item
        key={product.id}
    product={product}
    addedItemId={addeditemsId}
        itemAddAction={this.props.itemAddActionCreators.addItemToCart}
     />
)}
</ItemList>
)
}
}
const mapStateToProps = (state) => ({
    products   : state.Items[0],
    addeditemsId:state.AddedItemsCount,

});
const mapDispatchToProps = (dispatch) => ({
      itemactions : bindActionCreators(itemActionCreators, dispatch),
    itemAddActionCreators: bindActionCreators(itemAddActionCreators, dispatch)
})

ItemContainer.defaultProps ={
    products:[],
    addeditemsId:0

}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
