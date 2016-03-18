/**
 * Created by amita on 3/18/2016.
 */

import React from 'react';
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
        const { products } = this.props
        return (
            <ItemList >
        {products.map(product =>
        <Item
        key={product.id}
    product={product}
        itemAddAction={this.props.itemAddActionCreators.addItemToCart}
     />
)}
</ItemList>
)
}
}
const mapStateToProps = (state) => ({
    products   : state.Items[0]

});
const mapDispatchToProps = (dispatch) => ({
      itemactions : bindActionCreators(itemActionCreators, dispatch),
    itemAddActionCreators: bindActionCreators(itemAddActionCreators, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
