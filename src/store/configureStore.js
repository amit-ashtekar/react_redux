import mainReducer from '../reducers';
import thunk from 'redux-thunk';
import routes from '../routes';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';

export default function configureStore(initialState) {
    let finalStore = compose(
        applyMiddleware(thunk, logger()),
        reduxReactRouter({routes, createHistory}),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    return  finalStore(createStore)(mainReducer, initialState);

}