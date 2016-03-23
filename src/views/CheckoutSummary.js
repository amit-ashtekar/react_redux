/**
 * Created by amita on 3/17/2016.
 */
import React,{ PropTypes } from 'react';
import {ModalItemContainer} from '../containers'
import  Modal from 'react-modal';
import {Button} from 'react-bootstrap';

export default class CheckoutSummary extends React.Component {
    constructor(props) {
        super(props);
       this.customStyles = {
            content : {
                position                   : 'absolute',
                top                        : '40px',
                left                       : '40px',
                right                      : '40px',
                bottom                     : '40px',
                border                     : '1px solid #ccc',
                background                 : '#fff',
                overflow                   : 'auto',
                WebkitOverflowScrolling    : 'touch',
                borderRadius               : '4px',
                outline                    : 'none',
                padding                    : '20px'
            }
        };
        this.state = {
            products: [],
            modalIsOpen: false
        };
    }
    openModal(e) {
        debugger;
        e.preventDefault();
        this.setState({modalIsOpen: true});
    }

    closeModal(e) {
        e.preventDefault();
        this.setState({modalIsOpen: false});
    }
    render () {
        return (

            <span>

            <ul className="nav navbar-nav navbar-right" >
            <li >
            <a href="#cart" ><span className="glyphicon glyphicon-shopping-cart" ></span><span className="badge" >{this.props.count}</span>
            <span onClick={(e)=>this.openModal(e)}>Checkout</span>
                <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={this.customStyles} >

                <h2 className="text-center">Cart</h2>



                <form>
<table className="table table-hover">
<thead>
<tr>
<th className="col-sm-4 col-md-4">
    <h4>
Item
    </h4>
</th>
<th className="col-sm-1 col-md-1">
    <h4>
Price
    </h4>
</th>
</tr>
</thead>
<tbody>
    </tbody>
    </table>
<ModalItemContainer />
<footer>
<div className="container">
<div className="row">
<div className="col-lg-12">
<Button className="pull-right" active onClick={(e)=>this.closeModal(e)}>Close</Button>
</div>
</div>
</div>
</footer>
                </form>


                </Modal>
            </a></li>

             </ul>
            </span>
    );
    }

}

CheckoutSummary.propTypes = {
    children: PropTypes.node
}

