/**
 * Created by amita on 3/17/2016.
 */
import React,{ PropTypes } from 'react';
import {ModalItemContainer} from '../containers'
import  Modal from 'react-modal';


export default class CheckoutSummary extends React.Component {
    constructor(props) {
        super(props);
       this.customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
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

                <h2>Hello</h2>
                <button onClick={(e)=>this.closeModal(e)}>close</button>
                <div>I am a modal</div>
                <form>
<ModalItemContainer />
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

