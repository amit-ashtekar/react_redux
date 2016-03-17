import React from 'react/addons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import * as loginactionCreators from '../webServices';


export class LoginView extends React.Component {

  constructor(props) {
    debugger;
    super(props);
    const redirectRoute = this.props.location.query.next || '/login';
    this.state = {
      email: '',
      password: '',
      redirectTo: redirectRoute
    };
  }
  componentWillReceiveProps(nextProps){
    debugger;
    var prp=nextProps;
  }

  handleClick(e) {
      e.preventDefault();
    const username = this.refs.username.value
    const password = this.refs.password.value
      this.props.loginactions.login(username,password, 'redirectPath');
  }

  render () {
    return (
        <div>
        <input type='text' ref='username' className="form-control"  placeholder='Username'/>
    <input type='text' ref='password' className="form-control"  placeholder='Password'/>
    <button onClick={(e)=>this.handleClick(e)} className="btn btn-primary"  > Login
    </button>

    { this.props.statusText && !this.props.isAuthenticated ?
<div className='alert alert-info'>Invalid Credentials</div>
 :''
}

</div>
    );
  }
}



const mapStateToProps = (state) => ({
  isAuthenticating   : state.login.isAuthenticating,
  isAuthenticated    : state.login.isAuthenticated,
  statusText         : state.login.message
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch),
  loginactions : bindActionCreators(loginactionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
