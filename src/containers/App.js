import React from 'react';
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutAndRedirect} from '../actions';

import '../styles/core.scss';


export default class CoreLayout extends React.Component {

    render () {

        const {dispatch} = this.props;

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Home</Link>
                            <Link className="navbar-brand" to="/login">Login</Link>
                            <Link className="navbar-brand" to="/search">Search</Link>
                        </div>

                    </div>
                </nav>
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
    statusText         : state.login.message
});

export default connect(mapStateToProps)(CoreLayout);