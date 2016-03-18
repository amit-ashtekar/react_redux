/**
 * Created by amita on 3/17/2016.
 */
import React, {PropTypes } from 'react'

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    onAddToCartClicked(e,id){
        e.preventDefault();
        this.props.itemAddAction(id)
       // alert('onAddToCartClicked called')
    }
    render() {

        const {id, price, quantity, title } = this.props.product

        return (
            <div> {id}:{title} - &#36;{price} {quantity ? `x ${quantity}` : null}
                <button
                    onClick={(e)=>this.onAddToCartClicked(e,id)} >
                    Add to cart
                </button>
                </div>
            )
    }
}

Item.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
}
Item.defaultProps = {
    price: 0,
    quantity:0,
    title:'Item testing'
    };