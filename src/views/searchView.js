/**
 * Created by amita on 3/16/2016.
 */

import React from 'react';
import {CheckoutSummary} from '../views'

export default class SearchView extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
            <div className="navbar navbar-fixed-top navbar-inverse" role="navigation" >
              <div className="container" ><div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only" >Toggle navigation</span><span className="icon-bar" ></span><span className="icon-bar" ></span><span className="icon-bar"></span>
             </button><a className="navbar-brand" href="#" >Fake Store for Bitcoin Testnet</a></div>
             <div className="collapse navbar-collapse" >
        <ul className="nav navbar-nav" >
        <li className="active" ><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        </ul>



        <CheckoutSummary/>
       </div></div></div>

            </div>
        )
    }
}
