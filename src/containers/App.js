import React from 'react';
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutAndRedirect} from '../actions';
import {CheckoutSummary} from '../views'

import '../styles/core.scss';


export default class CoreLayout extends React.Component {

    render () {

        const {dispatch} = this.props;

        return (
            <div>
            <div className="navbar navbar-fixed-top navbar-inverse" role="navigation" >
        <div className="container" >
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only" >Toggle navigation</span><span className="icon-bar" ></span><span className="icon-bar" ></span><span className="icon-bar"></span>
        </button>

        </div>
        <div className="collapse navbar-collapse" >
        <ul className="nav navbar-nav" >
        <li className="active" >   <Link className="navbar-brand" to="/">Home</Link></li>
        <li><Link className="navbar-brand" to="/login">Login</Link></li>
        </ul>
        {this.props.statusText && this.props.isAuthenticated && <CheckoutSummary count={this.props.addeditemsCount}/>}
        </div>
        </div>
        </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated   : state.login.isAuthenticated,
    statusText         : state.login.message,
    addeditemsCount:state.AddedItemsCount.length
});

export default connect(mapStateToProps)(CoreLayout);