import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App,ItemContainer} from '../containers';
import {HomeView, LoginView,CheckoutSummary,Item} from '../views';
import {requireAuthentication} from '../components/AuthenticatedComponent';

export default(
    <Route path='/' component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="login" component={LoginView}/>
         <Route path="item" component={Item}/>
<Route path="itemcontainer" component={ItemContainer}/>
    </Route>
);
