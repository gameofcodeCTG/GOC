import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';
import {servicecategories, services, communes, quartiers, messages} from './data/services';

const defaultState = {
    posts,
    comments,
    servicecategories,
    services,
    communes:{id:1},
    quartiers,
    messages
};


const store = createStore(rootReducer, defaultState,
        // Apply to store
        applyMiddleware(thunk)
        );

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

