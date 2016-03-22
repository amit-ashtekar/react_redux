/**
 * Created by amita on 3/20/2016.
 */

import React, {PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import * as loginactionCreators from '../webServices';


export default class ModalItem extends React.Component {

    constructor(props) {

        super(props);


    }
    componentWillReceiveProps(nextProps){

    }

    handleRemove(e,id) {
        this.props.removeItem(id)
    }

    render () {
        const {id, price, quantity, title } = this.props.product
        const tdstyle = {
            'padding-top': '2%'
        };
        return (
                <table>

            <tr  >
            <td className="col-sm-9 col-md-9" style={tdstyle}>

    <h4 className="media-heading">
    {title}
</h4>

</td>
<td className="col-sm-1 col-md-1">
<strong>{price}</strong>
</td>
<td className="col-sm-1 col-md-1" >
<button type="button" className="btn btn-danger" onClick={(e)=>this.handleRemove(e,id)}>
<span className="glyphicon glyphicon-remove"></span> Remove
</button>
</td>
</tr>

        </table>


                );
                }
                }



ModalItem.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
}
ModalItem.defaultProps = {
    price: 0,
    quantity:0,
    title:'Item testing'
};

